import { useState, useContext } from 'react';

import FormInput from '../../Components/FormInput';
import Button from '../../Components/Button';

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from '../../Utils/firebase';
import UserContext from '../../Contexts/UserContext';

const SignInForm = () => {
    const defaultFormFields = { email: '', password: '' };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
       const res = await signInWithGooglePopup();
       const onSuccessRes = await createUserDocumentFromAuth(res?.user);
       console.log('##### USER CREATED SUCCESSFULLY #####', onSuccessRes);
       setUser(onSuccessRes);

    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const onSuccessRes = await signInAuthUserWithEmailAndPassword(email, password);
            console.log('##### USER CREATED SUCCESSFULLY #####', onSuccessRes);
            setUser(onSuccessRes);

            resetFormFields();
        } catch (error) {
            alert(error?.code ?? error?.message ?? 'Something went wrong.');
            console.log('user sign in failed', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return <div className='basic-sign-in-form-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
                autoComplete='off'
            />

            <FormInput
                label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
                autoComplete='off'
            />

            <div className='basic-buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button
                    buttonType='google'
                    type='button'
                    onClick={signInWithGoogle}
                >
                    Sign In With Google
                </Button>
            </div>
        </form>
    </div>;
};

export default SignInForm;
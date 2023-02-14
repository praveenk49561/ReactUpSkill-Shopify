import { useState, useContext } from 'react';
import FormInput from '../../Components/FormInput';
import Button from '../../Components/Button';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../Utils/firebase';
import UserContext from '../../Contexts/UserContext';


const SignUpForm = () => {
    const defaultFormFields = { displayName: '', email: '', password: '', confirmPassword: '' };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            if (password !== confirmPassword) { 
                alert('passwords do not match');
                return;
            }

            const res = await createAuthUserWithEmailAndPassword(email, password);
            const onSuccessRes = await createUserDocumentFromAuth({ ...res?.user, displayName });
            console.log('##### USER CREATED SUCCESSFULLY #####', onSuccessRes);
            setUser(onSuccessRes);
            resetFormFields();

        } catch (error) {
            alert(error?.code ?? error?.message ?? 'Something went wrong.');
            console.log('user creation encountered an error', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return <div className='basic-sign-up-form-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput
                label='Display Name'
                type='text'
                required
                onChange={handleChange}
                name='displayName'
                value={displayName}
                autoComplete='off'
            />

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

            <FormInput
                label='Confirm Password'
                type='password'
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
                autoComplete='off'
            />

            <Button type='submit'>Sign Up</Button>
        </form>
    </div>;
};

export default SignUpForm;
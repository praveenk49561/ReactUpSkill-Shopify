const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='basic-form-input-wrap'>
      <input className='basic-form-input' {...otherProps} />
      {label && 
        <label className={`${otherProps.value.length ? 'shrink' : ''} basic-form-input-label`}>
            {label}
        </label>}
    </div>
  ); 
};

export default FormInput;
const FormErrorMsg = ({ errors, name }) => {
  return (
    errors[name] && (
      <div className='invalid-feedback'>{errors?.[name]?.message}</div>
    )
  );
};
export const Input = ({
  register,
  errors,
  id,
  type,
  labelText,
  rules,
  placeholder = '',
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id} className='form-label'>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`form-control ${errors[id] ? 'is-invalid' : ''}`}
        {...register(id, rules)}
        onChange={onChange}
      />
      <FormErrorMsg errors={errors} name={id} />
    </>
  );
};

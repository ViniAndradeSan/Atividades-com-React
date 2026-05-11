function InputField({ label, type, name }) { 
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} />
    </div>
  );
}

export default InputField;

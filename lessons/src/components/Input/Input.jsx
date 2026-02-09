import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input_container">
      <label className="input_label" htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        className="input_field"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
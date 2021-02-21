import { string, func, bool } from "prop-types";

const InputField = ({
  label,
  onChange,
  name,
  type = "text",
  placeholder = "",
  value,
  required = false,
  dataTestId = "",
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          data-testid={dataTestId}
          onChange={onChange}
          name={name}
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: string,
  onChange: func,
  name: string,
  type: string,
  placeholder: string,
  value: string,
  required: bool,
};

export default InputField;

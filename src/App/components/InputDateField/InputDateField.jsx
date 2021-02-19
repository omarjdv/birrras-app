import { string, func, bool } from "prop-types";

const getDate = () => {
  return new Date(new Date() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
};
const InputDateField = ({
  label,
  onChange,
  name,
  placeholder = "",
  value,
  required = false,
}) => {
  const minDay = getDate();
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          onChange={onChange}
          name={name}
          className="input"
          type="date"
          placeholder={placeholder}
          value={value}
          required={required}
          max=""
          min={minDay}
        />
      </div>
    </div>
  );
};

InputDateField.propTypes = {
  label: string,
  onChange: func,
  name: string,
  type: string,
  placeholder: string,
  value: string,
  required: bool,
};

export default InputDateField;

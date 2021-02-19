import { string, func, bool } from "prop-types";
import { format, addDays } from "date-fns";

// const getDate = () => {
//   return new Date(new Date() - new Date().getTimezoneOffset() * 60000)
//     .toISOString()
//     .slice(0, 10);
// };

const InputDateField = ({
  label,
  onChange,
  name,
  placeholder = "",
  value,
  required = false,
}) => {
  const minDay = format(new Date(), "yyyy-MM-dd");
  console.log(minDay);
  console.log(format(new Date(1613750400 * 1000), "yyyy-MM-dd"));
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
          max={format(addDays(new Date(), 7), "yyyy-MM-dd")}
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

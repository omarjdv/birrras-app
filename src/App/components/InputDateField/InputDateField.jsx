import { string, func, bool } from "prop-types";
import { format, addDays } from "date-fns";

const InputDateField = ({
  label,
  onChange,
  name,
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
          type="date"
          placeholder={placeholder}
          value={value}
          required={required}
          max={format(addDays(new Date(), 7), "yyyy-MM-dd")}
          min={format(new Date(), "yyyy-MM-dd")}
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

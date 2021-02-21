import { string, func, shape } from "prop-types";

import InputField from "../../../InputField";
import HeaderCard from "../HeaderCard";

const NewMember = ({ label, onSubmit, onChange, data }) => {
  return (
    <div className="card ">
      <HeaderCard label={label} dataTestId="new-member" />
      <div className="card-content">
        <div className="content">
          <form onSubmit={onSubmit}>
            <InputField
              label="Nombre"
              dataTestId="input-name"
              onChange={onChange}
              type="text"
              placeholder="Ingresá tu nombre"
              value={data.name}
              required
              name="name"
            />
            <InputField
              dataTestId="input-email"
              label="Email"
              onChange={onChange}
              type="email"
              placeholder="Ingresá tu email"
              value={data.email}
              name="email"
              required
            />
            <button
              type="submit"
              data-testid="button-new-member"
              className="button is-primary mt-5 "
            >
              Añadí participante
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

NewMember.propTypes = {
  label: string,
  onSubmit: func,
  onChange: func,
  data: shape({
    name: string,
    email: string,
  }),
};

export default NewMember;

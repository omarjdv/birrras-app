import { string, func, shape } from "prop-types";

import InputField from "../../../InputField";
import HeaderCard from "../HeaderCard";

const NewMember = ({ label, onSubmit, onChange, data }) => {
  return (
    <div className="card ">
      <HeaderCard label={label} />
      <div className="card-content">
        <div className="content">
          <form onSubmit={onSubmit}>
            <InputField
              label="Nombre"
              onChange={onChange}
              type="text"
              placeholder="Ingresá tu título"
              value={data.name}
              required
              name="name"
            />
            <InputField
              label="Email"
              onChange={onChange}
              type="text"
              placeholder="Ingresá tu tema"
              value={data.email}
              name="email"
              required
            />
            <button type="submit" className="button is-primary mt-5 ">
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

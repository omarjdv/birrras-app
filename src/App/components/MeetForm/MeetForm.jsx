import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { MeetupContext } from "../../MeetupContext";
import InputField from "../InputField";
import InputDateField from "../InputDateField";

const initialState = {
  title: "",
  theme: "",
  maxMembers: 10,
  date: "",
};

const MeetForm = () => {
  const history = useHistory();
  const { addMeetup } = useContext(MeetupContext);
  const [data, setData] = useState(initialState);

  const handleOnChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const id = addMeetup(data);
    setData(initialState);
    history.push(`/meet/${id}`);
  };

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="subtitle"></p>
          <p className="title">Nueva Meetup</p>
        </div>
      </section>
      <form onSubmit={handleOnSubmit} className="container p-5">
        <InputField
          dataTestId="input-title"
          label="Título"
          onChange={handleOnChange}
          name="title"
          placeholder="Ingresá tu título"
          value={data.title}
          required
        />
        <InputField
          dataTestId="input-theme"
          label="Tema"
          onChange={handleOnChange}
          name="theme"
          placeholder="Ingresá tu tema"
          value={data.theme}
          required
        />

        <InputDateField
          dataTestId="input-date"
          label="Fecha"
          onChange={handleOnChange}
          name="date"
          placeholder="Ingresá la fecha"
          value={data.date}
          required
        />
        <button type="submit" className="button is-primary mt-5 ">
          Creá tu meet
        </button>
      </form>
    </div>
  );
};

export default MeetForm;

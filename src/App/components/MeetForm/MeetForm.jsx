import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { MeetupContext } from "../../MeetupContext";

const initialState = {
  title: "",
  theme: "",
  maxMembers: 30,
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
        <div className="field">
          <label className="label">Título</label>
          <div className="control">
            <input
              onChange={handleOnChange}
              name="title"
              className="input"
              type="text"
              placeholder="Ingresá tu título"
              value={data.title}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tema</label>
          <div className="control">
            <input
              onChange={handleOnChange}
              name="theme"
              className="input"
              type="text"
              placeholder="Ingresá tu tema"
              value={data.theme}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Participantes</label>
          <div className="control">
            <input
              onChange={handleOnChange}
              name="maxMembers"
              className="input"
              type="number"
              placeholder="Ingresá la cantidad de participantes"
              value={data.maxMembers}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Fecha</label>
          <div className="control">
            <input
              onChange={handleOnChange}
              name="date"
              className="input"
              type="datetime-local"
              placeholder="Ingresá la fecha"
              value={data.date}
              required
            />
          </div>
        </div>

        <button type="submit" className="button is-primary mt-5 ">
          Creá tu meet
        </button>
      </form>
    </div>
  );
};

export default MeetForm;

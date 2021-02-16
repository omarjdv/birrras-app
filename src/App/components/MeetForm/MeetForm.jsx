import { useState } from "react";

const MeetForm = () => {
  const [data, setData] = useState({});
  const handleOnChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Participantes</label>
          <div className="control">
            <input
              onChange={handleOnChange}
              name="members"
              className="input"
              type="number"
              placeholder="Ingresá la cantidad de participantes"
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

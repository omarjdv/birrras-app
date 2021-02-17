import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { MeetupContext } from "../../MeetupContext";

const initialState = { name: "", email: "" };
const MeetDetails = () => {
  const [data, setData] = useState(initialState);
  const { getMeetById, addMemberToMeetup } = useContext(MeetupContext);
  const { id } = useParams();
  const meetDetail = getMeetById(id);
  if (!meetDetail) {
    return "Meet not found";
  }
  const handleOnChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addMemberToMeetup({ name: data.name, email: data.email, id: id });
    setData(initialState);
  };
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="subtitle">{meetDetail.theme}</p>
          <p className="title">{meetDetail.title}</p>
        </div>
      </section>
      <div className="columns p-5 ">
        <div className="column">
          <div className="card ">
            <header className="card-header">
              <p className="card-header-title">Nuevo participante</p>
            </header>
            <div className="card-content">
              <div className="content">
                <form onSubmit={handleOnSubmit}>
                  <div className="field">
                    <label className="label">Nombre</label>
                    <div className="control">
                      <input
                        onChange={handleOnChange}
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Ingresá tu título"
                        value={data.name}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        onChange={handleOnChange}
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Ingresá tu tema"
                        value={data.email}
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="button is-primary mt-5 ">
                    Añadí participante
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="card mt-5">
            <header className="card-header">
              <p className="card-header-title">Lista de participantes</p>
            </header>
            <div className="card-content">
              {meetDetail.members.map((member) => (
                <div className="content" key={member.email}>
                  <div className="title is-5 m-0 p-0">{member.name}</div>
                  <div>{member.email}</div>
                  <hr className="separator" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Birras necesarias</p>
            </header>
            <div className="card-content">
              <div className="content">
                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                eros. Donec id elit non mi porta gravida at eget metus. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras mattis consectetur purus sit amet
                fermentum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetDetails;

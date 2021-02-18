import { useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { MeetupContext } from "../../MeetupContext";
import MeetDetailsHeader from "./components/MeetDetailsHeader";
import NewMember from "./components/NewMember";
import WeatherTime from "./components/WeatherTime";
import ListMembers from "./components/ListMembers";
import MeetNotFound from "../MeetNotFound";

const initialState = { name: "", email: "" };
const MeetDetails = () => {
  const [data, setData] = useState(initialState);
  const { getMeetById, addMemberToMeetup } = useContext(MeetupContext);
  const { id } = useParams();
  const meetDetail = getMeetById(id);
  if (!meetDetail) {
    return <MeetNotFound />;
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
      <MeetDetailsHeader theme={meetDetail.theme} title={meetDetail.title} />
      <div className="columns p-5 ">
        <div className="column">
          <NewMember
            label="Nuevo participante"
            onSubmit={handleOnSubmit}
            onChange={handleOnChange}
            data={data}
          />
          <ListMembers
            label="Lista de participantes"
            members={meetDetail.members}
          />
        </div>
        <div className="column">
          <WeatherTime />
        </div>
      </div>
    </div>
  );
};

export default MeetDetails;

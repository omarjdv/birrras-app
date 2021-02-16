import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MeetupContext } from "../../MeetupContext";

const MeetDetails = () => {
  const { getMeetById } = useContext(MeetupContext);
  const { id } = useParams();
  const meetDetail = getMeetById(id);
  if (!meetDetail) {
    return "Meet not found";
  }
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="subtitle">{meetDetail.theme}</p>
          <p className="title">{meetDetail.title}</p>
        </div>
      </section>
    </div>
  );
};

export default MeetDetails;

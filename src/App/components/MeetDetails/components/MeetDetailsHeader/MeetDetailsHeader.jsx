import { string } from "prop-types";

const MeetDetailsHeader = ({ theme, title }) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <p className="subtitle">{theme}</p>
        <p className="title">{title}</p>
      </div>
    </section>
  );
};

MeetDetailsHeader.propTypes = {
  theme: string,
  title: string,
};

export default MeetDetailsHeader;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { MeetupContext } from "../../MeetupContext";
import MeetupItem from "./MeetupItem";

import styles from "./Panel.module.css";

const Panel = () => {
  const { list } = useContext(MeetupContext);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/meet/new" className="button is-fullwidth is-primary">
          Nueva Meetup
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.meetupList}>
          {list.map((item) => (
            <MeetupItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Panel;

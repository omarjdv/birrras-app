import { useContext } from "react";
import { Link } from "react-router-dom";
import { MeetupContext } from "../../MeetupContext";
import { ReactComponent as EmptyList } from "../../../assets/img/emptyList.svg";
import MeetupItem from "./MeetupItem";

import styles from "./Panel.module.css";

const Panel = () => {
  const { list } = useContext(MeetupContext);
  const emptyList = !list || !list.length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link
          to="/meet/new"
          className={`${styles.link} button is-fullwidth is-primary`}
        >
          Nueva Meetup
        </Link>
      </div>

      {emptyList ? (
        <EmptyList width="300px" />
      ) : (
        <div className={styles.content}>
          <div className={styles.meetupList}>
            {list.map((item) => (
              <MeetupItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Panel;

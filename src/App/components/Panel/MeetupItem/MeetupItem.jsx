import { NavLink } from "react-router-dom";

import styles from "./MeetupItem.module.css";

const MeetupItem = ({ item }) => {
  return (
    <NavLink
      activeClassName={styles.isSelected}
      to={`/meet/${item.id}`}
      className={styles.item}
    >
      <h6 className="title is-6 m-0 p-0 ">{item.theme}</h6>
      <h5 className="title is-5 m-0 p-0">{item.title}</h5>
      <div className="">{item.members.length} Participantes</div>
    </NavLink>
  );
};

export default MeetupItem;

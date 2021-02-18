import { ReactComponent as MeetNotFoundImg } from "../../../assets/img/welcome.svg";
import styles from "./MeetNotFound.module.css";

const MeetNotFound = () => {
  return (
    <div className={styles.container}>
      <h5 className="title is-5 mb-10">
        ¡Ups, aún no tenés meetups! Creá una nueva
      </h5>
      <MeetNotFoundImg width="900px" />
    </div>
  );
};
export default MeetNotFound;

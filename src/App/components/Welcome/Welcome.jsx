import { ReactComponent as Select } from "../../../assets/img/select.svg";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <p className="title is-1 is-spaced mb-6 ">
        Seleccione una meetup o creá una nueva
      </p>
      <Select />
    </div>
  );
};

export default Welcome;

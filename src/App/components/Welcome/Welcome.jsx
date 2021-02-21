import { ReactComponent as Select } from "../../../assets/img/select.svg";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <p className="title is-3 is-spaced  mb-6 has-text-centered">
        Seleccione una meetup o creá una nueva
      </p>
      <Select width="300px" />
    </div>
  );
};

export default Welcome;

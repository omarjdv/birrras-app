import { oneOf, string } from "prop-types";

import styles from "./Spinner.module.css";

/* Muestra un icono de spinner dando vueltas, identifica el status de 'loading' */
const Spinner = () => {
  return (
    <div
      style={{ height: "250px" }}
      className={styles.container}
      data-testid="spinner"
    >
      <div className={`${styles.loading} ${styles.loadingNormal}`} />
    </div>
  );
};

Spinner.propTypes = {
  height: string,
  variant: oneOf(["normal", "button"]),
};

export default Spinner;

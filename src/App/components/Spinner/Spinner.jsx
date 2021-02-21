import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div
      style={{ height: "250px" }}
      className={styles.container}
      data-testid="spinner"
    >
      <div className={styles.loading} />
    </div>
  );
};

export default Spinner;

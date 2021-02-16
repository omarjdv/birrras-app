import styles from "./MeetupLayout.module.css";

function MeetupLayout({ panel, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>{panel}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default MeetupLayout;

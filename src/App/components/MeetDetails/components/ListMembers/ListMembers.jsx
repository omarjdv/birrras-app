import { string, arrayOf, shape } from "prop-types";

import { ReactComponent as EmptyMembers } from "../../../../../assets/img/emptyMembers.svg";
import HeaderCard from "../HeaderCard";
import styles from "./ListMembers.module.css";

const ListMembers = ({ label, members }) => {
  const emptyMembers = !members || !members.length;

  return (
    <div className="card mt-5">
      <HeaderCard label={label} />
      <div className="card-content">
        {emptyMembers ? (
          <div className={styles.emptyState}>
            <EmptyMembers width="150px" height="150px" />
            <div className={`${styles.emptyStateMsj} title is-5`}>
              ¡Una vez que añadas un participante, lo verás aquí!
            </div>
          </div>
        ) : (
          members.map((member) => (
            <div className="content" key={member.email}>
              <div className="title is-5 m-0 p-0">{member.name}</div>
              <div>{member.email}</div>
              <hr className="separator" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

ListMembers.propTypes = {
  label: string,
  members: arrayOf(
    shape({
      email: string,
      name: string,
    })
  ),
};

export default ListMembers;

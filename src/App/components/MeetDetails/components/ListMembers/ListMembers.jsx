import { string, arrayOf, shape } from "prop-types";

import HeaderCard from "../HeaderCard";

const ListMembers = ({ label, members }) => {
  if (!members || !members.length) {
    return "e";
  }
  return (
    <div className="card mt-5">
      <HeaderCard label={label} />
      <div className="card-content">
        {members.map((member) => (
          <div className="content" key={member.email}>
            <div className="title is-5 m-0 p-0">{member.name}</div>
            <div>{member.email}</div>
            <hr className="separator" />
          </div>
        ))}
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

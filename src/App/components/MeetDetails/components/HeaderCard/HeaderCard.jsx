import { string } from "prop-types";

const HeaderCard = ({ label }) => {
  return (
    <header className="card-header">
      <p className="card-header-title">{label}</p>
    </header>
  );
};

HeaderCard.propTypes = {
  label: string,
};
export default HeaderCard;

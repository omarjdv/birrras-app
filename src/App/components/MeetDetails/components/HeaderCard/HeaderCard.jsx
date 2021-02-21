import { string } from "prop-types";

const HeaderCard = ({ label, dataTestId }) => {
  return (
    <header className="card-header">
      <p data-testid={dataTestId} className="card-header-title">
        {label}
      </p>
    </header>
  );
};

HeaderCard.propTypes = {
  label: string,
};
export default HeaderCard;

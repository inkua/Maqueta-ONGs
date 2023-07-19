import PropTypes from "prop-types";

type CardProps = {
  title: string;
  text: string;
};

const Card = ({ title, text } : CardProps)  => {
  return (
    <div className="card bg-secondary border border-0 text-white">
      <div className="card-body" id='card-body'>
        <h2 className="card-title text-center py-3">{title}</h2>
        <p className="card-text py-4 text-start p-5">{text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;

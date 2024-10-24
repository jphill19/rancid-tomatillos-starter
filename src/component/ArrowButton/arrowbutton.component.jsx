import './arrowbutton.css';
import arrow_down from '../../assets/ArrowImages/arrow-down.svg';
import arrow_up from '../../assets/ArrowImages/arrow-up.svg';

const arrow = {
  down: arrow_down,
  up: arrow_up,
};

const ArrowButton = ({ direction, eventHandler }) => {

  return (
    <button
      onClick={eventHandler}
      className="arrow-button"
      aria-label={`${direction} vote button`}
    >
      <img
        src={arrow[direction]}
        alt={`${direction} arrow`}
        aria-hidden="true" 
      />
    </button>
  );
};

export default ArrowButton;


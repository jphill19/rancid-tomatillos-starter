import './arrowbutton.css';
import arrow_down from '../../assets/ArrowImages/arrow-down.svg';
import arrow_up from '../../assets/ArrowImages/arrow-up.svg';

const arrow = {
  down: arrow_down,
  up: arrow_up,
};

const ArrowButton = ({ direction, eventHandler }) => {

  return (
    <img
      src={arrow[direction]}
      alt={`${direction} arrow`}
      onClick={eventHandler}
      className="arrow-button"
    />
  );
};

export default ArrowButton;


import './arrowbutton.css';
import arrow_down from '../../assets/ArrowImages/arrow-down.svg';
import arrow_up from '../../assets/ArrowImages/arrow-up.svg';

const arrow = {
  down: arrow_down,
  up: arrow_up,
};
{/* <img
src={arrow[direction]}
alt={`${direction} arrow`}
onClick={eventHandler}
className="arrow-button"
/> */}

const ArrowButton = ({ direction, eventHandler }) => {

  return (
    <button
      onClick={eventHandler}
      className="arrow-button"
      aria-label={`${direction} vote button`} // Descriptive label for screen readers
    >
      <img
        src={arrow[direction]}
        alt={`${direction} arrow`}
        aria-hidden="true" // Hides the image from screen readers since the button label conveys the purpose
      />
    </button>
  );
};

export default ArrowButton;


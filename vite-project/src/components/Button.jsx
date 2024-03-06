import PropTypes from 'prop-types';

export const Button = ({ value, extraClass, disabled, onClick }) => {
  return (
    <>
      <button
        className={'button_ ' + extraClass}
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

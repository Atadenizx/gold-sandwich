/* eslint-disable react/prop-types */
function Button({ children, handleOnClick, disabled, type, options }) {
  if (type === "primary") {
    return (
      <button
        className={`${options} rounded-full bg-yellow-300 p-2 text-center text-lg`}
        disabled={disabled}
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  }

  if (type === "secondary") {
    return (
      <button
        className={`${options} rounded-full bg-neutral-100 p-2 text-center text-lg`}
        disabled={disabled}
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} onClick={handleOnClick} className="text center">
      {children}
    </button>
  );
}

export default Button;

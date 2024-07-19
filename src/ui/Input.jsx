/* eslint-disable react/prop-types */

// Re-usable input component that is connected to react-hook-forms with register function

function Input({
  type = "text",
  id,
  defaultValue = "",
  autoComplete = "",
  children,
  text,
  register,
  rules = {},
  placeholder = "",
  style = "rounded-md border border-black p-1",
}) {
  return (
    <>
      <label className={`text-${text}`} htmlFor={id}>
        {children}
      </label>
      <input
        className={style}
        placeholder={placeholder}
        type={type}
        id={id}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        {...(register && register(`${id}`, rules))}
      />
    </>
  );
}

export default Input;

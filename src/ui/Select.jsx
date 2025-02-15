function Select({
  id,
  optionsArr,
  caption,
  defaultValue,
  rules = {},
  register,
}) {
  return (
    <>
      <label htmlFor={id}>{caption}</label>
      <select
        {...(register && register(`${id}`, rules))}
        defaultValue={defaultValue}
        id={id}
        name={id}
      >
        {optionsArr?.map((option) => (
          <option
            key={option.name}
            selected={option.isSelected}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;

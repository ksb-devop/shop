export default function Checkbox({ checkboxLabel, ...rest }) {
  const { name } = rest;

  return (
    <div>
      <label htmlFor={name}>
        <input id={name} type="checkbox" {...rest} />
        {checkboxLabel || name}
      </label>
    </div>
  );
}
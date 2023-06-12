interface Props {
  id: string;
  label: string;
  options: string[];
}

function Dropdown(props: Props) {
  return (
    <>
      <select id={props.id} className="form-select custom_selector">
        <option disabled selected>
          {props.label}
        </option>
        {props.options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;

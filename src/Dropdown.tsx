interface Props {
  id: string;
  label: string;
  options: string[];
  onChange: () => void;
  disabled: boolean;
}

function Dropdown(props: Props) {
  return (
    <>
      <select
        id={props.id}
        className="form-select custom_selector"
        onChange={props.onChange}
        disabled={props.disabled}
      >
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

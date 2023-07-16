type PropTypes = {
  setValue: (value: string) => void;
  value: string;
  name: string;
  type: string;
};

const Input = (props: PropTypes) => {
  return (
    <input
      onChange={(event) => props.setValue(event.target.value)}
      type={props.type}
      className="mt-2 topic form-control"
      placeholder={props.name}
      value={props.value}
    />
  );
};

export default Input;

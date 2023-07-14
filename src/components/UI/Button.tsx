type PropTypes = {
  classes: string;
  name: string;
  btnHndlr: () => void;
};

const Button: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <button
      className={`btn btn-primary ${props.classes}`}
      onClick={props.btnHndlr}
      type="button"
    >
      {props.name}
    </button>
  );
};

export default Button;

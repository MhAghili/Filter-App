const Button: React.FC<{
  classes: string;
  name: string;
  btnHndlr: () => void;
}> = (props) => {
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

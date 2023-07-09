const Button: React.FC<{
  classes: string;
  name: string;
  btnHndlr: () => void;
}> = (props) => {
  return (
    <button
      onClick={props.btnHndlr}
      type="button"
      className={`btn btn-primary ${props.classes}`}
    >
      {props.name}
    </button>
  );
};

export default Button;

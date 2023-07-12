type Prototype = {
  classes: string;
  name: string;
  btnHndlr: () => void;
};

const Button: React.FC<Prototype> = (props: Prototype) => {
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

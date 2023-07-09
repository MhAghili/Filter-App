import "bootstrap/dist/css/bootstrap.min.css";

const Card: React.FC = (props) => {
  return <div className="hstack p-2 h-100">{props.children}</div>;
};

export default Card;

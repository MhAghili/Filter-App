import "bootstrap/dist/css/bootstrap.min.css";

type PropTypes = {
  children: React.ReactNode;
};

const Card = (props: PropTypes) => {
  return <div className="hstack p-2 h-100">{props.children}</div>;
};

export default Card;

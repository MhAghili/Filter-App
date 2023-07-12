import "bootstrap/dist/css/bootstrap.min.css";

const Card: React.FC = ({ children }) => {
  return <div className="hstack p-2 h-100">{children}</div>;
};

export default Card;

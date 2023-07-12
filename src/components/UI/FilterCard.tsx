import "bootstrap/dist/css/bootstrap.min.css";

const FilterCard: React.FC = (props) => {
  return (
    <div className="form-group mt-4 border border-dark-subtle rounded-2 p-2">
      {props.children}
    </div>
  );
};

export default FilterCard;

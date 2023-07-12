import "bootstrap/dist/css/bootstrap.min.css";

const FilterCard: React.FC = ({ children }) => {
  return (
    <div className="form-group mt-4 border border-dark-subtle rounded-2 p-2">
      {children}
    </div>
  );
};

export default FilterCard;

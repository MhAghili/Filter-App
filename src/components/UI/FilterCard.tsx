import "bootstrap/dist/css/bootstrap.min.css";

type PropTypes = {
  children: React.ReactNode;
};


const FilterCard= (props:PropTypes) => {
  return (
    <div className="form-group mt-4 border border-dark-subtle rounded-2 p-2">
      {props.children}
    </div>
  );
};

export default FilterCard;

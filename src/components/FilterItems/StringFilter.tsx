
import "bootstrap/dist/css/bootstrap.min.css";
import FilterCard from "../UI/FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  onRemoveFilter: (filter: string) => void;
  method: string;
  onSetString: (value: string) => void;
  name: string;
};

const StringFilter: React.FC<PropTypes> = (props: PropTypes) => {
  const RemoveHandler = () => {
    if (props.method === "name") {
      props.onRemoveFilter(props.method);
    } else return;
  };

  return (
    <FilterCard>
      <label className="d-flex" htmlFor={props.method}>
        <p>{props.method === "name" ? "Name" : "Search"}</p>
        {props.method === "name" && (
          <div className="ms-auto" onClick={RemoveHandler}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        )}
      </label>
      <input
        onChange={(event) => {
          props.onSetString(event.target.value);
        }}
        type="text"
        className="mb-3 topic form-control"
        value={props.name}
      />
    </FilterCard>
  );
};

export default StringFilter;

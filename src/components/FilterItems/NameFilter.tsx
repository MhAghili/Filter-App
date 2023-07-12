import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../store/filter-slice";
import FiltersBody from "../../Interfaces/FiltersBody";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterCard from "../UI/FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NameFilter: React.FC = () => {
  const dispatch = useDispatch();
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setName(event.target.value));
  };
  const name = useSelector(
    (state: { filters: FiltersBody }) => state.filters.name
  );

  return (
    <FilterCard>
      <label className="d-flex" htmlFor="namefilter">
        <p>Name</p>
        <div
          className="ms-auto"
          onClick={() => {
            dispatch(filtersActions.removeFilter("name"));
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </label>
      <input
        onChange={handleNameChange}
        type="text"
        className="mb-3 topic form-control"
        value={name}
      />
    </FilterCard>
  );
};

export default NameFilter;

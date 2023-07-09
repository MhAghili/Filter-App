import FilterCard from "./FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../store/filter-slice";
import FiltersBody from "../Interfaces/FiltersBody";

const ExactAge: React.FC = () => {
  const dispatch = useDispatch();
  const ageMethod = useSelector(
    (state: { filters: FiltersBody }) => state.filters.selectedAge
  );
  const handleAgeMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(filtersActions.setSelectedAge(event.target.value));
  };
  const handleExactAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setExactAge(event.target.value));
  };
  return (
    <FilterCard>
      <label className="d-flex" htmlFor="filter">
        <p>Age (Exact)</p>
        <div
          className="ms-auto"
          onClick={() => {
            dispatch(filtersActions.removeSelectedAge("exact"));
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </label>
      <select
        className="form-control mt-1"
        id="filter"
        value="exact"
        onChange={handleAgeMethodChange}
      >
        <option value="exact" disabled={ageMethod.includes("exact")}>
          Exact
        </option>
        <option value="between" disabled={ageMethod.includes("between")}>
          Between
        </option>
      </select>
      <input
        onChange={handleExactAgeChange}
        type="text"
        className="mt-2 topic form-control"
        placeholder="Enter Age"
      />
    </FilterCard>
  );
};

export default ExactAge;

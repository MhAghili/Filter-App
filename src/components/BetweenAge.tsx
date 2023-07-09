import FilterCard from "./FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { filtersActions } from "../store/filter-slice";
import FiltersBody from "../Interfaces/FiltersBody";

const BetweenAgeChange: React.FC = () => {
  const dispatch = useDispatch();
  const handleAgeMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(filtersActions.setSelectedAge(event.target.value));
  };

  const ageMethod = useSelector(
    (state: { filters: FiltersBody }) => state.filters.selectedAge
  );
  const handleFromAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setAgeFrom(event.target.value));
  };
  const handleToAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setAgeTo(event.target.value));
  };
  return (
    <FilterCard>
      <label className="mt-3 d-flex" htmlFor="filter">
        <p>Age (Range)</p>
        <div
          className="ms-auto"
          onClick={() => {
            dispatch(filtersActions.removeSelectedAge("between"));
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </label>
      <select
        className="form-control mt-1"
        id="filter"
        value="between"
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
        onChange={handleFromAgeChange}
        type="text"
        className="mt-2 topic form-control"
        placeholder="From"
      />
      <input
        onChange={handleToAgeChange}
        type="text"
        className="mt-2 topic form-control"
        placeholder="To"
      />
    </FilterCard>
  );
};

export default BetweenAgeChange;

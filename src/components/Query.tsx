import FilterCard from "./FilterCard";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../store/filter-slice";
import FiltersBody from "../Interfaces/FiltersBody";

const Query: React.FC = (props) => {
  const dispatch = useDispatch();
  const queryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setQuery(event.target.value));
  };

  const query = useSelector(
    (state: { filters: FiltersBody }) => state.filters.query
  );
  
  return (
    <>
      <FilterCard>
        <label className="mb-1">Search</label>
        <input
          onChange={queryChangeHandler}
          type="text"
          className="mb-3 topic form-control rounded-5"
          value={query}
        />
      </FilterCard>
    </>
  );
};
export default Query;

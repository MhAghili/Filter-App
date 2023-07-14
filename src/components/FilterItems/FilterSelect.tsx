import FilterCard from "../UI/FilterCard";

type PropTypes = {
  onHandleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedFilters: string[];
};

const FilterSelect: React.FC<PropTypes> = (props: PropTypes) => {
  const filters = ["name", "interested", "birthday", "age"];
  return (
    <FilterCard>
      <label htmlFor="filter">Select Filter:</label>
      <select
        className="form-control"
        id="filter"
        value=""
        onChange={props.onHandleFilterChange}
      >
        <option value="">Select an option</option>
        {filters.map((filter) => {
          return (
            <option
              value={filter}
              disabled={props.selectedFilters.includes(filter)}
              key={filter}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </option>
          );
        })}
      </select>
    </FilterCard>
  );
};
export default FilterSelect;

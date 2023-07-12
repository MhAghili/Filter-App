import FilterCard from "../UI/FilterCard";

const FilterSelect: React.FC<{
  onHandleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedFilters: string[];
}> = (props) => {
  const filters = ["name", "interests", "birthdate", "age"];
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

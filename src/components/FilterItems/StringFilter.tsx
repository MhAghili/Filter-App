import "bootstrap/dist/css/bootstrap.min.css";
import FilterCard from "../UI/FilterCard";
import RemoveFilter from "./RemoveFilter";
import Input from "./Input";

type PropTypes = {
  onRemoveFilter: (filter: string) => void;
  filterName: string;
  onSetString: (value: string) => void;
  name: string;
};

const StringFilter = (props: PropTypes) => {
  return (
    <FilterCard>
      <label className="d-flex" htmlFor={props.filterName}>
        <p>{props.filterName}</p>
        <RemoveFilter
          removeHandler={() => {
            props.onRemoveFilter(props.filterName);
          }}
        />
      </label>
      <Input
        name=""
        setValue={props.onSetString}
        type="text"
        value={props.name}
      />
    </FilterCard>
  );
};

export default StringFilter;

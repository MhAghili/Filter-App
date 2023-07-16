import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerfrom from "react-datepicker";
import FilterCard from "../UI/FilterCard";
import RemoveFilter from "./RemoveFilter";

type PropTypes = {
  removeFilter: (filter: string) => void;
  name: string;
  onSetDate: (value: Date | null) => void;
  date: string;
};

const DateFilter = (props: PropTypes) => {
  const handleDateChange = (date: Date | null) => {
    props.onSetDate(date);
  };
  return (
    <FilterCard>
      <label className="d-flex" htmlFor={props.name}>
        <p>{props.name}</p>
        <RemoveFilter
          removeHandler={() => {
            props.removeFilter(props.name);
          }}
        />
      </label>
      <DatePickerfrom
        className="form-control"
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText={`Select ${props.name}`}
        locale="en"
        value={props.date}
      />
    </FilterCard>
  );
};

export default DateFilter;

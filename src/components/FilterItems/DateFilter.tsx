import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerfrom from "react-datepicker";
import FilterCard from "../UI/FilterCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  onRemoveFilter: (filter: string) => void;
  method: string;
  onSetDate: (value: Date | null) => void;
  date: string;
};

const DateFilter: React.FC<PropTypes> = (props: PropTypes) => {
  const handleBirthdateChange = (date: Date | null) => {
    props.onSetDate(date);
  };
  return (
    <FilterCard>
      <label className="d-flex" htmlFor={props.method}>
        <p>Birthdate</p>
        <div
          className="ms-auto"
          onClick={() => {
            props.onRemoveFilter(props.method);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </label>
      <DatePickerfrom
        className="form-control"
        id="birthdate"
        onChange={handleBirthdateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select birthdate"
        locale="en"
        value={props.date}
      />
    </FilterCard>
  );
};

export default DateFilter;

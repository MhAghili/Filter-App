import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../store/filter-slice";
import FiltersBody from "../../Interfaces/FiltersBody";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerfrom from "react-datepicker";
import FilterCard from "../UI/FilterCard";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BirthdayPicker: React.FC = () => {
  const dispatch = useDispatch();
  const birthdateStr = useSelector(
    (state: { filters: FiltersBody }) => state.filters.birthday
  );
  const handleBirthdateChange = (date: Date | null) => {
    const dateStr = format(date!, "yyyy-MM-dd");
    dispatch(filtersActions.setBirthdate(dateStr));
  };
  return (
    <FilterCard>
      <label className="d-flex" htmlFor="birthdate">
        <p>Birthdate</p>
        <div
          className="ms-auto"
          onClick={() => {
            dispatch(filtersActions.removeFilter("birthdate"));
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </label>
      <DatePickerfrom
        className="form-control"
        id="birthdate"
        value={birthdateStr}
        onChange={handleBirthdateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select birthdate"
        locale="en"
      />
    </FilterCard>
  );
};

export default BirthdayPicker;

import { useDispatch } from "react-redux";
import { filtersActions } from "../store/filter-slice";
import "bootstrap/dist/css/bootstrap.min.css";
import IntrestedItem from "./IntrestedItem";
import FilterCard from "./FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const InterestedFilter: React.FC = () => {
  const dispatch = useDispatch();
  const interests = ["sport", "playstation", "movie", "football"];
  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setInterested(event.target.value));
  };

  return (
    <FilterCard>
      <div className="mb-2 d-flex">
        <p>Select Interested Fields</p>
        <div
          className="ms-auto"
          onClick={() => {
            dispatch(filtersActions.removeFilter("interests"));
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
      <div>
        {interests.map((interest) => (
          <IntrestedItem
            key={interest}
            onHandleChange={handleInterestChange}
            intrestedItem={interest}
          />
        ))}
      </div>
    </FilterCard>
  );
};

export default InterestedFilter;

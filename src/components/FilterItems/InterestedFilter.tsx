import "bootstrap/dist/css/bootstrap.min.css";
import CheckboxItem from "./checkBoxItem";
import FilterCard from "../UI/FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  onRemoveFilter: (filter: string) => void;
  onSetInterest: (value: string) => void;
};

const InterestedFilter: React.FC<PropTypes> = ({
  onRemoveFilter,
  onSetInterest,
}: PropTypes) => {
  const interests = ["sport", "playstation", "movie", "book", "travel"];

  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSetInterest(value);
  };

  return (
    <FilterCard>
      <div className="mb-1 d-flex">
        <p>Select Interested Fields</p>
        <div
          className="ms-auto"
          onClick={() => {
            onRemoveFilter("interested");
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
      <div>
        {interests.map((interest) => (
          <CheckboxItem
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

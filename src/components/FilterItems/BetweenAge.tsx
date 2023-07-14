import FilterCard from "../UI/FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  onChangeAgeMethod: (method: string) => void;
  onRemoveAgeMethod: (method: string) => void;
  ageMethod: string[];
  onSetAgeFrom: (value: string) => void;
  onSetAgeTo: (value: string) => void;
  ageFrom: number;
  ageTo: number;
};

const BetweenAgeChange: React.FC<PropTypes> = ({
  onChangeAgeMethod,
  onRemoveAgeMethod,
  ageMethod,
  onSetAgeFrom,
  onSetAgeTo,
  ageFrom,
  ageTo,
}: PropTypes) => {
  const handleAgeMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChangeAgeMethod(event.target.value);
  };

  return (
    <FilterCard>
      <label className="mt-3 d-flex" htmlFor="filter">
        <p>Age (Range)</p>
        <div
          className="ms-auto"
          onClick={() => {
            onRemoveAgeMethod("between");
            onSetAgeFrom("");
            onSetAgeTo("");
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
        onChange={(event) => onSetAgeFrom(event.target.value)}
        type="text"
        className="mt-2 topic form-control"
        placeholder="From"
        value={ageFrom}
      />
      <input
        onChange={(event) => onSetAgeTo(event.target.value)}
        type="text"
        className="mt-2 topic form-control"
        placeholder="To"
        value={ageTo}
      />
    </FilterCard>
  );
};

export default BetweenAgeChange;

import React from "react";
import FilterCard from "../UI/FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  onChangeAgeMethod: (method: string) => void;
  onRemoveAgeMethod: (method: string) => void;
  onSetExactAge: (value: string) => void;
  ageMethod: string[];
  exactAge: number[];
};

const ExactAge: React.FC<PropTypes> = (props: PropTypes) => {
  const handleAgeMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    props.onChangeAgeMethod(event.target.value);
  };

  return (
    <FilterCard>
      <label className="d-flex" htmlFor="filter">
        <p>Age (Exact)</p>
        <div
          className="ms-auto"
          onClick={() => {
            props.onRemoveAgeMethod("exact");
            props.onSetExactAge("");
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </label>
      <select
        className="form-control mt-1"
        id="filter"
        value="exact"
        onChange={handleAgeMethodChange}
      >
        <option value="exact" disabled={props.ageMethod.includes("exact")}>
          Exact
        </option>
        <option value="between" disabled={props.ageMethod.includes("between")}>
          Between
        </option>
      </select>
      <input
        onChange={(event) => props.onSetExactAge(event.target.value)}
        type="text"
        className="mt-2 topic form-control"
        placeholder="Enter Age"
        value={props.exactAge[0] || ""}
      />
    </FilterCard>
  );
};

export default ExactAge;

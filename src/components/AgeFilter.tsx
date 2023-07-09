import { useDispatch } from "react-redux";
import { filtersActions } from "../store/filter-slice";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterCard from "./FilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AgeFilter: React.FC = () => {
  const dispatch = useDispatch();
  const [ageMethods, setAgeMethods] = useState<{
    exact: boolean;
    between: boolean;
  }>({
    exact: true,
    between: false,
  });

  const handleAgeMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAgeMethods((prev) => {
      const updated = {
        exact: prev.exact,
        between: event.target.value === "between" ? true : false,
      };
      return updated;
    });
  };

  const handleExactAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setExactAge(event.target.value));
  };
  const handleFromAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setAgeFrom(event.target.value));
  };
  const handleToAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setAgeTo(event.target.value));
  };
  return (
    <>
      {ageMethods.exact === true && (
        <FilterCard>
          <label className="d-flex" htmlFor="filter">
            <p>Age (Exact)</p>
            <div
              className="ms-auto"
              onClick={() => {
                dispatch(filtersActions.removeFilter("age"));
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
            <option value="exact">Exact</option>
            <option value="between">Between</option>
          </select>
          <input
            onChange={handleExactAgeChange}
            type="text"
            className="mt-2 topic form-control"
            placeholder="Enter Age"
          />
        </FilterCard>
      )}
      {ageMethods.between === true && (
        <FilterCard>
          <label className="mt-3 d-flex" htmlFor="filter">
            <p>Age (Range)</p>
            <div
              className="ms-auto"
              onClick={() => {
                dispatch(filtersActions.removeFilter("age"));
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
            <option value="exact">Exact</option>
            <option value="between">Between</option>
          </select>
          <input
            onChange={handleFromAgeChange}
            type="text"
            className="mt-2 topic form-control"
            placeholder="From"
          />
          <input
            onChange={handleToAgeChange}
            type="text"
            className="mt-2 topic form-control"
            placeholder="To"
          />
        </FilterCard>
      )}
    </>
  );
};

export default AgeFilter;

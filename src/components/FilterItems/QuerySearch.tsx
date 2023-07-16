import React from 'react'
import FilterCard from '../UI/FilterCard'

type PropTypes = {
    queryName: string;
    onSetValue: (value: string) => void;
    value: string;

}

const QuerySearch = (props: PropTypes) => {
  return (
    <FilterCard>
      <label className="d-flex" htmlFor={props.queryName}>
        <p>{props.queryName}</p>
      </label>
      <input
        onChange={(event) => {
          props.onSetValue(event.target.value);
        }}
        type="text"
        className="mb-3 topic form-control"
        value={props.value}
      />
    </FilterCard>
  );
};

export default QuerySearch
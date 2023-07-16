import React from "react";

type PropTypes = {
  handleSelectItem: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selecteditems: string[];
  selectableItems: string[];
  name: string;
};

const SelectableItems = (props: PropTypes) => {
  return (
    <select
      className="form-control mt-1"
      value={props.name}
      onChange={props.handleSelectItem}
    >
      {props.selectableItems.map((item) => (
        <option
          value={item}
          disabled={props.selecteditems.includes(item)}
          key={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectableItems;

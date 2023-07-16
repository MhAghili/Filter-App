import React from "react";
import FilterCard from "../UI/FilterCard";
import RemoveFilter from "./RemoveFilter";
import SelectableItems from "./SelectableItems";
import Input from "./Input";

type PropTypes = {
  changeSelectItem: (method: string) => void;
  removeSelectItem: (method: string) => void;
  setNumberValue: (value: string) => void;
  removeFilter: (method: string) => void;
  selectedItems: string[];
  selectItems: string[];
  value: number[];
  name: string;
};

const ExactNumber = (props: PropTypes) => {
  const handleSelectItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.changeSelectItem(event.target.value);
  };

  return (
    <FilterCard>
      <label className="d-flex" htmlFor={props.name}>
        <p>(Exact)</p>
        <RemoveFilter
          removeHandler={() => {
            props.removeSelectItem(props.name);
            props.setNumberValue("");
          }}
        />
      </label>
      <SelectableItems
        selecteditems={props.selectedItems}
        selectableItems={props.selectItems}
        handleSelectItem={handleSelectItems}
        name={props.name}
      />
      <Input
        name={`Enter ${props.name} Number`}
        setValue={props.setNumberValue}
        value={props.value.toString()}
        type="text"
      />
    </FilterCard>
  );
};

export default ExactNumber;

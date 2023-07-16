import FilterCard from "../UI/FilterCard";
import Input from "./Input";
import RemoveFilter from "./RemoveFilter";
import SelectableItems from "./SelectableItems";

type PropTypes = {
  changeSelectItem: (method: string) => void;
  removeSelectItem: (method: string) => void;
  setFirstNumber: (value: string) => void;
  setSecondNumber: (value: string) => void;
  removeFilter: (method: string) => void;
  selectedItems: string[];
  selectItems: string[];
  firstNumber: number;
  secondNumber: number;
  name: string;
};

const BetweenNumber = (props: PropTypes) => {
  const handleSelectItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.changeSelectItem(event.target.value);
  };

  return (
    <FilterCard>
      <label className="mt-3 d-flex" htmlFor={props.name}>
        <p>(Between)</p>
        <RemoveFilter
          removeHandler={() => {
            props.removeSelectItem(props.name);
            props.setFirstNumber("");
            props.setSecondNumber("");
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
        name="From"
        setValue={props.setFirstNumber}
        value={props.firstNumber.toString()}
        type="text"
      />
      <Input
        name="To"
        setValue={props.setSecondNumber}
        value={props.secondNumber.toString()}
        type="text"
      />
    </FilterCard>
  );
};

export default BetweenNumber;

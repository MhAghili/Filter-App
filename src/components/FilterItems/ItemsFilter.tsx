import "bootstrap/dist/css/bootstrap.min.css";
import CheckboxItem from "./CheckBoxItem";
import FilterCard from "../UI/FilterCard";
import RemoveFilter from "./RemoveFilter";

type PropTypes = {
  onRemoveFilter: (filter: string) => void;
  onSetInterest: (value: string) => void;
  items: string[];
  name: string;
};

const ItemsFilter = (props: PropTypes) => {
  const handleItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.onSetInterest(value);
  };
  return (
    <FilterCard>
      <div className="mb-1 d-flex">
        <p>{`Select ${props.name} Fields`}</p>
        <RemoveFilter
          removeHandler={() => {
            props.onRemoveFilter(props.name);
          }}
        />
      </div>
      <div>
        {props.items.map((items) => (
          <CheckboxItem
            key={items}
            onHandleChange={handleItemChange}
            items={items}
          />
        ))}
      </div>
    </FilterCard>
  );
};

export default ItemsFilter;

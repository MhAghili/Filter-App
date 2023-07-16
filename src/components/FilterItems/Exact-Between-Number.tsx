import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExactNumber from "./ExactNumber";
import BetweenNumber from "./BetweenNumber";

type PropTypes = {
  removeFilter: (method: string) => void;
  setExactNumber: (value: string) => void;
  setFirstNumber: (value: String) => void;
  setSecondNumber: (value: string) => void;
  exactNumber: number[];
  firstNumber: number;
  secondNumber: number;
  selectitems: string[];
  name: string;
};

const AgeFilter = (props: PropTypes) => {
  const [selectedItems, setselectedItems] = useState<string[]>([
    props.selectitems[0],
  ]);

  const selectItemsHandler = (method: string) => {
    setselectedItems((prev) => {
      if (prev.includes(method)) {
        return prev.filter((item) => item !== method);
      } else return [...prev, method];
    });
  };

  const removeSelectItemsHandler = (method: string) => {
    setselectedItems((prev) => {
      return prev.filter((item) => item !== method);
    });
  };

  useEffect(() => {
    // rahe dige i be joz useEffect be zehnam naresid chon removeFilter ro ye componente joda kardam va nemittoonam behesh selecteditems ro joda bedam
    if (selectedItems.length === 0) {
      props.removeFilter(props.name);
    }
  }, [selectedItems, props]);

  const renderFilters = () => {
    return selectedItems.map((method) => {
      switch (method) {
        case "exact":
          return (
            <ExactNumber
              changeSelectItem={selectItemsHandler}
              removeSelectItem={removeSelectItemsHandler}
              removeFilter={props.removeFilter}
              selectedItems={selectedItems}
              selectItems={props.selectitems}
              setNumberValue={props.setExactNumber}
              value={props.exactNumber}
              name={method}
              key={method}
            />
          );
        case "between":
          return (
            <BetweenNumber
              changeSelectItem={selectItemsHandler}
              removeSelectItem={removeSelectItemsHandler}
              removeFilter={props.removeFilter}
              selectedItems={selectedItems}
              setFirstNumber={props.setFirstNumber}
              setSecondNumber={props.setSecondNumber}
              firstNumber={props.firstNumber}
              secondNumber={props.secondNumber}
              name={method}
              selectItems={props.selectitems}
              key={method}
            />
          );
        default:
          return null;
      }
    });
  };
  return <>{renderFilters()}</>;
};

export default AgeFilter;

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExactAge from "./ExactAge";
import BetweenAge from "./BetweenAge";

type PropTypes = {
  onRemoveFilter: (method: string) => void;
  onSetExactAge: (value: string) => void;
  onSetAgeFrom: (value: String) => void;
  onSetAgeTo: (value: string) => void;
  exactAge: number[];
  ageFrom: number;
  ageTo: number;
};

const AgeFilter: React.FC<PropTypes> = ({
  onRemoveFilter,
  onSetExactAge,
  onSetAgeFrom,
  onSetAgeTo,
  exactAge,
  ageFrom,
  ageTo,
}: PropTypes) => {
  const [selectedAgeMethods, setselectedAgeMethods] = useState<string[]>([
    "exact",
  ]);

  const ageMethodHandler = (method: string) => {
    setselectedAgeMethods((prev) => {
      if (prev.includes(method)) {
        return prev.filter((item) => item !== method);
      } else return [...prev, method];
    });
  };

  const removeAgeMethodHandler = (method: string) => {
    setselectedAgeMethods((prev) => {
      return prev.filter((item) => item !== method);
    });
  };

  useEffect(() => {
    if (selectedAgeMethods.length === 0) {
      onRemoveFilter("age");
    }
  }, [selectedAgeMethods, onRemoveFilter]);

  const renderFilters = () => {
    return selectedAgeMethods.map((method, index) => {
      switch (method) {
        case "exact":
          return (
            <ExactAge
              onChangeAgeMethod={ageMethodHandler}
              onRemoveAgeMethod={removeAgeMethodHandler}
              ageMethod={selectedAgeMethods}
              onSetExactAge={onSetExactAge}
              exactAge={exactAge}
              key={index}
            />
          );
        case "between":
          return (
            <BetweenAge
              onChangeAgeMethod={ageMethodHandler}
              onRemoveAgeMethod={removeAgeMethodHandler}
              ageMethod={selectedAgeMethods}
              onSetAgeFrom={onSetAgeFrom}
              onSetAgeTo={onSetAgeTo}
              ageFrom={ageFrom}
              ageTo={ageTo}
              key={index}
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

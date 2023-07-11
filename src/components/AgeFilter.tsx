import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import FiltersBody from "../Interfaces/FiltersBody";
import ExactAge from "./ExactAge";
import BetweenAge from "./BetweenAge";
import { filtersActions } from "../store/filter-slice";

const AgeFilter: React.FC = () => {
  const dispatch = useDispatch();
  const ageMethod = useSelector(
    (state: { filters: FiltersBody }) => state.filters.selectedAgeMethods
  );

  useEffect(() => {
    if (ageMethod.length === 0) {
      dispatch(filtersActions.removeFilter("age"));
      dispatch(filtersActions.setSelectedAgeMethod("exact")); // default
    }
  }, [ageMethod, dispatch]);

  const renderFilters = () => {
    return ageMethod.map((method, index) => {
      switch (method) {
        case "exact":
          return <ExactAge key={index} />;
        case "between":
          return <BetweenAge key={index} />;
        default:
          return null;
      }
    });
  };
  return <>{renderFilters()}</>;
};

export default AgeFilter;

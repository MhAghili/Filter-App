import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../store/filter-slice";
import FiltersBody from "../../Interfaces/FiltersBody";
import "bootstrap/dist/css/bootstrap.min.css";
import NameFilter from "./NameFilter";
import DateFilter from "./DateFilter";
import InterestedFilter from "./IntrestedFilter";
import AgeFilter from "./AgeFilter";
import Button from "../UI/Button";
import FilterSelect from "./FilterSelect";
import Query from "./Query";
import { showFiltredData } from "../../store/filter-slice";
import { FilterDispatch } from "../../store";

const Filter: React.FC = () => {
  const dispatch = useDispatch<FilterDispatch>();
  const state = useSelector((state: { filters: FiltersBody }) => state.filters);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtersActions.setSelectedFilters(event.target.value));
  };

  const SearchBtnHandler = () => {
    dispatch(filtersActions.setIsInitial(false));
    dispatch(showFiltredData());
  };

  const ClearBtnHandler = () => {
    dispatch(filtersActions.clear());
  };

  
  const renderFilters = () => {
    return state.selectedFilters.map((filter, index) => {
      switch (filter) {
        case "name":
          return <NameFilter key={index} />;
        case "birthdate":
          return <DateFilter key={index} />;
        case "interests":
          return <InterestedFilter key={index} />;
        case "age":
          return <AgeFilter key={index} />;
        default:
          return null;
      }
    });
  };
  return (
    <>
      <Query />
      <div className="container">
        <FilterSelect
          onHandleFilterChange={handleFilterChange}
          selectedFilters={state.selectedFilters}
        />
        {renderFilters()}
        <section className="mt-4">
          <Button
            classes={"btn-primary me-3"}
            name={"Search"}
            btnHndlr={SearchBtnHandler}
          />
          <Button
            classes={"btn-light"}
            name={"Clear"}
            btnHndlr={ClearBtnHandler}
          />
        </section>
      </div>
    </>
  );
};

export default Filter;

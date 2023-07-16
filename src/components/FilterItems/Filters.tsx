import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StringFilter from "./StringFilter";
import DateFilter from "./DateFilter";
import ItemsFilters from "./ItemsFilter";
import AgeFilter from "./Exact-Between-Number";
import Button from "../UI/Button";
import FilterSelect from "./FilterSelect";
import { initialFilterState, filterReducer } from "../../helpers/FilterReducer";
import { User, ActionTypes, FilterState } from "./../../Interfaces/FiltersBody";
import apiCall from "../../searchService/Call-API-Handler";
import QuerySearch from "./QuerySearch";

type PropTypes = {
  onSetUser: (users: User[]) => void;
  onSetIsLoading: (value: boolean) => void;
  onSetIsInitial: (value: boolean) => void;
  onSetError: (value: { isError: boolean; message: string }) => void;
  onClear: () => void;
};

const Filters = (props: PropTypes) => {
  const [filters, dispatch] = useReducer(filterReducer, initialFilterState);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: ActionTypes.AddFilter, value: event.target.value });
  };

  const removeFilter = (filter: string) => {
    dispatch({ type: ActionTypes.RemoveFilter, value: filter });
    if (filter === "name") dispatch({ type: ActionTypes.name, value: "" });
    if (filter === "birthday")
      dispatch({ type: ActionTypes.birthday, value: null });
    if (filter === "interested") {
      dispatch({ type: ActionTypes.interested, value: null });
    }
  };

  const createBody = (filters: FilterState) => {
    const rangeAge =
      filters.ageFrom !== "" && filters.ageTo !== ""
        ? [+filters.ageFrom, +filters.ageTo]
        : [];
    const body = {
      query: filters.query,
      filters: {
        exact_age: filters.exactAge,
        range_age: rangeAge,
        name: filters.name,
        birthdate: filters.birthday,
        interests: [...filters.interested],
      },
    };
    return body;
  };

  const searchBtnHandler = async () => {
    props.onSetIsInitial(false);
    const body = createBody(filters);
    props.onSetError({ isError: false, message: "" });
    props.onSetIsLoading(true);
    try {
      const users = await apiCall(body);
      props.onSetIsLoading(false);
      props.onSetUser(users);
    } catch (err: any) {
      props.onSetError({ isError: true, message: err.message });
      props.onSetIsLoading(false);
    }
  };

  const clearBtnHandler = () => {
    dispatch({ type: ActionTypes.AddFilter, value: "" });
    dispatch({ type: ActionTypes.clear, value: "" });
    props.onClear();
  };

  const renderFilters = () => {
    return filters.selectedFilter.map((filter) => {
      switch (filter) {
        case "name":
          return (
            <StringFilter
              filterName={filter}
              onRemoveFilter={removeFilter}
              key={filter}
              onSetString={(value) => {
                dispatch({ type: ActionTypes.name, value: value });
              }}
              name={filters.name}
            />
          );
        case "birthday":
          return (
            <DateFilter
              removeFilter={removeFilter}
              key={filter}
              onSetDate={(value) => {
                dispatch({ type: ActionTypes.birthday, value: value });
              }}
              date={filters.birthday}
              name={filter}
            />
          );
        case "interested":
          return (
            <ItemsFilters
              onRemoveFilter={removeFilter}
              onSetInterest={(value) => {
                dispatch({ type: ActionTypes.interested, value: value });
              }}
              items={filters.interestedList}
              name={filter}
              key={filter}
            />
          );
        case "age":
          return (
            <AgeFilter
              removeFilter={removeFilter}
              setExactNumber={(value) => {
                dispatch({ type: ActionTypes.ageExact, value: value });
              }}
              setFirstNumber={(value) => {
                dispatch({ type: ActionTypes.ageFrom, value: value });
              }}
              setSecondNumber={(value) => {
                dispatch({ type: ActionTypes.ageTo, value: value });
              }}
              exactNumber={filters.exactAge}
              firstNumber={filters.ageFrom}
              secondNumber={filters.ageTo}
              selectitems={["exact", "between"]}
              name={filter}
              key={filter}
            />
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      <QuerySearch
        onSetValue={(value) => {
          dispatch({ type: ActionTypes.query, value: value });
        }}
        queryName={"Search"}
        value={filters.query}
      />
      <div className="container">
        <FilterSelect
          onHandleFilterChange={handleFilterChange}
          selectedFilters={filters.selectedFilter}
        />
        {renderFilters()}
        <section className="mt-4">
          <Button
            classes="btn-primary me-3"
            name="Search"
            btnHndlr={searchBtnHandler}
          />
          <Button classes="btn-light" name="Clear" btnHndlr={clearBtnHandler} />
        </section>
      </div>
    </>
  );
};

export default Filters;

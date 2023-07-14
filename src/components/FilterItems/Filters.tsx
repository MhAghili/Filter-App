import { useState, useReducer, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StringFilter from "./StringFilter";
import DateFilter from "./DateFilter";
import InterestedFilter from "./InterestedFilter";
import AgeFilter from "./AgeFilter";
import Button from "../UI/Button";
import FilterSelect from "./FilterSelect";
import { initialFilterState, filterReducer } from "../../helpers/FilterReducer";
import { createBody } from "../../helpers/CreatBody";
import { User } from "./../../Interfaces/FiltersBody";

type PropTypes = {
  onSetUser: (users: User[]) => void;
  onSetIsLoading: (value: boolean) => void;
  onSetIsInitial: (value: boolean) => void;
  onSetError: (value: { isError: boolean; message: string }) => void;
  onClear: () => void;
};

const Filter: React.FC<PropTypes> = (props: PropTypes) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const [filters, dispatch] = useReducer(filterReducer, initialFilterState);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilters((prevState) => {
      if (!prevState.includes(event.target.value)) {
        return [...prevState, event.target.value];
      } else return prevState;
    });
  };

  const removeFilter = useCallback((filter: string) => {
    setSelectedFilters((prevState) => {
      return prevState.filter((item) => item !== filter);
    });
    if (filter === "name") dispatch({ type: "name", value: "" });
    if (filter === "birthday") dispatch({ type: "birthday", value: null });
    if (filter === "interested") {
      dispatch({ type: "interested", value: null });
    }
  }, []);

  const searchBtnHandler = async () => {
    props.onSetIsInitial(false);
    const body = createBody(filters);
    props.onSetError({ isError: false, message: "" });
    props.onSetIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/v1/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const users = await response.json();
      props.onSetIsLoading(false);
      props.onSetUser(users);
    } catch (err: any) {
      props.onSetError({ isError: true, message: err.message });
      props.onSetIsLoading(false);
    }
  };

  const clearBtnHandler = () => {
    setSelectedFilters([]);
    dispatch({ type: "clear", value: "" });
    props.onClear();
  };

  const renderFilters = () => {
    return selectedFilters.map((filter, index) => {
      switch (filter) {
        case "name":
          return (
            <StringFilter
              method="name"
              onRemoveFilter={removeFilter}
              key={filter}
              onSetString={(value) => {
                dispatch({ type: "name", value: value });
              }}
              name={filters.name}
            />
          );
        case "birthday":
          return (
            <DateFilter
              onRemoveFilter={removeFilter}
              key={filter}
              method="birthday"
              onSetDate={(value) => {
                dispatch({ type: "birthday", value: value });
              }}
              date={filters.birthday}
            />
          );
        case "interested":
          return (
            <InterestedFilter
              onRemoveFilter={removeFilter}
              onSetInterest={(value) => {
                dispatch({ type: "interested", value: value });
              }}
              key={filter}
            />
          );
        case "age":
          return (
            <AgeFilter
              onRemoveFilter={removeFilter}
              onSetExactAge={(value) => {
                dispatch({ type: "ageExact", value: value });
              }}
              onSetAgeFrom={(value) => {
                dispatch({ type: "ageFrom", value: value });
              }}
              onSetAgeTo={(value) => {
                dispatch({ type: "ageTo", value: value });
              }}
              exactAge={filters.exactAge}
              ageFrom={filters.ageFrom}
              ageTo={filters.ageTo}
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
      <StringFilter
        method="Search"
        onRemoveFilter={() => {}} //dummy function
        onSetString={(value) => {
          dispatch({ type: "query", value: value });
        }}
        name={filters.query}
      />
      <div className="container">
        <FilterSelect
          onHandleFilterChange={handleFilterChange}
          selectedFilters={selectedFilters}
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

export default Filter;

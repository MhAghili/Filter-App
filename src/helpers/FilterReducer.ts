import {
  FilterState,
  FilterAction,
  ActionTypes,
} from "../Interfaces/FiltersBody";
import { format } from "date-fns";

export const initialFilterState: FilterState = {
  selectedFilter: [],
  query: "",
  name: "",
  birthday: "",
  exactAge: [],
  interested: [],
  ageFrom: "",
  ageTo: "",
  interestedList: ["sport", "playstation", "movie", "book", "travel"],
};

export const filterReducer = (curState: FilterState, action: FilterAction) => {
  switch (action.type) {
    case ActionTypes.name:
      return { ...curState, name: action.value };
    case ActionTypes.query:
      return { ...curState, query: action.value };
    case ActionTypes.birthday:
      if (action.value === null) {
        return { ...curState, birthday: initialFilterState.birthday };
      } else
        return { ...curState, birthday: format(action.value!, "yyyy-MM-dd") };
    case ActionTypes.interested:
      if (!action.value) {
        return {
          ...curState,
          interested: initialFilterState.interested,
        };
      } else {
        if (!curState.interested.includes(action.value)) {
          return {
            ...curState,
            interested: [...curState.interested, action.value],
          };
        } else {
          return {
            ...curState,
            interested: curState.interested.filter(
              (item) => item !== action.value
            ),
          };
        }
      }
    case ActionTypes.clear:
      return {
        ...initialFilterState,
      };
    case ActionTypes.ageExact:
      const age = action.value === "" ? [] : [action.value];
      return {
        ...curState,
        exactAge: age,
      };

    case ActionTypes.ageFrom:
      return {
        ...curState,
        ageFrom: action.value,
      };
    case ActionTypes.ageTo:
      return {
        ...curState,
        ageTo: action.value,
      };

    case ActionTypes.AddFilter:
      if (action.value === "") {
        return {
          ...curState,
          selectedFilter: initialFilterState.selectedFilter,
        };
      }
      return {
        ...curState,
        selectedFilter: [...curState.selectedFilter, action.value],
      };
    case ActionTypes.RemoveFilter:
      return {
        ...curState,
        selectedFilter: curState.selectedFilter.filter(
          (item) => item !== action.value
        ),
      };

    default:
      return curState;
  }
};

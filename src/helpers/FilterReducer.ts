import { FilterState, FilterAction } from "../Interfaces/FiltersBody";
import { format } from "date-fns";

export const initialFilterState: FilterState = {
  query: "",
  name: "",
  birthday: "",
  exactAge: [],
  interested: [],
  ageFrom: "",
  ageTo: "",
};

export const filterReducer = (curState: FilterState, action: FilterAction) => {
  switch (action.type) {
    case "name":
      return { ...curState, name: action.value };
    case "query":
      return { ...curState, query: action.value };
    case "birthday":
      if (action.value === null) {
        return { ...curState, birthday: initialFilterState.birthday };
      } else
        return { ...curState, birthday: format(action.value!, "yyyy-MM-dd") };
    case "interested":
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
    case "clear":
      return {
        ...initialFilterState,
      };
    case "ageExact":
      const age = action.value === "" ? [] : [action.value];
      return {
        ...curState,
        exactAge: age,
      };

    case "ageFrom":
      return {
        ...curState,
        ageFrom: action.value,
      };
    case "ageTo":
      return {
        ...curState,
        ageTo: action.value,
      };

    default:
      return curState;
  }
};

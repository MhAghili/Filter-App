import { FilterState } from "../Interfaces/FiltersBody";

export const createBody = (filters: FilterState) => {
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
  console.log(body);
  return body;
};

export interface User {
  name: string;
  birth_date: string;
  age: number;
  interests: string[];
  [key: string]: any; // baraye estefade be soorat dynamic
}

export interface FilterState {
  selectedFilter: string[];
  query: string;
  name: string;
  birthday: string;
  exactAge: number[];
  interested: string[];
  ageFrom: string;
  ageTo: string;
  interestedList: string[];
}

export interface Body {
  query: string;
  filters: {
    name: string;
    birthdate: string;
    exact_age: number[];
    interests: string[];
    range_age: number[];
  };
}

export enum ActionTypes {
  name = "name",
  query = "query",
  birthday = "birthday",
  interested = "interested",
  ageExact = "ageExact",
  ageFrom = "ageFrom",
  ageTo = "ageTo",
  clear = "clear",
  AddFilter = "AddFilter",
  RemoveFilter = "RemoveFilter",
}

export interface FilterAction {
  type: ActionTypes;
  value: any;
}

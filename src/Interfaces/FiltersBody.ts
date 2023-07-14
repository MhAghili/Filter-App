export interface User {
  name: string;
  birth_date: string;
  age: number;
  interests: string[];
  [key: string]: any; // baraye estefade be soorat dynamic
}

export type FilterState = {
  query: string;
  name: string;
  birthday: string;
  exactAge: number[];
  interested: string[];
  ageFrom: string;
  ageTo: string;
};

export type FilterAction = {
  type: string;
  value: any;
};

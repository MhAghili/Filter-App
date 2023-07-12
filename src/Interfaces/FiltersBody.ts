interface User {
  name: string;
  birth_date: string;
  age: number;
  interests: string[];
  [key: string]: any; // baraye estefade be soorat dynamic
}

interface FilterState {
  query: string;
  name: string;
  birthday: string;
  excatAge: number[];
  ageFrom: string;
  ageTo: string;
  intrested: string[];
  selectedFilters: string[];
  users: User[];
  isLoading: boolean;
  isInitital: boolean;
  selectedAgeMethods: string[];
  error: { isError: boolean; message: string };
}

export default FilterState;

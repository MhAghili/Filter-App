interface FilterState {
  query: string;
  name: string;
  birthday: string;
  excatAge: number[];
  ageFrom: string;
  ageTo: string;
  intrested: string[];
  selectedFilters: string[];
  users: any[];
  isLoading: boolean;
  isInitital: boolean;
  selectedAgeMethods: string[];
}

export default FilterState;

interface FilterState {
  query: string;
  name: string;
  birthdayStr: string;
  excatAge: number[];
  ageFrom: string;
  ageTo: string;
  intrested: string[];
  selectedFilters: string[];
  users: any[];
  isLoading: boolean;
  isInitital: boolean;
  selectedAge: string[];
}

export default FilterState;

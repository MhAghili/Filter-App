import { createSlice } from "@reduxjs/toolkit";
import FiltersBody from "../Interfaces/FiltersBody";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  query: "",
  name: "",
  birthdayStr: "",
  excatAge: [],
  ageFrom: "",
  ageTo: "",
  intrested: [],
  selectedFilters: [],
  users: [],
  isLoading: false,
  isInitital: true,
  selectedAge: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState as FiltersBody,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setBirthdate(state, action) {
      state.birthdayStr = action.payload;
    },
    setExactAge(state, action) {
      if (action.payload !== "") {
        state.excatAge = [action.payload];
      } else {
        state.excatAge = [];
      }
    },
    setAgeFrom(state, action) {
      state.ageFrom = action.payload;
    },
    setAgeTo(state, action) {
      state.ageTo = action.payload;
    },
    setInterested(state, action) {
      const interest = action.payload;
      if (state.intrested.includes(interest)) {
        state.intrested = state.intrested.filter((item) => item !== interest);
      } else {
        state.intrested.push(interest);
      }
    },
    setSelectedFilters(state, action) {
      if (!state.selectedFilters.includes(action.payload)) {
        state.selectedFilters.push(action.payload);
      }
    },
    clear(state) {
      Object.assign(state, initialState);
    },
    removeFilter(state, action) {
      state.selectedFilters = state.selectedFilters.filter(
        (item) => item !== action.payload
      );
      if (action.payload === "name") {
        state.name = "";
      }
      if (action.payload === "birthdate") {
        state.birthdayStr = "";
      }
      if (action.payload === "age") {
        state.excatAge = [];
        state.ageFrom = "";
        state.ageTo = "";
      }
      if (action.payload === "interests") {
        state.intrested = [];
      }
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsInitial(state, action) {
      state.isInitital = action.payload;
    },
  },
});

//az thunk natoonestam estefade konam har kari kardam erroresh hal nashod :(

export const sendFilteredData = createAsyncThunk(
  "filters/sendFilteredData",
  async (arg, thunkAPI: any) => {
    const state = thunkAPI.getState().filters;
    const betweenage =
      state.ageFrom && state.ageTo
        ? [parseInt(state.ageFrom), parseInt(state.ageTo)]
        : [];
    const body = {
      query: state.query,
      filters: {
        exact_age: state.excatAge,
        range_age: betweenage,
        name: state.name,
        birthdate: state.birthdayStr,
        interests: [...state.intrested],
      },
    };
    thunkAPI.dispatch(filtersActions.setIsLoading(true));
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
      thunkAPI.dispatch(filtersActions.setIsLoading(false));
      thunkAPI.dispatch(filtersActions.setUsers(users));
    } catch (err) {
      console.log(err);
      thunkAPI.dispatch(filtersActions.setIsLoading(false));
    }
  }
);

export const filtersActions = filtersSlice.actions;

export default filtersSlice;

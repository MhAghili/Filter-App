import React from "react";
import { useSelector } from "react-redux";
import FiltersBody from "../../Interfaces/FiltersBody";
import Error from "../UI/Error";
import ResultCard from "../UI/ResultCard";

const SerchResult: React.FC = () => {
  const state = useSelector((state: { filters: FiltersBody }) => state.filters);
  const tableRow = ["name", "age", "interests", "birth_date"];

  if (state.error.isError) {
    return <Error message={state.error.message} />;
  }

  if (state.isInitital) {
    return <ResultCard>Search for users</ResultCard>;
  }

  if (state.isLoading) {
    return <ResultCard>Searching...</ResultCard>;
  }

  if (state.users.length === 0) {
    return <ResultCard>No users found</ResultCard>;
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            {tableRow.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state.users.map((user, index) => {
            return (
              <tr key={index}>
                {tableRow.map((row, i) => (
                  <td key={i}>{user[row]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SerchResult;

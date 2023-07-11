import React from "react";
import { useSelector } from "react-redux";
import FiltersBody from "../Interfaces/FiltersBody";

const UsersContent: React.FC = () => {
  const state = useSelector((state: { filters: FiltersBody }) => state.filters);
  const tableRow = ["Name", "Family", "Age", "Intrested", "Birthday"];
  if (state.isInitital) {
    return <div className="fs-2">Search for users</div>;
  } else if (state.isLoading) {
    return <div className="fs-2">Searching...</div>;
  } else if (state.users.length === 0 && !state.isLoading) {
    return <div className="fs-2">No users found</div>;
  } else
    return (
      <div className="container mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              {tableRow.map((name, i) => (
                <th>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {state.users.map((user, index) => {
              const fullName = user.name.split(" ");
              const firstName = fullName[0];
              const lastName = fullName[1] || "";
              return (
                <tr key={index}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.interests.join(" ")}</td>
                  <td>{user.birth_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default UsersContent;

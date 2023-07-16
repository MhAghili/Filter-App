import { User } from "../../Interfaces/FiltersBody";
import Error from "../UI/Error";
import ResultCard from "../UI/ResultCard";

type PropTypes = {
  users: User[];
  isLoading: boolean;
  isInitial: boolean;
  error: { isError: boolean; message: string };
};

const SearchResult = (props: PropTypes) => {
  if (props.error.isError) {
    return <Error message={props.error.message} />;
  }

  if (props.isInitial) {
    return <ResultCard>Search for users</ResultCard>;
  }

  if (props.isLoading) {
    return <ResultCard>Searching...</ResultCard>;
  }

  if (props.users.length === 0) {
    return <ResultCard>No users found</ResultCard>;
  }

  const tableRow = Object.keys(props.users[0]);


  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            {tableRow.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.name}>
              {tableRow.map((row) =>
                Array.isArray(user[row]) ? (
                  <td key={row}>{user[row].join(", ")}</td>
                ) : (
                  <td key={row}>{user[row]}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;

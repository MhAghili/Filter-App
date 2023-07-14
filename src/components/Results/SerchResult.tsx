import { User } from "../../Interfaces/FiltersBody";
import Error from "../UI/Error";
import ResultCard from "../UI/ResultCard";

type PropTypes = {
  users: User[];
  isLoading: boolean;
  isInitial: boolean;
  error: { isError: boolean; message: string };
};

const SearchResult: React.FC<PropTypes> = ({
  users,
  isLoading,
  isInitial,
  error,
}) => {
  const tableRow = ["name", "age", "interests", "birth_date"];

  if (error.isError) {
    return <Error message={error.message} />;
  }

  if (isInitial) {
    return <ResultCard>Search for users</ResultCard>;
  }

  if (isLoading) {
    return <ResultCard>Searching...</ResultCard>;
  }

  if (users.length === 0) {
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
          {users.map((user, index) => (
            <tr key={index}>
              {tableRow.map((row, i) =>
                row === "interests" ? (
                  <td key={i}>{user[row].join(", ")}</td>
                ) : (
                  <td key={i}>{user[row]}</td>
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

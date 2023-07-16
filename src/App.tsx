import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/UI/Card";
import Filters from "./components/FilterItems/Filters";
import SearchResult from "./components/Results/SearchResult";
import { User } from "./Interfaces/FiltersBody";
function App() {
  const [users, setUsers] = useState<User[]>([]); //todo comment: in "users" niaze kollan? kollan age result nadsahtim begoo no result found
  const [isLoading, setIsLoading] = useState(false); // manzooretoon az todo bala ro motevajeh nashodam
  const [isInitial, setisInitial] = useState(true);
  const [error, setError] = useState({ isError: false, message: "" });

  const setUserHandler = (users: User[]) => {
    setUsers(users);
  };
  const setIsLoadingHandler = (value: boolean) => {
    setIsLoading(value);
  };
  const setIsInitialHandler = (value: boolean) => {
    setisInitial(value);
  };
  const setErrorHandler = (value: { isError: boolean; message: string }) => {
    setError(value);
  };
  const clear = () => {
    setUsers([]);
    setIsLoading(false);
    setError({ isError: false, message: "" });
    setisInitial(true);
  };

  return (
    <Card>
      <div
        className="p-2 bg-secondary-subtle rounded-3 h-100 overflow-auto "
        style={{ width: "300px" }}
      >
        <Filters
          onSetError={setErrorHandler}
          onSetIsInitial={setIsInitialHandler}
          onSetIsLoading={setIsLoadingHandler}
          onSetUser={setUserHandler}
          onClear={clear}
        />
      </div>
      <div className="p-2 h-100 w-100 text-center overflow-auto">
        <SearchResult
          error={error}
          isInitial={isInitial}
          isLoading={isLoading}
          users={users}
        />
      </div>
    </Card>
  );
}

export default App;

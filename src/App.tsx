import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/UI/Card";
import Filter from "./components/FilterItems/Filters";
import SerchResult from "./components/Results/SerchResult";
import { User } from "./Interfaces/FiltersBody";
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitial, setisInitial] = useState(true);
  const [error, setError] = useState({ isError: false, message: "" });

  const setUserHandler = (users: User[]) => {
    setUsers(users);
  };
  const setIsLoadingHandler = (value: boolean) => {
    setIsLoading(value);
  };
  const setisInitialHandler = (value: boolean) => {
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
      <div className="p-2 bg-secondary-subtle rounded-3 h-100 overflow-auto ">
        <Filter
          onSetError={setErrorHandler}
          onSetIsInitial={setisInitialHandler}
          onSetIsLoading={setIsLoadingHandler}
          onSetUser={setUserHandler}
          onClear={clear}
        />
      </div>
      <div className="p-2 h-100 w-100 text-center overflow-auto">
        <SerchResult
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

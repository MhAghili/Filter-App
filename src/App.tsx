import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Filter from "./components/Filters";
import UsersContent from "./components/UsersContent";
function App() {
  return (
    <Card>
      <div className="p-2 bg-secondary-subtle rounded-3 h-100 overflow-auto ">
        <Filter />
      </div>
      <div className="p-2 h-100 w-100 text-center ">
        <UsersContent />
      </div>
    </Card>
  );
}

export default App;

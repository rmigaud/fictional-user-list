import React from "react";

import Card from "./components/card/Card";
import AddUser from "./components/users/AddUser";

function App() {
  return (
    <div>
      <Card>
        <AddUser label="label" />
      </Card>
    </div>
  );
}

export default App;

import "./App.css";
import "./css/dashboard.css";
import "./css/login.css";
import Login from "./Components/login";
import Dashboard from "./Components/Dashboard";

import { useState } from "react";
function App() {
  const [login, setLogin] = useState(true);
  return (
    <div className="App">
      {login ? (
        <Login setLogin={setLogin} />
      ) : (
        <Dashboard setLogin={setLogin} s />
      )}
    </div>
  );
}

export default App;

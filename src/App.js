import React, { useState } from "react";
import NavBar from "./components/NavBar";
import People from "./components/People";
import Plantes from "./components/Plantes";

function App() {
  const [page, setPage] = useState('planets');

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Hello BOSS!!</h1>
      <NavBar />
      <div className="content">
        {page === "planets" ?
          <Plantes />
          :
          <People />
        }
      </div>
    </div>
  );
}

export default App;

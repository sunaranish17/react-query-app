import React, { useState } from "react";
import NavBar from "./components/NavBar";
import People from "./components/People";
import Plantes from "./components/Plantes";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  const [page, setPage] = useState('planets');

  return (
    <>
    <div className="App">
      <h1>Hello BOSS!!</h1>
      <NavBar setPage={setPage} />
      <div className="content">
        {page === "planets" ?
          <Plantes />
          :
          <People />
        }
      </div>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;

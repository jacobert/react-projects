import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [list, setList] = useState([...data]);

  const handleList = (list) => {
    typeof list !== "undefined" && list.length > 0
      ? setList([])
      : setList([...data]);
  };

  return (
    <React.Fragment>
      <main>
        <section className="container">
          <h3>{list.length} birthdays today</h3>
          <List people={list} />
          <button
            className="btn"
            type="button"
            onClick={() => handleList(list)}
          >
            {typeof list !== "undefined" && list.length > 0
              ? "Clear all"
              : "List all"}
          </button>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let provisionalArray = ["all"];

    items.map((item) => {
      if (provisionalArray.indexOf(item.category) === -1) {
        provisionalArray.push(item.category);
      }
    });

    setCategories(provisionalArray);

    // Più maniere di filtrare le array con elementi unici

    /* setCategories(
      provisionalArray.filter((valore, suoIndice, array) => {
        return array.indexOf(valore) == suoIndice;
      })
    ); */

    /*     setCategories([...new Set(provisionalArray)]);     */
  }, []);

  return <h2>menu project setup</h2>;
}

export default App;

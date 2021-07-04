import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

/*
  useEffect(() => {
    let provisionalArray = ["all"];

    items.map((item) => {
      if (provisionalArray.indexOf(item.category) === -1) {
        provisionalArray.push(item.category);
      }
    });

    setCategories(provisionalArray);

    // Più maniere di filtrare le array con elementi unici

     setCategories(
      provisionalArray.filter((valore, suoIndice, array) => {
        return array.indexOf(valore) == suoIndice;
      })
    ); */

/*     setCategories([...new Set(provisionalArray)]);     
  }, []); */

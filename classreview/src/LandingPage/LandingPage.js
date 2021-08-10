import React, { useState } from "react";

import "@elastic/react-search-ui-views/lib/styles/styles.css";
//import useReactRouter from "use-react-router";
//import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import { NavBar } from "../components/NavBar/NavBar";

export function LandingPage(props) {
  const [term, setTerm] = useState("");
  // const { history } = useReactRouter();
  // function handleSearch() {
  //   history.push(`/search`);
  // }
  return (
    <body>
      <div className={styles["parent-container"]}>
        <NavBar />
        <div className={styles["hero-section"]}>
          <div className={styles["container"]}>
            <div className={styles["heading"]}>Search your favorite class</div>
            <div className="search-area" style={{ width: "50%" }} />

            <input
              className={`input  ${styles["searchbar"]}`}
              type="text"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              placeholder="Start searching.... "
              spellCheck="false"
            />

            <button
              type="button"
              className={`btn btn-primary ${styles["searchbutton"]} searchbutton`}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

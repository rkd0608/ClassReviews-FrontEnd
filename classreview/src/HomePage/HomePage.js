import React, { useState } from "react";
import styles from "./HomePage.module.css";
import { UserNavBar } from "../components/UserNavBar/UserNavBar";

export function HomePage(props) {
  // const { handleSignout } = useContext(firebaseAuth);
  const [term, setTerm] = useState("");
  return (
    // <div>
    //   Home Screen
    //   <button onClick={() => handleSignout()}>Sign Out </button>
    // </div>

    <body>
      <div className={styles["parent-container"]}>
        <UserNavBar />
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

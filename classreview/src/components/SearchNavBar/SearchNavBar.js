import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchNavBar.module.css";

export function SearchNavBar(props) {
  const [term, setTerm] = useState(props.term || "");
  return (
    <div className={styles["parent-container"]}>
      <nav
        className={`navbar ${styles["container"]}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className={`navbar-brand ${styles["navbar-container"]}`}>
          <Link to="/">
            <span className={styles["heading"]} style={{ cursor: "pointer" }}>
              Class Reviews
            </span>
          </Link>
          <input
            className={`input  ${styles["searchbar"]}`}
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            placeholder="Search for more classes "
            spellCheck="false"
          />
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className={`buttons ${styles["buttons"]}`}>
              <Link to="/users/register">
                <button
                  className="button is-primary"
                  style={{ marginRight: "0.5rem" }}
                >
                  <strong>Sign up</strong>
                </button>
              </Link>
              <Link to="/users/signin">
                <button className="button is-light">Log in</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

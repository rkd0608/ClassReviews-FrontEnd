import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import { SearchNavBar } from "../components/SearchNavBar/SearchNavBar";
import { SearchResults } from "../components/SearchResults/SearchResults";

export function Search(props) {
  return (
    <body>
      <div className={styles["parent-container"]}>
        <div className="navbar-container">
          <SearchNavBar />
        </div>
        <div className={styles["heading"]}>
          <h1>Search results for "CSE 368"</h1>
        </div>
        <div className={styles["searchresults-container"]}>
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
        </div>
        <div className={styles["course-button"]}>
          <h4 className="subtitle is-4" style={{ fontFamily: "Roboto" }}>
            Don't see your course listed here?{" "}
          </h4>

          <Link to="/addCourse">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              style={{ marginLeft: "1rem", textDecoration: "none" }}
            >
              Add course
            </button>
          </Link>
        </div>
      </div>
    </body>
  );
}

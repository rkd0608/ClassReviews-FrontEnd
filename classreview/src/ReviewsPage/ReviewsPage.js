import React from "react";
import styles from "./ReviewsPage.module.css";
import { SearchNavBar } from "../components/SearchNavBar/SearchNavBar";
import { CommentsThread } from "../components/CommentsThread/CommentsThread";
import { CenteredLevel } from "../components/CenteredLevel/CenteredLevel";

export function ReviewsPage() {
  return (
    <div className={` ${styles["parent-container"]}`}>
      <div className="navbar-container">
        <SearchNavBar />
      </div>
      <div className={styles["rating-heading"]}>
        <p className="title is-1">CSE 368</p>
        <p class="subtitle is-1" style={{ paddingLeft: "1rem" }}>
          Introduction to Artifical Intelligence
        </p>
      </div>
      <div className={styles["centered-level"]}>
        <CenteredLevel />
      </div>
      <div className="reviews-container">
        <CommentsThread />
      </div>
    </div>
  );
}

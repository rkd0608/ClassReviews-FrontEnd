import React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`${styles["footer"]}`}>
      <div className={`content has-text-centered ${styles["footer-text"]}`}>
        <p>Developed by Rakshit Dwivedi and Anant Patni</p>
      </div>
    </footer>
  );
}

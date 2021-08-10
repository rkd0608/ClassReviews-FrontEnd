import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../../provider/AuthProvider";
import styles from "./UserNavBar.module.css";

export function UserNavBar() {
  const { handleSignout } = useContext(firebaseAuth);
  return (
    <div className={styles["parent-container"]}>
      <nav
        className={`navbar ${styles["container"]}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/">
            <span className={styles["heading"]} style={{ cursor: "pointer" }}>
              Class Reviews
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="btn-group dropleft" style={{ marginRight: "1rem" }}>
              <button
                type="button"
                className="btn btn-info dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/#">
                  Saved Classes
                </a>
                <a className="dropdown-item" href="/#">
                  Notifications
                </a>
                <a className="dropdown-item" href="/#">
                  Profile Settings
                </a>
                <div className="dropdown-divider"></div>
                <button class="dropdown-item" onClick={() => handleSignout()}>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

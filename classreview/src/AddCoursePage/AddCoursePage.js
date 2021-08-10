import React from "react";
import styles from "./AddCoursePage.module.css";

export function AddCoursePage() {
  return (
    <div
      style={{
        backgroundColor: "#665cac",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className={styles["parent-container"]}>
        <div
          className={`card text-center ${styles["card-container"]}`}
          style={{ width: "40rem" }}
        >
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "25px" }}>
              Add your course
            </h5>
            <p className="card-text" style={{ paddingBottom: "2rem" }}>
              If you don't see your course, add it from here!
            </p>
            <div className="form-container" style={{ paddingBottom: "1.5rem" }}>
              <label class="label" style={{ float: "left", fontSize: "20px" }}>
                Course code
              </label>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="example: CSE 368, AS 345....."
                aria-label=".form-control-lg example"
                autoCapitalize="characters"
                autoCorrect="off"
                spellCheck="false"
              ></input>
            </div>
            <div className="form-container" style={{ paddingBottom: "1.5rem" }}>
              <label class="label" style={{ float: "left", fontSize: "20px" }}>
                Course Name
              </label>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="example: Data Structures, Operating Systems"
                aria-label=".form-control-lg example"
              ></input>
            </div>
            <div className="form-container" style={{ paddingBottom: "1.5rem" }}>
              <label class="label" style={{ float: "left", fontSize: "20px" }}>
                Instructor Name
              </label>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="example: Andrew Hughes, Matthew Hertz...."
                autoCapitalize="words"
                spellCheck="false"
                autoCorrect="off"
                aria-label=".form-control-lg example"
              ></input>
            </div>
            <a href="/#" className="btn btn-primary">
              Add Course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

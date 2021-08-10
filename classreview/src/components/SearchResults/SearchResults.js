import React from "react";
//import firebase from "../../firebase/firebase";
import { Link } from "react-router-dom";
import styles from "./SearchResults.module.css";
import { Card } from "react-bootstrap";

export function SearchResults() {
  // useEffect(() => {
  //   const fetchCourse = async () => {
  //     courseRef.once("value", function (snapshot) {
  //       snapshot.forEach(function (childSnapshot) {
  //         var childKey = childSnapshot.key;
  //         var childData = childSnapshot.val();
  //         console.log(childKey);
  //         console.log(childData);
  //       });
  //     });
  //   };
  // }, []);

  // const [counter, setcounter] = useState(300);

  return (
    <div className={`container-fluid ${styles["parent-container"]}`}>
      <Card
        style={{
          width: "60%",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="card-container">
            <Link to="/reviews">
              <Card.Title style={{ cursor: "pointer" }}>
                <strong>CSE 250</strong>
              </Card.Title>
            </Link>
            <Card.Subtitle className="mb-2 text-muted">
              Instructed by Andrew Hughes
            </Card.Subtitle>

            <Card.Text style={{ paddingBottom: "1rem" }}>
              Data Structures
            </Card.Text>

            <Card.Link href="/reviews">
              <i
                className="fas fa-comment-alt"
                style={{ marginRight: "0.2rem" }}
              ></i>{" "}
              10 Reviews
            </Card.Link>
            <Card.Link href="/reviews">
              <i className="fas fa-share" style={{ marginRight: "0.2rem" }}></i>
              Share
            </Card.Link>
            <Card.Link href="/reviews">
              <i class="fas fa-bookmark" style={{ marginRight: "0.2rem" }}></i>
              Save
            </Card.Link>
          </div>
          {/* <div className={styles["votes"]}>
            <button
              className="fas fa-chevron-up fa-2x"
              style={{ marginBottom: "0.3rem" }}
              onClick={() => {
                setcounter(counter + 1);
                console.log("Up button clicked");
              }}
            ></button>
            <p className="vote-number">{counter}</p>
            <button
              className="fas fa-chevron-down fa-2x"
              style={{ marginTop: "0.3rem" }}
              onClick={() => {
                setcounter(counter - 1);
                console.log("Down button clicked");
              }}
            ></button>
          </div> */}
        </Card.Body>
      </Card>
    </div>
  );
}

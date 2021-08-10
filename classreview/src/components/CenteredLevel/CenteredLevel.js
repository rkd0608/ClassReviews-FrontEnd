import React from "react";

export function CenteredLevel() {
  return (
    <div className="parent-container">
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Reviews</p>
            <p className="title">123</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Shares</p>
            <p className="title">250K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Saves</p>
            <p className="title">789</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

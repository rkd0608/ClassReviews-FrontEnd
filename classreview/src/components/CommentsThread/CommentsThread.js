import React from "react";
import styles from "./CommentsThread.module.css";

export function CommentsThread() {
  return (
    <div className={styles["parent-container"]}>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="profile"
            />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>frostydude95</strong>
              <br />
              I love this class. It was so great! It was a little difficult but
              the workload was manageable. Would totally recommend this class!
              <br />
              <small>
                <a href="/#">Like</a> · <a href="/#">Reply</a> · 3 hrs
              </small>
            </p>
          </div>

          <article class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="profile"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>lucifer8454</strong>
                  <br />
                  Totally agree with you! It was an easy A class for me.
                  <br />
                  <small>
                    <a href="/#">Like</a> · <a href="/#">Reply</a> · 2 hrs
                  </small>
                </p>
              </div>

              <article class="media">
                But the projects were a little difficult so I'd assign some
                extra time to it.
              </article>

              <article class="media">
                Otherwise it was really fun. Got to learn a lot of new stuff
                about AI. Take it with Sreyasee she is a good professor.
              </article>
            </div>
          </article>

          <article class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="profile"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>buffykid64</strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis
                  vel. Maecenas varius felis sit amet magna vestibulum euismod
                  malesuada cursus libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a href="/#">Like</a> · <a href="/#">Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="profile"
            />
          </p>
        </figure>
        <div class="media-content">
          <div class="field">
            <p class="control">
              <textarea
                class="textarea"
                placeholder="Add a comment..."
              ></textarea>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button">Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

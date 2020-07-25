import React from "react";
import styles from "./Sidebar.module.scss";
import { Link, withRouter } from "react-router-dom";

const Sidebar = ({ history }) => {
  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return styles.title;
    }
  };

  return (
    <div className={styles.parentSidebar}>
      <div className={styles.childSidebar}>
        <ul className={styles.sideBarList}>
          <Link to="/">
            <li className={isActive(history, "/")}>
              <span>CHAMP</span>
              <span>A film by kinectik studios</span>
            </li>
          </Link>
          <Link to="chapter-1">
            <li className={isActive(history, "/chapter-1")}>
              <span>Chapter 1</span>
              <span>William Lartey</span>
            </li>
          </Link>

          <Link to="chapter-2">
            <li className={isActive(history, "/chapter-2")}>
              <span>Chapter 2</span>
              <br />
              <span>Nii Tagoe</span>
            </li>
          </Link>

          <Link to="/chapter-3">
            <li className={isActive(history, "/chapter-3")}>
              <span>Chapter 3</span>
              <span>Joseph Tetteh</span>
            </li>
          </Link>
          <Link to="/epilogue">
          <li className={isActive(history, "/epilogue")}>
            <span>Epilogue</span>
          </li>
          </Link>
          {/* <li>
            <span>PROFILE</span>
            <span>REGINALD ANIM</span>
          </li>
          <li>
            <span>PROFILE</span>
            <span>TRAPCHALLA</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);

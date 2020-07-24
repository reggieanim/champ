import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.parentSidebar}>
      <div className={styles.childSidebar}>
        <ul className={styles.sideBarList}>
          <li className={styles.title}>
            <span>CHAMP</span>
          </li>
          <li >
            <span>Chapter 1</span>
            <span>William Lartey</span>
          </li>
          <li>
            <span>Chapter 2</span><br/>
            <span>Nii Tagoe</span>
          </li>
          <li>
            <span>Chapter 3</span>
            <span>Joshua Clottey</span>
          </li>
          <li>
            <span>CREDITS</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

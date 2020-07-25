import React from "react";
import styles from "./Credits.module.scss";
import { motion } from "framer-motion";

const Credits = () => {
  return (
    <div>
      <div className={styles.creator1}>
        <a href="https://regiew.com">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 6.5 }}
            className={styles.createdBy}
          >
            REGINALD ANIM
          </motion.h1>
        </a>
      </div>
      <div className={styles.creator2}>
          <a href="https://www.instagram.com/traptchalla/">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7, duration: 6.5 }}
          className={styles.createdBy}
        >
          Khalid Keith-Pierre Iddisah
        </motion.h1>
        </a>
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 3.5 }}
        className={styles.createdBy}
      >
        CREATED BY
      </motion.h2>
    </div>
  );
};

export default Credits;

import React, { useState } from "react";
import styles from "./Champ.module.scss";
import { SliceButton } from "reg-components";
import { motion } from "framer-motion";

const Champ = () => {
  const handleMute = () => {
    setMuted((prevState) => {
      return !prevState;
    });
  };
  const [muted, setMuted] = useState(false);

  return (
    <div className={styles.champParent}>
      <video className={styles.champ} autoPlay loop muted={muted}>
        <source src="https://i.imgur.com/1InZsdT.mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
      initial={{opacity: 0}} animate={{opacity:0.8}} transition={{delay: 3.5, duration: 3.5}}
        className={styles.textContainer}
      >
        <h1>CHAMP</h1>
        <h2>
          From the creative vision of Reginald Anim and KinectiK Studios
          <br />
          Coming soon
        </h2>
      </motion.div>
      <SliceButton
        onClick={handleMute}
        className={styles.mute}
        text={muted ? "sound" : "mute"}
      />
    </div>
  );
};

export default Champ;

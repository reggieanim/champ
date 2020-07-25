import React, { useState, useEffect } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import styles from "./JoshuaClottey.module.scss";
import { SliceButton } from "reg-components";
import { motion } from "framer-motion";

const Champ = () => {
  var xDown = null;
  var yDown = null;
  const limit = 2;

  function getTouches(evt) {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (number > limit) {
      return (number = 0);
    }
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
      } else {
        /* right swipe */
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
        number++;
        setTracker(number);
      } else if (yDiff < 0 && number == 0) {
        return;
      } else {
        /* down swipe */
        number--;
        setTracker(number);
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
  let number = 0;

  const handleMute = () => {
    setMuted((prevState) => {
      return !prevState;
    });
  };
  const [muted, setMuted] = useState(true);
  const [initSound, setInitSound] = useState(false);
  const [tracker, setTracker] = useState(0);

  const handleInitial = () => {
    if (initSound) {
      return;
    }
    handleMute();
    setInitSound(true);
  };

  const scroller = () => {
    if (tracker > 2) {
      return setTracker(0);
    }

    setTracker(tracker + 1);
  };
  const traverse = (event) => {
    if (number > limit) {
      return (number = 0);
    }

    if (number === 0 && event.deltaY < 0) {
      return;
    }
    event.deltaY < 0 ? number-- : number++;

    setTracker(number);
  };

  const muteButton = () => {
    if (tracker === 0 || tracker > 2) {
      return (
        <SliceButton
          onClick={handleMute}
          className={styles.mute}
          text={muted ? "sound" : "mute"}
        />
      );
    }
    return;
  };

  const backDrop = () => {
    switch (tracker) {
      case 0:
        return (
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3.5 }}
            key={7567565003}
            className={styles.champ}
            autoPlay
            muted={muted}
          >
            <source src="https://i.imgur.com/2e54QWe.mp4" />
            Your browser does not support the video tag.
          </motion.video>
        );
      case 1:
        return (
          <motion.div
            className={styles.videoContainer}
            initial={{ y: 300, x: -300 }}
            animate={{ x: "-40vw", y: "-40vh" }}
            transition={{ duration: 0.5 }}
          >
            <Video
              autoPlay
              key={575632575 + number}
              className={styles.videoPlayer}
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              poster="https://i.imgur.com/QMVY0ud.png"
              onCanPlayThrough={() => {
                // Do stuff
              }}
            >
              <source src="https://i.imgur.com/2e54QWe.mp4" type="video/webm" />
              <track
                label="English"
                kind="subtitles"
                srcLang="en"
                src="http://source.vtt"
                default
              />
            </Video>
            <h1>JOSHUA CLOTTEY </h1>
          </motion.div>
        );
      case 2:
        return (
          <motion.img
            key={69 + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            src="https://i.imgur.com/PMeG84N.jpg"
            className={styles.champ}
          />
        );
      default:
        return (
          <video className={styles.champ} autoPlay muted={muted}>
            <source src="https://i.imgur.com/2e54QWe.mp4" />
            Your browser does not support the video tag.
          </video>
        );
    }
  };

  const textDrop = () => {
    switch (tracker) {
      case 0:
        return (
          <motion.div
            key={586465 + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 3.5, duration: 3.5 }}
            className={styles.textContainer}
          >
            <h1>CHAPTER 3</h1>
            <h2>
              "In the ring i have different names"
              <br />
            </h2>
          </motion.div>
        );
      case 1:
        return;

      case 2:
        return (
          <motion.div
            key={15574467 + number}
            transition={{ duration: 1.2, ease: "linear" }}
            className={styles.textContainerPop1}
          >
            <h1>NEXT</h1>
            <h2>
            Epilogue
              <br />
            </h2>
          </motion.div>
        );
      default:
        return (
          <motion.div
            key={25664 + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 3.5, duration: 3.5 }}
            className={styles.textContainer}
          >
            <h1>CHAPTER 3</h1>
            <h2>
              "In the ring i have different names"
              <br />
            </h2>
          </motion.div>
        );
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", traverse);
    window.addEventListener("touchstart", handleTouchStart, false);
    window.addEventListener("touchmove", handleTouchMove, false);
    console.log("hi");
    return () => {
      window.removeEventListener("wheel", traverse);
      window.removeEventListener("touchstart", handleTouchStart, false);
      window.removeEventListener("touchmove", handleTouchMove, false);
    };
  }, []);
  return (
    <div className={styles.champParent} onClick={handleInitial}>
      {backDrop()}

      {textDrop()}

      <motion.div
        key={984589}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 3.5, duration: 3.5 }}
        className={styles.textContainer2}
      >
        <SliceButton text="scroll" onClick={scroller} />
      </motion.div>
      {muteButton()}
    </div>
  );
};

export default Champ;

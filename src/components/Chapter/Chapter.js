import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import "react-html5video/dist/styles.css";

import { SliceButton } from "reg-components";
import { motion } from "framer-motion";
import styles from "./Chapter.module.scss";

const Chapter = ({
  chapter,
  chapterText,
  boxer,
  openingVidLink,
  defaultImg,
  next,
  videoLink,
  nextLink,
  id,
}) => {
  var xDown = null;
  var yDown = null;
  let limit = 2;

  function getTouches(evt) {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  }

  let number = 0;
  limit = 3;

  // state properties
  // const [muted, setMuted] = useState(true);
  // const [initSound, setInitSound] = useState(false);
  const [tracker, setTracker] = useState(0);

  // mute function
  // const handleMute = (e = 0) => {
  //   if (e===0) {
  //     setMuted((prevState) => {
  //       return !prevState;
  //     });
  //   } else {
  //     e.preventDefault()
  //     setMuted((prevState) => {
  //       return !prevState;
  //     });
  //   }
  //   }

  // handle initialMute

  // const handleInitial = () => {
  //   if (initSound) {
  //     return;
  //   }
  //   handleMute();
  //   setInitSound(true);
  // };

  // Scroll on button tracker function
  const scroller = (e) => {
    e.preventDefault();
    if (tracker > limit) {
      return setTracker(0);
    }

    return setTracker(tracker + 1);
  };

  //Scroll on mouseWheel tracker function
  const traverse = (event) => {
    if (tracker > limit) {
      return setTracker(0);
    }

    if (tracker === 0 && event.deltaY < 0) {
      return;
    }

    if (event.deltaY < 0) {
      setTracker(tracker - 1);
    } else if (event.deltaY > 0) {
      setTracker(tracker + 1);
    }
  };

  // Swipe on mousewheel tracker function
  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (tracker > limit) {
      setTracker(0);
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

        setTracker(tracker + 1);
      } else if (yDiff < 0 && tracker === 0) {
        return;
      } else {
        /* down swipe */

        setTracker(tracker - 1);
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  //mute conditional render
  // const muteButton = () => {

  //   if (tracker === 0 || tracker > 2) {
  //     return (
  //       <SliceButton
  //         onClick={handleMute}
  //         className={styles.mute}
  //         text={muted ? "sound" : "mute"}
  //       />
  //     );
  //   }
  //   return;
  // };

  const backDrop = () => {
    switch (tracker) {
      case 0:
        return (
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3.5 }}
            key={`${id}7567565003`}
            className={styles.champ}
            autoPlay
            muted
          >
            <source src={openingVidLink} />
            Your browser does not support the video tag.
          </motion.video>
        );
      case 1:
        return (
          <motion.div
            className={styles.videoContainer}
            initial={{ y: 300, x: -300 }}
            animate={{ x: "-35vw", y: "-35vh" }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
 
            <iframe
            title={boxer}
              src={videoLink}
              className={styles.videoPlayer}
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
            </p>
            <h1>{boxer}</h1>
          </motion.div>
        );
      case 2:
        return (
          <motion.img
            key={`${id}69` + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            src={defaultImg}
            className={styles.champ}
            exit={{ opacity: 0 }}
          />
        );
      case 3:
        return <Redirect to={nextLink} />;
      default:
        return (
          <video className={styles.champ} autoPlay muted>
            <source src={openingVidLink} />
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
            key={`${id}586465` + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 3.5, duration: 3.5 }}
            className={styles.textContainer}
          >
            <h1>{chapter}</h1>
            <h2>
              {chapterText}
              <br />
            </h2>
          </motion.div>
        );
      case 1:
        return;

      case 2:
        return (
          <motion.div
            key={`${id}15574467` + number}
            transition={{ duration: 1.2, ease: "linear" }}
            className={styles.textContainerPop1}
          >
            <h1>NEXT</h1>
            <h2>
              {next}
              <br />
            </h2>
          </motion.div>
        );
      default:
        return (
          <motion.div
            key={`${id}25664` + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 3.5, duration: 3.5 }}
            className={styles.textContainer}
          >
            <h1>{chapter}</h1>
            <h2>
              {chapterText}
              <br />
            </h2>
          </motion.div>
        );
    }
  };

  useEffect(() => {
    const throttledtraverse = _.throttle(traverse, 600);
    window.addEventListener("wheel", throttledtraverse, false);
    window.addEventListener("touchstart", handleTouchStart, false);
    window.addEventListener("touchmove", handleTouchMove, false);

    return () => {
      window.removeEventListener("wheel", throttledtraverse, false);
      window.removeEventListener("touchstart", handleTouchStart, false);
      window.removeEventListener("touchmove", handleTouchMove, false);
    };
  }, [tracker]);
  return (
    <div className={styles.champParent}>
      {backDrop()}
      {textDrop()}
      <motion.div
        key={984589}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 3.5, duration: 3.5 }}
        className={styles.textContainer2}
      >
        {tracker === 0 ? (
          <SliceButton text="play" onClick={scroller} />
        ) : (
          <SliceButton text="scroll" onClick={scroller} />
        )}
      </motion.div>
      {/* {muteButton()} */}
    </div>
  );
};

export default Chapter;

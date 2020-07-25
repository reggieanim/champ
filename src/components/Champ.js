import React, { useState, useEffect } from "react";
import styles from "./Champ.module.scss";
import _ from "lodash";
import { SliceButton } from "reg-components";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";


const Champ = ({nextLink}) => {
  var xDown = null;
  var yDown = null;

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
    if (number > 2) {
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
      } else if (yDiff < 0 && number === 0) {
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
    if (number > 3) {
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
            // exit={{
            //   opacity: 0,
            //   transition: {
            //     delay: 3,
            //     duration: 5,
            //   },
            // }}
            className={styles.champ}
            autoPlay
            loop
            muted={muted}
          >
            <source src="https://i.imgur.com/1InZsdT.mp4" />
            Your browser does not support the video tag.
          </motion.video>
        );
      case 1:
        return (
          <motion.img
            key={57575 + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            src="https://sportsafric.com/wp-content/uploads/2020/01/BUKOM.jpg"
            className={styles.champ}
            // exit={{
            //   opacity: 0,
            //   transition: {
            //     delay: 3,
            //     duration: 5,
            //   },
            // }}
          />
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

        case 3: 
        return (
          <Redirect to={nextLink}/>
        )
      default:
        return (
          <video className={styles.champ} autoPlay loop muted={muted}>
            <source src="https://i.imgur.com/1InZsdT.mp4" />
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
            key={55 + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 3.5, duration: 3.5 }}
            className={styles.textContainer}
          >
            <h1>CHAMP</h1>
            <h2>
              From the creative vision of Reginald Anim and KinectiK Studios
              <br />
            </h2>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key={16767 + number}
            initial={{ y: "+200vh", opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className={styles.textContainerPop1}
          >
            <h1>BUKOM</h1>
            <h2>
              Bukom is a fishing community in the Jamestown district of Accra,
              the capital of Ghana. This little community is known for producing
              world boxing champions like Ike Quartey, Azumah Nelson and Joshua
              Clottey; to name a few. In Bukom, there are boxing gyms set up all
              over. Here, boxing is a very big thing and is a part of everyday
              life.
              <br />
            </h2>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key={155767 + number}
            // initial={{ y: "+200vh", opacity:0 }}
            // animate={{ y: 0, opacity: 0.8}}
            transition={{ duration: 1.2, ease: "linear" }}
            className={styles.textContainerPop1}
          >
            <h1>FILM</h1>
            <h2>
              CHAMP documents three aspiring teenage boxers – William Lartey,
              Nii Armah Tagoe, and Joseph Tetteh – reflecting on how they got
              into boxing, their work ethic and challenges, and how far they
              want to go in their careers.
              <br />
            </h2>
          </motion.div>
        );
      default:
        return (
          <motion.div
            key={2 + number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 3.5, duration: 3.5 }}
            className={styles.textContainer}
          >
            <h1>CHAMP</h1>
            <h2>
              From the creative vision of Reginald Anim and KinectiK Studios
              <br />
            </h2>
          </motion.div>
        );
    }
  };

  useEffect(() => {
    const throttledtraverse = _.throttle(traverse, 600);

    window.addEventListener("wheel",  throttledtraverse);
    window.addEventListener("touchstart", handleTouchStart, false);
    window.addEventListener("touchmove", handleTouchMove, false);
    console.log("hi");
    return () => {
      window.removeEventListener("wheel", throttledtraverse);
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

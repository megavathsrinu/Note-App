import React from "react";
import styles from "./Home.module.css";
import image from "../../assets/pocket-notes-svg.png";
import { BiSolidLock } from "react-icons/bi";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={image} alt="Pocket Notes" />
        </div>
        <div>Pocket Notes</div>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.lockIcon}>
        <BiSolidLock />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
};

export default Home;

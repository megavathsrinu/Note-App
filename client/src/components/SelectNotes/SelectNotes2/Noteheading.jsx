import React, { useContext } from "react";
import styles from "../../SelectNotes/SelectNotes.module.css";
import AppContext from "../../../context/NoteContext";

function Noteheading({ noteHeading }) {
  const { isMobile, setHide, setCurrentGroup } = useContext(AppContext);
  const { letters, name, color } = noteHeading;

  const handleClick = () => {
    setCurrentGroup(noteHeading);
    if (isMobile) {
      setHide(true);
    }
  };

  return (
    <div onClick={handleClick} className={`${styles.groupName} `} key={name}>
      <div className={styles.icon} style={{ backgroundColor: color }}>
        {name && letters}
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Noteheading;

import React, { useContext } from "react";
import styles from "../SelectNotes/SelectNotes.module.css";
import CreateNote from "./SelectNotes2/CreateNote";
import NoteHeading from "./SelectNotes2/Noteheading";
import AppContext from "../../context/NoteContext";

function SelectNotes() {
  const { modal, toggleModal, noteHeadings, hide } = useContext(AppContext);

  return (
    <div className={`${styles.container} ${hide ? styles.hidden : ""}`}>
      <h2>Pocket Notes</h2>
      <CreateNote />
      {noteHeadings.length > 0 && (
        <>
          {noteHeadings.map((noteHeading) => (
            <NoteHeading key={noteHeading.name} noteHeading={noteHeading} />
          ))}
        </>
      )}
    </div>
  );
}

export default SelectNotes;

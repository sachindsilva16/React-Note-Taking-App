import React from "react";
import EventNoteIcon from '@mui/icons-material/EventNote';

const Heading = () => {
  return (
    <header>
      <h1><EventNoteIcon/><span style={{marginLeft:"6px"}}>Keeper App</span></h1>
    </header>
  );
};

export default Heading;

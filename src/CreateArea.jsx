import React,{useState} from "react";
import InputText from "./InputText";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

// import { Zoom } from '@mui/material';


const CreateArea = (props) => {

  const [isClicked,setIsClicked]=useState(false);

  var isInputEnabled=false;

  function handleNoteClick(){
      setIsClicked(true);
      
  }



  function handleSubmit(event) {
    event.preventDefault();
  }

  




  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {(isClicked===true) &&  <InputText
          name="title"
          id="titleId"
          placeholder="Title"
          onChange={props.handleChange}
        /> }

        {isClicked===true && <textarea
          id="contentId"
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={props.handleChange}
          onClick={handleNoteClick}
        />}
        {isClicked ===false && <textarea
          style={{cursor:"select"}}
          id="contentId-2"
          name="content"
          placeholder="Click Me to write a note..."
          rows="1"
          onChange={props.handleChange}
          onClick={handleNoteClick}
        />}
        <Zoom in={isClicked ? true : false}>
          <Fab onClick={props.handleAddNote}><AddIcon /></Fab>

        </Zoom>
        {/* <button onClick={props.handleAddNote}><AddCircleIcon /></button> */}

      </form>
    </div>
  );
};

export default CreateArea;

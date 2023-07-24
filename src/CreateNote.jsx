import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Delete } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Zoom } from "@mui/material";

export default function CreateNote(props) {
  return (
    <Zoom in={true} timeout={500} appear={true}>
      <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}
      </p>
      <button
        id="deleteButton"
        onClick={() => {
          props.onDeleteClick(props.id);
        }}
      >
       <DeleteIcon/>
        </button>
    </div>
    </Zoom>
  );
}

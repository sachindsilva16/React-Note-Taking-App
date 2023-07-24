import "./styles.css";
import Heading from "./Heading";
import Footer from "./Footer";
import { useState } from "react";
import CreateArea from "./CreateArea";
import CreateNote from "./CreateNote";

export default function App() {
  const [inputTitle, setInputTitle] = useState({
    title: "",
    content: ""
  });

  var [count, setCount] = useState(0);

  const [noteCard, setNoteCard] = useState([]);

  function handleChange(event) {
    var { name, value } = event.target;

    setInputTitle((previousValue) => {
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  function handleAddNote() {
    if (inputTitle.title==="" && inputTitle.content==="") {
      return null;
    } else {
      setNoteCard((previousValue) => {
        return [...previousValue, inputTitle];
      });
    setCount(count + 1);
    setInputTitle("");
    document.getElementById("titleId").value = "";
    document.getElementById("contentId").value = "";
  }

  function deleteThatNote(getId) {
    setNoteCard((previousCards) => {
      return previousCards.filter((card, index) => {
        return index !== getId;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreateArea handleChange={handleChange} handleAddNote={handleAddNote} />
      <section>
        {count > 0 &&
          noteCard.map((card, index) => {
            return (
              <CreateNote
                key={index}
                id={index}
                title={card.title}
                content={card.content}
                onDeleteClick={deleteThatNote}
              />
            );
          })}
      </section>

      <Footer />
    </div>
  );
}

import React from "react";
import Header from "./Header";
import Footer from "./Footer"

function App() {

    var [inputText, setInputText] = React.useState("");
    var [items, setItems] = React.useState([]);


    function handleNote(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItems() {
        setItems((previousItems) => {
            return [...previousItems, inputText]
        });

    }

    return (
        <div className="main-container">

            {/* -----Header Section----- */}
            <Header />

            {/* <header className="header-section">My To-Do App</header> */}




            {/* ------Note Pad----- */}

            <div className="container">
                <div className="form">
                    <input type="text" onChange={handleNote} value={inputText} />



                    <button onClick={addItems}><span>Add</span></button>

                    <div>
                        <ul>
                            {items.map(noteItems => {
                                return <li>{noteItems}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>




            {/* -----Footer Section----- */}
            <Footer />

            {/* <div className="footer">Made with 💗 by <span>'YOUR NAME'</span></div> */}

        </div>
    );
}

export default App;
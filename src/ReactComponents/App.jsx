import React from "react";
import Header from "./Header";
import Footer from "./Footer"

function App() {
    return (
        <div className="main-container">

            {/* -----Header Section----- */}
            <Header />

            {/* <header className="header-section">My To-Do App</header> */}

            <div className="container">
                <div className="form">
                    <input type="text"/>
                    <button><span>Add</span></button>

                    <div>
                        <ul>
                            <li></li>
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
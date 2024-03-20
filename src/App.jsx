import "./App.css";
import ButtonPlus from "./assets/img/components/ButtonPlus";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <header className="Titre">
        <img
          className="logo"
          src="./src/assets/img/logo.png"
          alt="calculator"
        />
        <div className="container">React Counter</div>
      </header>
      <body>
        <div className="Rectangle">
          <p className="chiffre">0</p>
          <div className="signes">
            <button className="moins">-</button>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
              className="plus"
            >
              +
            </button>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;

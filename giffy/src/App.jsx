import "./App.css";
import React, { useState, useEffect } from "react";

//API key de Giphy: HUf6IwrONXgPz1FnLy6U8PbVzgTTXwR1

const GIFS = [
  "https://media3.giphy.com/media/P4FUxTNsHMU1ArTI21/giphy.gif?cid=ecf05e47b60f11c56c3ce8315ae7a4a59f42d5e666936b7d&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/P4FUxTNsHMU1ArTI21/giphy.gif?cid=ecf05e47b60f11c56c3ce8315ae7a4a59f42d5e666936b7d&rid=giphy.gif&ct=g",
];

const DIFFERENT_GIFS = [
  "https://media3.giphy.com/media/P4FUxTNsHMU1ArTI21/giphy.gif?cid=ecf05e47b60f11c56c3ce8315ae7a4a59f42d5e666936b7d&rid=giphy.gif&ct=g",
];

function App() {
  const [gifs, setGifs] = useState([GIFS]);

  useEffect(function () {
    setGifs(DIFFERENT_GIFS);
  }, []); //El [] para que solo se ejecute la primera vez

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
        <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;

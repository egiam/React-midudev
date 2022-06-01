import React, { useState } from "react";

const Context = React.createContext({});

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]); // replace with real data from API call to server

  return (
    <Context.Provider value={{ gifs, setGifs }}>
      {/* pass gifs and setGifs to all children components */}
      {children}
    </Context.Provider>
  );
}

export default Context;

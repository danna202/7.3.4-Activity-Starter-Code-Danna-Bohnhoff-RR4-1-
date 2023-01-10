import React from "react";
import './App.css';

import UserInterface from "./UserInterface";
import StylesContext from "./StylesContext";

function App() {
  const stylin = {
    background: "#1ECD97",
    display: "inline-block",
    width: 175,
    height: 90,
    fontSize: 20,
    letterSpacing: 1,
    border: "5px solid #1ECD97",
    borderRadius: 30
  };
  
  return (    
    <main>
     <StylesContext.Provider value={stylin}>
        <h1
          style={{
            color: "orange",
            fontFamily: "Luminari, fantasy",
            fontSize: 60
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </StylesContext.Provider>

    </main>
  );
}

export default App;
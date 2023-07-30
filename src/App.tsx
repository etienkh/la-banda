import React from "react";
import logo from "./logo.svg";
import laBanda from "./labanda.gif";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          zIndex: -999,
          position: "absolute",
          top: 0,
          bottom: 0,
        }}
      >
        <img
          src={laBanda}
          style={{ width: "100vw", height: "100vh" }}
          width={"100vw"}
          height={"100vh"}
          alt={"LaBanda"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
          color: "white",
        }}
      >
        <p style={{ fontSize: "50px", marginBottom: "20px" }}>La Banda</p>
        <p style={{ fontSize: "40px", marginTop: "20px" }}>Coming Soon</p>
      </div>
    </div>
  );
}

export default App;

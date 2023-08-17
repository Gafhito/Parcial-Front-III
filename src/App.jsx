import React from "react";
import { useState } from "react";
import './App.css';
import Form from "./Form";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [user, setUser]=useState({});

  const loadInfo = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form onLoadInfo={loadInfo} />
      <Card user={user} />
    </div>
  );
}

export default App;

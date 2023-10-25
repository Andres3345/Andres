import React from "react";
import Header from "./componentes/Header";
import Body from "./componentes/Body";
import Bottom from "./componentes/Bottom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from "./componentes/Carrusel";
import "./app.css"
import Agendas from "./pages/Agendas";
import Cuadernos from "./pages/Cuadernos";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Header/>
      <Carrusel/>
      <Body/>
      <Bottom/>
      <Agendas/>
      <Cuadernos/>

    </div>
  );
}

  


export default App;

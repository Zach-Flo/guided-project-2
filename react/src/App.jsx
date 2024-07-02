import Home from "./components/Home";
import PlanetPage from "./components/PlanetPage"
import CharacterPage from "./components/CharacterPage";
import FilmPage from "./components/FilmPage"
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/characters/:id' element={<CharacterPage></CharacterPage>}></Route>
        <Route path='/planets/:id' element={<PlanetPage></PlanetPage>}></Route>
        <Route path='/films/:id' element={<FilmPage></FilmPage>}></Route>
      </Routes>
    </Router>
  )}

export default App;

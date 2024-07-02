import Home from "./components/Home";
import CharacterPage from "./components/CharacterPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/characters/:id' element={<CharacterPage></CharacterPage>}></Route>
      </Routes>
    </Router>
  )}

export default App;

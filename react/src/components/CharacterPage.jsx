import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [films, setFilms] = useState(null);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    // Fetch character data based on the id
    fetch(`http://127.0.0.1:3000/api/characters/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error('Error fetching character:', error));

    fetch(`http://127.0.0.1:3000/api/characters/${id}/films`)
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Error fetching films:', error));
  }, [id]);

  useEffect(() => {
    if(character !== null){
      fetch(`http://127.0.0.1:3000/api/planets/${character["0"].homeworld}`)
        .then((response) => response.json())
        .then((data) => setPlanet(data))
        .catch((error) => console.error("Error fetching planet:", error));
    }
  }, [character]);

  if (!character || !films || !planet) {
    return <div>Loading...</div>;
  } else {
    console.log(character)
    console.log(films)
    console.log(planet)
  }

  return (
    <>
    <div>
      <h1>{character['0'].name}</h1>
      <p>Height: {character['0'].height}</p> 
      <p>Birth Year: {character['0'].birth_year}</p> 
      <p>Gender: {character['0'].gender}</p> 
      <p>Hair Color: {character['0'].hair_color}</p> 
      <Link to={`/planets/${character['0'].homeworld}`}>Homeworld: {planet['0'].name}</Link> 
      <p>Mass: {character['0'].mass}</p> 
      <p>Eye Color: {character['0'].eye_color}</p> 
      <p>Skin Color: {character['0'].skin_color}</p> 
    </div>
    <div>
        <h1>Films appeared in:</h1>
        {films.map((film) => (
          <div key={film['0'].id} >
            <Link to={`/films/${film['0'].id}`}>{film['0'].title}</Link>
            <br></br>
          </div>
        ))}
    </div>
    </>
  );
}

export default CharacterPage;

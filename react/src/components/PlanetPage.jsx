import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function PlanetPage() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [film, setFilm] = useState(null);

  useEffect(() => {
    // Fetch planet data based on the id
    fetch(`http://127.0.0.1:3000/api/planets/${id}`)
      .then((response) => response.json())
      .then((data) => setPlanet(data))
      .catch((error) => console.error("Error fetching planet:", error));

    fetch(`http://127.0.0.1:3000/api/planets/${id}/films`)
    .then((response) => response.json())
    .then((data) => setFilm(data))
    .catch((error) => console.error("Error fetching film:", error));

    fetch(`http://127.0.0.1:3000/api/planets/${id}/characters`)
    .then((response) => response.json())
    .then((data) => setCharacters(data))
    .catch((error) => console.error("Error fetching characters:", error));
  }, [id]);

  if (!characters || !film || !planet) {
    return <div>Loading...</div>;
  } else {
    console.log(planet);
    console.log(film);
    console.log(characters);
  }

  return (
    <>
      <h1>{planet["0"].name}</h1>
      <p>Climate: {planet["0"].climate}</p>
      <p>Population: {planet["0"].population}</p>
      <p>Diameter: {planet["0"].diameter}</p>
      <p>Terrain: {planet["0"].terrain}</p>
      <p>Gravity: {planet["0"].gravity}</p>

      <div>
        <h1>Appearing Characters:</h1>
        {characters.map((character) => (
          <div key={character.id}>
            <Link to={`/characters/${character.id}`}>
              {character.name}
            </Link>
            <br></br>
          </div>
        ))}
      </div>
      
      <div>
        <h1>Films appeared in:</h1>
        {film.map((film) => (
          <div key={film["0"].id}>
            <Link to={`/films/${film["0"].id}`}>{film["0"].title}</Link>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
}

export default PlanetPage;

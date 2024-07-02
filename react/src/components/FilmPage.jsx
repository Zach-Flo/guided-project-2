import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function FilmPage () {
  const { id } = useParams();
  const [characters, setCharacters] = useState(null);
  const [film, setFilm] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    // Fetch character data based on the id
    fetch(`http://127.0.0.1:3000/api/films/${id}`)
      .then((response) => response.json())
      .then((data) => setFilm(data))
      .catch((error) => console.error("Error fetching film:", error));

    fetch(`http://127.0.0.1:3000/api/films/${id}/characters`)
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching characters:", error));

    fetch(`http://127.0.0.1:3000/api/films/${id}/planets`)
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.error("Error fetching planets:", error));
  }, [id]);

  if (!characters || !film || !planets) {
    return <div>Loading...</div>;
  } else {
    console.log(characters);
    console.log(film);
    console.log(planets);
  }

  return (
    <>
      <h1>{film["0"].title}</h1>
      <p>Opening Crawl: {film["0"].opening_crawl}</p>
      <p>Director: {film["0"].director}</p>
      <p>Release Date: {film["0"].release_date}</p>

      <div>
        <h1>Appearing Characters:</h1>
        {characters.map((character) => (
          <div key={character["0"].id}>
            <Link to={`/characters/${character["0"].id}`}>{character["0"].name}</Link>
            <br></br>
          </div>
        ))}
      </div>


      <div>
        <h1>Planets Appeared On:</h1>
        {planets.map((planet) => (
          <div key={planet["0"].id}>
            <Link to={`/planets/${planet["0"].id}`}>{planet["0"].name}</Link>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
}

export default FilmPage
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

    fetch(`http://127.0.0.1:3000/api/planets/${character.homeworld}`)
      .then(response => response.json())
      .then(data => setPlanet(data))
      .catch(error => console.error('Error fetching planet:', error));
  }, [id]);

  if (!character && !films && !planet) {
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
      <Link to={`/planets/${character['0'].homeworld}`}>Homeworld: {planet.name}</Link> 
      <p>Mass: {character['0'].mass}</p> 
      <p>Eye Color: {character['0'].eye_color}</p> 
      <p>Skin Color: {character['0'].skin_color}</p> 
    </div>
    <div>
        <h1>Films appeared in:</h1>
        {films.map((film) => (
            <Link to={`/films/${film.id}`}>{film.name}</Link>
        ))}
    </div>
    </>
  );
}

export default CharacterPage;

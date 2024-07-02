import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Fetch character data based on the id
    fetch(`http://127.0.0.1:3000/api/characters/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error('Error fetching character:', error));
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  } else {
    console.log(character)
  }

  return (
    <div>
      <h1>{character['0'].name}</h1>
      <p>Height: {character['0'].height}</p> 
      <p>Birth Year: {character['0'].birth_year}</p> 
      <p>Gender: {character['0'].gender}</p> 
      <p>Hair Color: {character['0'].hair_color}</p> 
      <p>Homeworld: {character['0'].homeworld}</p> 
      <p>Mass: {character['0'].mass}</p> 
      <p>Eye Color: {character['0'].eye_color}</p> 
      <p>Skin Color: {character['0'].skin_color}</p> 
    </div>
  );
}

export default CharacterPage;

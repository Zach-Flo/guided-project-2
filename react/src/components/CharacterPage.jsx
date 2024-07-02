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
      
    </div>
  );
}

export default CharacterPage;

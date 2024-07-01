import Characters from './Characters';
import { useState, useEffect } from 'react';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loadComplete, setLoadComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://127.0.0.1:3000"; // Assuming it's a web server running locally
        const response = await fetch(url + "/api/characters");
        if (!response.ok) {
          throw new Error("Failed to fetch characters");
        }
        const data = await response.json();
        setCharacters(data);
        console.log(data);
        } catch (error) {
        console.log("Error fetching:", error);
      }
    };

    fetchData();
    setLoadComplete(true);
  }, []);



  return (
    <>{loadComplete ? <Characters characters={characters} /> 
    : <p>Loading...</p>}</>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlanetPage() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    // Fetch planet data based on the id
    fetch(`http://127.0.0.1:3000/api/planets/${id}`)
      .then((response) => response.json())
      .then((data) => setPlanet(data))
      .catch((error) => console.error("Error fetching planet:", error));
  }, [id]);

  if (!planet) {
    return <div>Loading...</div>;
  } else {
    console.log(planet);
  }

  return (
    <div>
      <h1>{planet["0"].name}</h1>
      <p>Climate: {planet["0"].climate}</p>
      <p>Population: {planet["0"].population}</p>
      <p>Diameter: {planet["0"].diameter}</p>
      <p>Terrain: {planet["0"].terrain}</p>
      <p>Gravity: {planet["0"].gravity}</p>
    </div>
  );
}

export default PlanetPage;

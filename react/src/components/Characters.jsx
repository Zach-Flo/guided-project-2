import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Characters({ characters }) {
    return (
        <div>
            <h1>Character List</h1>
            <ul>
                {characters.map((character) => (
                    <div key={character.id}>
                        <Link  to={`/characters/${character.id}`}>{character.name}</Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Characters;

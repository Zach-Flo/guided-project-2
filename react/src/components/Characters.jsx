import React, { useState, useEffect } from 'react';

function Characters({ characters }) {
    return (
        <div>
            <h1>Character List</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Characters;

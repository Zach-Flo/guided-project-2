import React, { useState, useEffect } from 'react';

function Characters({ characters }) {
    return (
        <div>
            <h1>Character List</h1>
            <ul>
                {characters.map((character) => (
                    <Link to={`/characters/${character.id}`}>{character.name}</Link>
                ))}
            </ul>
        </div>
    );
}

export default Characters;

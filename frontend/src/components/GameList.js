import React, { useState, useEffect } from 'react';
import { getGames } from '../utils/api';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await getGames();
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
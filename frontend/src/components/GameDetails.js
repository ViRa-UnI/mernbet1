import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

const GameDetails = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await api.get(`/games/${gameId}`);
        setGame(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGame();
  }, [gameId]);

  return (
    <div>
      {game ? (
        <div>
          <h2>{game.name}</h2>
          <p>{game.description}</p>
          <p>Price: {game.price}</p>
          <p>Rating: {game.rating}</p>
        </div>
      ) : (
        <p>Loading game details...</p>
      )}
    </div>
  );
};

export default GameDetails;
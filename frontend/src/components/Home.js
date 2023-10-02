import React from 'react';
import GameList from './GameList';

const Home = () => {
  return (
    <div>
      <h1>Welcome to our Gambling Site!</h1>
      <p>Explore our wide range of games and start playing today.</p>
      <GameList />
    </div>
  );
};

export default Home;
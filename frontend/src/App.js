import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/games" component={GameList} />
        <Route path="/game/:id" component={GameDetails} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
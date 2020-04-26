import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecommendationsPage from "./components/RecommendationsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/CAC.css";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import SearchPage from "./components/SearchPage";
import WatchedMoviesPage from "./components/WatchedMoviesPage";
import history from './components/history';


function App() {
  return (
      <Router history={history}>
          <Route exact path="/" component={RecommendationsPage} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/profile/" component={ProfilePage} />
          <Route path="/search/" component={SearchPage} />
          <Route path="/watched_movies" component={WatchedMoviesPage} />
        </Router>
  );
}

export default App;

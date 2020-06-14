import React from 'react';
import './App.css';
import RecommendationsPage from "./components/RecommendationsPage";
import { Router, Route } from "react-router-dom";
import "./assets/CAC.css";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import SearchPage from "./components/SearchPage";
import WatchedMoviesPage from "./components/WatchedMoviesPage";
import history from './components/history';
import FilmPage from "./components/FilmPage";


function App() {
  return (
      <Router history={history}>
          <Route exact path="/" component={RecommendationsPage} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/profile/" component={ProfilePage} />
          <Route path="/search/" component={SearchPage} />
          <Route path="/watched_movies" component={WatchedMoviesPage} />
          <Route path="/film/:id" component={FilmPage} />
        </Router>
  );
}

export default App;

import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import './app.css';

import SwapiService from '../../services/swapi-service';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../star-wars-components'


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="container-fluid">
        <Header />

        <PersonDetails itemId={11} />
        <StarshipDetails itemId={5} />
        <PlanetDetails itemId={5} />

        <PersonList />
        <StarshipList />
        <PlanetList />

        {/* { planet }

        <div className="mb-3">
          <button
            className="toggle-planet btn btn-warning shadow-none mr-3"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage /> */}

      </div>
    );
  }
}

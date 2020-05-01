import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';

// DummySwapiService Mock for testing
import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import './app.css';

import ErrorBoundry from '../error-boundry';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    showRandomPlanet: true,
    hasError: false,
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("swiched to", Service.name);

      return {
        swapiService: new Service()
      };
    })
  }

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

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet updateInterval={5000} /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="container-fluid">
            <Header onServiceChange={this.onServiceChange} />
            {planet}
            <div className="mb-3">
              <button
                className="toggle-planet btn btn-warning shadow-none mr-3"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
            </div>

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import Row from '../row';
import ItemList from '../item-list';

import './app.css';

import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';
import Record from '../record';


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

    const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImgUrl={getPersonImage}
      >
        <Record field="gender" label="Gender:" />
        <Record field="eyeColor" label="Eye Color:" />
        </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImgUrl={getStarshipImage}
      >
        <Record field="model" label="Model:" />
        <Record field="length" label="Length:" />
        <Record field="costInCredits" label="Cost in Credits:" />
      </ItemDetails>
    )

    const listPeople = (
      <ItemList
        getData={getAllPeople}
        onItemSelected={() => { }}>
        {({ name }) => <span>{name}</span>}
      </ItemList>
    )

    const listPlanets = (
      <ItemList
        getData={getAllPlanets}
        onItemSelected={() => { }}>
        {({ name }) => <span>{name}</span>}
      </ItemList>
    )

    return (
      <div className="container-fluid">
        <Header />

        <Row left={listPeople} right={listPlanets} />

        {/* <Row left={personDetails} right={starshipDetails} /> */}

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import { getImage } from '../../utils/getImage';
import placeholder from './placeholder.jpg';
import './random-planet.css';

export default class RandomPlanet extends Component {

  constructor(props) {
    super(props);
    this.updateInterval = props.updateInterval || 10000;
  }

  static propTypes = {
    updateInterval: PropTypes.number
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, this.updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    let id;
    do {
      id = Math.floor(Math.random() * 27) + 2;
    } while (id === 28); // Исключаем планету с id=28 (unknown)

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {

    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  const imgSrc = getImage('planets', id) || placeholder;

  return (
    <>
      <img className="planet-image"
        src={imgSrc}
        alt="planet"
        onError={e => { e.target.src = placeholder; }}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
          <li className="list-group-item">
            <span className="term">id={id}</span>
          </li>
        </ul>
      </div>
    </>
  );
};




import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './person-details.css';


export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true
        })
      });
  }


  render() {

    const { person, loading, error } = this.state;

    if (error) {
      return <ErrorIndicator />
    }

    if (!person) {
      return <span>Select a person from a list</span>;
    }

    if (loading) {
      return <Spinner />;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image" alt="character"
          src={`https://starwars-visualguide.com/assets/img/characters/${ id }.jpg`}
          />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <span>id={this.props.personId}</span>
          </div>

          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
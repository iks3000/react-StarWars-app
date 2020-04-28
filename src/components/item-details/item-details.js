import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';


export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImgUrl(item),
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

    const { item, image, loading, error } = this.state;

    if (error) {
      return <ErrorIndicator />
    }

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    if (loading) {
      return <Spinner />;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.item;

    return (
      <div className="item-details card">
        <img className="item-image" alt="character" src={image} />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <span>id={this.props.itemId}</span>
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
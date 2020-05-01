import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import './item-details.css';
import placeholder from './placeholder.jpg';


export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImgUrl !== prevProps.getImgUrl) {
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
  }


  render() {

    const { item, image } = this.state;

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name } = this.state.item;
    const brokenUrlImg = placeholder;

    return (
      <div className="item-details card">
        <img className="item-image" alt="character"
          src={image}
          onError={(e) => {
            e.target.src = brokenUrlImg
          }}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <span>id={this.props.itemId}</span>
          </div>

          <ul className="list-group list-group-flush mb-3">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
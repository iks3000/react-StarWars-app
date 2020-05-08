import React, { Component } from 'react';
import Row from '../row';

import { PlanetList, PlanetDetails } from '../star-wars-components'

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null,
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem })
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <>
        <h2 className="mb-4 text-success">Planets</h2>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
      </>
    )
  }
}

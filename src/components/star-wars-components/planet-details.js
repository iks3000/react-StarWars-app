import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="RotationPeriod:" />
      <Record field="diameter" label="Diameter:" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImgUrl: swapiService.getPlanetImage
  }
}


export default withSwapiService(mapMethodsToProps)(PlanetDetails);
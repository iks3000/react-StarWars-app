
import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
  return (
    <>
      <h2 className="mb-4 text-success">Starship Details</h2>
      <ItemDetails {...props}>
        <Record field="model" label="Model:" />
        <Record field="length" label="Length:" />
        <Record field="costInCredits" label="Cost in Credits:" />
      </ItemDetails>
    </>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImgUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)

import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImgUrl={getPersonImage} >

      <Record field="gender" label="Gender:" />
      <Record field="birthYear" label="Birth Year:" />
      <Record field="eyeColor" label="Eye Color:" />
    </ItemDetails>
  )
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImgUrl={getPlanetImage}>

      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="RotationPeriod:" />
      <Record field="diameter" label="Diameter:" />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImgUrl={getStarshipImage}>

      <Record field="model" label="Model:" />
      <Record field="length" label="Length:" />
      <Record field="costInCredits" label="Cost in Credits:" />
    </ItemDetails>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
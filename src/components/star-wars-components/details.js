import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPlanet}
              getImgUrl={getPlanetImage}>

              <Record field="population" label="Population:" />
              <Record field="rotationPeriod" label="RotationPeriod:" />
              <Record field="diameter" label="Diameter:" />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
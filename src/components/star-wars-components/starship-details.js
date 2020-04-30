import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

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

export default StarshipDetails;
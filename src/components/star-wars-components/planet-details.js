import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

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


export default PlanetDetails;
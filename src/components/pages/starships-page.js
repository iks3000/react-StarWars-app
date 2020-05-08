import React from 'react';
import { StarshipList } from '../star-wars-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) =>  {
  return (
    <StarshipList
      onItemSelected={(itemId) => {
        // history.push(`/starships/${ itemId }`);  // absolute path
        history.push(itemId); // relative path
      }} />
  );
}

export default withRouter(StarshipsPage);
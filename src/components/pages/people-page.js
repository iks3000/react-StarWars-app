import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';

import { PersonDetails, PersonList } from '../star-wars-components'

const PeoplePage = ({ history, match }) => {

  const { id } = match.params;

  return (
    <>
      <h2 className="mb-4 text-success">People</h2>
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    </>
  )
}

export default withRouter(PeoplePage);

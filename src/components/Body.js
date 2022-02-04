import React from 'react';
import { Container } from 'reactstrap';
import FirstRow from './FirstRow'
import Player from './Player';
function Body() {
  return <>
  <Container>
    <FirstRow/>
    <FirstRow/>
  </Container>
  <Player/>
  </>;
}

export default Body;

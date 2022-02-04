import React, { useState,useEffect } from 'react';
import {Card,CardImg, CardBody, CardTitle,CardText} from 'reactstrap'
import FetchApi from './FetchApi';
function Song() {
  
  return <div className='p-1'>
      <Card>
        <CardImg alt="Card image cap"
      src="https://picsum.photos/318/180"
      top/>
        <CardBody>
        <CardTitle tag="h5">
            Card title
        </CardTitle>
        <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        </CardBody>
    </Card>
  </div>;
}

export default Song;

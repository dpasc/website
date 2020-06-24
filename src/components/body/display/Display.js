import React from 'react'
import './displaycard.css'
import {Row,Col,CardColumns} from 'reactstrap'
import DisplayCard from './displaycard/DisplayCard'


export default function Display(props){

   const collection = props.data.map((card) => {
      return(  
        <DisplayCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            img={card.img}
        />)
    });

    return(
        <Row className='display-row'>
            <Col>
            <CardColumns>
                {collection}
            </CardColumns>
            </Col>
        </Row>
    );
}
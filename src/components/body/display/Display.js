import React from 'react'
import './displaycard.css'
import {Row,Col,CardColumns,CardDeck} from 'reactstrap'
import DisplayCard from './displaycard/DisplayCard'


export default function Display(props){
    //Fix this 
   const collection = props.data.map((card) => {
      return(  
        <Col md='4'>
        <DisplayCard
            id={card.id}
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            img={card.img}
            type={card.type}
        />
        </Col>)
    });

    return(
        <Row className='display-row'>
            {collection}  
        </Row>
    );
}
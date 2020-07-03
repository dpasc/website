import React,{Fragment} from 'react'
import './displaycard.css'
import {Col} from 'reactstrap'
import DisplayCard from './displaycard/DisplayCard'


export default function Display(props){

   const collection = props.data.map((card) => {
      return( 
        <Col md="4" className="card-col"
        > 
        <DisplayCard
            id={card.id}
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            img={card.img}
            type={card.type}
        />
        </Col>
        );
    });

    return(
        <Fragment className="">
            {collection} 
        </Fragment>
    );
}
import React from 'react'
import './displaycard.css'
import {Card,CardTitle,CardSubtitle,CardImg} from 'reactstrap'


export default function DisaplyCard(props){
    return(

        <Card className='card'>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.subtitle}</CardSubtitle>
            <CardImg
                top
                src={props.img}
                width='250px'
                height='250px'
            />

        </Card>
    );
}
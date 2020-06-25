import React from 'react'
import './displaycard.css'
import {Card,CardTitle,CardSubtitle,CardImg} from 'reactstrap'
import {Link} from 'react-router-dom'

export default function DisaplyCard(props){
   
    return(
        <Card className='card'>
            <Link to={`/${props.type}/${props.id}`}>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.subtitle}</CardSubtitle>
            <CardImg
                top
                src={props.img}
                width='250px'
                height='250px'
            />
            </Link>
        </Card>
    );
}


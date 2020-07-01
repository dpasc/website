import React from 'react'
import './displaycard.css'
import {Card,CardTitle,CardSubtitle,CardImg} from 'reactstrap'
import {Link} from 'react-router-dom'



export default function DisaplyCard(props){
   
    const img = props.img;

    return(
        <Card className='card'>
            <Link to={`/${props.type}/${props.id}`}>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.subtitle}</CardSubtitle>
              <CardImg
                src={`${img}`}
                width='300px'
                height='300px'

            />  
            </Link>
          </Card>
    );
}


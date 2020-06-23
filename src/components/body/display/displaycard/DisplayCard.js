import React from 'react'
import './displaycard.css'
import {Card,CardTitle,CardSubtitle,CardImg} from 'reactstrap'


export default function DisaplyCard(){
    return(
        <Card className='card'>
            <CardTitle>PLKN</CardTitle>
            <CardSubtitle>A new project</CardSubtitle>
            <CardImg
                top
                src={require('../../../../resources/images/projects/plkn.jpg')}
                width='250px'
                height='250px'
            />

        </Card>
    )


}
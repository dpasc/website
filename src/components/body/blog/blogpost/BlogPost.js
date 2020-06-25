import React from 'react'
import {Col,Row} from 'reactstrap'
import './blogpost.css'




export default function BlogPost(props){
    

    
    return(

        <Row>
            <Col>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <div>
                    {props.content}
                </div>
            </Col>
        </Row>
    )
}
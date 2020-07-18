import React from 'react'
import {Row, Col} from 'reactstrap'
import './project.css'


export default function Project(props){


   

    return(
        <Row className='main-project'>
            <Col md='3'>
            </Col>
             <Col md='6'>
                <div dangerouslySetInnerHTML={{__html: props.content}}/>
            </Col> 
            <Col md='3'>
            </Col>

        </Row>
    )
}
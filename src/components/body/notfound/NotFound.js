import React from 'react'
import {Col,Row} from 'reactstrap'
import './notfound.css'


export default function NotFound(){
    return(
        <Row className='notfound-main'>
            <Col>
                <h2>Ahh, This is awkward... </h2>
                <p className='shrug'>
                ¯\_(ツ)_/¯
                </p>
                <h3> page not found.. </h3>
            </Col>
        </Row>
    )
}
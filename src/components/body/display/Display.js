import React from 'react'
import './displaycard.css'
import {Row,Col,CardColumns} from 'reactstrap'
import DisplayCard from './displaycard/DisplayCard'


export default function Display(){

    return(
        <Row className='display-row'>
            <Col>
            <CardColumns>
                <DisplayCard></DisplayCard>
                <DisplayCard></DisplayCard>
                <DisplayCard></DisplayCard>
                <DisplayCard></DisplayCard>
                <DisplayCard></DisplayCard>
                <DisplayCard></DisplayCard>
                <DisplayCard></DisplayCard>
                <DisplayCard></DisplayCard>
                <DisplayCard></DisplayCard>
            </CardColumns>
            </Col>
        </Row>
    )



}
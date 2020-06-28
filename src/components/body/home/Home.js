import React from 'react'
import './home.css'
import { Col, Row } from 'reactstrap'


export default function Home(){
    return(
            <Row className='main-row'>
                <Col md="6">
                    <main>
                        <div className='hello'>
                            <p className='hello-letters' id='he'>HE</p>
                            <p className='hello-letters' id='ll'>LL</p>
                            <p className='hello-letters' id='o'>O.</p>
                        </div>
                    </main>
                </Col>
                <Col md="6">
                <img className='placeholderimage' src={require('../../../resources/images/home/chill.svg')} alt='none'/>
            </Col>
            </Row>
    );
}
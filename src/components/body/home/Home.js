import React from 'react'
import './home.css'
import { Col, Row } from 'reactstrap'


export default function Home(){
    return(
            <Row className='main-row'>
                <Col md="6">
                <img className='placeholderimage' src={require('../../../resources/images/home/dance.gif')} alt='none'/>
                </Col>
                <Col md="6">
                    <main>
                    <h1 >Welcome</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    </main>

                </Col>
            </Row>
    );
}
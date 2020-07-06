import React from 'react'
import Navigation from './navigation/Navigation'
import {Row,Col} from 'reactstrap';
import './header.css'


function Header(){
    return(
        <div>
            <Row className='header-row'>

                <Col md="8"></Col>
                <Col md="4">
                    <header className='damianpascale'>
                        <p>damian pascale</p>
                    </header>
                </Col>
            </Row>
            <Navigation/>
        </div>
    );
}

export default Header
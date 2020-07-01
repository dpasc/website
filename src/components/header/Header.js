import React from 'react'
import Navigation from './navigation/Navigation'
import {Row,Col} from 'reactstrap';
import './header.css'


function Header(){
    return(
        <div>
            <Row className='header-row'>
                <Col>
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
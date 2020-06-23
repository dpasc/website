import React from 'react';
import {Row,Col} from 'reactstrap';
import {Nav,NavItem,NavLink} from 'reactstrap';
import './navigation.css';


export default function Navigation(){

    return(
      <Row>
        <Col>
            <Nav className='nav-bar' tabs>
            <NavItem className='nav-item'>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href="#">Bio</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href="#">Skills</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href="#">Projects</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href='#'>Blog</NavLink>
            </NavItem>
            </Nav>
          </Col>
      </Row>
    );
}

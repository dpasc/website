import React from 'react';
import {Row,Col} from 'reactstrap';
import {Nav,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import './navigation.css';


export default function Navigation(){

    return(
      <Row>
        <Col>
            <Nav className='nav-bar' tabs>
            <NavItem className='nav-item'>
              <NavLink  to='/home' className='nav-link' >
                Home
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to='./bio'  className='nav-link'>
                 Bio
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to='/skills' className='nav-link'>
               Skills
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to='/project'  className='nav-link'>
                Projects
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to='/blog' className='nav-link'>
                Blog
                </NavLink>
            </NavItem>
            </Nav>
          </Col>
      </Row>
    );
}

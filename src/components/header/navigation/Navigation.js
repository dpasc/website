import React from 'react';
import {Row,Col} from 'reactstrap';
import {Nav,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import './navigation.css';


export default function Navigation(){

    return(
      <Row>
        <Col className='nav-main'>
            <Nav className='nav-bar navbar-light' tabs>
            <NavItem className='nav-item'>
              <NavLink  to='/home' className='nav-link' >
                home
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to='./bio'  className='nav-link'>
                 bio
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to='/skills' className='nav-link'>
               skills
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' to='/project'>
                projects
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink to='/blog' className='nav-link'>
                blog
                </NavLink>
            </NavItem>
            </Nav>
          </Col>
      </Row>
    );
}

import React from 'react';
import {Row,Col} from 'reactstrap';
import {Nav,NavItem,NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'
import './navigation.css';


export default function Navigation(){

    return(
      <Row>
        <Col>
            <Nav className='nav-bar' tabs>
            <NavItem className='nav-item'>
              <NavLink>
                <Link to='/'>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink>
                <Link to='/bio'>Bio</Link>
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink>
                <Link to='/skills'>Skills</Link>
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink>
                <Link to='/projects'>Projects</Link>
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink>
                <Link to='/blog'>Blog</Link>
                </NavLink>
            </NavItem>
            </Nav>
          </Col>
      </Row>
    );
}

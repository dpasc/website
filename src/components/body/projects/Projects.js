import React from 'react'
import {Row,Col} from 'reactstrap'
import Display from '../display/Display'
import './projects.css'
import projects from '../../../resources/projectdescriptions/projectdescriptions'


export default function Projects(){

    const collection = projects;

    return(
            <Row className='main-projects'>
                <Col md='4'>
                        <img
                            className='project-graphic-img img-fluid'
                            src={require('../../../resources/images/projects/undraw_to_the_moon_v1mv.svg')}
                            alt=''
                        />
                        <hr/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                </Col>
                <Display
                data={collection}
                />
            </Row>
    );
}
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
                          A few personal, community and freelance projects 
                        </p>
                </Col>
                <Display
                data={collection}
                />
            </Row>
    );
}
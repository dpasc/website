import React from 'react'
import {Row,Col} from 'reactstrap'
import Display from '../display/Display'
import './projects.css'
import projects from '../../../resources/projectdescriptions/projectdescriptions'


export default function Projects(){

    const collection = projects;

    return(
        <div className='main-projects'>
            <Row>
                <Col md='4'>
                    <h2
                        className="project-sub-heading"
                    >
                        Projects
                    </h2>
                </Col>
                <Col md='4'>
                    <img
                        className='project-graphic-img'
                        src={require('../../../resources/images/projects/undraw_to_the_moon_v1mv.svg')}
                        alt=''
                    />
                </Col>
                <Col md=''>
                </Col>

            </Row>
            <hr/>
            <Display
                data={collection}
            />
        </div>
    )

}
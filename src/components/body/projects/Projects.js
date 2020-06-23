import React from 'react'
import {Row,Col} from 'reactstrap'
import Display from '../display/Display'
import './projects.css'
import Project from './project/Project'


export default function Projects(){
    return(
        <div className='main-projects'>
            <Row>
                <Col>
                    <h2>Projects</h2>
                </Col>
            </Row>

            <Display></Display>
            <Project></Project>
        </div>
    )

}
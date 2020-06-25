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
                <Col>
                    <h2>Projects</h2>
                </Col>
            </Row>
            <Display
                data={collection}
            />
        </div>
    )

}
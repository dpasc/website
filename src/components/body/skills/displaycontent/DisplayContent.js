import React from 'react';
import './displaycontent.css'
import {Col} from 'reactstrap'
import SkillCard from './skillscard/SkillsCards'



export default function DisplayContent(props){


    return(
        <Col md='8'>
            <main className='main-displaycontent'>
                <SkillCard
                    heading={props.heading}
                    content={props.content}
                />
            </main>
        </Col>
    );
}

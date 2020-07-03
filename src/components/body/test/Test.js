import React from 'react';
import {Row,Col} from 'reactstrap'
import './test.css';
import SkillCard from '../skills/displaycontent/skillscard/SkillsCards'

export default function Test(){
    return(
        <Row>
            <Col>
                <SkillCard/>
            </Col>
        </Row>
    );
}

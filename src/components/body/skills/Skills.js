import React,{useState} from 'react';
import './skills.css';
import {Row,Col} from 'reactstrap';
import DisplayContent from '../skills/displaycontent/DisplayContent.js'
import ButtonsPanel from './buttonpanel/ButtonPanel'
import skill from '../../../resources/skillresources/skillcontent'



export default function Skills(){
    
    const skillSet = skill;
    const [currentSkill,setCurrentSkill] = useState(5);
  
    const handleSkillUpdate = (skill) =>{
        setCurrentSkill(skill);
    }


    return(
        <Row className='main-skills'>
            <Col
            className=''
             md='4'>
                <ButtonsPanel
                   setCurrentSkill={setCurrentSkill}
                />
                <hr/>
                <img
                    className='img-fluid'
                    alt=''
                    src={require('../../../resources/images/skills/undraw_hacker_mindset_gjwq.svg')}
                />  
            </Col>
            <DisplayContent
                content={skillSet[currentSkill].content}
            
            />
        </Row>
    );
};
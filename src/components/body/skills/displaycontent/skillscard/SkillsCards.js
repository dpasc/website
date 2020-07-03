import React from 'react';
import './skillscard.css';
import Skill from './skill/Skill';
import {Table} from 'reactstrap';



export default function SkillsCards(props){

    const collection = props.content;




    const SkillCollection = (skills) =>{
        let rendered = [];
        for(var i = 0; i< skills.length;i++)
        {
            rendered.push(<Skill 
                content={skills[i]}
            />);
        }
        return rendered;
    };


    return(

        <Table
        striped
        className='main-skillcard'
        >
            <thead>
                <tr>
                    <th>{props.heading}</th>
                </tr>
            </thead>
            <tbody className='skill-table'>
                {SkillCollection(collection)}
            </tbody>
        </Table>
    );
}
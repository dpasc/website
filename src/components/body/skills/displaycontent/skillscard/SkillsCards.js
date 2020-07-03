import React from 'react';
import './skillscard.css';
import Skill from './skill/Skill';
import {Table} from 'reactstrap';



export default function SkillsCards(){

    const test = [
        {
            "id":1,
            "name":"C#",
         "rating":90},
        {
            "id":2,
            "name":"JavaScript",
         "rating":75},
        {
            "id":3,
            "name":"Python",
         "rating":45},
        {
            "id":4,
            "name":"C",
         "rating":15},
        {
            "id":5,
            "name":"Java",
         "rating":25},
    ]

    const SkillCollection = (skills) =>{
        return skills.map( skill => (
                <Skill
                    name={skill.name}
                    rating={skill.rating}
                />
        ));
    };


    return(

        <Table
        striped
        className='main-skillcard'
        >
            <thead>
                <tr>
                    <th>Skill</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody className='skill-table'>
                {SkillCollection(test)}
            </tbody>
        </Table>
    );
}
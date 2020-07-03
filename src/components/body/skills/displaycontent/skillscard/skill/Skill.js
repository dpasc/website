import React from 'react';
import './skill.css';
import {Progress} from 'reactstrap';

export default function Skill(props){
    return(
        <tr>
            <td className="skill-name">
            <p
                className="skill-name"
            >{props.content}</p>
            </td>
        </tr>
    );
};
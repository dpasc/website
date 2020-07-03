import React from 'react';
import './skill.css';
import {Progress} from 'reactstrap';

export default function Skill(props){
    return(
        <tr>
            <td className="skill-name">
            <p
                className="skill-name"
            >{props.name}</p>
            </td>
            <td className="skill-progress">
                <Progress
                    value={props.rating}
                />
            </td>
        </tr>
    );
};
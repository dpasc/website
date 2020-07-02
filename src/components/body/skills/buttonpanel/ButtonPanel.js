import React,{useState}  from 'react';
import './buttonpanel.css'
import {ButtonGroup, Button}from 'reactstrap'



export default function ButtonPanel(props){
    


    const changeSelectedContent = (option) =>{
        props.setCurrentSkill(option);
    }



    return(
    <div className='main-buttonpanel'>
        <ButtonGroup vertical>
            <Button
                onClick={() => changeSelectedContent(0)}
            >UI</Button>
            <Button
                onClick={() => changeSelectedContent(1)}
            >Server-Side</Button>
            <Button
                onClick={() => changeSelectedContent(2)}
            >Database</Button>            
            <Button
                onClick={() => changeSelectedContent(5)}
            >General</Button>
            <Button
                onClick={() => changeSelectedContent(3)}
            >Software Development</Button>
            <Button
                onClick={() => changeSelectedContent(4)}
            >DevOps</Button>
        </ButtonGroup>

    </div>
    );
}

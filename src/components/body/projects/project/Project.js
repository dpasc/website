import React from 'react'
import {Row, Col} from 'reactstrap'
import './project.css'
export default function Project(props){

    const htmlDecoder = (input) =>{
        var e = document.createElement('div');
        e.innerHTML = input;
        console.log(input);
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }  

    return(
        <Row className='main-project'>
            <Col md='3'> </Col>
             <Col md='6'>
            <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>     
                <div dangerouslySetInnerHTML={{ __html: htmlDecoder(props.content) }} />  
            </Col> 
            <Col md='3'></Col>
        </Row>
    )
}
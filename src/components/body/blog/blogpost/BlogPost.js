import React from 'react'
import {Col,Row} from 'reactstrap'
import './blogpost.css'


export default function BlogPost(props){
    

    // Come up with a better way of decoding the html

    const htmlDecoder = (input) =>{
        var e = document.createElement('div');
        e.innerHTML = input;
        console.log(input);
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    return(
        <Row>   
            <Col>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>     
                <div dangerouslySetInnerHTML={{ __html: htmlDecoder(props.content) }} />  
            </Col>
        </Row>
    )
}


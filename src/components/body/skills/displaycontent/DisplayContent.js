import React from 'react';
import './displaycontent.css'
import {Col} from 'reactstrap'



export default function DisplayContent(props){


    
    return(
        <Col md='8'>
            <main className='main-displaycontent'>
                <div dangerouslySetInnerHTML={{__html: props.content}}/>
            </main>
        </Col>
    );
}

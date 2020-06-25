import React from 'react'
import {Col,Row} from 'reactstrap'
import './blog.css'
import Display from '../display/Display'    
import posts from '../../../resources/blogpostitems/blogpostitems.js'


export default function Blog(){
    
    const collection = posts;
 
    return(
        <div className='blog-main'>
            <Row>
                <Col>
                    <h2>Blog</h2>
                </Col>
            </Row>
            <Display
                data={collection}
            />
        </div>
    );
}



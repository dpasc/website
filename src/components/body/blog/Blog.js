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
                <Col md='4'>
                    <h2 className='blog-sub-heading'>Blog</h2>
                </Col>
                <Col md='4'>
                    <img
                        className='blog-graphic-img img-fluid'
                        src={require('../../../resources/images/blog/undraw_content_team_3epn.svg')}
                        alt=''
                    />
                </Col>
                <Col md='4'>
                </Col>
            </Row>
            <hr/>
            <Display
                data={collection}
            />
        </div>
    );
}



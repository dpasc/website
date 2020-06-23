import React from 'react'
import {Col,Row} from 'reactstrap'
import './blog.css'
import Display from '../display/Display'
import BlogPost from './blogpost/BlogPost'


export default function Blog(){
    return(
        <div className='blog-main'>
            <Row>
                <Col>
                    <h2>Blog</h2>
                </Col>
            </Row>
            <Display/>
            <BlogPost/>
        </div>
    );
}



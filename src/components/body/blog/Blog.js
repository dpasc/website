import React,{useState} from 'react'
import {Col,Row} from 'reactstrap'
import './blog.css'
import Display from '../display/Display'
import BlogPost from './blogpost/BlogPost'
import posts from '../../../resources/blogpostitems/blogpostitems.js'


function checkDisplay(displayValue, collection) {
   
    if(displayValue){
        return <Display
            data={collection}
        />
    } else{
      return  <BlogPost/>
    }
};

export default function Blog(){

    const collection = posts;
    const [isDisplayOpen,setIsDisplayOpen] = useState(true);

    return(
        <div className='blog-main'>
            <Row>
                <Col>
                    <h2>Blog</h2>
                </Col>
            </Row>
            {checkDisplay(isDisplayOpen,collection)}
        </div>
    );
}



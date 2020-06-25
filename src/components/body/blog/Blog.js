import React,{useState} from 'react'
import {Col,Row} from 'reactstrap'
import './blog.css'
import Display from '../display/Display'
import BlogPost from './blogpost/BlogPost'
import posts from '../../../resources/blogpostitems/blogpostitems.js'




export default function Blog(){



    const collection = posts;
    const [isDisplayOpen,setIsDisplayOpen] = useState(true);
    const [selectedPost, setSelectedPost] = useState({});


    const  handleDisplayOpen = () =>{
        setIsDisplayOpen(true);
    };


    const handlePostChange = (e) => {
        setSelectedPost(e.target.value);
        setIsDisplayOpen(false);
    }



    const checkDisplay = () => {
        if(isDisplayOpen){
            return <Display
                data={collection}
            />
        } else{
          return( 
          <BlogPost
            title={selectedPost.title}
            subtitle={selectedPost.subtitle}
            content={selectedPost.content}
          />);
        }
    }

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



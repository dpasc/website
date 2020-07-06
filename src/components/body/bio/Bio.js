import React from 'react'
import {Row,Col} from 'reactstrap'
import './bio.css'

export default function Bio(){
    return(
        <div className='bio-main'>
        <Row classID='bio-top-row'>
            <Col>
                <h2 className='bio-heading'>bio</h2>
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col className='first-column' md='6'>
            <img
                id='graphic-story' 
                className='bio-graphic img-fluid'
                src={require('../../../resources/images/bio/story.svg')} 
                alt='none'
             />
            </Col>
            <Col className='background-color' md="6">
                <h2>my story</h2>
                <p className='bio-text'>
                    After studying business at university I began a career as a business administration manager at a landscape architecture firm in Sydney. One day I tasked with finding the organisation a system that would allow us to calculate our labour costs on various projects. After looking I found many solutions however, most were quite costly; I took to learning how to program an excel spreadsheet with the specifications requested by the directors. I have always been passionate about solving problems and quite tech savvy. After this, I began to spend weekends reading “Learn Python The Hard Way, by Zed Shaw. I soon found that this was something that I was passionate about and decided to leave my MBA course and career in business management to pursue a career as a software developer.
                </p>
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col className='first-column' md='6'>
            <div id='text-mission'>
                <h2>mission</h2>
                    <p className='mission-statement  background-color'>
                        Use technology in ways that bring <b>good to society.
                    </b> 
                    </p>
            </div>
            </Col>
            <Col>
            <img 
                id='graphic-mission'
                className='bio-graphic img-fluid'
                src={require('../../../resources/images/bio/mission.svg')} 
                alt='none'
             />
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col className='first-column' md='6'>
            <img 
                className='bio-graphic img-fluid'
                id='graphic-education'
                src={require('../../../resources/images/bio/education.svg')} 
                alt='none'
             />
            </Col>
            <Col className='background-color'md='6'>
                <h2>eduction</h2>
                <p>
                    <b>TAFE Sydney</b>
                    <br/>
                    Diploma of Software
                    Development
                    <br/>
                    2019
                    <hr/>
                    <b>TAFE Sydney</b>
                    <br/>
                    Certificate IV Computer
                    Programming
                    <br/>
                    2019
                    <hr/>
                    <b>Cisco Academy</b>
                    <br/>
                    Introduction to IoT
                    <br/>
                    2019
                    <hr/>
                    <b>Charles Sturt University</b>
                    <br/>
                    Bachelor of Business (Human
                    Resources)
                    <br/>
                    2017
                    <hr/>
                    <b>TAFE Northern Sydney Institute</b>
                    <br/>
                    Advanced Diploma Leadership
                    and Management
                    <br/>
                    2016
                </p>
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col className='first-column  background-color' md='6'>
                <h2>
                when i'm not coding
                </h2>
                <p className='bio-text'>
                    Throughout the week I wake before dawn to exercising and studying mathematics for an hour. On weekends I like to swim and hike in national parks. My favourite thing to do is spend time at cafés reading works of philosophy or having long conversations with friends.
                    <br/>
                     I have also recently started a boardgames group; We meet on a weekly basis and enjoy playing unique boardgames such as Unfair, Betrayal at House On The Hill, Codenames and Risk.

                </p>
            </Col>
            <Col>
            <img 
                className='bio-graphic'
                id='graphic-fun'
                src={require('../../../resources/images/bio/fun.svg')} 
                alt='none'
             />
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col>
                <img 
                    className='bio-graphic'
                    id='graphic-contact'
                    src={require('../../../resources/images/bio/contact.svg')} 
                    alt='none'
                />
                </Col>
            <Col md="6" className='last-column  background-color'>
                <h2>contact</h2>
                <h5>GitHub</h5>
                <p>github.com/dpasc</p>
                <h5>Email</h5>
                <a href="mailto:damian@dpasc.dev">damian@dpasc.dev</a>
                <br/>
            </Col>
        </Row>
        </div>
    );
}

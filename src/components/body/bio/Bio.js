import React from 'react'
import {Row,Col} from 'reactstrap'
import './bio.css'

export default function Bio(){
    return(
        <div className='bio-main'>
        <Row classID='bio-top-row'>
            <Col>
                <h2 className='bio-heading'>Bio</h2>
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col className='first-column' md='6'>
            <img
                id='graphic-story' 
                className='graphic'
                src={require('../../../resources/images/bio/story.svg')} 
                alt='none'
             />

            </Col>
            <Col md="6">
                <h2>My Story</h2>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                    voluptatem sequi nesciunt. 
                </p>
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col className='first-column' md='6'>
            <h3>Mission</h3>
                <p>Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam</p>
            </Col>
            <Col>
            <img 
                className='graphic'
                src={require('../../../resources/images/bio/mission.svg')} 
                alt='none'
             />
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col className='first-column' md='6'>
            <img 
                className='graphic'
                src={require('../../../resources/images/bio/education.svg')} 
                alt='none'
             />
            </Col>
            <Col>
                <h2>Eduction</h2>
                <p>
                Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
                nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col className='first-column' md='6'>
                <h2>
                When Im Not Coding
                </h2>
                <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
                nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
            </Col>
            <Col>
            <img 
                className='graphic'
                id='graphic-fun'
                src={require('../../../resources/images/bio/fun.svg')} 
                alt='none'
             />
            </Col>
        </Row>
        <Row className='bio-row'>
            <Col>
                <img 
                    className='graphic'
                    id='graphic-contact'
                    src={require('../../../resources/images/bio/contact.svg')} 
                    alt='none'
                />
                </Col>
            <Col className='last-column'>
                <h2>Contact</h2>
                <h5>GitHub</h5>
                <p>github.com/dpasc</p>
                <h5>Email</h5>
                <p>damian@mail.com</p>
            </Col>
        </Row>
        </div>
    );
}

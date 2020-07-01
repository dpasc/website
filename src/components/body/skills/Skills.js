import React from 'react';
import './skills.css';
import {Row,Col} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';


export default function Skills(){
    return(
        <div className='main-skills'>
            <Row>
                <Col className='img-col' md='4'>
                    <img 
                        src={require('../../../resources/images/skills/undraw_hacker_mindset_gjwq.svg')} 
                        alt=''
                        className='graphic-img'
                        />
                </Col>
                <Col md='4' className='skill-col'>
                    <div className='content-card'>
                            <h2>UI</h2>
                            <p>
                                Front-End web development using React Framework, Bootstrap 4 and JS (ES6)
                            </p>
                            <p>
                                Ability to develop basic Android and iOS applications using React Native
                            </p>
                            <p>
                                Basic understanding of Vue,TypeScript and jQuery
                            </p>
                    </div>
                </Col>
                <Col md='4' className='skill-col'>
                    <div className='content-card'>
                        <h2>Server-Side</h2>
                        <p>
                            Sound understanding of C# language, .NET Framework and .Net Core using object orientated programming principles
                        </p>
                        <p>
                            .Net development using; ASP.NET MVC, Entity Framework Core, Web API’s and ASP.NET Identity
                        </p>
                        <p>
                            Scripting using Python, BS4, Pandas and SqlAlchemy
                        </p>
                        <p> 
                            Basic understanding of C language
                        </p>                       
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md='4' className='skill-col'>
                    <div className="content-card">
                        <h2>General</h2>
                        <p>
                          Sound understanding of business administration and financial matters 
                        </p>
                        <p>
                            Excellent organisational and time management skills
                        </p>
                        <p>
                            Self-development skills to keep up to date with fast-changing trends
                        </p>
                        <p>
                            Ability to build and repair computers and other electrical devices
                        </p>
                        <p>
                            Basic understanding of computer networking
                        </p>
                    </div>
                </Col>
                <Col className='img-col' md='4'>
                    <img 
                        src={require('../../../resources/images/skills/undraw_version_control_9bpv.svg')} 
                        className='graphic-img'
                        alt=''
                        />
                </Col>
                <Col md='4'  className='skill-col'>
                    <div className='content-card'>
                        <h2>Data-Base</h2>
                        <p>
                            Ability to configure and maintain a database using SQL with Microsoft SQL Management Studio and PostgeSQL
                        </p>
                        <p>
                            Skilled at writing and optimizing large complicated SQL statements including advanced queries and stored procedures
                        </p>
                        <p>
                            Basic understanding of using cursors within a database
                        </p>
                        <p>
                            Basic understanding of NoSQL database systems including: Document, Graph, Column and Key-Value
                        </p>
                        <p>
                            Capable of writing LINQ queries
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col md='4' className='skill-col'>
                <div className='content-card'>
                    <h2>DevOps</h2>
                    <p>
                        General understanding of AWS platform including:
                    <ul>
                            <li>VPC</li>
                            <li>EC2</li>
                            <li>RDS</li>
                            <li>ElastiCache</li>
                            <li>CloudFormation</li>
                            <li>S3</li>
                            <li>EFS</li>
                            <li>Lambda</li>
                            <li>CloudWatch</li>
                     </ul>
                    </p>

                </div>
            </Col>
            <Col md='4' className='skill-col'>
                <div className='content-card'>
                    <h2>Software Development</h2>
                    <p>
                        Great understanding of design patterns; mainly the patterns covered in the GoF book (I keep a copy on my desk)
                    </p>
                    <p>
                        Well versed in Linux operating systems with the ablility to:
                                <ul>
                                    <li>Use advanced BASH features</li>
                                    <li>Write BASH Scripts</li>
                                    <li>Configure Apache Server
                                    </li>
                                    <li>
                                    Configure SMB server 
                                    </li>
                                    <li>
                                        Use SSH and FTP
                                    </li>
                                    <li>
                                        Set up cron jobs
                                    </li>
                                </ul>
                    </p>
                    <p>
                        Experienced with Git version control using GitHub and Git Cli
                    </p>
                    <p>
                         OOAD - Ability to analyze requirements,produce a range of options and create software required documents using UML diagrams and design patterns
                    </p>

                </div>  
                </Col>
                <Col className='img-col'>
                    <img 
                        src={require('../../../resources/images/skills/undraw_operating_system_4lr6.svg')} 
                        alt=''
                        className='graphic-img'
                    />
                </Col>
            </Row>
        </div>
    );



}
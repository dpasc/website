import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../components/body/home/Home'
import Bio from '../components/body/bio/Bio'
import Skills from '../components/body/skills/Skills'
import Projects from '../components/body/projects/Projects'
import Blog from '../components/body/blog/Blog'
import NotFound from '../components/body/notfound/NotFound'
import BlogPost from '../components/body/blog/blogpost/BlogPost'
import posts from '../resources/blogpostitems/blogpostitems.js'
import projects from '../resources/projectdescriptions/projectdescriptions'
import Project from '../components/body/projects/project/Project'
import Test from '../components/body/test/Test'



export default function Router(){ 

    const blogposts = posts;
    const projectlist = projects

    return(
            <Switch>  
                <Route path='/'  exact component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/bio' component={Bio}/>
                <Route path='/skills' component={Skills}/>
                <Route
                    path='/project/:id'
                    render={
                        ({match}) => {
                    const selectedProject = projectlist[match.params.id];
                    return(
                    <Project
                       title={selectedProject.title}
                       subtitle={selectedProject.subtitle}
                       content={selectedProject.content}
                    />)}}
                    />
                <Route path='/project' component={Projects}/>
                <Route path='/test' component={Test}/>
                <Route
                    path='/blog/:id'
                    render={
                        ({match}) => {
                    const selectedPost = blogposts[match.params.id];
                    return(
                    <BlogPost
                       title={selectedPost.title}
                       subtitle={selectedPost.subtitle}
                       content={selectedPost.content}
                    />)}}
                    />
                <Route path='/blog' component={Blog}/>
                <Route  component={NotFound}/>

            </Switch>
    );
}





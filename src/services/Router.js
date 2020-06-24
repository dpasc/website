import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../components/body/home/Home'
import Bio from '../components/body/bio/Bio'
import Skills from '../components/body/skills/Skills'
import Projects from '../components/body/projects/Projects'
import Blog from '../components/body/blog/Blog'
import NotFound from '../components/body/notfound/NotFound'



export default function Router(){ 
    return(
            <Switch>            
                <Route path='/'  exact component={Home}/>
                <Route path='/bio' component={Bio}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/blog' component={Blog}/>
                <Route  component={NotFound}/>
            </Switch>
    );
}
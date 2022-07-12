import React, { Component } from 'react';
import {v1 as uuid} from 'uuid';
// const uuid = require('uuid');
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'; // import AddProject from './Components/Projects';
import Todos from './Components/Todos';
import './App.css';
//import { render } from '@testing-library/react';

class Appdemo extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    id: uuid(),
                    //id: 'uu1',
                    title: 'Business website',
                    category: 'Web Design'
                },
                {
                    id: uuid(),
                    //id: 'uu2',
                    title: 'Social App',
                    category: 'Mobile Development'
                },
                {   id: uuid(),
                    //id: 'uu3',
                    title: 'E-commerce shopping cart',
                    category: 'Web Development'
                }
            ]
        }
    }

    //handleAddProject() {}
    handleAddProject(project) {
        //console.log(project);
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects});
    }

    render() {
        return (
            <div className="App">
                <i>My App</i>
                <AddProject addProject={this.handleAddProject.bind(this)} />
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default Appdemo;
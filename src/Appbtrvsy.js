import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
// const uuid = require('uuid');
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'; // import AddProject from './Components/Projects';
import Todos from './Components/Todos';
import './App.css';
//import { render } from '@testing-library/react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    UNSAFE_componentWillMount() { // Life-cycle methods: In AJAX, if you are fetching data from an API, you want to do that in this life-cycle method.
        this.setState({projects: [
            {
                id: uuid(),
                title: 'Business website',
                category: 'Web Design'
            },
            {
                id: uuid(),
                title: 'Social App',
                category: 'Mobile Development'
            },
            {   
                id: uuid(),
                title: 'E-commerce shopping cart',
                category: 'Web Development'
            }
        ]});
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
                <hr />
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
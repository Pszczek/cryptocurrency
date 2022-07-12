import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
// const uuid = require('uuid');
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'; // import AddProject from './Components/Projects';
import Todos from './Components/Todos';
import './App.css';
//import { render } from '@testing-library/react';

class Appt extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }

    getTodos() {
        $.ajax({
            url: 'http://localhost:5000/api/todos', // 'http://jsonplaceholder.typicode.com/todos'
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({todos: data}, function() {
                    console.log(this.state);       
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    getProjects() {
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

    componentWillMount() { // Life-cycle methods: In AJAX, if you are fetching data from an API, you want to do that in this life-cycle method.
        this.getProjects();
        this.getTodos();
    }

    componentDidMount(){
        this.getTodos();
    }

    render() {
        return (
            <div className="Appt">
                <Projects projects={this.state.projects} />
                <hr />
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default Appt;
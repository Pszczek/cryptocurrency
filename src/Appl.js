import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';
//import { render } from '@testing-library/react';

class Appl extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }
    componentWillMount() { // Life-cycle methods: In AJAX, if you are fetching data from an API, you want to do that in this life-cycle method.
        this.setState({projects: [
            {
                title: 'Business website',
                category: 'Web Design'
            },
            {
                title: 'Social App',
                category: 'Mobile Development'
            },
            {
                title: 'E-commerce shopping cart',
                category: 'Web Development'
            }
        ]});
    }
    render() {
        return (
            <div className="Appl">
                My App
                <Projects projects={this.state.projects} />
            </div>
        );
    }
}

export default Appl;
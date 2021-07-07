import React from "react";
import { Switch, HashRouter, Route, useRouteMatch } from "react-router-dom";

class Project extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-container grid">
                <div className="sidebar">
                    <a href="project1">Project 1</a>
                </div>
                <div className="main-content">
                </div>
            </div>
        );
    }
}

export default Project;

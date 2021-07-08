import React from "react";
import { Switch, HashRouter, Route, useRouteMatch } from "react-router-dom";

class Home extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-container grid">
                <div className="sidebar">
                    <h3>Relevant Links</h3>
                    <a href="https://1drv.ms/b/s!Al2YMosquu6wiZNgDm8idWR_Slw-ow?e=Jr0zus">Resume</a>
                </div>
                <div className="main-content">
                    <h2>Hello, welcome to my portfolio website</h2>
                    <p>This website is still a work in progress. Feel free to check out my resume or my github page <a href="https://github.com/tnp94">here</a></p>
                </div>
            </div>
        );
    }
}

export default Home;

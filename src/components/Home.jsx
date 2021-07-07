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
                </div>
            </div>
        );
    }
}

export default Home;

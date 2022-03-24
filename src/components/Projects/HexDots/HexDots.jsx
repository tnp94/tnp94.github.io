import React from "react";
import { Switch, HashRouter, Route, useRouteMatch } from "react-router-dom";

class HexDots extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-container container-fluid">
                <div className="row">
                    <div className="d-none d-sm-block col-sm-3 p-0 subnav">
                        <h3>My Links</h3>
                        <a href="https://1drv.ms/b/s!Al2YMosquu6wiZNgDm8idWR_Slw-ow?e=Jr0zus">Resume</a>
                    </div>
                    <div className="d-block d-sm-none col-sm-3 p-0 subnav">
                        <h3>My Links</h3>
                        <a href="https://1drv.ms/b/s!Al2YMosquu6wiZNgDm8idWR_Slw-ow?e=Jr0zus">Resume</a>
                    </div>
                    <div className="col-sm-9 p-0">
                        <h2>Hello, welcome to my portfolio website</h2>
                        <p>This website is still a work in progress. Feel free to check out my resume or my github page <a href="https://github.com/tnp94">here</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HexDots;

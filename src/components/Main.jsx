import React from "react";
import Projects from "./Projects";

class Main extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-container grid">
                <div className="sidebar">
                    <a href="#">Project 1</a>
                </div>
                <div className="main-content">
                    <h1>Project 1</h1>
                </div>
            </div>
        );
    }
}

export default Main;

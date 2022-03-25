import React from "react";
import { Switch, HashRouter, Route, useRouteMatch, useParams, Link} from "react-router-dom";
import Phaser, { CANVAS } from 'phaser';
import GameScene from './Projects/HexDots/src/scenes/GameScene';
import { useHistory } from "react-router-dom";
import { findDOMNode } from "react-dom";
//import './Projects/HexDots/src/classes'
class Projects extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-container grid">
                <div className="sidebar">
                    <h3>Projects</h3>
                    <ul className="p-0 font-weight-bold">
                        <li className="subnav-item">
                            <Link className="text-dark" to="/projects/HexDots">Hex Dots</Link>
                        </li>
                        <li className="subnav-item">
                            <Link className="text-dark" to="/projects/project2">Project 2</Link>
                        </li>
                    </ul>
                </div>
                <main className="main-content">
                    <Switch>
                        <Route path={`/projects`}>
                            <ProjectList />
                            <div id="projectContainer"></div>
                        </Route>

                    </Switch>
                </main>
            </div>
        );
    }
}

function ProjectList() {
    let match = useRouteMatch();
    ClearProject();
    return (
        <Switch>
            <Route path={`${match.path}/:projectId`}>
                <Project />
            </Route>
        </Switch>
    )
}

function ClearProject() {
    let project = document.getElementById('projectContainer');
    if (project)
    {
        let existing = project.children;
        for (let children of existing)
        {
            children.remove();
        }
    }
}

function Project() {
    let { projectId } = useParams();
    switch (projectId)
    {
        case "HexDots":
        {
            
            const urlParams = new URLSearchParams(window.location.search);
            const boardSizeInput = urlParams.get('boardSize');
            const colorCountInput = urlParams.get('colorCount');
            
            
            var boardsize = 8;
            var colorCount = 7;
            const hexWidth = 62;
            const hexHeight = 70;
            const showHexes = true;

            if (boardSizeInput)
            {
                boardsize = parseInt(boardSizeInput);
            }
            if (colorCountInput)
            {
                colorCount = parseInt(colorCountInput);
            }
    
            let gameScene = new GameScene('Game', boardsize, colorCount, hexWidth, hexHeight, showHexes);
    
            var config = {
                parent: 'projectContainer',
                type: Phaser.AUTO,
                width: 1000,
                height: 600,
                pixelArt: false,
                border: true,
                scene: [gameScene],
                backgroundColor: '#fff'
                };
            
            
            var game = new Phaser.Game(config);
            game.scene.start('Game');
            return (
                <div>
                    <p>I created this game in Phaser 3. Click and drag adjacent dots to select them. Selecting 2 or more dots will clear them when you release the mouse button.</p>
                    <p>Creating a loop (starting and ending on the same dot) will cause all dots of that color on the screen to be cleared.</p>
                    <p>You get the number of dots selected, squared points when you clear, plus 1 point for each other dot cleared with a loop.</p>
                    <form>
                        <label htmlFor="boardSize">Board Size (Max 11): </label>
                        <input placeholder="Default: 8" name="boardSize" type="text" id="tbBoardSize" onChange={ClearProject()}/>
                        <br />
                        <label htmlFor="colorCount">Colors (Max 7): </label>
                        <input placeholder="Default: 7" name="colorCount" type="text" id="tbColors" />
                        <input type="submit" onClick={ClearProject()} value="Launch"/>
                    </form>
                </div>
            )
        }
        default:
        {
            return (
                <h2>Show Project {projectId} here</h2>
            )
        }
    }

}

export default Projects;

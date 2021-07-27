import React from "react";
import { Switch, HashRouter, Route, useRouteMatch, useParams, Link} from "react-router-dom";

class Projects extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-container grid">
                <div className="sidebar">
                    <h2>Projects</h2>
                    <ul className="p-0 font-weight-bold">
                        <li className="subnav-item">
                            <Link className="text-dark" to="/projects/project1">Project 1</Link>
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
                        </Route>

                    </Switch>
                </main>
            </div>
        );
    }
}

function ProjectList() {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/:projectId`}>
                <Project />
            </Route>
        </Switch>
    )
}

function Project() {
    let { projectId } = useParams();
    switch (projectId)
    {
        case "project1":
        {
            return (
                <h2>Let's decide which project will be project1</h2>
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

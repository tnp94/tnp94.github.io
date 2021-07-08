import React from "react";
import { Switch, HashRouter, Route, useRouteMatch, useParams, Link} from "react-router-dom";

class Projects extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-container grid">
                <div className="sidebar">
                    <Link to="/projects/project1">Project 1</Link>
                    <Link to="/projects/project2">Project 2</Link>
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
    return (
        <h2>Show Project {projectId} here</h2>
    )

}

export default Projects;

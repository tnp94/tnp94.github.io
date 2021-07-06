import React from "react";

class Navbar extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <nav className="container-fluid p-0 pr-sm-2 pl-sm-2">
                <ul className="row m-0 p-0">
                    <a className="col-sm" href="/#"><li>Home</li></a>
                    <a className="col-sm" href="/#/projects"><li>Projects</li></a>
                    <a className="col-sm" href="/#/contact"><li>Contact</li></a>
                </ul>
            </nav>
        );
    }
}

export default Navbar;

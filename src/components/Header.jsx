import React from "react";

class Header extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <header className="megaboard container-fluid">
                <div className="row">
                    <p className="col-sm-6 mw-100 col-lg-4"><img src="https://i.imgur.com/ayXf4pz.jpg"
                        className="mw-100" alt="Thomas Pollard" height="auto" /></p>
                    <h1 className="col-sm-6 d-inline col-lg-8">Thomas Pollard's portfolio</h1>
                    <h3>Computer Science undergraduate from Portland State University</h3>
                </div>
            </header>
        );
    }
}

export default Header;

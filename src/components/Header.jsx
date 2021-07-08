import React from "react";

class Header extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <header className="megaboard container-fluid px-0">
                <div className="row w-100 mx-0">
                    <p className="d-sm-none px-0 col-sm-6 mw-100 col-lg-4 col-xl-3 m-0"><img src="https://i.imgur.com/ayXf4pz.jpg"
                        className="w-75 mw-100" alt="Thomas Pollard" height="auto" /></p>
                    <p className="d-none d-sm-block px-0 col-sm-6 mw-100 col-lg-4 col-xl-3 m-0"><img src="https://i.imgur.com/ayXf4pz.jpg"
                        className="w-100 mw-100" alt="Thomas Pollard" height="auto" /></p>
                    <div className="col-sm-6 col-lg-8 col-xl-9 mx-0 content-center">
                        <h1 className="text-center px-1">Thomas Pollard's portfolio</h1>
                        <h4 className="px-1 ">Computer Science undergraduate from Portland State University</h4>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

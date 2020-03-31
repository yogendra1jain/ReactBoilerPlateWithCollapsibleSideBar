import React from "react";


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        return (

            <footer className="main-footer">
                <div className="float-right d-none d-sm-inline">
                    Anything you want
                  </div>
                <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
            </footer>
        )
    }
}

export default Footer;
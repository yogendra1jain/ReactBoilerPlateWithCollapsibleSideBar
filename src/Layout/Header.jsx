import React from "react";


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li onClick={this.props.HeaderClicked} className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">1</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-header">1 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fas fa-users-cog"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> Profile Setting
                  </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">LogOut</a>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;
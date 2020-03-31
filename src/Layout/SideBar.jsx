import React from "react";


class SimpleBoilerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light">NAVCryptoCurrency</span>
                </a>

                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Clients
                        </p>
                                </a>
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Currencies
                        </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}

export default SimpleBoilerContainer;
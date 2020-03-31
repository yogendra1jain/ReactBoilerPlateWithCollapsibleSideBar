import React from 'react';
import _get from 'lodash/get';
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";


class MainLayout extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {isSideBarOpen:window.innerWidth>=992?true:false};
    }
    HeaderClicked=()=>{
        this.setState({isSideBarOpen:!this.state.isSideBarOpen})

    }
    toggleInMobile=(e)=>{
        e.stopPropagation();
        if(window.innerWidth<992)
        this.setState({isSideBarOpen:!this.state.isSideBarOpen})

    }
    render() {
        let classSideBar = this.state.isSideBarOpen?window.innerWidth>992?"sidebar-mini":"sidebar-mini sidebar-open":"sidebar-mini sidebar-collapse"
        return (
            <div className={`${classSideBar}`}>
            <div className="wrapper">
            <Header HeaderClicked={this.HeaderClicked} />
                <SideBar />
                <div className="content-wrapper" onClick={this.toggleInMobile}>
                    <div className="content">
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            </div>
        );
    }


}
export default MainLayout;
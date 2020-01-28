import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

import Dashboard from '../pages/Dashboard.js';
import Inbox from '../pages/Inbox.js';
import Draft from '../pages/Draft.js';
import Header from './Header.js';
import Sidebar from './sidebar.js';



class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: true
        };
    }
    handleSidebarToggle = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen
        });
    };
    render() {
        
        return (
            <div className="__wrapper">
                <Router>
                    <Header sidebarToggle={this.handleSidebarToggle}/>
                    <Sidebar sidebarOpen={this.state.isSidebarOpen} />
                    <div className={this.state.isSidebarOpen ? "content-wrapper" : "content-wrapper collapsed"}>
                        <Switch>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>
                            <Route exact path="/inbox">
                                <Inbox />
                            </Route>
                            <Route exact path="/draft">
                                <Draft />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Layout;

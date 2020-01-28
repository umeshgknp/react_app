import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";



class Sidebar extends Component {
    render(){
        return (
            <div className={ this.props.sidebarOpen ? "sidebar_list" : "sidebar_list collapsed" }>
                <ul>
                    
                    <li className={ this.props.location.pathname == "/" ? "active" : "" } >
                        <Link to="/" >
                            <i className="material-icons"> dashboard </i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={ this.props.location.pathname == "/inbox" ? "active" : "" }>
                        <Link to="/inbox">
                            <i className="material-icons"> mail </i>
                            <span>Inbox</span>
                        </Link>
                    </li>
                    <li className={ this.props.location.pathname == "/draft" ? "active" : "" }>
                        <Link to="/draft">
                            <i className="material-icons"> drafts </i>
                            <span>Draft</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Sidebar);
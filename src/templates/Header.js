import React, { Component } from 'react';

class Header extends Component {
    render() {
        const sidebarToggle = (props) => {
            this.props.sidebarToggle();
        };
        return (
            <nav>
                <div className="nav-wrapper pl-2 valign-wrapper">
                    <span className="sidebar_navigator_button" onClick={sidebarToggle}>
                        <i className="material-icons">view_module</i>
                    </span>
                </div>
            </nav>
        );
    }
}

export default Header;

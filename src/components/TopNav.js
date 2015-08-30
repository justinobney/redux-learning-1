import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class TopNav extends Component {
    displayName = 'TopNav'

    render() {
        return (
            <Navbar brand={<a href="#/">CraftTrax</a>}>
                <Nav>
                    <NavItem href="#/offices">Offices</NavItem>
                    <NavItem href="#/craft-categories">Craft Categories</NavItem>
                    <NavItem href="#/clinics">Clinics</NavItem>
                    <NavItem href="#/playground">Playground</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default TopNav;

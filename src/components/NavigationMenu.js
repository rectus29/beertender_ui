/**
 * Created by a.bernard on 25/01/2018.
 */
/**
 * Created by a.bernard on 25/01/2018.
 */
import React from 'react';
import {NavLink} from "react-router-dom";

export default class NavigationMenu extends React.Component {

    render() {
        return (
            <nav className="nav nav-pills flex-column">
                <NavLink className="nav-link" activeClassName="active" to="/75cl">Bouteille 75cl</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/33cl">Bouteille 33cl</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/25cl">Bouteille 25cl</NavLink>
            </nav>
        );
    }
}
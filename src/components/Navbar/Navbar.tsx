import {NavLink} from 'react-router-dom';
import n from './Navbar.module.css'

export function Navbar() {
    return <nav className={n.nav}>
        <div><NavLink to="/profile" activeClassName={n.activeLink}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName={n.activeLink}>Messages</NavLink></div>
        <div><NavLink to="/news" activeClassName={n.activeLink}>news</NavLink></div>
        <div><NavLink to="/music" activeClassName={n.activeLink}>Music</NavLink></div>
        <div><NavLink to="/settings" activeClassName={n.activeLink}>Settings</NavLink></div>
    </nav>;
}
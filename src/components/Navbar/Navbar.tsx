import n from './Navbar.module.css'

export function Navbar() {
    return <nav className={n.nav}>
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
        <div><a href="#">news</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Settings</a></div>
    </nav>;
}
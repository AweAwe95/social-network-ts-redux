import n from './Navbar.module.css'

export function Navbar() {
    return <nav className={n.nav}>
        <div><a href="/profile">Profile</a></div>
        <div><a href="/dialogs">Messages</a></div>
        <div><a href="/news">news</a></div>
        <div><a href="/music">Music</a></div>
        <div><a href="/settings">Settings</a></div>
    </nav>;
}
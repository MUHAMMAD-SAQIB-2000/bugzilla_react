const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Bugzilla React</h1>
            <div className="links">
                <a href="/addProject">New Project</a>
                <a href="/">Projects</a>
                <a href="/addBug">New Bug</a>
                <a href="/bugs">Bugs</a>
                
                {/* <a href="/addProject">Edit Project</a> */}
            </div>
        </nav>
    );
}

export default Navbar

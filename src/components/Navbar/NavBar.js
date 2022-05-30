import "../Navbar/NavBar.css";

const NavBar = () => {
  return (
    <div className="simple-header">
      <header className="header">
        <div className="header-items">
          <a href="/" className="nav-brand">
            NoTress
          </a>
        </div>
      </header>
    </div>
  );
};

export { NavBar };

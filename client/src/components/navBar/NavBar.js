import stars from '../../assets/Stars.png';

function NavBar() {
  // style= {{backgroundColor: 'black'}}
  // <a className="navbar-item" >
  // <img src={stars} width="80" height="30"/>
  // </a>
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item">
          futuros items
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-dark">
              Log in
            </a>
          </div>
        </div>
      </div>
  </div>
</nav>
  );
}

export default NavBar;

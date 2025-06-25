import Nav from './Nav';

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="/Logo.svg" alt="Little Lemon Logo" className="logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          {/* Inline SVG for full control over color */}
          <div className="footer-logo">
            <svg
              fill="currentColor"
              height="auto"
              width="160"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1..."
              />
            </svg>
          </div>
        </div>

        <div>
          <h4>Doormat Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon Street</li>
            <li>Chicago, IL 60601</li>
            <li>(312) 555-0199</li>
            <li>contact@littlelemon.com</li>
          </ul>
        </div>

        <div>
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

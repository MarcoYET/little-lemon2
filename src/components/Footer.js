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
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
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
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

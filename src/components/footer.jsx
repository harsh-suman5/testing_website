import React from 'react'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>🎓 Harsh Academy Live</h2>
          <p>Empowering learners with quality tech education. Learn. Build. Grow.</p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="#" className="social-icon" title="GitHub">G</a>
            <a href="#" className="social-icon" title="LinkedIn">in</a>
            <a href="#" className="social-icon" title="YouTube">▶</a>
            <a href="#" className="social-icon" title="Twitter">𝕏</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-links">
          <h3>Our Courses</h3>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">React & Next.js</a></li>
            <li><a href="#">Data Science</a></li>
            <li><a href="#">Machine Learning</a></li>
            <li><a href="#">UI/UX Design</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📧 contact@harshacademylive.com</p>
          <p>📞 +91 7856934617</p>
          <p>📍 India</p>
          <p>🕐 Mon – Sat: 9AM – 7PM IST</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {currentYear} <span>Harsh Academy Live</span>. All rights reserved. Made with ❤️ in India</p>
      </div>

    </footer>
  )
}

export default Footer

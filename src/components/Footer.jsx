import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
        <div>
          <h3>Property <span>Guru</span></h3>
          <p>Building and maintaining real estates since the 80s, no one comes close </p>
          <div className='contact-us'>
          <i class="fa-regular fa-envelope"></i>
          <p>Propertyguru@gmail.com</p>
          </div>
          <div className='contact-us'>
          <i class="fa-solid fa-phone"></i>
          <p>+23481546789</p>
          </div>
        </div>
        <div>
            <h5>Services</h5>
            <ul>
              <li>Property sales</li>
              <li>Property lease</li>
              <li>Land Documentations</li>
              <li>Real estate training</li>
              <li>Estate Consultancy</li>
            </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
          <li>Pricing Plan</li>
          <li>Guide</li>
          <li>Documentation</li>
          <li>Tutorial</li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Join Us</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li>Claim</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        </div>

        <div className='copyright'>
        <i class="fa-regular fa-copyright"></i>
          <p>Property Guru 2024.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
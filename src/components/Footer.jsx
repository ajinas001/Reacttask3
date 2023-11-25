import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className="footer text-dark">
  <div className="container">
    <div className="row">
      <div className="footer-col mt-4">
        <h4>Coding</h4>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">privacy policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-col mt-4">
        <h4>get help</h4>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">branches</a>
          </li>
          <li>
            <a href="#">Placements</a>
          </li>
          <li>
            <a href="#">Activities</a>
          </li>
        </ul>
      </div>
      <div className="footer-col mt-4">
        <h4>Student Section</h4>
        <ul>
          <li>
            <a href="#">Student Grievances</a>
          </li>
          <li>
            <a href="#">Study Material Status</a>
          </li>
          <li>
            <a href="#">Placement Assistance</a>
          </li>
          <li>
            <a href="#">Alumni</a>
          </li>
        </ul>
      </div>
      <div className="footer-col mt-4">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
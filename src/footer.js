import React from 'react'

class footer extends React.Component{
    render(){
        return(
            <footer class="footer-distributed">

            <div class="footer-left">
  
              <h3>CONVO<span>PDF</span></h3>
  
              <p class="footer-links">
                <a href="#heading">Home</a>
                ·
                <a href="#heading">About</a>
                ·
                <a href="#heading">Contact</a>
              </p>
  
              <p class="footer-company-name">CONVOPDF &copy; 2021</p>
            </div>
  
            <div class="footer-center">
  
              <div>
                <i class="fa fa-map-marker"></i>
                <p><span>21 New Gen tech Street</span> Tamil Nadu, India</p>
              </div>
  
              <div>
                <i class="fa fa-phone"></i>
                <p>+91 12345 67890</p>
              </div>
  
              <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@ConvoPDF.com">contact@ConvoPDF.com</a></p>
              </div>
  
            </div>
  
            <div class="footer-right">
  
              <p class="footer-company-about">
                <span>About the company</span>
                Developed for easy and fast pdf conversion tools with ease of use and free to use as the key in our mind
              </p>
            </div>
          </footer>
        )
    }
}
export default footer;
import React from 'react'
import Footer from './footer';
import Homepage from './homepage'
import Pdfviewer from './pdfviewer';
import About from './about'
import Abt from './abt';
import './styles.css'


function menuToggle() {
  const toggleMenu = document.querySelector('.menu');
  toggleMenu.classList.toggle('active');
}


export const App = () => {
  return (
    <div>
      <div class="heading">
        <div class="wrapper">
          <div class="menu">
            <h1>Hello</h1>
            <h1>Converters </h1>
            <h1>Let's</h1>
            <h1>go Home</h1>
          </div>
        </div>
        <h3 onClick={menuToggle} ><a href="#">CONVOPDF</a></h3>
        <ul class="MenuList">
          <li><a href="#ConvoTools">Convert</a></li>
          <li><a href="#PDFtools">tools</a></li>
          <li><a href="#pdfviewer">Viewer</a></li>
          <li><a style={{ 'cursor': 'pointer' }} href="#about">About Us</a></li>
        </ul>
        <a href="#feedback"><button>Contact Us</button></a>
      </div>
      <Homepage />
      <Pdfviewer />
      <Abt />
      <About />
      <Footer />
    </div>
  )
}
export default App
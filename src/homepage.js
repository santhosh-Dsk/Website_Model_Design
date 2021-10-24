import React from 'react';

function goto() {
  window.location.href = "#ConvoTools";
}

class homepage extends React.Component {

  render() {
    return (
      <div>
        <div class="abt" id="Headingthings" style={{ 'margin-top': '100px' }}><p>All ConvoPDF Tools</p>
          <h3>Make use of our collection of PDF tools to process digital documents and streamline your workflow seamlessly</h3>
        </div>
        <div class="scrolldown" onClick={goto}>
          <span></span>
        </div>
        <span class="anchor" id="ConvoTools"></span>
        <div style={{ 'font-size': '40px', 'text-align': 'center', 'font-weight': '400', 'marginBottom': '5%' }} >
          Convertion Tools
        </div>
        <div class="row">
          <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/pdftoecl.svg")', 'background-size': '100% 100%' }}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>PDF to EXCEL</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Convert any EXCEL to PDF within minutes</p>
          </div>
          </a>
          </div>

          <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/pdftoimg.svg")', 'background-size': '100% 100%' }}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>PDF to IMAGE</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Convert any PDF to IMAGE within minutes</p>
          </div>
          </a>
          </div>

          <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/pdftoword.svg")', 'background-size': '100% 100%' }}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>PDF to WORD</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Convert any PDF to WORD within minutes</p>
          </div>
          </a>
          </div>

          <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/exceltopdf.svg")', 'background-size': '100% 100%' }}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>EXCEL to PDF</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Convert any EXCEL to PDF within minutes</p>
          </div>
          </a>
          </div>

          <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/imagetopdf.svg")', 'background-size': '100% 100%' }}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>IMAGE to PDF</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Convert any IMAGE to PDF within minutes</p>
          </div>
          </a>
          </div>

          <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/wordtopdf.png")','backgroundPosition':'center', 'background-size': '410px 250px' ,'backgroundRepeat':'no-repeat'}}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>WORD to PDF</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Convert any WORD to PDF within minutes</p>
          </div>
          </a>
          </div>
        </div>


        <div style={{ 'font-size': '40px', 'text-align': 'center', 'font-weight': '400', 'marginBottom': '5%', 'marginTop': '10%' }}>
          <span class="anchor" id="PDFtools"></span>
          PDF tools
        </div>
        <div class="row">
           <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/mergepdf.svg")', 'background-size': '100% 100%' }}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>PDF Merge</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Merge Any number PDF into one</p>
          </div>
          </a>
          </div>

          <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/splitpdf.svg")', 'background-size': '100% 100%' }}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>PDF Split</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Split Any PDF into pieces</p>
          </div>
          </a>
          </div>

          <div class="column"> <a href="http://localhost:3000/home" target="_blank" ><div class="card" style={{ 'color':'black','background-image': 'url("templates/compresspdf.png")', 'background-size': '310px 180px' ,'backgroundRepeat':'no-repeat','backgroundPosition':'center'}}>
          <p style={{'fontSize':'18px','color':'black','fontWeight':'bold','bottom':'0px'}}>PDF Compress</p>
          <p style={{'marginTop':'65%','fontSize':'15px','color':'black','fontWeight':'normal','bottom':'0px'}}>Compress Any PDF into compact PDF</p>
          </div>
          </a>
          </div>
        </div>
      </div>
    )
  }
}
export default homepage;
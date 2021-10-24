import React from 'react'

function popup() {
    alert("Submission successful, but its not mandetory to fill all the fields");
    window.location.href = "#"
}
class about extends React.Component {
    render() {
        return (
            <div class="popup" style={{ 'margin-left': 'auto', 'margin-right': 'auto', 'width': '400px', 'marginTop': '200px', 'marginBottom': '150px' }}>
                <span id="feedback" style={{ 'marginBottom': '150px' }}></span><br></br><br></br><br></br><br></br><br></br>
                <p class="Mheading" id="Redirecting" style={{ 'font-size': '40px', 'text-align': 'center', 'font-weight': '400', 'marginBottom': '5%' }}>
                    Contact Us</p>
                <input type="text" id="TxtFname" style={{ 'width': '100%', 'padding': '12px', 'border-radius': '15px', 'border': '1px solid #ccc', 'resize': 'vertical' }} placeholder="Your First Name" required /><br></br><br></br><br></br>
                <input type="text" id="TxtLname" style={{ 'width': '100%', 'padding': '12px', 'border-radius': '15px', 'border': '1px solid #ccc', 'resize': 'vertical' }} placeholder="Your Last Name" required /><br></br><br></br><br></br>
                <input type="text" id="Txtmail" style={{ 'width': '100%', 'padding': '12px', 'border-radius': '15px', 'border': '1px solid #ccc', 'resize': 'vertical' }} placeholder="Enter your mail-ID" required /><br></br><br></br><br></br>
                <textarea id="Txtquery" style={{ 'width': '100%', 'padding': '12px', 'border-radius': '15px', 'border': '1px solid #ccc', 'resize': 'vertical' }} placeholder="Type your query" style={{ 'height': '40%', 'width': '100%' }} required></textarea><br></br><br></br>
                <div style={{ 'text-align': 'center' }}>
                    <button onClick={popup} type="submit" onclick="popup();" style={{ 'background-color': '#04a5aa', 'border-radius': '25px', 'color': 'white', 'padding': '12px 20px', 'border': 'none', 'transition': 'all 0.3s ease', 'cursor': 'pointer', 'width': '150px', 'margin-right': '20px' }}>Send Us</button>
                </div><br></br><br></br><br></br>
            </div>
        )
    }
}
export default about;
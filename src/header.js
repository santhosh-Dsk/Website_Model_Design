import React from 'react'

function menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
  }
class header extends React.Component {
    render() {
        return (
            <div>
                <div class="heading">
                    <div class="wrapper">
                        <div class="menu">
                            <h1>Hello</h1>
                            <h1>USER!</h1>
                           </div>
                    </div>
                    <h3 onClick={menuToggle}>CONVOPDF</h3>
                    <a href="#heading"><button>Back Home</button></a>
                </div>
            </div>
        )
    }
}
export default header;
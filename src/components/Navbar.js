import React from 'react'

function Navbar() {
    return (
            <div style={{position: 'fixed', height: "40px", background: 'black', width: "100vw", display: "flex", flexDirection: 'row', color: 'white', justifyContent:'space-around'}}>
                    <p>About me</p>
                    <p>Portfolio</p>
                    <p>Contact Me</p>
            </div>
    )
}

export default Navbar
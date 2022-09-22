import React, { Fragment } from 'react'
import Portfolio from './Portfolio'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'


function Home() {
    return (
        <Fragment>
            <Navbar />
            <br/>
            <br/>
            <div style={{ border: '1px solid black', height: '100vh' }}>
                <About/>
            </div>
            <div style={{ border: '1px solid black', height: '100vh' }}>
                <Portfolio />
            </div>
            <div style={{ border: '1px solid black', height: '100vh' }}>
                <Contact/>
            </div>
        </Fragment>
    )
}

export default Home
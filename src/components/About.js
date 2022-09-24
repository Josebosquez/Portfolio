import React from 'react'
import "./about.css"

function About() {
    return (
        <div style={{  display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <p>About Me</p>

            <div style={{ fontSize: '15px', width: "60%"}}>
                Hello, my name is Jose and I am a 6 year Marine Veteran. I began my coding journey in January 2021 at Digital Film Academy, Code-Immersives while undertaking a Javascript Full Stack course. I like to be challenged and provide solutions to modern day problems.
            </div>
            <br />
            <br />
            <div id="iconBox">
                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/ios/70/000000/html-5--v1.png" alt=""/>
                    <p className="uls" >HTML5</p>
                </div>
                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/ios/50/000000/css3.png" alt=""/>
                    <p className="uls">CSS</p>
                </div>

                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/ios/50/000000/javascript-logo.png" alt=""/>
                    <p className="uls">Javascript</p>
                </div>
                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/windows/50/000000/node-js.png" alt=""/>
                    <p className="uls">Node.js</p>
                </div>
                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/ios/50/000000/github--v1.png" alt=""/>
                    <p className="uls">Github</p>
                </div>
                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/ios/50/000000/git.png" alt=""/>
                    <p className="uls">Git</p>
                </div>
                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/carbon-copy/100/000000/react.png" alt=""/>
                    <p className="uls">React</p>
                </div>
                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/ios/50/000000/database.png" alt=""/>
                    <p className="uls">Database</p>
                </div>
                <div className="icons">
                    <img className="imgs" src="https://img.icons8.com/windows/50/000000/amazon-web-services.png" alt=""/>
                    <p className="uls">AWS</p>
                </div>
            </div>
        </div>
    )
}

export default About
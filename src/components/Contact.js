import React, { useRef } from 'react'

function Contact() {
    const firstNameInputValue = useRef(null)
    const lastNameInputValue = useRef(null)
    const emailInputValue = useRef(null)
    const messageInputValue = useRef(null)

    function handleButton(e) {
        console.log(firstNameInputValue.current.value)
        console.log(lastNameInputValue.current.value)
        console.log(emailInputValue.current.value)
        console.log(messageInputValue.current.value)
    }

    return (
        <div>

            <p style={{ textAlign: 'center', marginTop: '50px'}}>Contact Me</p>

            <form style={{ alignContent: 'center', border: '1px solid black', width: '80%', height: '200px', marginLeft: '10%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px', marginBottom: '20px' }}>
                    <input placeholder='First name' type="text" ref={firstNameInputValue} style={{ height: '25px', width: '25%' }} />
                    <input placeholder='Last name' type="text" ref={lastNameInputValue} style={{ height: '25px', width: "25%" }} />
                    <input placeholder="Email" type="email" ref={emailInputValue} style={{ height: '25px', width: '25%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <textarea placeholder="Message" type="text" ref={messageInputValue} style={{ height: '50px', width: '80%', msTextOverflow: 'clip' }} />
                    <br />
                    <button onClick={handleButton}>
                        Send Message
                    </button>
                </div>
            </form>

            <div style={{ textAlign: "center", display: 'flex', justifyContent: 'space-evenly', marginTop: '50px' }}>
                <a href="https://www.linkedin.com/in/jose-bosquez-3599a0119?trk=people-guest_people_search-card" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-outlined/35/000000/linkedin--v2.png" alt="" /></a>

                <a href="https://github.com/Josebosquez" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/windows/35/000000/github.png" alt="" /></a>
            </div>
        </div>
    )
}

export default Contact

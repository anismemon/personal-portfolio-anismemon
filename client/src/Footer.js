import React from 'react'

function Footer(props) {
    

    // variables to keep return statement cleaner

    let contact = "Contact Me"
    let myInfo = 'My info'

    // checks language and changes content accordingly

    if (props.language === 'FR') {
        contact = 'Contactez-moi';
        myInfo = 'Mes coordonnées'
    }

    if (props.language === 'IT') {
        contact = 'Contattami';
        myInfo = 'I miei recapiti'
    }

    
    return (
        <div id='footerContainer'>
            <div id='leftSide'>
                <p id='myInfo' className='footerInfo'>{myInfo}</p>
                <p id='email' className='footerInfo'>anismemon096@gmail.com</p>
                <p id='phone' className='footerInfo'>+1 802.355.6227</p>
            </div>
            <div id='rightSide'>
                <p id='contactMe'onClick={props.modalOpen}>{contact}</p>
            </div>
        </div>
    )
}

export default Footer

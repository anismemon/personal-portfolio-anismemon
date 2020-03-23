import React from 'react'

class Modal extends React.Component {

    render() {
        return (
            <div id='modalContainer'>
                {(this.props.modalDisplayed) ?
                    <div id='modal'>
                        <div>
                            <textarea id='message'></textarea>
                        </div>
                        <div>
                            <button id='sendMessage' className='button' onClick={this.props.modalOpen}>Send</button>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}

export default Modal

import React, { Component } from 'react';

class SideNav extends Component{
    state = {
        isModalOpen: false
    }

    openModal = () => {
        this.setState({ isModalOpen: true })
    }

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }

    render(){
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h1>Modal Title</h1>
                    <button onClick={() => this.closeModal()}>Close</button>
                </Modal>}
            </div>
            
        )
    }
}

export default SideNav
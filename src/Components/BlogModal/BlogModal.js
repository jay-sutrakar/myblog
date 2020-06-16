import React from 'react'
import './BlogModal.css'
import {  Modal, ModalHeader, ModalBody, } from 'reactstrap'
import ModalForm from './ModelForm/ModalForm'
const blogmodal = (props) => {
    
    return (
        <div>
            <Modal  isOpen={props.openModal} toggle={props.closeModal}>
                <ModalHeader toggle={props.closeModal}>Write Your Blog</ModalHeader>
                <ModalBody >
                    <ModalForm closeModal={props.closeModal} blog={props.blog}></ModalForm>
                </ModalBody>
            </Modal>
        </div>
    )    
}
export default blogmodal

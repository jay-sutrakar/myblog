import React from 'react'
import './NewBlogAdder.css'

const newblogadder = (props) => {
    return (
        <>
        <button className='Button' onClick={props.openModal}>Add</button>
        </>
    )
}
export default newblogadder
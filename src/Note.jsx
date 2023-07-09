import React from 'react'
import './App.css'
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note = (props) => {
    return (
        <>
                <div className='note-box'>
                    <h3>{props.title}</h3>
                    <hr/>
                    <p>{props.content}</p>
                </div>
        </>
    )
}
export default Note;
import React, { useState } from 'react'
import './App.css'
import AddIcon from '@material-ui/icons/Add';

const Write = (props) => {
    const [note, setNote] = useState(
        {
            title: '',
            content: ''
        }
    );

    const changeNote = (e) =>{
        const {name, value }= e.target;
        setNote((preValue) => {
            return {
                ...preValue, [name]: value,
            }
        })
    }
    const AddToClick = () =>{
        props.passNote(note);
        setNote( {
            title: '',
            content: ''
        })
    }
    return (
        <>
            <div className='text-area'>
                <div className='main-area'>
                    <input type='text' placeholder='Title' name='title' onChange={changeNote} value={note.title}/>
                    <br />
                    <textarea rows="0" cols="0" type='text' placeholder='Write something...' name='content' onChange={changeNote} value={note.content}/>
                    <button onClick={AddToClick}><AddIcon/></button>
                </div>
            </div>


        </>
    )
}

export default Write;
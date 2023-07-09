import React, { useState } from 'react'
import Header from './Header';
import Write from './Write';
import Note from './Note';
import FooterTwo from './FooterTwo';

import './App.css'

const App = () => {
    const [addItem, SetAddItem] = useState([]);
    const AddnNotes = (note) => {
        SetAddItem((preValue) => {
            return [...preValue, note]
        })
    }
    return (
        <>
            <Header />
            <Write passNote={AddnNotes} />
            {addItem.map((val, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                    />
                )
            })}
            <FooterTwo />
        </>
    )
}

export default App;
import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const convertToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const clearText = () => {
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState('');  

    return (
        <>
        <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'? 'grey' : 'white',
                color: props.mode ==='dark'?'white':'#042743'}} id="myTextArea" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={convertToUpperCase}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={convertToLowerCase}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            {/* 0.008 sec required to read one word as per google */}
            <p>{0.008 * text.split(" ").length} Minutes required to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

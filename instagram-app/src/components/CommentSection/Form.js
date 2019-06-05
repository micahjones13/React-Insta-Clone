import React from 'react';

const Form = (props) => {
    return(
        <div className = 'form-class'>
        <form onSubmit = {props.addNewComment}>
        <input value = {props.text} onChange={props.onChange} placeholder = 'Add a comment' name = 'text'></input>
        </form>
        </div>
    )
}

export default Form;
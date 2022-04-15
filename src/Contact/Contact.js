import React , { useState } from 'react'
import Button from '../Button/Button'
import './Contact.css'

const Contact = () => { 
    const [subject,setSubject] = useState('');
    const [email,setEmail] = useState('');
    const [description,setDescription] = useState('');
    const [errors,setErrors] = useState('');


    const handleChangeInputSubject = (event) =>{
        setSubject(event.target.value);
    };

    const validateEmail = (email) =>{
        const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        return regex.test(email);
    }

    const handleChangeInputEmail = (event) =>{
       if(validateEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,
                email: null,
            }
            )
        }   
       else{
           setErrors({
               ...errors,
               email: 'Email is not valid'
           })
       }
        
    };

    const handleChangeTextArea = (event) =>{
        setDescription(event.target.value);
    };

    const handleSubmit = (event) =>{
        console.log("Subject", subject)
        console.log("email", email)
        console.log("description", description)

    };


    return (
    <div className='Contact'>
        <div className='formControl'>
            <input 
            onChange={handleChangeInputSubject}
            type='text' 
            placeholder="subject" 
            />
        </div>
        <div className='formControl'>
            <input 
            onChange={handleChangeInputEmail}
            title='email' 
            placeholder='Email' 
            /> 
        </div>
        {errors.email && <span>{errors.email}</span>}   
        <div className='formControl'>
            <textarea onChange={handleChangeTextArea}>
                Your request here
            </textarea>
        </div>
        <div>
            <Button handleClick={handleSubmit}>
                Submit
            </Button>
        </div>
        
    </div>
    )
};

export default Contact

// handleClick={handleSubmit}
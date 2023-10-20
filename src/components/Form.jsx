import React from 'react';
import { useState } from 'react';
import Input from "./Input";
import Button from "./Button";
import {inputs} from '../data/mockdata';
import { ShowPassword,HidePassword } from '../SVG';


const Form = () => {

    const [show, hide] = useState(true);
    const [getText, setGetText] = useState("");
    const [getPassword, setGetPassword] = useState("");

    const showFunc = () => {
        hide(!show);
    }

    const onHandleChange = (e)=>{
        setGetText(e.target.value);
    }

    const onHandleChangePassword = (e)=>{
        setGetPassword(e.target.value);
    }

    const getData = () => {
        let formData = {
            name : getText,
            password : getPassword
        }
        console.log(JSON.stringify(formData));
    }

  return (

        <div className='register-form'>
        {
            inputs.map( (item,index) => (
                <Input key = {index} className='form-control mb-4' type = { show ? item.type : ""} placeholder = {item.placeholder} onChange = {item.type === "text" ? onHandleChange : onHandleChangePassword}>
                    {
                        show ? <ShowPassword className="showPassword" onClick ={showFunc} /> : <HidePassword className = "showPassword" onClick= {showFunc}/> 
                    }
                 </Input>
            ))
        }
        
        <Button className="btn btn-register" text = "Log In" onClick = {getData} /> 
        </div>

)
}

export default Form


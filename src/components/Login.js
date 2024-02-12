import React, { useRef, useState } from 'react'
import Header from './Header';
import { Checkvalidate } from '../utilities/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utilities/firebase';
import { BG_IMG } from '../utilities/constants';

const Login = () => {

    const [Islog,setIslog] = useState(true);
    const [check,setcheck] = useState(false);
    const[err,seterr]=useState();
    const email =useRef();
    const password =useRef();

    const handleBtn = ()=>{
        const message = Checkvalidate(email.current.value,password.current.value);
        seterr(message);
        if(message) return;

        if(!Islog){
            //Sign Up         
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
            
        })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterr(errorCode+"-"+errorMessage);
            // ..
        });

        }else{
            //Sign In
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterr(errorCode+"-"+errorMessage);
        });

        }

    }

    const handleClick=()=>{
        setIslog(!Islog);
    }

    const handlecheck=()=>{
        setcheck(!check);
    }

  return (
    <div className=''>
        <div className='absolute'>
            <Header/>
            <img className='-z-10' src= {BG_IMG} alt='bg-img'/>
        </div>
        <div className='absolute text-white bg-black w-3/12 my-32 mx-auto right-0 left-0 h-4/6 flex justify-center rounded-sm bg-opacity-90' >
        <form onSubmit={(e)=>e.preventDefault()}>
            <h1 className='ml-11 w-full  text-3xl mt-12 mb-9 font-semibold'>{Islog?"Sign In":"Sign Up"}</h1>

            {!Islog && <input className='ml-11 w-9/12 mb-5 h-11 rounded-sm bg-gray-900 bg-opacity-80 p-4' type='text' placeholder='Full Name'/>}

            <input ref={email} className='ml-11 w-9/12 mb-5 h-11 rounded-sm bg-gray-900 bg-opacity-80 p-4' type='text' placeholder='Email or phone number'/>

            <input ref={password} className='ml-11 w-9/12 mb-11 h-11 rounded-sm bg-gray-900 bg-opacity-80 p-4' type={check?"text":"password"} placeholder={Islog?"Password":"Create Password"}/>

            <input type='checkbox' onClick={handlecheck} className='ml-11 w-8'/><span>Show password</span>

            {Islog && <p className='text-red-700 ml-11 mb-4 font-semibold'>{err}</p>}

            <button className='bg-red-800 ml-11 w-9/12 mb-10 h-11 rounded-sm' onClick={handleBtn}>{Islog?"Sign In":"Sign Up"}</button>
            <p className='ml-11 cursor-pointer' onClick={handleClick}>{Islog?"New to Netflix? Sign up Now!":"Already registered Sign In"}</p>
        </form>
        </div>

    </div>
  );
}

export default Login;
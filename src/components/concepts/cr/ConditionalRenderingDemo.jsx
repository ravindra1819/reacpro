import React, { useState } from 'react'

export default function ConditionalRenderingDemo() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showMessage, setShowMessage] = useState(true);

    // Element Variable :

    let message;

    if(isLoggedIn){
        message = <p>Welcome Back! VamseeKrishna</p>
    }else{
        message = <p>Please login</p>
    }



  return (
    <div>
        <h2 className="text-2xl font-bold text-indigo-600 ml-3">ConditionalRenderingDemo</h2>

        {/* ELement Variable Method */}
        <div className='bg-gray-100 p-3 rounded-lg w-2xl text-center mx-auto mb-3'>{message}</div>

        {/* if-else example */}

        <div className='bg-gray-100 p-3 rounded-lg w-2xl text-center mx-auto mb-3'>
            {
                (()=>{
                    if(isLoggedIn){
                        return <p>You have access to the dashboard</p>
                    }else{
                        return <p>Access Denied. Please login</p>
                    }
                })()
            }
        </div>

        {/* Ternary Operator */}

        <div className='bg-gray-100 p-3 rounded-lg w-2xl text-center mx-auto mb-3'>
           {
            isLoggedIn ? <p>LoggedIn (Ternary)</p> : <p>Not LoggedIn (Ternary)</p>
           }
        </div>

        {/* ShortCircuit Operator */}
        <div className='bg-gray-100 p-3 rounded-lg w-2xl text-center mx-auto mb-3'>
           {
            showMessage && <p>This message appears only if showMessage is true!</p>
           }
        </div>

        {/* When state changes */}
        <div className='flex justify-center gap-4'>
            <button className='px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition ' onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn ? "Logout" : "Login"}</button>

            <button className='px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition ' onClick={()=>{setShowMessage(!showMessage)}}>ToggleMessage</button>
        </div>
    </div>
  )
}

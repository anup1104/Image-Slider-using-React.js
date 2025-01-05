import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Card() {
  const [val, setVal] = useState(false)
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-zinc-400'>
    <div className='flex items-center justify-center bg-zinc-200 w-80 h-52 rounded-lg overflow-hidden relative'>
    <img src="https://images.unsplash.com/photo-1700471880758-2c1011b275ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZlaWxkc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <img  className={` transition-all duration-500 w-full h-full rounded-lg absolute ${val === false? "translate-x-[0%]" : "translate-x-[-100%]"} `} src="https://images.unsplash.com/photo-1733690210785-8a48c7895083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <img  className={`transition-all duration-500 w-full h-full rounded-lg absolute ${val === true? "translate-x-[0%]" : "translate-x-[-100%]"} `} src="https://images.unsplash.com/photo-1620917286728-06cf79161524?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVpbGRzfGVufDB8fDB8fHww" alt="" />
      <span onClick={()=>setVal(()=>!val)} className='absolute w-6 h-6 p-1 rounded-[60%] top-[80%] bg-zinc-400'>
          <FaArrowRightLong />
      </span>
    </div>
   
    </div>
  )
}

export default Card
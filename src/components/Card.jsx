import React, { useState } from 'react'

function Card(props) {
  const {img, name, profession, isFriend} = props
  console.log(props) 
  const [val, setVal] = useState(isFriend)
  return (
    <div className=' w-52 h-64 rounded-lg'>
      <div className='bg-white w-full h-[63%] rounded-lg'>
        <img className='w-full h-full object-cover rounded-t-lg' src={img} alt="" />
      </div>
      <div className='w-full px-3 '>
          <h1 className='text-lg font-extrabold'>{name}</h1>
          <p className='text-sm font-semibold'>{profession}</p>
          <button onClick={()=>setVal(()=>!val)} className={ `${val===true ? "bg-red-500" : "bg-sky-500"} py-1 px-3 mt-2 text-zinc-50  rounded-lg`}>{val ? "Remove Friend" : "Add Friend"}</button>
      </div>
      
    </div>
  )
}

export default Card
import React from 'react'
import Card from './components/Card.jsx'
function App() {
  
  const data = [
    {img:"https://images.unsplash.com/photo-1568585105565-e372998a195d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnMlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",name:"Anup", profession:"Coder", isFriend:false},
    {img:"https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnMlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",name:"Jone", profession:"Singer",isFriend:false},
    {img:"https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWVzdHxlbnwwfHwwfHx8MA%3D%3D",name:"William", profession:"Artist",isFriend:false},
  ]


  return (
    <div className='bg-zinc-300 flex items-center justify-center w-screen h-screen gap-5'>
         {
          data.map((items, idx)=><Card  {...items}/>)
         }
    </div>
    // <Card/>
  )
}

export default App
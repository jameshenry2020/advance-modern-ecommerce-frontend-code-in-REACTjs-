import React from 'react'

interface MessageProps{
  color:string,
  children:React.ReactNode;
}

const Message = ({color, children}:MessageProps) => {
  return (
    <div className={`bg-${color}-100 border border-${color}-500 text-${color}-700 px-4 py-3 w-2/3`} role="alert">
       {children}
   </div>
  )
}

export default Message


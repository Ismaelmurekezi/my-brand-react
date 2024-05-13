import React from 'react'

const MessageBox = () => {
  return (
                <div id="message-box" className='w-[600px] p-12 h-72  bg-blue-950 rounded-xl z-0 mt-40 visible'>
                <h3 id="message-title" className='text-[#36c0c9] text-center text-xl font-medium'>Message Feedback</h3>
                <div className='pb-2'>
                    <label className='text-[#36c0c9] font-medium pr-2 '>Names:</label>
                    <span id="visitorName">name</span>
                </div>
                <div className='pb-2'>
                    <label className='text-[#36c0c9] font-medium pr-2'>Email:</label>
                    <span id="visitorEmail">email</span>
                </div>
                <div className='pb-10'>
                    <label className='text-[#36c0c9] font-medium pr-2'>Message:</label>
                    <span id="visitorMessage">message</span>
                </div>
                <button id="dismiss-btn" className='border-2 border-[#36c0c9] py-2 px-14 rounded-xl text-[#36c0c9] font-medium text-lg flex m-auto  '>Dismiss</button>
            </div> 
  )
}

export default MessageBox
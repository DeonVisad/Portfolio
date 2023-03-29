import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#002029] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/dab59583-09a6-4209-9711-80e0b78e4156' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#B5F44A] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or feel free to email me at DeonVisad@gmail.com</p>
            </div>
            <input className='p-1' type='text' placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' required></textarea>
            <button className='text-white border-2 border-[#B5F44A] hover:bg-[#E01A4F] hover:border-[#53B3CB] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact;
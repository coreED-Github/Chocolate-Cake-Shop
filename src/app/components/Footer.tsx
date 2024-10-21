import React from 'react'
export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center m-32 mb-0'>
        <nav className='flex justify-center flex-wrap gap-10 text-slate-600 font-medium bg-gradient-to-r from-black-900 to-yellow-700'>
          <a className='hover:text-cyan-300 text-white' href='#'>Home</a>
          <a className='hover:text-cyan-300 text-white' href='#'>About</a>
          <a className='hover:text-cyan-300 text-white' href='#'>Delivery</a>
          <a className='hover:text-cyan-300 text-white' href='#'>Contact Us</a>
        </nav>
        <div className='flex justify-center space-x-5 transition-transorm duration-500 ease-in-out transform hover:scale-105'>
          <a href="https://www.facebook.com/share/hFyL6uw6Yps1ZCJM/" target='blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' alt='facebook logo' />
          </a>
          <a href="https://www.linkedin.com/in/saira-nasir-935bb1230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/4494/4494497.png' alt='linkdin logo' />
          </a>
          <a href="https://twitter.com" target='blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/4494/4494477.png' alt='instagram logo' />
          </a>
          <a href="https://instagram.com" target='blank' rel='nofollow noopener'>
            <img src='https://cdn-icons-png.flaticon.com/128/1384/1384063.png' alt='instagram logo' />
          </a>
        </div>
        <h3 className='text-center hover:text-cyan-600 text-blue-900 font-medium mb-8'>Created By Saira Nasir. </h3>
        <br />
        <br />
      </footer>
    </div>
  )
}

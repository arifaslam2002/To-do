import './Footer.css';
import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <>
        <div className='footer'>
            <p>Copywrite {today.getFullYear()}</p>
        </div>
    </>
  )
}

export default Footer
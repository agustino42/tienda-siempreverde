import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Siempre Verde Grow Shop . . </p>
      <p className="icons">
       <a href='www.google.com'>
        <AiFillInstagram />
        </a>
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
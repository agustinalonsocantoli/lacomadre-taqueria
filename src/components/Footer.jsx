// Icons 
import { SlSocialInstagram } from 'react-icons/sl';
import { VscFileCode } from 'react-icons/vsc';
import { SiGooglemaps } from 'react-icons/si';
import { FaRegCopyright } from 'react-icons/fa';

export const Footer = () => {
    return(
        <div className='footer'>
            <div><a href="https://www.instagram.com/lacomadretaqueria/"><SlSocialInstagram />Instagram</a></div>

            <div><a href="https://goo.gl/maps/JUS3sxubirbFLvoC8"><SiGooglemaps />Location</a></div>

            <div><a href="https://www.linkedin.com/in/agustin-alonso-cantoli-5a54a0182/"><VscFileCode />Developer<span>Agustin Alonso Cantoli</span></a></div>

            <div><span><FaRegCopyright />All Rights Reserved.</span></div>
        </div>
    );
}
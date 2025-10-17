 // Footer section                                                                     
 // ~~~~~~~~~~~~~~                                                                      
 // Website footer with company information and legal links.                         
 // Displays contact info, Apple logo, and dynamically renders footer links.                                 
 // Uses data from constants for easy maintenance and updates.            
 // Alex Cou 25/10/17 

import {footerLinks} from "../constants/index.js";
import AppleLogo from "/logo.svg";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
                <img src={AppleLogo} alt ="Apple logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
// The header navigation bar 
// ~~~~~~~~~~~~~~~
// With a logo, some navigation tag, and two botton(search and cart)
// Alex Cou 25/10/14

import { navLinks } from '../constants/index.ts'
import logoSvg from '/logo.svg'
import searchSvg from '/search.svg'
import cartSvg from '/cart.svg'

const NavBar = () => {
    return(
        <header>
        <nav>
            <img src={logoSvg} alt="Apple logo" />

            <ul>
                {navLinks.map(({ label })=> (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </ li>
                ))}  
            </ul>

            <div className="flex-center gap3">
                <button>
                    <img src={searchSvg} alt="Search" />
                </button>
                <button>
                    <img src={cartSvg} alt="Cart" />
                </button>
            </div>

        </nav>
        </header>
    );
}


export default NavBar;

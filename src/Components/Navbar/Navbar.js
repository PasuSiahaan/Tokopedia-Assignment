/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import {Link} from 'react-router-dom';

//css
import { navbarCSS, navbarButtonCSS } from './NavbarEmotion';


const Navbar = () =>{
        return (
            <div css={navbarCSS}>
                <div>
                    <Link to='/' css={navbarButtonCSS}>Pokemon List</Link>
                </div>
                <div>
                    <Link to='/my-pokemon-list' css={navbarButtonCSS}>My Pokemon List</Link>
                </div>
            </div>
        )
}
export default Navbar;
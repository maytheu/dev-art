import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Header.css'
import HeaderNav from './HeaderNav';

class Header extends Component{
    render(){
        return(
            <div className="nav">
                <Link to="/" className="logo">Dev Art</Link>
                <HeaderNav firstLink="signin" first="Sign In" secondLink="gallery" second="Gallery" />
                <HeaderNav firstLink="language" first="Language" secondLink="about" second="About" />
                <HeaderNav firstLink="rules" first="Competition Rules" secondLink="creators" second="Young Creators" />
            </div>
        )
    }
}

export default Header
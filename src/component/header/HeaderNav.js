import React from 'react'
import { NavLink } from 'react-router-dom'

import './HeaderNav.css'

const HeaderNav = (props) => (
    <div className="link">
                    <NavLink to={`/${props.firstLink}`}>{props.first}</NavLink>
                    
                    <NavLink to={`/${props.secondLink}`}>{props.second}</NavLink>
                </div>
)

export default HeaderNav
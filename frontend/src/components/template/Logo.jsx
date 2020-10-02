import React from 'react'
import './Logo.css'
import imageLogo from '../../assets/logo.png'

export default props => 
<aside className="logo">
    <img className="logo_img" src={imageLogo} alt='Logo da aplicação' />
</aside>
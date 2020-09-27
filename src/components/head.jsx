import React from 'react'
import Menu from './menu'
import imageLogo from '../components/logo.png'
import './head.css'

export default props => <div>
    <img src={imageLogo} alt='Logo da aplicação' />
    <Menu></Menu>
</div>
import React from 'react'
import Item from './Item'
import './Menu.css'

export default props => <div>
    <ul className="menu_lista">        
        <Item nome='Administração' url="#/users" ></Item>
        <Item nome='Casas' url="#/casas" ></Item>
    </ul>
</div>
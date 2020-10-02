import React from 'react'
import Item from './Item'
import './Menu.css'

export default props => <div>
    <ul className="menu_lista">
        <Item nome='Área ADM' url="#/users" ></Item>
        <Item nome='Alugar' url="#/casas" ></Item>
    </ul>
</div>
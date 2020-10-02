import React from 'react'
import './Item.css'

export default props => 
        <li className="lista_item">
            <a className="lista_item_link" href={props.url}>{props.nome}</a>
        </li>

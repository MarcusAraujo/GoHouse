import React from 'react'
import Lista from './lista'
import lista from './lista'
export default props => <div>
    <h2>{props.nome}</h2>
    <ul>
        <Lista nome='joao' sobrenome='AST'></Lista>
        <Lista nome='joao' sobrenome='AST'></Lista>
        <Lista nome='joao' sobrenome='AST'></Lista>
    </ul>
</div>
import React, { Component } from 'react'
//import './Casa.css'

export default class User extends Component {

    render() {
        return <div>
            {this.props.user.name}
        </div>
    }

}
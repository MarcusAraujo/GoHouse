import React, { Component } from 'react'
import axios from 'axios'
import User from '../template/User'

const base_url = "http://localhost:3001/users"

export default class AdmCrud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }
    componentDidMount() {
        axios["get"](base_url, null)
            .then(resp => {
                console.table(resp.data)
                this.setState({
                    isLoaded: true,
                    items: resp.data
                });
            }, (error) => {
                alert("error")
                this.setState({
                    isLoaded: true,
                    error
                });

            })
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (                
                [<h1>Usuários</h1>,
                <ul>
                    {items.map(item => (
                        <li key={item.id} className="User" >
                            <User user={item} />
                        </li>
                    ))}
                </ul>]
            );
        }
    }
}
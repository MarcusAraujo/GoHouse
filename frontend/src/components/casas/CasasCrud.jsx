import React, { Component } from 'react'
import Casa from '../template/Casa'
import axios from 'axios'

const base_url = "http://localhost:3001/casas"

export default class CasasCrud extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            error: null,
            isLoaded: false,
            items: []
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
                <ul>
                    {items.map(item => (
                        <li key={item.id} className="casa_lista_item" >
                            <Casa casa={item}/>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
import React, { Component } from 'react'
import './Casa.css'
import axios from 'axios'

const base_url = "http://localhost:3001/users"


export default class Casa extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        if (this.props.casa.id_locatario != null) {
            return <div className='casa_container'>
                <img className="casaAlugadaImagem" src={this.props.casa.image} alt='imagem da casa' />
                <p className="casaAlugadaEndereco" > {this.props.casa.address} </p>
                <p className="casaAlugadaLabel">ALUGADA</p>
            </div>
        }
        else {
            return <div className='casa_container'>
                <img className="casaImageText" src={this.props.casa.image} alt='imagem da casa' />
                <p className="casaImageText" > {this.props.casa.address} </p>
                <button onClick={this.alugar}>Alugar</button>
            </div>
        }
    }

    alugar() {
        // ERRO!!
        const {casa} = this.props.casa
        alert(typeof (casa))
        axios["put"](base_url, casa)
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
}
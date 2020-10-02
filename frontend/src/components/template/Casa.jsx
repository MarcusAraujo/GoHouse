import React, { Component } from 'react'
import './Casa.css'



export default class Casa extends Component {

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
        alert("alugar")
    }
}
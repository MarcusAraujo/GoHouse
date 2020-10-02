import React from 'react';
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'
import {HashRouter} from 'react-router-dom'
import Routes from './Routers'

export default props =>
<HashRouter>
    <React.Fragment>    
        <Header/>    
        <Routes/>
        <Footer/>        
    </React.Fragment>  
</HashRouter>

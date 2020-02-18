import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className='footer'>
                <span className='footer__text'>Created by: </span>
                <span className='footer__author'>Mateusz Greń</span>
                <span className='footer__date'>2020</span>
            </footer>
        )
    }
}

export default Footer 
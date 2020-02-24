import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className='footer'>
                <section className='text'>
                    <span className='text__info'>Created by: </span>
                    <span className='text__author'>Mateusz</span>
                    <span className='text__author'>Greń</span>
                    <span className='text__date'>2020</span>
                </section>
            </footer>
        )
    }
}

export default Footer 
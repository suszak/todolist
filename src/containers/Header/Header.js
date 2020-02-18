import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <header className='header'>
                <h1 className='header__title'>ToDo list:</h1>
            </header>
        )
    }
}

export default Header 
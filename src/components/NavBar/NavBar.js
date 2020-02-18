import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return(
            <nav className="navigationBar">
                <input type='text' value='Type your task here...' className='navigationBar__input'></input>
                <button className='navigationBar__button'>Add task</button>
            </nav>
        );
    }
}

export default NavBar
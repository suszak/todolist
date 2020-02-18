import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return(
            <nav class="navigationBar">
                <input type='text' value='Type your task here...' class='navigationBar__input'></input>
                <button class='navigationBar__button'>Add task</button>
            </nav>
        );
    }
}

export default NavBar
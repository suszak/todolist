import React, { Component } from 'react';
import './Main.css';
import NavBar from '../../components/NavBar/NavBar'
import ToDoItem from '../../components/ToDoItem/ToDoItem'

class Main extends Component {
    render() {
        return(
            <main className='main'>
                <NavBar />
                <ToDoItem />
            </main>
        )
    }
}

export default Main 
import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

    inputFocused = (sectionName) => {
        document.querySelector(`.${sectionName}__label`).classList.add(`${sectionName}__label--active`);
        document.querySelector(`#${sectionName}Tooltip`).classList.remove('tooltip--visible');
    }

    inputUnfocused = (sectionName) => {
        if (!document.querySelector(`.${sectionName}__input`).value) {
            document.querySelector(`.${sectionName}__label`).classList.remove(`${sectionName}__label--active`);
        }
    }

    moveLabel = () => {
        if(!document.querySelector('.task__input').value) {
            document.querySelector('.task__label').classList.remove('task__label--active');
        }

        if(!document.querySelector('.city__input').value) {
            document.querySelector('.city__label').classList.remove('city__label--active');
        }
    }

    render() {
        return(
            <nav className="navigationBar">
                <section className='task'>
                    <div className='tooltip' id='taskTooltip'>It cannot be empty!</div>
                    <label for='taskInput' className='task__label'>Type your task here...</label>
                    <input type='text' name='taskInput' className='task__input' id='draftInput' onChange={this.props.updateDraft} onFocus={() => {this.inputFocused('task')}} onBlur={() => {this.inputUnfocused('task')}} value={this.props.state.draft}></input>
                </section>
                <section className='city'>
                    <div className='tooltip' id='cityTooltip'>It cannot be empty!</div>
                    <label for='cityInput' className='city__label'>Type location here...</label>
                    <input type='text' name='cityInput' className='city__input' id='cityInput' onChange={this.props.updateCity} onFocus={() => {this.inputFocused('city')}} onBlur={() => {this.inputUnfocused('city')}} value={this.props.state.city}></input>
                </section>
                <button className='navigationBar__button' onClick={async () => { await this.props.updateTaskList(); this.moveLabel()}} >Add task</button>
            </nav>
        );
    }
}

export default NavBar
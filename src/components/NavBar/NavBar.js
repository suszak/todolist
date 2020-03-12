import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import './NavBar.css';
import "react-datepicker/dist/react-datepicker.css";

class NavBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
        
    handleChange = async (deadline) => {
        await this.setState({
                startDate: deadline
        });
        
        this.props.updateDate(this.state.startDate);
    }
    

    inputFocused = (sectionName) => {
        document.querySelector(`.${sectionName}__label`).classList.add(`${sectionName}__label--active`);
        document.querySelector(`#${sectionName}Tooltip`).classList.remove('tooltip--visible');
        document.querySelector(`#${sectionName}TooltipSign`).classList.remove('tooltip--visible');
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

        if(!document.querySelector('.deadline__input').value) {
            document.querySelector('.deadline__label').classList.remove('deadline__label--active');
        }
    }

    render() {
        return(
            <nav className="navigationBar">
                <section className='task'>
                    <div className='tooltip' id='taskTooltip'>It cannot be empty!</div>
                    <div className='tooltip' id='taskTooltipSign'>Don't use '|' inside!</div>
                    <label htmlFor='taskInput' className='task__label'>Type your task here...</label>
                    <input type='text' name='taskInput' className='task__input' id='draftInput' onChange={this.props.updateDraft} onFocus={() => {this.inputFocused('task')}} onBlur={() => {this.inputUnfocused('task')}} value={this.props.state.draft}></input>
                </section>
                <section className='city'>
                    <div className='tooltip' id='cityTooltip'>It cannot be empty!</div>
                    <div className='tooltip' id='cityTooltipSign'>Don't use '|' inside!</div>
                    <label htmlFor='cityInput' className='city__label'>Type location here...</label>
                    <input type='text' name='cityInput' className='city__input' id='cityInput' onChange={this.props.updateCity} onFocus={() => {this.inputFocused('city')}} onBlur={() => {this.inputUnfocused('city')}} value={this.props.state.city}></input>
                </section>
                <section className='deadline'>
                    <div className='tooltip' id='deadlineTooltipSign'>Don't use '|' inside!</div>
                    <div className='tooltip' id='deadlineTooltip'>It cannot be empty!</div>
                    <label htmlFor='deadlineInput' className='deadline__label'>Set deadline...</label>
                    <DatePicker selected={this.props.state.deadline} onChange={this.handleChange} id='deadlineInput' name='deadlineInput' className='deadline__input' onFocus={() => {this.inputFocused('deadline')}} onBlur={() => {this.inputUnfocused('deadline')}} value={this.state.startDate} dateFormat='dd/MM/yyyy' withPortal/>
                </section>
                <button className='navigationBar__button' onClick={async () => { await this.props.updateTaskList(); this.moveLabel()}} >Add task</button>
            </nav>
        );
    }
}

export default NavBar
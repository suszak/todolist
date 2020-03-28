import React, { Component } from 'react';
import './ToDoItem.css';
import {
    Link 
} from 'react-router-dom'

class ToDoItem extends Component {
    state = {
        temp: '',
        weather: '',
        hidden: true
    }

    actualDate = new Date();
    tommorow = new Date(this.actualDate.getFullYear(), this.actualDate.getMonth(), this.actualDate.getDate()+1);

    getWeatherFromApi = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=0c79a3e8f66a976ec6832ddc76907c72&q=${this.props.task.city}&units=metric&lang=en`);
            if(response.status === 200) {
                const weather = await response.json();
                this.setState({ temp: 'Temperature: '+Math.round(weather.main.temp)+'°C', weather: weather.weather[0].description });
            } else {
                this.setState({ temp: 'City not found', weather: '' });
            }
        } catch(error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getWeatherFromApi().then(() => {
            this.setState({hidden: false});
        });
    }

    render() {
        return(
            <section className={((this.props.task.done === false) && (this.props.task.deadline < this.tommorow))?'todoItem todoItem--warning':'todoItem'}>
                <span className='todoItem__importantSign' onClick={() => {this.props.changeImportantState(this.props.task.id)}}>
                    <span className={this.props.task.important?'hidden':''}>
                        <i className='far fa-star'></i>
                    </span>
                    <span className={this.props.task.important?'':'hidden'}>
                        <i className='fas fa-star'></i>
                    </span>
                </span>
                <span className={this.props.task.done?'todoItem__name todoItem__name--done':'todoItem__name'} onClick={() => {this.props.changeState(this.props.task.id)}} ><span>{this.props.task.name}</span></span>
                <span className={(this.props.task.deadline >= this.tommorow)?'todoItem__deadline':'todoItem__deadline todoItem__deadline--afterDate'}>{this.props.task.deadline.toLocaleDateString('pl-PL')}</span>
                <span className='todoItem__city'>{this.props.task.city}</span>
                <section className={this.state.hidden?'weather':'weather weather--hidden'}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </section>
                <section className={this.state.hidden?'weather weather--hidden':'weather'}>
                    <span className='weather__temp'>{this.state.temp}</span>
                    <span className='weather__info'>{this.state.weather}</span>
                </section>
                <span className='todoItem__edit'>
                    <Link to={`/editTask/${this.props.task.id}`} ><i className="fas fa-edit"></i></Link>
                </span>
                <span onClick={() => {this.props.deleteTask(this.props.task.id)}} className='todoItem__delete'><i className='fas fa-minus-circle'></i></span>
            </section>
        );
    }
}

export default ToDoItem
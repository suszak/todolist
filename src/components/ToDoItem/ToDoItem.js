import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    state = {
        temp: '',
        weather: '',
        hidden: true
    }

    getWeatherFromApi = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?appid=0c79a3e8f66a976ec6832ddc76907c72&q=${this.props.task.city}&units=metric&lang=pl`);
            if(response.status === 200) {
                const weather = await response.json();
                this.setState({ temp: Math.round(weather.main.temp)+'°C', weather: weather.weather[0].description });
            } else {
                this.setState({ temp: 'Temperature information not found', weather: '' });
                console.error(response.statusText); 
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
            <section className={this.state.hidden?'todoItem todoItem--hidden':'todoItem'}>
                <span className={this.props.task.done?'todoItem__name todoItem__name--done':'todoItem__name'} onClick={() => {this.props.changeState(this.props.task.id)}} >{this.props.task.name}</span>
                <span className='todoItem__city'>{this.props.task.city}</span>
                <span className='todoItem__temp'>{this.state.temp}</span>
                <span onClick={() => {this.props.deleteTask(this.props.task.id)}} className='todoItem__delete'><i className='fas fa-minus-circle'></i></span>
            </section>
        );
    }
}

export default ToDoItem
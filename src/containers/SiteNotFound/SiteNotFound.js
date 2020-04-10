import React, { Component } from "react";
import { withRouter } from 'react-router';
import {
    Link 
} from 'react-router-dom'
import './SiteNotFound.css';

class SiteNotFound extends Component {
    state = {
        counter: 10
    }

    countdown = () => {
        let count = this.state.counter;

        if(count <= 1) {
            clearInterval(this.state.countdownInterval);
            this.props.history.push('/');
        }

        this.setState({counter: this.state.counter - 1});
    }

    componentDidMount() {
        this.setState({countdownInterval: setInterval(this.countdown, 1000)})
    }

    async componentWillUnmount() {
        await clearInterval(this.state.countdownInterval);
    }

    render() {
        return(
            <main className='SiteNotFound'>
                <h1 className='SiteNotFound__title'>Site not found!</h1>
                <section className='SiteNotFound__main'>
                    <p className='SiteNotFound__info'>Redirect in<span className='counter'>{this.state.counter}</span></p>
                    <Link to={`/`} ><button className='SiteNotFound__button'>Back</button></Link>
                </section>
            </main>
        )
    }
}

export default withRouter(SiteNotFound)
import React, { Component } from "react";
import { withRouter } from 'react-router';
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

    componentWillUnmount() {
        clearInterval(this.state.countdownInterval);
    }

    render() {
        return(
            <main className='SiteNotFound'>
                <p>Site not found!</p>
                <p>Redirect in {this.state.counter}</p>
            </main>
        )
    }
}

export default withRouter(SiteNotFound)
import React, {Component} from 'react';
import './Edit.css';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

// function Edit() {
//     const {match, location, history} = this.props;

//     return (
//         <main className='Edit'> 
//             <p>Edit task: {match}</p>
//         </main>
//     )
// }

class Edit extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const { match } = this.props;

        return(
            <main className='Edit'> 
                 <p>Edit task: {match.params.taskId} </p>
            </main>
        )
    }
}

// const EditWithRouter = ;
export default withRouter(Edit)
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
 
    state = {
        text:''
    }

    static propTypes = {
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        users:PropTypes.array.isRequired,
        setAlert:PropTypes.func.isRequired
    }

    onChange = e => this.setState({[e.target.name]:e.target.value});

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Name Required !','light');
        } else {
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
        }
    }

    render() {
        const {clearUsers,users} = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type="text" name='text' placeholder='Search users...' value={this.state.text}
                    onChange={this.onChange} />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
                {users.length > 0 ? 
                 <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                 :null}
    
                
            </div>
        )
    }
}

export default Search

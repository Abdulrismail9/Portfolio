import React, { Component } from 'react';
import { connect } from 'react-redux';

const newProject = {
    name: '',
    description: '',
    date_completed: '',
    tag_id: '',
    gitHub: '',
    website: '',
    thumbnail: ''
}

class AdminForm extends Component {

    state = newProject;

    handleChangeFor = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addProject = () => {
        this.props.dispatch({ type: 'ADD_NEW', payload: this.state })
        this.setState(newProject);
    }

    render() {

        return (
            <div>
                <h1>Add New Project</h1>
                <span>
                    <input type='text' name='name' onChange={this.handleChangeFor} value={this.state.name} />
                    <input type='date' name='date_completed' placeholder='date' onChange={this.handleChangeFor} value={this.state.date_completed} />
                    <select onChange={this.handleChangeFor} name='tag_id' placeholder="Tag" >
                       <option value ={0}></option>
                       <option value={1}>React</option>
                       <option value={2}>Jquery</option>
                       <option value={3}>Node</option>
                       <option value={4}>SQL</option>
                       <option value={5}>Redux</option>
                       <option value={6}>HTML</option>
                   </select>
                </span>
                <div>
                    <input type='text' name='gitHub' placeholder='github URL' onChange={this.handleChangeFor} value={this.state.gitHub} />
                    <input type='text' name='website' placeholder='Website URL' onChange={this.handleChangeFor} value={this.state.website} />
                    <input type='text' name='description' placeholder='Description' onChange={this.handleChangeFor} value={this.state.description} />
                    <input type='text' name='thumbnail' placeholder='thumbnail' onChange={this.handleChangeFor} value={this.state.thumbnail} />
                </div>
                <button onClick={this.addProject}>Submit</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(AdminForm);

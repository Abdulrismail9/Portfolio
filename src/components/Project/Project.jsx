import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
    
    handleClick = ()=>  {
        console.log('in handleChange');
        this.props.dispatch({type: 'FETCH_PROJECTS' })
    }




  render() {

    let projectItems = this.props.reduxStore.projects.map(project => {
    return <div key={project.id}>
        name: {project.name}
        <br/>
        date: {project.date_completed}
        <br/>
        tag id: {project.tag_id}
        <br/>
        github: {project.github}
        <br/>
        website: {project.website}
        <br/>
        description: {project.description}
        <br/>
        thumbnail: {project.thumbnail}
        <br/>
        </div>
    
    })

    return (
   <div>
       <h1>project view</h1>
       {projectItems}
       <button onClick={this.handleClick}>click here</button>
   </div>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapReduxStateToProps)(App);

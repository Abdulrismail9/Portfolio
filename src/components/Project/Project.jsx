import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class App extends Component {
    
    componentDidMount () {
        this.props.dispatch({type: 'FETCH_PROJECTS' })
    }

  render() {
  
    return (
   <div>
       <h1>project view</h1>
       <Table>
           <TableHead>
               <TableRow>
                   <TableCell>Name</TableCell>
                   <TableCell>Date</TableCell>
                   <TableCell>Tag</TableCell>
                   <TableCell>Github</TableCell>
                   <TableCell>Website</TableCell>
                   <TableCell>Description</TableCell>
                   <TableCell>Thumbnail</TableCell>
                   </TableRow>
               </TableHead>
               {this.props.reduxStore.projects.map((project) => {
                        return(
                            <TableBody key={project.id}>
                            <TableRow>
                            <TableCell>{project.name}</TableCell>
                            <TableCell>{project.date_completed}</TableCell>
                            <TableCell>{project.tag}</TableCell>
                            <TableCell>{project.github}</TableCell>
                            <TableCell>{project.website}</TableCell>
                            <TableCell>{project.description}</TableCell>
                            <TableCell>{project.thumbnail}</TableCell>
                            </TableRow>
                            </TableBody>
                        )
                    })}
               
       </Table>
   </div>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapReduxStateToProps)(App);

import React, { Component } from 'react';
import AdminForm from '../Admin/AdminForm.jsx';
import { connect } from 'react-redux';



class AdminDisplay extends Component {

  render() {

    return (
      <div>
     
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect(mapReduxStateToProps)(AdminDisplay);

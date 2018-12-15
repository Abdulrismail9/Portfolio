import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import AdminForm from '../Admin/AdminForm.jsx';



class Admin extends Component {

  


  render() {
    return (
      <div>
        <Link to='/'> Back to Project</Link>
        <AdminForm />
      </div>
    );
  }
}


export default withRouter(connect()(Admin));

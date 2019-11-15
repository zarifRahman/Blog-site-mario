import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

  render(){
    const { projects, auth} = this.props;
    console.log("from dashboard- All database values-", projects);
    if(!auth.uid) return <Redirect to="/signin" />

    return(
      <div className="dashboard container">
        <div className="row">

          <div className="col s12 m6"> 
            <ProjectList projects={projects} />
          </div>
          
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div> 
          
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log("state-",state);
  return {
    projects: state.firestore.ordered.projects, // takes data from firestore and replace thed demo data
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(Dashboard); 
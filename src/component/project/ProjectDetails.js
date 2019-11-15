
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';



const ProjectDetails = (props) => {
  
  const { project, auth } = props; //props.project -- {authorFistName: "", content:"", title: ""}
  if(!auth.uid) return <Redirect to="/signin" />

  if(project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">

          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p>{ project.content} </p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div> `{project.createdAt.toDate().toDateString()}` </div>
          </div>
          
        </div>
      </div>
    )
  }else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state); // 'state' has the values of the database
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    //These r the 'props' value of 'ProjectDetails'
    project: project, // {authorFistName: "", content:"", title: ""}
    auth: state.firebase.auth
  }
}

// 1st - get data from the database (firebase)
export default compose (
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'project' }
  ])
)(ProjectDetails);
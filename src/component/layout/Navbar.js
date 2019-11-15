import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedIn';
import SignedOutLink from './SignedOut';
import {connect} from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLink profile = {profile}/> : <SignedOutLink/>;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
          { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // 'state' has - {auth, project, firestore, firebase} from rootReducer
  console.log('Navbar mapState-', state);
  return {
    auth: state.firebase.auth,  //returns {isEmpty:true, isLoaded:true} object
    profile: state.firebase.profile // intial - ZS
  }
}
export default connect(mapStateToProps)(Navbar);
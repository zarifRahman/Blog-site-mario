
export const createProject = (project) => {
  //project - {title: "", content:""}
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    
    // add data to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').add({ 
      ...project,
      // take authorFirstName, authorLastName from DB
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_PROJECT", project: project }); //action-{type: , project:}
    }).catch((err) => {
      dispatch({ type: "CREATE_PROJECT_ERROR", err }) //action{}
    })
  }
}


// Net Ninja
// Blah Blah Blah
// 3rd,september

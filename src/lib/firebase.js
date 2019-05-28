
export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)

export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
}

export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
}

// export const signOut = () => {
//   // return firebase.auth().signOut()

// return firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });
//   console.log('cerraste sesion')

// }

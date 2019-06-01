
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

export const currentUser = () => {
  const user = firebase.auth().currentUser;
  console.log(user)
  return user
}

export const signOut = () => {
  return firebase.auth().signOut()

  console.log('cerraste sesion')

}

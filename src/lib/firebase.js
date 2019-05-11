
export const login = (email,password) => 
  firebase.auth().signInWithEmailAndPassword(email, password)

 export const register =(email, password) =>
  firebase.auth().createUserWithEmailAndPassword( email, password);


export const signInGoogle = () => {
let providerGoogle = new firebase.auth.GoogleAuthProvider();
return firebase.auth().signInWithPopup(providerGoogle)
}

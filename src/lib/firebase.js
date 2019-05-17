
export const login = (email,password) => 
  firebase.auth().signInWithEmailAndPassword(email, password)

 export const register =(email, password) =>
  firebase.auth().createUserWithEmailAndPassword( email, password);


export const signInGoogle = () => {
let providerGoogle = new firebase.auth.GoogleAuthProvider();
return firebase.auth().signInWithPopup(providerGoogle)
}

export const createPost = (data) => {
  return firebase.firestore().collection("posts").add(data)
  .then(function(docRef) {
     console.log("Document written with ID: ", docRef.id);
 })
 .catch(function(error) {
    console.error("Error adding document: ", error);
 });

}

export const login = (email,password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function (){
    console.log("se inicio sesion")

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    // ...
  });
}
export const register =(email, password)=>{
  firebase.auth().createUserWithEmailAndPassword( email, password);
}

export const signInGoogle = () =>{
  let providerGoogle = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(providerGoogle)
}
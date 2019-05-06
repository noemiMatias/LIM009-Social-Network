// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
}
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
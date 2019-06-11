import { login, signInGoogle, signInFacebook } from "../lib/firebase.js";
import { collectionUser } from "../lib/firestore.js";
import { changeView } from "../controller/router.js";




export const signInEvent = (e) => {
  event.preventDefault()
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  login(email, password)
  .then((response) => {
    changeView("#wall")
    console.log("estoy en el muro")
  })



    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage} Tipo:${errorCode}`)
    })
}




export const signInGoogleEvent = () => {
  signInGoogle().then((response) => {
    const userObject = {
      name: response.user.displayName,
      email: response.user.email,
      uidUser: response.user.uid,
      photoUser: response.user.photoURL

    }
    collectionUser(userObject).then(()=>{
      changeView('#wall')
    })

    


    console.log('esty en el muro')
      .catch(error => {
        console.error(error);

      })

  })
}
export const signInEventfacebook = () => {
  signInFacebook().then((result) => {
    console.log(result)
  })

}



export const initFirebaseAuth = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
callback(user)
      console.log('estas activo')
  
    } else {
      console.log('no estas activo')
    }
  });
}



import { login, signInGoogle, signInFacebook } from "../lib/firebase.js"
import { changeView } from "../controller/router.js"
import { collectionUser, traerDatos } from '../lib/firestore.js'
//  import wall from "../viewTemplates/wall.js";

// import { traerDatos } from '../lib/firestore.js'

export const signInEvent = (e) => {
  event.preventDefault()
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  login(email, password).then(()=>{

    traerDatos()
        changeView('#wall')
        console.log("estoy en el muro")
  })
  
    

.catch(error => {
  const errorCode = error.code;
  const  errorMessage = error.message;
  alert( `Error: ${errorMessage} Tipo:${errorCode}`)
})
}

// traerDatos().then((doc) => {
//   if (doc.exists) {
//       console.log(doc.data());
//   } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//   }
// }).catch(function(error) {
//   console.log("Error getting document:", error);
// });


export const signInGoogleEvent = () => {
  signInGoogle().then(( result ) => {

    console.log(result)
    collectionUser(nameUser,email,uidUser)
  })
}
export const signInEventfacebook = () => {
  signInFacebook()
}


 export const initFirebaseAuth = () => {
  firebase.auth().onAuthStateChanged(authStateObserver);
 }

 const authStateObserver = (user) => {
    if (user) {
     const nameUser = user.displayName;
    const email = user.email;
    const uidUser = user.uid;
    
     
   console.log('estas activo')

     } else {
    console.log('no estas activo')
      }
 
//     //  traerDatos(uidUser)
    // console.log(traerDatos(uidUser))
   
//  return uidUser
    }
  
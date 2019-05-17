

import {login , signInGoogle} from "../lib/firebase.js"
import {changeView} from "../controller/router.js"


export const signInEvent = (e) => {
    event.preventDefault()
    const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  login (email, password)
  .then(() => {
    console.log("iniciaste sesion")
        changeView('#wall')
        console.log("estoy en el muro")
})
.catch(error => {
  const errorCode = error.code;
  const  errorMessage = error.message;
  alert( `Error: ${errorMessage} Tipo:${errorCode}`)
})
}
export const signInGoogleEvent= () => {
  signInGoogle().then(()=>{
    console.log("hola")
  })
}

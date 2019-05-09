

import {login , signInGoogle} from "../lib/firebase.js"

export const signInEvent = () => {
    console.log("funcionfirebase")
    const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  login (email, password);
}

export const signInGoogleEvent= () => {
  signInGoogle();
}
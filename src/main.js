// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
import login from "./view/login.js"
const firebaseConfig = {
    apiKey: "AIzaSyD02ESzA9rDd24SJ-t1tAcXUoNUxzvb25w",
    authDomain: "red-social-1-5f149.firebaseapp.com",
    databaseURL: "https://red-social-1-5f149.firebaseio.com",
    projectId: "red-social-1-5f149",
    storageBucket: "red-social-1-5f149.appspot.com",
    messagingSenderId: "1068545058984",
    appId: "1:1068545058984:web:b895bfb9343ac9e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// const init = () => {
//     window.addEventListener('hashchange',()=> {
//         console.log(window.location.hash)
//     } )}

const element = document.getElementById('root');

    const firstPage = login();
    console.log(firstPage)
    element.appendChild(firstPage)

// window.addEventListener('load',init)
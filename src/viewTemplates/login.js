
import {signInEvent, signInGoogleEvent} from "../controllerView/controllerVistaLogin.js"

export default () => {
     const formElement = document.createElement('form');
     const formSignIn = `
    <form>
     <input id ="email" type="email" placeholder="email"/>
     <input id ="password" type="password" placeholder="contraseña"/>
     <button id = "btn-signIn"type = "button" > Log In </button>
     <img id ="signIn-google" src="img/google.png">

     <p>Si no tienes una cuenta <a href="#register">Regístrate Aquí</a>
    
    </form>`;
/* <p>Si no tiens una cuenta <a href='#/register'>Regístrate  aquí</a></p> */
    
    formElement.innerHTML= formSignIn;
     // return formElement;


     const botonSignIn = formElement.querySelector('#btn-signIn');
  botonSignIn.addEventListener('click', signInEvent );

  const botonGoogle = formElement.querySelector('#signIn-google');
  botonGoogle.addEventListener('click',signInGoogleEvent);
 return formElement;
}
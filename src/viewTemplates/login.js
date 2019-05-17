
import {signInEvent, signInGoogleEvent} from "../controllerView/controllerVistaLogin.js"

export default () => {
     const formElement = document.createElement('form');
     const formSignIn = `
    <form >

    <input id ="email" type="email" placeholder="email" class ="input-login"/>
     <input id ="password" type="password" placeholder="&#128272; contraseña" class ="input-login"/>
     <button id = "btn-signIn" type = "button" class="btn-login" > Log In </button>
     <p> Accede por </p>
     <img id ="signIn-google" class="img-google" alt="imagen de google" height="30" width="36"src="img/google.png">

     <p>O bien ingresa con .. <a href="#register">Regístrate Aquí</a>
    
    </form>`;

    
    formElement.innerHTML= formSignIn;
    


     const botonSignIn = formElement.querySelector('#btn-signIn');
  botonSignIn.addEventListener('click', signInEvent );

  const botonGoogle = formElement.querySelector('#signIn-google');
  botonGoogle.addEventListener('click',signInGoogleEvent);

  
 return formElement;
}
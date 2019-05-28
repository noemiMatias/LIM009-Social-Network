
import { signInEvent, signInGoogleEvent, signInEventfacebook, initFirebaseAuth } from "../controllerView/controllerVistaLogin.js"

export default () => {
  const sectionElement = document.createElement('section');
  const divSignIn = `<div class=""img">
    <figure>
    <img class="img-logo" src="img/logopc.png" alt="imagen de computadora"> 
    </figure>
    </div>
    <div class="form">
    <form>
     <input id ="email" type="email" placeholder="email" class ="input-login"/>
     <input id ="password" type="password" placeholder="&#128272; contraseña" class ="input-login"/>
     <button id = "btn-signIn" type = "button" class="btn-login" > Log In </button>
     <p> Accede por </p>
     <img id ="signIn-google" class="img-google" alt="imagen de google" height="30" width="36"src="img/google.png">
     <button id = "facebook" type ="button"> facebook </button>

     <p>O bien ingresa con .. <a href="#register">Regístrate Aquí</a>
  
     
    </form>
    </div>`
    ;


  sectionElement.innerHTML = divSignIn;


  sectionElement.classList.add('login-box');
  const botonSignIn = sectionElement.querySelector('#btn-signIn');
  botonSignIn.addEventListener('click', signInEvent);

  const botonGoogle = sectionElement.querySelector('#signIn-google');
  botonGoogle.addEventListener('click', signInGoogleEvent);

  const botonfacebook = sectionElement.querySelector("#facebook");
  botonfacebook.addEventListener('click', signInEventfacebook);

   initFirebaseAuth();
  return sectionElement;
}
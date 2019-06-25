
import { signInEvent, signInGoogleEvent, signInEventfacebook, initFirebaseAuth } from "../controllerView/controllerVistaLogin.js"

export default () => {
  const sectionElement = document.createElement('section');
  const divSignIn = `<div>
    <figure>
    <img class="img-logo" src="img/logo.png" alt="imagen de computadora"> 
    <h1 class="tittle">ECO TIPS</h1>

    </figure>
    </div>
    <div class="form-input">
    <form>
    <h2 class="Bienvenida"> Bienvenid@</h2>
     <input id="email" type="email" placeholder="email" class ="input-login"/>
     <input id="password" type="password" placeholder="&#128272; contraseña" class ="input-login"/>
     <button id="btn-signIn" type ="button" class="btn-login" > Sign In </button>
     <p> Accede por </p>
     
     <img id ="signIn-google" class="img-google" alt="imagen de google" height="30" width="36"src="img/google.png">
     <img id = "facebook" class="facebook" height="30" width="36" src="img/facebook.png">

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

   
  return sectionElement;
}
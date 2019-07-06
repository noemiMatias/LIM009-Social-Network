
import { signInEvent, signInGoogleEvent, signInEventfacebook } from "../controllerView/controllerVistaLogin.js"

export default () => {
  const sectionElement = document.createElement('section');
  const divSignIn = `<div class="box-img">
    <figure>
    <img class="img-logo" src="img/logo.png" alt="imagen pesonas cuidando el medio ambiente"> 
    <h1 class="tittle"> Always Green</h1>
    </figure>
    </div>
    <div class="form-input">
    <form>
    <h2 class="Bienvenida"> Bienvenid@</h2>
     <input id="email" type="email" placeholder="email" class ="input-login"/>
     <input id="password" type="password" placeholder="&#128272; password" class="input-login"/>
     <button id="btn-signIn" type ="button" class="btn-login"> Log in </button>
     <p id="messageError"></p>
     <p class="text-login"> O bien ingresa con .. </p>
     <figure class="img-go-fb">
     <img id ="signIn-google" class="img-google" alt="imagen de google" height="30" width="36"src="img/google.png">
     <img id = "facebook" class="facebook"alt="imagen de facebook" height="30" width="36" src="img/facebook.png">
    </figure>
     <p>¿No tienes una cuenta? .. <a href="#register">Regístrate Aquí</a>
  
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
import { registerEvent } from "../controllerView/controllerVistaRegister.js"

export default () => {
    const formRegister = document.createElement('form');
    const register = `
    <img class="img-logo reg" src="img/logo.png" alt="imagen pesonas cuidando el medio ambiente">
    
    <h1 class="">Regístrate</h1>
    
    <input type="text" id="name-user" class="input-login" placeholder= "Nombre de usuario"/>
    
     <input id ="email-register" type="email" placeholder="Email" class ="input-login"/>

     <input id ="password-register" type="password" placeholder="password" class ="input-login"/>
     
     <button  id="btn-register" type = "button"class="btn-login"> Registrarse </button>
     <p>¿Ya estas registrado ?<a href="#/login">Inicia sesión.</a></p>
    `;

    formRegister.innerHTML = register;
    formRegister.classList.add('formRegister');
    const btnRegister = formRegister.querySelector('#btn-register');
    btnRegister.addEventListener('click', registerEvent);


    return formRegister;

}

import { registerEvent } from "../controllerView/controllerVistaRegister.js"

export default() => {
    const formRegister = document.createElement('form');
    const register = `
    <img id ="logo" class="img-logo" alt="imagen ideas accion ambiental" src="img/logo.png">
     <input id ="email-register" type="email" placeholder="email" class ="input-login"/>
     <input id ="password-register" type="password" placeholder="contraseña" class ="input-login"/>
     <button  id="btn-register" type = "button"class="btn-login" > Registrarse </button>
    `;
    
    formRegister.innerHTML= register;

    const btnRegister = formRegister.querySelector('#btn-register');
     btnRegister.addEventListener('click', registerEvent) ;
    


    return formRegister;
      
}
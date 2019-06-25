import { registerEvent } from "../controllerView/controllerVistaRegister.js"

export default () => {
    const formRegister = document.createElement('form');
    const register = `

    <label for="name-user">Escribe tu nombre de usuario </label>
    <input type="text" id="name-user" class="input-login">
    
     <input id ="email-register" type="email" placeholder="email" class ="input-login"/>

     <input id ="password-register" type="password" placeholder="contraseña" class ="input-login"/>
     
     <button  id="btn-register" type = "button"class="btn-login"> Registrarse </button>
    `;

    formRegister.innerHTML = register;
    formRegister.classList.add('formRegister');
    const btnRegister = formRegister.querySelector('#btn-register');
    btnRegister.addEventListener('click', registerEvent);


    return formRegister;

}
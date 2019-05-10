
import { registerEvent } from "../controllerView/controllerVistaRegister.js"

export default() => {
    const formRegister = document.createElement('form');
    const register = `
    
     <input id ="email-register" type="email" placeholder="email"/>
     <input id ="password-register" type="password" placeholder="contraseña"/>
     <button  id="btn-register" type = "button" > Registrarse </button>
    `;
    
    formRegister.innerHTML= register;

    const btnRegister = formRegister.querySelector('#btn-register');
     btnRegister.addEventListener('click', registerEvent) ;
    


    return formRegister;
      
}
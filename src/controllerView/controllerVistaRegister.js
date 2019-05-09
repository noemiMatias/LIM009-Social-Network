
import { register } from "../lib/firebase.js"


export const registerEvent = () =>{
         const emailRegister = document.querySelector('#email-register').value;
        const passwordRegister = document.querySelector('#password-register').value;
        console.log(emailRegister)
       register(emailRegister, passwordRegister);
}
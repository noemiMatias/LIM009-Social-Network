
import { register } from "../lib/firebase.js";
import { collectionUser } from "../lib/firestore.js";
import { changeHash } from "./controllerVistaLogin.js";
import {firtsMessageError} from "./controllerVistaLogin.js"

export const registerEvent = () => {
    const emailRegister = document.querySelector('#email-register').value;
    const passwordRegister = document.querySelector('#password-register').value;
    const nameUser = document.querySelector('#name-user').value;

    register(emailRegister, passwordRegister)
        .then((response) => {
            const userObject = {
                name: nameUser,
                email: emailRegister,
                uidUser: response.user.uid,
                photoUser: 'img/usuario.png'
            }
           
            collectionUser(userObject).then(()=>{
               changeHash('wall')
            })
                .catch(error => {
                   firtsMessageError(error)

                })

        })
}






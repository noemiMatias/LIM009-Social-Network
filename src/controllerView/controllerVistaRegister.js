
import { register } from "../lib/firebase.js";
import { collectionUser } from "../lib/firestore.js";
import { changeView } from "../controller/router.js";


export const registerEvent = () => {
    const emailRegister = document.querySelector('#email-register').value;
    const passwordRegister = document.querySelector('#password-register').value;
    const nameUser = document.querySelector('#name-user').value;

    register(emailRegister, passwordRegister)
        .then((response) => {
            // console.log(response)
            const userObject = {
                name: nameUser,
                email:  emailRegister,
                uidUser: response.user.uid,
                photoUser: 'img/usuario.png'
            }
            // const nameUs = response.user.displayName;
            changeView('#wall', userObject)
            collectionUser(userObject)
            console.log('esty en el muro')
                .catch(error => {
                    console.error(error);

                })

        })
}


  



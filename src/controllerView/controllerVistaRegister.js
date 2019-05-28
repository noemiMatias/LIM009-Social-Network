
import { register } from "../lib/firebase.js";
import { collectionUser,traerDatos} from "../lib/firestore.js";
import { changeView } from "../controller/router.js";


 export const registerEvent = () => {
    const emailRegister = document.querySelector('#email-register').value;
    const passwordRegister = document.querySelector('#password-register').value;
    const nameUser = document.querySelector('#name-user').value;

    register(emailRegister, passwordRegister)
        .then((response) => {
            // const nameUs = response.user.displayName;
            const email = response.user.email;
            const uidUser = response.user.uid;
           
            collectionUser(uidUser,nameUser,email).then(()=>{
console.log('se hizo collection')
            })
             

            changeView('#wall')
            console.log('esty en el muro')
                .catch(error => {
                    console.error(error);

                })

        })
}


    //  const photoUser = response.user.photoURL;
        // if (photoUser) {
        //     photoUser === null './image/icono-login-user.png' 

        // } else {

        // }


        // { const uid = response.uid
        //     if response.photo =
        //     else



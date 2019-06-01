// deberia importar funcion firestore.colecction
import { collectionPost } from "../lib/firestore.js";
import { signOut, currentUser } from "../lib/firebase.js"
import { changeView } from "../controller/router.js";

//crear mi funcion currentuser
export const signOutEvent = () => {
  signOut();
  changeView('')
}


export const showPostEvent = () => {
  // event.preventDefault()
  const textpost = document.querySelector('#post').value;
  const user = currentUser()


  const objPost = {
    textpost: textpost,
    uidUser: user.uid,
    privacidad: 'privado',
    correo: user.email
  }
  // console.log(objPost)
  collectionPost(objPost)
  document.querySelector('#post').value = '';
}
export const updateEvent = () => {

}
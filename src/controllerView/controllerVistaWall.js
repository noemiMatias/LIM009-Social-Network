// deberia importar funcion firestore.colecction
import { collectionPost, upDate } from "../lib/firestore.js";
import { signOut, currentUser } from "../lib/firebase.js"
import { changeView } from "../controller/router.js";

//crear mi funcion currentuser
export const signOutEvent = () => {
  signOut();
  changeView('')
}


export const showPostEvent = (obj) => {
  // event.preventDefault()
   const textpost = document.querySelector('#post').value;
  const select = document.querySelector('#select-privacity').value
  const user = currentUser()

  const objPost = {
    textpost: textpost,
    uidUser: user.uid,
    privacidad:select,
    correo: user.email,
    name :user.displayName,
    photoUser:user.photoURL,
    fecha: new Date()
    
  }
   console.log(objPost)
  collectionPost(objPost)
  document.querySelector('#post').value = '';
}
export const updateEvent = (textoPost,id) => {
 const obj={
   textpost:textoPost,
   
 }

upDate(obj,id)
}
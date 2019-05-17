// deberia importar funcion firebase.colecction
 import {createPost} from "../lib/firebase.js"
 
export const wallEvent = () =>{
    const textPost = document.querySelector('#post').value;
   console.log(textPost)
   createPost({
       content: textPost,
       uid: firebase.auth().currentUser.uid
   })
//deberia ir funcion firestore.collection y se guardara en firebase
// Add a new document with a generated id.

 }
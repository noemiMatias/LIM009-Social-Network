// deberia importar funcion firestore.colecction
 import {collectionPost} from "../lib/firestore.js"
 
 
export const showPostEvent = (e) =>{
    event.preventDefault()
    const post = document.querySelector('#post').value;
    collectionPost(post)
   
    

    
 }
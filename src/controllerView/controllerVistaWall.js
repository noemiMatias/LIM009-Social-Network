// deberia importar funcion firestore.colecction
 import {collectionPost} from "../lib/firestore.js"
 
 
export const showPostEvent = (e) =>{
    event.preventDefault()
    const post = document.querySelector('#post').value;
    collectionPost(post)
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        // const uid = docRef.parent.firestore._firestoreClient.credentials.currentUser.uid;
  
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
} 
   
    

    
 
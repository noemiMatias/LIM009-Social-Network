import { changeView } from "../controller/router.js"
const db = firebase.firestore();
// funcion firestore para obtener foto, correo y nombre de usuario
export const collectionUser = (user) => {
  db.collection("user").doc(`${user.uidUser}`).set(user)
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});



}

// leer datos y traer de usuarios
export const traerDatos = () => {
  return db.collection("user").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  });
}
export const leerDatos = (user) => {
  const docRef = db.collection("user").doc(`${user.uid}`);

  docRef.get().then(function (doc) {
    if (doc.exists) {

      changeView('#wall', doc.data())
      console.log(doc.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}



export const collectionPost = (post) => {
  firebase.firestore().collection("post").add({
    textPost: post,
    
    
  })
  
}
 
export const readPost = () => {
    const containerPost = document.querySelector('#')
    return firebase.firestore().collection("notes").onSnapshot((querySnapshot) => {
       containerPost.innerHTML = ''; 
      querySnapshot.forEach((doc) => {
        /* console.log(doc.id, " => ", doc.data()); */
        containerPost.innerHTML += `<form id='formPost' class= "form">
      <textarea  class=estilotextarea  name="texto" spellcheck="true">${doc.data().post}</textarea>
      <button id=${doc.id}  type= 'button' class= 'form_button'>Eliminar</button>
      <button type= 'button' class= 'form_button'>Editar</button>
      </form>
      `
        containerPost.addEventListener('click', (e) => {
          
        })
  
      })
    })
  }

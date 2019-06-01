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



export const collectionPost = (objeto) => {
  // currentUser(objeto)
   return db.collection("post").add(objeto)
   
  
}


 export const readData = (callbackTemplate) => {
  return firebase.firestore().collection("post").onSnapshot(callbackTemplate)
}



export const deleteData = (id) => {

 firebase.firestore().collection("post").doc(id).delete()
   .then(function () {
      console.log("BORRADocument successfully deleted!"); 
   })
   .catch(function (error) {
     console.error("Error removing document: ", error);
   });
} 

export const upDate = () => {
  const washingtonRef = db.collection("post").doc(id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
    objPost
  }
  )
  .then(function() {
      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
}




// funcion firestore para obtener foto, correo y nombre de usuario
export const collectionUser = (user) => {
  const db =firebase.firestore()
 return db.collection("user").doc(`${user.uidUser}`).set(user)
    // .then(function () {
    //   console.log("Document successfully written!");
    // })
    // .catch(function (error) {
    //   console.error("Error writing document: ", error);
    // });



}


export const leerDatos = (user) => {
  const db = firebase.firestore()
  const docRef = db.collection("user").doc(user.uid);

  return docRef.get()
    .then(function (doc) {
      return doc.data()
    })
}



export const collectionPost = (objeto) => {
  
  const db = firebase.firestore();
  
  return db.collection("post").add(objeto)
    // .then((doc) => {
    //   console.log(doc)
    // })
    // .catch((err) => {
    //   console.error(err)
    // })


}


export const readData = (callbackTemplate) => {
  return firebase.firestore().collection('post')
  .orderBy("fecha","desc")
  .onSnapshot(callbackTemplate)
  

}



export const deleteData = (id) => {

   return firebase.firestore().collection("post").doc(id).delete()
    // .then(function () {
    //   console.log("BORRADocument successfully deleted!");
    // })
    // .catch(function (error) {
    //   console.error("Error removing document: ", error);
    // });
}


 export const upDate = (id, data) => {
   const db = firebase.firestore();
  const washingtonRef = db.collection("post").doc(id);
  // Set the "capital" field of the city 'DC'
  return washingtonRef.update(data)
    // .then(function () {
    //   console.log("Document successfully updated!");
    // })
    // .catch(function (error) {
    //   // The document probably doesn't exist.
    //   console.error("Error updating document: ", error);
    // });
}

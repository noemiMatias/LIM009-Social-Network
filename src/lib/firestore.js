
const db = firebase.firestore();
// funcion firestore para obtener foto, correo y nombre de usuario
export const collectionUser = (uid,name,email) => {
  return db.collection("user").doc(uid).set({
    uid:uid,
    name:name,// sale displayname null xq?
     email:email,
    
    // photoUser: user.photoURL
    //  photo:photoUser
    //aca podria haber usado el currentuser
  })
}
// leer datos y traer de usuarios
export const traerDatos = () => {
  return db.collection("user").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

//   const docRef = db.collection("user").doc(`${uid}`);
//   return docRef.get()
//  .then((doc) => {
//     if (doc.exists) {
//         console.log(doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         // console.log("No such document!");
//     }
// }).catch(function (error) {
//     console.log("Error getting document:", error);
// });
 
  
}
// export const currentUser = () =>{
//  const user = firebase.auth().currentUser;
//  const name, email, photoUrl, uid, emailVerified;
// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//  photoUrl = user.photoURL;
//  emailVerified = user.emailVerified;
//  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
// //                    // this value to authenticate with your backend server, if
// //                    // you have one. Use User.getToken() instead.
//  }
// // }
// // funcion para crear post
export const collectionPost = (post) => {
  firebase.firestore().collection("post").add({
    textPost: post
    // likelike,
    // privacity:privacity,
    // uidPost:uidPost
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

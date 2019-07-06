import { login, signInGoogle, signInFacebook } from "../lib/firebase.js";
import { collectionUser } from "../lib/firestore.js";


 export const changeHash = (hash) => {
  location.hash = hash;
}

 export const firtsMessageError = (error) => {
  const messageError = document.querySelector('#messageError')
  messageError.innerHTML = error.message;
}

export const signInEvent = (e) => {
  event.preventDefault()
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  login(email, password)
    .then(() => {
      changeHash('#wall')
    })
    .catch(error => {
      firtsMessageError(error)
    })
}




export const signInGoogleEvent = () => {
  signInGoogle().then((response) => {
    const userObject = {
      name: response.user.displayName,
      email: response.user.email,
      uidUser: response.user.uid,
      photoUser: response.user.photoURL

    }
    collectionUser(userObject).then(() => {
      changeHash('#wall');
    })


  })
  
  .catch(error => {
    firtsMessageError(error)
  })
}

export const signInEventfacebook = () => {
  signInFacebook().then((response) => {
    console.log(response)
    const userObject = {
      name: response.user.displayName,
      email: response.user.email,
      uidUser: response.user.uid,
      photoUser: response.user.photoURL

    }
    collectionUser(userObject).then(() => {
      changeHash('#wall');
    })
  })
  .catch(error => {
    firstMessageError(error)
  })

}



export const initFirebaseAuth = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(user)

    } else {
      
    }
  });
}


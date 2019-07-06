

import { initRouter } from "./controller/router.js"




const init = () =>{

    const firebaseConfig = {
        apiKey: "AIzaSyBA0RSvroCJctftZYX4PslIpqJ4caZtNco",
        authDomain: "mi-pimeraredsocial.firebaseapp.com",
        databaseURL: "https://mi-pimeraredsocial.firebaseio.com",
        projectId: "mi-pimeraredsocial",
        storageBucket: "mi-pimeraredsocial.appspot.com",
        messagingSenderId: "797512164640",
        appId: "1:797512164640:web:58ea75e79ef07fee"
      };
      firebase.initializeApp(firebaseConfig);
      initRouter()
}

window.onload = init();


// export const init = () => {

//     changeView(window.location.hash)
//     window.addEventListener('hashchange', () => {
//         changeView(window.location.hash)

//         console.log("cAMBIO DE HASH")
//     })
//     console.log('holi ya inicie')

// }

// window.addEventListener('load', init)











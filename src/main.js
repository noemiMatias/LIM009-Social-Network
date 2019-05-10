

//  import register  from "./viewTemplates/register.js"
 import {changeView} from "./controller/router.js"

 const init = ()=>{
   
    changeView(window.location.hash)
    window.addEventListener('hashchange',() => {
       changeView(window.location.hash)
        // root.appendChild(changeView(window.location.hash))
        console.log("cAMBIO DE HASH")
    })
    console.log('holi ya inicie')
    // root.appendChild(changeView(window.location.hash))
 }
 window.addEventListener('load',init)








// import login from "./viewTemplates/login.js";
// const divElement = document.getElementById('root');

//     const firstPage = login();
//     //console.log(firstPage)
//     divElement.appendChild(firstPage)

// // window.addEventListener('load',init)
// //  const divforRegister = document.getElementById("container");
//   // const secondPage = register();
//  //console.log(secondPage);
// //  divElement.appendChild(secondPage)


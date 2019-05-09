
import login from "./viewTemplates/login.js";
 import register  from "./viewTemplates/register.js"


const divElement = document.getElementById('root');

    const firstPage = login();
    //console.log(firstPage)
    divElement.appendChild(firstPage)

// window.addEventListener('load',init)
//  const divforRegister = document.getElementById("container");
  // const secondPage = register();
 //console.log(secondPage);
//  divElement.appendChild(secondPage)

//  divElement.parentNode.insertBefore(divElement,divforRegister); 
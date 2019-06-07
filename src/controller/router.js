import {components} from "../viewTemplates/components.js"
import { initFirebaseAuth} from "../controllerView/controllerVistaLogin.js"
import {leerDatos} from "../lib/firestore.js"

export const changeView = (route) => {
    const root = document.getElementById('root');
    root.innerHTML='';
    console.log(route)
switch (route) {
   case '': 
   {return root.appendChild(components.login())
  };
 
  case '#register':
  { return root.appendChild(components.register())
   
  };
   case '#wall':{
     const funcionRecibeInfoDeUsuario = (user) => {
      leerDatos(user)
      .then((result)=>{
        root.appendChild(components.wall(result))

      })
     }
    initFirebaseAuth(funcionRecibeInfoDeUsuario)
    
    
  }; 
 
  default: { 
    }
      break;
 }
   
}

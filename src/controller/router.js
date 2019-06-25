import {components} from "../viewTemplates/components.js"
import { initFirebaseAuth} from "../controllerView/controllerVistaLogin.js"
import {leerDatos} from "../lib/firestore.js"

export const changeView = (route) => {
    const root = document.getElementById('root');
    root.innerHTML='';
    console.log(route)
switch (route) {
   case '': 
   case '#':
   case '#/':
  case '#login':
    root.appendChild(components.login());
  break;
 
  case '#register':
   root.appendChild(components.register());
  break;

   case '#wall':{
     const funcionRecibeInfoDeUsuario = (usuario) => {
       console.log(usuario)
      leerDatos(usuario)
      .then((result)=>{
        console.log(result);
        root.appendChild(components.wall(result))

      })
     }
    initFirebaseAuth(funcionRecibeInfoDeUsuario) 
  
  }; 
  break;
 
  default: 
     root.appendChild(components.login());
      break;
}
};

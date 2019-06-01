import {components} from "../viewTemplates/components.js"
import { initFirebaseAuth} from "../controllerView/controllerVistaLogin.js"


export const changeView = (route,obj) => {
    const root = document.getElementById('root');
    root.innerHTML='';
    console.log(route)
switch (route) {
   case '': 
   initFirebaseAuth();
   {return root.appendChild(components.login())
  };
 
  case '#register':
  { return root.appendChild(components.register())
   
  };
   case '#wall':{
    root.appendChild(components.wall(obj))
  }; 
 
  default: { 
    }
      break;
 }
   
}

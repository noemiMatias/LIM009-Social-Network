import {components} from "../viewTemplates/components.js"

export const changeView = (route) => {
    const root = document.getElementById('root');
    root.innerHTML='';
    console.log(route)
switch (route) {
   case '': 
   {return root.appendChild(components.login())};
   
  case '#register':
  { return root.appendChild(components.register())};
     
        

  default: { 
    }
      break;
 }
   
}

import {components} from "../viewTemplates/components.js"

export const changeView = (route) => {
    const root = document.getElementById('root');
    root.innerHTML='';
switch (route) {
   case '': {
       return components.login();
    }
        
      break;

  default: { return components.register()}
      break;
 }
    console.log(route)
}

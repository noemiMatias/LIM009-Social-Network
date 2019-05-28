import {components} from "../viewTemplates/components.js"


export const changeView = (route,obj) => {
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
    root.appendChild(components.wall(obj))
  }; 
 
  default: { 
    }
      break;
 }
   
}

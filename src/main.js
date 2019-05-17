

 import {changeView} from "./controller/router.js"

 const init = ()=>{
   
    changeView(window.location.hash)
    window.addEventListener('hashchange',() => {
       changeView(window.location.hash)
       
        console.log("cAMBIO DE HASH")
    })
    console.log('holi ya inicie')
    
 }
 window.addEventListener('load',init)











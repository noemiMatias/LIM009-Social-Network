import {wallEvent} from "../controllerView/controllerVistaWall.js"

export default() => {
    const sectionWall = document.createElement('section');
    const  postContent = `<form>
     <input id ="post" type="texto" placeholder = "¿Que quieres compartir?" class ="input-post"/>
     <button  id="btn-post" type = "button" class="btn-post" > Enviar </button>
     </form>
    `;
    
    sectionWall.innerHTML= postContent;

    const btnEnviar = sectionWall.querySelector('#btn-post');
     btnEnviar.addEventListener('click',wallEvent) ;
    


    return sectionWall;
      
}
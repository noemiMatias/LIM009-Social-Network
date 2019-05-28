import {showPostEvent} from "../controllerView/controllerVistaWall.js";
import {traerDatos} from"../lib/firestore.js"
import { signOut } from "../lib/firebase.js";
// import { changeView } from "../controller/router.js";

export default() => {
    const sectionWall = document.createElement('section');
    // aqui creare el cuadrado dque contenga la foto y
    const  postContent = `
    <form>
     <input id ="post" type="texto" placeholder = "¿Que quieres compartir?" class ="input-post"/>
     <select>
       <option value="privado">Privado</option>
       <option value="publico">Publico</option>
     </select>
     <button  id="btn-post" type = "button" class="btn-post" > comentar </button>
     <div id="pintar-comentario"</div>
     <button type="button" id="btn-cerrar-sesion"> Cerrar Sesion </button>
     </form>
    `;
    
    sectionWall.innerHTML= postContent;

    const btnComentar = sectionWall.querySelector('#btn-post');
     btnComentar.addEventListener('click',showPostEvent) ;
    // const pintarComentario = sectionWall.querySelector('#pintar-comentario');
    // leerDatos()

     const userProfile = sectionWall.querySelector("user-Profile")
     userProfile.innerHTML='';
     userProfile.innerHTML= `<div id=user-profile> <img height="70" width="60"  src="img/usuario.png"</div> 
     `
    // const cerrarSesion = sectionWall.querySelector('#btn-cerrar-sesion');
    // cerrarSesion.addEventListener('click', signOut()
   



    return sectionWall;
      
}
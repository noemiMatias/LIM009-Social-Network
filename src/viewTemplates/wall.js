import {showPostEvent} from "../controllerView/controllerVistaWall.js";


// import { changeView } from "../controller/router.js";
// let obj = leerDatos(response.user)
export default(obj) => {

    const sectionWall = document.createElement('section');
    // aqui creare el cuadrado dque contenga la foto y
    const  postContent = ` <div class="profileUser">
    <p>${obj.name}</p>
    <p>${obj.email}</p>
    </div>
    <figure>
    <img class="img-userDefault" src=" ${obj.photoUser}">
    </figure>
    
    <form>
     <textarea id ="post" name="texto" placeholder = "¿Que quieres compartir?" class ="texto-post"></textarea>
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
  



    return sectionWall;
      
}
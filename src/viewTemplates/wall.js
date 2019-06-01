import { showPostEvent, signOutEvent } from "../controllerView/controllerVistaWall.js";
import { readData,deleteData } from "../lib/firestore.js";



// let obj = leerDatos(response.user)
export default (obj) => {

  const sectionWall = document.createElement('section');
  const postContent = ` <div class="profileUser">
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
     <div id="containerPost"</div>
     <button type="button" id="btn-singOut"> Cerrar Sesion </button>
     </form>
     
    `;

  sectionWall.innerHTML = postContent;
  const btnComentar = sectionWall.querySelector('#btn-post');
  btnComentar.addEventListener('click', showPostEvent);
  const cerrarSesion = sectionWall.querySelector('#btn-singOut');
  cerrarSesion.addEventListener('click', signOutEvent)
  // " => ", doc.data()
  readData((querySnapshot) => {
    const containerPost = document.querySelector('#containerPost')
    containerPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
       console.log(doc.id,doc.textpost);
      containerPost.innerHTML += `
        <form id='formPost' class= "form">
        <textarea class=estilotextarea  name="texto" spellcheck="true">${doc.data().textpost}</textarea>
        <button type='button' class="form_button delete" data-id="${doc.id}">Eliminar</button>
        <button type='button' class= 'form_button update" data-id="${doc.id}" >Editar</button>
        </form>
      `
    })
    document.querySelectorAll('.delete').forEach(btn =>
      btn.addEventListener('click', (e) => {
        console.log();
        deleteData(e.target.dataset.id)
      })
    )
  })

  return sectionWall;
}

   


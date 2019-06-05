
import { showPostEvent, signOutEvent, updateEvent } from "../controllerView/controllerVistaWall.js";
import { readData, deleteData} from "../lib/firestore.js";

// let obj = leerDatos(response.user)
export default (obj) => {

  const sectionWall = document.createElement('section');
  const postContent = ` <header class="header">${obj.name} <button type="button" id="btn-singOut"> Cerrar Sesion </button></header>
  <div class="profileUser">
    <p>${obj.name}</p>
    <p>${obj.email}</p>
    <figure>
    <img class="img-userDefault" src=" ${obj.photoUser}">
    </figure>
  </div>
  
    <form class ="muro">
     <textarea class="estilotextarea" id ="post" name="texto" placeholder = "¿Que quieres compartir?" class ="texto-post"></textarea>
     <select>
       <option value="privado">Privado</option>
       <option value="publico">Publico</option>
     </select>
     <button  id="btn-post" type = "button" class="btn-post" > comentar </button>
     </form>
     
     <div id="containerPost"></div>
    
     
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
      console.log(doc.id, doc.data());
      containerPost.innerHTML += `
        <form id='formPost' class= "form">
        <textarea class="estilotextarea"  name="texto"  data-id="${doc.id}" disabled spellcheck="true">${doc.data().textpost}</textarea>
        
        ${obj.uidUser=== doc.data().uidUser ? `<button type='button'name="btn" class="form_button delete" data-id="${doc.id}">Eliminar</button>
        <button type='button' class= "form_button update" data-id="${doc.id}" >Editar</button>` : ""}
        </form>`
      
    })
    
    document.querySelectorAll('.delete').forEach(btn =>
      btn.addEventListener('click', (e) => {

        deleteData(e.target.dataset.id)
      })
    )
    document.querySelectorAll('.update').forEach(btn =>
      btn.addEventListener('click', (e) => {     
        
            console.log(e.target, btn)
            
     const textarea = e.target.closest('form').querySelector('textarea')
          
            if (e.target.textContent === "Editar") {
              textarea.disabled = false;
              e.target.textContent = "Guardar"
            } else {
              updateEvent (textarea.value, textarea.dataset.id)
              textarea.disabled = true;
              e.target.textContent = "Editar"
            }

  })
  
    )
  
    })

    return sectionWall;
  }

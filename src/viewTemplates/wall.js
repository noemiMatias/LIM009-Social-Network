
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
     <select id="select-privacity">
     <option value="estado">Estado</option>
       <option value="privado">Privado</option>
       <option value="publico">Publico</option>
     </select>
     <button  id="btn-post" type = "button" class="btn-post" > comentar </button>
     </form>
     
     <div id="containerPost"></div>
    
     
    `;


  sectionWall.innerHTML = postContent;
  const btnComentar = sectionWall.querySelector('#btn-post');
  btnComentar.addEventListener('click',()=>{
    console.log(obj)
    showPostEvent(obj)

  });
  const cerrarSesion = sectionWall.querySelector('#btn-singOut');
  cerrarSesion.addEventListener('click', signOutEvent)
 
  // " => ", doc.data()
  readData((querySnapshot) => {
    const containerPost = document.querySelector('#containerPost')
    containerPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    if ((doc.data().privacidad === "privado" && doc.data().uidUser ===`${obj.uidUser}`) || (doc.data().privacidad === "publico")) {
        containerPost.innerHTML += `
        <form id='formPost' class= "form">
<p>${doc.data().name}</p>
<p>${doc.data().photoUser}</p>
        <textarea class="estilotextarea"  name="texto"  data-id="${doc.id}" disabled spellcheck="true">${doc.data().textpost}</textarea>

        ${obj.uidUser === doc.data().uidUser && doc.data().privacidad === "privado" ?` <select class="changeSelect" data-select="${doc.id}" >
      
        <option value="privado">Privado</option>
        <option value="publico">Publico</option>
      </select>`:``}
        ${obj.uidUser=== doc.data().uidUser ? `<button type='button'name="btn" class="form_button delete" data-id="${doc.id}">Eliminar</button>
        <button type='button' class= "form_button update" data-id="${doc.id}" >Editar</button>` : ""}
        </form>`
        
      }
      // ,doc.uidUser =!obj.uidUser
      
      
      })
    
     

    document.querySelectorAll('.delete').forEach(btn =>
      btn.addEventListener('click', (e) => {

        deleteData(e.target.dataset.id)
      })
    )
    
    
    
    document.querySelectorAll('.update').forEach(btn =>
      btn.addEventListener('click', (e) => { 
            
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
  export const toggleDisableTextarea = (textArea, select, postObject, btn) => {
    if (textArea.disabled && select.disabled) {
      btn.src = "../assets/save.png";
      textArea.disabled = false;
      select.disabled = false;
    } else {
      btn.src = "../assets/paper-plane.png";
      textArea.disabled = true;
      select.disabled = true;
      return updatePost(postObject.id, textArea.value, select.value)
    }
  }
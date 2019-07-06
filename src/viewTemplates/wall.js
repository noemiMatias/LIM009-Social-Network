

import { showPostEvent, updateEvent } from "../controllerView/controllerVistaWall.js";
import { readData, deleteData } from "../lib/firestore.js";

// let obj = leerDatos(response.user)
export default (obj) => {

  const sectionWall = document.createElement('section');
  const postContent = ` <header class="header"> 
  <nav class="navbar">
  <button id="menu" class="nav-boton"><i class="fas fa-bars"></i></button>
  <a href="#" class="inicio-nav desaparece">Inicio</a> 
  <a href="#" class="inicio-nav desaparece"> Cerrar Sesion </a>
  </nav>
  </header>
  <div class="box-post">
  <div class="info-user">
  <figure>
    <img class="img-userDefault" src=" ${obj.photoUser}">
    </figure>
    <p class="date-user name">${obj.name}</p>
    <p class="date-user">${obj.email}</p>
    </div>
    <div class="post">
    <form>
     <textarea class="txt-compartir" id ="post" name="texto" placeholder = "¿Que quieres compartir?" class ="texto-post"></textarea>
     <button  id="btn-post" type ="button" class="btn-post"><i class="far fa-share-square"></i>Compartir</button>
     <select id="state" class="form_button select">
     <option value="estado">¿Quien lo verá?</option>
       <option value="privado">Solo yo</option>
       <option value="publico">Mis amigos</option>
     </select>
     </form>
     </div>
     </div>
    
     <div id="containerPost"></div>

    `;


  sectionWall.innerHTML = postContent;
  const btnMenu = sectionWall.querySelector('#menu');
  btnMenu.addEventListener('click', () => {
    const ancla = sectionWall.getElementsByClassName('inicio-nav');
    for (let i = 0; i < ancla.length; i++) {
      ancla[i].classList.toggle('desaparece')

    }

  })
  const btnComentar = sectionWall.querySelector('#btn-post');
  btnComentar.addEventListener('click', () => {
    console.log(obj)
    showPostEvent(obj)

  });
  // const cerrarSesion = sectionWall.querySelector('#btn-singOut');
  // cerrarSesion.addEventListener('click', signOutEvent)

  // " => ", doc.data()
  readData((querySnapshot) => {
    const containerPost = document.querySelector('#containerPost')
    containerPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      if ((doc.data().state === "privado" && doc.data().uidUser === `${obj.uidUser}`) || (doc.data().state === "publico")) {
        console.log(doc.data())
        containerPost.innerHTML += `<div class="divPost">
        <form id='formPost'>

        <img  height="30" width="36"src=" ${doc.data().photoUser}">
         <p class="namePost">${doc.data().name}</p>
       
       <textarea class="estilotextarea"  name="texto"  data-id="${doc.id}" disabled spellcheck="true">${doc.data().textpost}</textarea>
       <button type="button" class="form_button"><i class="far fa-thumbs-up"></i> Me gusta</button>

        ${obj.uidUser === doc.data().uidUser ? ` <button class="form_button delete" data-id="${doc.id}"> <i class="far fa-trash-alt"></i> Eliminar</button>
        <button type="button" class= "form_button update" data-id="${doc.id}"> <i class="far fa-edit"></i>Editar</button>  
        <select  disabled data-select="${doc.id}>
               <option value="estado"> Estado </option>
                <option value="privado">Privado</option>
                <option value="publico">Publico</option>
              </select>` : ""}
        </form> 
        </div>`


      }

    })
    document.querySelectorAll('.delete').forEach(btn =>
      btn.addEventListener('click', (e) => {

        deleteData(e.target.dataset.id)
      })
    )

    document.querySelectorAll('.update').forEach(btn =>
      btn.addEventListener('click', (e) => {
        event.preventDefault();
        const textarea = e.target.closest('form').querySelector('textarea')
        const newSelect = e.target.closest('form').querySelector('select')

        if (e.target.innerHTML = ` <i class="far fa-edit"></i>Editar`) {
          textarea.disabled = false;
          newSelect.disabled = false;
          e.target.textContent = "guardar"
          return updateEvent(textarea.value, textarea.dataset.id, newSelect.value)

        } else {

          textarea.disabled = true;
          e.target.innerHTML = `<i class="far fa-edit"></i>Editar`

         
        }

      })
    )

  })

  return sectionWall;
}

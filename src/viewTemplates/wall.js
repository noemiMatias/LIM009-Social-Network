
// import { showPostEvent, signOutEvent, updateEvent } from "../controllerView/controllerVistaWall.js";
// import { readData, deleteData } from "../lib/firestore.js";

// // let obj = leerDatos(response.user)
// export default (obj) => {

//   const sectionWall = document.createElement('section');
//   const postContent = ` <header class="header">  <img class="img-inicio" src="img/logo.png" width:50px heigth:40px >
//   <button type="button" class="btn-singOut"id="btn-singOut"> Cerrar Sesion </button>

//   </header>
//   <div class="profileUser">
//     <p class="dates-user">${obj.name}</p>
//     <p class="dates-user">${obj.email}</p>
//     <figure>
//     <img class="img-userDefault" src=" ${obj.photoUser}">
//     </figure>
//   </div>
  
//     <form class ="muro">
//      <textarea class="estilotextarea" id ="post" name="texto" placeholder = "¿Que quieres compartir?" class ="texto-post"></textarea>
//      <select id="state">
//      <option value="estado">Estado</option>
//        <option value="privado">Privado</option>
//        <option value="publico">Publico</option>
//      </select>
//      <button  id="btn-post" type = "button" class="btn-post" > comentar </button>
//      </form>
     
//      <div id="containerPost"></div>
    
     
//     `;


//   sectionWall.innerHTML = postContent;
//   const btnComentar = sectionWall.querySelector('#btn-post');
//   btnComentar.addEventListener('click', () => {
//     console.log(obj)
//     showPostEvent(obj)

//   });
//   const cerrarSesion = sectionWall.querySelector('#btn-singOut');
//   cerrarSesion.addEventListener('click', signOutEvent)

//   // " => ", doc.data()
//   readData((querySnapshot) => {
//     const containerPost = document.querySelector('#containerPost')
//     containerPost.innerHTML = '';
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, doc.data());
//       if ((doc.data().state === "privado" && doc.data().uidUser === `${obj.uidUser}`) || (doc.data().state === "publico")) {
//         console.log(doc.data().state)
//         containerPost.innerHTML += `<div>
//         <form id='formPost' class= "form">
//        <p>${doc.data().name}</p>
//        <textarea class="estilotextarea"  name="texto"  data-id="${doc.id}" disabled spellcheck="true">${doc.data().textpost}</textarea>

//         ${obj.uidUser === doc.data().uidUser ? `<button type='button'name="btn" class="form_button delete" data-id="${doc.id}">Eliminar</button>
//         <button type='button' class= "form_button update" data-id="${doc.id}" >Editar</button> 
//         <select  disabled data-select="${doc.id}>
//                <option value="estado"></option>
//                 <option value="privado">Privado</option>
//                 <option value="publico">Publico</option>
//               </select>` : ""}
//         </form>`

//       }


//     })
//     document.querySelectorAll('.delete').forEach(btn =>
//       btn.addEventListener('click', (e) => {

//         deleteData(e.target.dataset.id)
//       })
//     )

//     document.querySelectorAll('.update').forEach(btn =>
//       btn.addEventListener('click', (e) => {
//         const textarea = e.target.closest('form').querySelector('textarea')
//         const newSelect = e.target.closest('form').querySelector('select')

//         if (e.target.textContent === "Editar") {
//           textarea.disabled = false;
//           newSelect.disabled = false;
//           e.target.textContent = "Guardar"


//         } else {

//           textarea.disabled = true;
//           e.target.textContent = "Editar"
//           return updateEvent(textarea.value, textarea.dataset.id, newSelect.value)
//         }

//       })
//     )

//   })

//   return sectionWall;
// }

import { showPostEvent, updateEvent } from "../controllerView/controllerVistaWall.js";
import { readData, deleteData} from "../lib/firestore.js";

// let obj = leerDatos(response.user)
export default (obj) => {

  const sectionWall = document.createElement('section');
  const postContent = ` <header class="header"> 
  <nav>
  <button id="menu" <i class="fas fa-align-justify  nav-boton"></i> </button>
  <a href="#" class="inicio-nav desaparece">Inicio</a> 
  <a href="#wall" class="inicio-nav desaparece"> Cerrar Sesion </a>
  </nav>
  </header>
    <div class="photoUser" >
    <figure>
    <img class="img-userDefault" src=" ${obj.photoUser}">
    </figure>
  </div>
  <div class="NameUser">
    <p class="dates-user">${obj.name}</p>
    <p class="dates-user">${obj.email}</p>
    </div>
  
    <form class ="muro">
     <textarea class="estilotextarea" id ="post" name="texto" placeholder = "¿Que quieres compartir?" class ="texto-post"></textarea>
     <select id="state">
     <option value="estado">Estado</option>
       <option value="privado">Privado</option>
       <option value="publico">Publico</option>
     </select>
     <button  id="btn-post" type = "button" class="btn-post" > comentar </button>
     </form>
     
     <div id="containerPost"></div>
    
     <footer> creado by noemi</footer>
    `;


  sectionWall.innerHTML = postContent;
  const btnMenu=sectionWall.querySelector('#menu');
  btnMenu.addEventListener('click',()=>{
    const ancla=sectionWall.getElementsByClassName('inicio-nav');
    for (let i= 0; i < ancla.length; i++) {
      ancla[i].classList.toggle('desaparece')
      
    }

  })
  const btnComentar = sectionWall.querySelector('#btn-post');
  btnComentar.addEventListener('click',()=>{
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
    if ((doc.data().state === "privado" && doc.data().uidUser ===`${obj.uidUser}`) || (doc.data().state === "publico")) {
        console.log(doc.data().state)
      containerPost.innerHTML += `<div>
        <form id='formPost' class= "form">
       <p>${doc.data().name}</p>
       <textarea class="estilotextarea"  name="texto"  data-id="${doc.id}" disabled spellcheck="true">${doc.data().textpost}</textarea>

        ${obj.uidUser=== doc.data().uidUser ? `<button type='button'name="btn" class="form_button delete" data-id="${doc.id}">Eliminar</button>
        <button type='button'   class= "form_button update" data-id="${doc.id}"> Editar </button> 
        <select  disabled data-select="${doc.id}>
               <option value="estado"> Estado </option>
                <option value="privado">Privado</option>
                <option value="publico">Publico</option>
              </select>` : ""}
        </form>`
        
        
      }




      
      })
    document.querySelectorAll('.delete').forEach(btn =>
      btn.addEventListener('click', (e) => {

        deleteData(e.target.dataset.id)
      })
    )
    
    document.querySelectorAll('.update').forEach(btn =>
      btn.addEventListener('click', (e) => {         
     const textarea = e.target.closest('form').querySelector('textarea')
    const newSelect = e.target.closest('form').querySelector('select') 
     
            if (e.target.textContent === "Editar") {
              textarea.disabled = false;
              newSelect.disabled=false;
              e.target.textContent = "Guardar"
            
  
            } else {
              
              textarea.disabled = true;
              e.target.textContent = "Editar"
            return  updateEvent (textarea.value, textarea.dataset.id,newSelect.value)
            }



  })
    )
  
    })

    return sectionWall;
  }

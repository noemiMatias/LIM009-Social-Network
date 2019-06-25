
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth
 
);

import { login,register, signInGoogle} from "../src/lib/firebase.js";

describe('login', () => {
  it('debería poder iniciar sesion', () => {
    return login('noemi@gmail.com','123456')
    .then((user)=>{
      expect(user.email).toBe('noemi@gmail.com');
    })
    
  });
});

describe('register', () => {
  it('debería registrar nuevo usuario', () => {
    return register('noemi@gmail.com','123456')
    .then((user)=> { 
      expect(user.email).toBe('noemi@gmail.com')  
    })    
  });
})

describe('signInGoogle', () => {
it('Debería iniciar sesion con gmail', () => {
  return signInGoogle()
    .then((user)=> {
      // console.log(user)
      expect(user.isAnonymous).toBe(false)  
    })    
  });
})
     
     

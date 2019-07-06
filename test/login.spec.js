
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth
 
);

import { login,register, signInGoogle,signInFacebook} from "../src/lib/firebase.js";

describe('login', () => {
  it('debería poder iniciar sesion', (done) => {
    return login('noemi@gmail.com','123456')
    .then((user)=>{
      expect(user.email).toBe('noemi@gmail.com');
      done()
    })
    
  });
});

describe('register', () => {
  it('debería registrar nuevo usuario', (done) => {
    return register('noemi@gmail.com','123456')
    .then((user)=> { 
      expect(user.email).toBe('noemi@gmail.com')
      done()  
    })    
  });
})

describe('signInGoogle', () => {
it('Debería iniciar sesion con gmail', (done) => {
  return signInGoogle()
    .then((user)=> {
      
      expect(user.isAnonymous).toBe(false)  
      done()
    })    
  });
})
describe('signInFacebook', () => {
  it('Debería iniciar sesion con facebook', (done) => {
    return signInFacebook()
      .then((user)=> {
        
         expect(user.isAnonymous).toBe(false)  
         done()
      })    
    });
  })
     


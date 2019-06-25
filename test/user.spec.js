import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
    __collection__: {
        user: {
            __doc__: {
                abc1d: {
                    email: 'lupita@gmail.com',
                    name: 'lupita',
                    photoUser: "/img/usuario.png",
                    uidUser: "abc1d"
                },
                abc123: {
                    email: 'lila1@gmail.com',
                    name: 'lila',
                    photoUser: "/img/usuario.png",
                    uidUser: "abc123"
                },
                abc234: {
                    email: 'noemi@gmail.com',
                    name: 'noemi',
                    photoUser: "/img/usuario.png",
                    uidUser: "abc234"
                },


            }
        },


    }

}

// {email: "lila3@hotmail.com", name: "lila3", photoUser: "img/usuario.png", uidUser: "T0GIG05GpBVGRHTNmgsqUhoS0Gn1"}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { collectionUser, leerDatos } from '../src/lib/firestore.js'


describe('collectionUser', () => {
    it('Deberia agregar una coleccion de usuarios', (done) => {
        const user2 = {
            name: 'noemi',
            email: 'noemi55@gmail.com',
            uidUser: 'abc789',
           photoUser: 'img/usuario.png'
        }
        
         collectionUser(user2)
            .then(() => {
             return firebase.firestore().collection("user").doc("abc789")
              .get()
            })
            .then(function(doc) {
// console.log(doc._data.email)
                expect(doc._data.email).toBe("noemi55@gmail.com")
                done()
            })
            
            
    })
})

describe('leerDatos', () => {
    it('traer los datos para pintar', (done) => {
        const user2 = {
            displayName: 'noemi',
            email: 'noemi@gmail.com',
           uid:'abc234',
            photoURL: 'img/usuario.png'
        }
        
            return leerDatos(user2)
    
            .then((response) => {
                // console.log(response)
                  expect(response).toEqual(
                    { "email": "noemi@gmail.com",
                    "name": "noemi",
                    "photoUser": "/img/usuario.png",
                    "uidUser": "abc234" })
                done()
            })
    })
})







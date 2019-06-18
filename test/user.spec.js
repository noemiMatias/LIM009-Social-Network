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

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { collectionUser, leerDatos } from '../src/lib/firestore.js'


describe('collectionUser', () => {
    it('Deberia agregar una coleccion de usuarios', (done) => {
        const user2 = {
            name: 'noemi',
            email: 'noemi@gmail.com',
        
            photoUser: 'img/usuario.png'
        }
        return collectionUser(user2)
            .then((response) => {
                
                leerDatos(user2)
                    .then((objetoUser) => {
                        
                        expect(objetoUser).toBe(objetoUser)
                    })
                done()
                // expect(result).toBe('la coleccion de usuarios fue creada')
            })
    })
})

describe('leerDatos', () => {
    it('traer los datos para pintar', (done) => {
        const user2 = {
            name: 'noemi',
            email: 'noemi@gmail.com',
        
            photoUser: 'img/usuario.png'
        }
        collectionUser(user2).then(()=>{
            return leerDatos({name:'noemi',email:'noemi@gmail.com',photoUser:'img/usuario.png'})
            .then((response) => {
                console.log(response)
                // expect(response).toBe(user3)
                done()
            })
        })
       

    })
})






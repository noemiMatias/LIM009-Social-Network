import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
    __collection__: {
        post: {
            __doc__: {
                abc123: {
                    correo: 'noemi@gmail.com',
                    fecha: '10 de junio,17:30:40 UTC-5',
                    name: 'noemi',
                    photo: 'img/photo.pg',
                    state: 'privado',
                    textpost: 'hola laboratoria',
                    uidUser: '1234567'

                },


                abc345: {
                    correo: 'sofi@gmail.com',
                    fecha: '11 de junio',
                    name: 'sofia',
                    photo: 'img/photo.pg',
                    state: 'privado',
                    textpost: 'hola ',
                    uidUser: '67892'

                },

                abc567: {
                    correo: 'lesly@gmail.com',
                    fecha: '12 de junio',
                    name: 'lesly',
                    photo: 'img/photo.pg',
                    state: 'privado',
                    textpost: 'hola bell ',
                    uidUser: '75885'



                }
            }
        }
    }
}


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { collectionPost, readData, deleteData, upDate } from "../src/lib/firestore.js";

describe('collectionPost ', () => {
    it('debería poder agregar un post a la coleccion', (done) => {
        return collectionPost({
            textpost: 'holaaaa',
            uidUser: '75885',
            state: 'privado',
            correo: 'lesly@gmail.com',
            name: 'lesly',
            photoUser: 'img/photo.pg',
            fecha: '14 de junio'
        })
            .then((data) => {

                expect(data._data).toHaveProperty('textpost', 'holaaaa')
                done()
            })

    });
})
describe('readData', () => {
    it('Debería poder leer un post', (done) => {
        const callback = (data) => {
            const result = data._data[0]._data;
            // console.log(data._data[0])
            expect(result).toHaveProperty('textpost', 'holaaaa')

            done()
        }
        return readData(callback)
    })
})

describe('deleteData', () => {
    it('deberia eliminar un post con id: abc123', (done) => {
        return deleteData('abc123').then(() => {
            const callback = (data) => {

                 const result = data._data.map(elem => elem._id)
                
                console.log(result)
            //  console.log(data._data.map(elem => elem._id))
                expect(result).toBeUndefined('abc123')
                done()
            }

            readData(callback)
        })
    })
})

describe('upDate', () => {
    it('deberia editar un post con id: abc567', (done) => {
        return upDate('abc567' , {textpost:'editando post',state:'publico'}).then(() => {
            // console.log(datafromfb);
            
            const callback = (data) => {
                const result = data._data[1]._data.textpost;
             
              expect(result).toBe('editando post')
                done()

            }
            readData(callback)
        })


    })

})


Proyecto de APIs con Node.js y Supertest

Este proyecto consiste en la creación de una API REST utilizando Node.js, con pruebas automatizadas escritas con SUPERTEST. El entorno de desarrollo se gestiona con Nodemon para facilitar el reinicio automático del servidor.


## Tecnologías utilizadas

* Node.js
* Express
* Supertest 
* Nodemon
* Jest (framework de testing)
* JavaScript


Instalación

## Cloná el repositorio:

    en git bash

    git clone https://github.com/CarrilloFernando/final-V-V.git

## Como esta en la rama MASTER no te muestra nada, hay que poner esto para que se cambie a la rama master, y te muestre la carpeta con los archivos

bash

    cd final-V-V

    git checkout master



## O directamente para que clone de la rama master:

    git clone -b master https://github.com/CarrilloFernando/final-V-V.git

## Instala dependencias 
## (ienes que estar en la carpeta "backend-testing" para que la dependicia se descargen ahí)
    
    cd backend-testing
    
## luego descargar dependencias

    npm install

## Archivos importantes
En la raiz del proyecto crear .env

.env (este archivo no se sube al repositori remoto por tema de seguridad ya que ademas puede ser recuperado con npm install)

hay que crearlo en la carpeta raiz dentro de la capeta "backend-testing"

dentro el archivo .env poner esto para que corra el servidor:

    PORT=3001 


## Para iniciar servidor(se debe de estar en la carpeta backend-testing solo pones en la consola "cd backend-testing")

    npm start:local

## Para correr las pruebas

    npm test

## pruebas postaman los endpoin de (Post, get, put, delete)

## para agregar POST ¡IMPORTANTe! (como no utlizamos BD estas solo se cargaran en la memoria mediante un arreglo, nodemon actuliza todo a 0 cuando esta se actuliza)


## endpoint de agregar POST
En POSTMAN poner modo POST

http://localhost:3001/users
 en el body (raw, JSON)

 {
  "id": 1,
  "name": "Fernando",
  "age": "410"
 }
 ## te tiene que dar como respuesta algo asi
    {
    "message": "Usuario creado",
    "data": {
        "id": 1,
        "name": "Fernando",
        "age": "410"
    }
}


## endpoint para GET obtener todos los usuario o solo un usuario.
En POSTMAN poner modo GET

para obtener todos: http://localhost:3001/users

un usuario espedifico: http://localhost:3001/users/1

## endpoint para PUT(actualizar)

http://localhost:3001/users/1

en body(raw, JSON)
    {
    "name": "Fernando Actudal",
    "age": 31
    }

## endpoin para DELETE (eliminar)
en POSTMAN PONER MODO DELETE

elimina usuario: http://localhost:3001/users/1

## En el archivo app.test.js estan los test que hice uno para cada endpoin. Sin lugar a duda como no se trabajo con BD el supertest solo ejecuta los test uno por uno lugo se borra de la memoria principal, no quedan guardados los datos.

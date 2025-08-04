const express = require('express')

const app = express()

app.use(express.json()) 

const router = express.Router()

const users= [] //ARREGLO


//AGREGA USUARIO AL ARREGLO
router.post('/users', (req, res) => {
    const { id, name, age } = req.body;
    const newUser = { id, name, age };
    users.push(newUser);
    console.log('Body recibido:', req.body);
    return res.status(201).json({
        message: 'Usuario creado',
        data: newUser
    });
});

//OBTIENE TODOS LOS USUARIOS
router.get('/users', (req, res) => {
    return res.status(200).send(users) 
})

//OBTIENE USUARIO POR ID
router.get('/users/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find(u => String(u.id) === id);

    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.status(200).json(user);
});

//ACTUALIZAR
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const userIndex = users.findIndex(u => String(u.id) === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (name) users[userIndex].name = name;
    if (age) users[userIndex].age = age;

    return res.status(200).json({
        message: 'Usuario actualizado',
        data: users[userIndex]
    });
});

//ELIMINAR
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const userIndex = users.findIndex(u => String(u.id) === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const deletedUser = users.splice(userIndex, 1); 

    return res.status(200).json({
        message: 'Usuario eliminado correctamente',
        data: deletedUser[0]
    });
});

app.use(router)

module.exports = app;
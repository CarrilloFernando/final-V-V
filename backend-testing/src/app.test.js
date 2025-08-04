const request = require('supertest');
const app = require('./app');

describe('API de Usuarios', () => {
    // 1. POST - Crear usuario
    it('debería crear un nuevo usuario', async () => {
        const response = await request(app)
            .post('/users')
            .send({ id: 1, name: 'Fernando', age: 30 });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('message');
        expect(response.body.data).toHaveProperty('id', 1);
        expect(response.body.data).toHaveProperty('name', 'Fernando');
        expect(response.body.data).toHaveProperty('age', 30);
    });

    // 2. GET - Obtener todos los usuarios
    it('debería obtener todos los usuarios', async () => {
        const response = await request(app).get('/users');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    // 3. GET - Obtener un usuario por ID
    it('debería obtener un usuario por ID', async () => {
        const response = await request(app).get('/users/1');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', 1);
        expect(response.body).toHaveProperty('name', 'Fernando');
    });

    // 4. PUT - Actualizar un usuario
    it('debería actualizar un usuario existente', async () => {
        const response = await request(app)
            .put('/users/1')
            .send({ name: 'Fer', age: 31 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Usuario actualizado');
        expect(response.body.data).toHaveProperty('name', 'Fer');
        expect(response.body.data).toHaveProperty('age', 31);
    });

    // 5. DELETE - Eliminar un usuario
    it('debería eliminar un usuario existente', async () => {
        const response = await request(app).delete('/users/1');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Usuario eliminado correctamente');
        expect(response.body.data).toHaveProperty('id', 1);
    });

    // 6. GET - Usuario no encontrado
    it('debería retornar 404 si el usuario no existe', async () => {
        const response = await request(app).get('/users/1');

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('message', 'Usuario no encontrado');
    });

    
});


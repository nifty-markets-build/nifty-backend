const request = require('supertest');
const usersRouter = require('../server.js');

describe('usersRouter.js', () => {

    describe('GET /users', () => {

        test('should return 200 status code', () => {
            return request(usersRouter)
                .get('/users')
                .expect(200);
        });
    });
});
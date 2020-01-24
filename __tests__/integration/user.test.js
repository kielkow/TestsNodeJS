import request from 'supertest';
import app from '../../src/app';

describe('', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Matheus Kielkowski',
        email: 'matheuskiel@fiorifer.com.br',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});

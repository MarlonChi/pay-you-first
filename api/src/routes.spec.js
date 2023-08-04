import request from 'supertest';
import { app } from './server-setup';

const server = app.listen();

describe('Routes', () => {
  it('should return not found with wrong password', async () => {
    const email = 'marlon@teste.com';
    const password = 'teste';

    const result = await request(server).get('/login').auth(email, password);

    expect(result.status).toBe(404);
  });

  it('should return not found with wrong email', async () => {
    const email = 'errado@teste.com';
    const password = '123456';

    const result = await request(server).get('/login').auth(email, password);

    expect(result.status).toBe(500);
  });
});

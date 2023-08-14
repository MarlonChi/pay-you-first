import request from 'supertest';
import bcrypt from 'bcrypt';

import { prisma } from '~/data';
import { app } from './server-setup';

const server = app.listen();

describe('Routes', () => {
  beforeAll(async () => {
    await prisma.user.deleteMany({});
  });

  it('should return not found with wrong password', async () => {
    const email = 'marlon@teste.com';
    const password = 'teste';

    const result = await request(server).get('/login').auth(email, password);

    expect(result.status).toBe(500);
  });

  it('should return not found with wrong email', async () => {
    const email = 'errado@teste.com';
    const password = '123456';

    const result = await request(server).get('/login').auth(email, password);

    expect(result.status).toBe(500);
  });

  it('should return logged in user by correct credentials', async () => {
    const email = 'teste@teste.com';
    const password = '123456';

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    const result = await request(server).get('/login').auth(email, password);

    expect(result.status).toBe(200);
    expect(result.body.user).toBeTruthy();
    expect(result.body.user.id).toBeTruthy();
    expect(result.body.user.email).toBe(email);
    // expect(result.body.user.password).toBeFalsy();
  });
});

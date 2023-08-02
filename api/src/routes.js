import Router from '@koa/router';

import * as users from './modules/users';
import * as login from './modules/auth';

export const router = new Router();

// Auth
router.get('/login', login.login);

// Users
router.get('/users', users.list);
router.post('/users', users.create);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.remove);

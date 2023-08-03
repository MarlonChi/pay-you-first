import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { prisma } from '~/data/index';
import { decodeBasicToken } from './services';

export const login = async ctx => {
  try {
    const [email, password] = decodeBasicToken(
      ctx.request.headers.authorization
    );
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    const passwordEqual = await bcrypt.compare(password, user.password);

    if (!user || !passwordEqual) {
      ctx.status = 404;
      ctx.body = 'Usuário não encontrado.';
      return;
    }

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
    ctx.body = { user, token };
  } catch (err) {
    console.log(err);

    if (err.custom) {
      ctx.status = 400;
      return;
    }

    ctx.status = 500;
    ctx.body = 'Ops! Algo deu errado, tente novamente.';
    return;
  }
};

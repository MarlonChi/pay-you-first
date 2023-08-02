import { prisma } from '~/data/index';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async ctx => {
  const [type, credentials] = ctx.request.headers.authorization.split(' ');

  if (type !== 'Basic') {
    ctx.status = 400;
    return;
  }

  const decoded = Buffer.from(credentials, 'base64').toString();
  const [email, password] = decoded.split(':');

  try {
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
    ctx.status = 500;
    ctx.body = 'Ops! Algo deu errado, tente novamente.';
    return;
  }
};

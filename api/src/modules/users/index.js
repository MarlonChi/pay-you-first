import { prisma } from '~/data/index';

export const list = async ctx => {
  try {
    const users = await prisma.user.findMany({});
    ctx.body = users;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = 'Ops! Algo deu errado, tente novamente.';
    return;
  }
};

export const create = async ctx => {
  try {
    const user = await prisma.user.create({
      data: ctx.request.body,
    });
    ctx.body = user;
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Ops! Algo deu errado, tente novamente.';
  }
};

export const update = async ctx => {
  const data = {
    name: ctx.request.body.name,
    email: ctx.request.body.email,
    password: ctx.request.body.password,
  };
  try {
    const user = await prisma.user.update({
      where: { id: ctx.params.id },
      data,
    });
    ctx.body = user;
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Ops! Algo deu errado, tente novamente.';
  }
};

export const remove = async ctx => {
  try {
    await prisma.user.delete({
      where: { id: ctx.params.id },
    });
    ctx.body = { id: ctx.params.id };
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Ops! Algo deu errado, tente novamente.';
  }
};

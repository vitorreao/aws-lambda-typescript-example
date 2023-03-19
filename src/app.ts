import Koa from 'koa';

export const app = new Koa();

app.use(async ctx => {
    ctx.status = 200;
    ctx.body = 'hello, world';
});

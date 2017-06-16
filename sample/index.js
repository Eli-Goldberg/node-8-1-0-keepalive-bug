const route = require('koa-route');
const serve = require('koa-send');
// const cors = require('koa2-cors');
const Koa = require('koa');
const app = new Koa();

async function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

app.use(route.options('*',async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', ctx.get('origin'));
  ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE');
  ctx.set('Access-Control-Allow-Headers', 'authorization,content-type');
  ctx.status = 204;
}));

app.use(route.post('/v2/reports/apartment', async (ctx) => {
  console.log(`request came in... ${ctx.request.method} ${ctx.request.path}`);

  await sleep(5500); // ~Around 5003 ms it's a 50/50 chance, above 5500 ms it's always twice
  
  ctx.body = 'Hello Koa';
  ctx.status = 200;
  console.log("Request left...");
}));


app.use(async (ctx) => {
  return serve(ctx, ctx.path, { root: __dirname + '/index.html' });
});


app.listen(9090);
console.log('Listening...');

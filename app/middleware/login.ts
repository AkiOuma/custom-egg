import { Context } from 'egg';

export default () => {
  return async (_: Context, next: any) => {
    console.log('middleware: login');
    await next();
  };
};

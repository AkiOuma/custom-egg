import { Application } from 'egg';
import { makeRouter } from './decorator';

export default (app: Application) => {
  // const { controller, router } = app;

  // router.get('/', controller.home.index);
  makeRouter(app);
};

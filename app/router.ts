import { Application } from 'egg';
import { Qkouter } from './decorator';

export default (app: Application) => {
  // const { controller, router } = app;

  // router.get('/', controller.home.index);
  // router.get('/pilot/', controller.pilot.index.index);
  // router.get('/pilot/ranking', controller.pilot.index.ranking);
  Qkouter(app);
};

import { Application } from 'egg';
import { Qkouter } from './decorator';

export default (app: Application) => {
  Qkouter(app);
};

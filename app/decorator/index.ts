import 'reflect-metadata';
import MethodHandler from './method';
import ControllerHandler from './controller';
import { Application, Context } from 'egg';

const mapper = new Map<any, any>();
const methodHandler = new MethodHandler(mapper);
const controllerHandler = new ControllerHandler();

export const Qkouter = (app: Application) => {

  const { router } = app;

  for (const control of mapper.values()) {
    const basePath: string = Reflect.getMetadata('controller', control.constructor);
    Reflect.ownKeys(control)
      .filter((method: any) => {
        return ![ 'constructor', 'pathName', 'fullPath' ].includes(method);
      })
      .forEach((method: any) => {
        const subPath = Reflect.getMetadata('path', control[method]);
        if (!subPath) return;
        const path: string = `${basePath}${subPath}`
          .replace(/\/{2,}/g, '/');

        const routerCb = async (ctx: Context) => {
          const instance = new control.constructor(ctx);
          await instance[method](ctx);
        };

        router.get(path, routerCb);
      });
  }
};

export const Prefix = controllerHandler.prefix();
export const Get = methodHandler.get();

import 'reflect-metadata';

const routerMap: Map<string, any> = new Map<string, any>();

export function Prefix(path: string) {
  return (target: any): void => {
    Reflect.defineMetadata('controller', path, target);
  };
}

export function Get(path: string) {
  return (target: any, functionName: string) => {
    Reflect.defineMetadata('function', path, target, functionName);
    routerMap.set(functionName, target);
  };
}

export function makeRouter(app: any) {
  const { controller, router } = app;
  routerMap.forEach((target: any, functionName: string) => {
    console.log('='.repeat(20));
    console.log(functionName);
    console.log(Reflect.getMetadata('controller', target.constructor));
    console.log(Reflect.getMetadata('function', target, functionName));
    console.log('='.repeat(20));
    router.get(
      `${Reflect.getMetadata('controller', target.constructor)}${Reflect.getMetadata('function', target, functionName)}`,
      controller.home[functionName],
    );
  });
}

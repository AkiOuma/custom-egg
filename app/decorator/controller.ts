import 'reflect-metadata';

export default class ControllerHandler {
  prefix() {
    return (path: string) => {
      return (target: any) => {
        Reflect.defineMetadata('controller', path, target);
      };
    };
  }
}

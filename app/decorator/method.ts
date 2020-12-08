import 'reflect-metadata';

export default class MethodHandler {
  mapper: Map<any, any>;

  constructor(mapper: Map<any, any>) {
    this.mapper = mapper;
  }

  request(method: string) {
    return (path: string) => {
      return (target: any, _: string, descriptor: any) => {
        Reflect.defineMetadata('path', path, descriptor.value);
        Reflect.defineMetadata('method', method, descriptor.value);
        this.mapper.set(target, target);
        // return descriptor;
      };
    };
  }

  middleware() {
    return (middlewareList: string[]) => {
      return (_: any, __: string, descriptor: any) => {
        Reflect.defineMetadata('middleware', middlewareList, descriptor.value);
      };
    };
  }
}

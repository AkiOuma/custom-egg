import 'reflect-metadata';

export default class MethodHandler {
  mapper: Map<any, any>;

  constructor(mapper: Map<any, any>) {
    this.mapper = mapper;
  }

  get() {
    return (path: string) => {
      return (target: any, _: string, descriptor: any) => {
        Reflect.defineMetadata('path', path, descriptor.value);
        Reflect.defineMetadata('method', 'get', descriptor.value);
        this.mapper.set(target, target);
        return descriptor;
      };
    };
  }
}

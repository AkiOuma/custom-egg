import { Controller } from 'egg';
import { Get, Prefix, ControllerMiddleware, Middleware } from '../decorator';

@Prefix('/')
@ControllerMiddleware([ 'login' ])
export default class HomeController extends Controller {
  @Get('/')
  @Middleware([ 'admin' ])
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}

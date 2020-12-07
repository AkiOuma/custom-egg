import { Controller } from 'egg';
import { Get, Prefix } from '../decorator';

@Prefix('/')
export default class HomeController extends Controller {
  @Get('/')
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  async test() {
    return 123;
  }
}

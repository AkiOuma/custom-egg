import { Controller } from 'egg';
import { Get, Prefix } from '../decorator';

@Prefix('/home')
export default class HomeController extends Controller {
  @Get('/index')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}

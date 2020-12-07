import { Controller } from 'egg';
import { Get, Prefix } from '../../decorator';

@Prefix('/pilot')
export default class PilotController extends Controller {
  @Get('/')
  async index() {
    this.ctx.body = 'pilot';
  }

  @Get('/ranking')
  async ranking() {
    this.ctx.body = 'ranking pilot';
  }
}

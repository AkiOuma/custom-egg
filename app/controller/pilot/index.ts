import { Controller } from 'egg';
import { Delete, Get, Middleware, Post, Prefix, Put } from '../../decorator';

@Prefix('/pilot')
export default class PilotController extends Controller {
  @Get('/')
  @Middleware([ 'admin' ])
  async getPilot() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: 'get pilot',
      data: ctx.query,
    };
  }

  @Post('/')
  @Middleware([ 'admin' ])
  async createPilot() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: ctx.request.body,
    };
  }

  @Put('/:id')
  @Middleware([ 'admin' ])
  async updatePilot() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: `updating pilot: ${ctx.params.id}`,
      data: ctx.request.body,
    };
  }

  @Delete('/:id')
  @Middleware([ 'admin' ])
  async deletePilot() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: `deleting pilot: ${ctx.params.id}`,
    };
  }
}

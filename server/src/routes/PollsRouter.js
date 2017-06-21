// @flow

import { Router } from 'express';

export default class PollsRouter {
  router: Router;
  path: string;

  constructor(path: string = '/api/polls') {
    this.router = Router();
    this.path = path;
    this.init();
  }

  getAll(req: $Request, res: $Response): void {
    res.status(200).json([{
      id: '1',
      name: 'elo',
      quantity: 10,
      price: 20
    }]);
  }

  init(): void {
    this.router.get('/', this.getAll);
  }
}

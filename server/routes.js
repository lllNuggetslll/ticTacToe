import path from 'path';
import {
  giveNewBoard,
  calculateBoard
} from './controller'

export default function routes(app) {

  app.route('/api/getboard')
    .get(giveNewBoard)

  app.route('/api/sendboard')
    .post(calculateBoard);

}

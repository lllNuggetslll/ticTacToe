import path from 'path';
import controller from './controller'

export default function routes(app) {

  app.route('/api/getboard')
    .get(controller.makeBoard)
    .put(controller.calculateBoard);

}

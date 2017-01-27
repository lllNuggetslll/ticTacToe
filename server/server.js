import path from 'path'
import webpack from 'webpack'
import express from 'express'
import config from '../webpack.config'
import router from './routes'

const app = express();
app.set('port', process.env.PORT || 3000);
router(app)
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/client/static/index.html'));
});

app.listen(app.get('port'), function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})

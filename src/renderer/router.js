import React from 'react';
import { Router } from 'dva/router';
import App from './routes/App';

const cached = {};
//app代表index.js中的app= dav()
//modal代表一个modal里面的所有的数据
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, {component: require('./routes/Index')});
        });
      },
      childRoutes: [
        {
            path: 'homePage',
            name: 'homePage',
            getComponent(nextState, cb) {
              require.ensure([], require => {
                cb(null, require('./routes/Index'));
              });
            },
          },
          {
            path: 'solution',
            name: 'solution',
            getComponent(nextState, cb) {
              require.ensure([], require => {
                registerModel(app, require('./models/solution/solution'));
                cb(null, require('./routes/solution/Solution'));
              });
            },
          }
        ],
      },
  ];


  return <Router history={history} routes={routes} />;
}

export default RouterConfig;

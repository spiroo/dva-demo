import dva from 'dva';
import { message } from 'antd';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  onError(error) {
    message.error(error.message);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app'));
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

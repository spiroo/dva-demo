
import { table } from '../utils/config';

export default {

  namespace: 'users',

  state: {
    modalVisible: false,
    ...table,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
        const pathname = location.pathname;
        if (pathname === '/users') {
          dispatch({
            // type: 'getWebsite',
          });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};

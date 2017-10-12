
export default {

  namespace: 'app',

  state: {
    selectedKeys: 'user',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
        const pathname = location.pathname;
        let key = pathname.substr(1);
        if (key === '') {
          key = 'user';
        }

        dispatch({
          type: 'changeState',
          payload: {
            selectedKeys: key,
          },
        });
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    changeState(state, action) {
      return { ...state, ...action.payload };
    },
  },

};

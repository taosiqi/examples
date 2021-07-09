import { Effect, Reducer, Subscription, request } from 'umi';
export interface IndexProps {
  ename: number;
  cname: string;
  title: string;
  new_type: number;
  hero_type: number;
  skin_name: string;
}
export interface IndexModelState {
  name: string;
  heros: IndexProps[];
  freeheros: IndexProps[];
  filterKey: number;
  itemHover: number;
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
    fetch: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    name: 'index',
    heros: [],
    freeheros: [],
    filterKey: 0,
    itemHover: 0
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const data = yield request('https://bird.ioliu.cn/v2?url=https://pvp.qq.com/web201605/js/herolist.json');
      yield put({
        type: 'save',
        payload: {
          heros: data
        },
      });
    },
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetch'
          })
        }
      });
    }
  },
};

export default IndexModel;

import { AnyAction, Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
import {
  addFakeList,
  queryModelList,
  queryTaskList,
  removeFakeList,
  updateFakeList,
} from './service';

import { TaskStatsType, TrainModelType } from './data.d';

export interface StateType {
  list: TaskStatsType[];
  models: TrainModelType[];
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: StateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetch: Effect;
    fetchModels: Effect;
    appendFetch: Effect;
    submit: Effect;
  };
  reducers: {
    queryModels: Reducer<StateType>;
    queryList: Reducer<StateType>;
    appendList: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'listBasicList',

  state: {
    list: [],
    models: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryTaskList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *fetchModels({ payload }, { call, put }) {
      const response = yield call(queryModelList, payload);
      yield put({
        type: 'queryModels',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *appendFetch({ payload }, { call, put }) {
      const response = yield call(queryTaskList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *submit({ payload }, { call, put }) {
      let callback;
      if (payload.id) {
        callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
      } else {
        callback = addFakeList;
      }
      const response = yield call(callback, payload); // post
      yield put({
        type: 'queryList',
        payload: response,
      });
    },
  },

  reducers: {
    queryModels(state: StateType = { list: [], models: [] }, action) {
      return {
        ...state,
        models: action.payload,
      };
    },
    queryList(state: StateType = { list: [], models: [] }, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    appendList(state: StateType = { list: [], models: [] }, action) {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
  },
};

export default Model;

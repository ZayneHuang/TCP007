import request from '@/utils/request';
import { TaskStatsType } from '@/pages/list/basic/list/data';
// import { BasicListItemDataType } from './data.d';

interface ParamsType extends Partial<TaskStatsType> {
  count?: number;
}

export async function queryTaskList(params: ParamsType) {
  return request('/api/task_list', {
    params,
  });
}

export async function queryModelList(params: ParamsType) {
  return request('/api/model_list', {
    params,
  });
}

export async function removeFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
      method: 'update',
    },
  });
}

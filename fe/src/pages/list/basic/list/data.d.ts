export interface Member {
  avatar: string;
  name: string;
  id: string;
}

// export interface BasicListItemDataType {
//   id: string;
//   owner: string;
//   title: string;
//   avatar: string;
//   cover: string;
//   status: 'normal' | 'exception' | 'active' | 'success';
//   percent: number;
//   logo: string;
//   href: string;
//   body?: any;
//   updatedAt: number;
//   createdAt: number;
//   subDescription: string;
//   description: string;
//   activeUser: number;
//   newUser: number;
//   star: number;
//   like: number;
//   message: number;
//   content: string;
//   members: Member[];
// }

interface TaskMetaType {
  taskName: string;
  description: string;
  createAt: string;
  modelType: number;
  total: number;
  hit: number;
  accuracy: number;
}

interface TaskInfoType {
  protocol: string;
  All: number;
  TP: number;
  FN: number;
  FP: number;
  recall: number;
  precision: number;
  f1: number;
}

export interface TaskStatsType {
  id: number;
  meta: TaskMetaType;
  list: TaskInfoType[];
}

export interface TrainModelType {
  id: number;
  dataSize: string;
  modelName: string;
  modelStruct: string;
  channels: number[];
  convFilters: string;
  poolFilters: string;
  optimizer: string;
  activation: string;
  batchSize: number;
  iteration: number;
}

export interface MessageType {
  id: number;
  correct: number;
  predict: number;
  isRight: number;
}

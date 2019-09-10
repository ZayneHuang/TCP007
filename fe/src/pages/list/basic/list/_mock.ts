import { Request, Response } from 'express';
import { TaskStatsType, TrainModelType } from './data.d';

/*
const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];
*/

function trainModelList(count: number): TrainModelType[] {
  // const list = [];
  const list: TrainModelType[] = [];
  const trainModel = {
    id: 0,
    dataSize: '20*128',
    modelName: 'VGGmodel6/VGG27999.ckpt',
    modelStruct: 'VGG',
    channels: [2560, 32, 64, 128, 16],
    convFilters: '3*3',
    poolFilters: '2*2',
    optimizer: 'Adam',
    activation: 'ReLU',
    batchSize: 100,
    iteration: 20000,
  };
  for (let i = 0; i < count; i += 1) {
    // list.push({
    //   id: `fake-list-${i}`,
    //   owner: user[i % 10],
    //   title: titles[i % 8],
    //   avatar: avatars[i % 8],
    //   cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
    //   status: ['active', 'exception', 'normal'][i % 3] as
    //     | 'normal'
    //     | 'exception'
    //     | 'active'
    //     | 'success',
    //   percent: Math.ceil(Math.random() * 50) + 50,
    //   logo: avatars[i % 8],
    //   href: 'https://ant.design',
    //   updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
    //   createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
    //   subDescription: desc[i % 5],
    //   description:
    //     '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    //   activeUser: Math.ceil(Math.random() * 100000) + 100000,
    //   newUser: Math.ceil(Math.random() * 1000) + 1000,
    //   star: Math.ceil(Math.random() * 100) + 100,
    //   like: Math.ceil(Math.random() * 100) + 100,
    //   message: Math.ceil(Math.random() * 10) + 10,
    //   content:
    //     '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    // });
    list.push({
      ...trainModel,
      id: i,
    });
  }
  return list;
}

function taskstatsList(count: number): TaskStatsType[] {
  const list: TaskStatsType[] = [];
  const taskStats = {
    meta: {
      id: 1,
      taskName: '123123',
      description: '描述123123',
      total: 4187,
      hit: 2257,
      accuracy: 0.539049438738954,
      createAt: '2019-09-11 0:01:02',
      modelType: 1,
    },
    list: [
      {
        protocol: 'UDP',
        All: 351,
        TP: 6,
        FN: 345,
        FP: 49,
        recall: 0.017094017094017096,
        precision: 0.10909090909090909,
        f1: 0.029556650246305417,
      },
      {
        protocol: 'TCP',
        All: 351,
        TP: 140,
        FN: 211,
        FP: 51,
        recall: 0.39886039886039887,
        precision: 0.7329842931937173,
        f1: 0.5166051660516605,
      },
      {
        protocol: 'TLSv1.2',
        All: 351,
        TP: 122,
        FN: 229,
        FP: 63,
        recall: 0.3475783475783476,
        precision: 0.6594594594594595,
        f1: 0.4552238805970149,
      },
      {
        protocol: 'ARP',
        All: 351,
        TP: 351,
        FN: 0,
        FP: 236,
        recall: 1,
        precision: 0.5979557069846678,
        f1: 0.7484008528784648,
      },
      {
        protocol: 'STUN',
        All: 351,
        TP: 175,
        FN: 176,
        FP: 154,
        recall: 0.4985754985754986,
        precision: 0.5319148936170213,
        f1: 0.5147058823529412,
      },
      {
        protocol: 'LLMNR',
        All: 351,
        TP: 351,
        FN: 0,
        FP: 924,
        recall: 1,
        precision: 0.2752941176470588,
        f1: 0.43173431734317336,
      },
      {
        protocol: 'NBNS',
        All: 351,
        TP: 351,
        FN: 0,
        FP: 24,
        recall: 1,
        precision: 0.936,
        f1: 0.9669421487603307,
      },
      {
        protocol: 'SNMP',
        All: 351,
        TP: 255,
        FN: 96,
        FP: 58,
        recall: 0.7264957264957265,
        precision: 0.8146964856230032,
        f1: 0.7680722891566264,
      },
      {
        protocol: 'DNS',
        All: 351,
        TP: 231,
        FN: 120,
        FP: 15,
        recall: 0.6581196581196581,
        precision: 0.9390243902439024,
        f1: 0.7738693467336684,
      },
      {
        protocol: 'MDNS',
        All: 304,
        TP: 146,
        FN: 158,
        FP: 114,
        recall: 0.48026315789473684,
        precision: 0.5615384615384615,
        f1: 0.5177304964539007,
      },
      {
        protocol: 'GQUIC',
        All: 113,
        TP: 19,
        FN: 94,
        FP: 193,
        recall: 0.168141592920354,
        precision: 0.08962264150943396,
        f1: 0.11692307692307691,
      },
      {
        protocol: 'DB-LSP-DISC',
        All: 96,
        TP: 44,
        FN: 52,
        FP: 21,
        recall: 0.4583333333333333,
        precision: 0.676923076923077,
        f1: 0.546583850931677,
      },
      {
        protocol: 'DHCPv6',
        All: 69,
        TP: 57,
        FN: 12,
        FP: 23,
        recall: 0.8260869565217391,
        precision: 0.7125,
        f1: 0.7651006711409397,
      },
      {
        protocol: 'ICMPv6',
        All: 66,
        TP: 0,
        FN: 66,
        FP: 0,
        recall: 0,
        precision: 0,
        f1: 0,
      },
      {
        protocol: 'FTP',
        All: 65,
        TP: 1,
        FN: 64,
        FP: 5,
        recall: 0.015384615384615385,
        precision: 0.16666666666666666,
        f1: 0.028169014084507043,
      },
      {
        protocol: 'BROWSER',
        All: 315,
        TP: 8,
        FN: 307,
        FP: 0,
        recall: 0.025396825396825397,
        precision: 1,
        f1: 0.04953560371517028,
      },
    ],
  };
  for (let i = 0; i < count; i += 1) {
    list.push({
      ...taskStats,
    });
  }
  return list;
}

let trainModelData: TrainModelType[] = [];
let taskStatsData: TaskStatsType[] = [];

function getTaskStats(req: Request, res: Response) {
  const params = req.query;

  const count = params.count * 1 || 20;

  const result = taskstatsList(count);
  taskStatsData = result;
  console.log(taskStatsData);
  return res.json(result);
}

function getTrainModelList(req: Request, res: Response) {
  const params = req.query;

  const count = params.count * 1 || 20;

  const result = trainModelList(count);
  trainModelData = result;
  return res.json(result);
}

function postFakeList(req: Request, res: Response) {
  const { /* url = '', */ body } = req;
  // const params = getUrlParams(url);
  const { method, id } = body;
  // const count = (params.count * 1) || 20;
  let result = trainModelData || [];

  switch (method) {
    case 'delete':
      result = result.filter(item => item.id !== id);
      break;
    case 'update':
      result.forEach((item, i) => {
        if (item.id === id) {
          result[i] = { ...item, ...body };
        }
      });
      break;
    case 'post':
      result.unshift({
        ...body,
        id: `fake-list-${result.length}`,
        createdAt: new Date().getTime(),
      });
      break;
    default:
      break;
  }

  return res.json(result);
}

export default {
  'GET  /api/model_list': getTrainModelList,
  'GET  /api/task_list': getTaskStats,
  'POST  /api/fake_list': postFakeList,
};

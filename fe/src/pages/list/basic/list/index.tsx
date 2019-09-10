import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Icon,
  Input,
  List,
  Menu,
  Modal,
  Progress,
  Result,
  Row,
  Select,
} from 'antd';
import React, { Component } from 'react';

import { Dispatch } from 'redux';
import { FormComponentProps } from 'antd/es/form';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import { findDOMNode } from 'react-dom';
import { StateType } from './model';
import { TaskStatsType } from './data.d';
import styles from './style.less';

const FormItem = Form.Item;
const SelectOption = Select.Option;
const { TextArea } = Input;

interface ListProps extends FormComponentProps {
  listBasicList: StateType;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface ListState {
  visible: boolean;
  done: boolean;
  current: TaskStatsType;
}

const emptyTask: TaskStatsType = {
  meta: {
    id: 0,
    taskName: '',
    description: '',
    createAt: '',
    total: 0,
    hit: 0,
    accuracy: 0,
    modelType: 1,
  },
  list: [],
};

@connect(
  ({
    listBasicList,
    loading,
  }: {
    listBasicList: StateType;
    loading: {
      models: { [key: string]: boolean };
    };
  }) => ({
    listBasicList,
    loading: loading.models.listBasicList,
  }),
)
class TaskList extends Component<ListProps, ListState> {
  state: ListState = {
    visible: false,
    done: false,
    current: {
      ...emptyTask,
    },
  };

  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  };

  addBtn: HTMLButtonElement | undefined | null = undefined;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listBasicList/fetch',
      payload: {
        count: 5,
      },
    });
    dispatch({
      type: 'listBasicList/fetchModels',
      payload: {
        count: 5,
      },
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
      current: {
        ...emptyTask,
      },
    });
  };

  showEditModal = (item: TaskStatsType) => {
    this.setState({
      visible: true,
      current: item,
    });
  };

  handleDone = () => {
    setTimeout(() => this.addBtn && this.addBtn.blur(), 0);
    this.setState({
      done: false,
      visible: false,
    });
  };

  handleCancel = () => {
    setTimeout(() => this.addBtn && this.addBtn.blur(), 0);
    this.setState({
      visible: false,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { current } = this.state;
    const id = current && current.meta ? current.meta.id : '';

    setTimeout(() => this.addBtn && this.addBtn.blur(), 0);
    form.validateFields((err: string | undefined, fieldsValue: TaskStatsType) => {
      if (err) return;
      this.setState({
        done: true,
      });
      dispatch({
        type: 'listBasicList/submit',
        payload: { id, ...fieldsValue },
      });
    });
  };

  deleteItem = (id: number) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'listBasicList/submit',
      payload: { id },
    });
  };

  render() {
    const {
      listBasicList: { list, models },
      loading,
    } = this.props;

    const {
      form: { getFieldDecorator },
    } = this.props;

    const { visible, done, current } = this.state;
    current.meta = current.meta || { ...emptyTask.meta };
    const editAndDelete = (key: string, currentItem: TaskStatsType) => {
      if (key === 'edit') this.showEditModal(currentItem);
      else if (key === 'delete') {
        Modal.confirm({
          title: '删除任务',
          content: '确定删除该任务吗？',
          okText: '确认',
          cancelText: '取消',
          onOk: () => this.deleteItem(currentItem.meta.id),
        });
      }
    };

    const modalFooter = done
      ? { footer: null, onCancel: this.handleDone }
      : { okText: '保存', onOk: this.handleSubmit, onCancel: this.handleCancel };

    const Info: React.FC<{
      title: React.ReactNode;
      value: React.ReactNode;
      bordered?: boolean;
    }> = ({ title, value, bordered }) => (
      <div className={styles.headerInfo}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em />}
      </div>
    );

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 5,
      total: 50,
    };

    const ListContent = ({
      data: {
        meta: { total, hit, createAt, accuracy },
      },
    }: {
      data: TaskStatsType;
    }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          <span>总报文数</span>
          <p>{total}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>正确数</span>
          <p>{hit}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>提交时间</span>
          <p>{createAt}</p>
        </div>
        <div className={styles.listContentItem}>
          <Progress
            percent={Number((accuracy * 100).toFixed(2))}
            strokeWidth={6}
            style={{ width: 180 }}
          />
        </div>
      </div>
    );

    const MoreBtn: React.FC<{
      item: TaskStatsType;
    }> = ({ item }) => (
      <Dropdown
        overlay={
          <Menu onClick={({ key }) => editAndDelete(key, item)}>
            <Menu.Item key="edit">统计</Menu.Item>
            <Menu.Item key="delete">删除</Menu.Item>
          </Menu>
        }
      >
        <a>
          更多 <Icon type="down" />
        </a>
      </Dropdown>
    );

    const getModalContent = () => {
      if (done) {
        return (
          <Result
            status="success"
            title="操作成功"
            subTitle="一系列的信息描述，很短同样也可以带标点。"
            extra={
              <Button type="primary" onClick={this.handleDone}>
                知道了
              </Button>
            }
            className={styles.formResult}
          />
        );
      }
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="任务名称" {...this.formLayout}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入任务名称' }],
              initialValue: current && current.meta && current.meta.taskName,
            })(<Input placeholder="请输入" />)}
          </FormItem>
          <FormItem label="训练模型" {...this.formLayout}>
            {getFieldDecorator('owner', {
              rules: [{ required: true, message: '请选择训练模型' }],
              initialValue: current.meta.modelType,
            })(
              <Select placeholder="请选择">
                {models.map((item, index) => (
                  <SelectOption value={index}>{item.modelName}</SelectOption>
                ))}
              </Select>,
            )}
          </FormItem>
          <FormItem {...this.formLayout} label="任务描述">
            {getFieldDecorator('subDescription', {
              rules: [{ message: '请输入至少五个字符的任务描述！', min: 5 }],
              initialValue: current.meta.description,
            })(<TextArea rows={4} placeholder="请输入至少五个字符" />)}
          </FormItem>
        </Form>
      );
    };
    return (
      <>
        <PageHeaderWrapper>
          <div className={styles.standardList}>
            <Card bordered={false}>
              <Row>
                <Col sm={8} xs={24}>
                  <Info title="我的识别" value="8个任务" bordered />
                </Col>
                <Col sm={8} xs={24}>
                  <Info title="报文识别效率" value="10条/秒" bordered />
                </Col>
                <Col sm={8} xs={24}>
                  <Info title="完成任务数" value="24个任务" />
                </Col>
              </Row>
            </Card>

            <Card
              className={styles.listCard}
              bordered={false}
              title="识别任务"
              style={{ marginTop: 24 }}
              bodyStyle={{ padding: '0 32px 40px 32px' }}
            >
              <Button
                size="large"
                type="dashed"
                style={{ width: '100%', marginBottom: 8 }}
                icon="plus"
                onClick={this.showModal}
                ref={component => {
                  // eslint-disable-next-line  react/no-find-dom-node
                  this.addBtn = findDOMNode(component) as HTMLButtonElement;
                }}
              >
                创建新任务
              </Button>
              <List
                size="large"
                rowKey="id"
                loading={loading}
                pagination={paginationProps}
                dataSource={list}
                renderItem={item => (
                  <List.Item
                    actions={[
                      <a
                        key="edit"
                        onClick={e => {
                          e.preventDefault();
                          this.showEditModal(item);
                        }}
                      >
                        统计
                      </a>,
                      <MoreBtn key="more" item={item} />,
                    ]}
                  >
                    <List.Item.Meta
                      title={
                        <a href={`/list/basic/detail/${item.meta.taskName}`}>
                          {item.meta.taskName}
                        </a>
                      }
                      description={item.meta.description}
                    />
                    <ListContent data={item} />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        </PageHeaderWrapper>

        <Modal
          title={done ? null : `任务${current ? '编辑' : '添加'}`}
          className={styles.standardListForm}
          width={640}
          bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
          destroyOnClose
          visible={visible}
          {...modalFooter}
        >
          {getModalContent()}
        </Modal>
      </>
    );
  }
}

export default Form.create<ListProps>()(TaskList);

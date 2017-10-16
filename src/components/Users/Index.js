
import React from 'react';
import { Table, Popconfirm } from 'antd';
import reactCSS from 'reactcss';
import styles from './Users.less';
import Pagination from '../Layout/Pagination';

const data = [
  {
    id: '1',
    code: '111',
    webName: '百度',
    webUrl: 'http://www.baidu.com',
    webPic: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    creatorName: '管理员',
    createTime: '2017-10-10',
  },
  {
    id: '1',
    code: '111',
    webName: '百度',
    webUrl: 'http://www.baidu.com',
    webPic: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png',
    creatorName: '管理员',
    createTime: '2017-10-10',
  },
];

function UserList({
  page,
  pageSize,
  total,
  pagination,
  pageChangeHandler,
  pageSizeChangeHandler,
  deleteHandler,
}) {
  const columns = [{
    title: '',
    dataIndex: 'id',
    key: 'id',
    className: styles.index,
    width: 50,
    render(text, record, index) {
      return (index + 1);
    },
  }, {
    title: '网站',
    dataIndex: 'webPic',
    key: 'webPic',
    width: 150,
    render(text) {
      const styleCss = reactCSS({
        default: {
          pic: {
            width: '100px',
            height: '60px',
            background: `url(${text}) center no-repeat`,
            backgroundSize: 'contain',
          },
        },
      });
      return (
        <div style={styleCss.pic} />
      );
    },
  }, {
    title: '网站名称',
    dataIndex: 'webName',
    key: 'webName',
  }, {
    title: '下发时间',
    dataIndex: 'createTime',
    key: 'createTime',
    width: 150,
  }, {
    title: '下发人',
    dataIndex: 'creatorName',
    key: 'creatorName',
    width: 80,
  }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 120,
    render: (data, record) => {
      return (
        <div>
          <a href={record.webUrl} rel="noopener noreferrer" target="_blank">预览</a>
          <Popconfirm title="确定要删除该网站?" onConfirm={() => { deleteHandler(record.code); }} okText="确定" cancelText="取消">
            <a className={styles.delete}>删除</a>
          </Popconfirm>
        </div>
      );
    },
  }];

  const pageProps = {
    page,
    pageSize,
    total,
    pagination,
    pageChangeHandler,
    pageSizeChangeHandler,
  };

  return (
    <div className={styles.table}>
      <Table
        bordered
        dataSource={data}
        columns={columns}
        pagination={false}
        rowKey={(record, index) => { return index; }}
      />
      <Pagination {...pageProps} />
    </div>
  );
}

export default UserList;

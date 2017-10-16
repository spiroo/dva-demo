
import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import UserModal from '../components/Users/AddUserModal';
import Users from '../components/Users/Index';

function UserList({ dispatch, users }) {
  const {
    modalVisible,
    page,
    pageSize,
    total,
    pagination,
  } = users;

  const modalProps = {
    modalVisible,
    title: '发布网站',
    wrapClassName: 'vertical-center-modal',
    onOk(data) {
      dispatch({
        type: 'users/addUsers',
        payload: data,
      });
    },
    onCancel() {
      dispatch({
        type: 'users/changeState',
        payload: {
          modalVisible: false,
        },
      });
    },
  };

  // 重新获取列表数据
  const reloadListData = () => {
    dispatch({
      type: 'users/getUsers',
    });
  };

  const listProps = {
    page,
    pageSize,
    total,
    pagination,
    // 分页
    pageChangeHandler(pageIndex) {
      dispatch({
        type: 'users/changeState',
        payload: {
          page: pageIndex,
        },
      });

      reloadListData();
    },
    // 改变每页条数
    pageSizeChangeHandler(current, size) {
      dispatch({
        type: 'users/changeState',
        payload: {
          page: 1,
          pageSize: size,
        },
      });

      reloadListData();
    },
    // 删除某个网站
    deleteHandler(code) {
      dispatch({
        type: 'users/deleteUsers',
        payload: {
          code,
        },
      });
    },
  };

  const addClickHandler = () => {
    dispatch({
      type: 'users/changeState',
      payload: {
        modalVisible: true,
      },
    });
  };

  return (
    <div>
      <Button type="primary" onClick={addClickHandler}>发布网站</Button>
      <Users {...listProps} />
      {modalVisible && <UserModal {...modalProps} />}
    </div>
  );
}

function mapStateToProps({ users }) {
  return { users };
}

UserList.propTypes = {
};

export default connect(mapStateToProps)(UserList);

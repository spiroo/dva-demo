import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import styles from './Header.less';
import config from '../../utils/config';
import userHead from '../../assets/user-head.png';

const { Header } = Layout;

const HeaderLayout = ({ selectedKeys }) => {
  const userMenu = (
    <Menu>
      <Menu.Item>
        <a style={{ textAlign: 'center' }} target="" rel="noopener noreferrer" href="javascript:void(0)" onClick="">退出</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span />
          <Icon className={styles.icon} type="rocket" />
        </div>
        <div className={styles.name}>
          <h1>{config.name}</h1>
          <span>{config.englishName}</span>
        </div>

        <div className={styles.menu}>
          <Menu
            selectedKeys={[selectedKeys]}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="user">
              <Link to={{ pathname: '/user' }}>用户管理</Link>
            </Menu.Item>
            <Menu.Item key="menu1">
              <Link to={{ pathname: '/menu1' }}>menu1</Link>
            </Menu.Item>
            <Menu.Item key="menu2">
              <Link to={{ pathname: '/menu2' }}>menu2</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className={styles.userinfo}>
          <Dropdown overlay={userMenu}>
            <a style={{ display: 'inline-block' }} className="ant-drop-link" href="javascript:void(0)">
              <img src={userHead} alt="" />
              <span className={styles.username}><span>管理员</span><Icon type="down" /></span>
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

HeaderLayout.propTypes = {
};

export default HeaderLayout;

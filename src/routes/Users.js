import React from 'react';
import { connect } from 'dva';
import screenfull from 'screenfull';
import { Layout, Menu, Button } from 'antd';

const { Content, Sider } = Layout;

const screenfullHandler = (event) => {
  if (screenfull.enabled) {
    // screenfull.toggle(event.target);
    screenfull.toggle();
  }
};

function Users() {
  return (
    <Layout>
      <Sider width={224} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 380, backgroundColor: '#fff' }}>
        <Button type="primary" onClick={screenfullHandler}>Screenfull</Button>
      </Content>
    </Layout>

  );
}

Users.propTypes = {
};

export default connect()(Users);

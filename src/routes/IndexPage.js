import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import styles from './IndexPage.less';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const { Content } = Layout;

function IndexPage({ children, app, loading }) {
  const { selectedKeys } = app;
  console.log('loading = ', loading);
  const headerProps = {
    selectedKeys,
  };

  return (
    <Layout>
      <Header {...headerProps} />
      <Content style={{ width: '1200px', margin: '16px auto', padding: '24px 0', backgroundColor: '#fff' }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
}

function mapStateToProps({ app, loading }) {
  return { app, loading };
}

IndexPage.propTypes = {
  children: PropTypes.element.isRequired,
  // location: PropTypes.object,
  // dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
};

export default connect(mapStateToProps)(IndexPage);

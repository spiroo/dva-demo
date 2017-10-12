
module.exports = {
  name: '迪哇黛眸',
  englishName: 'Dva Demo',
  footerText: 'Copyright © 2017 All Rights Reserved.',
  logo: '/logo.png',
  // 接口地址
  api: {
    service: 'http://jsonplaceholder.typicode.com/',
  },

  // 列表配置
  table: {
    page: 1,
    pageSize: 10,
    total: 0,
    pagination: {               // 分页条配置
      showSizeChanger: true,
      showQuickJumper: true,
      pageSizeOptions: ['5', '10', '15', '20'],
      size: 'large',
      defaultCurrent: 1,
    },
  },
};

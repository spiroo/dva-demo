
import React from 'react';
import { Pagination } from 'antd';
import styles from './Pagination.css';

function PaginationComponent({
  page,
  pageSize,
  total,
  pagination,
  pageChangeHandler,
  pageSizeChangeHandler,
 }) {
  return (
    <div className={styles.page}>
      <Pagination
        current={page}
        total={total}
        pageSize={pageSize}
        showTotal={() => `共 ${total} 条`}
        onChange={pageChangeHandler}
        onShowSizeChange={pageSizeChangeHandler}
        {...pagination}
      />
    </div>
  );
}

export default PaginationComponent;

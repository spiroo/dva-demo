
import React from 'react';
import { Form, Input, Modal } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

function AddUserModal({
  addWebsiteModalVisible,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  onOk,
  ...modalProps
}) {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return;
      }
      const data = {
        ...getFieldsValue(),
        // key: item.key,
      };
      data.address = data.address.join(' ');
      onOk(data);
    });
  };

  const modalOpts = {
    ...modalProps,
    visible: addWebsiteModalVisible,
    onOk: handleOk,
  };

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="网站名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('title', {
            initialValue: '',
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="网站链接" hasFeedback {...formItemLayout}>
          {getFieldDecorator('site', {
            initialValue: 'item.nickName',
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  );
}

export default Form.create()(AddUserModal);

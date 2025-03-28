import React, {useEffect, useState} from 'react';
import {ITEM_LAYOUT, REQUIRED} from '../../../../settings/constants';
import {Form, Radio} from 'antd';
import {
  Button,
  Modal,
  Input,
  Textarea,
} from '../../../../components/uielements/exportComponent';
import {InputFormatSpecific} from '../../../../components/uielements/exportComponent';
import {customizeItemValidator as Item} from '../../../../components/uielements/itemValidator';
import {
  customizeFormValidator as Form,
  useForm,
} from '../../../../components/uielements/formValidator';

export default (props) => {
  const [form] = useForm();
  const [isFormSuccess, setIsFormSuccess] = useState(true);

  const {dataEdit, loading, visible, action} = props;
  useEffect(() => {
    if (dataEdit && dataEdit.ID) {
      form &&
        form.setFieldsValue({
          ...dataEdit,
          TrangThai: dataEdit.TrangThai ? 1 : 0,
        });
    }
  }, []);

  const onChange = (e) => {
  };
  const onOk = async (e) => {
    e.preventDefault();
    const value = await form.validateFields();
    props.onCreate({
      ...value,
      LoaiDanhMuc: 1,
      TrangThai: Boolean(value.TrangThai),
    });
  };

  return (
    <Modal
      title={`${action === 'edit' ? 'Sửa' : 'Thêm'} thông tin Cơ Quan Đơn Vị`}
      width={450}
      visible={visible}
      onCancel={props.onCancel}
      footer={[
        <Button key="back" onClick={props.onCancel}>
          Hủy
        </Button>,
        <Button
          key="submit"
          htmlType="submit"
          type="primary"
          form="FormCoQuanDonVi"
          loading={loading}
          onClick={onOk}
          disabled={isFormSuccess}
        >
          Lưu
        </Button>,
      ]}
    >
      <Form form={form} name={'FormCoQuanDonVi'}>
        {action === 'edit' ? <Item name={'ID'} hidden /> : ''}
        <Item
          label="Mã Cơ Quan Đơn Vị"
          name={'Ma'}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <InputFormatSpecific />
        </Item>
        <Item
          label="Tên Cơ Quan Đơn Vị"
          name={'Ten'}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <Input />
        </Item>
        <Item label="Ghi Chú" name={'GhiChu'} {...ITEM_LAYOUT}>
          <Textarea />
        </Item>
        <Item label="Đang sử dụng" name={'TrangThai'} {...ITEM_LAYOUT}>
          <Radio.Group name="radiogroup" onChange={onChange}>
            <Radio value={1}>Có</Radio>
            <Radio value={0}>Không</Radio>
          </Radio.Group>
        </Item>
      </Form>
    </Modal>
  );
};

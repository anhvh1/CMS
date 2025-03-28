import React, { useEffect, useRef, useState } from "react";
import {
  ITEM_LAYOUT2,
  ITEM_LAYOUT,
  ITEM_LAYOUT_SMALL_2,
  REQUIRED,
} from "../../../../settings/constants";
import { Form, Space, DatePicker, Select } from "antd";
import {
  Button,
  Modal,
  InputFormatSpecific,
  Input,
  Radio,
} from "../../../../components/uielements/exportComponent";
import { BorderOutlined, CheckSquareOutlined } from "@ant-design/icons";
import DatePickerFormat from "../../../../components/uielements/datePickerFormat";
import { checkInputNumber } from "../../../../helpers/utility";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
import {
  _debounce,
  getInfoFromToken,
  getLocalKey,
} from "../../../../helpers/utility";
import api from "./config";
import dayjs from "dayjs";
const { Item, useForm } = Form;

export default (props) => {
  const [form] = useForm();
  // const [isFormSuccess, setIsFormSuccess] = useState(true);
  const { dataEdit, loading, visible, action } = props;
  const getCoQuanID = () => {
    if (dataEdit && dataEdit.NhomManHinhs && dataEdit.NhomManHinhs.length > 0) {
      // Assuming you want the CoQuanID from the first item in the array
      const firstNhomManHinh = dataEdit.NhomManHinhs[0];
      const CoQuanID = firstNhomManHinh.CoQuanID;
      return CoQuanID;
    }
    return null; // handle case where dataEdit or NhomManHinhs is undefined or empty
  };

  // Example usage:
  const access_token = getLocalKey("access_token");
  const dataUnzip = getInfoFromToken(access_token);
  const ListChucNang = dataUnzip?.NguoiDung?.CoQuanID;
  const coQuanID = getCoQuanID();
  useEffect(() => {
    if (dataEdit && dataEdit.ManHinhID) {
      const newNgayCongNhan = dayjs(dataEdit.NgayCongNhan).format("DD/MM/YYYY");
      form &&
        form.setFieldsValue({
          ...dataEdit,
          NgayCongNhan:
            dataEdit && dataEdit.NgayCongNhan
              ? dayjs(newNgayCongNhan, "DD/MM/YYYY")
              : "",
        });
    }
  }, []);
  useEffect(() => {
    if (dataEdit && dataEdit.NhomManHinhs && dataEdit.NhomManHinhs.length > 0) {
      const coQuanID = dataEdit.NhomManHinhs[0].CoQuanID; // Assuming you want the CoQuanID from the first item
      form.setFieldsValue({ CoQuanID: coQuanID });
    }
  }, [dataEdit]);
  const onOk = async (e) => {
    e.preventDefault();
    const value = await form.validateFields();

    // Add CoQuanID to the form values if action is 'add'
    if (action === "add") {
      value.CoQuanID = ListChucNang;
    }

    props.onCreate({
      ...value,
    });
  };

  return (
    <Modal
      title={`${action === "edit" ? "Sửa" : "Thêm mới"} màn hình`}
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
          form="formDiSanTuLieu"
          loading={loading}
          onClick={onOk}
          // disabled={isFormSuccess}
        >
          Lưu
        </Button>,
      ]}
    >
      <Form form={form} name={"formDiSanTuLieu"}>
        {action !== "add" ? (
          <Item name="ManHinhID" hidden {...REQUIRED}></Item>
        ) : null}
        {action !== "add" ? (
          <Item name="CoQuanID" hidden {...REQUIRED}></Item>
        ) : null}

        <Item
          label="Tên màn hình"
          name={"TenManHinh"}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <Input />
        </Item>

        <Item
          label="HardwareKey"
          name={"HardwareKey"}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <Input />
        </Item>
        <Item
          label="Địa chỉ mac "
          name={"DiaChiMac"}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <Input></Input>
        </Item>

        <Item
          label="Địa chỉ "
          name={"DiaChi"}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <Input></Input>
        </Item>
        <Item
          label="Công suất"
          name={"CongSuat"}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <Input></Input>
        </Item>
        <Item
          label="Hiệu điện thế "
          name={"HieuDienThe"}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <Input></Input>
        </Item>
        <Item
          label="Dòng điện "
          name={"DongDien"}
          {...ITEM_LAYOUT}
          rules={[REQUIRED]}
        >
          <Input></Input>
        </Item>
        <Item
          label="Trạng thái"
          name={"TrangThai"}
          {...REQUIRED}
          {...ITEM_LAYOUT}
        >
          <Select allowClear placeholder={"Chọn trạng thái"}>
            <Option value={true}>Hoạt động</Option>
            <Option value={false}>Không hoạt động</Option>
          </Select>
        </Item>
      </Form>
    </Modal>
  );
};

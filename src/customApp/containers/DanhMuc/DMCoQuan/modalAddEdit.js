import React, {Component, useEffect, useState} from 'react';
import {InputFormatSpecific} from '../../../../components/uielements/exportComponent';
import Constants, {
  MODAL_NORMAL,
  ITEM_LAYOUT,
  REQUIRED,
  ITEM_LAYOUT2,
  ITEM_LAYOUT_SMALL,
} from '../../../../settings/constants';
import {Row, Col} from 'antd';
import {
  Button,
  Modal,
  Input,
  Textarea,
} from '../../../../components/uielements/exportComponent';
import Checkbox from '../../../../components/uielements/checkbox';

import TreeSelect from '../../../../components/uielements/treeSelect';
import Select, {Option} from '../../../../components/uielements/select';
import {_debounce} from '../../../../helpers/utility';
import api from './config';
import layout, {StyledModalCoQuan} from './styled';
import {customizeItemValidator as Item} from '../../../../components/uielements/itemValidator';
import {
  customizeFormValidator as Form,
  useForm,
} from '../../../../components/uielements/formValidator';

const ModalEdit = ({
  visible,
  onCancel,
  dataModalEdit,
  onCreate,
  DanhSachCoQuan,
  action,
}) => {
  const [form] = useForm();
  const [capDonVi, setCapDonVi] = useState([]);
  const [thamQuyen, setThamQuyen] = useState([]);
  const [diaGioi, setDiaGioi] = useState({
    tinh: [],
    huyen: [],
    xa: [],
  });
  const [coquancha, setCoquancha] = useState();
  useEffect(() => {
    if (!dataModalEdit?.CoQuanID && DanhSachCoQuan) {
      const parentID = dataModalEdit.CoQuanChaID;
      let Parent;
      const findParentFromTree = (list, ParentID) => {
        list?.forEach((item) => {
          if (item.Children) {
            if (item.ID === ParentID) {
              Parent = item.Ten;
            } else {
              findParentFromTree(item.Children, ParentID);
            }
          } else {
            if (item.ID === ParentID) {
              Parent = item.Ten;
            }
          }
        });
      };
      findParentFromTree(DanhSachCoQuan, parentID);
      form.setFieldsValue({
        ...dataModalEdit,
        TenCoQuanCha: dataModalEdit?.CoQuanChaID
          ? dataModalEdit.TenCoQuanCha
          : DanhSachCoQuan[0]?.Ten,
        TinhID: dataModalEdit?.Data?.TinhID ? dataModalEdit.Data.TinhID : null,
      });
      api.danhSachCacCapDonVi().then((res) => setCapDonVi(res.data.Data));
      api.danhSachThamQuyen().then((res) => setThamQuyen(res.data.Data));
      api
        .danhSachDiaGioi()
        .then((res) => setDiaGioi({...diaGioi, tinh: res.data.Data}));
    } else {
      api.danhSachCacCapDonVi().then((res) => setCapDonVi(res.data.Data));
      api.danhSachThamQuyen().then((res) => setThamQuyen(res.data.Data));
      api.danhSachDiaGioi().then((res) => {
        const newDiaGioi = {...diaGioi, tinh: res.data.Data};
        setDiaGioi(newDiaGioi);
        if (dataModalEdit?.Data?.TinhID) {
          onTinhChange(dataModalEdit?.Data?.TinhID, newDiaGioi);
          if (dataModalEdit?.Data?.HuyenID) {
            onHuyenChange(dataModalEdit?.Data?.HuyenID, newDiaGioi);
          }
        }
      });
      api.chiTietCoQuan({ID: dataModalEdit?.Data?.CoQuanChaID}).then((res) => {
        setCoquancha(res.data.Data?.TenCoQuan);
        form.setFieldsValue({
          ...dataModalEdit.Data,
          TenCoQuanCha: res?.data.Data?.TenCoQuan,
          HuyenID: dataModalEdit.Data?.HuyenID
            ? dataModalEdit.Data.HuyenID
            : null,
          XaID: dataModalEdit.Data?.XaID ? dataModalEdit.Data.XaID : null,
        });
      });
    }
  }, []);

  const onOk = async (e) => {
    e.preventDefault();
    const value = await form.validateFields();
    for (const key in value) {
      if (!value[key]) {
        delete value[key];
      }
    }
    onCreate({
      ...value,
      CoQuanChaID: dataModalEdit.Data.CoQuanChaID,
      CoQuanID: dataModalEdit?.CoQuanID ? dataModalEdit?.CoQuanID : null,
    });
  };
  const onTinhChange = (value, newDiaGioi) => {
    if (value) {
      api.danhSachDiaGioi({ID: value, Cap: 2}).then((res) => {
        const diaGioi = {...newDiaGioi, huyen: res.data.Data};
        setDiaGioi(diaGioi);
      });
    }
  };
  const onHuyenChange = (value, newDiaGioi) => {
    if (value) {
      api.danhSachDiaGioi({ID: value, Cap: 3}).then((res) => {
        const diaGioi = {...newDiaGioi, xa: res.data.Data};
        setDiaGioi(diaGioi);
      });
    }
  };

  return (
    <>
      <Modal
        open={visible}
        title={action === 'add' ? 'Thêm cơ quan đơn vị' : 'Sửa cơ quan đơn vị'}
        onCancel={onCancel}
        width="900px"
        footer={[
          <Button key="back" onClick={onCancel}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            onClick={onOk}
            form="FormDMCoQuan"
          >
            Lưu
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="FormDMCoQuan"
          initialValues={{
            CQCoHieuLuc: false,
            QTVanThuTiepDan: false,
            CapUBND: false,
            QTVanThuTiepNhanDon: false,
            CapThanhTra: false,
            SuDungQuyTrinh: false,
            SuDungPM: false,
            SuDungQuyTrinhGQ: false,
            TinhID: null,
            HuyenID: null,
            XaID: null,
          }}
        >
          <Row justify="space-between" gutter={[32, 8]}>
            {/* {dataModalEdit?.TenCoQuanCha ? (
              <Col {...layout.colFull}>
                <Item
                  label="Cơ quan cha"
                  name={'TenCoQuanCha'}
                  rules={[REQUIRED]}
                  {...layout.formItem1}
                >
                  <Select disabled></Select>
                </Item>
              </Col>
            ) : null} */}
            {dataModalEdit?.CoQuanID !== 1 && dataModalEdit?.TenCoQuanCha ? (
              <Col {...layout.colFull}>
                <Item
                  label="Cơ quan cha"
                  name={'TenCoQuanCha'}
                  rules={[REQUIRED]}
                  {...layout.formItem1}
                >
                  <Select disabled>{/* <Option>{coquancha}</Option> */}</Select>
                </Item>
              </Col>
            ) : null}
            <Col {...layout.colHaft}>
              <Item
                label="Mã cơ quan"
                name={'MaCQ'}
                rules={[REQUIRED]}
                {...layout.formItem2}
              >
                <InputFormatSpecific />
              </Item>
            </Col>
            <Col {...layout.colHaft}>
              <Item
                label="Tên cơ quan"
                name={'TenCoQuan'}
                rules={[REQUIRED]}
                labelAlign="left"
                {...layout.formItem2}
              >
                <Input />
              </Item>
            </Col>
            <Col {...layout.colHaft}>
              <Item
                label="Cấp"
                name={'CapID'}
                rules={[REQUIRED]}
                {...layout.formItem2}
              >
                <Select>
                  {capDonVi?.map((item, index) => (
                    <Option key={index} value={item.Cap}>
                      {item.TenCap}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            {/* <Col {...layout.colHaft}>
              <Item
                label="Thẩm quyền"
                name={'ThamQuyenID'}
                rules={[REQUIRED]}
                {...layout.formItem2}
              >
                <Select>
                  {thamQuyen?.map((item, index) => (
                    <Option key={index} value={item.ThamQuyenID}>
                      {item.TenThamQuyen}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col> */}
          </Row>
          <Row justify="space-between" gutter={[10, 8]}>
            <Col {...layout.colThirt}>
              <Item
                label="Tỉnh"
                name={'TinhID'}
                labelAlign="left"
                {...layout.formItem3}
              >
                <Select onChange={onTinhChange} listHeight={100} allowClear>
                  {diaGioi.tinh?.map((item, index) => (
                    <Option key={index} value={item.ID}>
                      {item.Ten}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col {...layout.colThirt}>
              <Item
                label="Huyện"
                name={'HuyenID'}
                labelAlign="right"
                {...layout.formItem3}
              >
                <Select
                  allowClear
                  name={'HuyenID'}
                  listHeight={100}
                  onChange={onHuyenChange}
                >
                  {diaGioi.huyen?.map((item, index) => (
                    <Option key={index} value={item.ID}>
                      {item.Ten}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col {...layout.colThirt}>
              <Item
                label="Xã"
                name={'XaID'}
                labelAlign="right"
                {...layout.formItem3}
              >
                <Select listHeight={100} allowClear>
                  {diaGioi.xa?.map((item, index) => (
                    <Option key={index} value={item.ID}>
                      {item.Ten}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
          </Row>
          <StyledModalCoQuan>
            <Row className="checkbox-coquan">
              <Col span={12}>
                <Item name="CQCoHieuLuc" valuePropName="checked" label="">
                  <Checkbox>Cơ quan có hiệu lực</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="QTVanThuTiepDan" valuePropName="checked">
                  <Checkbox>Quy trình cán bộ tiếp dân</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="CapUBND" valuePropName="checked">
                  <Checkbox>Cơ quan cấp UBND</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="QTVanThuTiepNhanDon" valuePropName="checked">
                  <Checkbox>Quy trình văn thư tiếp nhận đơn</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="CapThanhTra" valuePropName="checked">
                  <Checkbox>Cơ quan cấp thanh tra</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="SuDungQuyTrinh" valuePropName="checked">
                  <Checkbox>
                    Sử dụng quy trình tiếp công dân, xử lí đơn phức tạp
                  </Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="SuDungPM" valuePropName="checked">
                  <Checkbox>Cơ quan thuộc hệ thống phần mềm</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="SuDungQuyTrinhGQ" valuePropName="checked">
                  <Checkbox>Sử dụng quy trình giải quyết phức tạp</Checkbox>
                </Item>
              </Col>
            </Row>
          </StyledModalCoQuan>
        </Form>
      </Modal>
    </>
  );
};

export default React.memo(ModalEdit);

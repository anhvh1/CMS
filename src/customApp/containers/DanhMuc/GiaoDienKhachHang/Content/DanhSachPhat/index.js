import { Modal, Table, Tooltip, message } from "antd";
import actions from "../../../../../redux/DanhMuc/QLThuVien/actions";
import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import LayoutWrapper from "../../../../../../components/utility/layoutWrapper";
import PageHeader from "../../../../../../components/utility/pageHeader";
import PageAction from "../../../../../../components/utility/pageAction";
import Box from "../../../../../../components/utility/box";
import BoxFilter from "../../../../../../components/utility/boxFilter";
import BoxTable from "../../../../../../components/utility/boxTable";
import {
  Button,
  InputSearch,
  Select,
} from "../../../../../../components/uielements/exportComponent";
import Checkbox from "../../../../../../components/uielements/checkbox";
import Switches from "../../../../../../components/uielements/switch";
import {
  changeUrlFilter,
  exportExcel,
  getDefaultPageSize,
  getFilterData,
  getRoleByKey,
} from "../../../../../../helpers/utility";
import { useKey } from "../../../../../CustomHook/useKey";
import queryString from "query-string";
import api from "./config";
import moment from "moment";
import ModalAddEdit from "./modalAddEdit";
import ModalThietLap from "./modalThietLap";

import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  FieldTimeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import PageWrap from "../../../../../../components/utility/PageWrap";
const QLThuVien = (props) => {
  // const [filterData, setFilterData] = useState(
  //   queryString.parse(props.location.search),
  // );
  const { filterData, setFilterData } = props;
  const [dataModalAddEdit, setDataModalAddEdit] = useState({});
  const [visibleModalAddEdit, setVisibleModalAddEdit] = useState(false);
  const [action, setAction] = useState("");
  const [modalKey, inceaseModalKey] = useKey();
  const [selectedRowsKey, setSelectedRowsKey] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  document.title = "Quản Lý Danh Sách Phát";

  useEffect(() => {
    changeUrlFilter(filterData);
    props.getList(filterData);
    props.getInitData(filterData);
  }, [filterData]);

  useEffect(() => {
    props.getList(filterData);
    props.getInitData(filterData);
    dispatch(actions.getInitData(filterData));
  }, []);

  const onTableChange = (pagination, filters, sorter) => {
    let oldFilterData = filterData;
    let onOrder = { pagination, filters, sorter };
    let newFilterData = getFilterData(oldFilterData, null, onOrder);

    setFilterData(newFilterData);
    setSelectedRowsKey([]);
  };

  const onFilter = (value, property) => {
    let oldFilterData = filterData;
    let onFilter = { value, property };
    let newfilterData = getFilterData(oldFilterData, onFilter, null);
    //get filter data
    setFilterData(newfilterData);
    setSelectedRowsKey([]);
  };

  const showModalAdd = () => {
    setAction("add");
    setDataModalAddEdit({});
    inceaseModalKey();
    setVisibleModalAddEdit(true);
  };

  const deleteModalAddEdit = (DanhSachPhatID) => {
    Modal.confirm({
      title: "Xóa Dữ Liệu",
      content: "Bạn có muốn xóa danh sách phát này không?",
      cancelText: "Không",
      okText: "Có",

      onOk: () => {
        setConfirmLoading(true);
        api
          .xoaQLThuVien(DanhSachPhatID, {})
          .then((res) => {
            if (res.data.Status > 0) {
              setConfirmLoading(false);
              props.getList(filterData);
              message.destroy();
              message.success(res.data.Message);
              // setFilterData({
              //   ...filterData,
              //   PageNumber:
              //     Math.ceil((TotalRow - 1) / filterData.PageSize) <
              //     filterData.PageNumber
              //       ? Math.ceil((TotalRow - 1) / filterData.PageSize)
              //       : filterData.PageNumber,
              // });
            } else {
              message.destroy();
              message.error(res.data.Message);
            }
          })
          .catch((error) => {
            message.destroy();
            message.error(error.toString());
          });
      },
    });
  };

  const showModalEdit = (danhSachPhatID) => {
    const DanhSachPhatID = danhSachPhatID;
    setAction("edit");
    api
      .chiTietQLThuVien({ DanhSachPhatID })
      .then((res) => {
        if (res.data.Status > 0) {
          setDataModalAddEdit(res.data.Data);
          inceaseModalKey();
          setVisibleModalAddEdit(true);
        } else {
          message.destroy();
          message.error(res.data.Message);
        }
      })
      .catch((error) => {
        message.destroy();
        message.error(error.toString());
      });
  };

  const hideModalAddEdit = () => {
    setSelectedRowsKey([]);
    setDataModalAddEdit({});
    setVisibleModalAddEdit(false);
  };

  const submitModalAddEdit = (data) => {
    setConfirmLoading(true);
    if (action === "add") {
      api
        .themQLThuVien(data)
        .then((res) => {
          setConfirmLoading(false);
          if (res.data.Status > 0) {
            message.destroy();
            message.success(res.data.Message);
            hideModalAddEdit();
            props.getList(filterData);
          } else {
            setConfirmLoading(false);
            message.destroy();
            message.error(res.data.Message);
          }
        })
        .catch((error) => {
          setConfirmLoading(false);
          message.destroy();
          message.error(error.toString());
        });
    }
    if (action === "edit") {
      api
        .suaQLThuVien(data)
        .then((res) => {
          if (res.data.Status > 0) {
            setConfirmLoading(false);
            message.destroy();
            message.success(res.data.Message);
            hideModalAddEdit();
            props.getList(filterData);
          } else {
            setConfirmLoading(false);
            message.destroy();
            message.error(res.data.Message);
          }
        })
        .catch((error) => {
          setConfirmLoading(false);
          message.destroy();
          message.error(error.toString());
        });
    }
  };
  const [actionthietlap, setActionThietLap] = useState("");
  const [visibleModalThietLap, setVisibleModalThietLap] = useState(false);

  const [confirmLoadingThietLap, setConfirmLoadingThietLap] = useState(false);
  const [modalThietLap, inceaseModalThietLap] = useKey();

  const [dataModalThietLap, setDataModalThietLap] = useState({});
  const [dataModalDanhSachMediaID, setDataModalDanhSachMediaID] = useState({});

  const hideModalThietLap = () => {
    setVisibleModalThietLap(false);
  };
  const submitModalThietLap = (data, FileData) => {
    setConfirmLoadingThietLap(true);
    props.getList(filterData);
    message.success("Thiết lập Media thành công");
  };
  const showModalThietLap = (DanhSachPhatID) => {
    // const DanhSachPhatID = danhSachPhatID;
    setActionThietLap("thietlap");
    api
      .chiTietThietLap({ DanhSachPhatID })
      .then((res) => {
        if (res.data.Status > 0) {
          setDataModalThietLap(res.data.Data.DanhSachMediaID);
          setDataModalDanhSachMediaID(res.data.Data);
          inceaseModalThietLap();
          setVisibleModalThietLap(true);
        } else {
          message.destroy();
          message.error(res.data.Message);
        }
      })
      .catch((error) => {
        message.destroy();
        message.error(error.toString());
      });
  };
  const [selectedDanhSachPhatID, setSelectedDanhSachPhatID] = useState(null);
  const renderThaoTac = (record) => {
    return (
      <div className={"action-btn"}>
        {/* {role?.edit ? ( */}
        <Tooltip title={"Sửa"}>
          <EditOutlined onClick={() => showModalEdit(record.DanhSachPhatID)} />
        </Tooltip>{" "}
        {/* ) : ( */}
        {/* '' */}
        {/* )} */}
        {/* {role?.delete ? ( */}
        <Tooltip title={"Xóa"}>
          <DeleteOutlined
            onClick={() => deleteModalAddEdit(record.DanhSachPhatID)}
          />
        </Tooltip>{" "}
        {/* ) : (
          ''
        )} */}
        <Tooltip title={"Thiết lập"}>
          <SettingOutlined
            onClick={() => showModalThietLap(record.DanhSachPhatID)}
          />
        </Tooltip>
      </div>
    );
  };
  const {
    DanhSachQLThuVien,
    DanhSachDMThuVien,
    DanhSachMedia,
    DanhSachNguoiDung,
    TotalRow,
    role,
  } = props;
  const PageNumber = filterData.PageNumber
    ? parseInt(filterData.PageNumber)
    : 1;
  const PageSize = filterData.PageSize
    ? parseInt(filterData.PageSize)
    : getDefaultPageSize();

  const columns = [
    {
      title: "Số thứ tự",
      width: "5%",
      align: "center",
      render: (text, record, index) => (
        <span>{(PageNumber - 1) * PageSize + (index + 1)}</span>
      ),
    },
    {
      title: "Tên danh sách phát",
      dataIndex: "TenDanhSachPhat",
      align: "center",
      width: "30%",
    },
    {
      title: "Tổng thời gian",
      dataIndex: "TongThoiGianPhat",
      align: "center",
      width: "17%",
    },
    {
      title: "Tổng số Media",
      dataIndex: "TongSoMedia",
      align: "center",
      width: "8%",
    },
    {
      title: "Khách hàng",
      dataIndex: "TenNguoiDung",
      align: "center",
      width: "15%",
    },
    {
      title: "Trạng thái sử dụng",
      dataIndex: "TrangThai",
      align: "center",
      width: "12%",
      render: (TrangThai) => {
        if (TrangThai === true) {
          return <span>Đang sử dụng</span>;
        } else if (TrangThai === false) {
          return <span>Không sử dụng</span>;
        } else {
          return <span>Trạng thái khác</span>; // Handle any other values if necessary
        }
      },
    },
    {
      title: "Thao tác",
      width: "10%",
      align: "center",
      margin: "15px",
      render: (text, record) => renderThaoTac(record),
    },
  ];
  return (
    <LayoutWrapper>
      <PageWrap>
        {/* <PageHeader>Quản Lý Danh Sách Phát</PageHeader> */}
        <PageAction>
          {/* {role ? (
            role.add ? ( */}
          {/* <Button type="primary" onClick={showModalAdd}>
                <PlusOutlined />
                Thêm mới
              </Button> */}

          {/* ) : (
              ''
            )
          ) : (
            ''
          )} */}
        </PageAction>
      </PageWrap>
      <Box>
        <BoxFilter
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 15,
            alignItems: "center",
          }}
        >
          <InputSearch
            defaultValue={filterData.Keyword}
            placeholder={"Nhập tên danh sách phát"}
            style={{ width: 300 }}
            onSearch={(value) => onFilter(value, "Keyword")}
            allowClear
          />
          <div
            style={{ color: "white", cursor: "context-menu" }}
            onClick={showModalAdd}
          >
            <PlusOutlined /> Thêm mới
          </div>
        </BoxFilter>
        <BoxTable
          columns={columns}
          dataSource={DanhSachQLThuVien}
          onChange={onTableChange}
          pagination={{
            showSizeChanger: true,
            showTotal: (total, range) =>
              `Từ ${range[0]} đến ${range[1]} trên ${total} kết quả`,
            total: TotalRow,
            current: PageNumber,
            pageSize: PageSize,
          }}
          rowKey={(record) => record.ID}
        />
      </Box>
      <ModalAddEdit
        visible={visibleModalAddEdit}
        dataEdit={dataModalAddEdit}
        action={action}
        loading={confirmLoading}
        key={modalKey}
        onCreate={submitModalAddEdit}
        onCancel={hideModalAddEdit}
        danhSachDMThuVien={DanhSachDMThuVien}
        DanhSachNguoiDung={DanhSachNguoiDung}
      />
      <ModalThietLap
        visible={visibleModalThietLap}
        dataThietLap={dataModalThietLap}
        dataModalDanhSachMediaID={dataModalDanhSachMediaID}
        action={actionthietlap}
        loading={confirmLoading}
        key={modalKey}
        onCreate={submitModalThietLap}
        onCancel={hideModalThietLap}
        danhSachDMThuVien={DanhSachDMThuVien}
        DanhSachMedia={DanhSachMedia}
        filterData={filterData}
        onFilter={onFilter}
      />
    </LayoutWrapper>
  );
};

function mapStateToProps(state) {
  return {
    ...state.QLThuVien,
    role: getRoleByKey(state.Auth.role, "danh-muc-chuc-vu"),
  };
}

export default connect(mapStateToProps, actions)(QLThuVien);

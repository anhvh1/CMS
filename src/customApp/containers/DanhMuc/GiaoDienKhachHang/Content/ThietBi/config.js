import {
  apiGetAuth,
  apiPostAuth,
  apiDownloadAuth,
} from "../../../../../../api";
import server from "../../../../../../settings";
import { getDefaultPageSize } from "../../../../../../helpers/utility";

export const apiUrl = {
  danhsachmanhinh: server.v2Url + "QuanLyManHinh/GetListPaging",
  themmanhinh: server.v2Url + "QuanLyManHinh/Insert",
  chitietmanhinh: server.v2Url + "QuanLyManHinh/ChiTiet",
  chitietnhommanhinh: server.v2Url + "QuanLyNhomManHinh/ChiTiet",
  UpdateNhomManHinh: server.v2Url + "QuanLyNhomManHinh/UpdateNhomManHinh",
  suamanhinh: server.v2Url + "QuanLyManHinh/Update",
  xoamanhinh: server.v2Url + "QuanLyManHinh/Delete",
  danhsachnhommanhinh: server.v2Url + "QuanLyNhomManHinh/GetListPaging",
  xoanhommanhinh: server.v2Url + "QuanLyNhomManHinh/Delete",
  themnhommanhinh: server.v2Url + "QuanLyNhomManHinh/Insert",
  chupanh: server.v1Url + "ManHinh/TakeScreenshot",
};
const api = {
  danhSachManHinh: (param) => {
    return apiGetAuth(apiUrl.danhsachmanhinh, {
      ...param,
      PageNumber: param.PageNumber ? param.PageNumber : 1,
      PageSize: param.PageSize ? param.PageSize : getDefaultPageSize(),
    });
  },
  danhSachNhomManHinh: (param) => {
    return apiGetAuth(apiUrl.danhsachnhommanhinh, {
      ...param,
      PageNumber: param.PageNumber ? param.PageNumber : 1,
      PageSize: param.PageSize ? param.PageSize : getDefaultPageSize(),
    });
  },
  themManHinh: (param) => {
    return apiPostAuth(apiUrl.themmanhinh, {
      ...param,
    });
  },
  chiTietManHinh: (param) => {
    return apiGetAuth(apiUrl.chitietmanhinh, param);
  },
  chiTietNhomManHinh: (param) => {
    return apiGetAuth(apiUrl.chitietnhommanhinh, param);
  },
  suaManHinh: (param) => {
    return apiPostAuth(apiUrl.suamanhinh, {
      ...param,
    });
  },
  ChupAnh: (param) => {
    return apiPostAuth(apiUrl.chupanh, {
      ...param,
    });
  },
  UpdateNhomManHinh: (param) => {
    return apiPostAuth(apiUrl.UpdateNhomManHinh, {
      ...param,
    });
  },
  xoaManHinh: (manHinhID, param) => {
    const url = `${apiUrl.xoamanhinh}?manHinhID=${manHinhID}`;
    return apiPostAuth(url, param);
  },
  xoaNhomManHinh: (nhomManHinhID, param) => {
    const url = `${apiUrl.xoanhommanhinh}?nhomManHinhID=${nhomManHinhID}`;
    return apiPostAuth(url, param);
  },
  themNhomManHinh: (param) => {
    return apiPostAuth(apiUrl.themnhommanhinh, {
      ...param,
    });
  },
};

export default api;

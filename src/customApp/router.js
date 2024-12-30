import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('./containers/DashBoash')),
  },
  // sửa chữ "DashBoash" thành đường dẫn tới file danh mục
  {
    path: 'tai-lieu-huong-dan',
    component: asyncComponent(() =>
      import('./containers/HeThong/QLHuongDanSuDung'),
    ),
  },
  {
    path: 'danh-muc-co-quan',
    component: asyncComponent(() => import('./containers/DanhMuc/QLHienVatBaoTang')),
  },

  {
    path: 'quan-ly-nguoi-dung',
    component: asyncComponent(() =>
      import('./containers/HeThong/UserManagement'),
    ),
  },
  {
    path: 'tham-so-he-thong',
    component: asyncComponent(() =>
      import('./containers/HeThong/QuanLyThamSoHeThong'),
    ),
  },
  {
    path: 'sao-luu-du-lieu',
    component: asyncComponent(() =>
      import('./containers/HeThong/QuanTriDuLieu'),
    ),
  },
  {
    path: 'nhat-ky-he-thong',
    component: asyncComponent(() =>
      import('./containers/HeThong/NhatKyHeThong'),
    ),
  },
  {
    path: 'phan-quyen',
    component: asyncComponent(() => import('./containers/HeThong/QLPhanQuyen')),
  },
  {
    path: 'quan-ly-media',
    component: asyncComponent(() => import('./containers/DanhMuc/DMChiTieu')),
  },
  {
    path: 'danh-muc-cot',
    component: asyncComponent(() => import('./containers/DanhMuc/DMTieuChi')),
  },
  {
    path: 'danh-muc-gia-tri',
    component: asyncComponent(() => import('./containers/DanhMuc/DMPhanLoai')),
  },

  {
    path: 'danh-muc-ky-bao-cao',
    component: asyncComponent(() => import('./containers/DanhMuc/DMThoiGian')),
  },

  {
    path: 'danh-muc-pham-vi',
    component: asyncComponent(() => import('./containers/DanhMuc/DMPhamVi')),
  },

  {
    path: 'danh-muc-gia-tri',
    component: asyncComponent(() => import('./containers/DanhMuc/DMGiaTri')),
  },
  {
    path: 'quan-ly-man-hinh-a',
    component: asyncComponent(() => import('./containers/DanhMuc/QuanLyManHinh')),
  },
  // {
  //   path: 'danh-muc-quan-ly-di-san-tu-lieu',
  //   component: asyncComponent(() =>
  //     import('./containers/DanhMuc/QuanLyDiSanTuLieu'),
  //   ),
  // },
  {
    path: 'danh-muc-cap-di-tich-xep-hang',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/DMCapDiTichXepHang'),
    ),
  },
  {
    path: 'danh-muc-loai-di-tich',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/DMLoaiDiTich'),
    ),
  },
  {
    path: 'danh-muc-thu-vien',
    component: asyncComponent(() => import('./containers/DanhMuc/DMThuVien')),
  },
  {
    path: 'quan-ly-danh-sach-phat',
    component: asyncComponent(() => import('./containers/DanhMuc/QLThuVien')),
  },
  {
    path: 'quan-ly-license',
    component: asyncComponent(() => import('./containers/DanhMuc/QLLicense')),
  },
  {
    path: 'quan-ly-di-tich-toan-tinh',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/QLDiTichToanTinh'),
    ),
  },
  {
    path: 'quan-ly-di-san-tu-lieu',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/QuanLyDiSanTuLieu'),
    ),
  },
  {
    path: 'quan-ly-nhan-luc-thu-vien',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/QLNhanLucThuVien'),
    ),
  },
  {
    path: 'quan-ly-bao-vat-quoc-gia',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/QLBaoVatQuocGia'),
    ),
  },
  {
    path: 'di-san-van-hoa-phi-vat-the',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/QLDanhMucDiSanVanHoaPhiVatThe'),
    ),
  },
  {
    path: 'quan-ly-lich-phat-2',
    component: asyncComponent(() => import('./containers/DanhMuc/QLNgheNhan')),
  },
  {
    path: 'quan-ly-hien-vat-bao-tang',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/QLHienVatBaoTang'),
    ),
  },
  {
    path: 'quan-ly-di-san-van-hoa-phi-vat-the',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/QLDiSanVanHoaPhiVatThe'),
    ),
  },
  {
    path: 'quan-ly-bao-tang',
    component: asyncComponent(() => import('./containers/DanhMuc/QLBaoTang')),
  },
  {
    path: 'quan-ly-man-hinh',
    component: asyncComponent(() => import('./containers/DanhMuc/QuanLyManHinh')),
  },
  {
    path: 'quan-ly-nhom-man-hinh',
    component: asyncComponent(() => import('./containers/DanhMuc/QuanLyNhomManHinh')),
  },
  {
    path: 'danh-muc-loai-mau-phieu',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/DMLoaiMauPhieu'),
    ),
  },
  {
    path: 'danh-muc-di-san-tu-lieu',
    component: asyncComponent(() =>
      import('./containers/DanhMuc/DMDiSanTuLieu'),
    ),
  },
  {
    path: 'cau-hinh-dang-nhap',
    component: asyncComponent(() =>
      import('./containers/HeThong/CauHinhDangNhap'),
    ),
  },
];
export default routes;
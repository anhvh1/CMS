const actions = {
  TRACUU_GET_INIT_REQUEST: 'TRACUU_GET_INIT_REQUEST',
  TRACUU_GET_INIT_REQUEST_SUCCESS: 'TRACUU_GET_INIT_REQUEST_SUCCESS',
  TRACUU_GET_INIT_REQUEST_ERROR: 'TRACUU_GET_INIT_REQUEST_ERROR',
  getInitData: (filterData) => ({
    type: actions.TRACUU_GET_INIT_REQUEST,
    payload: {filterData},
  }),

  TRACUU_PUBLIC_GET_LIST_REQUEST: 'TRACUU_PUBLIC_GET_LIST_REQUEST',
  TRACUU_PUBLIC_GET_LIST_REQUEST_SUCCESS:
    'TRACUU_PUBLIC_GET_LIST_REQUEST_SUCCESS',
  TRACUU_PUBLIC_GET_LIST_REQUEST_ERROR: 'TRACUU_PUBLIC_GET_LIST_REQUEST_ERROR',
  getListPubLic: (filterData) => ({
    type: actions.TRACUU_PUBLIC_GET_LIST_REQUEST,
    payload: {filterData},
  }),

  TRINHTUTHUTUC_GET_LIST_REQUEST: 'TRINHTUTHUTUC_GET_LIST_REQUEST',
  TRINHTUTHUTUC_GET_LIST_REQUEST_SUCCESS:
    'TRINHTUTHUTUC_GET_LIST_REQUEST_SUCCESS',
  TRINHTUTHUTUC_GET_LIST_REQUEST_ERROR: 'TRINHTUTHUTUC_GET_LIST_REQUEST_ERROR',
  getDanhSachTrinhTuThuTuc: (filterData) => ({
    type: actions.TRINHTUTHUTUC_GET_LIST_REQUEST,
    payload: {filterData},
  }),

  LICHTIEPDAN_GET_LIST_REQUEST: 'LICHTIEPDAN_GET_LIST_REQUEST',
  LICHTIEPDAN_GET_LIST_REQUEST_SUCCESS: 'LICHTIEPDAN_GET_LIST_REQUEST_SUCCESS',
  LICHTIEPDAN_GET_LIST_REQUEST_ERROR: 'LICHTIEPDAN_GET_LIST_REQUEST_ERROR',
  getDanhSachLichTiepDan: (filterData) => ({
    type: actions.LICHTIEPDAN_GET_LIST_REQUEST,
    payload: {filterData},
  }),

  LICHTIEPDAN_CLEAR: 'LICHTIEPDAN_CLEAR',
  clear: (filterData) => ({
    type: actions.LICHTIEPDAN_CLEAR,
  }),
};
export default actions;

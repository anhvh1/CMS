import actions from './actions';

const initState = {
  role: {view: 0, add: 0, edit: 0, delete: 0},
  DanhSachLicense: [],
  TotalRow: 0,
  TableLoading: false,
};

export default function Reducer(state = initState, action) {
  const {type, payload} = action;
  switch (type) {
     //get initData
     case actions.LICENSE_GET_INIT_DATA_REQUEST:
      return {
        ...state,
      };
    case actions.LICENSE_GET_INIT_DATA_REQUEST_SUCCESS:
      return {
        ...state,
      };
    case actions.LICENSE_GET_INIT_DATA_REQUEST_ERROR:
      return {
        ...state,
      };
    //get list
    case actions.LICENSE_GET_LIST_REQUEST:
      return {
        ...state,
        TableLoading: true,
      };
    case actions.LICENSE_GET_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        DanhSachLicense: payload.DanhSachLicense,
        // AllHuongDan: payload.AllHuongDan,
        TotalRow: payload.TotalRow,
        TableLoading: false,
      };
    case actions.LICENSE_GET_LIST_REQUEST_ERROR:
      return {
        ...state,
        DanhSachLicense: [],
        TotalRow: 0,
        TableLoading: false,
      };
    default:
      return state;
  }
}

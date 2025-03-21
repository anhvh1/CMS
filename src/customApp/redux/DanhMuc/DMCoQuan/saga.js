import {all, takeEvery, put, call} from 'redux-saga/effects';
import api from '../../../containers/DanhMuc/DMCoQuan/config';
import actions from './actions';
import {formatTreeDataCoQuan} from '../../../../helpers/utility';

function* getInitData({payload}) {
  try {
    //data co quan
    const response = yield call(api.danhSachCoQuan, payload.filterData);
    let resultData = {
      DanhSachCoQuan: [],
      expandedKeys: [],
    };
    if (response.data.Data) {
      resultData = yield formatTreeDataCoQuan(response.data.Data);
    }
    yield put({
      type: actions.COQUAN_GET_INIT_DATA_REQUEST_SUCCESS,
      payload: {
        DanhSachCoQuan: resultData.ListData,
        // DanhSachDiaGioi,
        expandedKeys: resultData.expandedKeys,
      },
    });
  } catch (e) {
    yield put({
      type: actions.COQUAN_GET_INIT_DATA_REQUEST_ERROR,
    });
  }
}

function* getList({payload}) {
  try {
    const response = yield api.danhSachCoQuan(payload.filterData);
    const resultData = yield formatTreeDataCoQuan(response.data.Data);
    yield put({
      type: actions.COQUAN_GET_LIST_REQUEST_SUCCESS,
      payload: {
        DanhSachCoQuan: resultData.ListData,
        expandedKeys: resultData.expandedKeys,
      },
    });
  } catch (e) {
    yield put({
      type: actions.COQUAN_GET_LIST_REQUEST_ERROR,
    });
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(actions.COQUAN_GET_INIT_DATA_REQUEST, getInitData),
  ]);
  yield all([yield takeEvery(actions.COQUAN_GET_LIST_REQUEST, getList)]);
}

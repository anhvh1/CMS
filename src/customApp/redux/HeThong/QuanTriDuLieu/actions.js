import {getRoleByKey} from '../../../../helpers/utility';

const actions = {
  SAOLUU_GET_INIT_DATA_REQUEST: 'SAOLUU_GET_INIT_DATA_REQUEST',
  SAOLUU_GET_INIT_DATA_REQUEST_SUCCESS: 'SAOLUU_GET_INIT_DATA_REQUEST_SUCCESS',
  SAOLUU_GET_INIT_DATA_REQUEST_ERROR: 'SAOLUU_GET_INIT_DATA_REQUEST_ERROR',
  getInitData: (filterData) => {
    return (disPatch, getState) => {
      disPatch({
        type: actions.SAOLUU_GET_INIT_DATA_REQUEST,
        payload: {filterData},
      });
    };
  },

  SAOLUU_GET_LIST_REQUEST: 'SAOLUU_GET_LIST_REQUEST',
  SAOLUU_GET_LIST_REQUEST_SUCCESS: 'SAOLUU_GET_LIST_REQUEST_SUCCESS',
  SAOLUU_GET_LIST_REQUEST_ERROR: 'SAOLUU_GET_LIST_REQUEST_ERROR',
  getList: (filterData) => ({
    type: actions.SAOLUU_GET_LIST_REQUEST,
    payload: {filterData},
  }),
  //GET NOTIFICATION
  getNotifications: () => ({type: 'GET_NOTIFICATION_REQUEST_TO_APP_SAGA'}),
};
export default actions;

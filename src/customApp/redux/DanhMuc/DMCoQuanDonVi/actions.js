const actions = {
  COQUANDONVI_GET_INIT_DATA_REQUEST: 'COQUANDONVI_GET_INIT_DATA_REQUEST',
  COQUANDONVI_GET_INIT_DATA_REQUEST_SUCCESS: 'COQUANDONVI_GET_INIT_DATA_REQUEST_SUCCESS',
  COQUANDONVI_GET_INIT_DATA_REQUEST_ERROR: 'COQUANDONVI_GET_INIT_DATA_REQUEST_ERROR',

  getData: (filterData) => ({
    type: actions.COQUANDONVI_GET_INIT_DATA_REQUEST,
    payload: {filterData},
  }),
};

export default actions;
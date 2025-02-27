import {Map} from 'immutable';
import {store} from '../redux/store';
import {debounce} from 'lodash';
import {fileUploadLimit} from '../settings/constants';
import {message} from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
import {jwtDecode} from 'jwt-decode';
import auth_actions from '../redux/auth/actions';
import Pako from 'pako';

export const regaxString = /[a-zA-Z]/;
export const regaxSpecialCharacters = /[<>!@#$%^&*]/;
export const regaxEmailSpecialCharacters = /[<>!#$%^&*]/;
export const regaxSpace = /\s+/g;

export const getPath = (url) => {
  if (url) {
    const path = url.slice(url.lastIndexOf('/') + 1);
    return path;
  }
};

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const hasStringCharacters = (string) => {
  const pattern = regaxString; // Matches any of the specified string characters
  return pattern.test(string);
};

export function hasNumberCharacters(string) {
  const pattern = /\d/; // Matches any of the specified number characters
  return pattern.test(string);
}

export function getInfoByAccessToken() {
  const access_token = localStorage.getItem('access_token');
  try {
    const info = jwtDecode(access_token);
    return {
      user: info,
    };
  } catch {
    localStorage.clear();
    auth_actions.logout();
    store.dispatch({
      type: auth_actions.LOGOUT,
    });
    message.destroy();
    message.warning('Token đã hết hạn vui lòng đăng nhập lại');
  }
}

export function numberToAlphabet(num) {
  if (num >= 1) {
    const quotient = Math.floor((num - 1) / 26);
    const remainder = (num - 1) % 26;
    const letter = String.fromCharCode(65 + remainder);
    if (quotient === 0) {
      return letter;
    } else {
      return letter + quotient.toString();
    }
  } else {
    return 'Không hợp lệ';
  }
}

export function ConvertNumberToRoman(num) {
  if (isNaN(num)) return NaN;
  let digits = String(+num).split(''),
    key = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
      '',
      'X',
      'XX',
      'XXX',
      'XL',
      'L',
      'LX',
      'LXX',
      'LXXX',
      'XC',
      '',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
    ],
    roman = '',
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
}

export function hasAllNumberCharacters(string) {
  const pattern = /^\d+$/; // Matches any of the specified number characters
  return pattern.test(string);
}

export const hasSpecialCharacters = (string, type = null) => {
  if (type === 'email') {
    const pattern = regaxEmailSpecialCharacters;
    return pattern.test(string);
  }
  const pattern = regaxSpecialCharacters;

  return pattern.test(string);
  // return true;
};

export const handleChangedFields = (
  form,
  setDisabled,
  idForm,
  changedFields,
  allFields,
) => {
  const formElement = document.getElementById(idForm);
  const ListRequired = formElement?.querySelectorAll('.isRequired');
  const ListFieldsError = form?.getFieldsError();
  let valueArr = [];
  ListRequired?.forEach((item) => {
    if (item) {
      const input = item?.querySelector('input[id]');
      let id = input?.getAttribute('id');
      let name = '';
      if (id?.includes('_')) {
        name = id.slice(id?.indexOf('_') + 1);
      } else {
        name = id;
      }
      const valueForm = form?.getFieldValue(name);
      const error = form?.getFieldError(name);
      valueArr.push(
        valueForm?.toString()?.length > 0 && error?.length < 1 ? true : false,
      );
    }
  });
  const checkRequired = valueArr.every((item) => item === true);
  const check = ListFieldsError?.every((item) => item?.errors?.length < 1);
  const button = document.querySelector(`button[form="${idForm}"]`);
  if (button) {
    if (check && checkRequired) {
      button.disabled = false;
      // setDisabled(false);
    } else {
      button.disabled = true;
      // setDisabled(true);
    }
  }
};

export const checkFieldsValidator = (rule, value, callback, length, name) => {
  if (value?.length > length) {
    callback(`${name} không được dài quá ${length} ký tự`);
  }
  if (name === 'Email') {
    if (value && hasSpecialCharacters(value, 'email')) {
      callback(`${name} không thể chứa ký tự đặc biệt`);
    }
  } else {
    if (value && hasSpecialCharacters(value)) {
      callback(`${name} không thể chứa ký tự đặc biệt`);
    }
  }
  callback();
};

export const formatFieldsValidator = (callback, value, name) => {
  const stringClone = value.slice(0);
  if (Boolean(hasSpecialCharacters(value))) {
    message.destroy();
    message.warning(`Không được nhập ký tự đặc biệt trong ${name}`);
    const newValue = stringClone.replace(regaxSpecialCharacters, '');
    callback(newValue);
  } else {
    callback(value);
  }
};

export function _debounce(callback, time = 100) {
  return debounce(callback, time);
}

export const disabledDate = (current, nextDate, type) => {
  // Can not select days before today and today
  return current && current.valueOf() > moment(nextDate, 'MM/DD/YYYY');
};

export const formatDate = (date) => {
  if (date) {
    const arrDate = dayjs(date).format('DD/MM/YYYY').split('/');
    const newStrDate = `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`;
    return newStrDate;
  }
  return null;
};

export function formatNumberStr(num) {
  if (num) {
    const options = {
      useGrouping: true,
    };

    const formattedNumber = num.toLocaleString('en-EN', options);
    const value = formattedNumber.replace(/\,/g, '.');
    return value;
  }
  // if (num) {
  //   // Chuyển số thành chuỗi
  //   var str = num.toString();
  //   // Tính độ dài của chuỗi
  //   var len = str.length;
  //   // Nếu độ dài chuỗi nhỏ hơn hoặc bằng 3 thì trả về chuỗi ban đầu
  //   if (len <= 3) {
  //     return str;
  //   }
  //   // Đảo ngược thứ tự các chữ số trong chuỗi
  //   var reversedStr = str.split('').reverse().join('');
  //   var formattedStr = '';
  //   // Thêm dấu . vào sau mỗi 3 chữ số
  //   for (var i = 0; i < len; i++) {
  //     if (i % 3 === 0 && i !== 0) {
  //       formattedStr += '.';
  //     }
  //     formattedStr += reversedStr[i];
  //   }
  //   // Đảo ngược lại thứ tự các chữ số và trả về kết quả
  //   return formattedStr.split('').reverse().join('');
  // }
}

export function renderContentDownload(fileDinhKem) {
  return (
    <div style={{maxHeight: 300, overflowY: 'auto'}}>
      {fileDinhKem?.map((item) => (
        <div
          style={{padding: 5, margin: 10, borderBottom: 'solid 1px #d6d6d6'}}
        >
          <a href={item?.FileUrl} target={'_blank'} className={'link-hover'}>
            {item?.TenFile || item?.name}
          </a>
        </div>
      ))}
    </div>
  );
}

// export function handleChangedFields(fields, form, setIsFormSuccess) {
//   const allValues = form.getFieldsValue();
//   let checkValue = fields.every((item) => allValues[item]);
//   if (checkValue) {
//     setIsFormSuccess(false);
//   } else {
//     setIsFormSuccess(true);
//   }
// }

export function getValueConfigLocalByKey(key) {
  if (key) {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
  }
  return null;
}

export function clearToken() {
  //localStorage.removeItem('id_token');
  localStorage.clear();
}

export function getToken() {
  try {
    const userId = localStorage.getItem('user_id');
    const accessToken = localStorage.getItem('access_token');
    return new Map({userId, accessToken});
  } catch (err) {
    clearToken();
    return new Map();
  }
}

export function isFullLocalStorage() {
  const access_token = localStorage.getItem('access_token');
  const dataConfig = localStorage.getItem('data_config');
  return !(!access_token || !dataConfig);
}

export function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();
  const numberEnding = (number) => {
    return number > 1 ? 's' : '';
  };
  const number = (num) => (num > 9 ? '' + num : '0' + num);
  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);
    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }
    const days = Math.floor((temp %= 31536000) / 86400);
    f;
    if (days) {
      if (days < 28) {
        return days + ' day' + numberEnding(days);
      } else {
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const month = months[givenTime.getUTCMonth()];
        const day = number(givenTime.getUTCDate());
        return `${day} ${month}`;
      }
    }
    const hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }
    const minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }
    return 'a few seconds ago';
  };
  return getTime();
}

export function stringToInt(value, defValue = 0) {
  if (!value) {
    return 0;
  } else if (!isNaN(value)) {
    return parseInt(value, 10);
  }
  return defValue;
}

export function stringToPosetiveInt(value, defValue = 0) {
  const val = stringToInt(value, defValue);
  return val > -1 ? val : defValue;
}

export function changeUrlFilter(filter) {
  let url = window.location.origin + window.location.pathname;
  let query_arr = [];
  let _arr = [];

  if (filter !== undefined && filter !== null) {
    let property;
    for (property in filter) {
      if (
        filter[property] !== undefined &&
        filter[property] !== null &&
        filter[property].toString().trim() !== ''
      ) {
        _arr.push({
          key: property,
          value: filter[property].toString().trim(),
        });
      }
    }
  }

  if (_arr.length > 0) {
    _arr.forEach((item) => {
      query_arr.push(item.key + '=' + item.value);
    });
  }

  query_arr.sort();
  if (query_arr.length) {
    url = url + '?' + query_arr.join('&');
  }
  window.history.replaceState(null, null, url);
}

export const getTokenDecode = (tokenParams) => {
  const defaultToken = getLocalKey('access_token');
  return defaultToken;
  // if (defaultToken && typeof defaultToken === 'string') {
  //   const gezipedData = atob(defaultToken);
  //   const gzipedDataArray = Uint8Array.from(gezipedData, (c) =>
  //     c.charCodeAt(0),
  //   );
  //   const token = Pako.inflate(new Uint8Array(gzipedDataArray), {
  //     to: 'string',
  //   });
  //   return token;
  // }
};

function convertJSONStringsToObject(data) {
  if (data) {
    const result = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        try {
          // Attempt to parse the JSON string
          result[key] = JSON.parse(data[key]);
        } catch (error) {
          console.error(`Error parsing JSON for key ${key}:`, error.message);
        }
      }
    }
    return result;
  }
}

// export function createTreeSidebar(data, parentId = 0) {
//   if (data) {
//     const result = [];

//     data.forEach((item) => {
//       if (item.ChucNangChaID === parentId) {
//         const children = createTreeSidebar(data, item.ChucNangID);
//         if (children.length) {
//           item.Children = children;
//         }
//         result.push(item);
//       }
//     });

//     return result;
//   }
// }
export function createTreeSidebar(data, parentId = 0) {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }

  const result = [];

  data.forEach((item) => {
    if (item && item.ChucNangChaID === parentId) {
      const children = createTreeSidebar(
        data.filter((child) => child.ChucNangChaID !== parentId),
        item.ChucNangID,
      );
      if (children.length) {
        item.Children = children;
      }
      result.push(item);
    }
  });

  return result;
}
export const getInfoFromToken = (tokenParams) => {
  const defaultToken =
    tokenParams && typeof tokenParams === 'string'
      ? tokenParams
      : getLocalKey('access_token');
  try {
    if (defaultToken) {
      const decodeJWT = defaultToken ? jwtDecode(defaultToken) : '';
      if (decodeJWT.CustomClaim) {
        const gezipedData = atob(decodeJWT.CustomClaim);
        const gzipedDataArray = Uint8Array.from(gezipedData, (c) =>
          c.charCodeAt(0),
        );
        const inflatedData = Pako.inflate(gzipedDataArray, {to: 'string'});
        const dataParse = inflatedData ? JSON.parse(inflatedData) : {};
        return dataParse;
      }
    }
  } catch {
    localStorage.clear();
    auth_actions.logout();
    store.dispatch({
      type: auth_actions.LOGOUT,
    });
    message.destroy();
    message.warning('Token đã hết hạn vui lòng đăng nhập lại');
  }
};

export function getFilterData(oldFilterData, onFilter, onOrder) {
  const DefaultPageSize = getDefaultPageSize();
  let filterData = oldFilterData;
  if (onFilter) {
    let {value, property} = onFilter;
    filterData[property] = value;
    //reset paging
    filterData.PageNumber = '';
    if (filterData.PageSize) {
      filterData.PageNumber = 1;
    }
  } else {
    let {pagination, sorter} = onOrder;
    //paging --
    if (pagination !== {}) {
      let PageNumber = pagination.current;
      let PageSize = pagination.pageSize;
      let CurrentPageSize = DefaultPageSize;
      //get currentPageSize
      if (filterData.PageSize) {
        CurrentPageSize = filterData.PageSize;
      }
      //neu changePageSize -> reset PageNumber = 1
      if (PageSize !== CurrentPageSize) {
        PageNumber = 1;
      }
      filterData = {
        ...filterData,
        PageNumber,
        PageSize,
      };
    }
    //order --
    if (sorter !== {}) {
      let OrderBy = '';
      let OrderValue = '';
      if (
        sorter.field &&
        (sorter.order === 'ascend' || sorter.order === 'descend')
      ) {
        OrderBy = sorter.field;
        OrderValue = sorter.order === 'ascend' ? 'asc' : 'desc';
      }
      if (OrderValue !== 'asc' && OrderValue !== 'desc') {
        delete filterData.OrderBy;
        delete filterData.OrderValue;
      } else {
        filterData = {
          ...filterData,
          OrderBy,
          OrderValue,
        };
      }
    }
  }
  //xoa page info neu la default info: 1, DefaultPageSize
  filterData = {
    ...filterData,
    PageNumber: filterData.PageNumber ? parseInt(filterData.PageNumber) : 1,
    PageSize: filterData.PageSize
      ? parseInt(filterData.PageSize)
      : DefaultPageSize,
  };
  if (
    (filterData.PageNumber === 1 && filterData.PageSize === DefaultPageSize) ||
    !filterData.PageNumber
  ) {
    delete filterData.PageNumber;
    delete filterData.PageSize;
  }
  return filterData;
}

export function getTotalMonthsOfYear(year) {
  const startOfYear = moment(year).startOf('year');
  const endOfYear = moment(year).endOf('year');
  const duration = moment.duration(endOfYear.diff(startOfYear));
  const totalMonths = duration.asMonths() + 1;
  return totalMonths;
}

export function getScrollParent(node) {
  if (node.parentElement === null) {
    return node;
  }

  return node.parentElement.scrollHeight > node.clientHeight ||
    node.parentElement.scrollWidth > node.clientWidth
    ? node.parentElement
    : getScrollParent(node.parentElement);
}

// export function getRoleByKey(listRole, key) {
//   let role = {view: 0, add: 0, edit: 0, delete: 0};
//   if (!listRole) {
//     let roleStore = localStorage.getItem('role');
//     listRole = JSON.parse(roleStore);
//   }
//   if (listRole) {
//     const currentRole = listRole.find((item) => item.MaChucNang === key);
//     if (currentRole) {
//       role = {
//         // ...listRole[key],
//         view: 1,
//         add: currentRole.Them,
//         edit: currentRole.Sua,
//         delete: currentRole.Xoa,
//       };
//     }
//   }
//   return role;
// }
export function getRoleByKey(listRole, key) {
  let role = {view: 0, add: 0, edit: 0, delete: 0};
  if (!listRole) {
    let roleStore = localStorage.getItem('role');
    listRole = JSON.parse(roleStore);
  }
  const checkRole = listRole?.find((item) => item?.MaChucNang === key);
  if (listRole && checkRole) {
    role = {
      ...checkRole,
      view: checkRole.Xem,
      add: checkRole.Them,
      edit: checkRole.Sua,
      delete: checkRole.Xoa,
    };
  }
  return role;
}
export function getFileLimitLocal() {
  ưcnm;
  const configLocal = JSON.parse(localStorage.getItem('data_config'));
  return configLocal && configLocal.fileLimit
    ? parseInt(configLocal.fileLimit)
    : 10;
}

export function getDefaultPageSize() {
  //get dataConfig tu redux storage
  let dataConfig = store.getState().Auth.dataConfig
    ? store.getState().Auth.dataConfig
    : null;
  //get dataConfig tu local storage
  if (!dataConfig) {
    const dataConfigJson = localStorage.getItem('data_config');
    dataConfig = JSON.parse(dataConfigJson);
  }
  let defaultPageSize = 10;
  if (
    dataConfig &&
    dataConfig.pageSize &&
    [10, 20, 30, 40].indexOf(parseInt(dataConfig.pageSize)) >= 0
  ) {
    defaultPageSize = parseInt(dataConfig.pageSize);
  }
  return defaultPageSize;
}

export function formatAmount(amount) {
  if (isNaN(amount)) {
    return amount;
  }
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

//format dataCoQuan in Saga ------------------------------------------------------------------------------------
export function formatDMCoQuan(DanhSachCoQuan) {
  const DanhSach = DanhSachCoQuan.map((value1, index1) => {
    //-------1
    let title1 = value1.Ten;
    let key1 = `${index1}`;
    let valueSelect1 = `${value1.ID}`;
    let children1 = null;
    if (value1.Children) {
      children1 = value1.Children.map((value2, index2) => {
        //------2
        let title2 = value2.Ten;
        let key2 = `${index1}-${index2}`;
        let valueSelect2 = `${value2.ID}`;
        let children2 = null;
        if (value2.Children) {
          children2 = value2.Children.map((value3, index3) => {
            //------3
            let title3 = value3.Ten;
            let key3 = `${index1}-${index2}-${index3}`;
            let valueSelect3 = `${value3.ID}`;
            let children3 = null;
            return {
              ...value3,
              title: title3,
              key: key3,
              value: valueSelect3,
              children: children3,
            };
          });
        }
        return {
          ...value2,
          title: title2,
          key: key2,
          value: valueSelect2,
          children: children2,
        };
      });
    }
    return {
      ...value1,
      title: title1,
      key: key1,
      value: valueSelect1,
      children: children1,
    };
  });
  return DanhSach;
}

//Add File -----------------------------------------------------------------------------------------------------
export function getBase64(file, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(file, reader.result));
  reader.readAsDataURL(file);
}

export function beforeUpload(file) {
  const isLimit = file.size / 1024 / 1024 < fileUploadLimit;
  if (!isLimit) {
    message.error(
      'Dung lượng file ' + file.name + ' đính kèm quá lớn, không thể tải lên',
    );
  }
  return isLimit;
}

export function blobUrlToBase64(blobUrl, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';

  xhr.onload = function () {
    const recoveredBlob = xhr.response;
    const reader = new FileReader();
    reader.onload = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(recoveredBlob);
  };

  xhr.open('GET', blobUrl);
  xhr.send();
}

export function upperFirstLetter(word) {
  let text = word.split(' ').filter((item) => item);
  let res = [];
  for (let i = 0; i < text.length; i++) {
    let text2 = text[i].split('');
    text2[0] = text2[0].toUpperCase();
    text2 = text2.join('');
    res[res.length] = text2;
  }
  return res.join(' ');
}

//format danh mục cơ quan
export const formatDataTreeSelect = (Data) => {
  const renderChildrenTreeSelect = (children, indexRoot) => {
    return children.map((value, index) => {
      let title = value.Ten;
      let label = `${value.Ten}`;
      let key = `${indexRoot}-${index}-${value.ID}`;
      let valueSelect = `${value.ID}`;
      let children =
        value.Children && value.Children.length > 0
          ? renderChildrenTreeSelect(value.Children, index)
          : null;
      return {
        ...value,
        title: title,
        label: label,
        key: key,
        value: valueSelect,
        children: children,
      };
    });
  };
  return Data.map((value, index) => {
    //-------1
    let title = value.Ten;
    let label = `${value.Name}`;
    let key = `${index}-${value.ID}`;
    let valueSelect = `${value.ID}`;
    let children =
      value.Children && value.Children.length > 0
        ? renderChildrenTreeSelect(value.Children, index)
        : null;
    return {
      ...value,
      title: title,
      label: label,
      key: key,
      value: valueSelect,
      children: children,
    };
  });
};

export function formatTreeDataKhieuTo(Data) {
  const renderChildrenTreeSelect = (children, indexRoot, parentKey) => {
    return children.map((value, index) => {
      let title = value.TenLoaiKhieuTo;
      let label = `${value.TenLoaiKhieuTo}`;
      let key = `${parentKey}-${index}-${value.LoaiKhieuToID}`;
      let valueSelect = `${value.LoaiKhieuToID}`;
      let children =
        value.Children && value.Children.length > 0
          ? renderChildrenTreeSelect(value.Children, index, key)
          : null;
      return {
        ...value,
        title: title,
        label: label,
        key: key,
        value: valueSelect,
        children: children,
      };
    });
  };
  return Data.map((value, index) => {
    //-------1
    let title = value.TenLoaiKhieuTo;
    let label = `${value.TenLoaiKhieuTo}`;
    let key = `${index}-${value.LoaiKhieuToID}`;
    let valueSelect = `${value.LoaiKhieuToID}`;
    let children =
      value.Children && value.Children.length > 0
        ? renderChildrenTreeSelect(value.Children, index, key)
        : null;
    return {
      ...value,
      title: title,
      label: label,
      key: key,
      value: valueSelect,
      children: children,
    };
  });
}

// export const formatTreeDataKhieuTo = (Data) => {
//   let expandedKeys = [];
//   const renderChildrenTreeSelect = (children, indexRoot) => {
//     return children.map((value, index) => {
//       let title = value.TenLoaiKhieuTo;
//       let label = `${value.TenLoaiKhieuTo}`;
//       let key = `${value.LoaiKhieuToID}`;
//       let valueSelect = `${value.LoaiKhieuToID}`;
//       let children =
//         value.DanhMucLoaiKhieuToCon && value.DanhMucLoaiKhieuToCon.length > 0
//           ? renderChildrenTreeSelect(value.DanhMucLoaiKhieuToCon, index)
//           : null;
//       expandedKeys.push(key);
//       return {
//         ...value,
//         title: title,
//         label: label,
//         key: key,
//         value: valueSelect,
//         children: children,
//       };
//     });
//   };
//   const DanhSach = Data.map((value, index) => {
//     //-------1
//     let title = value.TenLoaiKhieuTo;
//     let label = `${value.TenLoaiKhieuTo}`;
//     let key = `${value.LoaiKhieuToID}`;
//     let valueSelect = `${value.LoaiKhieuToID}`;
//     let children =
//       value.DanhMucLoaiKhieuToCon && value.DanhMucLoaiKhieuToCon.length > 0
//         ? renderChildrenTreeSelect(value.DanhMucLoaiKhieuToCon, index)
//         : null;
//     expandedKeys.push(key);
//     return {
//       ...value,
//       title: title,
//       label: label,
//       key: key,
//       value: valueSelect,
//       children: children,
//     };
//   });
//   return {
//     DanhSachCoQuan: DanhSach,
//     expandedKeys,
//   };
// };

export const formatTreeDataCoQuan = (Data) => {
  let expandedKeys = [];
  const renderChildrenTreeSelect = (children, indexRoot) => {
    return children.map((value, index) => {
      let title = value.Ten;
      let label = `${value.Ten}`;
      let key = `${indexRoot}-${index}-${value.ID}`;
      let valueSelect = `${value.ID}`;
      let children =
        value.Children && value.Children.length > 0
          ? renderChildrenTreeSelect(value.Children, index)
          : null;
      expandedKeys.push(key);
      return {
        ...value,
        title: title,
        label: label,
        key: key,
        value: valueSelect,
        children: children,
      };
    });
  };
  const DanhSach = Data.map((value, index) => {
    //-------1
    let title = value.Ten;
    let label = `${value.Name}`;
    let key = `${index}-${value.ID}`;
    let valueSelect = `${value.ID}`;
    let children =
      value.Children && value.Children.length > 0
        ? renderChildrenTreeSelect(value.Children, index)
        : null;
    expandedKeys.push(key);
    return {
      ...value,
      title: title,
      label: label,
      key: key,
      value: valueSelect,
      children: children,
    };
  });
  return {
    ListData: DanhSach,
    expandedKeys,
  };
};

export const formatDataTreeLoaiKhieuTo = (Data) => {
  let expandedKeys = [];
  const renderChildrenTreeSelect = (Children, indexRoot) => {
    return Children.map((value, index) => {
      let title = value.TenLoaiKhieuTo;
      let label = `${value.TenLoaiKhieuTo}`;
      let key = `${indexRoot}-${index}-${value.LoaiKhieuToID}`;
      let valueSelect = `${value.LoaiKhieuToID}`;
      let Children =
        value.Children && value.Children.length > 0
          ? renderChildrenTreeSelect(value.Children, index)
          : null;
      expandedKeys.push(key);
      return {
        ...value,
        title: title,
        label: label,
        key: key,
        value: valueSelect,
        children: Children,
      };
    });
  };
  const DanhSach = Data.map((value, index) => {
    //-------1
    let title = value.TenLoaiKhieuTo;
    let label = `${value.TenLoaiKhieuTo}`;
    let key = `${index}-${value.LoaiKhieuToID}`;
    let valueSelect = `${value.LoaiKhieuToID}`;
    let Children =
      value.Children && value.Children.length > 0
        ? renderChildrenTreeSelect(value.Children, index)
        : null;
    expandedKeys.push(key);
    return {
      ...value,
      title: title,
      label: label,
      key: key,
      value: valueSelect,
      children: Children,
    };
  });
  return {
    DanhSachLoaiKhieuTo: DanhSach,
    expandedKeys,
  };
};

export const TreeToFlatArray = (TreeData) => {
  const listFlat = [];
  const toFlat = (item) => {
    listFlat.push(item);
    if (item.Children && item.Children.length) {
      item.Children.forEach((child) => {
        toFlat(child);
      });
    }
  };
  TreeData &&
    TreeData.length &&
    TreeData.forEach((item) => {
      toFlat(item);
    });
  return listFlat;
};

export const numToWord = (function () {
  let ty = '';
  let t = [
    'không',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
  ];
  let r = function (r, n) {
    let o = '',
      a = Math.floor(r / 10),
      e = r % 10;
    return (
      a > 1
        ? ((o = ' ' + t[a] + ' mươi'), 1 === e && (o += ' mốt'))
        : 1 === a
        ? ((o = ' mười'), 1 === e && (o += ' một'))
        : n && e > 0 && (o = ' lẻ'),
      5 === e && a >= 1
        ? (o += ' lăm')
        : 4 === e && a >= 1
        ? (o += ' tư')
        : (e > 1 || (1 === e && 0 === a)) && (o += ' ' + t[e]),
      o
    );
  };
  let n = function (n, o) {
    var a = '',
      e = Math.floor(n / 100),
      n = n % 100;
    return (
      o || e > 0
        ? ((a = ' ' + t[e] + ' trăm'), (a += r(n, !0)))
        : (a = r(n, !1)),
      a
    );
  };
  let o = function (t, r) {
    var o = '',
      a = Math.floor(t / 1e6),
      t = t % 1e6;
    a > 0 && ((o = n(a, r) + ' triệu'), (r = !0));
    var e = Math.floor(t / 1e3),
      t = t % 1e3;
    return (
      e > 0 && ((o += n(e, r) + ' nghìn'), (r = !0)), t > 0 && (o += n(t, r)), o
    );
  };
  return {
    read: function (r) {
      if (0 === r) return t[0];
      var n = '',
        a = '';
      do
        (ty = r % 1e9),
          (r = Math.floor(r / 1e9)),
          (n = r > 0 ? o(ty, !0) + a + n : o(ty, !1) + a + n),
          (a = ' tỷ');
      while (r > 0);
      return n.trim();
    },
  };
})();

export function b64toBlob(dataURI) {
  let fileType = dataURI.split(';')[0].replace('data:', '');
  let byteString = atob(dataURI.split(',')[1]);
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {type: fileType}); //eg: image/jpg
}

export function printComponent(html) {
  let oldIframe = document.querySelectorAll('iframe');
  if (oldIframe && oldIframe.length) {
    oldIframe.forEach((element) => {
      element.parentNode.removeChild(element);
    });
  }
  //tao iframe moi -----
  let iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe); //make document #html in iframe
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(html);
  iframe.contentWindow.document.close();
  iframe.contentWindow.focus();
  iframe.contentWindow.print();
}

export function exportExcel(rawHtml, exportName) {
  let html, link, blob, url;
  let preHtml = `<html><head><meta charset='utf-8'></head><body>`;
  let postHtml = '</body></html>';
  html = preHtml + rawHtml + postHtml;
  blob = new Blob(['\ufeff', html], {
    type: 'application/vnd.ms-excel',
  });
  url = URL.createObjectURL(blob);
  link = document.createElement('A');
  link.href = url;
  link.download = `${exportName}.xls`; // default name without extension
  document.body.appendChild(link);
  if (navigator.msSaveOrOpenBlob)
    navigator.msSaveOrOpenBlob(blob, `${exportName}.xls`); // IE10-11
  else link.click(); // other browsers
  document.body.removeChild(link);
}

export function exportWord(rawHtml, exportName) {
  const css =
    '<style>' +
    '@page ' +
    '#divPrint ' +
    '{size: 12cm 12cm; mso-page-orientation: ' +
    'landscape' +
    '; margin: 0.5cm 0.5cm 1.5cm 1.5cm;}' +
    ' div.' +
    '#divPrint ' +
    '{page: ' +
    '#divPrint' +
    ';}' +
    '</style>';
  const preHtml = `<html><head><meta charset='utf-8'>${css}</head><body>`;
  const postHtml = '</body></html>';
  const html = preHtml + rawHtml + postHtml;
  const blob = new Blob(['\ufeff', html], {type: 'application/msword'});
  const url = URL.createObjectURL(blob);
  let link = document.createElement('A');
  link.href = url;
  link.download = `${exportName}.doc`; // default name without extension
  document.body.appendChild(link);
  if (navigator.msSaveOrOpenBlob)
    navigator.msSaveOrOpenBlob(blob, `${exportName}.doc`); // IE10-11
  else link.click(); // other browsers
  document.body.removeChild(link);
}

export function getRandomNumber(min = 0, max = 9999) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getConfigValueByKey(listConfig, key, defaultValue) {
  if (listConfig && listConfig.length) {
    const config = listConfig.find((item) => item.ConfigKey === key);
    if (config && config.ConfigValue) {
      return config.ConfigValue;
    }
    return defaultValue;
  }
  return defaultValue;
}

export function checkInputNumber(e) {
  const key = e.keyCode;
  if (
    (key < 48 || key > 57) &&
    (key < 96 || key > 105) &&
    key !== 8 &&
    key !== 9
  ) {
    e.preventDefault();
  }
}

export function getConfigLocal(properties, defaultValue) {
  const dataConfig = JSON.parse(localStorage.getItem('data_config'));
  if (dataConfig && dataConfig[properties]) {
    return dataConfig[properties];
  }
  return defaultValue;
}

export function getLocalKey(properties, defaultValue) {
  if (properties) {
    const localKey = localStorage.getItem(properties)
      ? JSON.parse(localStorage.getItem(properties))
      : null;
    if (localKey) {
      return localKey;
    }
  }
  return defaultValue;
}

export const removeAscent = (str) => {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
};

export const removeAscent2 = (str) => {
  if (str === null || str === undefined) return str;
  // str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
};

export const inputTenNguoi = (e) => {
  const key = removeAscent(e.key);
  const regex = /^[A-Za-z\s]*$/;
  if (!regex.test(key)) {
    // e.preventDefault();
  }
};

export const inputDiaChi = (e) => {
  const key = removeAscent(e.key);
  const regex = /^[A-Za-z0-9\/\\s]*$/;
  if (!regex.test(key)) {
    // e.preventDefault();
  }
};

export const handleTextLong = (text, lengthText = 20, appendType = '...') => {
  const length = text?.toString()?.length;
  if (length && length > lengthText) {
    const value = text.toString().slice(0, lengthText);
    return value + appendType;
  }
  return text;
};

export const inputNumber = (e) => {
  const key = e.charCode;
  if ((key < 48 || key > 57) && key !== 44 && key !== 46) {
    e.preventDefault();
  }
};

export const convertGiaTri = (num) => {
  // const coundComma = 0
  const arrContainsComma = num
    .toString()
    .split('')
    .filter((item) => item === ',');
  if (arrContainsComma.length <= 1) {
    const stringNum = num.toString();
    const index = stringNum.lastIndexOf(',');
    const hundredsNum = stringNum.slice(
      index,
      index > 0 ? stringNum.length : 0,
    );
    const converString = stringNum.replace(hundredsNum, ' ');
    const convertNum = converString.split('.').join('');
    const resultString = converString
      ? `${convertNum
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          .trim()}`
      : '';
    return resultString + ' đồng';
  } else {
    message.destroy();
    message.warning('Đã là hàng đơn vị nhỏ nhất');
  }
};

export const convertGiaTriBCBienDong = (num) => {
  const stringNum = num.toString();
  const index = stringNum.lastIndexOf('.');
  const hundredsNum = stringNum.slice(index, index > 0 ? stringNum.length : 0);
  const converString = stringNum.replace(hundredsNum, ' ');
  return converString
    ? `${
        converString
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          .trim() + hundredsNum
      }`
    : '';
};

export const checkHttps = (link) => {
  return link.includes('https');
};

export const changeUrlHttps = (Url) => {
  if (!Url) {
    return '';
  }
  const origin = window.location.origin;
  const isHttps = checkHttps(origin);
  if (isHttps) {
    const isUrlHaveHttps = checkHttps(Url);
    if (!isUrlHaveHttps) {
      Url = Url.replace('http', 'https');
    }
  }
  return Url;
};

export const getBuildDate = (epoch) => {
  return moment(epoch).format('DD-MM-YYY HH:MM');
};

export const getParentOfNode = (treeData, node) => {
  const findParent = (currentNode, parentList) => {
    if (currentNode.Children && currentNode.Children.includes(node)) {
      parentList.push(currentNode);
      return true;
    } else if (currentNode.Children) {
      for (let child of currentNode.Children) {
        if (findParent(child, parentList)) {
          parentList.push(currentNode);
          return true;
        }
      }
    }
    return false;
  };

  const parentList = [];
  for (let root of treeData) {
    if (findParent(root, parentList)) {
      return parentList[parentList.length - 1];
    }
  }
  return null; // Trường hợp node là root
};

export const emptyCache = () => {
  if (process.env.NODE_ENV === 'production') {
    if ('caches' in window) {
      caches.keys().then((names) => {
        // Delete all the cache files
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  }
};

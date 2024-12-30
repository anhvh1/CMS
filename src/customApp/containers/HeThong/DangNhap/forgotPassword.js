import React, {Component, useEffect, useRef, useState} from 'react';
import {Link, Redirect, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Input} from '../../../../components/uielements/exportComponent';
import authAction from '../../../../redux/auth/actions';
import appAction from '../../../../redux/app/actions';
import {
  Row,
  Col,
  Tooltip,
  Modal,
  message,
  Checkbox,
  Input as InputAnt,
  Form,
} from 'antd';

import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  MailOutlined,
  RollbackOutlined,
  RedoOutlined,
} from '@ant-design/icons';
import api from './config';
import {isFullLocalStorage} from '../../../../helpers/utility';
import SignInWrapper from './styled';
import teamview from '../../../../image/teamview-icon.png';
import ultraview from '../../../../image/ultraview-icon.png';
import {getConfigLocal} from '../../../../helpers/utility';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import queryString from 'query-string';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
const {} = authAction;
const {clearMenu, getNotifications, getHuongDan, checkIframeSuccess} =
  appAction;
import {ForgotWrap} from './forgotPassword.styled';
import actionsCauHinhDangNhap from '../../../redux/HeThong/CauHinhDangNhap/actions';
import {useSelector, useDispatch} from 'react-redux';
import {
  ITEM_LAYOUT_HALF,
  ITEM_LAYOUT_ROW,
  REQUIRED,
} from '../../../../settings/constants';
const date = new Date();
const currentYear = date.getFullYear();
const {Item, useForm} = Form;
const ForgotPassword = (props) => {
  document.title = 'SMARTSIGNAGE';
  const canvasRef = useRef();
  const [form] = useForm();
  const {CauHinhDangNhap} = useSelector((state) => state.CauHinhDangNhap);
  const [stateCapCha, setStateCapCha] = useState({
    capcha: '',
    srcCapcha: '',
    capchainput: '',
  });
  const [Info, setInfo] = useState({
    username: '',
    password: '',
    messageError: '',
    confirmLoading: false,
    stateForm: 1,
  });
  const [background, setBackground] = useState('');
  const dispatch = useDispatch();

  const {capcha, srcCapcha, capchainput} = stateCapCha;
  const {username, password, messageError, confirmLoading, stateForm} = Info;

  //Get initData---------------------------------------------
  useEffect(() => {
    RegCapCha();
  }, []);

  useEffect(() => {
    dispatch(actionsCauHinhDangNhap.getInfo());
  }, []);

  useEffect(() => {
    if (CauHinhDangNhap) {
      const data = CauHinhDangNhap?.reduce(
        (prev, current) => (current.ID > prev.ID ? current : prev),
        {ID: 0},
      );
      if (data) {
        setBackground(data.HinhNenDangNhapURL);
      }
    }
  }, [CauHinhDangNhap]);

  const RegCapCha = () => {
    let capcha = '';
    const capchaLength = 6;
    for (let i = 0; i < capchaLength; i++) {
      let letter = 0;
      let numorchar = Math.floor(Math.random() * 3);
      if (numorchar === 1 || numorchar === 2) {
        letter = Math.floor(Math.random() * (91 - 65)) + 65;
      }
      if (numorchar === 0) {
        letter = Math.floor(Math.random() * (58 - 48)) + 48;
      }
      letter = String.fromCharCode(letter);
      let uporlow = Math.floor(Math.random() * 2);
      if (uporlow === 1) {
        letter = letter.toString().toLowerCase();
      } else {
        letter = letter.toString();
      }
      capcha += letter;
    }
    const tCtx = canvasRef.current?.getContext('2d');
    if (tCtx) {
      tCtx.canvas.width = tCtx.measureText(capcha).width + 20;
      tCtx.canvas.height = 30;
      tCtx.font = '17px Arial';
      tCtx.fillText(capcha, 0, 15);
      const srcCapcha = tCtx.canvas.toDataURL();
      setStateCapCha((prevState) => ({...prevState, capcha, srcCapcha}));
    }
  };

  const changeCapcha = (e) => {
    const capchainput = e.target.value;
    setStateCapCha((prevState) => ({...prevState, capchainput}));
  };

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      //   handle();
    }
  };

  const handleSendEmailChange = () => {
    form.validateFields().then((value) => {
    });
  };

  return (
    <ForgotWrap background={background}>
      <div className="forgot-password">
        <div className={'main-forgot'}>
          <div className="main-forgot__title">
            <p class={'title'}>Quên mật khẩu</p>
          </div>
          <div className="main-forgot__form">
            <div className="field-wrap">
              <Form form={form} name={'FormForgot'}>
                <div className="field-item">
                  {/* <p>Nhập email/tài khoản khôi phục</p> */}
                  <Item
                    label={
                      <p>
                        Nhập email/tài khoản khôi phục{' '}
                        <span style={{color: 'red'}}>*</span>
                      </p>
                    }
                    rules={[{...REQUIRED}]}
                    {...ITEM_LAYOUT_ROW}
                    name="Email"
                  >
                    <Input
                      // onChange={(input) =>
                      //   setInfo((prevState) => ({
                      //     ...prevState,
                      //     username: input.target.value,
                      //   }))
                      // }
                      onKeyUp={_handleKeyDown}
                      // value={username}
                      autoFocus
                    />
                  </Item>
                </div>
                <div className="field-item">
                  {/* <p>Mã xác thực</p> */}

                  <Item
                    label={
                      <p>
                        Mã xác thực <span style={{color: 'red'}}>*</span>
                      </p>
                    }
                    rules={[{...REQUIRED}]}
                    {...ITEM_LAYOUT_ROW}
                    name="MaXacThuc"
                  >
                    <Input
                      // value={password}
                      onKeyUp={_handleKeyDown}
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      addonAfter={
                        <div className="wrapper-capcha">
                          <div className="contentCapcha">{capcha}</div>
                          <RedoOutlined
                            className="rollback"
                            onClick={() => RegCapCha()}
                          />
                        </div>
                      }
                    />
                  </Item>
                </div>
              </Form>
              {/* <div className="field-item">
                <p>Nhập mật khẩu mới</p>
                <Input
                  type="password"
                  onChange={(input) =>
                    setInfo((prevState) => ({
                      ...prevState,
                      username: input.target.value,
                    }))
                  }
                  onKeyUp={_handleKeyDown}
                  value={username}
                  autoFocus
                />
              </div>
              <div className="field-item">
                <p>Xác nhận mật khẩu mới</p>
                <div className="wrapper-field">
                  <Input
                    type="password"
                    value={password}
                    onChange={(input) =>
                      setInfo((prevState) => ({
                        ...prevState,
                        password: input.target.value,
                      }))
                    }
                    onKeyUp={_handleKeyDown}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
              </div> */}
            </div>
            <canvas ref={canvasRef} style={{display: 'none'}} />
            <div className={'button-group'}>
              <Link to="/signin">
                <Button loading={confirmLoading}>Hủy</Button>
              </Link>
              <Button
                loading={confirmLoading}
                type="primary"
                onClick={() => handleSendEmailChange()}
              >
                Gửi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ForgotWrap>
  );
};

export default ForgotPassword;
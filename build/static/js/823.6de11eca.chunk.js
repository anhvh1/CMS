"use strict";(self.webpackChunkbrvh=self.webpackChunkbrvh||[]).push([[823],{44024:function(n,t,e){e.d(t,{_:function(){return c},c:function(){return u}});var a=e(1413),i=e(46008),r=e(66660),o=e(62559),c=function(n){return(0,o.jsx)(i.Z,(0,a.Z)((0,a.Z)({onForm:i.Z.useForm},n),{},{onFieldsChange:function(){(0,r.dM)(n.form||n.ref,n.onChangeStatusButton,n.name)}}))},u=i.Z.useForm},94115:function(n,t,e){e.d(t,{c:function(){return l}});var a=e(1413),i=e(93433),r=e(46008),o=e(66660),c=e(70785),u=e(62559),d=r.Z.Item,l=function(n){var t=n.rules?n.rules:[];return(0,u.jsx)(d,(0,a.Z)((0,a.Z)({},n),{},{rules:[].concat((0,i.Z)(t),[{validator:function(t,e,a){return(0,o.ft)(t,e,a,c.MAXLENGTH,null===n||void 0===n?void 0:n.label)}}])}))}},24274:function(n,t,e){e.d(t,{Z:function(){return l}});e(50390);var a,i=e(30168),r=e(16932),o=e(29665),c=r.ZP.div(a||(a=(0,i.Z)(["\n  /* margin-top: 15px;\n  margin-bottom: 15px; */\n  text-align: right;\n  /* display: inline-block; */\n  flex: 1;\n  padding: 0 3px 0 0;\n  /* margin-bottom: 10px; */\n  display: flex;\n  gap: 10px;\n  justify-content: end;\n  flex-wrap: wrap;\n  align-items: center;\n  @media only screen and (max-width: 1336px) {\n    text-align: left;\n    /* display: block; */\n    flex: none;\n    width: 100%;\n    padding: 0 0 10px 0;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  /* button {\n    margin-right: 0px;\n    margin-left: 10px;\n    @media only screen and (max-width: 1336px) {\n      margin-left: 0px;\n      margin-right: 10px;\n    }\n  } */\n"]))),u=(0,o.Z)(c),d=e(62559),l=function(n){return(0,d.jsx)(u,{children:n.children})}},32812:function(n,t,e){e.d(t,{z:function(){return r}});var a=e(29439),i=e(50390);function r(n){var t=(0,i.useState)(0),e=(0,a.Z)(t,2),r=e[0],o=e[1];return[r,function(){o(r+1)}]}},64823:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var a=e(1413),i=e(29439),r=e(50390),o=e(34424),c=e(21669),u=e(78333),d=e(9992),l=e(64693),s=e(66660),h=e(47827),f=e(74165),Z=e(15861),g=e(70785),m=e(41719),x=e(94115),p=e(44024),v=e(43946),M=e.n(v),P=e(62559),C=function(n){var t=(0,p.c)(),e=(0,i.Z)(t,1)[0],o=n.dataEdit,u=n.loading,d=n.visible,l=n.action;(0,r.useEffect)((function(){o&&o.ID&&e&&e.setFieldsValue((0,a.Z)((0,a.Z)({},o),{},{GhiChu:null!==o&&void 0!==o&&o.GhiChu?M()(null===o||void 0===o?void 0:o.GhiChu):null}))}),[]);var s=function(){var t=(0,Z.Z)((0,f.Z)().mark((function t(i){var r,o,c;return(0,f.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.preventDefault(),t.next=3,e.validateFields();case 3:r=t.sent,o=r.GhiChu?r.GhiChu.year().toString():"",c=(0,a.Z)((0,a.Z)({},r),{},{GhiChu:o}),n.onCreate(c);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,P.jsx)(c.u_,{title:"".concat("edit"===l?"S\u1eeda":"Th\xeam"," th\xf4ng tin lo\u1ea1i m\u1eabu phi\u1ebfu"),width:450,visible:d,onCancel:n.onCancel,footer:[(0,P.jsx)(c.zx,{onClick:n.onCancel,children:"H\u1ee7y"},"back"),(0,P.jsx)(c.zx,{htmlType:"submit",type:"primary",form:"FormLoaiMauPhieu",loading:u,onClick:s,children:"L\u01b0u"},"submit")],children:(0,P.jsxs)(p._,{form:e,name:"FormLoaiMauPhieu",children:["edit"===l?(0,P.jsx)(x.c,{name:"ID",hidden:!0}):"",(0,P.jsx)(x.c,(0,a.Z)((0,a.Z)({label:"M\xe3 Lo\u1ea1i M\u1eabu Phi\u1ebfu",name:"Ma"},g.ITEM_LAYOUT),{},{rules:[g.REQUIRED],children:(0,P.jsx)(m.Z,{})})),(0,P.jsx)(x.c,(0,a.Z)((0,a.Z)({label:"T\xean Lo\u1ea1i M\u1eabu Phi\u1ebfu",name:"Ten"},g.ITEM_LAYOUT),{},{rules:[g.REQUIRED],children:(0,P.jsx)(m.Z,{})})),(0,P.jsx)(x.c,(0,a.Z)((0,a.Z)({label:"N\u0103m",name:"GhiChu"},g.ITEM_LAYOUT),{},{children:(0,P.jsx)(c.Mt,{picker:"year",format:"YYYY",style:{width:"100%"},placeholder:"",maxLength:4})}))]})})},y=e(81299),b=e(86460),j=e(79588),S=e(3143),w=e(7335),E=e(24274),D=e(41367),T=e(23194),L=e(31348),z=(e(32812),e(36837)),k=e(11322);var A=(0,o.$j)((function(n){return(0,a.Z)({},n.DMLoaiMauPhieu)}),h.Z)((function(n){var t=(0,z.Z)(g.DANHMUCCHUNG.LOAIMAUPHIEU).api;document.title="Danh M\u1ee5c Lo\u1ea1i M\u1eabu Phi\u1ebfu";var e=(0,r.useState)(l.parse(n.location.search)),a=(0,i.Z)(e,2),o=a[0],h=a[1],f=n.DanhSachLoaiMauPhieu,Z=n.TotalRow;(0,r.useEffect)((function(){(0,s.ZZ)(o),n.getData(o)}),[o]),(0,r.useEffect)((function(){n.getData(o)}),[]);var m=(0,k.M)(o,h,t,n,Z),x=m.showModalAdd,p=m.showModalEdit,v=m.submitModalAddEdit,A=m.deleteModalAddEdit,I=m.onFilter,N=m.onTableChange,G=m.dataModalAddEdit,H=m.confirmLoading,Y=m.visibleModalAddEdit,F=m.hideModalAddEdit,q=m.action,U=m.modalKey,O=o.PageNumber?parseInt(o.PageNumber):1,R=o.PageSize?parseInt(o.PageSize):(0,s.hL)(),B=[{title:"STT",width:"5%",align:"center",render:function(n,t,e){return(0,P.jsx)("span",{children:(O-1)*R+(e+1)})}},{title:"T\xean lo\u1ea1i m\u1eabu phi\u1ebfu",dataIndex:"Ten",align:"left",width:"80%"},{title:"Thao t\xe1c",width:"15%",align:"center",render:function(n,t){return function(n){return(0,P.jsxs)("div",{className:"action-btn",children:[(0,P.jsx)(u.Z,{title:"S\u1eeda",children:(0,P.jsx)(y.Z,{onClick:function(){return p(n.ID)}})}),(0,P.jsx)(u.Z,{title:"X\xf3a",children:(0,P.jsx)(b.Z,{onClick:function(){return A(n.ID)}})})]})}(t)}}];return(0,P.jsxs)(S.Z,{children:[(0,P.jsx)(w.Z,{children:"Danh M\u1ee5c Lo\u1ea1i M\u1eabu Phi\u1ebfu"}),(0,P.jsx)(E.Z,{children:(0,P.jsxs)(c.zx,{type:"primary",onClick:x,children:[(0,P.jsx)(j.Z,{}),"Th\xeam m\u1edbi"]})}),(0,P.jsxs)(D.Z,{children:[(0,P.jsxs)(T.Z,{children:[(0,P.jsx)(d.Z,{picker:"year",placeholder:"Ch\u1ecdn n\u0103m",value:o.GhiChu?M()("".concat(o.GhiChu)):null,onChange:function(n,t){return I(t,"GhiChu")}}),(0,P.jsx)(c.Vr,{allowClear:!0,defaultValue:o.Keyword,placeholder:"Nh\u1eadp t\xean lo\u1ea1i m\u1eabu phi\u1ebfu",style:{width:300},onSearch:function(n){return I(n,"Keyword")}})]}),(0,P.jsx)(L.ZP,{columns:B,dataSource:f,onChange:N,pagination:{showSizeChanger:!0,showTotal:function(n,t){return"T\u1eeb ".concat(t[0]," \u0111\u1ebfn ").concat(t[1]," tr\xean ").concat(n," k\u1ebft qu\u1ea3")},total:Z,current:O,pageSize:R}})]}),(0,P.jsx)(C,{visible:Y,dataEdit:G,action:q,loading:H,onCreate:v,onCancel:F,DanhSachLoaiMauPhieu:f},U)]})}))},11322:function(n,t,e){e.d(t,{M:function(){return h}});var a=e(1413),i=e(29439),r=e(50390),o=e(32812),c=e(891),u=e(32955),d=e(66660),l=e(60606),s=e.n(l),h=function(n,t,e,l,h){var f=(0,r.useState)(!1),Z=(0,i.Z)(f,2),g=Z[0],m=Z[1],x=(0,r.useState)(""),p=(0,i.Z)(x,2),v=p[0],M=p[1],P=(0,o.z)(),C=(0,i.Z)(P,2),y=C[0],b=C[1],j=(0,r.useState)(!1),S=(0,i.Z)(j,2),w=S[0],E=S[1],D=(0,r.useState)({}),T=(0,i.Z)(D,2),L=T[0],z=T[1],k=function(){z({}),m(!1)};return{showModalAdd:function(){M("add"),z({}),b(),m(!0)},showModalEdit:function(n){M("edit"),e.ChiTietDanhMucChung({ID:n}).then((function(n){n.data.Status>0?(z(n.data.Data),b(),m(!0)):(u.ZP.destroy(),u.ZP.error(n.data.Message))})).catch((function(n){u.ZP.destroy(),u.ZP.error(n.toString())}))},submitModalAddEdit:function(t){E(!0),"add"===v&&e.ThemDanhSachChung(t).then((function(t){E(!1),t.data.Status>0?(u.ZP.destroy(),u.ZP.success(t.data.Message),k(),l.getData(n)):(E(!1),u.ZP.destroy(),u.ZP.error(t.data.Message))})).catch((function(n){E(!1),u.ZP.destroy(),u.ZP.error(n.toString())})),"edit"===v&&e.SuaDanhMucChung(t).then((function(t){t.data.Status>0?(E(!1),u.ZP.destroy(),u.ZP.success(t.data.Message),k(),l.getData(n)):(E(!1),u.ZP.destroy(),u.ZP.error(t.data.Message))})).catch((function(n){E(!1),u.ZP.destroy(),u.ZP.error(n.toString())}))},deleteModalAddEdit:function(i){c.Z.confirm({title:"X\xf3a D\u1eef Li\u1ec7u",content:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a d\u1eef li\u1ec7u n\xe0y kh\xf4ng?",cancelText:"Kh\xf4ng",okText:"C\xf3",onOk:function(){E(!0),e.XoaDanhMucChung({ListID:[i]}).then((function(e){e.data.Status>0?(E(!1),l.getData((0,a.Z)((0,a.Z)({},n),{},{PageNumber:Math.ceil((h-1)/n.PageSize)<n.PageNumber?Math.ceil((h-1)/n.PageSize):n.PageNumber})),u.ZP.destroy(),u.ZP.success(e.data.Message),t((0,a.Z)((0,a.Z)({},n),{},{PageNumber:Math.ceil((h-1)/n.PageSize)<n.PageNumber?Math.ceil((h-1)/n.PageSize):n.PageNumber}))):(u.ZP.destroy(),u.ZP.error(e.data.Message))})).catch((function(n){u.ZP.destroy(),u.ZP.error(n.toString())}))}})},onFilter:function(e,a){"GhiChu"===a&&e&&(e=s()(e).format("YYYY"));var i=n,r={value:e,property:a},o=(0,d.mB)(i,r,null);t(o),(0,d.ZZ)(o)},onTableChange:function(e,a,i){var r=n,o={pagination:e,filters:a,sorter:i},c=(0,d.mB)(r,null,o);t(c)},dataModalAddEdit:L,confirmLoading:w,visibleModalAddEdit:g,hideModalAddEdit:k,action:v,modalKey:y}}},86460:function(n,t,e){e.d(t,{Z:function(){return u}});var a=e(1413),i=e(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=e(34224),c=function(n,t){return i.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:t,icon:r}))};c.displayName="DeleteOutlined";var u=i.forwardRef(c)},81299:function(n,t,e){e.d(t,{Z:function(){return u}});var a=e(1413),i=e(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=e(34224),c=function(n,t){return i.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:t,icon:r}))};c.displayName="EditOutlined";var u=i.forwardRef(c)},79588:function(n,t,e){e.d(t,{Z:function(){return u}});var a=e(1413),i=e(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},o=e(34224),c=function(n,t){return i.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:t,icon:r}))};c.displayName="PlusOutlined";var u=i.forwardRef(c)}}]);
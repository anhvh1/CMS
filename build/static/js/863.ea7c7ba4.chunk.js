"use strict";(self.webpackChunkbrvh=self.webpackChunkbrvh||[]).push([[863],{44024:function(n,t,e){e.d(t,{_:function(){return c},c:function(){return d}});var a=e(1413),i=e(46008),r=e(66660),o=e(62559),c=function(n){return(0,o.jsx)(i.Z,(0,a.Z)((0,a.Z)({onForm:i.Z.useForm},n),{},{onFieldsChange:function(){(0,r.dM)(n.form||n.ref,n.onChangeStatusButton,n.name)}}))},d=i.Z.useForm},94115:function(n,t,e){e.d(t,{c:function(){return l}});var a=e(1413),i=e(93433),r=e(46008),o=e(66660),c=e(70785),d=e(62559),u=r.Z.Item,l=function(n){var t=n.rules?n.rules:[];return(0,d.jsx)(u,(0,a.Z)((0,a.Z)({},n),{},{rules:[].concat((0,i.Z)(t),[{validator:function(t,e,a){return(0,o.ft)(t,e,a,c.MAXLENGTH,null===n||void 0===n?void 0:n.label)}}])}))}},24274:function(n,t,e){e.d(t,{Z:function(){return l}});e(50390);var a,i=e(30168),r=e(16932),o=e(29665),c=r.ZP.div(a||(a=(0,i.Z)(["\n  /* margin-top: 15px;\n  margin-bottom: 15px; */\n  text-align: right;\n  /* display: inline-block; */\n  flex: 1;\n  padding: 0 3px 0 0;\n  /* margin-bottom: 10px; */\n  display: flex;\n  gap: 10px;\n  justify-content: end;\n  flex-wrap: wrap;\n  align-items: center;\n  @media only screen and (max-width: 1336px) {\n    text-align: left;\n    /* display: block; */\n    flex: none;\n    width: 100%;\n    padding: 0 0 10px 0;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  /* button {\n    margin-right: 0px;\n    margin-left: 10px;\n    @media only screen and (max-width: 1336px) {\n      margin-left: 0px;\n      margin-right: 10px;\n    }\n  } */\n"]))),d=(0,o.Z)(c),u=e(62559),l=function(n){return(0,u.jsx)(d,{children:n.children})}},32812:function(n,t,e){e.d(t,{z:function(){return r}});var a=e(29439),i=e(50390);function r(n){var t=(0,i.useState)(0),e=(0,a.Z)(t,2),r=e[0],o=e[1];return[r,function(){o(r+1)}]}},12863:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var a=e(1413),i=e(29439),r=e(78333),o=e(50390),c=e(34424),d=e(95076),u=e(3143),l=e(7335),s=e(24274),h=e(41367),f=e(23194),g=e(31348),Z=e(47471),m=e(21669),x=e(66660),p=(e(32812),e(64693)),v=e(36837),T=e(70785),M=e(93433),b=e(74165),C=e(15861),P=e(50146),y=e(94115),w=e(44024),j=e(62559),S=function(n){var t=(0,w.c)(),e=(0,i.Z)(t,1)[0],r=(0,o.useState)(!0),c=(0,i.Z)(r,2),d=(c[0],c[1]),u=n.dataEdit,l=n.loading,s=n.visible,h=n.action,f=(0,o.useState)([]),g=(0,i.Z)(f,2),Z=g[0],x=g[1];(0,o.useEffect)((function(){if(u&&u.ID){e&&e.setFieldsValue((0,a.Z)((0,a.Z)({},u),{},{TrangThai:u.TrangThai?1:0}));var n=u.GhiChu;if(n){var t=n.split(",").map(Number);x(t)}}}),[]);var p=function(){var t=(0,C.Z)((0,b.Z)().mark((function t(i){var r;return(0,b.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.preventDefault(),t.next=3,e.validateFields();case 3:r=t.sent,n.onCreate((0,a.Z)((0,a.Z)({},r),{},{Loai:2,TrangThai:Boolean(r.TrangThai)}));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var n=(0,C.Z)((0,b.Z)().mark((function n(t,a){var i,r;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getFieldsValue();case 2:i=n.sent,r=i.Ten,d(!r);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();return(0,j.jsx)(m.u_,{title:"".concat("edit"===h?"S\u1eecA":"TH\xcaM"," K\u1ef2 B\xc1O C\xc1O"),width:650,visible:s,onCancel:n.onCancel,footer:[(0,j.jsx)(m.zx,{onClick:n.onCancel,children:"H\u1ee7y"},"back"),(0,j.jsx)(m.zx,{htmlType:"submit",type:"primary",form:"FormKyBaoCao",loading:l,onClick:p,children:"L\u01b0u"},"submit")],children:(0,j.jsxs)(w._,{form:e,name:"FormKyBaoCao",onChange:v,children:["edit"===h?(0,j.jsx)(y.c,{name:"ID",hidden:!0}):"",(0,j.jsx)(y.c,(0,a.Z)((0,a.Z)({label:"T\xean Th\u1eddi Gian",name:"Ten"},T.ITEM_LAYOUT),{},{rules:[T.REQUIRED],children:(0,j.jsx)(m.II,{})})),(0,j.jsx)(y.c,(0,a.Z)((0,a.Z)({name:"GhiChu",label:"Ch\u1ecdn th\u1eddi gian (Th\xe1ng)"},T.ITEM_LAYOUT),{},{rules:[T.REQUIRED]})),function(){for(var n=[],t=function(t){n.push((0,j.jsx)("button",{style:{width:"46px",backgroundColor:Z.includes(t)?"#F2F8FF":"white",border:"1px solid gray",borderRadius:"5px",marginRight:"2px"},onClick:function(){return n=t,void x((function(t){var a;return(a=t.includes(n)?t.filter((function(t){return t!==n})):[].concat((0,M.Z)(t),[n])).sort((function(n,t){return n-t})),e.setFieldsValue({GhiChu:"".concat(a.join(", "))}),a}));var n},children:t},t))},a=1;a<=12;a++)t(a);return n}(),(0,j.jsx)(y.c,(0,a.Z)((0,a.Z)({label:"\u0110ang s\u1eed d\u1ee5ng",name:"TrangThai"},T.ITEM_LAYOUT),{},{rules:[T.REQUIRED],children:(0,j.jsxs)(P.ZP.Group,{name:"radiogroup",onChange:function(n){"radio = ".concat(n.target.value)},children:[(0,j.jsx)(P.ZP,{value:1,children:"C\xf3"}),(0,j.jsx)(P.ZP,{value:0,children:"Kh\xf4ng"})]})}))]})})},E=e(81299),D=e(86460),I=e(79588),k=e(11322);var z=(0,c.$j)((function(n){return(0,a.Z)({},n.DMThoiGian)}),d.Z)((function(n){document.title="Danh m\u1ee5c th\u1eddi gian";var t=(0,o.useState)(p.parse(n.location.search)),e=(0,i.Z)(t,2),a=e[0],c=e[1],d=(0,v.Z)(T.DANHMUCCHUNG.KYBAOCAO).api;(0,o.useEffect)((function(){(0,x.ZZ)(a),n.getData(a)}),[a]),(0,o.useEffect)((function(){n.getData(a)}),[]);var M=n.DanhSachThoiGian,b=n.TotalRow,C=(n.role,(0,k.M)(a,c,d,n,b)),P=C.showModalAdd,y=C.showModalEdit,w=C.submitModalAddEdit,z=C.deleteModalAddEdit,A=C.onFilter,L=C.onTableChange,N=C.dataModalAddEdit,F=C.confirmLoading,G=C.visibleModalAddEdit,B=C.hideModalAddEdit,R=C.action,H=C.modalKey,O=a.PageNumber?parseInt(a.PageNumber):1,K=a.PageSize?parseInt(a.PageSize):(0,x.hL)(),q=[{title:"STT",width:"5%",align:"center",render:function(n,t,e){return(0,j.jsx)("span",{children:(O-1)*K+(e+1)})}},{title:"T\xean Th\u1eddi Gian",dataIndex:"Ten",align:"left",width:"25%"},{title:"M\xe3 Th\u1eddi Gian",dataIndex:"Ma",align:"left",width:"15%"},{title:"Ghi ch\xfa",dataIndex:"GhiChu",align:"left",width:"35%"},{title:"Lo\u1ea1i Danh M\u1ee5c",dataIndex:"Loai",width:"25%"},{title:"\u0110ang s\u1eed d\u1ee5ng",dataIndex:"TrangThai",align:"center",width:"10%",render:function(n,t){return(0,j.jsx)(Z.Z,{checked:t.TrangThai})}},{title:"Thao t\xe1c",width:"10%",align:"center",margin:"15px",render:function(n,t){return function(n){return(0,j.jsxs)("div",{className:"action-btn",children:[(0,j.jsx)(r.Z,{title:"S\u1eeda",children:(0,j.jsx)(E.Z,{onClick:function(){return y(n.ID)}})}),(0,j.jsx)(r.Z,{title:"X\xf3a",children:(0,j.jsx)(D.Z,{onClick:function(){return z(n.ID)}})})]})}(t)}}];return(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(l.Z,{children:"Danh m\u1ee5c th\u1eddi gian"}),(0,j.jsx)(s.Z,{children:(0,j.jsxs)(m.zx,{type:"primary",onClick:P,children:[(0,j.jsx)(I.Z,{}),"Th\xeam m\u1edbi"]})}),(0,j.jsxs)(h.Z,{children:[(0,j.jsx)(f.Z,{children:(0,j.jsx)(m.Vr,{allowClear:!0,defaultValue:a.Keyword,placeholder:"Nh\u1eadp m\xe3 ho\u1eb7c th\u1eddi gian",style:{width:300},onSearch:function(n){return A(n,"Keyword")}})}),(0,j.jsx)(g.ZP,{columns:q,dataSource:M,onChange:L,pagination:{showSizeChanger:!0,showTotal:function(n,t){return"T\u1eeb ".concat(t[0]," \u0111\u1ebfn ").concat(t[1]," tr\xean ").concat(n," k\u1ebft qu\u1ea3")},total:b,current:O,pageSize:K}})]}),(0,j.jsx)(S,{visible:G,dataEdit:N,action:R,loading:F,onCreate:w,onCancel:B,DanhSachThoiGian:M},H)]})}))},11322:function(n,t,e){e.d(t,{M:function(){return h}});var a=e(1413),i=e(29439),r=e(50390),o=e(32812),c=e(891),d=e(32955),u=e(66660),l=e(60606),s=e.n(l),h=function(n,t,e,l,h){var f=(0,r.useState)(!1),g=(0,i.Z)(f,2),Z=g[0],m=g[1],x=(0,r.useState)(""),p=(0,i.Z)(x,2),v=p[0],T=p[1],M=(0,o.z)(),b=(0,i.Z)(M,2),C=b[0],P=b[1],y=(0,r.useState)(!1),w=(0,i.Z)(y,2),j=w[0],S=w[1],E=(0,r.useState)({}),D=(0,i.Z)(E,2),I=D[0],k=D[1],z=function(){k({}),m(!1)};return{showModalAdd:function(){T("add"),k({}),P(),m(!0)},showModalEdit:function(n){T("edit"),e.ChiTietDanhMucChung({ID:n}).then((function(n){n.data.Status>0?(k(n.data.Data),P(),m(!0)):(d.ZP.destroy(),d.ZP.error(n.data.Message))})).catch((function(n){d.ZP.destroy(),d.ZP.error(n.toString())}))},submitModalAddEdit:function(t){S(!0),"add"===v&&e.ThemDanhSachChung(t).then((function(t){S(!1),t.data.Status>0?(d.ZP.destroy(),d.ZP.success(t.data.Message),z(),l.getData(n)):(S(!1),d.ZP.destroy(),d.ZP.error(t.data.Message))})).catch((function(n){S(!1),d.ZP.destroy(),d.ZP.error(n.toString())})),"edit"===v&&e.SuaDanhMucChung(t).then((function(t){t.data.Status>0?(S(!1),d.ZP.destroy(),d.ZP.success(t.data.Message),z(),l.getData(n)):(S(!1),d.ZP.destroy(),d.ZP.error(t.data.Message))})).catch((function(n){S(!1),d.ZP.destroy(),d.ZP.error(n.toString())}))},deleteModalAddEdit:function(i){c.Z.confirm({title:"X\xf3a D\u1eef Li\u1ec7u",content:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a d\u1eef li\u1ec7u n\xe0y kh\xf4ng?",cancelText:"Kh\xf4ng",okText:"C\xf3",onOk:function(){S(!0),e.XoaDanhMucChung({ListID:[i]}).then((function(e){e.data.Status>0?(S(!1),l.getData((0,a.Z)((0,a.Z)({},n),{},{PageNumber:Math.ceil((h-1)/n.PageSize)<n.PageNumber?Math.ceil((h-1)/n.PageSize):n.PageNumber})),d.ZP.destroy(),d.ZP.success(e.data.Message),t((0,a.Z)((0,a.Z)({},n),{},{PageNumber:Math.ceil((h-1)/n.PageSize)<n.PageNumber?Math.ceil((h-1)/n.PageSize):n.PageNumber}))):(d.ZP.destroy(),d.ZP.error(e.data.Message))})).catch((function(n){d.ZP.destroy(),d.ZP.error(n.toString())}))}})},onFilter:function(e,a){"GhiChu"===a&&e&&(e=s()(e).format("YYYY"));var i=n,r={value:e,property:a},o=(0,u.mB)(i,r,null);t(o),(0,u.ZZ)(o)},onTableChange:function(e,a,i){var r=n,o={pagination:e,filters:a,sorter:i},c=(0,u.mB)(r,null,o);t(c)},dataModalAddEdit:I,confirmLoading:j,visibleModalAddEdit:Z,hideModalAddEdit:z,action:v,modalKey:C}}},86460:function(n,t,e){e.d(t,{Z:function(){return d}});var a=e(1413),i=e(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=e(34224),c=function(n,t){return i.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:t,icon:r}))};c.displayName="DeleteOutlined";var d=i.forwardRef(c)},81299:function(n,t,e){e.d(t,{Z:function(){return d}});var a=e(1413),i=e(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=e(34224),c=function(n,t){return i.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:t,icon:r}))};c.displayName="EditOutlined";var d=i.forwardRef(c)},79588:function(n,t,e){e.d(t,{Z:function(){return d}});var a=e(1413),i=e(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},o=e(34224),c=function(n,t){return i.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:t,icon:r}))};c.displayName="PlusOutlined";var d=i.forwardRef(c)}}]);
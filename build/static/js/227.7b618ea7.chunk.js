"use strict";(self.webpackChunkbrvh=self.webpackChunkbrvh||[]).push([[227],{44024:function(n,e,t){t.d(e,{_:function(){return o},c:function(){return d}});var a=t(1413),i=t(46008),r=t(66660),c=t(62559),o=function(n){return(0,c.jsx)(i.Z,(0,a.Z)((0,a.Z)({onForm:i.Z.useForm},n),{},{onFieldsChange:function(){(0,r.dM)(n.form||n.ref,n.onChangeStatusButton,n.name)}}))},d=i.Z.useForm},94115:function(n,e,t){t.d(e,{c:function(){return u}});var a=t(1413),i=t(93433),r=t(46008),c=t(66660),o=t(70785),d=t(62559),l=r.Z.Item,u=function(n){var e=n.rules?n.rules:[];return(0,d.jsx)(l,(0,a.Z)((0,a.Z)({},n),{},{rules:[].concat((0,i.Z)(e),[{validator:function(e,t,a){return(0,c.ft)(e,t,a,o.MAXLENGTH,null===n||void 0===n?void 0:n.label)}}])}))}},24274:function(n,e,t){t.d(e,{Z:function(){return u}});t(50390);var a,i=t(30168),r=t(16932),c=t(29665),o=r.ZP.div(a||(a=(0,i.Z)(["\n  /* margin-top: 15px;\n  margin-bottom: 15px; */\n  text-align: right;\n  /* display: inline-block; */\n  flex: 1;\n  padding: 0 3px 0 0;\n  /* margin-bottom: 10px; */\n  display: flex;\n  gap: 10px;\n  justify-content: end;\n  flex-wrap: wrap;\n  align-items: center;\n  @media only screen and (max-width: 1336px) {\n    text-align: left;\n    /* display: block; */\n    flex: none;\n    width: 100%;\n    padding: 0 0 10px 0;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  /* button {\n    margin-right: 0px;\n    margin-left: 10px;\n    @media only screen and (max-width: 1336px) {\n      margin-left: 0px;\n      margin-right: 10px;\n    }\n  } */\n"]))),d=(0,c.Z)(o),l=t(62559),u=function(n){return(0,l.jsx)(d,{children:n.children})}},32812:function(n,e,t){t.d(e,{z:function(){return r}});var a=t(29439),i=t(50390);function r(n){var e=(0,i.useState)(0),t=(0,a.Z)(e,2),r=t[0],c=t[1];return[r,function(){c(r+1)}]}},73227:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var a=t(1413),i=t(29439),r=t(78333),c=t(50390),o=t(34424),d=t(58675),l=t(3143),u=t(7335),s=t(24274),h=t(41367),f=t(23194),g=t(31348),Z=t(47471),m=t(71017),x=t(66660),p=(t(32812),t(64693)),v=t(36837),P=t(70785),M=t(74165),T=t(15861),b=t(50146),j=t(94115),w=t(44024),y=t(62559),C=function(n){var e=(0,w.c)(),t=(0,i.Z)(e,1)[0],r=(0,c.useState)(!0),o=(0,i.Z)(r,2),d=o[0],l=o[1],u=n.dataEdit,s=n.loading,h=n.visible,f=n.action;(0,c.useEffect)((function(){u&&u.ID&&t&&t.setFieldsValue((0,a.Z)((0,a.Z)({},u),{},{TrangThai:u.TrangThai?1:0}))}),[]);var g=function(){var e=(0,T.Z)((0,M.Z)().mark((function e(i){var r;return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),e.next=3,t.validateFields();case 3:r=e.sent,n.onCreate((0,a.Z)((0,a.Z)({},r),{},{Loai:8,TrangThai:Boolean(r.TrangThai)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){var n=(0,T.Z)((0,M.Z)().mark((function n(e,a){var i,r;return(0,M.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getFieldsValue();case 2:i=n.sent,r=i.Ten,l(!r);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,y.jsx)(m.u_,{title:"".concat("edit"===f?"S\u1eecA":"TH\xcaM"," LO\u1ea0I DI T\xcdCH X\u1ebeP H\u1ea0NG"),width:450,visible:h,onCancel:n.onCancel,footer:[(0,y.jsx)(m.zx,{onClick:n.onCancel,children:"H\u1ee7y"},"back"),(0,y.jsx)(m.zx,{htmlType:"submit",type:"primary",form:"FormPhamVi",loading:s,onClick:g,disabled:d,children:"L\u01b0u"},"submit")],children:(0,y.jsxs)(w._,{form:t,name:"FormPhamVi",onChange:Z,children:["edit"===f?(0,y.jsx)(j.c,{name:"ID",hidden:!0}):"",(0,y.jsx)(j.c,(0,a.Z)((0,a.Z)({label:"M\xe3 ph\u1ea1m vi",name:"Ma"},P.ITEM_LAYOUT),{},{rules:[P.REQUIRED],children:(0,y.jsx)(m.PQ,{})})),(0,y.jsx)(j.c,(0,a.Z)((0,a.Z)({label:"T\xean ph\u1ea1m vi",name:"Ten"},P.ITEM_LAYOUT),{},{rules:[P.REQUIRED],children:(0,y.jsx)(m.II,{})})),(0,y.jsx)(j.c,(0,a.Z)((0,a.Z)({label:"Ghi ch\xfa",name:"GhiChu"},P.ITEM_LAYOUT),{},{children:(0,y.jsx)(m.gx,{})})),(0,y.jsx)(j.c,(0,a.Z)((0,a.Z)({label:"\u0110ang s\u1eed d\u1ee5ng",name:"TrangThai"},P.ITEM_LAYOUT),{},{children:(0,y.jsxs)(b.ZP.Group,{name:"radiogroup",onChange:function(n){},children:[(0,y.jsx)(b.ZP,{value:1,children:"C\xf3"}),(0,y.jsx)(b.ZP,{value:0,children:"Kh\xf4ng"})]})}))]})})},S=t(81299),E=t(86460),D=t(79588),I=t(11322);var z=(0,o.$j)((function(n){return(0,a.Z)({},n.DMPhamVi)}),d.Z)((function(n){document.title="Danh M\u1ee5c Ph\u1ea1m Vi";var e=(0,c.useState)(p.parse(n.location.search)),t=(0,i.Z)(e,2),a=t[0],o=t[1],d=n.DanhSachPhamVi,M=n.TotalRow,T=n.role,b=(0,v.Z)(P.DANHMUCCHUNG.PHAMVI).api;(0,c.useEffect)((function(){(0,x.ZZ)(a),n.getData(a)}),[a]),(0,c.useEffect)((function(){n.getData(a)}),[]);var j=(0,I.M)(a,o,b,n,M),w=j.showModalAdd,z=j.showModalEdit,A=j.submitModalAddEdit,k=j.deleteModalAddEdit,L=j.onFilter,N=j.onTableChange,V=j.dataModalAddEdit,H=j.confirmLoading,F=j.visibleModalAddEdit,q=j.hideModalAddEdit,G=j.action,O=j.modalKey,B=a.PageNumber?parseInt(a.PageNumber):1,R=a.PageSize?parseInt(a.PageSize):(0,x.hL)(),U=[{title:"STT",width:"5%",align:"center",render:function(n,e,t){return(0,y.jsx)("span",{children:(B-1)*R+(t+1)})}},{title:"T\xean Ph\u1ea1m Vi",dataIndex:"Ten",align:"left",width:"25%"},{title:"M\xe3 Ph\u1ea1m Vi",dataIndex:"Ma",align:"left",width:"15%"},{title:"Ghi ch\xfa",dataIndex:"GhiChu",align:"left",width:"35%"},{title:"Lo\u1ea1i Danh M\u1ee5c",dataIndex:"Loai",align:"center",width:"25%"},{title:"\u0110ang s\u1eed d\u1ee5ng",dataIndex:"TrangThai",align:"center",width:"10%",render:function(n,e){return(0,y.jsx)(Z.Z,{checked:e.TrangThai})}},{title:"Thao t\xe1c",width:"10%",align:"center",margin:"15px",render:function(n,e){return function(n){return(0,y.jsxs)("div",{className:"action-btn",children:[T.edit?(0,y.jsx)(r.Z,{title:"S\u1eeda",children:(0,y.jsx)(S.Z,{onClick:function(){return z(n.ID)}})}):"",T.delete?(0,y.jsx)(r.Z,{title:"X\xf3a",children:(0,y.jsx)(E.Z,{onClick:function(){return k(n.ID)}})}):""]})}(e)}}];return(0,y.jsxs)(l.Z,{children:[(0,y.jsx)(u.Z,{children:"Danh M\u1ee5c Ph\u1ea1m Vi"}),(0,y.jsx)(s.Z,{children:T&&T.add?(0,y.jsxs)(m.zx,{type:"primary",onClick:w,children:[(0,y.jsx)(D.Z,{}),"Th\xeam m\u1edbi"]}):""}),(0,y.jsxs)(h.Z,{children:[(0,y.jsx)(f.Z,{children:(0,y.jsx)(m.Vr,{allowClear:!0,defaultValue:a.Keyword,placeholder:"Nh\u1eadp m\xe3 ho\u1eb7c t\xean ph\u1ea1m vi",style:{width:300},onSearch:function(n){return L(n,"Keyword")}})}),(0,y.jsx)(g.ZP,{columns:U,dataSource:d,onChange:N,pagination:{showSizeChanger:!0,showTotal:function(n,e){return"T\u1eeb ".concat(e[0]," \u0111\u1ebfn ").concat(e[1]," tr\xean ").concat(n," k\u1ebft qu\u1ea3")},total:M,current:B,pageSize:R}})]}),(0,y.jsx)(C,{visible:F,dataEdit:V,action:G,loading:H,onCreate:A,onCancel:q,DanhSachPhamVi:d},O)]})}))},11322:function(n,e,t){t.d(e,{M:function(){return h}});var a=t(1413),i=t(29439),r=t(50390),c=t(32812),o=t(891),d=t(32955),l=t(66660),u=t(60606),s=t.n(u),h=function(n,e,t,u,h){var f=(0,r.useState)(!1),g=(0,i.Z)(f,2),Z=g[0],m=g[1],x=(0,r.useState)(""),p=(0,i.Z)(x,2),v=p[0],P=p[1],M=(0,c.z)(),T=(0,i.Z)(M,2),b=T[0],j=T[1],w=(0,r.useState)(!1),y=(0,i.Z)(w,2),C=y[0],S=y[1],E=(0,r.useState)({}),D=(0,i.Z)(E,2),I=D[0],z=D[1],A=function(){z({}),m(!1)};return{showModalAdd:function(){P("add"),z({}),j(),m(!0)},showModalEdit:function(n){P("edit"),t.ChiTietDanhMucChung({ID:n}).then((function(n){n.data.Status>0?(z(n.data.Data),j(),m(!0)):(d.ZP.destroy(),d.ZP.error(n.data.Message))})).catch((function(n){d.ZP.destroy(),d.ZP.error(n.toString())}))},submitModalAddEdit:function(e){S(!0),"add"===v&&t.ThemDanhSachChung(e).then((function(e){S(!1),e.data.Status>0?(d.ZP.destroy(),d.ZP.success(e.data.Message),A(),u.getData(n)):(S(!1),d.ZP.destroy(),d.ZP.error(e.data.Message))})).catch((function(n){S(!1),d.ZP.destroy(),d.ZP.error(n.toString())})),"edit"===v&&t.SuaDanhMucChung(e).then((function(e){e.data.Status>0?(S(!1),d.ZP.destroy(),d.ZP.success(e.data.Message),A(),u.getData(n)):(S(!1),d.ZP.destroy(),d.ZP.error(e.data.Message))})).catch((function(n){S(!1),d.ZP.destroy(),d.ZP.error(n.toString())}))},deleteModalAddEdit:function(i){o.Z.confirm({title:"X\xf3a D\u1eef Li\u1ec7u",content:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a d\u1eef li\u1ec7u n\xe0y kh\xf4ng?",cancelText:"Kh\xf4ng",okText:"C\xf3",onOk:function(){S(!0),t.XoaDanhMucChung({ListID:[i]}).then((function(t){t.data.Status>0?(S(!1),u.getData((0,a.Z)((0,a.Z)({},n),{},{PageNumber:Math.ceil((h-1)/n.PageSize)<n.PageNumber?Math.ceil((h-1)/n.PageSize):n.PageNumber})),d.ZP.destroy(),d.ZP.success(t.data.Message),e((0,a.Z)((0,a.Z)({},n),{},{PageNumber:Math.ceil((h-1)/n.PageSize)<n.PageNumber?Math.ceil((h-1)/n.PageSize):n.PageNumber}))):(d.ZP.destroy(),d.ZP.error(t.data.Message))})).catch((function(n){d.ZP.destroy(),d.ZP.error(n.toString())}))}})},onFilter:function(t,a){"GhiChu"===a&&t&&(t=s()(t).format("YYYY"));var i=n,r={value:t,property:a},c=(0,l.mB)(i,r,null);e(c),(0,l.ZZ)(c)},onTableChange:function(t,a,i){var r=n,c={pagination:t,filters:a,sorter:i},o=(0,l.mB)(r,null,c);e(o)},dataModalAddEdit:I,confirmLoading:C,visibleModalAddEdit:Z,hideModalAddEdit:A,action:v,modalKey:b}}},86460:function(n,e,t){t.d(e,{Z:function(){return d}});var a=t(1413),i=t(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=t(34224),o=function(n,e){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:r}))};o.displayName="DeleteOutlined";var d=i.forwardRef(o)},81299:function(n,e,t){t.d(e,{Z:function(){return d}});var a=t(1413),i=t(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},c=t(34224),o=function(n,e){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:r}))};o.displayName="EditOutlined";var d=i.forwardRef(o)},79588:function(n,e,t){t.d(e,{Z:function(){return d}});var a=t(1413),i=t(50390),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},c=t(34224),o=function(n,e){return i.createElement(c.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:r}))};o.displayName="PlusOutlined";var d=i.forwardRef(o)}}]);
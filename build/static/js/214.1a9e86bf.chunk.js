"use strict";(self.webpackChunkbrvh=self.webpackChunkbrvh||[]).push([[214],{44024:function(n,t,e){e.d(t,{_:function(){return u},c:function(){return c}});var a=e(1413),i=e(46008),r=e(66660),o=e(62559),u=function(n){return(0,o.jsx)(i.Z,(0,a.Z)((0,a.Z)({onForm:i.Z.useForm},n),{},{onFieldsChange:function(){(0,r.dM)(n.form||n.ref,n.onChangeStatusButton,n.name)}}))},c=i.Z.useForm},94115:function(n,t,e){e.d(t,{c:function(){return l}});var a=e(1413),i=e(93433),r=e(46008),o=e(66660),u=e(70785),c=e(62559),h=r.Z.Item,l=function(n){var t=n.rules?n.rules:[];return(0,c.jsx)(h,(0,a.Z)((0,a.Z)({},n),{},{rules:[].concat((0,i.Z)(t),[{validator:function(t,e,a){return(0,o.ft)(t,e,a,u.MAXLENGTH,null===n||void 0===n?void 0:n.label)}}])}))}},67225:function(n,t,e){var a,i=e(8491),r=e(30168),o=e(16932);e(32619),u=i.Z,(0,o.ZP)(u)(a||(a=(0,r.Z)(["\n  &.ant-switch-checked {\n    \n  }\n"])));var u},68448:function(n,t,e){e.d(t,{Z:function(){return c}});e(50390);var a,i=e(30168),r=e(16932),o=(e(32619),r.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  /* padding: 10px 0; */\n  gap: 10px;\n  width: 100%;\n"])))),u=e(62559),c=function(n){return(0,u.jsx)(o,{className:"wrapper-top",children:n.children})}},24274:function(n,t,e){e.d(t,{Z:function(){return l}});e(50390);var a,i=e(30168),r=e(16932),o=e(29665),u=r.ZP.div(a||(a=(0,i.Z)(["\n  /* margin-top: 15px;\n  margin-bottom: 15px; */\n  text-align: right;\n  /* display: inline-block; */\n  flex: 1;\n  padding: 0 3px 0 0;\n  /* margin-bottom: 10px; */\n  display: flex;\n  gap: 10px;\n  justify-content: end;\n  flex-wrap: wrap;\n  align-items: center;\n  @media only screen and (max-width: 1336px) {\n    text-align: left;\n    /* display: block; */\n    flex: none;\n    width: 100%;\n    padding: 0 0 10px 0;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  /* button {\n    margin-right: 0px;\n    margin-left: 10px;\n    @media only screen and (max-width: 1336px) {\n      margin-left: 0px;\n      margin-right: 10px;\n    }\n  } */\n"]))),c=(0,o.Z)(u),h=e(62559),l=function(n){return(0,h.jsx)(c,{children:n.children})}},32812:function(n,t,e){e.d(t,{z:function(){return r}});var a=e(29439),i=e(50390);function r(n){var t=(0,i.useState)(0),e=(0,a.Z)(t,2),r=e[0],o=e[1];return[r,function(){o(r+1)}]}},36214:function(n,t,e){e.r(t),e.d(t,{default:function(){return X}});var a=e(1413),i=e(29439),r=e(891),o=e(32955),u=e(78333),c=e(51471),h=e(50390),l=e(34424),s=e(3143),d=e(7335),f=e(24274),g=e(41367),p=e(23194),x=e(31348),Z=e(71017),T=(e(47471),e(67225),e(66660)),v=e(32812),S=e(64693),m=e(44006),D=(e(60606),e(74165)),j=e(15861),y=e(70785),w=e(97555),I=e(94115),C=e(44024),P=(e(86424),e(43946)),M=e.n(P),L=e(62559),b=function(n){var t,e,r=(0,C.c)(),o=(0,i.Z)(r,1)[0],u=n.dataEdit,c=n.loading,l=n.visible,s=n.action,d=(n.danhSachDMThuVien,n.DanhSachNguoiDung),f=(0,h.useState)([]),g=(0,i.Z)(f,2),p=(g[0],g[1],(0,h.useState)("")),x=(0,i.Z)(p,2);x[0],x[1];(0,h.useEffect)((function(){if(u&&u.DanhSachPhatID){var n=M()(u.NgaySinh).format("DD/MM/YYYY");o&&o.setFieldsValue((0,a.Z)((0,a.Z)({},u),{},{NgaySinh:u&&u.NgaySinh?M()(n,"DD/MM/YYYY"):""}))}}),[]);var v=function(){var t=(0,j.Z)((0,D.Z)().mark((function t(e){var i;return(0,D.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,o.validateFields();case 3:i=t.sent,"add"===s&&18!==P&&(i.CoQuanID=E),n.onCreate((0,a.Z)({},i));case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),S=(0,T._M)("access_token"),m=(0,T.sE)(S),P=null===m||void 0===m||null===(t=m.NguoiDung)||void 0===t?void 0:t.NguoiDungID,b=18!==P,k=((0,T._M)("access_token"),(0,T.sE)(S)),E=null===k||void 0===k||null===(e=k.NguoiDung)||void 0===e?void 0:e.CoQuanID;return(0,L.jsx)(Z.u_,{title:"".concat("edit"===s?"C\u1eadp nh\u1eadt":"Th\xeam"," Danh S\xe1ch Ph\xe1t"),width:750,visible:l,onCancel:n.onCancel,footer:[(0,L.jsx)(Z.zx,{onClick:n.onCancel,children:"H\u1ee7y"},"back"),(0,L.jsx)(Z.zx,{htmlType:"submit",type:"primary",form:"FormNgheNhan",loading:c,onClick:v,children:"L\u01b0u"},"submit")],children:(0,L.jsxs)(C._,{form:o,name:"FormNgheNhan",children:["edit"===s?(0,L.jsx)(I.c,{name:"DanhSachPhatID",hidden:!0}):"",!b&&(0,L.jsx)(I.c,(0,a.Z)((0,a.Z)({label:"Ch\u1ecdn kh\xe1ch h\xe0ng",name:"CoQuanID"},y.ITEM_LAYOUT),{},{rules:[y.REQUIRED],children:(0,L.jsx)(w.ZP,{allowClear:!0,children:null===d||void 0===d?void 0:d.map((function(n){return(0,L.jsx)(w.Wx,{value:n.ID,children:n.Ten},n.ID)}))})})),(0,L.jsx)(I.c,(0,a.Z)((0,a.Z)({label:"T\xean danh s\xe1ch ph\xe1t",name:"TenDanhSachPhat"},y.ITEM_LAYOUT),{},{rules:[y.REQUIRED],children:(0,L.jsx)(Z.II,{})})),(0,L.jsx)(I.c,(0,a.Z)((0,a.Z)({label:"M\xf4 t\u1ea3",name:"Mota"},y.ITEM_LAYOUT),{},{children:(0,L.jsx)(Z.II,{})})),(0,L.jsx)(I.c,(0,a.Z)((0,a.Z)({label:"Tr\u1ea1ng th\xe1i",name:"TrangThai"},y.ITEM_LAYOUT),{},{rules:[y.REQUIRED],children:(0,L.jsxs)(w.ZP,{allowClear:!0,children:[(0,L.jsx)(w.Wx,{value:!0,children:"\u0110ang s\u1eed d\u1ee5ng"}),(0,L.jsx)(w.Wx,{value:!1,children:"Kh\xf4ng s\u1eed d\u1ee5ng"})]})}))]})})},k=e(93433),E=e(40562),N=e(92503),F=e(69645),V=e(74497),K=e(58039),R=e(65882),H=e(86460),z=e(71885),A=(e(29058),e(36409)),U=e(32147),Q=E.Z.TreeNode,Y=function(n){var t=(0,C.c)(),e=(0,i.Z)(t,1)[0],r=(0,h.useState)([]),c=(0,i.Z)(r,2),l=c[0],d=c[1],f=(0,h.useState)([]),v=(0,i.Z)(f,2),S=v[0],y=v[1],w=n.dataThietLap,I=n.loading,P=n.visible,M=n.actionthietlap,b=n.danhSachDMThuVien,Y=n.filterData,O=b,_=(0,h.useState)(!1),W=(0,i.Z)(_,2),B=W[0],X=W[1];(0,h.useEffect)((function(){O.length&&!B&&setTimeout((function(){var n=O[0];if(n){var t=n.ThuMucID.toString();G([t],{node:{props:{eventKey:t,isLeaf:!1}},nativeEvent:{target:{outerHTML:"",parentElement:{className:""}}}})}X(!0)}),0)}),[O,B]),(0,h.useEffect)((function(){(0,T.ZZ)(Y)}),[Y]),(0,h.useEffect)((function(){w&&w.DanhSachPhatID&&e&&e.setFieldsValue((0,a.Z)({},w))}),[]);var G=function(n,t){var e=t.nativeEvent.target.outerHTML.toString(),i=t.nativeEvent.target.parentElement.className.toString(),r=e.includes("ant-dropdown-menu"),o=i.includes("ant-dropdown-menu");if(!r&&!o){var u=t.node.props.eventKey.toString();if(u&&!t.node.props.isLeaf){var c=(0,k.Z)(l),h=c.indexOf(u);h>-1?c.splice(h,1):c=c.concat([u]),d(c),nn((function(t){return(0,a.Z)((0,a.Z)({},t),{},{key:n})}))}}return hn()},q=(0,h.useState)({key:0,treeKey:0}),J=(0,i.Z)(q,2),$=J[0],nn=J[1],tn=$.treeKey,en=($.key,function n(t){return null===t||void 0===t?void 0:t.map((function(t){var e,a=l.includes(t.ThuMucID.toString());e=1===t.ThuMucID?(0,L.jsx)(V.Z,{}):a?(0,L.jsx)(K.Z,{}):(0,L.jsx)(R.Z,{});var i=(0,L.jsx)("div",{children:(0,L.jsx)("span",{children:t.TenThuMuc})});return t.Children?(0,L.jsx)(Q,{switcherIcon:e,title:i,Children:t.Children,dataRef:t,defaultExpandAll:!0,children:n(t.Children)},t.ThuMucID):(0,L.jsx)(Q,{title:i,switcherIcon:e,Children:t.Children,dataRef:t,defaultExpandAll:!0},t.ThuMucID)}))}),an=(0,h.useState)(!1),rn=(0,i.Z)(an,2),on=rn[0],un=rn[1],cn=function(n,t){var e=t.node.props.dataRef.ThuMucID||"";mn((function(n){return(0,a.Z)((0,a.Z)({},n),{},{ThuMucID:e})})),un(!1)},hn=function(){return null!==b&&void 0!==b&&b.length?(0,L.jsx)(E.Z,{filterTreeNode:function(n){return 1===n.props.dataRef.Highlight},onSelect:cn,onExpand:G,style:{userSelect:"none",minHeight:"120px",maxHeight:"150px",overflowY:"auto"},expandedKeys:Y.Keyword?n.expandedKeys:l,children:en(O)}):(0,L.jsx)(x.o1,{loading:n.TableLoading})},ln=(0,h.useState)([]),sn=(0,i.Z)(ln,2),dn=sn[0],fn=sn[1],gn=(0,h.useState)([]),pn=(0,i.Z)(gn,2),xn=pn[0],Zn=pn[1],Tn=(0,h.useState)({Loai:"",Keyword:"",ThuMucID:"",PageSize:xn,Status:"true"}),vn=(0,i.Z)(Tn,2),Sn=vn[0],mn=vn[1];(0,h.useEffect)((function(){mn((function(n){return(0,a.Z)((0,a.Z)({},n),{},{PageSize:xn.toString()})}))}),[xn]),(0,h.useEffect)((function(){Dn()}),[Sn]);var Dn=function(){m.Z.DanhSachMedia(Sn).then((function(n){n.data.Status>0?(fn(n.data.Data),Zn(n.data.TotalRow)):(o.ZP.destroy(),o.ZP.warning(n.data.Message))}))},jn=function(n){var t=n.split(":").map(Number),e=(0,i.Z)(t,3);return 3600*e[0]+60*e[1]+e[2]},yn=[{title:"STT",align:"center",width:"5%",render:function(n,t,e){return e+1}},{title:"Th\u1eddi gian b\u1eaft \u0111\u1ea7u",align:"center",width:"15%",render:function(n,t,e){if(0===e)return"00:00:00";for(var a=0,i=0;i<e;i++)a+=jn(S[i].ThoiLuongTrinhChieu);return function(n){var t=Math.floor(n/3600),e=Math.floor(n%3600/60),a=n%60;return"".concat(String(t).padStart(2,"0"),":").concat(String(e).padStart(2,"0"),":").concat(String(a).padStart(2,"0"))}(a)}},{title:"Th\u1eddi L\u01b0\u1ee3ng Tr\xecnh Chi\u1ebfu",dataIndex:"ThoiLuongTrinhChieu",key:"ThoiLuongTrinhChieu",width:"15%",align:"center",render:function(n,t){return(0,L.jsx)(wn,{value:t.ThoiLuongTrinhChieu,onChange:function(n){return In(n,t)}})}},{title:"T\xean file",dataIndex:"TenFile",align:"center",width:"30%"},{title:"Thumbnail",dataIndex:"UrlFile",align:"center",width:"6%",render:function(n){return n&&(n.startsWith("http")||n.startsWith("https"))?n.toLowerCase().endsWith(".mp4")||n.toLowerCase().endsWith(".webm")?(0,L.jsx)("video",{src:n,style:{width:"50%",height:"50px",textAlign:"center"},controls:!0}):(0,L.jsx)("img",{src:n,style:{width:"50%",height:"50px",objectFit:"cover",textAlign:"center"},alt:"Thumbnail"}):null}},{title:"Thao t\xe1c",dataIndex:"",width:"10%",align:"center",render:function(n,t){return Pn(t)}}],wn=function(n){var t=n.value,e=n.onChange,a=(0,h.useState)(t),r=(0,i.Z)(a,2),o=r[0],u=r[1];return(0,L.jsx)(Z.II,{value:o,onChange:function(n){var t=n.target.value;if(u(t),/^\d{2}:\d{2}:\d{2}$/.test(t)){var a=t.split(":").map(Number),r=(0,i.Z)(a,3),o=r[0],c=r[1],h=r[2],l=c>59?0:c,s=h>59?0:h,d="".concat(String(o>23?0:o).padStart(2,"0"),":").concat(String(l).padStart(2,"0"),":").concat(String(s).padStart(2,"0"));u(d),e(d)}},style:{width:100},placeholder:"hh:mm:ss"})},In=function(n,t){var e=S.map((function(e){return e.ThuTu===t.ThuTu?(0,a.Z)((0,a.Z)({},e),{},{ThoiLuongTrinhChieu:n}):e}));y(e)},Cn=function(n){return function(n){var t=Math.floor(n/3600),e=Math.floor(n%3600/60),a=n%60;return"".concat(t.toString().padStart(2,"0"),":").concat(e.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"))}(n.reduce((function(n,t){return n+function(n){var t=n.split(":").map(Number),e=(0,i.Z)(t,3);return 3600*e[0]+60*e[1]+e[2]}(t.ThoiLuongTrinhChieu)}),0))},Pn=function(n){return(0,L.jsx)("div",{className:"action-btn",children:(0,L.jsx)(u.Z,{title:"X\xf3a",children:(0,L.jsx)(H.Z,{onClick:function(){return Mn(n)}})})})},Mn=function(n){var t=S.filter((function(t){return t.ThuTu!==n.ThuTu}));y(t)};(0,h.useEffect)((function(){if(n.dataThietLap&&Array.isArray(n.dataThietLap)){var t=n.dataThietLap.map((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},{STT:t+1})}));y(t)}}),[n.dataThietLap]);var Ln=function(){var t=(0,j.Z)((0,D.Z)().mark((function t(){var e,a,i;return(0,D.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=n.dataModalDanhSachMediaID.DanhSachPhatID,a=Cn(S),i={DanhSachPhatID:e,DanhSachMediaID:S.map((function(n,t){var e=t+1;return{ID:n.ID,TenFile:n.TenFile,ThoiLuongTrinhChieu:n.ThoiLuongTrinhChieu,TrangThai:n.TrangThai,Tag:null,ThuMucID:n.ThuMucID,ThuTu:e}})),TongThoiGianPhat:a,TongSoMedia:S.length},t.next=6,m.Z.themThietLap(i);case 6:t.sent.data.Status>0?(n.onCancel(),o.ZP.success(res.data.Message)):o.ZP.error(res.data.Message),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error adding thiet lap:",t.t0);case 13:(0,n.onCreate)(),n.getList(Y);case 16:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),bn=(0,h.useState)(null),kn=(0,i.Z)(bn,2),En=(kn[0],kn[1]),Nn=(0,z.Dy)((0,z.VT)(z.we,{activationConstraint:{distance:1}}));return(0,L.jsx)(Z.u_,{title:"".concat("edit"===M?"C\u1eacP NH\u1eacT":"THI\u1ebeT L\u1eacP"," DANH S\xc1CH PH\xc1T"),width:"100%",visible:P,onCancel:n.onCancel,maskClosable:!1,footer:[(0,L.jsx)(Z.zx,{onClick:n.onCancel,children:"H\u1ee7y"},"back"),(0,L.jsx)(Z.zx,{type:"primary",loading:I,onClick:Ln,children:"L\u01b0u"},"submit")],children:(0,L.jsxs)(s.Z,{children:[(0,L.jsxs)(g.Z,{style:{float:"left",width:"25%",border:"1px solid white"},children:[(0,L.jsx)(g.Z,{children:(0,L.jsxs)("div",{style:{userSelect:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},className:"mg-top",children:[(0,L.jsx)(N.Z,{onChange:function(n){var t=n.target.checked;mn((function(n){return(0,a.Z)((0,a.Z)({},n),{},{ThuMucID:t?null:""})})),un(t)},checked:on,children:"T\u1ea5t c\u1ea3 th\u01b0 m\u1ee5c"}),hn()]},tn)}),(0,L.jsxs)(g.Z,{children:[(0,L.jsxs)(p.Z,{children:[(0,L.jsxs)(F.Z,{placeholder:"Ch\u1ecdn lo\u1ea1i",onChange:function(n){mn((function(t){return(0,a.Z)((0,a.Z)({},t),{},{Loai:n})}))},style:{width:200},allowClear:!0,children:[(0,L.jsx)(Option,{value:"1",children:"H\xecnh \u1ea3nh"}),(0,L.jsx)(Option,{value:"2",children:"Video"})]}),(0,L.jsx)(Z.Vr,{placeholder:"T\xecm ki\u1ebfm theo t\xean",onSearch:function(n){mn((function(t){return(0,a.Z)((0,a.Z)({},t),{},{Keyword:n})}))},style:{width:200},allowClear:!0})]}),(0,L.jsx)("div",{style:{overflowY:"auto",maxHeight:"413px",minHeight:"413px",display:"flex",flexWrap:"wrap",gap:"10px"},children:null===dn||void 0===dn?void 0:dn.map((function(n){return(0,L.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"calc(50% - 10px)",cursor:"move"},draggable:"true",onDragStart:function(t){return function(n,t){n.dataTransfer.setData("text/plain",JSON.stringify(t))}(t,n)},onClick:function(){return function(n){var t={ID:n.ID,TenFile:n.TenFile,UrlFile:n.UrlFile,ThoiLuongTrinhChieu:n.ThoiLuongTrinhChieu,ThuTu:S.length+1};y((function(n){return[].concat((0,k.Z)(n),[t])}))}(n)},children:[n.UrlFile.toLowerCase().endsWith(".mp4")?(0,L.jsx)("video",{width:"100%",height:"150px",controls:!0,children:(0,L.jsx)("source",{src:n.UrlFile,type:"video/mp4"})}):(0,L.jsx)("img",{style:{width:"100%",height:"150px",objectFit:"cover"},src:n.UrlFile,alt:n.TenFile}),(0,L.jsx)("p",{style:{textAlign:"center",marginTop:"5px"},children:n.TenFile})]},n.id)}))})]})]}),(0,L.jsxs)(g.Z,{style:{float:"left",width:"75%",border:"1px solid white"},children:[(0,L.jsxs)(g.Z,{style:{textAlign:"center",paddingTop:"20px",height:"50px"},children:["T\u1ed5ng th\u1eddi gian ph\xe1t:"," ",(0,L.jsx)("span",{style:{marginRight:"30px"},children:Cn(S)})," ","T\u1ed5ng s\u1ed1 Media: ",(0,L.jsx)("span",{children:S.length})]}),(0,L.jsx)(g.Z,{children:(0,L.jsx)(z.LB,{sensors:Nn,onDragEnd:function(n){var t=n.active,e=n.over;t.id!==(null===e||void 0===e?void 0:e.id)&&y((function(n){var a=n.findIndex((function(n){return n.ThuTu===t.id})),i=n.findIndex((function(n){return n.ThuTu===(null===e||void 0===e?void 0:e.id)}));return(0,A.Rp)(n,a,i)}))},children:(0,L.jsx)(A.Fo,{items:S.map((function(n){return n.ThuTu})),strategy:A.qw,children:(0,L.jsx)("div",{children:(0,L.jsx)(x.ZP,{components:{body:{row:function(n){var t=(0,A.nB)({id:n["data-row-key"]}),e=t.attributes,i=t.listeners,r=t.setNodeRef,o=t.transform,u=t.transition,c=t.isDragging,h=(0,a.Z)((0,a.Z)({},n.style),{},{transform:U.ux.Translate.toString(o),transition:u,cursor:"move"},c?{position:"relative",zIndex:9999}:{});return(0,L.jsx)("tr",(0,a.Z)((0,a.Z)((0,a.Z)({},n),{},{ref:r,style:h},e),i))}}},rowKey:"ThuTu",columns:yn,dataSource:S,pagination:!1,scroll:{y:"600px"},onRow:function(n,t){return{onDrop:function(n){return function(n,t){n.preventDefault();var e=JSON.parse(n.dataTransfer.getData("text/plain")),i={ID:e.ID,TenFile:e.TenFile,UrlFile:e.UrlFile,ThoiLuongTrinhChieu:e.ThoiLuongTrinhChieu,ThuTu:t+1};y((function(n){var e=(0,k.Z)(n);return e.splice(t,0,i),e.map((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},{ThuTu:t+1})}))}))}(n,t)},onDragOver:function(n){return function(n,t){n.preventDefault(),En(void 0!==t?t:null)}(n,t)}}}})})})})})]})]})})},O=e(81299),_=e(37483),W=e(79588),B=e(68448);var X=(0,l.$j)((function(n){return(0,a.Z)((0,a.Z)({},n.QLThuVien),{},{role:(0,T.Ry)(n.Auth.role,"danh-muc-chuc-vu")})}),c.Z)((function(n){var t=(0,h.useState)(S.parse(n.location.search)),e=(0,i.Z)(t,2),a=e[0],D=e[1],j=(0,h.useState)({}),y=(0,i.Z)(j,2),w=y[0],I=y[1],C=(0,h.useState)(!1),P=(0,i.Z)(C,2),M=P[0],k=P[1],E=(0,h.useState)(""),N=(0,i.Z)(E,2),F=N[0],V=N[1],K=(0,v.z)(),R=(0,i.Z)(K,2),z=R[0],A=R[1],U=(0,h.useState)([]),Q=(0,i.Z)(U,2),X=(Q[0],Q[1]),G=(0,h.useState)(!1),q=(0,i.Z)(G,2),J=q[0],$=q[1],nn=(0,l.I0)();document.title="Qu\u1ea3n L\xfd Danh S\xe1ch Ph\xe1t",(0,h.useEffect)((function(){(0,T.ZZ)(a),n.getList(a),n.getInitData(a)}),[a]),(0,h.useEffect)((function(){n.getList(a),n.getInitData(a),nn(c.Z.getInitData(a))}),[]);var tn=function(n,t){var e=a,i={value:n,property:t},r=(0,T.mB)(e,i,null);D(r),X([])},en=function(){X([]),I({}),k(!1)},an=(0,h.useState)(""),rn=(0,i.Z)(an,2),on=rn[0],un=rn[1],cn=(0,h.useState)(!1),hn=(0,i.Z)(cn,2),ln=hn[0],sn=hn[1],dn=(0,h.useState)(!1),fn=(0,i.Z)(dn,2),gn=(fn[0],fn[1]),pn=(0,v.z)(),xn=(0,i.Z)(pn,2),Zn=(xn[0],xn[1]),Tn=(0,h.useState)({}),vn=(0,i.Z)(Tn,2),Sn=vn[0],mn=vn[1],Dn=(0,h.useState)({}),jn=(0,i.Z)(Dn,2),yn=jn[0],wn=jn[1],In=(0,h.useState)(null),Cn=(0,i.Z)(In,2),Pn=(Cn[0],Cn[1],function(t){return(0,L.jsxs)("div",{className:"action-btn",children:[(0,L.jsx)(u.Z,{title:"S\u1eeda",children:(0,L.jsx)(O.Z,{onClick:function(){return function(n){var t=n;V("edit"),m.Z.chiTietQLThuVien({DanhSachPhatID:t}).then((function(n){n.data.Status>0?(I(n.data.Data),A(),k(!0)):(o.ZP.destroy(),o.ZP.error(n.data.Message))})).catch((function(n){o.ZP.destroy(),o.ZP.error(n.toString())}))}(t.DanhSachPhatID)}})}),(0,L.jsx)(u.Z,{title:"X\xf3a",children:(0,L.jsx)(H.Z,{onClick:function(){return e=t.DanhSachPhatID,void r.Z.confirm({title:"X\xf3a D\u1eef Li\u1ec7u",content:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a ch\u1ee9c v\u1ee5 n\xe0y kh\xf4ng?",cancelText:"Kh\xf4ng",okText:"C\xf3",onOk:function(){$(!0),m.Z.xoaQLThuVien(e,{}).then((function(t){t.data.Status>0?($(!1),n.getList(a),o.ZP.destroy(),o.ZP.success(t.data.Message)):(o.ZP.destroy(),o.ZP.error(t.data.Message))})).catch((function(n){o.ZP.destroy(),o.ZP.error(n.toString())}))}});var e}})}),(0,L.jsx)(u.Z,{title:"Thi\u1ebft l\u1eadp",children:(0,L.jsx)(_.Z,{onClick:function(){return n=t.DanhSachPhatID,un("thietlap"),void m.Z.chiTietThietLap({DanhSachPhatID:n}).then((function(n){n.data.Status>0?(mn(n.data.Data.DanhSachMediaID),wn(n.data.Data),Zn(),sn(!0)):(o.ZP.destroy(),o.ZP.error(n.data.Message))})).catch((function(n){o.ZP.destroy(),o.ZP.error(n.toString())}));var n}})})]})}),Mn=n.DanhSachQLThuVien,Ln=n.DanhSachDMThuVien,bn=n.DanhSachMedia,kn=n.DanhSachNguoiDung,En=n.TotalRow,Nn=(n.role,a.PageNumber?parseInt(a.PageNumber):1),Fn=a.PageSize?parseInt(a.PageSize):(0,T.hL)(),Vn=[{title:"S\u1ed1 th\u1ee9 t\u1ef1",width:"5%",align:"center",render:function(n,t,e){return(0,L.jsx)("span",{children:(Nn-1)*Fn+(e+1)})}},{title:"T\xean danh s\xe1ch ph\xe1t",dataIndex:"TenDanhSachPhat",align:"left",width:"30%"},{title:"T\u1ed5ng th\u1eddi gian",dataIndex:"TongThoiGianPhat",align:"center",width:"17%"},{title:"T\u1ed5ng s\u1ed1 Media",dataIndex:"TongSoMedia",align:"center",width:"8%"},{title:"Kh\xe1ch h\xe0ng",dataIndex:"TenNguoiDung",align:"center",width:"15%"},{title:"Tr\u1ea1ng th\xe1i s\u1eed d\u1ee5ng",dataIndex:"TrangThai",align:"center",width:"12%",render:function(n){return!0===n?(0,L.jsx)("span",{children:"\u0110\xe3 s\u1eed d\u1ee5ng"}):!1===n?(0,L.jsx)("span",{children:"Kh\xf4ng s\u1eed d\u1ee5ng"}):(0,L.jsx)("span",{children:"Tr\u1ea1ng th\xe1i kh\xe1c"})}},{title:"Thao t\xe1c",width:"10%",align:"center",margin:"15px",render:function(n,t){return Pn(t)}}];return(0,L.jsxs)(s.Z,{children:[(0,L.jsxs)(B.Z,{children:[(0,L.jsx)(d.Z,{children:"Qu\u1ea3n L\xfd Danh S\xe1ch Ph\xe1t"}),(0,L.jsx)(f.Z,{children:(0,L.jsxs)(Z.zx,{type:"primary",onClick:function(){V("add"),I({}),A(),k(!0)},children:[(0,L.jsx)(W.Z,{}),"Th\xeam m\u1edbi"]})})]}),(0,L.jsxs)(g.Z,{children:[(0,L.jsx)(p.Z,{children:(0,L.jsx)(Z.Vr,{defaultValue:a.Keyword,placeholder:"Nh\u1eadp t\xean danh s\xe1ch ph\xe1t",style:{width:300},onSearch:function(n){return tn(n,"Keyword")},allowClear:!0})}),(0,L.jsx)(x.ZP,{columns:Vn,dataSource:Mn,onChange:function(n,t,e){var i=a,r={pagination:n,filters:t,sorter:e},o=(0,T.mB)(i,null,r);D(o),X([])},pagination:{showSizeChanger:!0,showTotal:function(n,t){return"T\u1eeb ".concat(t[0]," \u0111\u1ebfn ").concat(t[1]," tr\xean ").concat(n," k\u1ebft qu\u1ea3")},total:En,current:Nn,pageSize:Fn},rowKey:function(n){return n.ID}})]}),(0,L.jsx)(b,{visible:M,dataEdit:w,action:F,loading:J,onCreate:function(t){$(!0),"add"===F&&m.Z.themQLThuVien(t).then((function(t){$(!1),t.data.Status>0?(o.ZP.destroy(),o.ZP.success(t.data.Message),en(),n.getList(a)):($(!1),o.ZP.destroy(),o.ZP.error(t.data.Message))})).catch((function(n){$(!1),o.ZP.destroy(),o.ZP.error(n.toString())})),"edit"===F&&m.Z.suaQLThuVien(t).then((function(t){t.data.Status>0?($(!1),o.ZP.destroy(),o.ZP.success(t.data.Message),en(),n.getList(a)):($(!1),o.ZP.destroy(),o.ZP.error(t.data.Message))})).catch((function(n){$(!1),o.ZP.destroy(),o.ZP.error(n.toString())}))},onCancel:en,danhSachDMThuVien:Ln,DanhSachNguoiDung:kn},z),(0,L.jsx)(Y,{visible:ln,dataThietLap:Sn,dataModalDanhSachMediaID:yn,action:on,loading:J,onCreate:function(t,e){gn(!0),n.getList(a),o.ZP.success("Thi\u1ebft l\u1eadp Media th\xe0nh c\xf4ng")},onCancel:function(){sn(!1)},danhSachDMThuVien:Ln,DanhSachMedia:bn,filterData:a,onFilter:tn},z)]})}))}}]);
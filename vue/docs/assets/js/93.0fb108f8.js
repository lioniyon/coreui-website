(window.webpackJsonp=window.webpackJsonp||[]).push([[93,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160],{446:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{fixedToasts:0}},methods:{addFixedToast:function(){this.fixedToasts++}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CToast",{attrs:{show:!0,position:"static",title:"CToast static component"}},[t._v("\n    Hello, world! This is a "),s("b",[t._v("toast")]),t._v(" message.\n  ")]),t._v(" "),s("CButton",{attrs:{color:"primary"},on:{click:t.addFixedToast}},[t._v("\n    click to add fixed toast!\n  ")]),t._v(" "),s("CToaster",{attrs:{autohide:3e3}},[t._l(t.fixedToasts,(function(e){return[s("CToast",{key:"toast"+e,attrs:{show:!0,header:"CToast fixed component"}},[t._v("\n        Hello, world! This is a "),s("b",[t._v("toast")]),t._v(" number "+t._s(e)+".\n      ")])]}))],2)],1)}),[],!1,null,null,null);e.default=n.exports},447:function(t,e,s){"use strict";s.r(e);s(292);var r=[{key:"username",_style:"width:40%"},"registered",{key:"role",_style:"width:20%;"},{key:"status",_style:"width:20%;"},{key:"show_details",label:"",_style:"width:1%",sorter:!1,filter:!1}],a=[{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned",_classes:"table-success"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active",_classes:"table-info"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive",_classes:"table-danger"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}],n={name:"tables",data:function(){return{items:a,fields:r,details:[]}},methods:{getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"},toggleDetails:function(t){var e=this.details.indexOf(t);-1!==e?this.details.splice(e,1):this.details.push(t)}}},i=s(0),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CDataTable",{attrs:{items:t.items,fields:t.fields,"column-filter":"","table-filter":"","items-per-page-select":"",hover:"",sorter:"",pagination:""},scopedSlots:t._u([{key:"status",fn:function(e){var r=e.item;return[s("td",[s("CBadge",{attrs:{color:t.getBadge(r.status)}},[t._v("\n        "+t._s(r.status)+"\n      ")])],1)]}},{key:"show_details",fn:function(e){e.item;var r=e.index;return[s("td",{staticClass:"py-2"},[s("CButton",{attrs:{color:"primary",variant:"outline",square:"",size:"sm"},on:{click:function(e){return t.toggleDetails(r)}}},[t._v("\n        "+t._s(t.details.includes(r)?"Hide":"Show")+"\n      ")])],1)]}},{key:"details",fn:function(e){var r=e.item,a=e.index;return[s("CCollapse",{attrs:{show:t.details.includes(a)}},[s("CCardBody",[t._v("\n        "+t._s(a+1)+" - "+t._s(r)+"\n      ")])],1)]}}])})}),[],!1,null,null,null);e.default=o.exports},448:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{modes:[{},{size:"sm"},{size:"lg"},{variant:"3d"},{shape:"pill"},{variant:"opposite"},{variant:"outline",shape:"pill"}],colors:["primary","success","warning","danger","info","dark","light","secondary"]}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CLink",{attrs:{href:"https://coreui.io/vue/demo/#/base/switches",target:"_blank"}},[t._v("Check out more examples here!")]),s("br"),t._v(" "),t._l(t.modes,(function(e,r){return[t._v("\n    Passed props: "+t._s(e)+"\n    "),s("div",{key:r,staticClass:"d-flex justify-content-between my-4"},t._l(t.colors,(function(r,a){return s("CSwitch",t._b({key:a,attrs:{color:r,checked:"",value:r}},"CSwitch",e,!1))})),1)]}))],2)}),[],!1,null,null,null);e.default=n.exports},449:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{page:2}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  Active page: "+t._s(t.page)+"\n  "),s("CPagination",{attrs:{activePage:t.page,pages:10,size:"lg",align:"center"},on:{"update:activePage":function(e){t.page=e},"update:active-page":function(e){t.page=e}}})],1)}),[],!1,null,null,null);e.default=n.exports},450:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{counter:86}}},a=s(0),n=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CProgress",{attrs:{value:this.counter,animated:"","show-value":"",height:"30px"}}),this._v(" "),e("CProgress",{staticClass:"mt-1",attrs:{"show-value":""}},[e("CProgressBar",{attrs:{value:.6*this.counter,color:"success"}}),this._v(" "),e("CProgressBar",{attrs:{value:.25*this.counter,color:"warning"}}),this._v(" "),e("CProgressBar",{attrs:{value:.15*this.counter,color:"danger"}})],1)],1)}),[],!1,null,null,null);e.default=n.exports},451:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{collapsed:!1}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CNavbar",{attrs:{expandable:"md",type:"dark",color:"info"}},[s("CToggler",{attrs:{"in-navbar":""},on:{click:function(e){t.collapsed=!t.collapsed}}}),t._v(" "),s("CNavbarBrand",{attrs:{href:"#"}},[t._v("NavBar")]),t._v(" "),s("CCollapse",{attrs:{show:t.collapsed,navbar:""}},[s("CNavbarNav",[s("CNavItem",{attrs:{href:"#"}},[t._v("Link")]),t._v(" "),s("CNavItem",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1),t._v(" "),s("CNavbarNav",{staticClass:"ml-auto"},[s("CForm",{attrs:{inline:""}},[s("CInput",{staticClass:"mr-sm-2",attrs:{placeholder:"Search",size:"sm"}}),t._v(" "),s("CButton",{staticClass:"my-2 my-sm-0",attrs:{color:"secondary",size:"sm",type:"submit"}},[t._v("\n          Search\n        ")])],1),t._v(" "),s("CDropdown",{attrs:{togglerText:"Lang",nav:"",placement:"bottom-end"}},[s("CDropdownItem",[t._v("EN")]),t._v(" "),s("CDropdownItem",[t._v("ES")]),t._v(" "),s("CDropdownItem",[t._v("RU")]),t._v(" "),s("CDropdownItem",[t._v("FA")])],1),t._v(" "),s("CDropdown",{attrs:{nav:"",togglerText:"User",placement:"bottom-end"}},[s("CDropdownItem",[t._v("Profile")]),t._v(" "),s("CDropdownItem",[t._v("Signout")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports},452:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{warningModal:!1}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CButton",{attrs:{color:"primary"},on:{click:function(e){t.warningModal=!0}}},[t._v("\n    Open modal\n  ")]),t._v(" "),s("CModal",{attrs:{title:"Modal title",color:"warning",show:t.warningModal},on:{"update:show":function(e){t.warningModal=e}}},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")])],1)}),[],!1,null,null,null);e.default=n.exports},453:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{collapse:!1,innerCollapse:!1}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CButton",{attrs:{color:"primary"},on:{click:function(e){t.collapse=!t.collapse}}},[t._v("\n    Toggle Collapse\n  ")]),t._v(" "),s("CCollapse",{staticClass:"mt-2",attrs:{show:t.collapse}},[s("CCard",{attrs:{"body-wrapper":""}},[s("p",{staticClass:"card-text"},[t._v("Collapse contents Here")]),t._v(" "),s("CButton",{attrs:{size:"sm",color:"secondary"},on:{click:function(e){t.innerCollapse=!t.innerCollapse}}},[t._v("\n        Toggle Inner Collapse\n      ")]),t._v(" "),s("CCollapse",{staticClass:"mt-2",attrs:{show:t.innerCollapse}},[s("CCard",{attrs:{"body-wrapper":""}},[t._v("Hello!")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports},454:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{items:[{text:"This is a router link",to:"/components/Breadcrumb.html"},{text:"This is a link without actions"},{text:"This is a span"}],customizedItems:[{text:"This is a link with additional class and props",addClasses:"font-xl",href:"https://coreui.io/",target:"_blank"},{text:"This is a styled span",addClasses:"font-xl text-success"}]}}},a=s(0),n=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  Standard breadcrumb:\n  "),e("CBreadcrumb",{attrs:{items:this.items}}),this._v("\n  Customized breadcrumb:\n  "),e("CBreadcrumb",{attrs:{items:this.customizedItems}})],1)}),[],!1,null,null,null);e.default=n.exports},455:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{counter:0}},computed:{renderFunction:function(){var t=this;return["CAlert",{props:{color:"success"}},[["CButton",{props:{color:this.counter>0?"success":"warning"},on:{click:function(e){return t.counter++}}},["Button was clicked ".concat(this.counter," times")]],["CButton",{props:{color:"warning"}},[{slot:"named-slot"}]]]]}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CRenderFunction",{staticClass:"d-flex justify-content-between",attrs:{contentToRender:t.renderFunction},scopedSlots:t._u([{key:"named-slot",fn:function(){return[t._v("\n    Element rendered by"),s("CBadge",{staticClass:"ml-2",attrs:{color:"success"}},[t._v("NAMED SLOT")])]},proxy:!0}])})}),[],!1,null,null,null);e.default=n.exports},456:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{currentAlertCounter:10}}},a=s(0),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CAlert",{attrs:{color:"primary"}},[t._v("\n    This is info alert.\n  ")]),t._v(" "),s("CAlert",{attrs:{color:"warning",closeButton:""}},[t._v("\n    This is warning dismissible alert.\n  ")]),t._v(" "),s("CAlert",{attrs:{color:"danger",show:t.currentAlertCounter,closeButton:""},on:{"update:show":function(e){t.currentAlertCounter=e}}},[t._v("\n    This alert will close after "+t._s(t.currentAlertCounter)+" seconds.\n    "),s("CProgress",{attrs:{max:10,value:t.currentAlertCounter,height:"3px",color:"danger",animate:""}})],1),t._v(" "),t.currentAlertCounter?t._e():s("CButton",{attrs:{color:"primary"},on:{click:function(e){t.currentAlertCounter=10}}},[t._v("\n    Show alert with timer\n  ")])],1)}),[],!1,null,null,null);e.default=n.exports},457:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("CLink",{attrs:{href:"https://coreui.io/vue/demo/#/base/switches",target:"_blank"}},[this._v("\n  Check out examples here!\n")])}),[],!1,null,null,null);e.default=a.exports},458:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",{attrs:{sm:"12",lg:"4"}},[e("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[e("CProgress",{attrs:{animated:"",color:"danger",height:"0.8rem",value:34}})],1)],1),this._v(" "),e("CCol",{attrs:{sm:"12",lg:"4"}},[e("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[e("CProgress",{attrs:{animated:"",color:"primary",height:"0.8rem",value:48}})],1)],1),this._v(" "),e("CCol",{attrs:{sm:"12",lg:"4"}},[e("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[e("CProgress",{attrs:{animated:"",color:"success",height:"0.8rem",value:76}})],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},459:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CWidgetProgress",{attrs:{header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."}},[e("CProgress",{attrs:{animated:"",color:"success",height:"1rem",value:46}})],1)}),[],!1,null,null,null);e.default=a.exports},460:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",[e("CWidgetProgressIcon",{attrs:{header:"87.500",text:"Visitors",color:"info"}},[e("CIcon",{attrs:{name:"cil-people",height:"36"}})],1)],1),this._v(" "),e("CCol",[e("CWidgetProgressIcon",{attrs:{header:"385",text:"New Clients",color:"success"}},[e("CIcon",{attrs:{name:"cil-user-follow",height:"36"}})],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},461:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CWidgetProgressIcon",{attrs:{header:"385",text:"New Clients",color:"success"},scopedSlots:this._u([{key:"progress",fn:function(){return[e("CProgress",{attrs:{animated:"",color:"warning",height:"1rem",value:31}})]},proxy:!0}])},[e("CIcon",{attrs:{name:"cil-basket-loaded",height:"36"}})],1)}),[],!1,null,null,null);e.default=a.exports},462:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",{attrs:{sm:"12",lg:"6"}},[e("CWidgetHeaderDetails",{attrs:{color:"primary","right-header":"SALE","right-footer":"Today 6:43 AM","left-header":"$1.890,65","left-footer":"+432,50 (15,78%)"}})],1),this._v(" "),e("CCol",{attrs:{sm:"12",lg:"6"}},[e("CWidgetHeaderDetails",{attrs:{color:"success","right-header":"SALE","right-footer":"Today 6:43 AM","left-header":"$1.890,65","left-footer":"+432,50 (15,78%)"}})],1)],1)}),[],!1,null,null,null);e.default=a.exports},463:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",{attrs:{col:"12",sm:"6"}},[e("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"primary"}},[e("CIcon",{attrs:{name:"cil-settings"}})],1)],1),this._v(" "),e("CCol",{attrs:{col:"12",sm:"6"}},[e("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"info"}},[e("CIcon",{attrs:{name:"cil-laptop"}})],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},464:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",{attrs:{lg:"6"}},[e("CWidgetProgress",{attrs:{header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"success",value:25}})],1),this._v(" "),e("CCol",{attrs:{lg:"6"}},[e("CWidgetProgress",{attrs:{header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"varning",value:25}})],1)],1)}),[],!1,null,null,null);e.default=a.exports},465:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CRow",[s("CCol",{attrs:{col:"12",sm:"6"}},[s("CWidgetDropdown",{attrs:{header:"9.823",text:"Members online",color:"primary"}},[s("CDropdown",{staticClass:"float-right",attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[s("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[t._v(" "),s("CDropdownItem",[t._v("Action")]),t._v(" "),s("CDropdownItem",[t._v("Another action")]),t._v(" "),s("CDropdownItem",[t._v("Something else here...")]),t._v(" "),s("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)],1)],1),t._v(" "),s("CCol",{attrs:{col:"12",sm:"6"}},[s("CWidgetDropdown",{attrs:{header:"9.823",text:"Members online",color:"warning"}})],1)],1)}),[],!1,null,null,null);e.default=a.exports},466:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",{attrs:{col:"12",sm:"6"}},[e("CWidgetBrand",{staticClass:"w-100",attrs:{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds"}},[e("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"56"}})],1)],1),this._v(" "),e("CCol",[e("CWidgetBrand",{staticClass:"w-100",attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[e("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"56"}})],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},467:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CTabs",{attrs:{variant:"pills","active-tab":1}},[e("CTab",{attrs:{title:"Home"}},[this._v("\n    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n    officia deserunt mollit anim id est laborum.\n  ")]),this._v(" "),e("CTab",{attrs:{title:"Profile"}},[this._v("\n    2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n    officia deserunt mollit anim id est laborum.\n  ")]),this._v(" "),e("CTab",{attrs:{title:"Disabled",disabled:""}},[this._v("\n    Text will not be shown.\n  ")])],1)}),[],!1,null,null,null);e.default=a.exports},468:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("CSpinner",{attrs:{color:"success",size:"sm"}}),this._v(" "),e("CSpinner",{attrs:{color:"info"}}),this._v(" "),e("CSpinner",{staticStyle:{width:"4rem",height:"4rem"},attrs:{color:"primary"}}),this._v(" "),e("CSpinner",{attrs:{grow:"",size:"sm"}}),this._v(" "),e("CSpinner",{attrs:{color:"warning",grow:""}}),this._v(" "),e("CSpinner",{staticStyle:{width:"4rem",height:"4rem"},attrs:{color:"danger",grow:""}})],1)}),[],!1,null,null,null);e.default=a.exports},469:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CNav",{attrs:{variant:"pills"}},[e("CNavItem",{attrs:{active:""}},[this._v("Active")]),this._v(" "),e("CNavItem",[this._v("Link")]),this._v(" "),e("CNavItem",[this._v("Another Link")]),this._v(" "),e("CNavItem",{attrs:{disabled:""}},[this._v("Disabled")])],1)}),[],!1,null,null,null);e.default=a.exports},470:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CMedia",[e("h5",{staticClass:"mt-0"},[this._v("Media Title")]),this._v(" "),e("p",[this._v("\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n  ")])])}),[],!1,null,null,null);e.default=a.exports},471:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",{attrs:{lg:""}},[e("CLink",{attrs:{href:"https://coreui.io",target:"_blank"}},[this._v("\n      Normal external link.\n    ")])],1),this._v(" "),e("CCol",{attrs:{lg:""}},[e("CLink",{attrs:{to:"#features"}},[this._v("\n      Router link.\n    ")])],1),this._v(" "),e("CCol",{attrs:{lg:""}},[e("CLink",{attrs:{disabled:""}},[this._v("\n      Disabled link without action\n    ")])],1),this._v(" "),e("CCol",{attrs:{lg:""}},[e("CLink",{staticClass:"text-white bg-info px-2",attrs:{href:"https://coreui.io",target:"_blank"}},[this._v("\n      Custom link.\n    ")])],1)],1)}),[],!1,null,null,null);e.default=a.exports},472:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CListGroup",[s("CListGroupItem",{attrs:{href:"#"}},[t._v("\n    This is a default list group item\n  ")]),t._v(" "),s("CListGroupItem",{attrs:{href:"#",color:"primary"}},[t._v("\n    This is a primary list group item\n  ")]),t._v(" "),s("CListGroupItem",{attrs:{href:"#",color:"secondary"}},[t._v("\n    This is a secondary list group item\n  ")]),t._v(" "),s("CListGroupItem",{attrs:{href:"#",color:"success"}},[t._v("\n    This is a success list group item\n  ")]),t._v(" "),s("CListGroupItem",{attrs:{href:"#",color:"danger"}},[t._v("\n    This is a danger list group item\n  ")]),t._v(" "),s("CListGroupItem",{attrs:{href:"#",color:"warning"}},[t._v("\n    This is a warning list group item\n  ")]),t._v(" "),s("CListGroupItem",{attrs:{href:"#",color:"info"}},[t._v("\n    This is a info list group item\n  ")]),t._v(" "),s("CListGroupItem",{attrs:{href:"#",color:"light"}},[t._v("\n    This is a light list group item\n  ")]),t._v(" "),s("CListGroupItem",{attrs:{href:"#",color:"dark"}},[t._v("\n    This is a dark list group item\n  ")])],1)}),[],!1,null,null,null);e.default=a.exports},473:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CJumbotron",[e("h1",{staticClass:"display-3"},[this._v("Bootstrap 4")]),this._v(" "),e("p",{staticClass:"lead"},[this._v("Bootstrap 4 Components for Vue.js 2.6+")]),this._v(" "),e("p",[this._v("For more information visit website")]),this._v(" "),e("CButton",{attrs:{color:"primary",href:"https://coreui.io/",target:"_blank"}},[this._v("More Info")])],1)}),[],!1,null,null,null);e.default=a.exports},474:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("CImg",{staticClass:"mb-2",attrs:{src:"https://picsum.photos/1024/480/?image=54",block:""}})}),[],!1,null,null,null);e.default=a.exports},475:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("CInput",{attrs:{label:"Name",placeholder:"Enter your name"}})],1)],1),this._v(" "),e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("CInput",{attrs:{label:"Credit Card Number",placeholder:"0000 0000 0000 0000"}})],1)],1),this._v(" "),e("CRow",[e("CCol",{attrs:{sm:"4"}},[e("CSelect",{attrs:{label:"Month",options:[1,2,3,4,5,6,7,8,9,10,11,12]}})],1),this._v(" "),e("CCol",{attrs:{sm:"4"}},[e("CSelect",{attrs:{label:"Year",options:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]}})],1),this._v(" "),e("CCol",{attrs:{sm:"4"}},[e("CInput",{attrs:{label:"CVV/CVC",placeholder:"123"}})],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},476:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("CEmbed",{attrs:{tag:"p",aspect:"16by9",src:"https://www.youtube.com/embed/kS2rLOF5has",frameborder:"0",allow:"accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture"}})}),[],!1,null,null,null);e.default=a.exports},477:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CContainer",[e("CRow",[e("CCol",{staticClass:"bg-success py-3",attrs:{lg:"5"}},[this._v("\n      col-lg-5\n    ")]),this._v(" "),e("CCol",{staticClass:"bg-warning py-3",attrs:{md:"4"}},[this._v("\n      col-md-4\n    ")]),this._v(" "),e("CCol",{staticClass:"bg-danger py-3",attrs:{sm:"3"}},[this._v("\n      col-sm-3\n    ")])],1)],1)}),[],!1,null,null,null);e.default=a.exports},478:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",[t._v("With all element covered with default spinner:")]),t._v(" "),s("div",{staticClass:"position-relative"},[s("CMedia",[s("h5",{staticClass:"mt-0"},[t._v("Media Title")]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      ")])]),t._v(" "),s("CElementCover",{attrs:{opacity:.8}})],1),t._v(" "),s("h4",[t._v("Only part of element covered with custom content:")]),t._v(" "),s("div",{staticClass:"position-relative"},[s("CMedia",[s("h5",{staticClass:"mt-0"},[t._v("Media Title")]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      ")])]),t._v(" "),s("CElementCover",{attrs:{boundaries:[{sides:["top","left"],query:".media-body"}],opacity:.8}},[s("h1",{staticClass:"d-inline"},[t._v("Loading... ")]),s("CSpinner",{attrs:{size:"5xl",color:"success"}})],1)],1)])}),[],!1,null,null,null);e.default=a.exports},479:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CDropdown",{staticClass:"m-2",attrs:{color:"primary","toggler-text":"Dropdown Button"}},[s("CDropdownItem",[t._v("First Action")]),t._v(" "),s("CDropdownItem",[t._v("Second Action")]),t._v(" "),s("CDropdownItem",[t._v("Third Action")]),t._v(" "),s("CDropdownDivider"),t._v(" "),s("CDropdownItem",[t._v("Something else here...")]),t._v(" "),s("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)}),[],!1,null,null,null);e.default=a.exports},480:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("CChartBar",{staticStyle:{height:"300px"},attrs:{datasets:[{data:[10,22,34,46,58,70,46,23,45,78,34,12],backgroundColor:"#E55353",label:"Sales"}],labels:"months",options:{maintainAspectRatio:!1}}})}),[],!1,null,null,null);e.default=a.exports},481:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",{attrs:{col:"12",sm:"6"}},[e("CCallout",{attrs:{color:"info"}},[e("small",{staticClass:"text-muted"},[this._v("New Clients")]),e("br"),this._v(" "),e("strong",{staticClass:"h4"},[this._v("9,123")])])],1),this._v(" "),e("CCol",{attrs:{col:"12",sm:"6"}},[e("CCallout",{attrs:{color:"danger"}},[e("small",{staticClass:"text-muted"},[this._v("Recurring Clients")]),e("br"),this._v(" "),e("strong",{staticClass:"h4"},[this._v("22,643")])])],1)],1)}),[],!1,null,null,null);e.default=a.exports},482:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CRow",[e("CCol",{attrs:{sm:"6"}},[e("CCard",[e("CCardHeader",[this._v("\n          Standard usage\n        ")]),this._v(" "),e("CCardBody",[this._v("\n          This content is in card body component.\n        ")]),this._v(" "),e("CCardFooter",[this._v("\n          Standard Footer.\n        ")])],1)],1),this._v(" "),e("CCol",{attrs:{sm:"6"}},[e("CCard",{attrs:{bodyWrapper:""}},[this._v("\n        Content is rendered inside CCardBody component.\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},483:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CButtonGroup",[e("CButton",{attrs:{color:"success"}},[this._v("Button")]),this._v(" "),e("CButton",{attrs:{color:"info"}},[this._v("Button")]),this._v(" "),e("CButton",{attrs:{color:"primary"}},[this._v("Button")])],1)],1)}),[],!1,null,null,null);e.default=a.exports},484:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  Standard toolbar:\n  "),s("CButtonToolbar",[s("CButton",{attrs:{color:"success"}},[t._v("Button")]),t._v(" "),s("CButton",{attrs:{color:"info"}},[t._v("Button")]),t._v(" "),s("CButton",{attrs:{color:"primary"}},[t._v("Button")])],1),t._v(" "),s("br"),t._v("\n  Justified toolbar:\n  "),s("CButtonToolbar",{attrs:{justify:""}},[s("CButton",{attrs:{color:"success"}},[t._v("Button")]),t._v(" "),s("CButton",{attrs:{color:"info"}},[t._v("Button")]),t._v(" "),s("CButton",{attrs:{color:"primary"}},[t._v("Button")])],1)],1)}),[],!1,null,null,null);e.default=a.exports},485:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CRow",[s("CCol",{attrs:{cols:"1"}},[s("CButtonClose")],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"bg-primary close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"bg-info close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"bg-success close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"bg-warning close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"bg-danger close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"text-primary close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"text-info close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"text-success close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"1"}},[s("CButtonClose",{attrs:{buttonClasses:"text-danger close"}})],1),t._v(" "),s("CCol",{attrs:{cols:"2"}},[s("CButtonClose",{attrs:{buttonClasses:"text-white close bg-primary p-1"}},[t._v("\n      Close\n    ")])],1)],1)}),[],!1,null,null,null);e.default=a.exports},487:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  Sizes:\n  "),t._l(["sm","","lg"],(function(e,r){return[s("CRow",{key:r+"sizes",staticClass:"d-flex justify-content-between"},[t._l(["success","primary","info","warning","danger"],(function(r,a){return[s("CButton",{key:r+e,staticClass:"m-2",attrs:{color:r,size:e}},[t._v("\n          "+t._s(r)+"\n        ")])]}))],2)]})),t._v("\n  Styles:\n  "),t._l([{shape:"square"},{shape:"pill"},{variant:"ghost"},{variant:"outline"}],(function(e,r){return[s("CRow",{key:r+"styles",staticClass:"d-flex justify-content-between"},[t._l(["success","primary","info","warning","danger"],(function(r,a){return[s("CButton",t._b({key:r,staticClass:"m-2",attrs:{color:r}},"CButton",e,!1),[t._v("\n          "+t._s(r)+"\n        ")])]}))],2)]}))],2)}),[],!1,null,null,null);e.default=a.exports},488:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("CCarousel",{attrs:{arrows:"",indicators:"",animate:"",height:"450px"}},[e("CCarouselItem",{attrs:{captionHeader:"First Slide",image:"https://picsum.photos/1024/480/?image=52",captionText:"Nulla vitae elit libero, a pharetra augue mollis interdum."}}),this._v(" "),e("CCarouselItem",{attrs:{captionHeader:"Blank page",image:{placeholderColor:"grey"},captionText:"Nulla vitae elit libero, a pharetra augue mollis interdum."}}),this._v(" "),e("CCarouselItem",{attrs:{image:"https://picsum.photos/1024/480/?image=54"}})],1)}),[],!1,null,null,null);e.default=a.exports},490:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CBadge",{attrs:{color:"primary"}},[t._v(" Primary color badge")]),t._v(" "),s("CBadge",{attrs:{color:"success"}},[t._v(" success color badge")]),t._v(" "),s("CBadge",{attrs:{color:"warning"}},[t._v(" warning color badge")]),t._v(" "),s("CBadge",{attrs:{color:"danger"}},[t._v(" danger color badge")]),t._v(" "),s("CBadge",{attrs:{color:"secondary"}},[t._v(" secondary color badge")]),t._v(" "),s("CBadge",[t._v("Raw badge")]),t._v(" "),s("CBadge",{attrs:{color:"primary",shape:"pill"}},[t._v("Pill badge")]),t._v(" "),s("CBadge",{attrs:{color:"info",href:"https://coreui.io/"}},[t._v("\n    Link Badge\n  ")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);
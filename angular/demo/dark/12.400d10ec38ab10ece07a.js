(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8/JR":function(n,e,l){"use strict";var t=l("8T9/"),r=l("Ibf7");n.exports=function(n,e){var l=e||{},o={};return void 0===n&&(n={}),n.on=function(e,l){return o[e]?o[e].push(l):o[e]=[l],n},n.once=function(e,l){return l._once=!0,n.on(e,l),n},n.off=function(e,l){var t=arguments.length;if(1===t)delete o[e];else if(0===t)o={};else{var r=o[e];if(!r)return n;r.splice(r.indexOf(l),1)}return n},n.emit=function(){var e=t(arguments);return n.emitterSnapshot(e.shift()).apply(this,e)},n.emitterSnapshot=function(e){var u=(o[e]||[]).slice(0);return function(){var o=t(arguments),i=this||n;if("error"===e&&!1!==l.throws&&!u.length)throw 1===o.length?o[0]:o;return u.forEach((function(t){l.async?r(t,o,i):t.apply(i,o),t._once&&n.off(e,t)})),n}},n}},"8T9/":function(n,e){n.exports=function(n,e){return Array.prototype.slice.call(n,e)}},Gjsa:function(n,e){var l="function"==typeof setImmediate;n.exports=l?function(n){setImmediate(n)}:function(n){setTimeout(n,0)}},Ibf7:function(n,e,l){"use strict";var t=l("Gjsa");n.exports=function(n,e,l){n&&t((function(){n.apply(l||null,e||[])}))}},PzH3:function(n,e,l){"use strict";var t=l("bBst"),r=l("Ys8N"),o=global.document,u=function(n,e,l,t){return n.addEventListener(e,l,t)},i=function(n,e,l,t){return n.removeEventListener(e,l,t)},a=[];function c(n,e,l){var t=function(n,e,l){var t,r;for(t=0;t<a.length;t++)if((r=a[t]).element===n&&r.type===e&&r.fn===l)return t}(n,e,l);if(t){var r=a[t].wrapper;return a.splice(t,1),r}}global.addEventListener||(u=function(n,e,l){return n.attachEvent("on"+e,function(n,e,l){var t=c(n,e,l)||function(n,e,l){return function(e){var t=e||global.event;t.target=t.target||t.srcElement,t.preventDefault=t.preventDefault||function(){t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},t.which=t.which||t.keyCode,l.call(n,t)}}(n,0,l);return a.push({wrapper:t,element:n,type:e,fn:l}),t}(n,e,l))},i=function(n,e,l){var t=c(n,e,l);if(t)return n.detachEvent("on"+e,t)}),n.exports={add:u,remove:i,fabricate:function(n,e,l){var u=-1===r.indexOf(e)?new t(e,{detail:l}):function(){var n;return o.createEvent?(n=o.createEvent("Event")).initEvent(e,!0,!0):o.createEventObject&&(n=o.createEventObject()),n}();n.dispatchEvent?n.dispatchEvent(u):n.fireEvent("on"+e,u)}}},YS7c:function(n,e,l){"use strict";var t=l("8/JR"),r=l("PzH3"),o=l("n6yW"),u=document,i=u.documentElement;function a(n,e,l,t){global.navigator.pointerEnabled?r[e](n,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[l],t):global.navigator.msPointerEnabled?r[e](n,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[l],t):(r[e](n,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[l],t),r[e](n,l,t))}function c(n){if(void 0!==n.touches)return n.touches.length;if(void 0!==n.which&&0!==n.which)return n.which;if(void 0!==n.buttons)return n.buttons;var e=n.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function s(n){var e=n.getBoundingClientRect();return{left:e.left+d("scrollLeft","pageXOffset"),top:e.top+d("scrollTop","pageYOffset")}}function d(n,e){return void 0!==global[e]?global[e]:i.clientHeight?i[n]:u.body[n]}function m(n,e,l){var t,r=n||{},o=r.className;return r.className+=" gu-hide",t=u.elementFromPoint(e,l),r.className=o,t}function p(){return!1}function f(){return!0}function v(n){return n.width||n.right-n.left}function g(n){return n.height||n.bottom-n.top}function h(n){return n.parentNode===u?null:n.parentNode}function b(n){return"INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName||function n(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||n(h(e)))}(n)}function y(n){return n.nextElementSibling||function(){var e=n;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e}()}function C(n,e){var l=function(n){return n.targetTouches&&n.targetTouches.length?n.targetTouches[0]:n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n}(e),t={pageX:"clientX",pageY:"clientY"};return n in t&&!(n in l)&&t[n]in l&&(n=t[n]),l[n]}n.exports=function(n,e){var l,d,O,w,x,E,S,M,D,R,I,N=arguments.length;1===N&&!1===Array.isArray(n)&&(e=n,n=[]);var P,_=null,k=e||{};void 0===k.moves&&(k.moves=f),void 0===k.accepts&&(k.accepts=f),void 0===k.invalid&&(k.invalid=V),void 0===k.containers&&(k.containers=n||[]),void 0===k.isContainer&&(k.isContainer=p),void 0===k.copy&&(k.copy=!1),void 0===k.copySortSource&&(k.copySortSource=!1),void 0===k.revertOnSpill&&(k.revertOnSpill=!1),void 0===k.removeOnSpill&&(k.removeOnSpill=!1),void 0===k.direction&&(k.direction="vertical"),void 0===k.ignoreInputTextSelection&&(k.ignoreInputTextSelection=!0),void 0===k.mirrorContainer&&(k.mirrorContainer=u.body);var U=t({containers:k.containers,start:A,end:J,cancel:Q,remove:Z,destroy:L,canMove:F,dragging:!1});return!0===k.removeOnSpill&&U.on("over",rn).on("out",on),T(),U;function q(n){return-1!==U.containers.indexOf(n)||k.isContainer(n)}function T(n){var e=n?"remove":"add";a(i,e,"mousedown",$),a(i,e,"mouseup",K)}function j(n){a(i,n?"remove":"add","mousemove",X)}function G(n){var e=n?"remove":"add";r[e](i,"selectstart",Y),r[e](i,"click",Y)}function L(){T(!0),K({})}function Y(n){P&&n.preventDefault()}function $(n){if(E=n.clientX,S=n.clientY,1===c(n)&&!n.metaKey&&!n.ctrlKey){var e=n.target,l=B(e);l&&(P=l,j(),"mousedown"===n.type&&(b(e)?e.focus():n.preventDefault()))}}function X(n){if(P)if(0!==c(n)){if(void 0===n.clientX||n.clientX!==E||void 0===n.clientY||n.clientY!==S){if(k.ignoreInputTextSelection){var e=C("clientX",n),l=C("clientY",n);if(b(u.elementFromPoint(e,l)))return}var t=P;j(!0),G(),J(),z(t);var r=s(O);w=C("pageX",n)-r.left,x=C("pageY",n)-r.top,o.add(R||O,"gu-transit"),un(),tn(n)}}else K({})}function B(n){if(!(U.dragging&&l||q(n))){for(var e=n;h(n)&&!1===q(h(n));){if(k.invalid(n,e))return;if(!(n=h(n)))return}var t=h(n);if(t&&!k.invalid(n,e)&&k.moves(n,t,e,y(n)))return{item:n,source:t}}}function F(n){return!!B(n)}function A(n){var e=B(n);e&&z(e)}function z(n){dn(n.item,n.source)&&(R=n.item.cloneNode(!0),U.emit("cloned",R,n.item,"copy")),d=n.source,O=n.item,M=D=y(n.item),U.dragging=!0,U.emit("drag",O,d)}function V(){return!1}function J(){if(U.dragging){var n=R||O;W(n,h(n))}}function H(){P=!1,j(!0),G(!0)}function K(n){if(H(),U.dragging){var e=R||O,t=C("clientX",n),r=C("clientY",n),o=ln(m(l,t,r),t,r);o&&(R&&k.copySortSource||!R||o!==d)?W(e,o):k.removeOnSpill?Z():Q()}}function W(n,e){var l=h(n);R&&k.copySortSource&&e===d&&l.removeChild(O),en(e)?U.emit("cancel",n,d,d):U.emit("drop",n,e,d,D),nn()}function Z(){if(U.dragging){var n=R||O,e=h(n);e&&e.removeChild(n),U.emit(R?"cancel":"remove",n,e,d),nn()}}function Q(n){if(U.dragging){var e=arguments.length>0?n:k.revertOnSpill,l=R||O,t=h(l),r=en(t);!1===r&&e&&(R?t&&t.removeChild(R):d.insertBefore(l,M)),r||e?U.emit("cancel",l,d,d):U.emit("drop",l,t,d,D),nn()}}function nn(){var n=R||O;H(),an(),n&&o.rm(n,"gu-transit"),I&&clearTimeout(I),U.dragging=!1,_&&U.emit("out",n,_,d),U.emit("dragend",n),d=O=R=M=D=I=_=null}function en(n,e){var t;return t=void 0!==e?e:l?D:y(R||O),n===d&&t===M}function ln(n,e,l){for(var t=n;t&&!r();)t=h(t);return t;function r(){if(!1===q(t))return!1;var r=cn(t,n),o=sn(t,r,e,l);return!!en(t,o)||k.accepts(O,t,d,o)}}function tn(n){if(l){n.preventDefault();var e=C("clientX",n),t=C("clientY",n),r=t-x;l.style.left=e-w+"px",l.style.top=r+"px";var o=R||O,u=m(l,e,t),i=ln(u,e,t),a=null!==i&&i!==_;(a||null===i)&&(_&&f("out"),_=i,a&&f("over"));var c=h(o);if(i!==d||!R||k.copySortSource){var s,p=cn(i,u);if(null!==p)s=sn(i,p,e,t);else{if(!0!==k.revertOnSpill||R)return void(R&&c&&c.removeChild(o));s=M,i=d}(null===s&&a||s!==o&&s!==y(o))&&(D=s,i.insertBefore(o,s),U.emit("shadow",o,i,d))}else c&&c.removeChild(o)}function f(n){U.emit(n,o,_,d)}}function rn(n){o.rm(n,"gu-hide")}function on(n){U.dragging&&o.add(n,"gu-hide")}function un(){if(!l){var n=O.getBoundingClientRect();(l=O.cloneNode(!0)).style.width=v(n)+"px",l.style.height=g(n)+"px",o.rm(l,"gu-transit"),o.add(l,"gu-mirror"),k.mirrorContainer.appendChild(l),a(i,"add","mousemove",tn),o.add(k.mirrorContainer,"gu-unselectable"),U.emit("cloned",l,O,"mirror")}}function an(){l&&(o.rm(k.mirrorContainer,"gu-unselectable"),a(i,"remove","mousemove",tn),h(l).removeChild(l),l=null)}function cn(n,e){for(var l=e;l!==n&&h(l)!==n;)l=h(l);return l===i?null:l}function sn(n,e,l,t){var r,o="horizontal"===k.direction;return e!==n?(r=e.getBoundingClientRect(),(o?l>r.left+v(r)/2:t>r.top+g(r)/2)?y(e):e):function(){var e,r,u,i=n.children.length;for(e=0;e<i;e++){if(u=(r=n.children[e]).getBoundingClientRect(),o&&u.left+u.width/2>l)return r;if(!o&&u.top+u.height/2>t)return r}return null}()}function dn(n,e){return"boolean"==typeof k.copy?k.copy:k.copy(n,e)}}},Ys8N:function(n,e,l){"use strict";var t=[],r="",o=/^on/;for(r in global)o.test(r)&&t.push(r.slice(2));n.exports=t},bBst:function(n,e){var l=global.CustomEvent;n.exports=function(){try{var n=new l("cat",{detail:{foo:"bar"}});return"cat"===n.type&&"bar"===n.detail.foo}catch(e){}return!1}()?l:"function"==typeof document.createEvent?function(n,e){var l=document.createEvent("CustomEvent");return e?l.initCustomEvent(n,e.bubbles,e.cancelable,e.detail):l.initCustomEvent(n,!1,!1,void 0),l}:function(n,e){var l=document.createEventObject();return l.type=n,e?(l.bubbles=Boolean(e.bubbles),l.cancelable=Boolean(e.cancelable),l.detail=e.detail):(l.bubbles=!1,l.cancelable=!1,l.detail=void 0),l}},n6yW:function(n,e,l){"use strict";var t={};function r(n){var e=t[n];return e?e.lastIndex=0:t[n]=e=new RegExp("(?:^|\\s)"+n+"(?:\\s|$)","g"),e}n.exports={add:function(n,e){var l=n.className;l.length?r(e).test(l)||(n.className+=" "+e):n.className=e},rm:function(n,e){n.className=n.className.replace(r(e)," ").trim()}}},xJaj:function(n,e,l){"use strict";l.r(e),l.d(e,"DraggableCardsModuleNgFactory",(function(){return _}));var t=l("CcnG"),r=function(){return function(){}}(),o=l("pMnS"),u=l("YS7c"),i=l.n(u),a=l("mrSG"),c=l("K9Ia"),s=l("pugT"),d=l("VnD/"),m=l("67Y/"),p=function(){return function(n,e,l){this.name=n,this.drake=e,this.options=l,this.initEvents=!1}}(),f={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},v=Object.keys(f).map((function(n){return f[n]})),g=i.a||u,h=function(){return function(n){void 0===n&&(n=g),this.build=n}}(),b=function(n,e,l){return function(t){return t.pipe(Object(d.a)((function(l){return l.event===n&&(void 0===e||l.name===e)})),Object(m.a)((function(n){return l(n.name,n.args)})))}},y=function(n,e){var l=Object(a.__read)(e,3);return{name:n,el:l[0],container:l[1],source:l[2]}},C=function(){function n(n){void 0===n&&(n=null);var e=this;this.drakeFactory=n,this.dispatch$=new c.b,this.drag=function(n){return e.dispatch$.pipe(b(f.Drag,n,(function(n,e){var l=Object(a.__read)(e,2);return{name:n,el:l[0],source:l[1]}})))},this.dragend=function(n){return e.dispatch$.pipe(b(f.DragEnd,n,(function(n,e){return{name:n,el:Object(a.__read)(e,1)[0]}})))},this.drop=function(n){return e.dispatch$.pipe(b(f.Drop,n,(function(n,e){var l=Object(a.__read)(e,4);return{name:n,el:l[0],target:l[1],source:l[2],sibling:l[3]}})))},this.elContainerSource=function(n){return function(l){return e.dispatch$.pipe(b(n,l,y))}},this.cancel=this.elContainerSource(f.Cancel),this.remove=this.elContainerSource(f.Remove),this.shadow=this.elContainerSource(f.Shadow),this.over=this.elContainerSource(f.Over),this.out=this.elContainerSource(f.Out),this.cloned=function(n){return e.dispatch$.pipe(b(f.Cloned,n,(function(n,e){var l=Object(a.__read)(e,3);return{name:n,clone:l[0],original:l[1],cloneType:l[2]}})))},this.dropModel=function(n){return e.dispatch$.pipe(b(f.DropModel,n,(function(n,e){var l=Object(a.__read)(e,9);return{name:n,el:l[0],target:l[1],source:l[2],sibling:l[3],item:l[4],sourceModel:l[5],targetModel:l[6],sourceIndex:l[7],targetIndex:l[8]}})))},this.removeModel=function(n){return e.dispatch$.pipe(b(f.RemoveModel,n,(function(n,e){var l=Object(a.__read)(e,6);return{name:n,el:l[0],container:l[1],source:l[2],item:l[3],sourceModel:l[4],sourceIndex:l[5]}})))},this.groups={},null===this.drakeFactory&&(this.drakeFactory=new h)}return n.prototype.add=function(n){if(this.find(n.name))throw new Error('Group named: "'+n.name+'" already exists.');return this.groups[n.name]=n,this.handleModels(n),this.setupEvents(n),n},n.prototype.find=function(n){return this.groups[n]},n.prototype.destroy=function(n){var e=this.find(n);e&&(e.drake&&e.drake.destroy(),delete this.groups[n])},n.prototype.createGroup=function(n,e){return this.add(new p(n,this.drakeFactory.build([],e),e))},n.prototype.handleModels=function(n){var e,l,t,r=this,o=n.name,u=n.drake,i=n.options;u.on("remove",(function(n,e,t){if(u.models){var i=u.models[u.containers.indexOf(t)],a=(i=i.slice(0)).splice(l,1)[0];r.dispatch$.next({event:f.RemoveModel,name:o,args:[n,e,t,a,i,l]})}})),u.on("drag",(function(n,t){u.models&&(e=n,l=r.domIndexOf(n,t))})),u.on("drop",(function(n,a,c,s){if(u.models&&a){t=r.domIndexOf(n,a);var d,m=u.models[u.containers.indexOf(c)],p=u.models[u.containers.indexOf(a)];if(a===c)d=(m=m.slice(0)).splice(l,1)[0],m.splice(t,0,d),p=m;else{var v=e!==n;if(d=m[l],v){if(!i.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");d=i.copyItem(d)}if(v||(m=m.slice(0)).splice(l,1),(p=p.slice(0)).splice(t,0,d),v)try{a.removeChild(n)}catch(g){}}r.dispatch$.next({event:f.DropModel,name:o,args:[n,a,c,s,d,m,p,l,t]})}}))},n.prototype.setupEvents=function(n){var e=this;if(!n.initEvents){n.initEvents=!0;var l=n.name;v.forEach((function(t){n.drake.on(t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];e.dispatch$.next({event:t,name:l,args:n})}))}))}},n.prototype.domIndexOf=function(n,e){return Array.prototype.indexOf.call(e.children,n)},n}(),O=function(){function n(n,e){this.el=n,this.dragulaService=e,this.dragulaModelChange=new t.EventEmitter}return Object.defineProperty(n.prototype,"container",{get:function(){return this.el&&this.el.nativeElement},enumerable:!0,configurable:!0}),n.prototype.ngOnChanges=function(n){if(n&&n.dragula){var e=n.dragula,l=!!(o=e.currentValue);!!(r=e.previousValue)&&this.teardown(r),l&&this.setup()}else if(n&&n.dragulaModel){var t=n.dragulaModel,r=t.previousValue,o=t.currentValue,u=this.group.drake;if(this.dragula&&u){u.models=u.models||[];var i=u.models.indexOf(r);-1!==i?(u.models.splice(i,1),o&&u.models.splice(i,0,o)):o&&u.models.push(o)}}},n.prototype.setup=function(){var n=this,e=this.dragulaService.find(this.dragula);e||(e=this.dragulaService.createGroup(this.dragula,{})),function(e){n.dragulaModel&&(e.drake.models?e.drake.models.push(n.dragulaModel):e.drake.models=[n.dragulaModel])}(e),e.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=e},n.prototype.subscribe=function(n){var e=this;this.subs=new s.a,this.subs.add(this.dragulaService.dropModel(n).subscribe((function(n){var l=n.target,t=n.targetModel;n.source===e.el.nativeElement?e.dragulaModelChange.emit(n.sourceModel):l===e.el.nativeElement&&e.dragulaModelChange.emit(t)}))),this.subs.add(this.dragulaService.removeModel(n).subscribe((function(n){n.source===e.el.nativeElement&&e.dragulaModelChange.emit(n.sourceModel)})))},n.prototype.teardown=function(n){this.subs&&this.subs.unsubscribe();var e=this.dragulaService.find(n);if(e){var l=e.drake.containers.indexOf(this.el.nativeElement);if(-1!==l&&e.drake.containers.splice(l,1),this.dragulaModel&&e.drake&&e.drake.models){var t=e.drake.models.indexOf(this.dragulaModel);-1!==t&&e.drake.models.splice(t,1)}}},n.prototype.ngOnDestroy=function(){this.teardown(this.dragula)},n}(),w=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[C]}},n}(),x=function(){function n(n){var e=this;this.dragulaService=n,this.GROUP_1="GROUP_ONE",this.subs=new s.a,n.destroy(this.GROUP_1),n.createGroup(this.GROUP_1,{moves:function(n,e,l){return"card-header drag"===l.className}}),this.subs.add(this.dragulaService.drag(this.GROUP_1).subscribe((function(n){e.onDrag({el:n.el,source:n.source})}))),this.subs.add(this.dragulaService.drop(this.GROUP_1).subscribe((function(n){e.onDrop({el:n.el,source:n.source})}))),this.subs.add(this.dragulaService.over(this.GROUP_1).subscribe((function(n){e.onOver({el:n.el,source:n.source,container:n.container})}))),this.subs.add(this.dragulaService.out(this.GROUP_1).subscribe((function(n){e.onOut({el:n.el,source:n.source,container:n.container})})))}return n.prototype.ngOnDestroy=function(){this.subs.unsubscribe()},n.prototype.hasClass=function(n,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(n.className)},n.prototype.addClass=function(n,e){this.hasClass(n,e)||(n.className=n.className?[n.className,e].join(" "):e)},n.prototype.removeClass=function(n,e){this.hasClass(n,e)&&(n.className=n.className.replace(new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)","g"),""))},n.prototype.onDrag=function(n){this.removeClass(n.el,"ex-moved")},n.prototype.onDrop=function(n){this.addClass(n.el,"ex-moved")},n.prototype.onOver=function(n){this.addClass(n.container,"ex-over")},n.prototype.onOut=function(n){this.removeClass(n.container,"ex-over")},n}(),E=t["\u0275crt"]({encapsulation:2,styles:[['.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20)}'],[".dragdrop{min-height:50%}"]],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,58,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,57,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,18,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,17,"div",[["class","row dragdrop"]],null,null,null,null,null)),t["\u0275did"](4,671744,null,0,O,[t.ElementRef,C],{dragula:[0,"dragula"]},null),(n()(),t["\u0275eld"](5,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,6,"div",[["class","card card-accent-secondary"]],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,3,"div",[["class","card-header drag"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Drag & Drop Card "])),(n()(),t["\u0275eld"](9,0,null,null,1,"a",[["class","badge badge-danger ml-2"],["href","https://coreui.io/pro/angular/"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["CoreUI Pro Component"])),(n()(),t["\u0275eld"](11,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "])),(n()(),t["\u0275eld"](13,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](14,0,null,null,6,"div",[["class","card card-accent-primary"]],null,null,null,null,null)),(n()(),t["\u0275eld"](15,0,null,null,3,"div",[["class","card-header drag"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Drag & Drop Card "])),(n()(),t["\u0275eld"](17,0,null,null,1,"a",[["class","badge badge-danger ml-2"],["href","https://coreui.io/pro/angular/"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["CoreUI Pro Component"])),(n()(),t["\u0275eld"](19,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "])),(n()(),t["\u0275eld"](21,0,null,null,18,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),t["\u0275eld"](22,0,null,null,17,"div",[["class","row dragdrop"]],null,null,null,null,null)),t["\u0275did"](23,671744,null,0,O,[t.ElementRef,C],{dragula:[0,"dragula"]},null),(n()(),t["\u0275eld"](24,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](25,0,null,null,6,"div",[["class","card card-accent-success"]],null,null,null,null,null)),(n()(),t["\u0275eld"](26,0,null,null,3,"div",[["class","card-header drag"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Drag & Drop Card "])),(n()(),t["\u0275eld"](28,0,null,null,1,"a",[["class","badge badge-danger ml-2"],["href","https://coreui.io/pro/angular/"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["CoreUI Pro Component"])),(n()(),t["\u0275eld"](30,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "])),(n()(),t["\u0275eld"](32,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](33,0,null,null,6,"div",[["class","card card-accent-warning"]],null,null,null,null,null)),(n()(),t["\u0275eld"](34,0,null,null,3,"div",[["class","card-header drag"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Drag & Drop Card "])),(n()(),t["\u0275eld"](36,0,null,null,1,"a",[["class","badge badge-danger ml-2"],["href","https://coreui.io/pro/angular/"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["CoreUI Pro Component"])),(n()(),t["\u0275eld"](38,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "])),(n()(),t["\u0275eld"](40,0,null,null,18,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),t["\u0275eld"](41,0,null,null,17,"div",[["class","row dragdrop"]],null,null,null,null,null)),t["\u0275did"](42,671744,null,0,O,[t.ElementRef,C],{dragula:[0,"dragula"]},null),(n()(),t["\u0275eld"](43,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](44,0,null,null,6,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](45,0,null,null,3,"div",[["class","card-header drag"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Drag & Drop Card "])),(n()(),t["\u0275eld"](47,0,null,null,1,"a",[["class","badge badge-danger ml-2"],["href","https://coreui.io/pro/angular/"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["CoreUI Pro Component"])),(n()(),t["\u0275eld"](49,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "])),(n()(),t["\u0275eld"](51,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](52,0,null,null,6,"div",[["class","card card-accent-danger"]],null,null,null,null,null)),(n()(),t["\u0275eld"](53,0,null,null,3,"div",[["class","card-header drag"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Drag & Drop Card "])),(n()(),t["\u0275eld"](55,0,null,null,1,"a",[["class","badge badge-danger ml-2"],["href","https://coreui.io/pro/angular/"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["CoreUI Pro Component"])),(n()(),t["\u0275eld"](57,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "]))],(function(n,e){var l=e.component;n(e,4,0,l.GROUP_1),n(e,23,0,l.GROUP_1),n(e,42,0,l.GROUP_1)}),null)}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,S,E)),t["\u0275did"](1,180224,null,0,x,[C],null,null)],null,null)}var D=t["\u0275ccf"]("ng-component",x,M,{},{},[]),R=l("Ip0R"),I=l("ZYCi"),N={title:"Draggable Cards"},P=function(){return function(){}}(),_=t["\u0275cmf"](r,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,D]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,C,C,[[2,h]]),t["\u0275mpd"](1073742336,I.p,I.p,[[2,I.u],[2,I.l]]),t["\u0275mpd"](1073742336,P,P,[]),t["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),t["\u0275mpd"](1073742336,w,w,[]),t["\u0275mpd"](1073742336,r,r,[]),t["\u0275mpd"](1024,I.j,(function(){return[[{path:"",component:x,data:N}]]}),[])])}))}}]);
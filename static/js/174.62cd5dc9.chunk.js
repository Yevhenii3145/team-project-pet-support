/*! For license information please see 174.62cd5dc9.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[174],{1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,u){for(var i,c,l=o(e),a=1;a<arguments.length;a++){for(var f in i=Object(arguments[a]))r.call(i,f)&&(l[f]=i[f]);if(t){c=t(i);for(var s=0;s<c.length;s++)n.call(i,c[s])&&(l[c[s]]=i[c[s]])}}return l}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1807:function(e,t,r){e.exports=r(5163)},5163:function(e,t,r){"use strict";t.default=void 0;var n=u(r(624)),o=u(r(2007));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}var y=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,s(t).call(this,e))).state={},r}var r,o,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){var e,t=this.props,r=t.text,o=t.length,u=t.tail,i=t.tailClassName,a=l(t,["text","length","tail","tailClassName"]);return r.length<=this.props.length||this.props.length<0?n.default.createElement("span",a,this.props.text):(e=o-u.length<=0?"":r.slice(0,o-u.length),n.default.createElement("span",c({title:this.props.text},a),e,n.default.createElement("span",{style:{cursor:"auto"},className:i},u)))}}])&&a(r.prototype,o),u&&a(r,u),t}(n.default.Component);y.propTypes={text:o.default.string.isRequired,length:o.default.number.isRequired,tail:o.default.string,tailClassName:o.default.string},y.defaultProps={tail:"...",tailClassName:"more"};var h=y;t.default=h},559:function(e,t,r){"use strict";var n=r(1725),o="function"===typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,b="function"===typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function _(){}function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=O.prototype;var w=S.prototype=new _;w.constructor=S,n(w,O.prototype),w.isPureReactComponent=!0;var j={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var a=Array(l),f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:j.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===u}var x=/\/+/g,R=[];function $(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function I(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case u:case i:c=!0}}if(c)return r(n,e,""===t?"."+N(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var a=t+N(o=e[l],l);c+=I(o,a,r,n)}else if(null===e||"object"!==typeof e?a=null:a="function"===typeof(a=b&&e[b]||e["@@iterator"])?a:null,"function"===typeof a)for(e=a.call(e),l=0;!(o=e.next()).done;)c+=I(o=o.value,a=t+N(o,l++),r,n);else if("object"===o)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function A(e,t,r){return null==e?0:I(e,"",t,r)}function N(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(x,"$&/")+"/"),A(e,q,t=$(t,u,n,o)),T(t)}var D={current:null};function F(){var e=D.current;if(null===e)throw Error(m(321));return e}var M={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,U,t=$(null,null,t,r)),T(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=c,t.Profiler=a,t.PureComponent=S,t.StrictMode=l,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(m(267,e));var o=n({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)k.call(t,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){a=Array(f);for(var s=0;s<f;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return F().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,r){return F().useReducer(e,t,r)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},624:function(e,t,r){"use strict";e.exports=r(559)},5984:function(e,t,r){"use strict";r.d(t,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=174.62cd5dc9.chunk.js.map
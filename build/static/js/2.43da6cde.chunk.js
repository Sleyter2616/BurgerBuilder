webpackJsonp([2],{145:function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=n(0),s=n.n(a),c=n(156),u=n(12),p=n(50),d=n(11),l=n(6),f=n(49),b=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),A=function(e){function r(){return t(this,r),o(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,e),b(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(f.a,null);return this.props.loading||void 0===this.props.orders||(e=this.props.orders.map(function(e){return s.a.createElement(c.a,{key:e.id,ingredients:e.ingredients,price:+e.price})})),s.a.createElement("div",null,e)}}]),r}(a.Component),x=function(e){return{loading:e.order.loading,orders:e.order.orders,token:e.auth.token,userId:e.auth.userId}},m=function(e){return{onFetchOrders:function(r,n){return e(d.d(r,n))}}};r.default=Object(l.b)(x,m)(Object(p.a)(A,u.a))},156:function(e,r,n){"use strict";var t=n(0),o=n.n(t),i=n(157),a=n.n(i),s=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:a.a.Order},o.a.createElement("p",null,"Ingredients:",t),o.a.createElement("p",null,"Price:"," ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};r.a=s},157:function(e,r,n){var t=n(158);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;n(143)(t,o);t.locals&&(e.exports=t.locals)},158:function(e,r,n){r=e.exports=n(142)(!0),r.push([e.i,".Order__Order__W-Npf{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["C:/Users/Sleyter2616/Documents/Coding/React/Course/burger-builder/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACC,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAC/B",file:"Order.css",sourcesContent:[".Order {\r\n\twidth: 80%;\r\n\tborder: 1px solid #eee;\r\n\t-webkit-box-shadow: 0 2px 3px #ccc;\r\n\t        box-shadow: 0 2px 3px #ccc;\r\n\tpadding: 10px;\r\n\tmargin: 10px auto;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n"],sourceRoot:""}]),r.locals={Order:"Order__Order__W-Npf"}}});
//# sourceMappingURL=2.43da6cde.chunk.js.map
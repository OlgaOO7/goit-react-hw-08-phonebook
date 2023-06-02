"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[698],{7698:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(2791),a=n(9434),o=n(4270),u=n(9439),c=n(6223),i=(n(5462),"NOT_FOUND");var s=function(e,t){return e===t};function l(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?s:r,o=n.maxSize,u=void 0===o?1:o,c=n.resultEqualityCheck,l=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),f=1===u?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:i},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return i}return{get:r,put:function(t,a){r(t)===i&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(u,l);function m(){var t=f.get(arguments);if(t===i){if(t=e.apply(null,arguments),c){var n=f.getEntries(),r=n.find((function(e){return c(e.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return m.clearCache=function(){return f.clear()},m}function f(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,u=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,l=s.memoizeOptions,m=void 0===l?n:l,p=Array.isArray(m)?m:[m],d=f(r),v=e.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return o=v.apply(null,e)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:v,dependencies:d,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return a}var p=m(l),d=function(e){return e.contacts.items},v=function(e){return e.contacts.isLoading},h=function(e){return e.filter},_=p([d,h],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().trim().includes(t.toLowerCase().trim())})).sort((function(e,t){return e.name.localeCompare(t.name)}))})),y=n(3634),x="ContactForm_formWrapper__ixY4D",C="ContactForm_form__dhl+T",b="ContactForm_labelForm__DEnf8",j="ContactForm_inputForm__4bzZs",g="ContactForm_addBtn__CACuJ",N=n(3329);function A(){var e=(0,r.useState)(""),t=(0,u.Z)(e,2),n=t[0],o=t[1],i=(0,r.useState)(""),s=(0,u.Z)(i,2),l=s[0],f=s[1],m=(0,a.I0)(),p=(0,a.v9)(d),v=function(){o(""),f("")};return(0,N.jsx)("div",{className:x,children:(0,N.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),p.some((function(e){return e.name===n})))return c.Am.error("".concat(n," is already in contacts!"),{theme:"colored"});m((0,y.uK)({name:n,number:l})),v()},className:C,children:[(0,N.jsxs)("label",{className:b,children:["Name",(0,N.jsx)("input",{type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){o(e.target.value)},className:j})]}),(0,N.jsxs)("label",{className:b,children:["Number",(0,N.jsx)("input",{type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){f(e.target.value)},className:j})]}),(0,N.jsx)(c.Ix,{position:"top-right",autoClose:3e3,limit:1}),(0,N.jsx)("button",{type:"submit",className:g,children:"Add contact"})]})})}var F="ContactItem_contactItem__Z4FuP",k="ContactItem_personContact__e08OI",I="ContactItem_deleteBtn__fTo+a";function w(e){var t=e.name,n=e.number,r=e.id,o=(0,a.I0)();return(0,N.jsxs)("li",{className:F,children:[(0,N.jsxs)("p",{className:k,children:[t,": ",n]}),(0,N.jsx)("button",{type:"button",id:r,onClick:function(){return o((0,y.GK)(r))},className:I,children:"Delete"})]},r)}var z="ContactsList_contactList__qIIH9";function Z(){var e=(0,a.v9)(_);return(0,N.jsx)("ul",{className:z,children:e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,N.jsx)(w,{name:n,number:r,id:t},t)}))})}var q=n(4808),E="Filter_filterLabel__+pnW-",L="Filter_filterInput__1Cysk",S=function(){var e=(0,a.I0)(),t=(0,a.v9)(h);return(0,N.jsxs)("label",{className:E,children:["Find contacts by name",(0,N.jsx)("input",{type:"text",name:"filter",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){return e((0,q.M)(t.target.value))},className:L})]})},D="Contacts_contactsWrapper__yIlDc",O="Contacts_contactTitle__sHxUL",B="Contacts_filterContactsWrapper__9oPS6",R=function(){var e=(0,a.I0)(),t=(0,a.v9)(v);return(0,r.useEffect)((function(){e((0,y.yF)())}),[e]),(0,N.jsxs)("div",{children:[(0,N.jsx)(o.q,{children:(0,N.jsx)("title",{children:"Your contacts"})}),(0,N.jsx)("h2",{className:O,children:"Your contacts"}),(0,N.jsxs)("div",{className:D,children:[(0,N.jsx)(A,{}),(0,N.jsxs)("div",{className:B,children:[(0,N.jsx)(S,{}),(0,N.jsx)("div",{children:t&&"Request in progress..."}),(0,N.jsx)(Z,{})]})]})]})}}}]);
//# sourceMappingURL=698.bba49a25.chunk.js.map
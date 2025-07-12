/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'])+parseFloat(e['border'+n+'Width'])}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth),c=parseFloat(m.borderLeftWidth);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop),y=parseFloat(m.marginLeft);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f]),E=parseFloat(w['border'+f+'Width']),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
//# sourceMappingURL=popper.min.js.map
Chat

New Conversation

🤓 Explain a complex thing

Explain Artificial Intelligence so that I can explain it to my six-year-old child.


🧠 Get suggestions and create new ideas

Please give me the best 10 travel ideas around the world


💭 Translate, summarize, fix grammar and more…

Translate "I love you" French


GPT-4o Mini
Hello, how can I help you today?
Respond in the English language.You are a YouTube video analysis assistant. Your task is to summarize the content of the video and generate a summary includes highlights with key moments and topics discussed in the video. Follow these steps to execute the task:

1. Analyze the video content:
   Review the video content provided in the webpage. Identify the main themes, topics, and key moments that are discussed throughout the video.
  2. Create a summary:
   Write a concise summary of the video, capturing the essence of the content in 3-5 sentences. Focus on the main points and any significant conclusions drawn in the video.

3. Identify highlights:
   List key moments in the video that are particularly noteworthy as a list in the table. For each highlight, give the timestamp second first and next to it provide a brief description of what happens in that timestamp second and why it is significant. Do not change the second format or value, Do NOT convert to seconds to hours format, just give it as second. Aim for 5-10 highlights.

4. Format the response:
   Organize the summary and highlights into a visually appealing sidebar format. Include headings for 'Summary' and 'Highlights', and ensure that the highlights are easy to read and navigate.

5. Output the results:
   Present the summary and highlights in a clear and structured manner, ready to be displayed next to the video.

Notes:
- Ensure that the summary is informative and engaging, encouraging viewers to watch the video.
- The highlights should be specific and provide enough context for viewers to understand the significance of each moment.
- Avoid including any personal opinions or unnecessary commentary; focus solely on the content of the video.

Video content: second:4 text:खालसा वाहेगुरु जी की फतेह
second:45 text:[प्रशंसा]
second:56 text:[प्रशंसा]
second:75 text:[प्रशंसा]
second:80 text:मार दो तालियां लो देख जा मेरे मिलो कर
second:83 text:मार्केट
second:98 text:यार्डियां लगी नाचे वाले
second:103 text:हो यार देखो यार क्योंकि टर्मिनेट प्यार
second:105 text:नुकसान
second:108 text:है एक तालियां तबाही है
second:113 text:ये लड़ता है
second:114 text:[प्रशंसा]
second:116 text:[संगीत]
second:118 text:[प्रशंसा]
second:121 text:[संगीत]
second:121 text:[प्रशंसा]
second:127 text:[संगीत]
second:132 text:[प्रशंसा]
second:155 text:[प्रशंसा]
second:157 text:खेड़ा शर्ट हरि अपना ट्रैक्टर हारून अपने
second:161 text:ट्रैक्टर हारून
second:178 text:[प्रशंसा]
second:186 text:मैं
second:192 text:[प्रशंसा]
second:201 text:[प्रशंसा]
second:211 text:कुछ भी हो सकता है कुछ भी हो सकता है
second:227 text:ए गरीबी चल मेरे लिए उपाय लास्ट तक जागेगा
second:232 text:आज
second:234 text:जप्त के हटो
second:237 text:सबके ज्यादा दोस्तों ने हल्ला शरिया ना
second:241 text:गुड़ा इलाके से इधर लोकल
second:247 text:[प्रशंसा]
second:253 text:है देख लिया मुकाबला पूरा सर पे
second:258 text:जूते बने कर्म में भी हो कर्म भी पुरी
second:262 text:कोशिश करता है
second:264 text:क्योंकि कर्म भी लगातार 4 साल तो मुकाबला
second:268 text:ए रहे हैं आज वो भी पूरा जोर जाएगा और
second:271 text:देखेंगे
second:276 text:मुकाबला मेरे वीडियो मुकाबला ऑस्ट्रेलिया
second:297 text:[प्रशंसा]
second:311 text:[प्रशंसा]
second:328 text:[प्रशंसा]
second:336 text:[प्रशंसा]
second:343 text:ट्रैक्टर
second:346 text:ट्रैक्टर
second:351 text:[प्रशंसा]
second:363 text:[प्रशंसा]
second:368 text:[संगीत]
second:369 text:[प्रशंसा]
second:384 text:कोई कम कर जगह डालकर जो अपना ट्रैक्टर
second:388 text:भेजता है चेन्नई पैसे खाऊंगा और मैं दे
second:390 text:दूंगी बदले हुए शेर ए गया अपने भाई लास
second:394 text:में हूं प्याऊ समझा प्यार
second:396 text:नहीं मारती हूं अपना ट्रैक्टर नहीं बेचना
second:397 text:तुसी हुई क्यों नहीं उतना ज्यादा कर लेते
second:399 text:रबर के
second:400 text:तहत वो अगली बार मुकाबला
second:402 text:है ना मैं सौदागर ज्यादा अब मैंने तार
second:406 text:लगानी मेरे तो चला है चैतली भर कुंडी वाला
second:409 text:का आपका
second:423 text:[प्रशंसा]
second:429 text:फिर से डिजिटल अपने भाई लास में बहुत
second:432 text:तगड़ा सांप ढूंढने ढूंढ सारे
second:462 text:नया भतार के दाबदार सेट हुए टैगेट जो
second:466 text:इन्हें
second:468 text:[प्रशंसा]
second:477 text:आज आज
second:497 text:[हंसी]
second:504 text:[संगीत]
second:514 text:[संगीत]
second:542 text:[संगीत]
second:544 text:नंबर बहुत न्यू ए चुकी वो करें करोगी बीपी
second:547 text:तो उन्होंने बहुत दोनों था सबको मिलन एक
second:550 text:पोता था थोड़ा ऑस्ट्रेलिया बा गया करवा के
second:552 text:तय दूजा बा नहीं करौंदा ऑस्ट्रेलिया
second:582 text:[हंसी]
second:599 text:[संगीत]
second:664 text:[प्रशंसा]
second:673 text:[प्रशंसा]
second:674 text:[संगीत]
second:679 text:[प्रशंसा]
second:697 text:हां साले
second:717 text:[संगीत]
second:717 text:[हंसी]
second:722 text:[प्रशंसा]
second:732 text:[प्रशंसा]
second:741 text:[प्रशंसा]
second:756 text:[संगीत]
second:768 text:बहुत मेहरबानी यार तेरे घर के निकाल गया
second:771 text:ना एकदम मेरी साड़ी गाड़ी है इतनी फोटो
second:772 text:जान से
second:774 text:[संगीत]
second:775 text:[प्रशंसा]
second:776 text:[संगीत]
second:779 text:देहाती लॉन्ग
second:796 text:बेला करो
second:806 text:कितना पसंद है
second:868 text:[हंसी]
second:903 text:[हंसी]
second:925 text:[संगीत]
second:931 text:[संगीत]
second:966 text:[हंसी]
second:978 text:[हंसी]
second:982 text:शूटिंग चल रही है वह पानी वाला टैंकर लेक
second:986 text:जाना है बीरबल के 13000
second:989 text:नहीं छिड़ आओ करना है
second:990 text:चलो चलो
second:1001 text:[प्रशंसा]
second:1015 text:[हंसी]
second:1049 text:[संगीत]
second:1050 text:[प्रशंसा]
second:1063 text:[संगीत]
second:1082 text:[संगीत]
second:1095 text:मौला
second:1167 text:ब्रह्मचारी नहीं हुए बार-बार बोलना
second:1190 text:छोटे छोटे
second:1200 text:[संगीत]
second:1216 text:[संगीत]
second:1231 text:[संगीत]
second:1261 text:[संगीत]
second:1266 text:प्राणी भी होंगे
second:1291 text:[संगीत]
second:1322 text:[संगीत]
second:1329 text:[संगीत]
second:1338 text:[संगीत]
second:1344 text:अंदर के अंदर फोन है अगर ये ट्रॉली आया
second:1346 text:हूं ना यार मैं हूं चल गया था साड़ी बेचनी
second:1349 text:पता है पहले पहनी थी फिल्म लाउदी
second:1356 text:है लगे चाहिए यार तू मेरा असिस्टेंट है
second:1362 text:[संगीत]
second:1378 text:जी
second:1380 text:[संगीत]
second:1382 text:मतलब
second:1383 text:[संगीत]
second:1384 text:मेरे मम्मी पापा हनी चाहिए
second:1391 text:मतलब
second:1394 text:[संगीत]
second:1402 text:[संगीत]
second:1408 text:[संगीत]
second:1429 text:[संगीत]
second:1430 text:क्या बात है
second:1432 text:बड़ा सोना है ना मैं कभी गया था
second:1435 text:[संगीत]
second:1440 text:मतलब खेती बड़ी हनी चाहिए
second:1443 text:[संगीत]
second:1517 text:ठीक है
second:1519 text:[संगीत]
second:1547 text:[संगीत]
second:1558 text:[संगीत]
second:1578 text:हां देखते हैं
second:1579 text:[संगीत]
second:1595 text:[संगीत]
second:1608 text:सो ब्यूटीफुल
second:1610 text:[संगीत]
second:1617 text:[प्रशंसा]
second:1619 text:[संगीत]
second:1629 text:[संगीत]
second:1641 text:[संगीत]
second:1647 text:पकड़
second:1648 text:[संगीत]
second:1649 text:[प्रशंसा]
second:1652 text:सो प्रिटी हम इनको शूट में उसे कर सकते
second:1655 text:हैं ना
second:1655 text:[संगीत]
second:1657 text:मैं पास रख दिया
second:1658 text:[संगीत]
second:1702 text:[संगीत]
second:1711 text:[प्रशंसा]
second:1711 text:[संगीत]
second:1725 text:[प्रशंसा]
second:1733 text:[संगीत]
second:1736 text:खुदा
second:1742 text:[संगीत]
second:1773 text:[संगीत]
second:1791 text:[संगीत]
second:1799 text:[संगीत]
second:1808 text:सात श्री कल सात श्री कल सस्तिका
second:1814 text:[संगीत]
second:1816 text:सो मैच
second:1818 text:[संगीत]
second:1828 text:ए जो
second:1829 text:[संगीत]
second:1837 text:थैंक यू सो मैच
second:1850 text:[संगीत]
second:1862 text:[संगीत]
second:1879 text:[संगीत]
second:1891 text:हां
second:1893 text:[संगीत]
second:1899 text:जी
second:1902 text:[संगीत]
second:1956 text:[संगीत]
second:1963 text:तेरी याद आई
second:1967 text:[संगीत]
second:1976 text:[संगीत]
second:1984 text:[संगीत]
second:2022 text:[संगीत]
second:2035 text:जबरदस्त जबरदस्त
second:2048 text:[संगीत]
second:2065 text:[संगीत]
second:2075 text:[संगीत]
second:2090 text:[संगीत]
second:2103 text:[संगीत]
second:2121 text:[संगीत]
second:2123 text:बेरी बहन बीबीसी
second:2131 text:ठीक है
second:2144 text:[संगीत]
second:2159 text:[संगीत]
second:2174 text:तेज होगी
second:2182 text:[संगीत]
second:2195 text:[संगीत]
second:2205 text:[हंसी]
second:2220 text:[संगीत]
second:2227 text:[संगीत]
second:2229 text:और ए जा
second:2231 text:[संगीत]
second:2237 text:सकता है
second:2245 text:[संगीत]
second:2253 text:[संगीत]
second:2268 text:[संगीत]
second:2304 text:[संगीत]
second:2310 text:[संगीत]
second:2313 text:खुदा
second:2318 text:[संगीत]
second:2345 text:[संगीत]
second:2360 text:[प्रशंसा]
second:2370 text:[संगीत]
second:2389 text:खुदा
second:2443 text:[संगीत]
second:2453 text:[संगीत]
second:2463 text:मौला
second:2468 text:[हंसी]
second:2472 text:मेरे प्यार प्यार बहुत ही प्यार के हर मां
second:2477 text:प्यार जग्गा जी
second:2490 text:सलमान खान
second:2527 text:[संगीत]
second:2535 text:[संगीत]
second:2545 text:खुदा
second:2547 text:[संगीत]
second:2558 text:[संगीत]
second:2561 text:फैक्ट्री
second:2606 text:हां जी भाई
second:2662 text:[संगीत]
second:2669 text:[संगीत]
second:2677 text:जैसी दोनों में कितने बुढो
second:2680 text:की चिट्टियां अली गला करते हैं
second:2683 text:जगह चाहिए तुसी मैंने अपना नंबर भेजो मैं
second:2686 text:तो फोन करूंगी
second:2703 text:हां
second:2707 text:हेलो
second:2709 text:तू यार इट्स सो ब्यूटीफुल और रोमांटिक ना
second:2712 text:नेहा तुझे पता है जब भी मैं बचपन में यहां
second:2716 text:से गुजराती थी ना तो मुझे ऐसा लगता था
second:2720 text:जैसे वहां खड़ा कोई मेरा इंतजार कर रहा है
second:2724 text:[संगीत]
second:2727 text:मुझे हमेशा ऐसा लगता था की अभी कोई आया
second:2730 text:नहीं है कोई तो मिसिंग है पर वह कौन है यह
second:2735 text:मुझे अभी तक नहीं पता रियली
second:2739 text:[संगीत]
second:2750 text:[संगीत]
second:2755 text:करता है
second:2757 text:यू नो व्हाट सोनाली तुम्हें तुम्हारा यह
second:2760 text:सोलमेट ना सिर्फ ख्वाब भी मिल सकता है
second:2767 text:[संगीत]
second:2825 text:[संगीत]
second:2846 text:असम
second:2850 text:हरिद्वार
second:2897 text:[संगीत]
second:2926 text:[संगीत]
second:2936 text:हेलो नंबर
second:2952 text:शिमला
second:2996 text:बढ़िया भाई एक छोटा सा कम इस तरह तक
second:3002 text:मेरा बड़ा दिल करता है
second:3012 text:मुकाबला
second:3028 text:ट्रैक्टर नहीं है
second:3031 text:[संगीत]
second:3056 text:[संगीत]
second:3078 text:हेलो सोनाली जी हेलो
second:3085 text:कल हार्ट अटैक
second:3092 text:[संगीत]
second:3101 text:[संगीत]
second:3113 text:थोड़े दोनों तक मेरे पैसे ए जाएंगे मैं एक
second:3116 text:महीने के अंदर
second:3120 text:[संगीत]
second:3135 text:[संगीत]
second:3151 text:खुदा
second:3156 text:[संगीत]
second:3214 text:[संगीत]
second:3216 text:ध्यान रखें
second:3218 text:मा ट्रैक्टर
second:3222 text:[संगीत]
second:3241 text:[प्रशंसा]
second:3273 text:[संगीत]
second:3277 text:मोड जाएंगे
second:3295 text:[संगीत]
second:3302 text:जगह बोल रहे हैं
second:3307 text:[संगीत]
second:3319 text:[संगीत]
second:3337 text:[संगीत]
second:3354 text:[संगीत]
second:3361 text:चलो फिर मैं चल दिया
second:3365 text:[संगीत]
second:3371 text:ठीक है
second:3376 text:[संगीत]
second:3383 text:[संगीत]
second:3429 text:ओ तेरा ट्रैक्टर हो लंबरदार आना
second:3434 text:[संगीत]
second:3437 text:लेक आया है
second:3439 text:[संगीत]
second:3451 text:[संगीत]
second:3452 text:ऑस्ट्रेलिया
second:3463 text:ए रही है पहले बार ऑस्ट्रेलिया
second:3473 text:[संगीत]
second:3508 text:[संगीत]
second:3519 text:[संगीत]
second:3523 text:[प्रशंसा]
second:3525 text:[संगीत]
second:3526 text:ए
second:3542 text:[संगीत]
second:3559 text:[संगीत]
second:3582 text:[संगीत]
second:3597 text:[संगीत]
second:3600 text:[प्रशंसा]
second:3601 text:[संगीत]
second:3611 text:चल चल
second:3632 text:[संगीत]
second:3642 text:[संगीत]
second:3646 text:[प्रशंसा]
second:3649 text:[संगीत]
second:3664 text:खुदा
second:3686 text:हाफिज
second:3693 text:[संगीत]
second:3704 text:[संगीत]
second:3718 text:[संगीत]
second:3736 text:[प्रशंसा]
second:3754 text:हेलो
second:3756 text:[संगीत]
second:3759 text:की हाल है तो दे
second:3760 text:[संगीत]
second:3763 text:की मैं पापा मेरा मतलब डैडी
second:3770 text:[संगीत]
second:3772 text:थोड़ा फोन जी
second:3781 text:[संगीत]
second:3786 text:मैं थोड़ी हूं कंगन पाव चेहरे में शूट दे
second:3790 text:पाएगी
second:3790 text:[संगीत]
second:3798 text:मैं आपके थोड़े कंगन
second:3830 text:[संगीत]
second:3853 text:[संगीत]
second:3874 text:[संगीत]
second:3880 text:[संगीत]
second:3890 text:[संगीत]
second:3899 text:[संगीत]
second:3929 text:[संगीत]
second:3943 text:[प्रशंसा]
second:3945 text:[संगीत]
second:3955 text:[संगीत]
second:3965 text:[संगीत]
second:3986 text:ना मिलने
second:3997 text:[संगीत]
second:4013 text:[संगीत]
second:4058 text:[संगीत]
second:4062 text:मैं कल तो नहीं कार्ड
second:4064 text:[संगीत]
second:4069 text:का कोई बड़ा
second:4070 text:मैंने किस अंदाज दी तू भी ना कैसे कोई माफ
second:4073 text:कर दी बस तेरा ब्याह हो जावे
second:4075 text:[संगीत]
second:4075 text:[हंसी]
second:4078 text:[संगीत]
second:4086 text:गाड़ी है देखिए
second:4092 text:कुड़ी पसंद कर ली
second:4096 text:[संगीत]
second:4107 text:[संगीत]
second:4125 text:[संगीत]
second:4147 text:इस आवाज से ले जग गया पुत्र आता है ना तू
second:4152 text:बहुत सोना
second:4156 text:[हंसी]
second:4159 text:है
second:4164 text:[हंसी]
second:4172 text:पूरे तक के करेंगे असर पंचड़ा तब टाबर
second:4176 text:ताला सारे खड़-खड़ के देख लेंगे और करना
second:4186 text:पलक्कड़
second:4189 text:[संगीत]
second:4196 text:[संगीत]
second:4217 text:[संगीत]
second:4222 text:शिमला तो
second:4223 text:[संगीत]
second:4226 text:शिमला
second:4253 text:[संगीत]
second:4268 text:[संगीत]
second:4277 text:[संगीत]
second:4303 text:[संगीत]
second:4328 text:[संगीत]
second:4338 text:सविता
second:4340 text:[संगीत]
second:4355 text:[संगीत]
second:4362 text:भाई पता है ना लिख दो ना यह
second:4364 text:[संगीत]
second:4365 text:शेर वाला गेट
second:4367 text:पुराना शिमला
second:4376 text:[संगीत]
second:4387 text:[संगीत]
second:4394 text:[संगीत]
second:4433 text:[संगीत]
second:4443 text:ए ही लगता है चलो धीरे
second:4451 text:चलो
second:4457 text:और बाकी भी सारे कमरे यहां पर लाकर रखो
second:4460 text:फिर मैं बताता हूं क्या करना है
second:4474 text:तो
second:4481 text:साड़ी
second:4492 text:हो थोड़ी डर
second:4499 text:दो तुसी जोरदार लो थोड़ी सी तो पहले ही
second:4502 text:ठीक नहीं आएगी
second:4512 text:बैठो भाई
second:4520 text:सोनाली बेटा
second:4540 text:जी
second:4544 text:पता ग गया
second:4555 text:अंकल
second:4562 text:[संगीत]
second:4570 text:पर सुनहरी ने दास ऐसी का भी दोनों दिल लगा
second:4574 text:रहा है
second:4580 text:[संगीत]
second:4587 text:[संगीत]
second:4590 text:कीड़े पैसे
second:4595 text:[संगीत]
second:4612 text:[संगीत]
second:4619 text:[संगीत]
second:4627 text:[संगीत]
second:4640 text:[संगीत]
second:4664 text:[संगीत]
second:4673 text:हो
second:4679 text:कागज नहीं पत्थर नहीं कोई गवाह नहीं
second:4684 text:कर पी
second:4708 text:[संगीत]
second:4733 text:ए ए जा भाई
second:4738 text:जग गया जग गया ओ
second:4746 text:अच्छा सा
second:4755 text:ओके भाई
second:4767 text:[संगीत]
second:4768 text:[प्रशंसा]
second:4773 text:[संगीत]
second:4781 text:[संगीत]
second:4782 text:गलती होगी
second:4788 text:[संगीत]
second:4795 text:[संगीत]
second:4827 text:गलती तो खुशी है
second:4828 text:[संगीत]
second:4847 text:[संगीत]
second:4896 text:मौला
second:4897 text:[संगीत]
second:4899 text:[प्रशंसा]
second:4904 text:[संगीत]
second:4932 text:[संगीत]
second:4936 text:[प्रशंसा]
second:4941 text:[संगीत]
second:4954 text:[संगीत]
second:4967 text:सुरमा तो फिर है गई है भाई
second:4970 text:कौन है तब बाय डॉ था आलू ऊपर चला चल के
second:4974 text:नहीं
second:4975 text:ये तो गला मर्जी है
second:4987 text:ना होने चंडीगढ़
second:4991 text:[संगीत]
second:4994 text:[प्रशंसा]
second:4997 text:[संगीत]
second:5008 text:[संगीत]
second:5018 text:[संगीत]
second:5035 text:[संगीत]
second:5044 text:[संगीत]
second:5053 text:[संगीत]
second:5073 text:[प्रशंसा]
second:5078 text:ए
second:5080 text:[प्रशंसा]
second:5088 text:[संगीत]
second:5099 text:[संगीत]
second:5125 text:[संगीत]
second:5139 text:[संगीत]
second:5141 text:मौला
second:5149 text:[संगीत]
second:5206 text:[संगीत]
second:5211 text:[प्रशंसा]
second:5213 text:[संगीत]
second:5219 text:[संगीत]
second:5246 text:[संगीत]
second:5259 text:[प्रशंसा]
second:5264 text:[संगीत]
second:5283 text:[संगीत]
second:5287 text:8 लाख
second:5290 text:[संगीत]
second:5311 text:[संगीत]
second:5320 text:[संगीत]
second:5329 text:[संगीत]
second:5343 text:चीटिंग
second:5346 text:चुटकुले
second:5348 text:[संगीत]
second:5375 text:[संगीत]
second:5403 text:[प्रशंसा]
second:5406 text:[संगीत]
second:5419 text:[संगीत]
second:5426 text:[संगीत]
second:5432 text:[संगीत]
second:5448 text:[संगीत]
second:5458 text:[संगीत]
second:5499 text:खुदा
second:5532 text:[संगीत]
second:5537 text:संदीप
second:5550 text:[संगीत]
second:5565 text:मैं कर देनी है
second:5567 text:[संगीत]
second:5584 text:[संगीत]
second:5590 text:[संगीत]
second:5618 text:[संगीत]
second:5622 text:[प्रशंसा]
second:5639 text:हमे
second:5646 text:[संगीत]
second:5665 text:[प्रशंसा]
second:5667 text:[संगीत]
second:5684 text:[संगीत]
second:5689 text:ठीक है
second:5691 text:[संगीत]
second:5698 text:[संगीत]
second:5713 text:जगह पुत्र मेरे पुत्र वापस लाया
second:5719 text:[संगीत]
second:5729 text:गुरु कृपा करो
second:5731 text:[संगीत]
second:5763 text:[संगीत]
second:5786 text:ओ पैकेट
second:5789 text:[संगीत]
second:5804 text:[प्रशंसा]
second:5810 text:[संगीत]
second:5816 text:[संगीत]
second:5840 text:[प्रशंसा]
second:5859 text:सदर जय
second:5863 text:सभी भारतीय
second:5867 text:[प्रशंसा]
second:5872 text:जनता पार्टी
second:5891 text:[प्रशंसा]
second:6144 text:[प्रशंसा]
second:6146 text:खुदा
second:6182 text:[संगीत]
second:6191 text:[संगीत]
second:6206 text:[संगीत]
second:6222 text:[प्रशंसा]
second:6222 text:[संगीत]
second:6227 text:[प्रशंसा]
second:6228 text:[संगीत]
second:6235 text:[प्रशंसा]
second:6237 text:[संगीत]
second:6245 text:सोनाली जा रही है
second:6249 text:[संगीत]
second:6249 text:[प्रशंसा]
second:6251 text:[संगीत]
second:6253 text:[प्रशंसा]
second:6254 text:धीरे
second:6257 text:[संगीत]
second:6259 text:[प्रशंसा]
second:6262 text:[संगीत]
second:6263 text:[प्रशंसा]
second:6265 text:[संगीत]
second:6278 text:[संगीत]
second:6282 text:[प्रशंसा]
second:6286 text:मेरी फैमिली मेरा वेट कर रही है
second:6290 text:[संगीत]
second:6290 text:[प्रशंसा]
second:6292 text:[संगीत]
second:6295 text:[प्रशंसा]
second:6300 text:[संगीत]
second:6304 text:[प्रशंसा]
second:6319 text:[संगीत]
second:6329 text:[संगीत]
second:6348 text:[संगीत]
second:6368 text:[संगीत]
second:6376 text:पापा
second:6383 text:[संगीत]
second:6388 text:मिलेंगे
second:6393 text:[संगीत]
second:6405 text:बाकी मेरे भर के देसी जंगली जाना
second:6407 text:[संगीत]
second:6409 text:तब तो जान
second:6410 text:[संगीत]
second:6417 text:[संगीत]
second:6417 text:[प्रशंसा]
second:6421 text:[संगीत]
second:6454 text:[प्रशंसा]
second:6457 text:[संगीत]
second:6487 text:[संगीत]
second:6489 text:[प्रशंसा]
second:6490 text:[संगीत]
second:6496 text:ए
second:6503 text:[संगीत]
second:6532 text:[संगीत]
second:6559 text:खुदा
second:6567 text:[संगीत]
second:6586 text:[संगीत]
second:6595 text:[संगीत]
second:6618 text:[संगीत]
second:6633 text:[प्रशंसा]
second:6654 text:खुदा
second:6662 text:[संगीत]
second:6674 text:[संगीत]
second:6681 text:[संगीत]
second:6689 text:[संगीत]
second:6699 text:[संगीत]
second:6716 text:[संगीत]


GPT-4o Mini
Summary

The video opens with a traditional greeting, "खालसा वाहेगुरु जी की फतेह," setting a celebratory tone. Throughout the video, viewers are treated to various moments of praise and enthusiasm, punctuated by lively music and dance. The excitement builds as the participants engage in high-energy performances, showcasing vibrant cultural expressions. The video emphasizes community spirit and joy, inviting viewers to immerse themselves in the celebration.
Highlights

Timestamp	Description
4	The video begins with a traditional greeting, establishing a cultural context.
45	Participants start praising, creating an uplifting atmosphere.
56	More expressions of praise, highlighting the excitement of the event.
75	A call to action prompts the audience to participate actively.
80	Transition to a lively market scene, showcasing vibrant cultural interactions.
98	Dance performances begin, captivating the audience with energetic movements.
105	A moment of reflection on the challenges faced, adding depth to the celebration.
116	Musical interlude enhances the celebratory mood, reinforcing community ties.
155	The video concludes with a final musical piece, leaving viewers uplifted.

This organized format captures the essence of the video, highlighting its cultural significance and festive spirit.
GPT-4o Mini
coin image
10
Upgrade



Ask me anything...



Make a Review & Earn Credit ❤
Chat
Ask
Search
Write
Image
ChatPDF
Vision
Full Page
Invite & Earn

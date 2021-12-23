"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[420],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3066:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:8,id:"javascriptintegrationtips"},s="Integration Tips",p={unversionedId:"javascriptintegrationtips",id:"version-JavaScript SDK 6.0.0/javascriptintegrationtips",title:"Integration Tips",description:"Maintain the connection with the terminal at all times:",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.0.0/javascriptintegrationtips.md",sourceDirName:".",slug:"/javascriptintegrationtips",permalink:"/doc/javascript/JavaScript SDK 6.0.0/javascriptintegrationtips",tags:[],version:"JavaScript SDK 6.0.0",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"javascriptintegrationtips"},sidebar:"version-JavaScript SDK 6.0.0/tutorialSidebar",previous:{title:"Quick Integration Test",permalink:"/doc/javascript/JavaScript SDK 6.0.0/javascriptquickintegration"},next:{title:"Methods",permalink:"/doc/javascript/JavaScript SDK 6.0.0/javascriptmethods"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration-tips"},"Integration Tips"),(0,i.kt)("p",null,"Maintain the connection with the terminal at all times:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To be able to recover a transaction result through the callback passed in the ",(0,i.kt)("a",{parentName:"li",href:"/doc/javascript/JavaScript%20SDK%206.0.0/javascriptmethods#1"},(0,i.kt)("em",{parentName:"a"},"init"))," method, the point of sale and the terminal ",(0,i.kt)("strong",{parentName:"li"},"MUST")," be connected and online. For that reason, we recommend to connect to the target terminal and maintain the connection alive at all times instead of connecting and disconnecting for every transaction."),(0,i.kt)("li",{parentName:"ul"},"Using the same connection, the user may perform as many transactions as desired. The SDK is in charge of maintaining the secure channel between the point of sale and the terminal. No connection and disconnection between transactions is required. The silent connected periods will provide the possibility for the device to deliver any pending transaction result in case of a network issue.")),(0,i.kt)("p",null,"How Transaction Recovery Works:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The terminal has a transaction recovery loop to automatically send back the pending ",(0,i.kt)("a",{parentName:"li",href:"/doc/javascript/JavaScript%20SDK%206.0.0/javascriptobjects#18"},(0,i.kt)("em",{parentName:"a"},"Transaction Result"))," to the Point of sale in case it becomes unreachable (network issue or other). For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the point of sale is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc\u2026). The recovery loop is reinitialized every time the Handpoint application is restarted or anytime the startRecovery method is used.")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5202],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,w=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(w,i(i({ref:t},p),{},{components:n})):r.createElement(w,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4195:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,id:"windowsapioverview"},s="API overview",c={unversionedId:"windowsapioverview",id:"version-Windows SDK 3.1.4/windowsapioverview",title:"API overview",description:"How to implement a Sale Transaction",source:"@site/windows_versioned_docs/version-Windows SDK 3.1.4/windowsapioverview.md",sourceDirName:".",slug:"/windowsapioverview",permalink:"/doc/windows/Windows SDK 3.1.4/windowsapioverview",tags:[],version:"Windows SDK 3.1.4",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"windowsapioverview"},sidebar:"version-Windows SDK 3.1.4/tutorialSidebar",previous:{title:"Introduction",permalink:"/doc/windows/Windows SDK 3.1.4/windowsintroduction"},next:{title:"Integration Guide",permalink:"/doc/windows/Windows SDK 3.1.4/windowsintegrationguide"}},p=[{value:"How to implement a Sale Transaction",id:"how-to-implement-a-sale-transaction",children:[],level:3},{value:"How to implement a Sale Transaction with Recovery feature",id:"how-to-implement-a-sale-transaction-with-recovery-feature",children:[],level:3}],u={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-overview"},"API overview"),(0,o.kt)("h3",{id:"how-to-implement-a-sale-transaction"},"How to implement a Sale Transaction"),(0,o.kt)("p",null,"The below flow chart shows the interaction between the SDK, the payment terminal and your application. The orange arrows represent methods (requests) that need to be invoked to communicate with the Handpoint SDK's. The dark arrows represent events that need to be integrated in your code in order to retrieve information from the SDK\xb4s and the card reader."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(6164).Z})),(0,o.kt)("h3",{id:"how-to-implement-a-sale-transaction-with-recovery-feature"},"How to implement a Sale Transaction with Recovery feature"),(0,o.kt)("p",null,"At some point, the connection between the SDK and the card reader can become unstable. For example, the Bluetooth connection can be cut in the middle of a sale transaction if the smartphone runs out of battery. If this happens, you need to have implemented the \u201ctransaction recovery feature\u201d in order to get the receipts from the previous transaction and knowing if it was successful despite the connection problem."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sandbox logo",src:n(4604).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supported functionality")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Discovery of remote BT and CLOUD devices."),(0,o.kt)("li",{parentName:"ul"},"Connect to remote BT and CLOUD device."),(0,o.kt)("li",{parentName:"ul"},"Physical connection to HiPro external accessory."),(0,o.kt)("li",{parentName:"ul"},"Automatic or manual reconnection to the card reader."),(0,o.kt)("li",{parentName:"ul"},"Executing financial transaction."),(0,o.kt)("li",{parentName:"ul"},"Reporting status of transactions."),(0,o.kt)("li",{parentName:"ul"},"Control and access to device logs."),(0,o.kt)("li",{parentName:"ul"},"Barcode scanner with HiPro card readers."),(0,o.kt)("li",{parentName:"ul"},"Limited card reader simulation.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Processing Payments Simulation")),(0,o.kt)("p",null,"Your test payments are sent against a test server on the Handpoint side which simulates the behavior of an acquiring bank. Funds are not moved and sensitive data from the card is fully encrypted. You can use trigger amounts to generate some specific responses from our server:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sale amounts")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Amount"),(0,o.kt)("th",{parentName:"tr",align:null},"Behaviour"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.79"),(0,o.kt)("td",{parentName:"tr",align:null},"Issuer response code = 01 (Refer to issuer)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.84"),(0,o.kt)("td",{parentName:"tr",align:null},"Issuer response code = 05 (Not authorized)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.93"),(0,o.kt)("td",{parentName:"tr",align:null},"Issuer response code = 04 (Pick up card)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.57"),(0,o.kt)("td",{parentName:"tr",align:null},"Request is partially approved")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"37.68"),(0,o.kt)("td",{parentName:"tr",align:null},"Request timeout")))))}d.isMDXComponent=!0},6164:function(e,t,n){t.Z=n.p+"assets/images/SaleTransaction-2e80005335a3658d461e8866b11d40c5.png"},4604:function(e,t,n){t.Z=n.p+"assets/images/SaleTransactionRecovery-7152e3a8c2bfc334345679ebde736511.png"}}]);
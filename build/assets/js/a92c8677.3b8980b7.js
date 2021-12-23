"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7727],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5216:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:8,id:"restendpoints"},s="Endpoints",p={unversionedId:"restendpoints",id:"version-REST API 2.3.0/restendpoints",title:"Endpoints",description:"/initialize",source:"@site/restapi_versioned_docs/version-REST API 2.3.0/restendpoints.md",sourceDirName:".",slug:"/restendpoints",permalink:"/doc/restapi/REST API 2.3.0/restendpoints",tags:[],version:"REST API 2.3.0",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"restendpoints"},sidebar:"version-REST API 2.3.0/tutorialSidebar",previous:{title:"Processing Payments Simulation",permalink:"/doc/restapi/REST API 2.3.0/restprocessingpayments"},next:{title:"Objects",permalink:"/doc/restapi/REST API 2.3.0/restobjects"}},c=[{value:"/initialize",id:"initialize",children:[],level:2},{value:"/transactions",id:"transactions",children:[],level:2},{value:"Transaction Result Recovery",id:"transaction-result-recovery",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"endpoints"},"Endpoints"),(0,i.kt)("h2",{id:"initialize"},"/initialize"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Initialize")),(0,i.kt)("p",null,"Initializes the REST API client and returns the list of payment terminals associated with the merchant account"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Header: ApiKeyCloud")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required"),"    ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Request Header used to identify the merchant")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Devices"),(0,i.kt)("td",{parentName:"tr",align:null},"List of ",(0,i.kt)("a",{parentName:"td",href:"/doc/restapi/REST%20API%202.3.0/restobjects#device"},"Device")," objects")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Operation executed using CLI tool CURL:\nREQUEST:\n  curl -X GET \\\n   -H "ApiKeyCLoud: MeRcHaNt-ApIkEy" \\\n   "https://cloud.handpoint.com/initialize"\n\nRESPONSE:\n Code 200 -> Body:\n  [\n    {\n      "merchant_id_alpha": "merchantID",\n      "serial_number": "082104578",\n      "customerReference": "op15248",\n      "terminal_type": "PAXA920"\n    }\n  ]\n')),(0,i.kt)("h2",{id:"transactions"},"/transactions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Transactions")),(0,i.kt)("p",null,"POST endpoint used to execute a financial operation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Header: ApiKeyCloud")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Request Header used to identify the merchant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Request Body: Transaction Request")," ",(0,i.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"TransactionRequest")),(0,i.kt)("td",{parentName:"tr",align:null},"Object containing the transaction information")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Response"),(0,i.kt)("th",{parentName:"tr",align:null},"Response Code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Transaction Accepted")),(0,i.kt)("td",{parentName:"tr",align:null},"Response code 202 is received if the transaction has been successfully sent to the terminal.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"BadRequest DeviceIsBusy Error")),(0,i.kt)("td",{parentName:"tr",align:null},"Response code 400 with error 1001. Wait until the end of the current transaction to be able to execute the next operation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"BadRequest DeviceNotResponding Error")),(0,i.kt)("td",{parentName:"tr",align:null},"Response code 400 with error 1002. The device is not responding, verify the device is online and retry in a few seconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"BadRequest CancelOperationNotAllowed Error")),(0,i.kt)("td",{parentName:"tr",align:null},"Response code 400 with error 1003. Operation type stopCurrentTransaction cannot be executed because the terminal is processing the transaction and it can not be stopped.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Operation executed using CLI tool CURL:\nREQUEST:\n  curl -X GET \\\n   -H "ApiKeyCLoud: MeRcHaNt-ApIkEy" \\\n   "https://cloud.handpoint.com/initialize"\n\nRESPONSE:\n Code 200 -> Body:\n  [\n    {\n      "merchant_id_alpha": "merchantID",\n      "serial_number": "082104578",\n      "customerReference": "op15248",\n      "terminal_type": "PAXA920"\n    }\n  ]\n')),(0,i.kt)("h2",{id:"transaction-result-recovery"},"Transaction Result Recovery"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TransactionResultRecovery")),(0,i.kt)("p",null," The terminal has a transaction recovery loop to automatically send back the pending TransactionResult to the callback URL in case it becomes unreachable (network issue or server down)."),(0,i.kt)("p",null," For the first 100 seconds after a transaction is completed, a background thread will attempt to deliver the result every 5 seconds. If the server is still unreachable after the first 100 seconds, the retry loop turns into an exponential increment to the power of 2 (8s-16s-32s etc\u2026).\nThe recovery loop is reinitialized every time the Handpoint application is restarted or the startRecovery method is triggered. The Transaction Result received through the transaction recovery loop will have the ",(0,i.kt)("strong",{parentName:"p"},"recoveredTransaction")," field set to ",(0,i.kt)("strong",{parentName:"p"},"true"),"."),(0,i.kt)("p",null," All 2XXs http response codes from the callbackUrl are valid to notify the device of a successful delivery of the result."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Transaction Result"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/doc/restapi/REST%20API%202.3.0/restobjects#transaction-result-object"},"Transaction Result")," is delivered to the callback Url from the ",(0,i.kt)("a",{parentName:"td",href:"/doc/restapi/REST%20API%202.3.0/restobjects#transaction-request-object"},"Transaction Request"),".")))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3717],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1525:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={sidebar_position:7,id:"javascriptquickintegration"},s="Quick Integration Test",l={unversionedId:"javascriptquickintegration",id:"version-JavaScript SDK 6.0.1/javascriptquickintegration",title:"Quick Integration Test",description:"This js script sample shows how you can integrate your solution with Handpoint JavaScript SDK to perform a product sale in three quick and simple SDK calls:",source:"@site/javascript_versioned_docs/version-JavaScript SDK 6.0.1/javascriptquickintegration.md",sourceDirName:".",slug:"/javascriptquickintegration",permalink:"/doc/javascript/javascriptquickintegration",tags:[],version:"JavaScript SDK 6.0.1",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"javascriptquickintegration"},sidebar:"version-JavaScript SDK 6.0.1/tutorialSidebar",previous:{title:"Processing Payments Simulation",permalink:"/doc/javascript/javascriptprocessingpayments"},next:{title:"Integration Tips",permalink:"/doc/javascript/javascriptintegrationtips"}},p=[],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-integration-test"},"Quick Integration Test"),(0,o.kt)("p",null,"This js script sample shows how you can integrate your solution with Handpoint JavaScript SDK to perform a product sale in three quick and simple SDK calls:"),(0,o.kt)("p",null,"1) Request your test configuration (apiKey and deviceName constants) from Handpoint and set them in your web application"),(0,o.kt)("p",null,"2) Download handpoint.js from this ",(0,o.kt)("a",{parentName:"p",href:"https://hpoint-cr-binaries-prod.s3.amazonaws.com/cloud/sdk/wrappers/js/6.0.0/handpoint-6.0.0.js"},"link")),(0,o.kt)("p",null,"3) In the same directory, copy both handpoint.js and the code below in an html file"),(0,o.kt)("p",null,"4) Open the html file in the browser and see test transactions immediately"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SIMPLE, FAST, and EASY")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<!doctype html>\n<html>\n\n<head>\n  <title>Handpoint SDK Trial Integration</title>\n  <script src=\"handpoint.js\"><\/script>\n</head>\n\n<body>\n  <script>\n      var hp = new Handpoint()\n      //************* Test configuration *************//\n      var apiKey = 'YourApiKey';\n      var deviceName = '082245-Device';\n      var environmentIsDevelopment = true;\n      //*********************************************//\n      hp.init(apiKey, environmentIsDevelopment, (pendingEoT) => {\n        console.log('Recovered Transaction -> ' + JSON.stringify(pendingEoT));\n      }).then(\n        response1 => {\n          console.log('Successful initialization')\n          //document.writeln('Successful initialization<br />')\n          hp.connect(deviceName).then(\n            response2 => {\n              console.log('Successful Connection to device [' + deviceName + ']');\n              //document.writeln('Successful Connection to device [' + deviceName + ']<br />')\n              console.log('Executing sale');\n              //document.writeln('Executing sale<br />')\n              hp.sale('10', 'EUR').then(\n                response3 => {\n                  console.log('Successful sale');\n                  //document.writeln('Successful sale<br />');\n                  hp.disconnect(deviceName).then(\n                    response3 => {\n                      console.log('Successful disconnection from device [' + deviceName + ']')\n                      //document.writeln('Successful disconnection from device [' + deviceName + ']<br />')\n                    }\n                  ).catch(\n                    error => console.log('Disconnection to device [' + deviceName + '] Failed -> ' + JSON.stringify(error))\n                  );\n                }\n              ).catch(\n                error => console.log('Sale Failed -> ' + JSON.stringify(error))\n              );\n            }\n          ).catch(\n            error => console.log('Connection to device [' + deviceName + '] Failed -> ' + JSON.stringify(error))\n          );\n        }\n      ).catch(\n        error => console.log('Initialization Failed -> ' + JSON.stringify(error))\n      );\n  <\/script>\n</body>\n\n</html>\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4309],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},123:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:6,id:"androiddevicemanagement"},p="Device management",d={unversionedId:"androiddevicemanagement",id:"version-Android SDK 6.4.1/androiddevicemanagement",title:"Device management",description:"Connect",source:"@site/android_versioned_docs/version-Android SDK 6.4.1/androiddevicemanagement.md",sourceDirName:".",slug:"/androiddevicemanagement",permalink:"/doc/android/Android SDK 6.4.1/androiddevicemanagement",tags:[],version:"Android SDK 6.4.1",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"androiddevicemanagement"},sidebar:"version-Android SDK 6.4.1/tutorialSidebar",previous:{title:"Transactions",permalink:"/doc/android/Android SDK 6.4.1/androidtransactions"},next:{title:"Events subscribers",permalink:"/doc/android/Android SDK 6.4.1/androideventsubscribers"}},s=[{value:"Connect",id:"connect",children:[],level:2},{value:"Get Transactions Report",id:"get-transactions-report",children:[],level:2},{value:"Disconnect",id:"disconnect",children:[],level:2},{value:"Get EMV Report",id:"get-emv-report",children:[],level:2},{value:"Get Paired Devices",id:"get-paired-devices",children:[],level:2},{value:"Get device logs",id:"get-device-logs",children:[],level:2},{value:"Get Device Manufacturer",id:"get-device-manufacturer",children:[],level:2},{value:"Flash Reset",id:"flash-reset",children:[],level:2},{value:"Print Receipt",id:"print-receipt",children:[],level:2},{value:"Search Devices",id:"search-devices",children:[],level:2},{value:"Set Locale",id:"set-locale",children:[],level:2},{value:"Set log level",id:"set-log-level",children:[],level:2},{value:"Stop current transaction",id:"stop-current-transaction",children:[],level:2},{value:"Update device",id:"update-device",children:[],level:2}],m={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"device-management"},"Device management"),(0,l.kt)("h2",{id:"connect"},"Connect"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"connect")),(0,l.kt)("p",null,"Connects to a device. Whenever the connection to the device is lost, the SDK will keep on trying to establish a connection until it\u2019s re-established. No special actions are needed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"device")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androidobjects#17"},(0,l.kt)("em",{parentName:"a"},"Device"))),(0,l.kt)("td",{parentName:"tr",align:null},"This parameter specifies which device type you want to connect to.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'//Connect to a device\nDevice device = new Device("CardReader7", "08:00:69:02:01:FC", "1", ConnectionMethod.BLUETOOTH);\nDevice device = new Device("LocalDevice", "0821032398-PAXA920", "", ConnectionMethod.ANDROID_PAYMENT);\nDevice device = new Device("CloudDevice", "0821032398-PAXA920", "", ConnectionMethod.CLOUD);\napi.connect(device);\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"connectionStatusChanged ")),(0,l.kt)("p",null,"Each time the card reader state changes (ex : going from Connected to Disconnected) the ConnectionStatusChanged event is called. It causes the connection manager to invoke this event with the appropriate information."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")," if the operation was successfully.")))),(0,l.kt)("h2",{id:"get-transactions-report"},"Get Transactions Report"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getTransactionsReport")),(0,l.kt)("p",null,"Fetches your transactions report from a device/devices. If you want to print the report, you can call ",(0,l.kt)("a",{parentName:"p",href:"#print-receipt"},"printReceipt")," with the string returned in ReportResult event as parameter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reportConfiguration")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androidobjects#19"},(0,l.kt)("em",{parentName:"a"},"ReportConfiguration"))),(0,l.kt)("td",{parentName:"tr",align:null},"This parameter specifies the filter to get transactions report.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'//Get the transactions report for device "12345", from 30th April 2021 at 00:00:00, to 30th April 2021 at 23:59:59, in eurs:\nList terminalSerialNumber = new ArrayList<>();\nterminalSerialNumber.add("12345");\nReportConfiguration configuration = new ReportConfiguration("EUR", "20210430000000", "20210430235959", terminalSerialNumber);\napi.getTransactionsReport(configuration);\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"reportResult")),(0,l.kt)("p",null,"The report will be returned to the ReportResult interface which has been registered"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")," if the command was processed successfully. ",(0,l.kt)("inlineCode",{parentName:"td"},"False")," if the sending was not successful.")))),(0,l.kt)("h2",{id:"disconnect"},"Disconnect"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"disconnect")),(0,l.kt)("p",null,"Disconnect will stop the active connection (or reconnection process). Please note that the method ignores the current state of the terminal and just stops the connection. Calling disconnect might result in a commmunication error if triggered during a transaction."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"//Disconnect from current device\napi.Disconnect();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"connectionStatusChanged")),(0,l.kt)("p",null,"Causes the connection manager to invoke this event with the appropriate information."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successful.")))),(0,l.kt)("h2",{id:"get-emv-report"},"Get EMV Report"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getEMVConfiguration")),(0,l.kt)("p",null,"Fetches the logs from the device and reports them to the deviceLogsReady event."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"//Downloads logs from device\napi.getDeviceLogs();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"reportResult")),(0,l.kt)("p",null,"Invoked when hapi has finished downloading the EMV report from the card reader."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to device.")))),(0,l.kt)("h2",{id:"get-paired-devices"},"Get Paired Devices"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getPairedDevices")),(0,l.kt)("p",null,"Returns the payment terminals associated with the specified ConnectionMethod"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"method")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androidobjects#20"},(0,l.kt)("em",{parentName:"a"},"ConnectionMethod "))),(0,l.kt)("td",{parentName:"tr",align:null},"The type of connection with the payment terminal (Bluetooth, Cloud, etc.).")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Get paired terminals\nList<Device> devices = api.getPairedDevices(ConnectionMethod.XXX);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"List<Device>"))),(0,l.kt)("td",{parentName:"tr",align:null},"The list of payment terminals.")))),(0,l.kt)("h2",{id:"get-device-logs"},"Get device logs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDeviceLogs")),(0,l.kt)("p",null,"Fetches the logs from the device and reports them to the deviceLogsReady event."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"//Downloads logs from device\napi.getDeviceLogs();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"deviceLogsReady")),(0,l.kt)("p",null,"Invoked when hapi has finished downloading logs from the card reader."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to device.")))),(0,l.kt)("h2",{id:"get-device-manufacturer"},"Get Device Manufacturer"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDeviceManufacturer")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Manufacturer manufacturer = api.getDeviceManufacturer();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manufacturer"),(0,l.kt)("td",{parentName:"tr",align:null},"The payment terminal manufacturer.")))),(0,l.kt)("h2",{id:"flash-reset"},"Flash Reset"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"deleteDeviceConfig")),(0,l.kt)("p",null,"Sends a command to the terminal to delete its configuration"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"api.deleteDeviceConfig();\n")),(0,l.kt)("h2",{id:"print-receipt"},"Print Receipt"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"printReceipt")),(0,l.kt)("p",null,"Print on demand functionality allowing the merchant to print any HTML formatted receipt. It is possible to print images or barcodes. A bitmap can also be printed, in order to do so it needs to be rendered as an image and inserted into the html."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"receipt")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required")," ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"The receipt must match the following ",(0,l.kt)("a",{parentName:"td",href:"https://handpoint.atlassian.net/wiki/spaces/PD/pages/1409875969/Html+Print+Format"},"HTML Print Format"),". The Transaction Report (also called End of Day Report) can be printed from the string returned in the ",(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androideventlisteners#report-result"},"ReportResult")," event.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example (Prints a receipt with Handpoint logo)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"//Print a receipt with Handpoint logo (bitmap format)\nString validReceipt = \"<html><body><img src='data:image/bmp;base64,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'></body></html>\";\nboolean success = api.printReceipt(validReceipt);\n")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")," if the receipt was sent to the printer, false otherwise.")))),(0,l.kt)("h2",{id:"search-devices"},"Search Devices"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"searchDevices")),(0,l.kt)("p",null,"Starts the search of payment terminals associated with the specified ConnectionMethod"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"method")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"   ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androidobjects#20"},(0,l.kt)("em",{parentName:"a"},"ConnectionMethod"))),(0,l.kt)("td",{parentName:"tr",align:null},"The type of connection with the payment terminal (Bluetooth, Cloud, etc.).")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Starts the search for payment terminals.\n// You must implement Events.DeviceDiscoveryFinished and subscribe\n// to the event delegate in order to receive the result\napi.searchDevices(ConnectionMethod.XXX);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"deviceDiscoveryFinished")),(0,l.kt)("p",null,"Returns a list of payment terminals."),(0,l.kt)("h2",{id:"set-locale"},"Set Locale"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setLocale")),(0,l.kt)("p",null,"Sets the SDK Locale (language). It is used to set the SDK language as well as the associated date and number formatting."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"locale")," ",(0,l.kt)("span",{class:"badge badge--primary"},"Required"),"  ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androidobjects#23"},(0,l.kt)("em",{parentName:"a"},"SupportedLocales"))),(0,l.kt)("td",{parentName:"tr",align:null},"The locale to be set. Supported locales are: SupportedLocales.en_CA, SupportedLocales.en_UK, SupportedLocales.en_US, SupportedLocales.hr_HR, SupportedLocales.is_IS, SupportedLocales.fr_FR, SupportedLocales.pt_PT.")))),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Set canadian english\napi.setLocale(SupportedLocales.en_CA);\n")),(0,l.kt)("h2",{id:"set-log-level"},"Set log level"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setLogLevel")),(0,l.kt)("p",null,"Sets the log level (info, debug...) for both the payment terminal and the SDK."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"level *"),"  ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androidobjects#18"},(0,l.kt)("em",{parentName:"a"},"LogLevel"))),(0,l.kt)("td",{parentName:"tr",align:null},"The desired log level. Can be LogLevel.None, LogLevel.Info, LogLevel.Full, LogLevel.Debug")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"device")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androidobjects#17"},(0,l.kt)("em",{parentName:"a"},"Device"))),(0,l.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the system which device should be used for the operations. If no device is supplied, the system will attempt to use a default one.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"//Sets the log level to info\napi.setLogLevel(LogLevel.info);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("p",null,"No events are invoked."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")," iif the operation was successfully sent to device.")))),(0,l.kt)("h2",{id:"stop-current-transaction"},"Stop current transaction"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stopCurrentTransaction")),(0,l.kt)("p",null,"Stops the current transaction. A transaction can be stopped only if the last ",(0,l.kt)("a",{parentName:"p",href:"/doc/android/Android%20SDK%206.4.1/androideventlisteners#14"},(0,l.kt)("strong",{parentName:"a"},"currentTransactionStatus"))," event reported has the property ",(0,l.kt)("strong",{parentName:"p"},"isCancelAllowed")," set to ",(0,l.kt)("strong",{parentName:"p"},"true"),".\n",(0,l.kt)("strong",{parentName:"p"},"NOTE"),": this operation is ",(0,l.kt)("strong",{parentName:"p"},"Not supported")," on ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Datecs"))," devices."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Stops current transaction\nif (api.stopCurrentTransaction()) {\n    ...\n} else {\n    ...\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/doc/android/Android%20SDK%206.4.1/androideventlisteners#14"},(0,l.kt)("strong",{parentName:"a"},"currentTransactionStatus"))),(0,l.kt)("p",null,"Invoked after stop transaction. Status ",(0,l.kt)("strong",{parentName:"p"},"UserCancelled")," will be reported"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/doc/android/Android%20SDK%206.4.1/androideventlisteners#16"},(0,l.kt)("strong",{parentName:"a"},"endOfTransaction"))),(0,l.kt)("p",null,"Transaction will fail with status ",(0,l.kt)("strong",{parentName:"p"},"CANCELLED")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")," if the transaction was successfully stopped, false otherwise.")))),(0,l.kt)("h2",{id:"update-device"},"Update device"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"update")),(0,l.kt)("p",null,"The update operation checks for new software or configuration updates and initiates a download if required."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"device"),"  ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/doc/android/Android%20SDK%206.4.1/androidobjects#17"},(0,l.kt)("em",{parentName:"a"},"Device"))),(0,l.kt)("td",{parentName:"tr",align:null},"This parameter specifies to the system which device should be used for the operations. If no device is supplied, the system will attempt to use a default one.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Code example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"//Check for card reader update\napi.update();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Events invoked")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"None")),(0,l.kt)("p",null,"The merchant should be notified about the update process."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")," if the operation was successfully sent to device.")))))}c.isMDXComponent=!0}}]);
!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},n=e.parcelRequired7c6;null==n&&((n=function(t){if(t in o)return o[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequired7c6=n),n("iE7OH").register(JSON.parse('{"EVgbq":"index.e2da38b0.js","410VS":"icons.c68b78dc.svg","5UbS1":"index.8ff4e936.css","h1KtE":"myLibrary.889a62f3.js"}'));var a,r,s=n("bpxeT"),l=n("2TvXO"),c={};a=void 0!==e?e:"undefined"!=typeof window?window:c,r=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},m=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,d=function(s,m,d,u){if(!l("body"))return!1;e||p.Notify.init({});var y=c(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof u&&!Array.isArray(u)){var x={};"object"==typeof d?x=d:"object"==typeof u&&(x=u),e=c(!0,e,x)}var g,b,v=e[s.toLocaleLowerCase("en")];f++,"string"!=typeof m&&(m="Notiflix "+s),e.plainText&&(g=m,(b=t.document.createElement("div")).innerHTML=g,m=b.textContent||b.innerText||""),!e.plainText&&m.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),m='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),m.length>e.messageMaxLength&&(m=m.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),e.cssAnimation||(e.cssAnimationDuration=0);var h=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(h.id=r.wrapID,h.style.width=e.width,h.style.zIndex=e.zindex,h.style.opacity=e.opacity,"center-center"===e.position?(h.style.left=e.distance,h.style.top=e.distance,h.style.right=e.distance,h.style.bottom=e.distance,h.style.margin="auto",h.classList.add("nx-flex-center-center"),h.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.justifyContent="center",h.style.alignItems="center",h.style.pointerEvents="none"):"center-top"===e.position?(h.style.left=e.distance,h.style.right=e.distance,h.style.top=e.distance,h.style.bottom="auto",h.style.margin="auto"):"center-bottom"===e.position?(h.style.left=e.distance,h.style.right=e.distance,h.style.bottom=e.distance,h.style.top="auto",h.style.margin="auto"):"right-bottom"===e.position?(h.style.right=e.distance,h.style.bottom=e.distance,h.style.top="auto",h.style.left="auto"):"left-top"===e.position?(h.style.left=e.distance,h.style.top=e.distance,h.style.right="auto",h.style.bottom="auto"):"left-bottom"===e.position?(h.style.left=e.distance,h.style.bottom=e.distance,h.style.top="auto",h.style.right="auto"):(h.style.right=e.distance,h.style.top=e.distance,h.style.left="auto",h.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(r.overlayID)||t.document.createElement("div");w.id=r.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=v.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(h);var k=t.document.createElement("div");k.id=e.ID+"-"+f,k.className=e.className+" "+v.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=v.textColor,k.style.background=v.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof d&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+m+"</span>"+(e.closeButton?N:"");else{var _="";s===o?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=_+'<span class="nx-message nx-with-icon">'+m+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+m+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var C=t.document.getElementById(r.wrapID);C.insertBefore(k,C.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var S=t.document.getElementById(k.id);if(S){var I,L,E=function(){S.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&h.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(I)},T=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),h.childElementCount<=0&&null!==h.parentNode){h.parentNode.removeChild(h);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(L)};if(e.closeButton&&"function"!=typeof d&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){E();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof d||e.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof d&&d(),E();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var z=function(){I=setTimeout((function(){E()}),e.timeout),L=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};z(),e.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(I),clearTimeout(L)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),z()})))}}if(e.showOnlyTheLastOne&&f>0)for(var A=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+f+"])"),W=0;W<A.length;W++){var O=A[W];null!==O.parentNode&&O.parentNode.removeChild(O)}e=c(!0,e,y)},p={Notify:{init:function(o){e=c(!0,r,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(m,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){d(o,t,e,i)},failure:function(t,e,o){d(i,t,e,o)},warning:function(t,e,o){d(n,t,e,o)},info:function(t,e,o){d(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return r(a)})):"object"==typeof c?c=r(a):a.Notiflix=r(a);var m={formSearch:document.querySelector("#js-search-form"),inputSearch:document.querySelector(".search__form-input"),galleryList:document.querySelector(".gallery_main-page"),addWatched:document.querySelector(".add-watched"),addQueue:document.querySelector(".add-queue"),element:document.querySelector(".pagination ul"),button:document.querySelector(".dropbtn"),dropdownContent:document.querySelector(".dropdown-content"),dropdown:document.querySelector(".dropdown"),buttonSearch:document.querySelector(".search__button"),spinner:document.querySelector(".spinner"),iconSearch:document.querySelector(".icon-search"),idgalery:document.querySelector(".gallery_main-page"),gallery:document.querySelector(".modal_movie"),trailer:document.querySelector(".trailer_btn")},f=n("chgrN"),d=n("6XhEX");function p(t,e){t.classList.add("is-hidden"),e.classList.remove("is-hidden")}function u(t,e){t.classList.add("is-hidden"),e.classList.remove("is-hidden")}s=n("bpxeT"),l=n("2TvXO"),d=n("6XhEX");var y=n("4s6iC"),x=(f=n("chgrN"),{params:{api_key:y.KEY,language:"en-US",sort_by:"popularity.desc",include_adult:!1,with_watch_monetization_types:"flatrate",include_video:!1,with_genres:null,page:1,query:null}}),g=new(0,d.default)("discover/movie",x);function b(){return v.apply(this,arguments)}function v(){return(v=t(s)(t(l).mark((function e(){var o,i,n,a,r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getMovies();case 3:o=t.sent,i=o.results,n=o.total_pages,a=o.total_results,g.totalPages=n,g.totalMovies=a,r=(0,f.markupMovieCards)(i,g.genres),m.galleryList.innerHTML=r.join(""),console.log("genreAPI.genres :>> ",g.totalPages),g.totalPages>1?(g.createPagination(m.element),m.element.addEventListener("click",h)):m.element.innerHTML="",t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),t.t0.message;case 18:case"end":return t.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function h(t){if(t.target!==t.currentTarget&&"..."!==t.target.textContent){if(Number(t.target.textContent)&&(g.page=Number(t.target.textContent)),t.target.textContent)switch(t.target.textContent){case" «":g.decrementPage(),console.log(t.target.textContent);break;case"» ":g.incrementPage(),console.log(t.target.textContent)}b(),g.createPagination(m.element)}}function w(){return(w=t(s)(t(l).mark((function e(){var o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getGenres();case 3:genres=t.sent,o=k(genres),m.dropdownContent.innerHTML=o.join(""),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.message;case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(t){return t.map((function(t){return' <li class ="genre-name" data-genreid="'.concat(t.id,'" >').concat(t.name,"</li>")}))}window.addEventListener("click",(function(t){if(!t.target.classList.contains("dropbtn"))return void m.dropdownContent.classList.remove("show");m.element.removeEventListener("click",L),m.dropdownContent.classList.toggle("show"),function(){w.apply(this,arguments)}()})),m.dropdownContent.addEventListener("click",(function(t){var e=t.target.closest(".genre-name");if(console.log(e),!e)return;g.idGenre=e.dataset.genreid,b()}));var N="Please, enter key word for search!",_="Sorry, there are no movies matching your search query. Please try again.",C=new(0,d.default)("trending/movie/week");function S(t){return I.apply(this,arguments)}function I(){return(I=t(s)(t(l).mark((function e(o){var i,n,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.dataMovies();case 3:if(!o.totalMovies){t.next=7;break}o.query&&1===o.page&&c.Notify.success("Hooray! We found ".concat(C.totalMovies," movies")),t.next=8;break;case 7:throw new Error(_);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c.Notify.failure(t.t0.message);case 13:i=o.movies,n=o.genres,a=(0,f.markupMovieCards)(i,n),m.galleryList.innerHTML=a.join(""),o.totalPages>1?(o.createPagination(m.element),m.element.addEventListener("click",L)):m.element.innerHTML="";case 17:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function L(t){if(t.target!==t.currentTarget&&"..."!==t.target.textContent){if(Number(t.target.textContent)&&(C.page=Number(t.target.textContent)),t.target.textContent)switch(t.target.textContent){case" «":C.decrementPage(),console.log(t.target.textContent);break;case"» ":C.incrementPage(),console.log(t.target.textContent)}S(C),C.createPagination(m.element)}}function E(){return(E=t(s)(t(l).mark((function e(o){var i;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o.preventDefault(),i=m.inputSearch.value.trim()){t.next=5;break}return c.Notify.info(N),t.abrupt("return");case 5:return p(m.iconSearch,m.spinner),m.element.removeEventListener("click",h),m.element.removeEventListener("click",L),C.reset(),C.query=i,t.next=12,S(C);case 12:u(m.spinner,m.iconSearch);case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)}S(C),m.formSearch.addEventListener("submit",(function(t){return E.apply(this,arguments)})),n("kvep9");y=n("4s6iC");var T=n("dIxxU"),z=n("dyT35"),A=(z=n("dyT35"),y=n("4s6iC"),"https://www.youtube.com/embed/"),W=z.create('\n  <iframe width="900" height="600" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<button class="close-modal__trailer">     \n     </button>'),O=W.element().querySelector("iframe"),M=z.create('\n    <iframe width="900" height="600" src="'.concat(A,'6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      '));function q(t){var e;(e=t,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(y.KEY,"&language=en-US")).then((function(t){return t.json()}))).then((function(t){var e=t.results[0].key;O.src=A+e,W.show(),document.querySelector(".close-modal__trailer").addEventListener("click",(function(t){W.close(),window.removeEventListener("keydown",closeModalHandler)}))})).catch((function(t){M.show(),console.log(t)}))}var B;B=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("410VS");var D={baseUrl:"https://api.themoviedb.org/3/",fotoUrl:"https://image.tmdb.org/t/p/w500",movie_id:0,language:"en-US",api_key:y.KEY};m.idgalery.addEventListener("click",(function(e){e.preventDefault();var o=e.target.closest(".gallery__item");if(!o&&e.target===document.querySelector("button"))return;var i=o.dataset.movieid;D.movie_id=i,T.default.get("".concat(D.baseUrl,"/movie/").concat(D.movie_id,"?api_key=").concat(D.api_key,"&language=").concat(D.language)).then((function(e){var o=function(e){var o=e.title,i=e.vote_count,n=e.vote_average,a=e.popularity,r=e.original_title,s=e.overview,l=e.genres,c=e.poster_path;return'<div class="modal_description_film">\n      <div class="movie_div_film">\n          <img class="movie_foto_film" src="'.concat(D.fotoUrl).concat(c,'" alt="poster_foto ">\n    <button type="button" name="trailer_btn" class="button_film button_film_rem trailer_btn" data-id ="').concat(D.movie_id,'">\n      <svg class="icon play-treiler" width="50" height="50">\n        <use xlink:href="').concat(t(B),'#play-treiler"></use>\n      </svg>\n    </button>\n      </div>\n      <div class="film_information_film">\n          <h1 class="movie_title_film">').concat(o,'</h1>\n          <ul class="movie_test">\n              <li class="movie_description_film">Vote / Votes\n              <p class="movie_vote_film">').concat(n.toFixed(1),'</p>\n              <p class="movie_votes_film">/ ').concat(i,'</p></li>\n              \n              <li class="movie_description_film">Popularity\n              <p class="movie_value_film movie_popularity_film">').concat(a.toFixed(1),'</p></li>\n              \n              <li class="movie_description_film">Original Title\n              <p class="movie_value_film movie_original_title_film">').concat(r,'</p></li>\n              \n              <li class="movie_description_film">Genre\n              <p class="movie_value_film movie_genre_film">').concat(Object.values(l[0].name).join(""),'</p></li>\n              \n          </ul>\n          <h2 class="movie_about_film">ABOUT</h2>\n          <p class="about_text_film">').concat(s,'</p>\n\n          <form class="js-movie-buttons movie-buttons_film">\n  <label class="movie-buttons__label">\n    <input\n      class="movie-buttons__input"\n      type="radio"\n      name="status"\n      value="isWatched"\n    />\n    <span class="movie-buttons__text button_film">Watched</span>\n  </label>\n\n  <label class="movie-buttons__label">\n    <input\n      class="movie-buttons__input"\n      type="radio"\n      name="status"\n      value="isQueued"\n    />\n    <span class="movie-buttons__text button_film">Queued</span>\n  </label>\n  <button type="button" class="js-remove-button button_film button_film_rem">Remove</button>\n</form>\n      </div>\n    </div>')}(e.data);return m.gallery.innerHTML=o,z.create(document.querySelector(".modal_movie"),{onShow:function(t){document.body.style.overflow="hidden",document.addEventListener("click",(function(t){t.target.closest(".trailer_btn")&&q(document.querySelector(".trailer_btn").dataset.id)}))},onClose:function(t){document.body.style.overflow=""}}).show(),o})).catch(console.log)})),n("i8Q71"),n("9ZZxa"),n("1g6CO");var H=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?j.classList.add("visually-hidden"):j.classList.remove("visually-hidden")}))})),j=document.querySelector(".scroll-btn"),P=document.querySelector(".header");H.observe(P),j.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),n("fFdR4")}();
//# sourceMappingURL=index.e2da38b0.js.map

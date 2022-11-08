var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function i(e){return e&&e.__esModule?e.default:e}var n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o,s,c={};o=void 0!==e?e:"undefined"!=typeof window?window:c,s=function(e){if(void 0===e&&void 0===e.document)return!1;var t,i="Success",n="Failure",r="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},l=function(){var e={},t=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=l(e[n],i[n]):e[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,h=function(s,u,h,p){if(!c("body"))return!1;t||f.Notify.init({});var m=l(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof h?g=h:"object"==typeof p&&(g=p),t=l(!0,t,g)}var v,b,y=t[s.toLocaleLowerCase("en")];d++,"string"!=typeof u&&(u="Notiflix "+s),t.plainText&&(v=u,(b=e.document.createElement("div")).innerHTML=v,u=b.textContent||b.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=l(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(y.fontAwesomeIconColor=y.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(w.id=o.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var I=e.document.getElementById(o.overlayID)||e.document.createElement("div");I.id=o.overlayID,I.style.width="100%",I.style.height="100%",I.style.position="fixed",I.style.zIndex=t.zindex-1,I.style.left=0,I.style.top=0,I.style.right=0,I.style.bottom=0,I.style.background=y.backOverlayColor||t.backOverlayColor,I.className=t.cssAnimation?"nx-with-animation":"",I.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(I)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(w);var _=e.document.createElement("div");_.id=t.ID+"-"+d,_.className=t.className+" "+y.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),_.style.fontSize=t.fontSize,_.style.color=y.textColor,_.style.background=y.background,_.style.borderRadius=t.borderRadius,_.style.pointerEvents="all",t.rtl&&(_.setAttribute("dir","rtl"),_.classList.add("nx-rtl-on")),_.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(_.style.animationDuration=t.cssAnimationDuration+"ms");var k="";if(t.closeButton&&"function"!=typeof h&&(k='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+y.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)_.innerHTML='<i style="color:'+y.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+y.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?k:"");else{var E="";s===i?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===n?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===r?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),_.innerHTML=E+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?k:"")}else _.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?k:"");if("left-bottom"===t.position||"right-bottom"===t.position){var S=e.document.getElementById(o.wrapID);S.insertBefore(_,S.firstChild)}else e.document.getElementById(o.wrapID).appendChild(_);var C=e.document.getElementById(_.id);if(C){var T,A,x=function(){C.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(T)},N=function(){if(C&&null!==C.parentNode&&C.parentNode.removeChild(C),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(A)};if(t.closeButton&&"function"!=typeof h&&e.document.getElementById(_.id).querySelector("span.nx-close-button").addEventListener("click",(function(){x();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof h||t.clickToClose)&&C.addEventListener("click",(function(){"function"==typeof h&&h(),x();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof h){var R=function(){T=setTimeout((function(){x()}),t.timeout),A=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};R(),t.pauseOnHover&&(C.addEventListener("mouseenter",(function(){C.classList.add("nx-paused"),clearTimeout(T),clearTimeout(A)})),C.addEventListener("mouseleave",(function(){C.classList.remove("nx-paused"),R()})))}}if(t.showOnlyTheLastOne&&d>0)for(var P=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+d+"])"),O=0;O<P.length;O++){var L=P[O];null!==L.parentNode&&L.parentNode.removeChild(L)}t=l(!0,t,m)},f={Notify:{init:function(i){t=l(!0,o,i),function(t,i){if(!c("head"))return!1;if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=l(!0,t,e)},success:function(e,t,n){h(i,e,t,n)},failure:function(e,t,i){h(n,e,t,i)},warning:function(e,t,i){h(r,e,t,i)},info:function(e,t,i){h(a,e,t,i)}}};return"object"==typeof e.Notiflix?l(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return s(o)})):"object"==typeof c?c=s(o):o.Notiflix=s(o);var l=a("krGWQ"),u=a("2dqxC"),d=a("85EYF");const h=new(0,d.default)("trending/movie/week");async function f(e){try{if(await e.dataMovies(),!e.totalMovies)throw new Error("Sorry, there are no movies matching your search query. Please try again.");e.query&&1===e.page&&c.Notify.success(`Hooray! We found ${h.totalMovies} movies`)}catch(e){c.Notify.failure(e.message)}const{movies:t,genres:i}=e,n=(0,u.markupMovieCards)(t,i,!0);l.refs.galleryList.innerHTML=n.join(""),e.totalPages>1?(e.createPagination(l.refs.element),l.refs.element.addEventListener("click",p)):l.refs.element.innerHTML=""}function p(e){if(e.target!==e.currentTarget&&"..."!==e.target.textContent){if(Number(e.target.textContent)&&(h.page=Number(e.target.textContent)),e.target.textContent)switch(e.target.textContent){case" «":h.decrementPage(),console.log(e.target.textContent);break;case"» ":h.incrementPage(),console.log(e.target.textContent)}f(h),h.createPagination(l.refs.element)}}f(h),l.refs.formSearch.addEventListener("submit",(async function(e){e.preventDefault();const t=l.refs.inputSearch.value.trim();if(!t)return void c.Notify.info("Please, enter key word for search!");r=l.refs.iconSearch,a=l.refs.spinner,r.classList.add("is-hidden"),a.classList.remove("is-hidden"),l.refs.element.removeEventListener("click",p),h.reset(),h.query=t,await f(h),i=l.refs.spinner,n=l.refs.iconSearch,i.classList.add("is-hidden"),n.classList.remove("is-hidden");var i,n;var r,a})),a("aSWUZ");var m=a("8G1wF"),g=a("2shzp"),v={};v=function e(t,i,n){function r(o,s){if(!i[o]){if(!t[o]){var c=void 0;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var u=i[o]={exports:{}};t[o][0].call(u.exports,(function(e){return r(t[o][1][e]||e)}),u,u.exports,e,t,i,n)}return i[o].exports}for(var a=void 0,o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.createElement("div");return i.innerHTML=e.trim(),!0===t?i.children:i.firstChild},r=function(e,t){var i=e.children;return 1===i.length&&i[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};i.visible=a,i.create=function(e,t){var i=function(e,t){var i=n('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=i.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var o=r(a,"IMG"),s=r(a,"VIDEO"),c=r(a,"IFRAME");return!0===o&&i.classList.add("basicLightbox--img"),!0===s&&i.classList.add("basicLightbox--video"),!0===c&&i.classList.add("basicLightbox--iframe"),i}(e=function(e){var t="string"==typeof e,i=e instanceof HTMLElement==1;if(!1===t&&!1===i)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(n(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(i,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&i.addEventListener("click",(function(e){e.target===i&&o()}));var s={element:function(){return i},visible:function(){return a(i)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(i,(function(){if("function"==typeof e)return e(s)}))},close:o};return s}},{}]},{},[1])(1);({idgalery:document.querySelector(".gallery_main-page")}).idgalery.addEventListener("click",(function(e){const t=e.target.closest(".gallery__item");if(!t)return;!async function(e){const t={baseUrl:"https://api.themoviedb.org/3/",fotoUrl:"https://image.tmdb.org/t/p/w500",movie_id:e,language:"en-US",api_key:m.KEY};await g.default.get(`${t.baseUrl}/movie/${t.movie_id}?api_key=${t.api_key}&language=${t.language}`).then((e=>{const i=e.data,{title:n,vote_count:r,vote_average:a,popularity:o,original_title:s,overview:c,genres:l,poster_path:u}=i,d=`<div class="modal_description">\n      <div class="movie_div">\n          <img class="movie_foto" src="${t.fotoUrl}${u}" alt="poster_foto ">\n      </div>\n      <div class="film_information">\n          <h1 class="movie_title">${n}</h1>\n          <ul>\n              <li class="movie_description">Vote / Votes<span class="movie_vote"> ${a} </span>\n              <span class="movie_votes"> /  ${r}</span></li>\n              <li class="movie_description">Popularity<span class="movie_value">: ${o}</span></li>\n              <li class="movie_description">Original Title<span class="movie_value">: ${s}</span></li>\n              <li class="movie_description">Genre<span class="movie_value">: ${Object.values(l[0].name).join("")}</span></li>\n          </ul>\n          <h2 class="movie_about">ABOUT</h2>\n          <p class="about_text">${c}</p>\n\n          <form class="js-movie-buttons movie-buttons">\n  <label class="movie-buttons__label">\n    <input\n      class="movie-buttons__input"\n      type="radio"\n      name="status"\n      value="isWatched"\n    />\n    <span class="movie-buttons__text button">Watched</span>\n  </label>\n\n  <label class="movie-buttons__label">\n    <input\n      class="movie-buttons__input"\n      type="radio"\n      name="status"\n      value="isQueued"\n    />\n    <span class="movie-buttons__text button">Queued</span>\n  </label>\n  <button type="button" class="js-remove-button button">Remove</button>\n  <button type="button" name="trailer_btn" class="button trailer_btn">TRAILER</button>\n</form>\n      </div>\n    </div>`;document.querySelector(".modal_movie").insertAdjacentHTML("beforeend",d);return v.create(document.querySelector(".modal_movie")).show(),d})).catch((e=>{console.log(e)}))}(t.dataset.movieid)})),a("bUb57"),a("it0VB");var b=a("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):55296==(64512&r)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t},w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const r=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;s||(h=64,a||(d=64)),n.push(i[l],i[u],i[d],i[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(y(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&a)}else if(r>239&&r<365){const a=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{const a=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const r=i[e.charAt(t++)],a=t<e.length?i[e.charAt(t)]:0;++t;const o=t<e.length?i[e.charAt(t)]:64;++t;const s=t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==a||null==o||null==s)throw Error();const c=r<<2|a>>4;if(n.push(c),64!==o){const e=a<<4&240|o>>2;if(n.push(e),64!==s){const e=o<<6&192|s;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},I=function(e){return function(e){const t=y(e);return w.encodeByteArray(t,!0)}(e).replace(/\./g,"")},_=function(e){try{return w.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const i in t)t.hasOwnProperty(i)&&"__proto__"!==i&&(e[i]=k(e[i],t[i]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function S(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function C(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function A(){const e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return"object"==typeof indexedDB}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,R=()=>{try{return N()||(()=>{if(void 0===b||void 0===b.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&_(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},P=e=>{var t,i;return null===(i=null===(t=R())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},O=e=>{var t;return null===(t=R())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],a=r?function(e,t){return e.replace(U,((e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",o=`${this.serviceName}: ${a} (${n}).`;return new D(n,o,i)}constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}}const U=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function j(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function B(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const r of i){if(!n.includes(r))return!1;const i=e[r],a=t[r];if(H(i)&&H(a)){if(!B(i,a))return!1}else if(i!==a)return!1}for(const e of n)if(!i.includes(e))return!1;return!0}function H(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function W(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}})),t}function z(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){const i=new K(e,t);return i.subscribe.bind(i)}class K{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===n.next&&(n.next=q),void 0===n.error&&(n.error=q),void 0===n.complete&&(n.complete=q);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}var J={};t(J,"_DEFAULT_ENTRY_NAME",(function(){return Te})),t(J,"_apps",(function(){return xe})),t(J,"_components",(function(){return Ne})),t(J,"_addComponent",(function(){return Re})),t(J,"_addOrOverwriteComponent",(function(){return Pe})),t(J,"_registerComponent",(function(){return Oe})),t(J,"_getProvider",(function(){return Le})),t(J,"_removeServiceInstance",(function(){return De})),t(J,"_clearComponents",(function(){return Me})),t(J,"SDK_VERSION",(function(){return je})),t(J,"initializeApp",(function(){return Be})),t(J,"getApp",(function(){return He})),t(J,"getApps",(function(){return Ve})),t(J,"deleteApp",(function(){return We})),t(J,"registerVersion",(function(){return ze})),t(J,"onLog",(function(){return Ge})),t(J,"setLogLevel",(function(){return Ke})),t(J,"FirebaseError",(function(){return D}));class Y{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new L;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[e,t]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,"[DEFAULT]"===n?void 0:n),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}var n;return i||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Z{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new X(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=[];var ee,te;(te=ee||(ee={}))[te.DEBUG=0]="DEBUG",te[te.VERBOSE=1]="VERBOSE",te[te.INFO=2]="INFO",te[te.WARN=3]="WARN",te[te.ERROR=4]="ERROR",te[te.SILENT=5]="SILENT";const ie={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},ne=ee.INFO,re={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},ae=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=re[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...i)};class oe{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ie[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ne,this._logHandler=ae,this._userLogHandler=null,Q.push(this)}}function se(e,t){for(const i of Q){let n=null;t&&t.level&&(n=ie[t.level]),i.userLogHandler=null===e?null:(t,i,...r)=>{const a=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");i>=(null!=n?n:t.logLevel)&&e({level:ee[i].toLowerCase(),message:a,args:r,type:t.name})}}}let ce,le;const ue=new WeakMap,de=new WeakMap,he=new WeakMap,fe=new WeakMap,pe=new WeakMap;let me={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return de.get(e);if("objectStoreNames"===t)return e.objectStoreNames||he.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return be(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ge(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(le||(le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ye(this),t),be(ue.get(this))}:function(...t){return be(e.apply(ye(this),t))}:function(t,...i){const n=e.call(ye(this),t,...i);return he.set(n,t.sort?t.sort():[t]),be(n)}}function ve(e){return"function"==typeof e?ge(e):(e instanceof IDBTransaction&&function(e){if(de.has(e))return;const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{t(),n()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)}));de.set(e,t)}(e),t=e,(ce||(ce=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,me):e);var t}function be(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{t(be(e.result)),n()},a=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ue.set(t,e)})).catch((()=>{})),pe.set(t,e),t}(e);if(fe.has(e))return fe.get(e);const t=ve(e);return t!==e&&(fe.set(e,t),pe.set(t,e)),t}const ye=e=>pe.get(e);function we(e,t,{blocked:i,upgrade:n,blocking:r,terminated:a}={}){const o=indexedDB.open(e,t),s=be(o);return n&&o.addEventListener("upgradeneeded",(e=>{n(be(o.result),e.oldVersion,e.newVersion,be(o.transaction))})),i&&o.addEventListener("blocked",(()=>i())),s.then((e=>{a&&e.addEventListener("close",(()=>a())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}const Ie=["get","getKey","getAll","getAllKeys","count"],_e=["put","add","delete","clear"],ke=new Map;function Ee(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ke.get(t))return ke.get(t);const i=t.replace(/FromIndex$/,""),n=t!==i,r=_e.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!Ie.includes(i))return;const a=async function(e,...t){const a=this.transaction(e,r?"readwrite":"readonly");let o=a.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&a.done]))[0]};return ke.set(t,a),a}me=(e=>({...e,get:(t,i,n)=>Ee(t,i)||e.get(t,i,n),has:(t,i)=>!!Ee(t,i)||e.has(t,i)}))(me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ce=new oe("@firebase/app"),Te="[DEFAULT]",Ae={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},xe=new Map,Ne=new Map;function Re(e,t){try{e.container.addComponent(t)}catch(i){Ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function Pe(e,t){e.container.addOrOverwriteComponent(t)}function Oe(e){const t=e.name;if(Ne.has(t))return Ce.debug(`There were multiple attempts to register component ${t}.`),!1;Ne.set(t,e);for(const t of xe.values())Re(t,e);return!0}function Le(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}function De(e,t,i=Te){Le(e,t).clearInstance(i)}function Me(){Ne.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new M("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Y("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="9.13.0";function Be(e,t={}){let i=e;if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Te,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Ue.create("bad-app-name",{appName:String(r)});var a;if(i||(i=null===(a=R())||void 0===a?void 0:a.config),!i)throw Ue.create("no-options");const o=xe.get(r);if(o){if(B(i,o.options)&&B(n,o.config))return o;throw Ue.create("duplicate-app",{appName:r})}const s=new Z(r);for(const e of Ne.values())s.addComponent(e);const c=new Fe(i,n,s);return xe.set(r,c),c}function He(e=Te){const t=xe.get(e);if(!t&&e===Te)return Be();if(!t)throw Ue.create("no-app",{appName:e});return t}function Ve(){return Array.from(xe.values())}async function We(e){const t=e.name;xe.has(t)&&(xe.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ze(e,t,i){var n;let r=null!==(n=Ae[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);const a=r.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ce.warn(e.join(" "))}Oe(new Y(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}function Ge(e,t){if(null!==e&&"function"!=typeof e)throw Ue.create("invalid-log-argument");se(e,t)}function Ke(e){var t;t=e,Q.forEach((e=>{e.setLogLevel(t)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=null;function $e(){return qe||(qe=we("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Ue.create("idb-open",{originalErrorMessage:e.message})}))),qe}async function Je(e,t){var i;try{const i=(await $e()).transaction("firebase-heartbeat-store","readwrite"),n=i.objectStore("firebase-heartbeat-store");return await n.put(t,Ye(e)),i.done}catch(e){if(e instanceof D)Ce.warn(e.message);else{const t=Ue.create("idb-set",{originalErrorMessage:null===(i=e)||void 0===i?void 0:i.message});Ce.warn(t.message)}}}function Ye(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ze();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ze(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){const i=[];let n=e.slice();for(const r of e){const e=i.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),et(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),et(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=I(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Ze(){return(new Date).toISOString().substring(0,10)}class Qe{async runIndexedDBEnvironmentCheck(){return!!x()&&new Promise(((e,t)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await $e()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ye(e))}catch(e){if(e instanceof D)Ce.warn(e.message);else{const i=Ue.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Ce.warn(i.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function et(e){return I(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;tt="",Oe(new Y("platform-logger",(e=>new Se(e)),"PRIVATE")),Oe(new Y("heartbeat",(e=>new Xe(e)),"PRIVATE")),ze("@firebase/app","0.8.3",tt),ze("@firebase/app","0.8.3","esm2017"),ze("fire-js","");function it(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}Object.create;Object.create;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nt="facebook.com",rt="github.com",at="google.com",ot="password",st="twitter.com",ct="EMAIL_SIGNIN",lt="PASSWORD_RESET",ut="RECOVER_EMAIL",dt="REVERT_SECOND_FACTOR_ADDITION",ht="VERIFY_AND_CHANGE_EMAIL",ft="VERIFY_EMAIL";function pt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},gt=pt,vt=new M("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),bt=new oe("@firebase/auth");function yt(e,...t){bt.logLevel<=ee.ERROR&&bt.error(`Auth (${je}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,...t){throw Et(e,...t)}function It(e,...t){return Et(e,...t)}function _t(e,t,i){const n=Object.assign(Object.assign({},gt()),{[t]:i});return new M("auth","Firebase",n).create(t,{appName:e.name})}function kt(e,t,i){if(!(t instanceof i))throw i.name!==t.constructor.name&&wt(e,"argument-error"),_t(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Et(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return vt.create(e,...t)}function St(e,t,...i){if(!e)throw Et(t,...i)}function Ct(e){const t="INTERNAL ASSERTION FAILED: "+e;throw yt(t),new Error(t)}function Tt(e,t){e||Ct(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Map;function xt(e){Tt(e instanceof Function,"Expected a class definition");let t=At.get(e);return t?(Tt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,At.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Rt(){return"http:"===Pt()||"https:"===Pt()}function Pt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Rt()||C()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())||T()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e,t){Tt(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ut=new Ot(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jt(e,t,i,n,r={}){return Bt(e,r,(async()=>{let r={},a={};n&&("GET"===t?a=n:r={body:JSON.stringify(n)});const o=V(Object.assign({key:e.config.apiKey},a)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),Dt.fetch()(Vt(e,e.config.apiHost,i,o),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},r))}))}async function Bt(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},Mt),t);try{const t=new Wt(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw zt(e,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const t=r.ok?a.errorMessage:a.error.message,[i,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw zt(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===i)throw zt(e,"email-already-in-use",a);if("USER_DISABLED"===i)throw zt(e,"user-disabled",a);const s=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _t(e,s,o);wt(e,s)}}catch(t){if(t instanceof D)throw t;wt(e,"network-request-failed")}}async function Ht(e,t,i,n,r={}){const a=await jt(e,t,i,n,r);return"mfaPendingCredential"in a&&wt(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Vt(e,t,i,n){const r=`${t}${i}?${n}`;return e.config.emulator?Lt(e.config,r):`${e.config.apiScheme}://${r}`}class Wt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(It(this.auth,"network-request-failed"))),Ut.get())}))}}function zt(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=It(e,t,n);return r.customData._tokenResponse=i,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e){return 1e3*Number(e)}function qt(e){var t;const[i,n,r]=e.split(".");if(void 0===i||void 0===n||void 0===r)return yt("JWT malformed, contained fewer than 3 sections"),null;try{const e=_(n);return e?JSON.parse(e):(yt("Failed to decode base64 JWT payload"),null)}catch(e){return yt("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $t(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof D&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Jt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{_initializeTime(){this.lastSignInTime=Gt(this.lastLoginAt),this.creationTime=Gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e){var t;const i=e.auth,n=await e.getIdToken(),r=await $t(e,async function(e,t){return jt(e,"POST","/v1/accounts:lookup",t)}(i,{idToken:n}));St(null==r?void 0:r.users.length,i,"internal-error");const a=r.users[0];e._notifyReloadListener(a);const o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,i=it(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const s=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,d=!(e.email&&a.passwordHash||(null==s?void 0:s.length)),h=!!u&&d,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Yt(a.createdAt,a.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){St(e.idToken,"internal-error"),St(void 0!==e.idToken,"internal-error"),St(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=qt(e);return St(t,"internal-error"),St(void 0!==t.exp,"internal-error"),St(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return St(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const i=await Bt(e,{},(async()=>{const i=V({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,a=Vt(e,n,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Dt.fetch()(a,{method:"POST",headers:o,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:r}=t,a=new Zt;return i&&(St("string"==typeof i,"internal-error",{appName:e}),a.refreshToken=i),n&&(St("string"==typeof n,"internal-error",{appName:e}),a.accessToken=n),r&&(St("number"==typeof r,"internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zt,this.toJSON())}_performRefresh(){return Ct("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){St("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ei{async getIdToken(e){const t=await $t(this,this.stsTokenManager.getToken(this.auth,e));return St(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=$(e),n=await i.getIdToken(t),r=qt(n);St(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const a="object"==typeof r.firebase?r.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:r,token:n,authTime:Gt(Kt(r.auth_time)),issuedAtTime:Gt(Kt(r.iat)),expirationTime:Gt(Kt(r.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=$(e);await Xt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(St(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){St(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Xt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $t(this,async function(e,t){return jt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,a,o,s,c,l;const u=null!==(i=t.displayName)&&void 0!==i?i:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:I,stsTokenManager:_}=t;St(b&&_,e,"internal-error");const k=Zt.fromJSON(this.name,_);St("string"==typeof b,e,"internal-error"),Qt(u,e.name),Qt(d,e.name),St("boolean"==typeof y,e,"internal-error"),St("boolean"==typeof w,e,"internal-error"),Qt(h,e.name),Qt(f,e.name),Qt(p,e.name),Qt(m,e.name),Qt(g,e.name),Qt(v,e.name);const E=new ei({uid:b,auth:e,email:d,emailVerified:y,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return I&&Array.isArray(I)&&(E.providerData=I.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,i=!1){const n=new Zt;n.updateFromServerResponse(t);const r=new ei({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await Xt(r),r}constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=it(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yt(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}ti.type="NONE";const ii=ti;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e,t,i){return`firebase:${e}:${t}:${i}`}class ri{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ri(xt(ii),e,i);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=n[0]||xt(ii);const a=ni(i,e.config.apiKey,e.name);let o=null;for(const i of t)try{const t=await i._get(a);if(t){const n=ei._fromJSON(e,t);i!==r&&(o=n),r=i;break}}catch(e){}const s=n.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&s.length?(r=s[0],o&&await r._set(a,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(a)}catch(e){}}))),new ri(r,e,i)):new ri(r,e,i)}constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=ni(this.userKey,n.apiKey,r),this.fullPersistenceKey=ni("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(li(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(oi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(di(t))return"Blackberry";if(hi(t))return"Webos";if(si(t))return"Safari";if((t.includes("chrome/")||ci(t))&&!t.includes("edge/"))return"Chrome";if(ui(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function oi(e=E()){return/firefox\//i.test(e)}function si(e=E()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ci(e=E()){return/crios\//i.test(e)}function li(e=E()){return/iemobile/i.test(e)}function ui(e=E()){return/android/i.test(e)}function di(e=E()){return/blackberry/i.test(e)}function hi(e=E()){return/webos/i.test(e)}function fi(e=E()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function pi(e=E()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function mi(e=E()){return fi(e)||ui(e)||hi(e)||di(e)||/windows phone/i.test(e)||li(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gi(e,t=[]){let i;switch(e){case"Browser":i=ai(E());break;case"Worker":i=`${ai(E())}-${e}`;break;default:i=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${je}/${n}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{pushCallback(e,t){const i=t=>new Promise(((i,n)=>{try{i(e(t))}catch(e){n(e)}}));i.onAbort=t,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const i=[];try{for(const t of this.queue)await t(e),t.onAbort&&i.push(t.onAbort)}catch(e){i.reverse();for(const e of i)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);i&&i!==a||!(null==o?void 0:o.user)||(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return St(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Xt(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?$(e):null;return t&&St(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&St(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(xt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new M("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;St(t,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return St(a,this,"internal-error"),a.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return St(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wi(this),this.idTokenSubscription=new wi(this),this.beforeStateQueue=new vi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function yi(e){return $(e)}class wi{get next(){return St(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=G((e=>this.observer=e))}}function Ii(e,t,i){const n=yi(e);St(n._canInitEmulator,n,"emulator-config-failed"),St(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=!!(null==i?void 0:i.disableWarnings),a=_i(t),{host:o,port:s}=function(e){const t=_i(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const e=r[1];return{host:e,port:ki(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:ki(t)}}}(t),c=null===s?"":`:${s}`;n.config.emulator={url:`${a}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function _i(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ki(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ei{toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,t){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(e,t){return jt(e,"POST","/v1/accounts:resetPassword",Ft(e,t))}async function Ci(e,t){return jt(e,"POST","/v1/accounts:update",t)}async function Ti(e,t){return jt(e,"POST","/v1/accounts:sendOobCode",Ft(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai extends Ei{static _fromEmailAndPassword(e,t){return new Ai(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ai(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithPassword",Ft(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithEmailLink",Ft(e,t))}(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ci(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithEmailLink",Ft(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(e,t){return Ht(e,"POST","/v1/accounts:signInWithIdp",Ft(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ei{static _fromParams(e){const t=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=it(t,["providerId","signInMethod"]);if(!i||!n)return null;const a=new Ni(i,n);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){return xi(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,xi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xi(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=V(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi extends Ei{static _fromVerification(e,t){return new Pi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Pi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithPhoneNumber",Ft(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const i=await Ht(e,"POST","/v1/accounts:signInWithPhoneNumber",Ft(e,t));if(i.temporaryProof)throw zt(e,"account-exists-with-different-credential",i);return i}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithPhoneNumber",Ft(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ri)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new Pi({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{static parseLink(e){const t=function(e){const t=W(z(e)).link,i=t?W(z(t)).deep_link_id:null,n=W(z(e)).deep_link_id;return(n?W(z(n)).link:null)||n||i||t||e}(e);try{return new Oi(t)}catch(e){return null}}constructor(e){var t,i,n,r,a,o;const s=W(z(e)),c=null!==(t=s.apiKey)&&void 0!==t?t:null,l=null!==(i=s.oobCode)&&void 0!==i?i:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=s.mode)&&void 0!==n?n:null);St(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=s.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(a=s.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=s.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{static credential(e,t){return Ai._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Oi.parseLink(t);return St(i,"argument-error"),Ai._fromEmailAndCode(e,i.code,i.tenantId)}constructor(){this.providerId=Li.PROVIDER_ID}}Li.PROVIDER_ID="password",Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Di{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class Ui extends Mi{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return St("providerId"in t&&"signInMethod"in t,"argument-error"),Ni._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return St(e.idToken||e.accessToken,"argument-error"),Ni._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ui.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ui.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:n,pendingToken:r,nonce:a,providerId:o}=e;if(!(i||n||t||r))return null;if(!o)return null;try{return new Ui(o)._credential({idToken:t,accessToken:i,nonce:a,pendingToken:r})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Mi{static credential(e){return Ni._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fi.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Fi.FACEBOOK_SIGN_IN_METHOD="facebook.com",Fi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji extends Mi{static credential(e,t){return Ni._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ji.credential(t,i)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}ji.GOOGLE_SIGN_IN_METHOD="google.com",ji.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi extends Mi{static credential(e){return Ni._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Bi.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Bi.GITHUB_SIGN_IN_METHOD="github.com",Bi.PROVIDER_ID="github.com";class Hi extends Ei{_getIdTokenResponse(e){return xi(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,xi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n,pendingToken:r}=t;return i&&n&&r&&i===n?new Hi(i,r):null}static _create(e,t){return new Hi(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}constructor(e,t){super(e,e),this.pendingToken=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Di{static credentialFromResult(e){return Vi.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Vi.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Hi.fromJSON(e);return St(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Hi._create(i,t)}catch(e){return null}}constructor(e){St(e.startsWith("saml."),"argument-error"),super(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Mi{static credential(e,t){return Ni._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Wi.credential(t,i)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zi(e,t){return Ht(e,"POST","/v1/accounts:signUp",Ft(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wi.TWITTER_SIGN_IN_METHOD="twitter.com",Wi.PROVIDER_ID="twitter.com";class Gi{static async _fromIdTokenResponse(e,t,i,n=!1){const r=await ei._fromIdTokenResponse(e,i,n),a=Ki(i);return new Gi({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=Ki(i);return new Gi({user:e,providerId:n,_tokenResponse:i,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Ki(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi extends D{static _fromErrorAndOperation(e,t,i,n){return new qi(e,t,i,n)}constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}}function $i(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw qi._fromErrorAndOperation(e,i,t,n);throw i}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(e,t){const i=$(e);await Zi(!0,i,t);const{providerUserInfo:n}=await async function(e,t){return jt(e,"POST","/v1/accounts:update",t)}(i.auth,{idToken:await i.getIdToken(),deleteProvider:[t]}),r=Ji(n||[]);return i.providerData=i.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(i.phoneNumber=null),await i.auth._persistUserIfCurrent(i),i}async function Xi(e,t,i=!1){const n=await $t(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return Gi._forOperation(e,"link",n)}async function Zi(e,t,i){await Xt(t);const n=!1===e?"provider-already-linked":"no-such-provider";St(Ji(t.providerData).has(i)===e,t.auth,n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(e,t,i=!1){var n;const{auth:r}=e,a="reauthenticate";try{const n=await $t(e,$i(r,a,t,e),i);St(n.idToken,r,"internal-error");const o=qt(n.idToken);St(o,r,"internal-error");const{sub:s}=o;return St(e.uid===s,r,"user-mismatch"),Gi._forOperation(e,a,n)}catch(e){throw"auth/user-not-found"===(null===(n=e)||void 0===n?void 0:n.code)&&wt(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t,i=!1){const n="signIn",r=await $i(e,n,t),a=await Gi._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(a.user),a}async function tn(e,t){return en(yi(e),t)}async function nn(e,t){const i=$(e);return await Zi(!1,i,t.providerId),Xi(i,t)}async function rn(e,t){return Qi($(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function an(e,t){const i=yi(e),n=await async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithCustomToken",Ft(e,t))}(i,{token:t,returnSecureToken:!0}),r=await Gi._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{static _fromServerResponse(e,t){return"phoneInfo"in t?sn._fromServerResponse(e,t):wt(e,"internal-error")}constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}}class sn extends on{static _fromServerResponse(e,t){return new sn(t)}constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t,i){var n;St((null===(n=i.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),St(void 0===i.dynamicLinkDomain||i.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=i.url,t.dynamicLinkDomain=i.dynamicLinkDomain,t.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(St(i.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=i.iOS.bundleId),i.android&&(St(i.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=i.android.installApp,t.androidMinimumVersionCode=i.android.minimumVersion,t.androidPackageName=i.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(e,t,i){const n=$(e),r={requestType:"PASSWORD_RESET",email:t};i&&cn(n,r,i),await async function(e,t){return Ti(e,t)}(n,r)}async function un(e,t){await async function(e,t){return jt(e,"POST","/v1/accounts:update",Ft(e,t))}($(e),{oobCode:t})}async function dn(e,t){const i=$(e),n=await Si(i,{oobCode:t}),r=n.requestType;switch(St(r,i,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":St(n.newEmail,i,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":St(n.mfaInfo,i,"internal-error");default:St(n.email,i,"internal-error")}let a=null;return n.mfaInfo&&(a=on._fromServerResponse(yi(i),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:a},operation:r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function hn(e,t,i){const n=$(e),r={requestType:"EMAIL_SIGNIN",email:t};St(i.handleCodeInApp,n,"argument-error"),i&&cn(n,r,i),await async function(e,t){return Ti(e,t)}(n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fn(e,t){const i={identifier:t,continueUri:Rt()?Nt():"http://localhost"},{signinMethods:n}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return jt(e,"POST","/v1/accounts:createAuthUri",Ft(e,t))}($(e),i);return n||[]}async function pn(e,t){const i=$(e),n={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&cn(i.auth,n,t);const{email:r}=await async function(e,t){return Ti(e,t)}(i.auth,n);r!==e.email&&await e.reload()}async function mn(e,t,i){const n=$(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};i&&cn(n.auth,r,i);const{email:a}=await async function(e,t){return Ti(e,t)}(n.auth,r);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gn(e,{displayName:t,photoURL:i}){if(void 0===t&&void 0===i)return;const n=$(e),r={idToken:await n.getIdToken(),displayName:t,photoUrl:i,returnSecureToken:!0},a=await $t(n,async function(e,t){return jt(e,"POST","/v1/accounts:update",t)}(n.auth,r));n.displayName=a.displayName||null,n.photoURL=a.photoUrl||null;const o=n.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=n.displayName,o.photoURL=n.photoURL),await n._updateTokensIfNecessary(a)}async function vn(e,t,i){const{auth:n}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),i&&(r.password=i);const a=await $t(e,Ci(n,r));await e._updateTokensIfNecessary(a,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class yn extends bn{constructor(e,t,i,n){super(e,t,i),this.username=n}}class wn extends bn{constructor(e,t){super(e,"facebook.com",t)}}class In extends yn{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class _n extends bn{constructor(e,t){super(e,"google.com",t)}}class kn extends yn{constructor(e,t,i){super(e,"twitter.com",t,i)}}function En(e){const{user:t,_tokenResponse:i}=e;return t.isAnonymous&&!i?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,i;if(!e)return null;const{providerId:n}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},a=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){const n=null===(i=null===(t=qt(e.idToken))||void 0===t?void 0:t.firebase)||void 0===i?void 0:i.sign_in_provider;if(n)return new bn(a,"anonymous"!==n&&"custom"!==n?n:null)}if(!n)return null;switch(n){case"facebook.com":return new wn(a,r);case"github.com":return new In(a,r);case"google.com":return new _n(a,r);case"twitter.com":return new kn(a,r,e.screenName||null);case"custom":case"anonymous":return new bn(a,null);default:return new bn(a,n,r)}}(i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{static _fromIdtoken(e,t){return new Sn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Sn("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Sn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(i=e.multiFactorSession)||void 0===i?void 0:i.idToken)return Sn._fromIdtoken(e.multiFactorSession.idToken)}return null}constructor(e,t,i){this.type=e,this.credential=t,this.auth=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{static _fromError(e,t){const i=yi(e),n=t.customData._serverResponse,r=(n.mfaInfo||[]).map((e=>on._fromServerResponse(i,e)));St(n.mfaPendingCredential,i,"internal-error");const a=Sn._fromMfaPendingCredential(n.mfaPendingCredential);return new Cn(a,r,(async e=>{const r=await e._process(i,a);delete n.mfaInfo,delete n.mfaPendingCredential;const o=Object.assign(Object.assign({},n),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Gi._fromIdTokenResponse(i,t.operationType,o);return await i._updateCurrentUser(e.user),e;case"reauthenticate":return St(t.user,i,"internal-error"),Gi._forOperation(t.user,t.operationType,o);default:wt(i,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}}class Tn{static _fromUser(e){return new Tn(e)}async getSession(){return Sn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const i=e,n=await this.getSession(),r=await $t(this.user,i._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var t;const i="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),r=await $t(this.user,(a=this.user.auth,o={idToken:n,mfaEnrollmentId:i},jt(a,"POST","/v2/accounts/mfaEnrollment:withdraw",Ft(a,o))));var a,o;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==i)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null===(t=e)||void 0===t?void 0:t.code))throw e}}constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>on._fromServerResponse(e.auth,t))))}))}}const An=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends xn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);A()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=E();return si(e)||fi(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=mi(),this._shouldAllowMigration=!0}}Nn.type="LOCAL";const Rn=Nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends xn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Pn.type="SESSION";const On=Pn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new Ln(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:r}=t.data,a=this.handlersMap[n];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const o=Array.from(a).map((async e=>e(t.origin,r))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dn(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.receivers=[];class Mn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,a;return new Promise(((o,s)=>{const c=Dn("",20);n.port1.start();const l=setTimeout((()=>{s(new Error("unsupported_event"))}),i);a={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),s(new Error("invalid_response"))}}},this.handlers.add(a),n.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(){return void 0!==Un().WorkerGlobalScope&&"function"==typeof Un().importScripts}class jn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Bn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Hn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){i(e)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains("firebaseLocalStorage")?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new jn(e).toPromise()}(),t(await Hn()))}))}))}async function Vn(e,t,i){const n=Bn(e,!0).put({fbase_key:t,value:i});return new jn(n).toPromise()}function Wn(e,t){const i=Bn(e,!0).delete(t);return new jn(i).toPromise()}class zn{async _openDb(){return this.db||(this.db=await Hn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance(Fn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Mn(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hn();return await Vn(e,"__sak","1"),await Wn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>Vn(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const i=Bn(e,!1).get(t),n=await new jn(i).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Wn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Bn(e,!1).getAll();return new jn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;for(const{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}zn.type="LOCAL";const Gn=zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){return new Promise(((t,i)=>{const n=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,a;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=It("internal-error");t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(a=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==a?a:document).appendChild(n)}))}function qn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{render(e,t){const i=this.counter;return this._widgets.set(i,new Jn(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||1e12;null===(t=this._widgets.get(i))||void 0===t||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||1e12;return(null===(t=this._widgets.get(i))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const i=e||1e12;return null===(t=this._widgets.get(i))||void 0===t||t.execute(),""}constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}}class Jn{getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<e;n++)t.push(i.charAt(Math.floor(Math.random()*i.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"==typeof e?document.getElementById(e):e;St(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}}const Yn=qn("rcb"),Xn=new Ot(3e4,6e4);class Zn{load(e,t=""){return St(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Un().grecaptcha):new Promise(((i,n)=>{const r=Un().setTimeout((()=>{n(It(e,"network-request-failed"))}),Xn.get());Un()[Yn]=()=>{Un().clearTimeout(r),delete Un()[Yn];const a=Un().grecaptcha;if(!a)return void n(It(e,"internal-error"));const o=a.render;a.render=(e,t)=>{const i=o(e,t);return this.counter++,i},this.hostLanguage=t,i(a)};Kn(`https://www.google.com/recaptcha/api.js??${V({onload:Yn,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(r),n(It(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Un().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Un().grecaptcha)||void 0===e?void 0:e.render)}}class Qn{async load(e){return new $n(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={theme:"light",type:"image"};class tr{async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise((i=>{const n=e=>{e&&(this.tokenChangeListeners.delete(n),i(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){St(!this.parameters.sitekey,this.auth,"argument-error"),St(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),St("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const i=Un()[e];"function"==typeof i&&i(t)}}}assertNotDestroyed(){St(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){St(Rt()&&!Fn(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await jt(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);St(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return St(this.recaptcha,this.auth,"internal-error"),this.recaptcha}constructor(e,t=Object.assign({},er),i){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=yi(i),this.isInvisible="invisible"===this.parameters.size,St("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const n="string"==typeof e?document.getElementById(e):e;St(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Qn:new Zn,this.validateStartingState()}}class ir{confirm(e){const t=Pi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}constructor(e,t){this.verificationId=e,this.onConfirmation=t}}async function nr(e,t,i){var n;const r=await i.verify();try{let a;if(St("string"==typeof r,e,"argument-error"),St("recaptcha"===i.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){const t=a.session;if("phoneNumber"in a){St("enroll"===t.type,e,"internal-error");const i=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return jt(e,"POST","/v2/accounts/mfaEnrollment:start",Ft(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:r}});return i.phoneSessionInfo.sessionInfo}{St("signin"===t.type,e,"internal-error");const i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;St(i,e,"missing-multi-factor-info");const o=await function(e,t){return jt(e,"POST","/v2/accounts/mfaSignIn:start",Ft(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return jt(e,"POST","/v1/accounts:sendVerificationCode",Ft(e,t))}(e,{phoneNumber:a.phoneNumber,recaptchaToken:r});return t}}finally{i._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{verifyPhoneNumber(e,t){return nr(this.auth,e,$(t))}static credential(e,t){return Pi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return rr.credentialFromTaggedObject(t)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Pi._fromTokenResponse(t,i):null}constructor(e){this.providerId=rr.PROVIDER_ID,this.auth=yi(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ar(e,t){return t?xt(t):(St(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr.PROVIDER_ID="phone",rr.PHONE_SIGN_IN_METHOD="phone";class or extends Ei{_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function sr(e){return en(e.auth,new or(e),e.bypassAuthState)}function cr(e){const{auth:t,user:i}=e;return St(i,t,"internal-error"),Qi(i,new or(e),e.bypassAuthState)}async function lr(e){const{auth:t,user:i}=e;return St(i,t,"internal-error"),Xi(i,new or(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:a,type:o}=e;if(a)return void this.reject(a);const s={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sr;case"linkViaPopup":case"linkViaRedirect":return lr;case"reauthViaPopup":case"reauthViaRedirect":return cr;default:wt(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Ot(2e3,1e4);class hr extends ur{async executeNotNull(){const e=await this.execute();return St(e,this.auth,"internal-error"),e}async onExecution(){Tt(1===this.filter.length,"Popup operations only handle one event");const e=Dn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(It(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,dr.get())};e()}constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}}hr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fr=new Map;class pr extends ur{async execute(){let e=fr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=br(t),n=vr(e);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}fr.set(this.auth._key(),e)}return this.bypassAuthState||fr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}}async function mr(e,t){return vr(e)._set(br(t),"true")}function gr(e,t){fr.set(e._key(),t)}function vr(e){return xt(e._redirectPersistence)}function br(e){return ni("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e,t,i){return async function(e,t,i){const n=yi(e);kt(e,t,Di);const r=ar(n,i);return await mr(r,n),r._openRedirect(n,t,"signInViaRedirect")}(e,t,i)}function wr(e,t,i){return async function(e,t,i){const n=$(e);kt(n.auth,t,Di);const r=ar(n.auth,i);await mr(r,n.auth);const a=await kr(n);return r._openRedirect(n.auth,t,"reauthViaRedirect",a)}(e,t,i)}function Ir(e,t,i){return async function(e,t,i){const n=$(e);kt(n.auth,t,Di);const r=ar(n.auth,i);await Zi(!1,n,t.providerId),await mr(r,n.auth);const a=await kr(n);return r._openRedirect(n.auth,t,"linkViaRedirect",a)}(e,t,i)}async function _r(e,t,i=!1){const n=yi(e),r=ar(n,t),a=new pr(n,r,i),o=await a.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}async function kr(e){const t=Dn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Cr(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(It(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sr(e))}saveEventToCache(e){this.cachedEventUids.add(Sr(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Sr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Cr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function Tr(e,t={}){return jt(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xr=/^https?/;function Nr(e){const t=Nt(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!xr.test(i))return!1;if(Ar.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Ot(3e4,6e4);function Pr(){const e=Un().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Or=null;function Lr(e){return Or=Or||function(e){return new Promise(((t,i)=>{var n,r,a;function o(){Pr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pr(),i(It(e,"network-request-failed"))},timeout:Rr.get()})}if(null===(r=null===(n=Un().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Un().gapi)||void 0===a?void 0:a.load)){const t=qn("iframefcb");return Un()[t]=()=>{gapi.load?o():i(It(e,"network-request-failed"))},Kn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>i(e)))}o()}})).catch((e=>{throw Or=null,e}))}(e),Or}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Ot(5e3,15e3),Mr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fr(e){const t=e.config;St(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?Lt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:je},r=Ur.get(e.config.apiHost);r&&(n.eid=r);const a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${i}?${V(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Br{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Hr(e,t,i,n=500,r=600){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let s="";const c=Object.assign(Object.assign({},jr),{width:n.toString(),height:r.toString(),top:a,left:o}),l=E().toLowerCase();i&&(s=ci(l)?"_blank":i),oi(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(function(e=E()){var t;return fi(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==s)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new Br(null);const d=window.open(t||"",s,u);St(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Br(d)}function Vr(e,t,i,n,r,a){St(e.config.authDomain,e,"auth-domain-config-required"),St(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:je,eventId:r};if(t instanceof Di){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",j(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof Mi){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];return`${function({config:e}){return e.emulator?Lt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${V(s).slice(1)}`}const Wr=class{async _openPopup(e,t,i,n){var r;Tt(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Hr(e,Vr(e,t,i,Nt(),n),Dn())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=Vr(e,t,i,Nt(),n),Un().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(Tt(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch((()=>{delete this.eventManagers[t]})),i}async initAndGetManager(e){const t=await async function(e){const t=await Lr(e),i=Un().gapi;return St(i,e,"internal-error"),t.open({where:document.body,url:Fr(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mr,dontclear:!0},(t=>new Promise((async(i,n)=>{await t.restyle({setHideOnLeave:!1});const r=It(e,"network-request-failed"),a=Un().setTimeout((()=>{n(r)}),Dr.get());function o(){Un().clearTimeout(a),i(t)}t.ping(o).then(o,(()=>{n(r)}))}))))}(e),i=new Er(e);return t.register("authEvent",(t=>{St(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.webStorageSupport;void 0!==r&&t(!!r),wt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tr(e);for(const e of t)try{if(Nr(e))return}catch(e){}wt(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mi()||si()||fi()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=On,this._completeRedirectFn=_r,this._overrideRedirectResult=gr}};class zr extends class{_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ct("unexpected MultiFactorSessionType")}}constructor(e){this.factorId=e}}{static _fromCredential(e){return new zr(e)}_finalizeEnroll(e,t,i){return function(e,t){return jt(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ft(e,t))}(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return jt(e,"POST","/v2/accounts/mfaSignIn:finalize",Ft(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}constructor(e){super("phone"),this.credential=e}}class Gr{static assertion(e){return zr._fromCredential(e)}constructor(){}}Gr.FACTOR_ID="phone";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var i;e((null===(i=t)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){St(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qr=O("authIdTokenMaxAge")||300;let $r=null;var Jr;Jr="Browser",Oe(new Y("auth",((e,{options:t})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),{apiKey:r,authDomain:a}=i.options;return((e,i)=>{St(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),St(!(null==a?void 0:a.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:a,clientPlatform:Jr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gi(Jr)},o=new bi(e,i,n);return function(e,t){const i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(xt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(i,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{e.getProvider("auth-internal").initialize()}))),Oe(new Y("auth-internal",(e=>{const t=yi(e.getProvider("auth").getImmediate());return new Kr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ze("@firebase/auth","0.20.11",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Jr)),ze("@firebase/auth","0.20.11","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),We(this._delegate))))}_getService(e,t=Te){var i;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(i=n.getComponent())||void 0===i?void 0:i.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=Te){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Re(this._delegate,e)}_addOrOverwriteComponent(e){Pe(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,Re(e,new Y("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new M("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const Zr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},i={__esModule:!0,initializeApp:function(n,r={}){const a=Be(n,r);if(F(t,a.name))return t[a.name];const o=new e(a,i);return t[a.name]=o,o},app:n,registerVersion:ze,setLogLevel:Ke,onLog:Ge,apps:null,SDK_VERSION:je,INTERNAL:{registerComponent:function(t){const r=t.name,a=r.replace("-compat","");if(Oe(t)&&"PUBLIC"===t.type){const o=(e=n())=>{if("function"!=typeof e[a])throw Xr.create("invalid-app-argument",{appName:r});return e[a]()};void 0!==t.serviceProps&&k(o,t.serviceProps),i[a]=o,e.prototype[a]=function(...e){return this._getService.bind(this,r).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?i[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:J}};function n(e){if(!F(t,e=e||Te))throw Xr.create("no-app",{appName:e});return t[e]}return i.default=i,Object.defineProperty(i,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),n.App=e,i}(Yr);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){k(t,e)},createSubscribe:G,ErrorFactory:M,deepExtend:k}),t}(),Qr=new oe("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){Qr.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Qr.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const ea=Zr;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ze("@firebase/app-compat","0.1.38",e)}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ta(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ea.registerVersion("firebase","9.13.0","app-compat");async function ia(e,t,i){var n;const{BuildInfo:r}=ta();Tt(t.sessionId,"AuthEvent did not contain a session ID");const a=await async function(e){const t=function(e){if(Tt(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let t=0;t<e.length;t++)i[t]=e.charCodeAt(t);return i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),i=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(i)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),o={};return fi()?o.ibi=r.packageName:ui()?o.apn=r.packageName:wt(e,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=a,Vr(e,i,t.type,void 0,null!==(n=t.eventId)&&void 0!==n?n:void 0,o)}function na(e){const{cordova:t}=ta();return new Promise((i=>{t.plugins.browsertab.isAvailable((n=>{let r=null;n?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,pi()?"_blank":"_system","location=yes"),i(r)}))}))}class ra extends Er{addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}}async function aa(e){const t=await ca()._get(la(e));return t&&await ca()._remove(la(e)),t}function oa(e,t){var i,n;const r=function(e){const t=ua(e),i=t.link?decodeURIComponent(t.link):void 0,n=ua(i).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return ua(r).link||r||n||i||e}(t);if(r.includes("/__/auth/callback")){const t=ua(r),a=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(n=null===(i=null==a?void 0:a.code)||void 0===i?void 0:i.split("auth/"))||void 0===n?void 0:n[1],s=o?It(o):null;return s?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:s,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function sa(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<20;i++){const i=Math.floor(Math.random()*t.length);e.push(t.charAt(i))}return e.join("")}function ca(){return xt(Rn)}function la(e){return ni("authEvent",e.config.apiKey,e.name)}function ua(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...i]=e.split("?");return W(i.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=class{async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new ra(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){wt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,n){!function(e){var t,i,n,r,a,o,s,c,l,u;const d=ta();St("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),St(void 0!==(null===(i=null==d?void 0:d.BuildInfo)||void 0===i?void 0:i.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),St("function"==typeof(null===(a=null===(r=null===(n=null==d?void 0:d.cordova)||void 0===n?void 0:n.plugins)||void 0===r?void 0:r.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),St("function"==typeof(null===(c=null===(s=null===(o=null==d?void 0:d.cordova)||void 0===o?void 0:o.plugins)||void 0===s?void 0:s.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),St("function"==typeof(null===(u=null===(l=null==d?void 0:d.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),fr.clear(),await this._originValidation(e);const a=function(e,t,i=null){return{type:t,eventId:i,urlResponse:null,sessionId:sa(),postBody:null,tenantId:e.tenantId,error:It(e,"no-auth-event")}}(e,i,n);await function(e,t){return ca()._set(la(e),t)}(e,a);const o=await ia(e,a,t);return async function(e,t,i){const{cordova:n}=ta();let r=()=>{};try{await new Promise(((a,o)=>{let s=null;function c(){var e;a();const t=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==i?void 0:i.close)&&i.close()}function l(){s||(s=window.setTimeout((()=>{o(It(e,"redirect-cancelled-by-user"))}),2e3))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(c),document.addEventListener("resume",l,!1),ui()&&document.addEventListener("visibilitychange",u,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),s&&window.clearTimeout(s)}}))}finally{r()}}(e,r,await na(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=ta(),i={};fi()?i.iosBundleId=t.packageName:ui()?i.androidPackageName=t.packageName:wt(e,"operation-not-supported-in-this-environment"),await Tr(e,i)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:n,BuildInfo:r}=ta(),a=setTimeout((async()=>{await aa(e),t.onEvent(ha())}),500),o=async i=>{clearTimeout(a);const n=await aa(e);let r=null;n&&(null==i?void 0:i.url)&&(r=oa(n,i.url)),t.onEvent(r||ha())};void 0!==i&&"function"==typeof i.subscribe&&i.subscribe(null,o);const s=n,c=`${r.packageName.toLowerCase()}://`;ta().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"==typeof s)try{s(e)}catch(e){console.error(e)}}}constructor(){this._redirectPersistence=On,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=_r,this._overrideRedirectResult=gr}};function ha(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:It("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function pa(e=E()){return!("file:"!==fa()&&"ionic:"!==fa()&&"capacitor:"!==fa()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function ma(e=E()){return A()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=E()){return/Edge\/\d+/.test(e)}(e)}function ga(){try{const e=self.localStorage,t=Dn();if(e)return e.setItem(t,"1"),e.removeItem(t),!ma()||x()}catch(e){return va()&&x()}return!1}function va(){return void 0!==e&&"WorkerGlobalScope"in e&&"importScripts"in e}function ba(){return("http:"===fa()||"https:"===fa()||C()||pa())&&!(T()||S())&&ga()&&!va()}function ya(){return pa()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wa={LOCAL:"local",NONE:"none",SESSION:"session"},Ia=St;async function _a(e){await e._initializationPromise;const t=ka(),i=ni("persistence",e.config.apiKey,e.name);t&&t.setItem(i,e._getPersistence())}function ka(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=St;class Sa{async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,n)}async _openRedirect(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,n)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ya()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Ea(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!ya()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}constructor(){this.browserResolver=xt(Wr),this.cordovaResolver=xt(da),this.underlyingResolver=null,this._redirectPersistence=On,this._completeRedirectFn=_r,this._overrideRedirectResult=gr}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(e){return e.unwrap()}function Ta(e,t){var i,n;const r=null===(i=t.customData)||void 0===i?void 0:i._tokenResponse;if("auth/multi-factor-auth-required"===(null===(n=t)||void 0===n?void 0:n.code)){t.resolver=new Ra(e,function(e,t){var i;const n=$(e),r=t;return St(t.customData.operationType,n,"argument-error"),St(null===(i=r.customData._serverResponse)||void 0===i?void 0:i.mfaPendingCredential,n,"argument-error"),Cn._fromError(n,r)}(e,t))}else if(r){const e=Aa(t),i=t;e&&(i.credential=e,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function Aa(e){const{_tokenResponse:t}=e instanceof D?e.customData:e;if(!t)return null;if(!(e instanceof D)&&"temporaryProof"in t&&"phoneNumber"in t)return rr.credentialFromResult(e);const i=t.providerId;if(!i||i===ot)return null;let n;switch(i){case at:n=ji;break;case nt:n=Fi;break;case rt:n=Bi;break;case st:n=Wi;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:s}=t;return r||a||e||o?o?i.startsWith("saml.")?Hi._create(i,o):Ni._fromParams({providerId:i,signInMethod:i,pendingToken:o,idToken:e,accessToken:r}):new Ui(i).credential({idToken:e,accessToken:r,rawNonce:s}):null}return e instanceof D?n.credentialFromError(e):n.credentialFromResult(e)}function xa(e,t){return t.catch((t=>{throw t instanceof D&&Ta(e,t),t})).then((e=>{const t=e.operationType,i=e.user;return{operationType:t,credential:(n=e,Aa(n)),additionalUserInfo:En(e),user:Pa.getOrCreate(i)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n}))}async function Na(e,t){const i=await t;return{verificationId:i.verificationId,confirm:t=>xa(e,i.confirm(t))}}class Ra{get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xa(Ca(this.auth),this.resolver.resolveSignIn(e))}constructor(e,t){this.resolver=t,this.auth=e.wrapped()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{static getOrCreate(e){return Pa.USER_MAP.has(e)||Pa.USER_MAP.set(e,new Pa(e)),Pa.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xa(this.auth,nn(this._delegate,e))}async linkWithPhoneNumber(e,t){return Na(this.auth,async function(e,t,i){const n=$(e);await Zi(!1,n,"phone");const r=await nr(n.auth,t,$(i));return new ir(r,(e=>nn(n,e)))}(this._delegate,e,t))}async linkWithPopup(e){return xa(this.auth,async function(e,t,i){const n=$(e);kt(n.auth,t,Di);const r=ar(n.auth,i);return new hr(n.auth,"linkViaPopup",t,r,n).executeNotNull()}(this._delegate,e,Sa))}async linkWithRedirect(e){return await _a(yi(this.auth)),Ir(this._delegate,e,Sa)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xa(this.auth,rn(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Na(this.auth,async function(e,t,i){const n=$(e),r=await nr(n.auth,t,$(i));return new ir(r,(e=>rn(n,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return xa(this.auth,async function(e,t,i){const n=$(e);kt(n.auth,t,Di);const r=ar(n.auth,i);return new hr(n.auth,"reauthViaPopup",t,r,n).executeNotNull()}(this._delegate,e,Sa))}async reauthenticateWithRedirect(e){return await _a(yi(this.auth)),wr(this._delegate,e,Sa)}sendEmailVerification(e){return pn(this._delegate,e)}async unlink(e){return await Yi(this._delegate,e),this}updateEmail(e){return function(e,t){return vn($(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return vn($(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await Xi($(e),t)}(this._delegate,e)}updateProfile(e){return gn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return mn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}constructor(e){this._delegate=e,this.multiFactor=function(e){const t=$(e);return An.has(t)||An.set(t,Tn._fromUser(t)),An.get(t)}(e)}}Pa.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oa=St;class La{get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Pa.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Ii(this._delegate,e,t)}applyActionCode(e){return un(this._delegate,e)}checkActionCode(e){return dn(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,i){await Si($(e),{oobCode:t,newPassword:i})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return xa(this._delegate,async function(e,t,i){const n=yi(e),r=await zi(n,{returnSecureToken:!0,email:t,password:i}),a=await Gi._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(a.user),a}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return fn(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const i=Oi.parseLink(t);return"EMAIL_SIGNIN"===(null==i?void 0:i.operation)}(this._delegate,e)}async getRedirectResult(){Oa(ba(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await yi(e)._initializationPromise,_r(e,t,!1)}(this._delegate,Sa);return e?xa(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){yi(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:n,error:r,complete:a}=Da(e,t,i);return this._delegate.onAuthStateChanged(n,r,a)}onIdTokenChanged(e,t,i){const{next:n,error:r,complete:a}=Da(e,t,i);return this._delegate.onIdTokenChanged(n,r,a)}sendSignInLinkToEmail(e,t){return hn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return ln(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){Ia(Object.values(wa).includes(t),e,"invalid-persistence-type"),T()?Ia(t!==wa.SESSION,e,"unsupported-persistence-type"):S()?Ia(t===wa.NONE,e,"unsupported-persistence-type"):va()?Ia(t===wa.NONE||t===wa.LOCAL&&x(),e,"unsupported-persistence-type"):Ia(t===wa.NONE||ga(),e,"unsupported-persistence-type")}(this._delegate,e),e){case wa.SESSION:t=On;break;case wa.LOCAL:t=await xt(Gn)._isAvailable()?Gn:Rn;break;case wa.NONE:t=ii;break;default:return wt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xa(this._delegate,async function(e){var t;const i=yi(e);if(await i._initializationPromise,null===(t=i.currentUser)||void 0===t?void 0:t.isAnonymous)return new Gi({user:i.currentUser,providerId:null,operationType:"signIn"});const n=await zi(i,{returnSecureToken:!0}),r=await Gi._fromIdTokenResponse(i,"signIn",n,!0);return await i._updateCurrentUser(r.user),r}(this._delegate))}signInWithCredential(e){return xa(this._delegate,tn(this._delegate,e))}signInWithCustomToken(e){return xa(this._delegate,an(this._delegate,e))}signInWithEmailAndPassword(e,t){return xa(this._delegate,function(e,t,i){return tn($(e),Li.credential(t,i))}(this._delegate,e,t))}signInWithEmailLink(e,t){return xa(this._delegate,async function(e,t,i){const n=$(e),r=Li.credentialWithLink(t,i||Nt());return St(r._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),tn(n,r)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Na(this._delegate,async function(e,t,i){const n=yi(e),r=await nr(n,t,$(i));return new ir(r,(e=>tn(n,e)))}(this._delegate,e,t))}async signInWithPopup(e){return Oa(ba(),this._delegate,"operation-not-supported-in-this-environment"),xa(this._delegate,async function(e,t,i){const n=yi(e);kt(e,t,Di);const r=ar(n,i);return new hr(n,"signInViaPopup",t,r).executeNotNull()}(this._delegate,e,Sa))}async signInWithRedirect(e){return Oa(ba(),this._delegate,"operation-not-supported-in-this-environment"),await _a(this._delegate),yr(this._delegate,e,Sa)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:i}=await dn($(e),t);return i.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:i}=e.options;Oa(i,"invalid-api-key",{appName:e.name}),Oa(i,"invalid-api-key",{appName:e.name});const n="undefined"!=typeof window?Sa:void 0;this._delegate=t.initialize({options:{persistence:Ma(i,e.name),popupRedirectResolver:n}}),this._delegate._updateErrorMap(mt),this.linkUnderlyingAuth()}}function Da(e,t,i){let n=e;"function"!=typeof e&&({next:n,error:t,complete:i}=e);const r=n;return{next:e=>r(e&&Pa.getOrCreate(e)),error:t,complete:i}}function Ma(e,t){const i=function(e,t){const i=ka();if(!i)return[];const n=ni("persistence",e,t);switch(i.getItem(n)){case wa.NONE:return[ii];case wa.LOCAL:return[Gn,On];case wa.SESSION:return[On];default:return[]}}(e,t);if("undefined"==typeof self||i.includes(Gn)||i.push(Gn),"undefined"!=typeof window)for(const e of[Rn,On])i.includes(e)||i.push(e);return i.includes(ii)||i.push(ii),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */La.Persistence=wa;class Ua{static credential(e,t){return rr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}constructor(){this.providerId="phone",this._delegate=new rr(Ca(ea.auth()))}}Ua.PHONE_SIGN_IN_METHOD=rr.PHONE_SIGN_IN_METHOD,Ua.PROVIDER_ID=rr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fa=St;class ja{clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}constructor(e,t,i=ea.app()){var n;Fa(null===(n=i.options)||void 0===n?void 0:n.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new tr(e,t,i.auth()),this.type=this._delegate.type}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ba;(Ba=ea).INTERNAL.registerComponent(new Y("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new La(t,i)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ct,PASSWORD_RESET:lt,RECOVER_EMAIL:ut,REVERT_SECOND_FACTOR_ADDITION:dt,VERIFY_AND_CHANGE_EMAIL:ht,VERIFY_EMAIL:ft}},EmailAuthProvider:Li,FacebookAuthProvider:Fi,GithubAuthProvider:Bi,GoogleAuthProvider:ji,OAuthProvider:Ui,SAMLAuthProvider:Vi,PhoneAuthProvider:Ua,PhoneMultiFactorGenerator:Gr,RecaptchaVerifier:ja,TwitterAuthProvider:Wi,Auth:La,AuthCredential:Ei,Error:D}).setInstantiationMode("LAZY").setMultipleInstances(!1)),Ba.registerVersion("@firebase/auth-compat","0.2.24");var Ha={};!function(){var e=window.CustomEvent;function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function i(e){e&&e.blur&&e!==document.body&&e.blur()}function n(e,t){for(var i=0;i<e.length;++i)if(e[i]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function a(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,i=!1,n=function(){i?this.downgradeModal():this.maybeHideModal(),i=!1}.bind(this),r=function(r){if(r.target===e){var a="DOMNodeRemoved";i|=r.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}e&&"object"!=typeof e||((e=function(e,t){t=t||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),i}).prototype=window.Event.prototype),a.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),o.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var i=document.createEvent("MouseEvents");i.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(i),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}i(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!o.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),i=function(e,i){return!(void 0===t[e]||t[e]===i)};if(t.opacity<1||i("zIndex","auto")||i("transform","none")||i("mixBlendMode","normal")||i("filter","none")||i("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,o.needsCentering(this.dialog_)?(o.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var i=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(i)}};var o={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,i=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,i)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var i=document.styleSheets[t],r=null;try{r=i.cssRules}catch(e){}if(r)for(var a=0;a<r.length;++a){var o=r[a],s=null;try{s=document.querySelectorAll(o.selectorText)}catch(e){}if(s&&n(s,e)){var c=o.style.getPropertyValue("top"),l=o.style.getPropertyValue("bottom");if(c&&"auto"!==c||l&&"auto"!==l)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!o.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new a(e)},registerDialog:function(e){e.showModal||o.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var i=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&i.push(t),i=i.concat(t.querySelectorAll("dialog")))})),i.length&&e(i)})))}};if(o.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},o.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},o.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,i=0;e=this.pendingDialogStack[i];++i)e.updateZIndex(--t,--t),0===i&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},o.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var i,n=0;i=this.pendingDialogStack[n];++n)if(i.dialog===e)return 0===n;e=e.parentElement}return!1},o.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),i(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},o.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var i=new e("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&n.dialog.dispatchEvent(i)&&n.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},o.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},o.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},o.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},o.dm=new o.DialogManager,o.formSubmitter=null,o.useValue=null,void 0===window.HTMLDialogElement){var s=document.createElement("form");if(s.setAttribute("method","dialog"),"dialog"!==s.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var l=c.get;c.get=function(){return r(this)?"dialog":l.call(this)};var u=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):u.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",(function(e){if(o.formSubmitter=null,o.useValue=null,!e.defaultPrevented){var i=e.target;if(i&&r(i.form)){if(!("submit"===i.type&&["button","input"].indexOf(i.localName)>-1)){if("input"!==i.localName||"image"!==i.type)return;o.useValue=e.offsetX+","+e.offsetY}t(i)&&(o.formSubmitter=i)}}}),!1);var d=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return d.call(this);var e=t(this);e&&e.close()},document.addEventListener("submit",(function(e){var i=e.target;if(r(i)){e.preventDefault();var n=t(i);if(n){var a=o.formSubmitter;a&&a.form===i?n.close(o.useValue||a.value):n.close(),o.formSubmitter=null}}}),!0)}o.forceRegisterDialog=o.forceRegisterDialog,o.registerDialog=o.registerDialog,"function"==typeof define&&"amd"in define?define((function(){return o})):"object"==typeof Ha?Ha=o:window.dialogPolyfill=o}();
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Va,Wa,za,Ga,Ka={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};Ka=function(){var e=[],t=[],i="mdlComponentConfigInternal_";function n(t,i){for(var n=0;n<e.length;n++)if(e[n].className===t)return void 0!==i&&(e[n]=i),e[n];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function a(e,t){return-1!==r(e).indexOf(t)}function o(e,t,i){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:i});var n=document.createEvent("Events");return n.initEvent(e,t,i),n}function s(t,i){if(void 0===t&&void 0===i)for(var r=0;r<e.length;r++)s(e[r].className,e[r].cssClass);else{var a=t;if(void 0===i){var o=n(a);o&&(i=o.cssClass)}for(var l=document.querySelectorAll("."+i),u=0;u<l.length;u++)c(l[u],a)}}function c(s,c){if(!("object"==typeof s&&s instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=o("mdl-componentupgrading",!0,!0);if(s.dispatchEvent(l),!l.defaultPrevented){var u=r(s),d=[];if(c)a(s,c)||d.push(n(c));else{var h=s.classList;e.forEach((function(e){h.contains(e.cssClass)&&-1===d.indexOf(e)&&!a(s,e.className)&&d.push(e)}))}for(var f,p=0,m=d.length;p<m;p++){if(!(f=d[p]))throw new Error("Unable to find a registered component for the given class.");u.push(f.className),s.setAttribute("data-upgraded",u.join(","));var g=new f.classConstructor(s);g[i]=f,t.push(g);for(var v=0,b=f.callbacks.length;v<b;v++)f.callbacks[v](s);f.widget&&(s[f.className]=g);var y=o("mdl-componentupgraded",!0,!1);s.dispatchEvent(y)}}}function l(e){if(e){var n=t.indexOf(e);t.splice(n,1);var r=e.element_.getAttribute("data-upgraded").split(","),a=r.indexOf(e[i].classAsString);r.splice(a,1),e.element_.setAttribute("data-upgraded",r.join(","));var s=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(s)}}return{upgradeDom:s,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var i,n=0,r=t.length;n<r;n++)(i=t[n])instanceof HTMLElement&&(c(i),i.children.length>0&&e(i.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)s(e[t].className)},registerUpgradedCallback:function(e,t){var i=n(e);i&&i.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var a={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===a.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===a.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(i))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");n(t.classAsString,a)||e.push(a)},downgradeElements:function(e){var i=function(e){t.filter((function(t){return t.element_===e})).forEach(l)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)i(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");i(e)}}}}(),Ka.ComponentConfigPublic,Ka.ComponentConfig,Ka.Component,Ka.upgradeDom=Ka.upgradeDom,Ka.upgradeElement=Ka.upgradeElement,Ka.upgradeElements=Ka.upgradeElements,Ka.upgradeAllRegistered=Ka.upgradeAllRegistered,Ka.registerUpgradedCallback=Ka.registerUpgradedCallback,Ka.register=Ka.register,Ka.downgradeElements=Ka.downgradeElements,window.componentHandler=Ka,window.componentHandler=Ka,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),Ka.upgradeAllRegistered()):(Ka.upgradeElement=function(){},Ka.register=function(){})})),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Va=function(e){this.element_=e,this.init()},window.MaterialButton=Va,Va.prototype.Constant_={},Va.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},Va.prototype.blurHandler_=function(e){e&&this.element_.blur()},Va.prototype.disable=function(){this.element_.disabled=!0},Va.prototype.disable=Va.prototype.disable,Va.prototype.enable=function(){this.element_.disabled=!1},Va.prototype.enable=Va.prototype.enable,Va.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:Va,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wa=function(e){this.element_=e,this.init()},window.MaterialProgress=Wa,Wa.prototype.Constant_={},Wa.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},Wa.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},Wa.prototype.setProgress=Wa.prototype.setProgress,Wa.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},Wa.prototype.setBuffer=Wa.prototype.setBuffer,Wa.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:Wa,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
za=function(e){this.element_=e,this.init()},window.MaterialSpinner=za,za.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},za.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},za.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),i.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[i,n,r],o=0;o<a.length;o++){var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[o].appendChild(s)}t.appendChild(i),t.appendChild(n),t.appendChild(r),this.element_.appendChild(t)},za.prototype.createLayer=za.prototype.createLayer,za.prototype.stop=function(){this.element_.classList.remove("is-active")},za.prototype.stop=za.prototype.stop,za.prototype.start=function(){this.element_.classList.add("is-active")},za.prototype.start=za.prototype.start,za.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:za,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ga=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()},window.MaterialTextfield=Ga,Ga.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},Ga.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},Ga.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},Ga.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},Ga.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Ga.prototype.onReset_=function(e){this.updateClasses_()},Ga.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},Ga.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},Ga.prototype.checkDisabled=Ga.prototype.checkDisabled,Ga.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Ga.prototype.checkFocus=Ga.prototype.checkFocus,Ga.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},Ga.prototype.checkValidity=Ga.prototype.checkValidity,Ga.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},Ga.prototype.checkDirty=Ga.prototype.checkDirty,Ga.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},Ga.prototype.disable=Ga.prototype.disable,Ga.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},Ga.prototype.enable=Ga.prototype.enable,Ga.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},Ga.prototype.change=Ga.prototype.change,Ga.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:Ga,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0}),function(){(function(){var t,i,n="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)i=Object.setPrototypeOf;else{var r;e:{var a={};try{a.__proto__={xb:!0},r=a.xb;break e}catch(Xe){}r=!1}i=r?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var o=i;function s(e,t){if(e.prototype=n(t.prototype),e.prototype.constructor=e,o)o(e,t);else for(var i in t)if("prototype"!=i)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(e,i,r)}else e[i]=t[i];e.K=t.prototype}var c="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){e!=Array.prototype&&e!=Object.prototype&&(e[t]=i.value)},l="undefined"!=typeof window&&window===this?this:void 0!==e&&null!=e?e:this;function u(e,t){if(t){var i=l;e=e.split(".");for(var n=0;n<e.length-1;n++){var r=e[n];r in i||(i[r]={}),i=i[r]}(t=t(n=i[e=e[e.length-1]]))!=n&&null!=t&&c(i,e,{configurable:!0,writable:!0,value:t})}}u("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),u("Array.prototype.includes",(function(e){return e||function(e,t){var i=this;i instanceof String&&(i=String(i));var n=i.length;for(0>(t=t||0)&&(t=Math.max(t+n,0));t<n;t++){var r=i[t];if(r===e||Object.is(r,e))return!0}return!1}}));var d=this;function h(e){return void 0!==e}function f(e){return"string"==typeof e}var p=/^[\w+/_-]+[=]{0,2}$/,m=null;function g(){}function v(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function b(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var i=Object.prototype.toString.call(e);if("[object Window]"==i)return"object";if("[object Array]"==i||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==i||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function y(e){return"array"==b(e)}function w(e){var t=b(e);return"array"==t||"object"==t&&"number"==typeof e.length}function I(e){return"function"==b(e)}function _(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var k="closure_uid_"+(1e9*Math.random()>>>0),E=0;function S(e,t,i){return e.call.apply(e.bind,arguments)}function C(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function T(e,t,i){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?S:C).apply(null,arguments)}function A(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function x(e,t){for(var i in t)e[i]=t[i]}var N,R=Date.now||function(){return+new Date};function P(e,t){e=e.split(".");var i,n=d;e[0]in n||void 0===n.execScript||n.execScript("var "+e[0]);for(;e.length&&(i=e.shift());)!e.length&&h(t)?n[i]=t:n=n[i]&&n[i]!==Object.prototype[i]?n[i]:n[i]={}}function O(e,t){function i(){}i.prototype=t.prototype,e.K=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.vc=function(e,i,n){for(var r=Array(arguments.length-2),a=2;a<arguments.length;a++)r[a-2]=arguments[a];return t.prototype[i].apply(e,r)}}function L(e){if(Error.captureStackTrace)Error.captureStackTrace(this,L);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function D(e,t){for(var i="",n=(e=e.split("%s")).length-1,r=0;r<n;r++)i+=e[r]+(r<t.length?t[r]:"%s");L.call(this,i+e[n])}function M(e,t){throw new D("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}O(L,Error),L.prototype.name="CustomError",O(D,L),D.prototype.name="AssertionError";var U=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(f(e))return f(t)&&1==t.length?e.indexOf(t,0):-1;for(var i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return-1},F=Array.prototype.forEach?function(e,t,i){Array.prototype.forEach.call(e,t,i)}:function(e,t,i){for(var n=e.length,r=f(e)?e.split(""):e,a=0;a<n;a++)a in r&&t.call(i,r[a],a,e)};var j=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=[],r=0,a=f(e)?e.split(""):e,o=0;o<i;o++)if(o in a){var s=a[o];t.call(void 0,s,o,e)&&(n[r++]=s)}return n},B=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=Array(i),r=f(e)?e.split(""):e,a=0;a<i;a++)a in r&&(n[a]=t.call(void 0,r[a],a,e));return n},H=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=f(e)?e.split(""):e,r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e))return!0;return!1};function V(e,t){return 0<=U(e,t)}function W(e,t){var i;return(i=0<=(t=U(e,t)))&&z(e,t),i}function z(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function G(e,t){!function(e,t){for(var i=f(e)?e.split(""):e,n=e.length-1;0<=n;--n)n in i&&t.call(void 0,i[n],n,e)}(e,(function(i,n){t.call(void 0,i,n,e)&&z(e,n)&&0}))}function K(e){return Array.prototype.concat.apply([],arguments)}function q(e){var t=e.length;if(0<t){for(var i=Array(t),n=0;n<t;n++)i[n]=e[n];return i}return[]}function $(e,t,i){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,i)}var J=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},Y=/&/g,X=/</g,Z=/>/g,Q=/"/g,ee=/'/g,te=/\x00/g,ie=/[\x00&<>"']/;function ne(e,t){return e<t?-1:e>t?1:0}function re(e){return ie.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(Y,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(X,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Z,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(Q,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(ee,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(te,"&#0;"))),e}function ae(e,t,i){for(var n in e)t.call(i,e[n],n,e)}function oe(e){var t,i={};for(t in e)i[t]=e[t];return i}var se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){for(var i,n,r=1;r<arguments.length;r++){for(i in n=arguments[r])e[i]=n[i];for(var a=0;a<se.length;a++)i=se[a],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}var le="StopIteration"in d?d.StopIteration:{message:"StopIteration",stack:""};function ue(){}function de(e){if(e instanceof ue)return e;if("function"==typeof e.ha)return e.ha(!1);if(w(e)){var t=0,i=new ue;return i.next=function(){for(;;){if(t>=e.length)throw le;if(t in e)return e[t++];t++}},i}throw Error("Not implemented")}function he(e){if(w(e))return q(e);e=de(e);var t=[];return function(e,t){if(w(e))try{F(e,t,void 0)}catch(e){if(e!==le)throw e}else{e=de(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==le)throw e}}}(e,(function(e){t.push(e)})),t}function fe(e,t){this.g={},this.a=[],this.j=this.h=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(e)if(e instanceof fe)for(i=e.ja(),n=0;n<i.length;n++)this.set(i[n],e.get(i[n]));else for(n in e)this.set(n,e[n])}function pe(e){if(e.h!=e.a.length){for(var t=0,i=0;t<e.a.length;){var n=e.a[t];me(e.g,n)&&(e.a[i++]=n),t++}e.a.length=i}if(e.h!=e.a.length){var r={};for(i=t=0;t<e.a.length;)me(r,n=e.a[t])||(e.a[i++]=n,r[n]=1),t++;e.a.length=i}}function me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}ue.prototype.next=function(){throw le},ue.prototype.ha=function(){return this},(t=fe.prototype).la=function(){pe(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},t.ja=function(){return pe(this),this.a.concat()},t.clear=function(){this.g={},this.j=this.h=this.a.length=0},t.get=function(e,t){return me(this.g,e)?this.g[e]:t},t.set=function(e,t){me(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},t.forEach=function(e,t){for(var i=this.ja(),n=0;n<i.length;n++){var r=i[n],a=this.get(r);e.call(t,a,r,this)}},t.ha=function(e){pe(this);var t=0,i=this.j,n=this,r=new ue;return r.next=function(){if(i!=n.j)throw Error("The map has changed since the iterator was created");if(t>=n.a.length)throw le;var r=n.a[t++];return e?r:n.g[r]},r};var ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ve(e,t,i,n){for(var r=i.length;0<=(t=e.indexOf(i,t))&&t<n;){var a=e.charCodeAt(t-1);if(!(38!=a&&63!=a||(a=e.charCodeAt(t+r))&&61!=a&&38!=a&&35!=a))return t;t+=r+1}return-1}var be=/#|$/;function ye(e,t){var i=e.search(be),n=ve(e,0,t,i);if(0>n)return null;var r=e.indexOf("&",n);return(0>r||r>i)&&(r=i),n+=t.length+1,decodeURIComponent(e.substr(n,r-n).replace(/\+/g," "))}var we=/[?&]($|#)/;function Ie(e,t){var i;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof Ie?(this.i=h(t)?t:e.i,_e(this,e.j),this.A=e.A,this.h=e.h,ke(this,e.C),this.g=e.g,Ee(this,Fe(e.a)),this.s=e.s):e&&(i=String(e).match(ge))?(this.i=!!t,_e(this,i[1]||"",!0),this.A=Ce(i[2]||""),this.h=Ce(i[3]||"",!0),ke(this,i[4]),this.g=Ce(i[5]||"",!0),Ee(this,i[6]||"",!0),this.s=Ce(i[7]||"")):(this.i=!!t,this.a=new Le(null,this.i))}function _e(e,t,i){e.j=i?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ke(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Ee(e,t,i){t instanceof Le?(e.a=t,function(e,t){t&&!e.j&&(De(e),e.h=null,e.a.forEach((function(e,t){var i=t.toLowerCase();t!=i&&(Me(this,t),Me(this,i),0<e.length&&(this.h=null,this.a.set(je(this,i),q(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(i||(t=Te(t,Pe)),e.a=new Le(t,e.i))}function Se(e){return e instanceof Ie?new Ie(e):new Ie(e,void 0)}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Te(e,t,i){return f(e)?(e=encodeURI(e).replace(t,Ae),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ae(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ie.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Te(t,xe,!0),":");var i=this.h;return(i||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Te(t,xe,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.C)&&e.push(":",String(i))),(i=this.g)&&(this.h&&"/"!=i.charAt(0)&&e.push("/"),e.push(Te(i,"/"==i.charAt(0)?Re:Ne,!0))),(i=this.a.toString())&&e.push("?",i),(i=this.s)&&e.push("#",Te(i,Oe)),e.join("")};var xe=/[#\/\?@]/g,Ne=/[#\?:]/g,Re=/[#\?]/g,Pe=/[#\?@]/g,Oe=/#/g;function Le(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function De(e){e.a||(e.a=new fe,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var a=e[i].substring(0,n);r=e[i].substring(n+1)}else a=e[i];t(a,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)})))}function Me(e,t){De(e),t=je(e,t),me(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,me((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&pe(e)))}function Ue(e,t){return De(e),t=je(e,t),me(e.a.g,t)}function Fe(e){var t=new Le;return t.h=e.h,e.a&&(t.a=new fe(e.a),t.g=e.g),t}function je(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Be(e){this.a=Se(e)}function He(e){return e.a.a.get(ze.Pa)||null}function Ve(e,t){t?e.a.a.set(ze.PROVIDER_ID,t):Me(e.a.a,ze.PROVIDER_ID)}(t=Le.prototype).add=function(e,t){De(this),this.h=null,e=je(this,e);var i=this.a.get(e);return i||this.a.set(e,i=[]),i.push(t),this.g+=1,this},t.clear=function(){this.a=this.h=null,this.g=0},t.forEach=function(e,t){De(this),this.a.forEach((function(i,n){F(i,(function(i){e.call(t,i,n,this)}),this)}),this)},t.ja=function(){De(this);for(var e=this.a.la(),t=this.a.ja(),i=[],n=0;n<t.length;n++)for(var r=e[n],a=0;a<r.length;a++)i.push(t[n]);return i},t.la=function(e){De(this);var t=[];if(f(e))Ue(this,e)&&(t=K(t,this.a.get(je(this,e))));else{e=this.a.la();for(var i=0;i<e.length;i++)t=K(t,e[i])}return t},t.set=function(e,t){return De(this),this.h=null,Ue(this,e=je(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},t.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},t.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),i=0;i<t.length;i++){var n=t[i],r=encodeURIComponent(String(n));n=this.la(n);for(var a=0;a<n.length;a++){var o=r;""!==n[a]&&(o+="="+encodeURIComponent(String(n[a]))),e.push(o)}}return this.h=e.join("&")},Be.prototype.toString=function(){return this.a.toString()};var We,ze={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var Ge=d.navigator;if(Ge){var Ke=Ge.userAgent;if(Ke){We=Ke;break e}}We=""}function qe(e){return-1!=We.indexOf(e)}function $e(){return(qe("Chrome")||qe("CriOS"))&&!qe("Edge")}function Je(e){return Je[" "](e),e}Je[" "]=g;var Ye,Xe,Ze=qe("Opera"),Qe=qe("Trident")||qe("MSIE"),et=qe("Edge"),tt=et||Qe,it=qe("Gecko")&&!(-1!=We.toLowerCase().indexOf("webkit")&&!qe("Edge"))&&!(qe("Trident")||qe("MSIE"))&&!qe("Edge"),nt=-1!=We.toLowerCase().indexOf("webkit")&&!qe("Edge"),rt=nt&&qe("Mobile"),at=qe("Macintosh");function ot(){var e=d.document;return e?e.documentMode:void 0}e:{var st="",ct=(Xe=We,it?/rv:([^\);]+)(\)|;)/.exec(Xe):et?/Edge\/([\d\.]+)/.exec(Xe):Qe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Xe):nt?/WebKit\/(\S+)/.exec(Xe):Ze?/(?:Version)[ \/]?(\S+)/.exec(Xe):void 0);if(ct&&(st=ct?ct[1]:""),Qe){var lt=ot();if(null!=lt&&lt>parseFloat(st)){Ye=String(lt);break e}}Ye=st}var ut,dt={};function ht(e){return function(e,t){var i=dt;return Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)}(e,(function(){for(var t=0,i=J(String(Ye)).split("."),n=J(String(e)).split("."),r=Math.max(i.length,n.length),a=0;0==t&&a<r;a++){var o=i[a]||"",s=n[a]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==o[0].length&&0==s[0].length)break;t=ne(0==o[1].length?0:parseInt(o[1],10),0==s[1].length?0:parseInt(s[1],10))||ne(0==o[2].length,0==s[2].length)||ne(o[2],s[2]),o=o[3],s=s[3]}while(0==t)}return 0<=t}))}var ft=d.document;function pt(e,t){this.a=e===gt&&t||"",this.g=mt}ut=ft&&Qe?ot()||("CSS1Compat"==ft.compatMode?parseInt(Ye,10):5):void 0,pt.prototype.ma=!0,pt.prototype.ka=function(){return this.a},pt.prototype.toString=function(){return"Const{"+this.a+"}"};var mt={},gt={};function vt(){this.a="",this.h=yt}function bt(e){return e instanceof vt&&e.constructor===vt&&e.h===yt?e.a:(M("expected object of type TrustedResourceUrl, got '"+e+"' of type "+b(e)),"type_error:TrustedResourceUrl")}vt.prototype.ma=!0,vt.prototype.ka=function(){return this.a.toString()},vt.prototype.g=function(){return 1},vt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var yt={};function wt(){this.a="",this.h=St}function It(e){return e instanceof wt&&e.constructor===wt&&e.h===St?e.a:(M("expected object of type SafeUrl, got '"+e+"' of type "+b(e)),"type_error:SafeUrl")}wt.prototype.ma=!0,wt.prototype.ka=function(){return this.a.toString()},wt.prototype.g=function(){return 1},wt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var _t=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function kt(e){return e instanceof wt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),_t.test(e)||(e="about:invalid#zClosurez"),Ct(e))}function Et(e){return e instanceof wt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),_t.test(e)||(e="about:invalid#zClosurez"),Ct(e))}var St={};function Ct(e){var t=new wt;return t.a=e,t}function Tt(){this.a="",this.g=At}Ct("about:blank"),Tt.prototype.ma=!0;var At={};function xt(){this.a="",this.j=Rt,this.h=null}function Nt(e){return e instanceof xt&&e.constructor===xt&&e.j===Rt?e.a:(M("expected object of type SafeHtml, got '"+e+"' of type "+b(e)),"type_error:SafeHtml")}Tt.prototype.ka=function(){return this.a},Tt.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},xt.prototype.g=function(){return this.h},xt.prototype.ma=!0,xt.prototype.ka=function(){return this.a.toString()},xt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Rt={};function Pt(e,t){var i=new xt;return i.a=e,i.h=t,i}Pt("<!DOCTYPE html>",0);var Ot=Pt("",0);Pt("<br>",0);var Lt,Dt,Mt=(Dt=!1,function(){return Dt||(Lt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Nt(Ot),!t.parentElement)}(),Dt=!0),Lt});function Ut(e,t){t=t instanceof wt?t:Et(t),e.assign(It(t))}function Ft(e,t){this.a=h(e)?e:0,this.g=h(t)?t:0}function jt(e,t){this.width=e,this.height=t}function Bt(e){return e?new Yt(qt(e)):N||(N=new Yt)}function Ht(e,t){var i=t||document;return i.querySelectorAll&&i.querySelector?i.querySelectorAll("."+e):Wt(document,e,t)}function Vt(e,t){var i=t||document;if(i.getElementsByClassName)e=i.getElementsByClassName(e)[0];else{i=document;var n=t||i;e=n.querySelectorAll&&n.querySelector&&e?n.querySelector(e?"."+e:""):Wt(i,e,t)[0]||null}return e||null}function Wt(e,t,i){var n;if((e=i||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var a={};for(i=n=0;e=r[i];i++){var o=e.className;"function"==typeof o.split&&V(o.split(/\s+/),t)&&(a[n++]=e)}return a.length=n,a}return r}Ft.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Ft.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Ft.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Ft.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(t=jt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},t.aspectRatio=function(){return this.width/this.height},t.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},t.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},t.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var zt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Gt(e){return e.scrollingElement?e.scrollingElement:(nt||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function Kt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function qt(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function $t(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var i;i=e.firstChild;)e.removeChild(i);e.appendChild(qt(e).createTextNode(String(t)))}}function Jt(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||f(e.className)&&V(e.className.split(/\s+/),t)})):null}function Yt(e){this.a=e||d.document||document}Yt.prototype.N=function(){return f(void 0)?this.a.getElementById(void 0):void 0};var Xt={Fc:!0},Zt={Hc:!0},Qt={Ec:!0},ei={Gc:!0};function ti(){throw Error("Do not instantiate directly")}function ii(e,t,i,n){if(e=e(t||ri,void 0,i),n=(n||Bt()).a.createElement("DIV"),(e=function(e){if(!_(e))return re(String(e));if(e instanceof ti){if(e.fa===Xt)return e.content;if(e.fa===ei)return re(e.content)}return M("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(ni),e=Pt(e,null),Mt())for(;n.lastChild;)n.removeChild(n.lastChild);return n.innerHTML=Nt(e),1==n.childNodes.length&&(1==(e=n.firstChild).nodeType&&(n=e)),n}ti.prototype.va=null,ti.prototype.toString=function(){return this.content};var ni=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,ri={};function ai(){ti.call(this)}function oi(e){return null!=e&&e.fa===Xt?e:e instanceof xt?ui(Nt(e).toString(),e.g()):ui(re(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function si(){ti.call(this)}function ci(e,t){this.content=String(e),this.va=null!=t?t:null}function li(e){return new ci(e,void 0)}O(ai,ti),ai.prototype.fa=Xt,O(si,ti),si.prototype.fa=Zt,si.prototype.va=1,O(ci,ti),ci.prototype.fa=ei;var ui=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,i){return e=new t(String(e)),void 0!==i&&(e.va=i),e}}(ai),di=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(si);function hi(e){return(e=String(e))?new ci(e,void 0):""}var fi=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,i){return(e=String(e))?(e=new t(e),void 0!==i&&(e.va=i),e):""}}(ai);function pi(e){return null!=e&&e.fa===Xt?String(String(e.content).replace(Si,"").replace(Ci,"&lt;")).replace(Ii,bi):re(String(e))}function mi(e){return null!=e&&e.fa===Zt?e=String(e).replace(_i,wi):e instanceof wt?e=String(It(e).toString()).replace(_i,wi):(e=String(e),Ei.test(e)?e=e.replace(_i,wi):(M("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function gi(e){return null!=e&&e.fa===Qt?e=e.content:null==e?e="":e instanceof Tt?e instanceof Tt&&e.constructor===Tt&&e.g===At?e=e.a:(M("expected object of type SafeStyle, got '"+e+"' of type "+b(e)),e="type_error:SafeStyle"):(e=String(e),ki.test(e)||(M("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var vi={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function bi(e){return vi[e]}var yi={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function wi(e){return yi[e]}var Ii=/[\x00\x22\x27\x3c\x3e]/g,_i=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ki=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Ei=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Si=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Ci=/</g;function Ti(){return li("Enter a valid phone number")}function Ai(){return li("Unable to send password reset code to specified email")}function xi(){return li("Something went wrong. Please try again.")}function Ni(){return li("This email already exists without any means of sign-in. Please reset the password to recover.")}function Ri(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return li(t)}function Pi(){return li("Please login again to perform this operation")}function Oi(e,t,i){var n=Error.call(this);if(this.message=n.message,"stack"in n&&(this.stack=n.stack),this.code=Li+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=xi();e=li(e).toString()}this.message=e||"",this.credential=i||null}s(Oi,Error),Oi.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Li="firebaseui/";function Di(){0!=Mi&&(Ui[this[k]||(this[k]=++E)]=this),this.T=this.T,this.C=this.C}var Mi=0,Ui={};function Fi(e,t){e.T?h(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(h(void 0)?T(t,void 0):t))}function ji(e){e&&"function"==typeof e.m&&e.m()}Di.prototype.T=!1,Di.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Mi)){var e=this[k]||(this[k]=++E);if(0!=Mi&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Ui[e]}},Di.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Bi=Object.freeze||function(e){return e},Hi=!Qe||9<=Number(ut),Vi=Qe&&!ht("9"),Wi=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",g,t),d.removeEventListener("test",g,t)}catch(e){}return e}();function zi(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function Gi(e,t){if(zi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(it){e:{try{Je(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==i?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=f(e.pointerType)?e.pointerType:Ki[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}zi.prototype.stopPropagation=function(){this.h=!0},zi.prototype.preventDefault=function(){this.qb=!1},O(Gi,zi);var Ki=Bi({2:"touch",3:"pen",4:"mouse"});Gi.prototype.stopPropagation=function(){Gi.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},Gi.prototype.preventDefault=function(){Gi.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Vi)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var qi="closure_listenable_"+(1e6*Math.random()|0),$i=0;function Ji(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.La=r,this.key=++$i,this.sa=this.Ia=!1}function Yi(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Xi(e){this.src=e,this.a={},this.g=0}function Zi(e,t){var i=t.type;i in e.a&&W(e.a[i],t)&&(Yi(t),0==e.a[i].length&&(delete e.a[i],e.g--))}function Qi(e,t,i,n){for(var r=0;r<e.length;++r){var a=e[r];if(!a.sa&&a.listener==t&&a.capture==!!i&&a.La==n)return r}return-1}Xi.prototype.add=function(e,t,i,n,r){var a=e.toString();(e=this.a[a])||(e=this.a[a]=[],this.g++);var o=Qi(e,t,n,r);return-1<o?(t=e[o],i||(t.Ia=!1)):((t=new Ji(t,this.src,a,!!n,r)).Ia=i,e.push(t)),t};var en="closure_lm_"+(1e6*Math.random()|0),tn={};function nn(e,t,i,n,r){if(n&&n.once)return an(e,t,i,n,r);if(y(t)){for(var a=0;a<t.length;a++)nn(e,t[a],i,n,r);return null}return i=pn(i),e&&e[qi]?e.J.add(String(t),i,!1,_(n)?!!n.capture:!!n,r):rn(e,t,i,!1,n,r)}function rn(e,t,i,n,r,a){if(!t)throw Error("Invalid event type");var o=_(r)?!!r.capture:!!r,s=hn(e);if(s||(e[en]=s=new Xi(e)),(i=s.add(t,i,n,o,a)).proxy)return i;if(n=function(){var e=dn,t=Hi?function(i){return e.call(t.src,t.listener,i)}:function(i){if(!(i=e.call(t.src,t.listener,i)))return i};return t}(),i.proxy=n,n.src=e,n.listener=i,e.addEventListener)Wi||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(cn(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return i}function an(e,t,i,n,r){if(y(t)){for(var a=0;a<t.length;a++)an(e,t[a],i,n,r);return null}return i=pn(i),e&&e[qi]?e.J.add(String(t),i,!0,_(n)?!!n.capture:!!n,r):rn(e,t,i,!0,n,r)}function on(e,t,i,n,r){if(y(t))for(var a=0;a<t.length;a++)on(e,t[a],i,n,r);else n=_(n)?!!n.capture:!!n,i=pn(i),e&&e[qi]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(i=Qi(a=e.a[t],i,n,r))&&(Yi(a[i]),z(a,i),0==a.length&&(delete e.a[t],e.g--)))):e&&(e=hn(e))&&(t=e.a[t.toString()],e=-1,t&&(e=Qi(t,i,n,r)),(i=-1<e?t[e]:null)&&sn(i))}function sn(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[qi])Zi(t.J,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(cn(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=hn(t))?(Zi(i,e),0==i.g&&(i.src=null,t[en]=null)):Yi(e)}}}function cn(e){return e in tn?tn[e]:tn[e]="on"+e}function ln(e,t,i,n){var r=!0;if((e=hn(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var a=t[e];a&&a.capture==i&&!a.sa&&(a=un(a,n),r=r&&!1!==a)}return r}function un(e,t){var i=e.listener,n=e.La||e.src;return e.Ia&&sn(e),i.call(n,t)}function dn(e,t){if(e.sa)return!0;if(!Hi){if(!t)e:{t=["window","event"];for(var i=d,n=0;n<t.length;n++)if(null==(i=i[t[n]])){t=null;break e}t=i}if(t=new Gi(n=t,this),i=!0,!(0>n.keyCode||null!=n.returnValue)){e:{var r=!1;if(0==n.keyCode)try{n.keyCode=-1;break e}catch(e){r=!0}(r||null==n.returnValue)&&(n.returnValue=!0)}for(n=[],r=t.g;r;r=r.parentNode)n.push(r);for(e=e.type,r=n.length-1;!t.h&&0<=r;r--){t.g=n[r];var a=ln(n[r],e,!0,t);i=i&&a}for(r=0;!t.h&&r<n.length;r++)t.g=n[r],a=ln(n[r],e,!1,t),i=i&&a}return i}return un(e,new Gi(t,this))}function hn(e){return(e=e[en])instanceof Xi?e:null}var fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function pn(e){return I(e)?e:(e[fn]||(e[fn]=function(t){return e.handleEvent(t)}),e[fn])}function mn(){Di.call(this),this.J=new Xi(this),this.wb=this,this.Ha=null}function gn(e,t){var i,n=e.Ha;if(n)for(i=[];n;n=n.Ha)i.push(n);if(e=e.wb,n=t.type||t,f(t))t=new zi(t,e);else if(t instanceof zi)t.target=t.target||e;else{var r=t;ce(t=new zi(n,e),r)}if(r=!0,i)for(var a=i.length-1;!t.h&&0<=a;a--){var o=t.g=i[a];r=vn(o,n,!0,t)&&r}if(t.h||(r=vn(o=t.g=e,n,!0,t)&&r,t.h||(r=vn(o,n,!1,t)&&r)),i)for(a=0;!t.h&&a<i.length;a++)r=vn(o=t.g=i[a],n,!1,t)&&r;return r}function vn(e,t,i,n){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.sa&&o.capture==i){var s=o.listener,c=o.La||o.src;o.Ia&&Zi(e.J,o),r=!1!==s.call(c,n)&&r}}return r&&0!=n.qb}O(mn,Di),mn.prototype[qi]=!0,mn.prototype.Za=function(e){this.Ha=e},mn.prototype.removeEventListener=function(e,t,i,n){on(this,e,t,i,n)},mn.prototype.o=function(){if(mn.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var i=t.a[e],n=0;n<i.length;n++)Yi(i[n]);delete t.a[e],t.g--}}this.Ha=null};var bn={},yn=0;function wn(e,t){if(!e)throw Error("Event target element must be provided!");if(e=_n(e),bn[e]&&bn[e].length)for(var i=0;i<bn[e].length;i++)gn(bn[e][i],t)}function In(e){var t=_n(e.N());bn[t]&&bn[t].length&&(function(e,t){e:{for(var i=e.length,n=f(e)?e.split(""):e,r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e)){t=r;break e}t=-1}0<=t&&z(e,t)}(bn[t],(function(t){return t==e})),bn[t].length||delete bn[t])}function _n(e){return void 0===e.a&&(e.a=yn,yn++),e.a}function kn(e){if(!e)throw Error("Event target element must be provided!");mn.call(this),this.a=e}function En(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function Sn(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function Cn(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function Tn(){this.g=this.a=null}s(kn,mn),kn.prototype.N=function(){return this.a},kn.prototype.register=function(){var e=_n(this.N());bn[e]?V(bn[e],this)||bn[e].push(this):bn[e]=[this]},Sn.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var An,xn,Nn=new Sn((function(){return new Pn}),(function(e){e.reset()}));function Rn(){var e=Mn,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Pn(){this.next=this.g=this.a=null}function On(e){d.setTimeout((function(){throw e}),0)}function Ln(e,t){xn||function(){if(d.Promise&&d.Promise.resolve){var e=d.Promise.resolve(void 0);xn=function(){e.then(Un)}}else xn=function(){var e=Un;!I(d.setImmediate)||d.Window&&d.Window.prototype&&!qe("Edge")&&d.Window.prototype.setImmediate==d.setImmediate?(An||(An=function(){var e=d.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!qe("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var i="callImmediate"+Math.random(),n="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=T((function(e){"*"!=n&&e.origin!=n||e.data!=i||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(i,n)}}}),void 0!==e&&!qe("Trident")&&!qe("MSIE")){var t=new e,i={},n=i;return t.port1.onmessage=function(){if(h(i.next)){var e=(i=i.next).gb;i.gb=null,e()}},function(e){n.next={gb:e},n=n.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){d.setTimeout(e,0)}}()),An(e)):d.setImmediate(e)}}(),Dn||(xn(),Dn=!0),Mn.add(e,t)}Tn.prototype.add=function(e,t){var i=Nn.get();i.set(e,t),this.g?this.g.next=i:this.a=i,this.g=i},Pn.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Pn.prototype.reset=function(){this.next=this.g=this.a=null};var Dn=!1,Mn=new Tn;function Un(){for(var e;e=Rn();){try{e.a.call(e.g)}catch(e){On(e)}Cn(Nn,e)}Dn=!1}function Fn(e){if(this.a=jn,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=g)try{var t=this;e.call(void 0,(function(e){Yn(t,Bn,e)}),(function(e){if(!(e instanceof ir))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Yn(t,Hn,e)}))}catch(e){Yn(this,Hn,e)}}var jn=0,Bn=2,Hn=3;function Vn(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}Vn.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Wn=new Sn((function(){return new Vn}),(function(e){e.reset()}));function zn(e,t,i){var n=Wn.get();return n.s=e,n.g=t,n.j=i,n}function Gn(e){if(e instanceof Fn)return e;var t=new Fn(g);return Yn(t,Bn,e),t}function Kn(e){return new Fn((function(t,i){i(e)}))}function qn(e,t){if(e.a==jn)if(e.h){var i=e.h;if(i.g){for(var n=0,r=null,a=null,o=i.g;o&&(o.h||(n++,o.a==e&&(r=o),!(r&&1<n)));o=o.next)r||(a=o);r&&(i.a==jn&&1==n?qn(i,t):(a?((n=a).next==i.j&&(i.j=n),n.next=n.next.next):Zn(i),Qn(i,r,Hn,t)))}e.h=null}else Yn(e,Hn,t)}function $n(e,t){e.g||e.a!=Bn&&e.a!=Hn||Xn(e),e.j?e.j.next=t:e.g=t,e.j=t}function Jn(e,t,i,n){var r=zn(null,null,null);return r.a=new Fn((function(e,a){r.s=t?function(i){try{var r=t.call(n,i);e(r)}catch(e){a(e)}}:e,r.g=i?function(t){try{var r=i.call(n,t);!h(r)&&t instanceof ir?a(t):e(r)}catch(e){a(e)}}:a})),r.a.h=e,$n(e,r),r.a}function Yn(e,t,i){if(e.a==jn){e===i&&(t=Hn,i=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var n=i,r=e.hc,a=e.ic;if(n instanceof Fn){$n(n,zn(r||g,a||null,e));var o=!0}else if(En(n))n.then(r,a,e),o=!0;else{if(_(n))try{var s=n.then;if(I(s)){!function(e,t,i,n,r){function a(e){s||(s=!0,n.call(r,e))}function o(e){s||(s=!0,i.call(r,e))}var s=!1;try{t.call(e,o,a)}catch(e){a(e)}}(n,s,r,a,e),o=!0;break e}}catch(t){a.call(e,t),o=!0;break e}o=!1}}o||(e.A=i,e.a=t,e.h=null,Xn(e),t!=Hn||i instanceof ir||function(e,t){e.s=!0,Ln((function(){e.s&&tr.call(null,t)}))}(e,i))}}function Xn(e){e.i||(e.i=!0,Ln(e.Hb,e))}function Zn(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function Qn(e,t,i,n){if(i==Hn&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,er(t,i,n);else try{t.h?t.s.call(t.j):er(t,i,n)}catch(e){tr.call(null,e)}Cn(Wn,t)}function er(e,t,i){t==Bn?e.s.call(e.j,i):e.g&&e.g.call(e.j,i)}Fn.prototype.then=function(e,t,i){return Jn(this,I(e)?e:null,I(t)?t:null,i)},Fn.prototype.$goog_Thenable=!0,(t=Fn.prototype).fc=function(e,t){return(e=zn(e,e,t)).h=!0,$n(this,e),this},t.Ca=function(e,t){return Jn(this,null,e,t)},t.cancel=function(e){this.a==jn&&Ln((function(){qn(this,new ir(e))}),this)},t.hc=function(e){this.a=jn,Yn(this,Bn,e)},t.ic=function(e){this.a=jn,Yn(this,Hn,e)},t.Hb=function(){for(var e;e=Zn(this);)Qn(this,e,this.a,this.A);this.i=!1};var tr=On;function ir(e){L.call(this,e)}function nr(e,t,i){t||(t={}),i=i||window;var n=e instanceof wt?e:kt(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(a in t)switch(a){case"width":case"height":case"top":case"left":r.push(a+"="+t[a]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(a+"="+(t[a]?1:0))}var a=r.join(",");return(qe("iPhone")&&!qe("iPod")&&!qe("iPad")||qe("iPad")||qe("iPod"))&&i.navigator&&i.navigator.standalone&&e&&"_self"!=e?(a=i.document.createElement("A"),n=n instanceof wt?n:Et(n),a.href=It(n),a.setAttribute("target",e),t.noreferrer&&a.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),a.dispatchEvent(t),i={}):t.noreferrer?(i=i.open("",e,a),t=It(n).toString(),i&&(tt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),i.opener=null,t=Pt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+re(t)+'">',null),i.document.write(Nt(t)),i.document.close())):(i=i.open(It(n).toString(),e,a))&&t.noopener&&(i.opener=null),i}function rr(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function ar(e){nr(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function or(e,t){if(null==(e=_(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function sr(){return window.location.href}function cr(e){var t=yr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function lr(e,t,i){e.a=!0,e.h=i,e.j=!t,fr(e)}function ur(e){if(e.a){if(!e.J)throw new pr(e);e.J=!1}}function dr(e,t,i){e.s.push([t,i,void 0]),e.a&&fr(e)}function hr(e){return H(e.s,(function(e){return I(e[1])}))}function fr(e){if(e.i&&e.a&&hr(e)){var t=e.i,i=vr[t];i&&(d.clearTimeout(i.a),delete vr[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var n=i=!1;e.s.length&&!e.A;){var r=e.s.shift(),a=r[0],o=r[1];if(r=r[2],a=e.j?o:a)try{var s=a.call(r||e.O,t);h(s)&&(e.j=e.j&&(s==t||s instanceof Error),e.h=t=s),(En(t)||"function"==typeof d.Promise&&t instanceof d.Promise)&&(n=!0,e.A=!0)}catch(n){t=n,e.j=!0,hr(e)||(i=!0)}}e.h=t,n&&(s=T(e.L,e,!0),n=T(e.L,e,!1),t instanceof cr?(dr(t,s,n),t.l=!0):t.then(s,n)),i&&(t=new gr(t),vr[t.a]=t,e.i=t.a)}function pr(){L.call(this)}function mr(){L.call(this)}function gr(e){this.a=d.setTimeout(T(this.h,this),0),this.g=e}O(ir,L),ir.prototype.name="cancel",cr.prototype.cancel=function(e){if(this.a)this.h instanceof cr&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new mr(this),ur(this),lr(this,!1,e))}},cr.prototype.L=function(e,t){this.A=!1,lr(this,e,t)},cr.prototype.callback=function(e){ur(this),lr(this,!0,e)},cr.prototype.then=function(e,t,i){var n,r,a=new Fn((function(e,t){n=e,r=t}));return dr(this,n,(function(e){e instanceof mr?a.cancel():r(e)})),a.then(e,t,i)},cr.prototype.$goog_Thenable=!0,O(pr,L),pr.prototype.message="Deferred has already fired",pr.prototype.name="AlreadyCalledError",O(mr,L),mr.prototype.message="Deferred was canceled",mr.prototype.name="CanceledError",gr.prototype.h=function(){throw delete vr[this.a],this.g};var vr={};function br(e){var t={},i=t.document||document,n=bt(e).toString(),r=document.createElement("SCRIPT"),a={rb:r,sb:void 0},o=new cr(a),s=null,c=null!=t.timeout?t.timeout:5e3;return 0<c&&(s=window.setTimeout((function(){wr(r,!0);var e=new kr(_r,"Timeout reached for loading script "+n);ur(o),lr(o,!1,e)}),c),a.sb=s),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(wr(r,t.xc||!1,s),o.callback(null))},r.onerror=function(){wr(r,!0,s);var e=new kr(Ir,"Error while loading script "+n);ur(o),lr(o,!1,e)},ce(a=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){ae(t,(function(t,i){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==i?e.style.cssText=t:"class"==i?e.className=t:"for"==i?e.htmlFor=t:zt.hasOwnProperty(i)?e.setAttribute(zt[i],t):0==i.lastIndexOf("aria-",0)||0==i.lastIndexOf("data-",0)?e.setAttribute(i,t):e[i]=t}))}(r,a),function(e,t){e.src=bt(t),null===m&&(m=(t=(t=d.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&p.test(t)?t:""),(t=m)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(i).appendChild(r),o}function yr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&wr(e,!0,this.sb)}}function wr(e,t,i){null!=i&&d.clearTimeout(i),e.onload=g,e.onerror=g,e.onreadystatechange=g,t&&window.setTimeout((function(){Kt(e)}),0)}var Ir=0,_r=1;function kr(e,t){var i="Jsloader error (code #"+e+")";t&&(i+=": "+t),L.call(this,i),this.code=e}function Er(){return d.google&&d.google.accounts&&d.google.accounts.id||null}function Sr(e){this.a=e||Er(),this.h=!1,this.g=null}function Cr(e,t,i){return e.a&&t?(e.h=!0,new Fn((function(n){e.g=n,e.a.initialize({client_id:t,callback:n,auto_select:!i}),e.a.prompt()}))):Gn(t?Ar.Xa().load().then((function(){return e.a=Er(),Cr(e,t,i)})).Ca((function(){return null})):null)}O(kr,L),Sr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},v(Sr);var Tr=new pt(gt,"https://accounts.google.com/gsi/client");function Ar(){this.a=null}function xr(e,t){this.a=e,this.g=t||function(e){throw e}}function Nr(e,t,i){this.reset(e,t,i,void 0,void 0)}Ar.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=Tr;e instanceof pt&&e.constructor===pt&&e.g===mt?e=e.a:(M("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new vt;return t.a=e,t}();return Er()?Gn():this.a=function(){var e=null;return new Fn((function(t){"complete"==d.document.readyState?t():(e=function(){t()},an(window,"load",e))})).Ca((function(t){throw on(window,"load",e),t}))}().then((function(){if(!Er())return new Fn((function(i,n){var r=setTimeout((function(){e.a=null,n(Error("Network error!"))}),1e4);d.onGoogleLibraryLoad=function(){clearTimeout(r),i()},Gn(br(t)).then((function(){Er()&&i()})).Ca((function(t){clearTimeout(r),e.a=null,n(t)}))}))}))},v(Ar),xr.prototype.confirm=function(e){return Gn(this.a.confirm(e)).Ca(this.g)},Nr.prototype.a=null;function Rr(e){this.s=e,this.a=this.h=this.j=this.g=null}function Pr(e,t){this.name=e,this.value=t}Nr.prototype.reset=function(e,t,i,n,r){"number"==typeof r||0,this.h=n||R(),this.j=e,this.s=t,this.g=i,delete this.a},Pr.prototype.toString=function(){return this.name};var Or=new Pr("SEVERE",1e3),Lr=new Pr("WARNING",900),Dr=new Pr("CONFIG",700);function Mr(e){return e.j?e.j:e.g?Mr(e.g):(M("Root logger has no level set."),null)}Rr.prototype.log=function(e,t,i){if(e.value>=Mr(this).value)for(I(t)&&(t=t()),e=new Nr(e,String(t),this.s),i&&(e.a=i),i=this;i;){var n=i,r=e;if(n.a)for(var a=0;t=n.a[a];a++)t(r);i=i.g}};var Ur={},Fr=null;function jr(){Fr||(Fr=new Rr(""),Ur[""]=Fr,Fr.j=Dr)}function Br(){this.a=R()}var Hr=null;function Vr(e){this.j=e||"",Hr||(Hr=new Br),this.s=Hr}function Wr(e){return 10>e?"0"+e:String(e)}function zr(e){Vr.call(this,e)}function Gr(){this.s=T(this.h,this),this.a=new zr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Br.prototype.set=function(e){this.a=e},Br.prototype.reset=function(){this.set(R())},Br.prototype.get=function(){return this.a},Vr.prototype.a=!0,Vr.prototype.g=!0,Vr.prototype.h=!1,O(zr,Vr),Gr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var i=[];if(i.push(e.j," "),e.g){var n=new Date(t.h);i.push("[",Wr(n.getFullYear()-2e3)+Wr(n.getMonth()+1)+Wr(n.getDate())+" "+Wr(n.getHours())+":"+Wr(n.getMinutes())+":"+Wr(n.getSeconds())+"."+Wr(Math.floor(n.getMilliseconds()/10)),"] ")}return i.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var i=0;if(1>e)i=2;else for(;100>e;)i++,e*=10;for(;0<i--;)t=" "+t;return t}(t,e.s.get()),"s] "),i.push("[",t.g,"] "),i.push(t.s),e.h&&(t=t.a)&&i.push("\n",t instanceof Error?t.message:t.toString()),e.a&&i.push("\n"),i.join("")}(this.a,e);if(qr)!function(e,t,i,n){e[t]?e[t](i,n||""):e.log(i,n||"")}(qr,function(e){if(e){if(e.value>=Or.value)return"error";if(e.value>=Lr.value)return"warn";if(e.value>=Dr.value)return"log"}return"debug"}(e.j),t,e.a)}};var Kr,qr=d.console;function $r(e,t){Kr&&Kr.log(Or,e,t)}Kr=function e(t){var i;if(jr(),!(i=Ur[t])){i=new Rr(t);var n=t.lastIndexOf("."),r=t.substr(n+1);(n=e(t.substr(0,n))).h||(n.h={}),n.h[r]=i,i.g=n,Ur[t]=i}return i}("firebaseui");var Jr=new Gr;if(1!=Jr.g){var Yr;jr(),Yr=Fr;var Xr=Jr.s;Yr.a||(Yr.a=[]),Yr.a.push(Xr),Jr.g=!0}function Zr(e){Kr&&Kr.log(Lr,e,void 0)}function Qr(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function ta(e){e=(e.a.cookie||"").split(";");for(var t,i,n=[],r=[],a=0;a<e.length;a++)-1==(t=(i=J(e[a])).indexOf("="))?(n.push(""),r.push(i)):(n.push(i.substring(0,t)),r.push(i.substring(t+1)));return{keys:n,values:r}}(t=Qr.prototype).set=function(e,t,i,n,r,a){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');h(i)||(i=-1),r=r?";domain="+r:"",n=n?";path="+n:"",a=a?";secure":"",i=0>i?"":0==i?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(R()+1e3*i).toUTCString(),this.a.cookie=e+"="+t+r+n+i+a},t.get=function(e,t){for(var i,n=e+"=",r=(this.a.cookie||"").split(";"),a=0;a<r.length;a++){if(0==(i=J(r[a])).lastIndexOf(n,0))return i.substr(n.length);if(i==e)return""}return t},t.ja=function(){return ta(this).keys},t.la=function(){return ta(this).values},t.clear=function(){for(var e=ta(this).keys,t=e.length-1;0<=t;t--){var i=e[t];this.get(i),this.set(i,"",0,void 0,void 0)}};var ia=new Qr;function na(){}function ra(e,t,i,n){this.h=null!=e?e:-1,this.g=t||null,this.a=i||null,this.j=!!n}function aa(e,t){this.g=e,this.a=t||null}function oa(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function sa(e){if(e&&e.email){var t=e.credential&&ea.auth.AuthCredential.fromJSON(e.credential);return new aa(e.email,t)}return null}function ca(e){this.a=e||null}function la(e){for(var t=[],i=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);255<r&&(t[i++]=255&r,r>>=8),t[i++]=r}return t}function ua(e){return B(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function da(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(ha*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<ha*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var i=t,n=i[0];i[0]=i[1],i[1]=i[2],i[2]=i[3],i[3]=n,ya(t),t[0]^=_a[e/this.g][0],t[1]^=_a[e/this.g][1],t[2]^=_a[e/this.g][2],t[3]^=_a[e/this.g][3]}else 6<this.g&&4==e%this.g&&ya(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}s(ra,na),ra.prototype.set=function(e,t){ia.set(e,t,this.h,this.g,this.a,this.j)},ra.prototype.get=function(e){return ia.get(e)||null},ra.prototype.ra=function(e){var t=this.g,i=this.a;ia.get(e),ia.set(e,"",0,t,i)},da.prototype.A=16;var ha=da.prototype.A/4;function fa(e,t){for(var i,n=0;n<ha;n++)for(var r=0;4>r;r++)i=t[i=4*r+n],e.h[n][r]=i}function pa(e){for(var t=[],i=0;i<ha;i++)for(var n=0;4>n;n++)t[4*n+i]=e.h[i][n];return t}function ma(e,t){for(var i=0;4>i;i++)for(var n=0;4>n;n++)e.h[i][n]^=e.a[4*t+n][i]}function ga(e,t){for(var i=0;4>i;i++)for(var n=0;4>n;n++)e.h[i][n]=t[e.h[i][n]]}function va(e){for(var t=1;4>t;t++)for(var i=0;4>i;i++)e.s[t][i]=e.h[t][i];for(t=1;4>t;t++)for(i=0;4>i;i++)e.h[t][i]=e.s[t][(i+t)%ha]}function ba(e){for(var t=1;4>t;t++)for(var i=0;4>i;i++)e.s[t][(i+t)%ha]=e.h[t][i];for(t=1;4>t;t++)for(i=0;4>i;i++)e.h[t][i]=e.s[t][i]}function ya(e){e[0]=wa[e[0]],e[1]=wa[e[1]],e[2]=wa[e[2]],e[3]=wa[e[3]]}var wa=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Ia=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],_a=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],ka=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Ea=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Sa=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Ca=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Ta=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Aa=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function xa(e,t){e=new da(Ra(e));for(var i,n=(t=la(t)).splice(0,16),r="";n.length;){i=16-n.length;for(var a=0;a<i;a++)n.push(0);for(fa(i=e,n),ma(i,0),n=1;n<i.j;++n){ga(i,wa),va(i),a=i.h;for(var o=i.s[0],s=0;4>s;s++)o[0]=a[0][s],o[1]=a[1][s],o[2]=a[2][s],o[3]=a[3][s],a[0][s]=ka[o[0]]^Ea[o[1]]^o[2]^o[3],a[1][s]=o[0]^ka[o[1]]^Ea[o[2]]^o[3],a[2][s]=o[0]^o[1]^ka[o[2]]^Ea[o[3]],a[3][s]=Ea[o[0]]^o[1]^o[2]^ka[o[3]];ma(i,n)}ga(i,wa),va(i),ma(i,i.j),r+=ua(pa(i)),n=t.splice(0,16)}return r}function Na(e,t){e=new da(Ra(e));for(var i=[],n=0;n<t.length;n+=2)i.push(parseInt(t.substring(n,n+2),16));var r=i.splice(0,16);for(t="";r.length;){for(fa(n=e,r),ma(n,n.j),r=1;r<n.j;++r){ba(n),ga(n,Ia),ma(n,n.j-r);for(var a=n.h,o=n.s[0],s=0;4>s;s++)o[0]=a[0][s],o[1]=a[1][s],o[2]=a[2][s],o[3]=a[3][s],a[0][s]=Aa[o[0]]^Ca[o[1]]^Ta[o[2]]^Sa[o[3]],a[1][s]=Sa[o[0]]^Aa[o[1]]^Ca[o[2]]^Ta[o[3]],a[2][s]=Ta[o[0]]^Sa[o[1]]^Aa[o[2]]^Ca[o[3]],a[3][s]=Ca[o[0]]^Ta[o[1]]^Sa[o[2]]^Aa[o[3]]}if(ba(n),ga(n,Ia),ma(n,0),8192>=(n=pa(n)).length)n=String.fromCharCode.apply(null,n);else{for(r="",a=0;a<n.length;a+=8192)r+=String.fromCharCode.apply(null,$(n,a,a+8192));n=r}t+=n,r=i.splice(0,16)}return t.replace(/(\x00)+$/,"")}function Ra(e){for(var t=32-(e=la(e.substring(0,32))).length,i=0;i<t;i++)e.push(0);return e}function Pa(e){var t=[];return La(new Oa,e,t),t.join("")}function Oa(){}function La(e,t,i){if(null==t)i.push("null");else{if("object"==typeof t){if(y(t)){var n=t;t=n.length,i.push("[");for(var r="",a=0;a<t;a++)i.push(r),La(e,n[a],i),r=",";return void i.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(n in i.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,n)&&("function"!=typeof(a=t[n])&&(i.push(r),Ua(n,i),i.push(":"),La(e,a,i),r=","));return void i.push("}")}t=t.valueOf()}switch(typeof t){case"string":Ua(t,i);break;case"number":i.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":i.push(String(t));break;case"function":i.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ma=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ua(e,t){t.push('"',e.replace(Ma,(function(e){var t=Da[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),Da[e]=t),t})),'"')}function Fa(e){this.a=e}function ja(){}function Ba(e){this.a=e}function Ha(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function Va(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function Wa(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function za(e,t){this.g=e,this.a=t+"::"}Fa.prototype.set=function(e,t){h(t)?this.a.set(e,Pa(t)):this.a.ra(e)},Fa.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},O(ja,na),ja.prototype.clear=function(){var e=he(this.ha(!0)),t=this;F(e,(function(e){t.ra(e)}))},O(Ba,ja),(t=Ba.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},t.get=function(e){if(!f(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},t.ra=function(e){this.a.removeItem(e)},t.ha=function(e){var t=0,i=this.a,n=new ue;return n.next=function(){if(t>=i.length)throw le;var n=i.key(t++);if(e)return n;if(!f(n=i.getItem(n)))throw"Storage mechanism: Invalid value was encountered";return n},n},t.clear=function(){this.a.clear()},t.key=function(e){return this.a.key(e)},O(Va,Ba),O(Wa,Ba),O(za,ja),za.prototype.set=function(e,t){this.g.set(this.a+e,t)},za.prototype.get=function(e){return this.g.get(this.a+e)},za.prototype.ra=function(e){this.g.ra(this.a+e)},za.prototype.ha=function(e){var t=this.g.ha(!0),i=this,n=new ue;return n.next=function(){for(var n=t.next();n.substr(0,i.a.length)!=i.a;)n=t.next();return e?n.substr(i.a.length):i.g.get(n)},n},Ha(new Va);var Ga=new Wa,Ka=new Fa(Ha(Ga)?new za(Ga,"firebaseui"):null),qa={name:"pendingEmailCredential",storage:Ka},$a={name:"redirectStatus",storage:Ka},Ja={name:"redirectUrl",storage:Ka},Ya={name:"emailForSignIn",storage:new Fa(new ra(3600,"/"))},Xa={name:"pendingEncryptedCredential",storage:new Fa(new ra(3600,"/"))};function Za(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Qa(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function eo(e,t,i){e.storage.set(i?e.name+":"+i:e.name,t)}function to(e){return Za(Ja,e)||null}function io(e){return sa(e=Za(qa,e)||null)}function no(e){Qa(qa,e)}function ro(e,t){eo(qa,oa(e),t)}function ao(e){return(e=Za($a,e)||null)&&void 0!==e.tenantId?new ca(e.tenantId):null}function oo(){this.W={}}function so(e,t,i){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=i}function co(e,t,i){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=i}function lo(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function uo(){this.g=void 0,this.a={}}function ho(e,t,i,n){for(var r=0;r<t.length;r++){var a=t.charAt(r);e.a[a]||(e.a[a]=new uo),e=e.a[a]}if(n&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=i}function fo(e,t){for(var i in void 0!==e.g&&t.push(e.g),e.a)fo(e.a[i],t)}function po(e,t,i){for(var n in void 0!==e.g&&i.push(t),e.a)po(e.a[n],t+n,i)}function mo(e){for(this.a=e,this.g=new uo,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function go(e,t){var i={},n=0;for(void 0!==(e=e.g).g&&(i[n]=e.g);n<t.length;n++){var r=t.charAt(n);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(i[n]=e.g)}for(var a in i)if(i.hasOwnProperty(a))return i[a];return[]}function vo(e){for(var t=0;t<Io.length;t++)if(Io[t].c===e)return Io[t];return null}function bo(e){e=e.toUpperCase();for(var t=[],i=0;i<Io.length;i++)Io[i].f===e&&t.push(Io[i]);return t}function yo(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],i=0;i<Io.length;i++)Io[i].b==e&&t.push(Io[i]);e=t}else e=bo(e);return e}function wo(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}oo.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(t=uo.prototype).set=function(e,t){ho(this,e,t,!1)},t.add=function(e,t){ho(this,e,t,!0)},t.get=function(e){e:{for(var t=this,i=0;i<e.length;i++)if(!(t=t.a[e.charAt(i)])){e=void 0;break e}e=t}return e?e.g:void 0},t.la=function(){var e=[];return fo(this,e),e},t.ja=function(){var e=[];return po(this,"",e),e},t.clear=function(){this.a={},this.g=void 0};var Io=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];wo(Io);var _o=new mo(Io);function ko(e,t){this.a=e,this.Aa=t}function Eo(e){e=J(e);var t=go(_o,e);return 0<t.length?new ko("1"==t[0].b?"1-US-0":t[0].c,J(e.substr(t[0].b.length+1))):null}function So(e){var t=vo(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function Co(e,t){for(var i=0;i<e.length;i++)if(!V(To,e[i])&&(null!==Ao&&e[i]in Ao||V(t,e[i])))return e[i];return null}var To=["emailLink","password","phone"],Ao={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function xo(){this.a=new oo,so(this.a,"autoUpgradeAnonymousUsers"),so(this.a,"callbacks"),so(this.a,"credentialHelper",rs),so(this.a,"immediateFederatedRedirect",!1),so(this.a,"popupMode",!1),so(this.a,"privacyPolicyUrl"),so(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),so(this.a,"queryParameterForWidgetMode","mode"),so(this.a,"signInFlow"),so(this.a,"signInOptions"),so(this.a,"signInSuccessUrl"),so(this.a,"siteName"),so(this.a,"tosUrl"),so(this.a,"widgetUrl"),so(this.a,"adminRestrictedOperation")}function No(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!Xo(e)&&$r('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function Ro(e){e=e.a.get("signInOptions")||[];for(var t=[],i=0;i<e.length;i++){var n=e[i];(n=_(n)?n:{provider:n}).provider&&t.push(n)}return t}function Po(e,t){e=Ro(e);for(var i=0;i<e.length;i++)if(e[i].provider===t)return e[i];return null}function Oo(e){return Ro(e).map((function(e){return e.provider}))}function Lo(e,t){e=Do(e);for(var i=0;i<e.length;i++)if(e[i].providerId===t)return e[i];return null}function Do(e){return Ro(e).map((function(e){if(Ao[e.provider]||V(ls,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?It(kt(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?It(kt(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function Mo(e){var t,i=Po(e,ea.auth.GoogleAuthProvider.PROVIDER_ID);if(t=i&&i.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(n in e=e.a.get("credentialHelper"),as)if(as[n]===e){var n=as[n];break e}n=rs}t=n===ns}return t&&i.clientId||null}function Uo(e){return!!((e=Po(e,ea.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Fo(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function jo(e,t){return e=(e=Po(e,t))&&e.scopes,Array.isArray(e)?e:[]}function Bo(e,t){return _(e=(e=Po(e,t))&&e.customParameters)?(e=oe(e),t===ea.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===ea.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function Ho(e){if(!(e=Po(e,ea.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,i=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==i&&!Array.isArray(i))throw Error("BlacklistedCountries must be an array.");if(t&&i)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!i)return Io;if(e=[],t){i={};for(var n=0;n<t.length;n++)for(var r=yo(t[n]),a=0;a<r.length;a++)i[r[a].c]=r[a];for(var o in i)i.hasOwnProperty(o)&&e.push(i[o])}else{for(o={},t=0;t<i.length;t++)for(r=yo(i[t]),n=0;n<r.length;n++)o[r[n].c]=r[n];for(r=0;r<Io.length;r++)null!==o&&Io[r].c in o||e.push(Io[r])}return e}function Vo(e){return lo(e.a,"queryParameterForWidgetMode")}function Wo(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Zr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){ar(t)}}return null}function zo(e){var t=e.a.get("tosUrl")||null,i=e.a.get("privacyPolicyUrl")||null;if(i&&!t&&Zr("Term of Service URL is missing, the link will not be displayed."),t&&i){if("function"==typeof i)return i;if("string"==typeof i)return function(){ar(i)}}return null}function Go(e){return!(e=Po(e,ea.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function Ko(e){return!(!(e=Po(e,ea.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==ea.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function qo(e){var t=!!e.a.get("immediateFederatedRedirect"),i=Oo(e);return e=$o(e),t&&1==i.length&&!V(To,i[0])&&e==os}function $o(e){for(var t in e=e.a.get("signInFlow"),ss)if(ss[t]==e)return ss[t];return os}function Jo(e){return Zo(e).signInSuccess||null}function Yo(e){return Zo(e).signInSuccessWithAuthResult||null}function Xo(e){return Zo(e).signInFailure||null}function Zo(e){return e.a.get("callbacks")||{}}var Qo,es,ts,is,ns="googleyolo",rs="none",as={nc:ns,NONE:rs},os="redirect",ss={qc:"popup",rc:os},cs={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},ls=["anonymous"],us=["sitekey","tabindex","callback","expired-callback"],ds={};function hs(e,t,i,n){ds[e].apply(null,Array.prototype.slice.call(arguments,1))}function fs(e){return e.classList?e.classList:f(e=e.className)&&e.match(/\S+/g)||[]}function ps(e,t){return e.classList?e.classList.contains(t):V(fs(e),t)}function ms(e,t){e.classList?e.classList.add(t):ps(e,t)||(e.className+=0<e.className.length?" "+t:t)}function gs(e,t){e.classList?e.classList.remove(t):ps(e,t)&&(e.className=j(fs(e),(function(e){return e!=t})).join(" "))}function vs(e){var t=e.type;switch(f(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var i,n=0;i=e.options[n];n++)i.selected&&t.push(i.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function bs(e,t){var i=e.type;switch(f(i)&&i.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,f(t))for(var n=0;i=e.options[n];n++)if(i.value==t){i.selected=!0;break}break;case"select-multiple":for(f(t)&&(t=[t]),n=0;i=e.options[n];n++)if(i.selected=!1,t)for(var r,a=0;r=t[a];a++)i.value==r&&(i.selected=!0);break;default:e.value=null!=t?t:""}}function ys(e,t,i,n,r,a){if(nt&&!ht("525"))return!0;if(at&&r)return ws(e);if(r&&!n)return!1;if(!it&&("number"==typeof t&&(t=Is(t)),(!i||at)&&(17==t||18==t||at&&91==t)||at&&16==t&&(n||a)))return!1;if((nt||et)&&n&&i)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Qe&&n&&t==e)return!1;switch(e){case 13:return!it||!a&&!r&&!(i&&n);case 27:return!(nt||et||it)}return(!it||!(n||r||a))&&ws(e)}function ws(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(nt||et)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return it;default:return!1}}function Is(e){if(it)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(at&&nt&&93===e)e=91;return e}function _s(e){mn.call(this),this.a=e,nn(e,"keydown",this.g,!1,this),nn(e,"click",this.h,!1,this)}function ks(e,t){var i=new Ss(t);if(gn(e,i)){i=new Es(t);try{gn(e,i)}finally{t.stopPropagation()}}}function Es(e){Gi.call(this,e.a),this.type="action"}function Ss(e){Gi.call(this,e.a),this.type="beforeaction"}function Cs(e){mn.call(this),this.a=e,e=Qe?"focusout":"blur",this.g=nn(this.a,Qe?"focusin":"focus",this,!Qe),this.h=nn(this.a,e,this,!Qe)}function Ts(e,t){mn.call(this),this.g=e||1,this.a=t||d,this.h=T(this.gc,this),this.j=R()}function As(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function xs(e){Di.call(this),this.g=e,this.a={}}O(_s,mn),_s.prototype.g=function(e){(13==e.keyCode||nt&&3==e.keyCode)&&ks(this,e)},_s.prototype.h=function(e){ks(this,e)},_s.prototype.o=function(){_s.K.o.call(this),on(this.a,"keydown",this.g,!1,this),on(this.a,"click",this.h,!1,this),delete this.a},O(Es,Gi),O(Ss,Gi),O(Cs,mn),Cs.prototype.handleEvent=function(e){var t=new Gi(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",gn(this,t)},Cs.prototype.o=function(){Cs.K.o.call(this),sn(this.g),sn(this.h),delete this.a},O(Ts,mn),(t=Ts.prototype).Ka=!1,t.aa=null,t.gc=function(){if(this.Ka){var e=R()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),gn(this,"tick"),this.Ka&&(As(this),this.start()))}},t.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=R())},t.o=function(){Ts.K.o.call(this),As(this),delete this.a},O(xs,Di);var Ns=[];function Rs(e,t,i,n){y(i)||(i&&(Ns[0]=i.toString()),i=Ns);for(var r=0;r<i.length;r++){var a=nn(t,i[r],n||e.handleEvent,!1,e.g||e);if(!a)break;e.a[a.key]=a}}function Ps(e){ae(e.a,(function(e,t){this.a.hasOwnProperty(t)&&sn(e)}),e),e.a={}}function Os(e){mn.call(this),this.a=null,this.g=e,e=Qe||et||nt&&!ht("531")&&"TEXTAREA"==e.tagName,this.h=new xs(this),Rs(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function Ls(e){null!=e.a&&(d.clearTimeout(e.a),e.a=null)}function Ds(e){return(e=new Gi(e.a)).type="input",e}function Ms(e,t){mn.call(this),e&&(this.Oa&&Hs(this),this.qa=e,this.Na=nn(this.qa,"keypress",this,t),this.Ya=nn(this.qa,"keydown",this.Jb,t,this),this.Oa=nn(this.qa,"keyup",this.Kb,t,this))}xs.prototype.o=function(){xs.K.o.call(this),Ps(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},O(Os,mn),Os.prototype.handleEvent=function(e){if("input"==e.type)Qe&&ht(10)&&0==e.keyCode&&0==e.j||(Ls(this),gn(this,Ds(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(ws(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!it;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;Qe&&229==e.keyCode&&(t=null);var i=Ds(e);Ls(this),this.a=function(e,t){if(I(e))t&&(e=T(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(0)?-1:d.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&gn(this,i)}),this)}},Os.prototype.o=function(){Os.K.o.call(this),this.h.m(),Ls(this),delete this.g},O(Ms,mn),(t=Ms.prototype).qa=null,t.Na=null,t.Ya=null,t.Oa=null,t.R=-1,t.X=-1,t.Ua=!1;var Us={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Fs={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},js=!nt||ht("525"),Bs=at&&it;function Hs(e){e.Na&&(sn(e.Na),sn(e.Ya),sn(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function Vs(e,t,i,n){Gi.call(this,n),this.type="key",this.keyCode=e,this.j=t,this.repeat=i}function Ws(e,t,i,n){this.top=e,this.right=t,this.bottom=i,this.left=n}function zs(e,t){var i=qt(e);return i.defaultView&&i.defaultView.getComputedStyle&&(e=i.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function Gs(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return Qe&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function Ks(e){var t=qt(e),i=new Ft(0,0),n=t?qt(t):document;return e==(n=!Qe||9<=Number(ut)||"CSS1Compat"==Bt(n).a.compatMode?n.documentElement:n.body)||(e=Gs(e),t=Gt(n=Bt(t).a),n=n.parentWindow||n.defaultView,t=Qe&&ht("10")&&n.pageYOffset!=t.scrollTop?new Ft(t.scrollLeft,t.scrollTop):new Ft(n.pageXOffset||t.scrollLeft,n.pageYOffset||t.scrollTop),i.a=e.left+t.a,i.g=e.top+t.g),i}(t=Ms.prototype).Jb=function(e){(nt||et)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||at&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),js&&!ys(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=Is(e.keyCode),Bs&&(this.Ua=e.altKey))},t.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},t.handleEvent=function(e){var t=e.a,i=t.altKey;if(Qe&&"keypress"==e.type)var n=this.X,r=13!=n&&27!=n?t.keyCode:0;else(nt||et)&&"keypress"==e.type?(n=this.X,r=0<=t.charCode&&63232>t.charCode&&ws(n)?t.charCode:0):Ze&&!nt?r=ws(n=this.X)?t.keyCode:0:("keypress"==e.type?(Bs&&(i=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(n=t.keyCode,r=0):(n=this.X,r=t.charCode):(n=t.keyCode||this.X,r=t.charCode||0)):(n=t.keyCode||this.X,r=t.charCode||0),at&&63==r&&224==n&&(n=191));var a=n=Is(n);n?63232<=n&&n in Us?a=Us[n]:25==n&&e.shiftKey&&(a=9):t.keyIdentifier&&t.keyIdentifier in Fs&&(a=Fs[t.keyIdentifier]),it&&js&&"keypress"==e.type&&!ys(a,this.R,e.shiftKey,e.ctrlKey,i,e.metaKey)||(e=a==this.R,this.R=a,(t=new Vs(a,r,e,t)).altKey=i,gn(this,t))},t.N=function(){return this.qa},t.o=function(){Ms.K.o.call(this),Hs(this)},O(Vs,Gi),Ws.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Ws.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Ws.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Ws.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var qs={thin:2,medium:4,thick:6};function $s(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var i=e.currentStyle?e.currentStyle[t+"Width"]:null;if(i in qs)e=qs[i];else if(/^\d+px?$/.test(i))e=parseInt(i,10);else{t=e.style.left;var n=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=i,i=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=n,e=+i}return e}function Js(){}function Ys(e){mn.call(this),this.s=e||Bt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Xs(e,t){return e.g?Vt(t,e.g||e.s.a):null}function Zs(e){return e.L||(e.L=new xs(e)),e.L}function Qs(e,t){e.Ea&&F(e.Ea,t,void 0)}function ec(e,t){var i=Jt(e,"firebaseui-textfield");t?(gs(e,"firebaseui-input-invalid"),ms(e,"firebaseui-input"),i&&gs(i,"firebaseui-textfield-invalid")):(gs(e,"firebaseui-input"),ms(e,"firebaseui-input-invalid"),i&&ms(i,"firebaseui-textfield-invalid"))}function tc(e,t,i){Fi(e,A(ji,t=new Os(t))),Rs(Zs(e),t,"input",i)}function ic(e,t,i){Fi(e,A(ji,t=new Ms(t))),Rs(Zs(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),i(e))}))}function nc(e,t,i){Fi(e,A(ji,t=new _s(t))),Rs(Zs(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),i(e)}))}function rc(e){ms(e,"firebaseui-hidden")}function ac(e,t){t&&$t(e,t),gs(e,"firebaseui-hidden")}function oc(e){return!ps(e,"firebaseui-hidden")&&"none"!=e.style.display}function sc(e){var t=(e=e||{}).email,i=e.disabled,n='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return n=e.wc?n+"Enter new email address":n+"Email",n+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+pi(null!=t?t:"")+'"'+(i?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',ui(n)}function cc(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+oi(e):t+"Next",ui(t+"</button>")}function lc(){var e=""+cc({label:hi("Sign In")});return ui(e)}function uc(){var e=""+cc({label:hi("Save")});return ui(e)}function dc(){var e=""+cc({label:hi("Continue")});return ui(e)}function hc(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+oi(e):t+"Choose password",ui(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function fc(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return ui((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function pc(){return ui('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function mc(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+oi(e):t+"Cancel",ui(t+"</button>")}function gc(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),ui(t)}function vc(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),ui(t)}function bc(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+oi(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',ui(e)}function yc(e){var t=e.content;return e=e.Ab,ui('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+pi(e):"")+'">'+oi(t)+"</dialog>")}function wc(e){var t=e.message;return ui(yc({content:fi('<div class="firebaseui-dialog-icon-wrapper"><div class="'+pi(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+oi(t)+"</div>")}))}function Ic(e){for(var t='<div class="firebaseui-list-box-actions">',i=(e=e.items).length,n=0;n<i;n++){var r=e[n];t+='<button type="button" data-listboxid="'+pi(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+pi(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+oi(r.label)+"</div></button>"}return t=""+yc({Ab:hi("firebaseui-list-box-dialog"),content:fi(t+"</div>")}),ui(t)}function _c(e){return ui((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function kc(e,t){return li((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function Ec(e){Tc(e,"upgradeElement")}function Sc(e){Tc(e,"downgradeElements")}v(Js),Js.prototype.a=0,O(Ys,mn),(t=Ys.prototype).Lb=Js.Xa(),t.N=function(){return this.g},t.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Ys.K.Za.call(this,e)},t.kb=function(){this.g=this.s.a.createElement("DIV")},t.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},t.v=function(){this.na=!0,Qs(this,(function(e){!e.na&&e.N()&&e.v()}))},t.ya=function(){Qs(this,(function(e){e.na&&e.ya()})),this.L&&Ps(this.L),this.na=!1},t.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Qs(this,(function(e){e.m()})),this.g&&Kt(this.g),this.Y=this.g=this.oa=this.Ea=null,Ys.K.o.call(this)},t.removeChild=function(e,t){if(e){var i=f(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&i?e=(null!==(e=this.oa)&&i in e?e[i]:void 0)||null:e=null,i&&e){var n=this.oa;if(i in n&&delete n[i],W(this.Ea,e),t&&(e.ya(),e.g&&Kt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,Ys.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},bc.a="firebaseui.auth.soy2.element.infoBar",wc.a="firebaseui.auth.soy2.element.progressDialog",Ic.a="firebaseui.auth.soy2.element.listBoxDialog",_c.a="firebaseui.auth.soy2.element.busyIndicator";var Cc=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Tc(e,t){e&&window.componentHandler&&window.componentHandler[t]&&Cc.forEach((function(i){ps(e,i)&&window.componentHandler[t](e),F(Ht(i,e),(function(e){window.componentHandler[t](e)}))}))}function Ac(e,t,i){if(xc.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),Ec(e),t&&nc(this,e,(function(t){var i=e.getBoundingClientRect();(t.clientX<i.left||i.left+i.width<t.clientX||t.clientY<i.top||i.top+i.height<t.clientY)&&xc.call(this)})),!i){var n=this.N().parentElement||this.N().parentNode;if(n){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,i=n.getBoundingClientRect().height,a=n.getBoundingClientRect().top-document.body.getBoundingClientRect().top,o=n.getBoundingClientRect().left-document.body.getBoundingClientRect().left,s=e.getBoundingClientRect().width,c=n.getBoundingClientRect().width;e.style.top=(a+(i-t)/2).toString()+"px",t=o+(c-s)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-s).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function xc(){var e=Nc.call(this);e&&(Sc(e),e.open&&e.close(),Kt(e),this.da&&window.removeEventListener("resize",this.da))}function Nc(){return Vt("firebaseui-id-dialog")}function Rc(){Kt(Pc.call(this))}function Pc(){return Xs(this,"firebaseui-id-info-bar")}function Oc(){return Xs(this,"firebaseui-id-dismiss-info-bar")}var Lc={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Dc(e,t,i){for(var n in zi.call(this,e,t),i)this[n]=i[n]}function Mc(e,t,i,n,r){Ys.call(this,i),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=n||null,this.A=this.ca=null,this.Z=oe(Lc),ce(this.Z,r||{})}function Uc(e){return e.N().parentElement||e.N().parentNode}function Fc(e,t,i){ic(e,t,(function(){i.focus()}))}function jc(e,t,i){ic(e,t,(function(){i()}))}function Bc(e,t,i){t=(e=e||{}).Va;var n=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+sc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mc(null):"")+cc(null)+'</div></div><div class="firebaseui-card-footer">'+(n?vc(i):gc(i))+"</div></form></div>",ui(e)}function Hc(e,t,i){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+sc(e)+fc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pc()+'</div><div class="firebaseui-form-actions">'+lc()+'</div></div><div class="firebaseui-card-footer">'+(t?vc(i):gc(i))+"</div></form></div>",ui(e)}function Vc(e,t,i){var n=(e=e||{}).Tb;t=e.Ta;var r=e.ia,a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+sc(e);return n?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+pi(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=ui(e)):e="",i=a+e+hc(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mc(null):"")+uc()+'</div></div><div class="firebaseui-card-footer">'+(r?vc(i):gc(i))+"</div></form></div>",ui(i)}function Wc(e,t,i){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+sc(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?mc(null):"")+cc({label:hi("Send")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(e)}function zc(e,t,i){t=e.G;var n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+oi(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(n+='<div class="firebaseui-form-actions">'+cc({label:hi("Done")})+"</div>"),n+='</div><div class="firebaseui-card-footer">'+gc(i)+"</div></div>",ui(n)}function Gc(e,t,i){return ui('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+_c(null)+"</div></div>")}function Kc(e,t,i){return ui('<div class="firebaseui-container firebaseui-id-page-spinner">'+_c({tb:!0})+"</div>")}function qc(){return ui('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function $c(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+oi(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+ui('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+mc({label:hi("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(t)}function Jc(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+ui('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+mc({label:hi("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(e)}function Yc(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+sc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc(null)+cc(null)+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(e)}function Xc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc({label:hi("Dismiss")})+"</div></div></div>";return ui(e)}function Zc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc({label:hi("Dismiss")})+"</div></div></div>";return ui(e)}function Qc(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+oi(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+fc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pc()+'</div><div class="firebaseui-form-actions">'+lc()+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(t)}function el(e,t,i){var n=e.email;return t="",e=hi(e=""+kc(e,i)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(n="You’ve already used <strong>"+oi(n)+"</strong>. You can connect your <strong>"+oi(e)+"</strong> account with <strong>"+oi(n)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+oi(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+lc()+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(t)}function tl(e,t,i){t="";var n=""+kc(e,i);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+oi(n=hi(n))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(n="If you still want to connect your <strong>"+oi(n)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+dc()+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(t)}function il(e,t,i){var n=e.email;return t="",e=hi(e=""+kc(e,i)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(n="You’ve already used <strong>"+oi(n)+"</strong>. Sign in with "+oi(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc({label:hi("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(t)}function nl(e,t,i){var n=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return n?r+=n="<strong>"+oi(n)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+oi(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+mc({label:hi("Back")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(r)}function rl(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+oi(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc(null)+cc({label:hi("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(t)}function al(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+oi(e.email)+"</strong></p>")+hc(function(e){function t(){}var i={label:hi("New password")};for(var n in t.prototype=e,e=new t,i)e[n]=i[n];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc()+"</div></div></form></div>",ui(t)}function ol(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",ui(e)}function sl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",ui(e)}function cl(e){var t=e.G,i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+oi(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></form></div>",ui(i)}function ll(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",ui(e)}function ul(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",ui(e)}function dl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",ui(e)}function hl(e){var t=e.G,i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+oi(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",ui(i)}function fl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",ui(e)}function pl(e){var t=e.factorId,i=e.phoneNumber;e=e.G;var n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)n+=t="The <strong>"+oi(t)+" "+oi(i)+"</strong> was removed as a second authentication step.";else n+="The device or app was removed as a second authentication step.";return n+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></form></div>",ui(n)}function ml(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+dc()+"</div>":"")+"</div></div>",ui(e)}function gl(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+oi(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=cc({label:hi("Retry")})),ui(e+"</div></div></div>")}function vl(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+oi(e.errorMessage)+"</p></div></div>",ui(e)}function bl(e,t,i){var n=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+oi(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(n="You originally wanted to sign in with "+oi(n))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc(null)+cc({label:hi("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form></div>",ui(t)}function yl(e,t,i){var n='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var a={ga:e[r]},o=i,s=(a=a||{}).ga,c=a,l="";switch((c=c||{}).ga.providerId){case"google.com":l+="firebaseui-idp-google";break;case"github.com":l+="firebaseui-idp-github";break;case"facebook.com":l+="firebaseui-idp-facebook";break;case"twitter.com":l+="firebaseui-idp-twitter";break;case"phone":l+="firebaseui-idp-phone";break;case"anonymous":l+="firebaseui-idp-anonymous";break;case"password":l+="firebaseui-idp-password";break;default:l+="firebaseui-idp-generic"}c=(c='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+pi(li(l))+' firebaseui-id-idp-button" data-provider-id="'+pi(s.providerId)+'" style="background-color:')+pi(gi(li((l=(l=(l=a)||{}).ga).ta?l.ta:o.wa[l.providerId]?""+o.wa[l.providerId]:0==l.providerId.indexOf("saml.")?""+o.wa.saml:0==l.providerId.indexOf("oidc.")?""+o.wa.oidc:""+o.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var u=a;l=o,u=(u=u||{}).ga,l=di(u.za?mi(u.za):l.xa[u.providerId]?mi(l.xa[u.providerId]):0==u.providerId.indexOf("saml.")?mi(l.xa.saml):0==u.providerId.indexOf("oidc.")?mi(l.xa.oidc):mi(l.xa.password)),c=c+pi(mi(l))+'"></span>',"password"==s.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?c+=oi(s.V):s.S?c+=a="Sign in with "+oi(kc(a,o)):c+="Sign in with email",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=s.S?c+oi(s.S):c+"Email",c+="</span>"):"phone"==s.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?c+=oi(s.V):s.S?c+=a="Sign in with "+oi(kc(a,o)):c+="Sign in with phone",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=s.S?c+oi(s.S):c+"Phone",c+="</span>"):"anonymous"==s.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?c+=oi(s.V):s.S?c+=a="Sign in with "+oi(kc(a,o)):c+="Continue as guest",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=s.S?c+oi(s.S):c+"Guest",c+="</span>"):(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?c+=oi(s.V):c+=l="Sign in with "+oi(kc(a,o)),c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(s.S?oi(s.S):oi(kc(a,o)))+"</span>"),n+='<li class="firebaseui-list-item">'+(s=ui(c+"</button>"))+"</li>"}return n+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vc(i)+"</div></div>",ui(n)}function wl(e,t,i){var n,r=(e=e||{}).Gb,a=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+pi(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',n=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+ui(e))+(n=r?ui('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(a?mc(null):"")+cc({label:hi("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=i.F&&i.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",i=ui(t+"</p>")):i=ui('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+gc(i),ui(n+i+"</div></form></div>")}function Il(e,t,i){var n="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+oi(t=(e=e||{}).phoneNumber)+"</a>",oi(t),t=n,i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(n=ui('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+mc(null)+cc({label:hi("Continue")})+'</div></div><div class="firebaseui-card-footer">'+gc(i)+"</div></form>",e=ui('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),ui(t+(i+e+"</div>"))}function _l(){return ui('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function kl(e,t,i){var n='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var a=e[r],o="",s=oi(a.displayName),c=a.tenantId?a.tenantId:"top-level-project";o+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+pi(c=hi(c))+' firebaseui-id-tenant-selection-button"'+(a.tenantId?'data-tenant-id="'+pi(a.tenantId)+'"':"")+'style="background-color:'+pi(gi(a.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+pi(mi(a.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?o+=oi(a.V):o+=a="Sign in to "+oi(a.displayName),n+='<li class="firebaseui-list-item">'+(o=ui(o+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+s+"</span></button>"))+"</li>"}return n+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vc(i)+"</div></div>",ui(n)}function El(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+sc(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc(null)+'</div></div><div class="firebaseui-card-footer">'+vc(i)+"</div></form></div>",ui(e)}function Sl(){return Xs(this,"firebaseui-id-submit")}function Cl(){return Xs(this,"firebaseui-id-secondary-link")}function Tl(e,t){nc(this,Sl.call(this),(function(t){e(t)}));var i=Cl.call(this);i&&t&&nc(this,i,(function(e){t(e)}))}function Al(){return Xs(this,"firebaseui-id-password")}function xl(){return Xs(this,"firebaseui-id-password-error")}function Nl(){var e=Al.call(this),t=xl.call(this);tc(this,e,(function(){oc(t)&&(ec(e,!0),rc(t))}))}function Rl(){var e=Al.call(this),t=xl.call(this);return vs(e)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,li("Enter your password").toString()),t=!1),t?vs(e):null}function Pl(e,t,i,n,r,a){Mc.call(this,Qc,{email:e},a,"passwordLinking",{F:n,D:r}),this.w=t,this.H=i}O(Dc,zi),O(Mc,Ys),(t=Mc.prototype).kb=function(){var e=ii(this.fb,this.eb,this.Z,this.s);Ec(e),this.g=e},t.v=function(){if(Mc.K.v.call(this),wn(Uc(this),new Dc("pageEnter",Uc(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;nc(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;nc(this,this.ab(),(function(){t()}))}},t.ya=function(){wn(Uc(this),new Dc("pageExit",Uc(this),{pageId:this.Ga})),Mc.K.ya.call(this)},t.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Sc(this.N()),Mc.K.o.call(this)},t.I=function(e,t,i,n){function r(){if(a.T)return null;a.Fa=!1,window.clearTimeout(a.ca),a.ca=null,a.A&&(Sc(a.A),Kt(a.A),a.A=null)}var a=this;return a.Fa?null:(function(e){e.Fa=!0;var t=ps(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=ii(_c,{tb:t},null,e.s),e.N().appendChild(e.A),Ec(e.A))}),500)}(a),e.apply(null,t).then(i,n).then(r,r))},x(Mc.prototype,{a:function(e){Rc.call(this);var t=ii(bc,{message:e},null,this.s);this.N().appendChild(t),nc(this,Oc.call(this),(function(){Kt(t)}))},yc:Rc,Ac:Pc,zc:Oc,$:function(e,t){e=ii(wc,{Ma:e,message:t},null,this.s),Ac.call(this,e)},h:xc,Cb:Nc,Cc:function(){return Xs(this,"firebaseui-tos")},bb:function(){return Xs(this,"firebaseui-tos-link")},ab:function(){return Xs(this,"firebaseui-pp-link")},Dc:function(){return Xs(this,"firebaseui-tos-list")}}),Bc.a="firebaseui.auth.soy2.page.signIn",Hc.a="firebaseui.auth.soy2.page.passwordSignIn",Vc.a="firebaseui.auth.soy2.page.passwordSignUp",Wc.a="firebaseui.auth.soy2.page.passwordRecovery",zc.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",Gc.a="firebaseui.auth.soy2.page.callback",Kc.a="firebaseui.auth.soy2.page.spinner",qc.a="firebaseui.auth.soy2.page.blank",$c.a="firebaseui.auth.soy2.page.emailLinkSignInSent",Jc.a="firebaseui.auth.soy2.page.emailNotReceived",Yc.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Xc.a="firebaseui.auth.soy2.page.differentDeviceError",Zc.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Qc.a="firebaseui.auth.soy2.page.passwordLinking",el.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",tl.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",il.a="firebaseui.auth.soy2.page.federatedLinking",nl.a="firebaseui.auth.soy2.page.unauthorizedUser",rl.a="firebaseui.auth.soy2.page.unsupportedProvider",al.a="firebaseui.auth.soy2.page.passwordReset",ol.a="firebaseui.auth.soy2.page.passwordResetSuccess",sl.a="firebaseui.auth.soy2.page.passwordResetFailure",cl.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",ll.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",ul.a="firebaseui.auth.soy2.page.emailVerificationSuccess",dl.a="firebaseui.auth.soy2.page.emailVerificationFailure",hl.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",fl.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",pl.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",ml.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",gl.a="firebaseui.auth.soy2.page.recoverableError",vl.a="firebaseui.auth.soy2.page.unrecoverableError",bl.a="firebaseui.auth.soy2.page.emailMismatch",yl.a="firebaseui.auth.soy2.page.providerSignIn",wl.a="firebaseui.auth.soy2.page.phoneSignInStart",Il.a="firebaseui.auth.soy2.page.phoneSignInFinish",_l.a="firebaseui.auth.soy2.page.signOut",kl.a="firebaseui.auth.soy2.page.selectTenant",El.a="firebaseui.auth.soy2.page.providerMatchByEmail",s(Pl,Mc),Pl.prototype.v=function(){this.P(),this.M(this.w,this.H),jc(this,this.i(),this.w),this.i().focus(),Mc.prototype.v.call(this)},Pl.prototype.o=function(){this.w=null,Mc.prototype.o.call(this)},Pl.prototype.j=function(){return vs(Xs(this,"firebaseui-id-email"))},x(Pl.prototype,{i:Al,B:xl,P:Nl,u:Rl,ea:Sl,ba:Cl,M:Tl});var Ol=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Ll(){return Xs(this,"firebaseui-id-email")}function Dl(){return Xs(this,"firebaseui-id-email-error")}function Ml(e){var t=Ll.call(this),i=Dl.call(this);tc(this,t,(function(){oc(i)&&(ec(t,!0),rc(i))})),e&&ic(this,t,(function(){e()}))}function Ul(){return J(vs(Ll.call(this))||"")}function Fl(){var e=Ll.call(this),t=Dl.call(this),i=vs(e)||"";return i?Ol.test(i)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,li("That email address isn't correct").toString()),t=!1):(ec(e,!1),ac(t,li("Enter your email address to continue").toString()),t=!1),t?J(vs(e)):null}function jl(e,t,i,n,r,a,o){Mc.call(this,Hc,{email:i,ia:!!a},o,"passwordSignIn",{F:n,D:r}),this.w=e,this.H=t}function Bl(e,t,i,n,r,a){Mc.call(this,e,t,n,r||"notice",a),this.i=i||null}function Hl(e,t,i,n,r){Bl.call(this,zc,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:i,D:n})}function Vl(e,t){Bl.call(this,ul,{G:!!e},e,t,"emailVerificationSuccess")}function Wl(e,t){Bl.call(this,dl,{G:!!e},e,t,"emailVerificationFailure")}function zl(e,t,i){Bl.call(this,hl,{email:e,G:!!t},t,i,"verifyAndChangeEmailSuccess")}function Gl(e,t){Bl.call(this,fl,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function Kl(e,t){Bl.call(this,ml,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function ql(e){Bl.call(this,_l,void 0,void 0,e,"signOut")}function $l(e,t){Bl.call(this,ol,{G:!!e},e,t,"passwordResetSuccess")}function Jl(e,t){Bl.call(this,sl,{G:!!e},e,t,"passwordResetFailure")}function Yl(e,t){Bl.call(this,ll,{G:!!e},e,t,"emailChangeRevokeFailure")}function Xl(e,t,i){Bl.call(this,gl,{errorMessage:e,zb:!!t},t,i,"recoverableError")}function Zl(e,t){Bl.call(this,vl,{errorMessage:e},void 0,t,"unrecoverableError")}function Ql(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function eu(e,t,i,n){function r(i){if(!i.name||"cancel"!=i.name){e:{var n=i.message;try{var r=((JSON.parse(n).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var a=!0;break e}}catch(e){}a=!1}if(a)i=Uc(t),t.m(),su(e,i,void 0,li("Your sign-in session has expired. Please try again.").toString());else{if(a=i&&i.message||"",i.code){if("auth/email-already-in-use"==i.code||"auth/credential-already-in-use"==i.code)return;a=nu(i)}t.a(a)}}}if(Pd(e),n)return tu(e,i),Gn();if(!i.credential)throw Error("No credential found!");if(!_d(e).currentUser&&!i.user)throw Error("User not logged in.");try{var a=function(e,t){return Dd(e),xd(e,(function(i){if(e.j&&!e.j.isAnonymous&&No(Ld(e))&&!_d(e).currentUser)return Ud(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(i)return Ud(e).then((function(){return i.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(i){if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential)throw i;return Fd(e,i,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Ud(e).then((function(){return kd(e).updateCurrentUser(t.user)})).then((function(){return t.user=kd(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,i)}catch(e){return $r(e.code||e.message,e),t.a(e.code||e.message),Gn()}return i=a.then((function(t){tu(e,t)}),r).then(void 0,r),Rd(e,a),Gn(i)}function tu(e,t){if(!t.user)throw Error("No user found");var i=Yo(Ld(e));if(Jo(Ld(e))&&i&&Zr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),i){i=Yo(Ld(e));var n=to(Ed(e))||void 0;Qa(Ja,Ed(e));var r=!1;rr()?(i&&!i(t,n)||(r=!0,Ut(window.opener.location,iu(e,n))),i||window.close()):i&&!i(t,n)||(r=!0,Ut(window.location,iu(e,n))),r||e.reset()}else{i=t.user,t=t.credential,n=Jo(Ld(e)),r=to(Ed(e))||void 0,Qa(Ja,Ed(e));var a=!1;rr()?(n&&!n(i,t,r)||(a=!0,Ut(window.opener.location,iu(e,r))),n||window.close()):n&&!n(i,t,r)||(a=!0,Ut(window.location,iu(e,r))),a||e.reset()}}function iu(e,t){if(!(e=t||Ld(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function nu(e){var t={code:e.code},i="";switch((t=t||{}).code){case"auth/email-already-in-use":i+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":i+=Pi();break;case"auth/too-many-requests":i+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":i+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":i+="That email address doesn't match an existing account";break;case"auth/weak-password":i+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":i+="The email and password you entered don't match";break;case"auth/network-request-failed":i+="A network error has occurred";break;case"auth/invalid-phone-number":i+=Ti();break;case"auth/invalid-verification-code":i+=li("Wrong code. Try again.");break;case"auth/code-expired":i+="This code is no longer valid";break;case"auth/expired-action-code":i+="This code has expired.";break;case"auth/invalid-action-code":i+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=li(i).toString())return t;try{return JSON.parse(e.message),$r("Internal error: "+e.message,void 0),xi().toString()}catch(t){return e.message}}function ru(e,t,i,n){function r(){!function(e,t){eo($a,{tenantId:e.a},t)}(new ca(e.h.tenantId||null),Ed(e)),Rd(e,t.I(T(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return Rd(e,yd(e).then((function(i){t.m(),Qa($a,Ed(e)),hs("callback",e,s,Gn(i))}),a))}),o))}function a(n){if(Qa($a,Ed(e)),!n.name||"cancel"!=n.name)switch(n=Ql(n),n.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(nu(n));break;case"auth/admin-restricted-operation":t.m(),Fo(Ld(e))?hs("handleUnauthorizedUser",e,s,null,i):hs("callback",e,s,Kn(n));break;default:t.m(),hs("callback",e,s,Kn(n))}}function o(i){Qa($a,Ed(e)),i.name&&"cancel"==i.name||($r("signInWithRedirect: "+i.code,void 0),i=nu(i),"blank"==t.Ga&&qo(Ld(e))?(t.m(),hs("providerSignIn",e,s,i)):t.a(i))}var s=Uc(t),c=function(e,t,i){var n=Ao[t]&&ea.auth[Ao[t]]?new ea.auth[Ao[t]]:0==t.indexOf("saml.")?new ea.auth.SAMLAuthProvider(t):new ea.auth.OAuthProvider(t);if(!n)throw Error("Invalid Firebase Auth provider!");var r=jo(Ld(e),t);if(n.addScope)for(var a=0;a<r.length;a++)n.addScope(r[a]);return r=Bo(Ld(e),t)||{},i&&(e=t==ea.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==ea.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Lo(Ld(e),t))&&e.Ob)&&(r[e]=i),n.setCustomParameters&&n.setCustomParameters(r),n}(e,i,n);$o(Ld(e))==os?r():Rd(e,function(e,t){return Dd(e),xd(e,(function(i){return i&&!io(Ed(e))?i.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fd(e,t)})):_d(e).signInWithPopup(t)}))}(e,c).then((function(i){t.m(),hs("callback",e,s,Gn(i))}),a))}function au(e){return 1==(e=Oo(Ld(e))).length&&e[0]==ea.auth.EmailAuthProvider.PROVIDER_ID}function ou(e){return 1==(e=Oo(Ld(e))).length&&e[0]==ea.auth.PhoneAuthProvider.PROVIDER_ID}function su(e,t,i,n){au(e)?n?hs("signIn",e,t,i,n):du(e,t,i):e&&ou(e)&&!n?hs("phoneSignInStart",e,t):e&&qo(Ld(e))&&!n?hs("federatedRedirect",e,t,i):hs("providerSignIn",e,t,n,i)}function cu(e,t,i,n){var r=Uc(t);Rd(e,t.I(T(_d(e).fetchSignInMethodsForEmail,_d(e)),[i],(function(a){t.m(),lu(e,r,a,i,n)}),(function(e){e=nu(e),t.a(e)})))}function lu(e,t,i,n,r,a){i.length||Ko(Ld(e))&&!Ko(Ld(e))?V(i,ea.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?hs("passwordSignIn",e,t,n,a):1==i.length&&i[0]===ea.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Ko(Ld(e))?hs("sendEmailLinkForSignIn",e,t,n,(function(){hs("signIn",e,t)})):hs("unsupportedProvider",e,t,n):(i=Co(i,Oo(Ld(e))))?(ro(new aa(n),Ed(e)),hs("federatedSignIn",e,t,n,i,r)):hs("unsupportedProvider",e,t,n):Uo(Ld(e))?hs("handleUnauthorizedUser",e,t,n,ea.auth.EmailAuthProvider.PROVIDER_ID):Ko(Ld(e))?hs("sendEmailLinkForSignIn",e,t,n,(function(){hs("signIn",e,t)})):hs("passwordSignUp",e,t,n,void 0,void 0,a)}function uu(e,t,i,n,r,a){var o=Uc(t);Rd(e,t.I(T(e.Ib,e),[i,a],(function(){t.m(),hs("emailLinkSignInSent",e,o,i,n,a)}),r))}function du(e,t,i){i?hs("prefilledEmailSignIn",e,t,i):hs("signIn",e,t)}function hu(){return ye(sr(),"oobCode")}function fu(){var e=ye(sr(),"continueUrl");return e?function(){Ut(window.location,e)}:null}function pu(e,t){Mc.call(this,Zc,void 0,t,"anonymousUserMismatch"),this.i=e}function mu(e){Mc.call(this,Gc,void 0,e,"callback")}function gu(e,t,i){if(i.user){var n={user:i.user,credential:i.credential,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo},r=io(Ed(e)),a=r&&r.g;if(a&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var i=0;i<e.providerData.length;i++)if(t==e.providerData[i].email)return!0;return!1}(i.user,a))!function(e,t,i){var n=Uc(t);Rd(e,Ud(e).then((function(){t.m(),hs("emailMismatch",e,n,i)}),(function(e){e.name&&"cancel"==e.name||(e=nu(e.code),t.a(e))})))}(e,t,n);else{var o=r&&r.a;o?Rd(e,i.user.linkWithCredential(o).then((function(i){n={user:i.user,credential:o,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo},vu(e,t,n)}),(function(i){bu(e,t,i)}))):vu(e,t,n)}}else i=Uc(t),t.m(),no(Ed(e)),su(e,i)}function vu(e,t,i){no(Ed(e)),eu(e,t,i)}function bu(e,t,i){var n=Uc(t);no(Ed(e)),i=nu(i),t.m(),su(e,n,void 0,i)}function yu(e,t,i,n){var r=Uc(t);Rd(e,_d(e).fetchSignInMethodsForEmail(i).then((function(a){t.m(),a.length?V(a,ea.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?hs("passwordLinking",e,r,i):1==a.length&&a[0]===ea.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?hs("emailLinkSignInLinking",e,r,i):(a=Co(a,Oo(Ld(e))))?hs("federatedLinking",e,r,i,a,n):(no(Ed(e)),hs("unsupportedProvider",e,r,i)):(no(Ed(e)),hs("passwordRecovery",e,r,i,!1,Ni().toString()))}),(function(i){bu(e,t,i)})))}function wu(e,t){Mc.call(this,Xc,void 0,t,"differentDeviceError"),this.i=e}function Iu(e,t,i,n){Mc.call(this,cl,{email:e,G:!!i},n,"emailChangeRevoke"),this.l=t,this.i=i||null}function _u(){return Xs(this,"firebaseui-id-new-password")}function ku(){return Xs(this,"firebaseui-id-password-toggle")}function Eu(){this.Ra=!this.Ra;var e=ku.call(this),t=_u.call(this);this.Ra?(t.type="text",ms(e,"firebaseui-input-toggle-off"),gs(e,"firebaseui-input-toggle-on")):(t.type="password",ms(e,"firebaseui-input-toggle-on"),gs(e,"firebaseui-input-toggle-off")),t.focus()}function Su(){return Xs(this,"firebaseui-id-new-password-error")}function Cu(){this.Ra=!1;var e=_u.call(this);e.type="password";var t=Su.call(this);tc(this,e,(function(){oc(t)&&(ec(e,!0),rc(t))}));var i=ku.call(this);ms(i,"firebaseui-input-toggle-on"),gs(i,"firebaseui-input-toggle-off"),function(e,t,i){Fi(e,A(ji,t=new Cs(t))),Rs(Zs(e),t,"focusin",i)}(this,e,(function(){ms(i,"firebaseui-input-toggle-focus"),gs(i,"firebaseui-input-toggle-blur")})),function(e,t,i){Fi(e,A(ji,t=new Cs(t))),Rs(Zs(e),t,"focusout",i)}(this,e,(function(){ms(i,"firebaseui-input-toggle-blur"),gs(i,"firebaseui-input-toggle-focus")})),nc(this,i,T(Eu,this))}function Tu(){var e=_u.call(this),t=Su.call(this);return vs(e)?(ec(e,!0),rc(t),t=!0):(ec(e,!1),ac(t,li("Enter your password").toString()),t=!1),t?vs(e):null}function Au(e,t,i){Mc.call(this,al,{email:e},i,"passwordReset"),this.l=t}function xu(e,t,i,n,r){Mc.call(this,pl,{factorId:e,phoneNumber:i||null,G:!!n},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=n||null}function Nu(e,t,i,n){"auth/weak-password"==(n&&n.code)?(e=nu(n),ec(i.i(),!1),ac(i.w(),e),i.i().focus()):(i&&i.m(),(i=new Jl).render(t),wd(e,i))}function Ru(e,t){try{var i="number"==typeof e.selectionStart}catch(e){i=!1}i?(e.selectionStart=t,e.selectionEnd=t):Qe&&!ht("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Pu(e,t,i,n,r,a){Mc.call(this,Yc,{email:i},a,"emailLinkSignInConfirmation",{F:n,D:r}),this.l=e,this.u=t}function Ou(e,t,i,n,r){Mc.call(this,tl,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:i,D:n}),this.i=t}function Lu(e){Mc.call(this,qc,void 0,e,"blank")}function Du(e,t,i,n,r){var a=new Lu,o=new Be(i),s=o.a.a.get(ze.$a)||"",c=o.a.a.get(ze.Sa)||"",l="1"===o.a.a.get(ze.Qa),u=He(o),d=o.a.a.get(ze.PROVIDER_ID)||null;o=o.a.a.get(ze.vb)||null,Od(e,o);var h=!Za(Ya,Ed(e)),f=n||function(e,t){var i=null;if(t=Za(Ya,t))try{var n=Na(e,t),r=JSON.parse(n);i=r&&r.email||null}catch(e){}return i}(c,Ed(e)),p=(n=function(e,t){var i=null;if(t=Za(Xa,t))try{var n=Na(e,t);i=JSON.parse(n)}catch(e){}return sa(i||null)}(c,Ed(e)))&&n.a;d&&p&&p.providerId!==d&&(p=null),a.render(t),wd(e,a),Rd(e,a.I((function(){var t=Gn(null);t=u&&h||h&&l?Kn(Error("anonymous-user-not-found")):function(e,t){var i=He(new Be(t));return i?(t=new Fn((function(t,n){var r=kd(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===i?t(e):e&&e.isAnonymous&&e.uid!==i?n(Error("anonymous-user-mismatch")):n(Error("anonymous-user-not-found"))}));Rd(e,r)})),Rd(e,t),t):Gn(null)}(e,i).then((function(e){if(d&&!p)throw Error("pending-credential-not-found");return e}));var n=null;return t.then((function(t){return n=t,r?null:_d(e).checkActionCode(s)})).then((function(){return n}))}),[],(function(n){f?function(e,t,i,n,r,a){var o=Uc(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",li("Signing in...").toString());var s=null;r=(a?function(e,t,i,n,r){Dd(e);var a=r||null,o=ea.auth.EmailAuthProvider.credentialWithLink(i,n);return i=a?_d(e).signInWithEmailLink(i,n).then((function(e){return e.user.linkWithCredential(a)})).then((function(){return Ud(e)})).then((function(){return Fd(e,{code:"auth/email-already-in-use"},a)})):_d(e).fetchSignInMethodsForEmail(i).then((function(i){return i.length?Fd(e,{code:"auth/email-already-in-use"},o):t.linkWithCredential(o)})),Rd(e,i),i}(e,a,i,n,r):function(e,t,i,n){Dd(e);var r,a=n||null;return t=_d(e).signInWithEmailLink(t,i).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},a)return e.user.linkWithCredential(a).then((function(e){r={user:e.user,credential:a,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Ud(e)})).then((function(){return kd(e).updateCurrentUser(r.user)})).then((function(){return r.user=kd(e).currentUser,r})),Rd(e,t),t}(e,i,n,r)).then((function(i){Qa(Xa,Ed(e)),Qa(Ya,Ed(e)),t.h(),t.$("firebaseui-icon-done",li("Signed in!").toString()),s=setTimeout((function(){t.h(),eu(e,t,i,!0)}),1e3),Rd(e,(function(){t&&(t.h(),t.m()),clearTimeout(s)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var a=nu(r=Ql(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Qa(Xa,Ed(e)),Qa(Ya,Ed(e))):"auth/invalid-email"==r.code?(a=li("The email provided does not match the current sign-in session.").toString(),hs("emailLinkConfirmation",e,o,n,Mu,null,a)):su(e,o,i,a)}})),Rd(e,r)}(e,a,f,i,p,n):l?(a.m(),hs("differentDeviceError",e,t)):(a.m(),hs("emailLinkConfirmation",e,t,i,Mu))}),(function(n){var r=void 0;if(!n||!n.name||"cancel"!=n.name)switch(a.m(),n&&n.message){case"anonymous-user-not-found":hs("differentDeviceError",e,t);break;case"anonymous-user-mismatch":hs("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":hs("emailLinkNewDeviceLinking",e,t,i,Uu);break;default:n&&(r=nu(n)),su(e,t,void 0,r)}})))}function Mu(e,t,i,n){Du(e,t,n,i,!0)}function Uu(e,t,i){Du(e,t,i)}function Fu(e,t,i,n,r,a){Mc.call(this,el,{email:e,ga:t},a,"emailLinkSignInLinking",{F:n,D:r}),this.i=i}function ju(e,t,i,n,r,a){Mc.call(this,$c,{email:e},a,"emailLinkSignInSent",{F:n,D:r}),this.u=t,this.i=i}function Bu(e,t,i,n,r,a,o){Mc.call(this,bl,{jc:e,Qb:t},o,"emailMismatch",{F:r,D:a}),this.l=i,this.i=n}function Hu(e,t,i,n,r){Mc.call(this,Jc,void 0,r,"emailNotReceived",{F:i,D:n}),this.l=e,this.i=t}function Vu(e,t,i,n,r,a){Mc.call(this,il,{email:e,ga:t},a,"federatedLinking",{F:n,D:r}),this.i=i}function Wu(e,t,i,n,r,a){Mc.call(this,Wc,{email:i,Ta:!!t},a,"passwordRecovery",{F:n,D:r}),this.l=e,this.u=t}function zu(){return Xs(this,"firebaseui-id-name")}function Gu(){return Xs(this,"firebaseui-id-name-error")}function Ku(e,t,i,n,r,a,o,s,c){Mc.call(this,Vc,{email:n,Tb:e,name:r,Ta:!!i,ia:!!s},c,"passwordSignUp",{F:a,D:o}),this.w=t,this.H=i,this.B=e}function qu(e,t){var i=Go(Ld(e)),n=t.j(),r=null;i&&(r=t.M());var a=t.P();if(n){if(i){if(!r)return void t.u().focus();r=re(r)}if(a){var o=ea.auth.EmailAuthProvider.credential(n,a);Rd(e,t.I(T(e.Yb,e),[n,a],(function(n){var a={user:n.user,credential:o,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};return i?(n=n.user.updateProfile({displayName:r}).then((function(){return eu(e,t,a)})),Rd(e,n),n):eu(e,t,a)}),(function(i){if(!i.name||"cancel"!=i.name){var r=Ql(i);switch(i=nu(r),r.code){case"auth/email-already-in-use":return function(e,t,i,n){function r(){var e=nu(n);ec(t.i(),!1),ac(t.U(),e),t.i().focus()}var a=_d(e).fetchSignInMethodsForEmail(i).then((function(n){n.length?r():(n=Uc(t),t.m(),hs("passwordRecovery",e,n,i,!1,Ni().toString()))}),(function(){r()}));return Rd(e,a),a}(e,t,n,r);case"auth/too-many-requests":i=li("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":ec(t.l(),!1),ac(t.ba(),i);break;case"auth/admin-restricted-operation":Fo(Ld(e))?(i=Uc(t),t.m(),hs("handleUnauthorizedUser",e,i,n,ea.auth.EmailAuthProvider.PROVIDER_ID)):t.a(i);break;default:$r(r="setAccountInfo: "+Pa(r),void 0),t.a(i)}}})))}else t.l().focus()}else t.i().focus()}function $u(){return Xs(this,"firebaseui-id-phone-confirmation-code")}function Ju(){return Xs(this,"firebaseui-id-phone-confirmation-code-error")}function Yu(){return Xs(this,"firebaseui-id-resend-countdown")}function Xu(e,t,i,n,r,a,o,s,c){Mc.call(this,Il,{phoneNumber:r},c,"phoneSignInFinish",{F:o,D:s}),this.jb=a,this.i=new Ts(1e3),this.B=a,this.P=e,this.l=t,this.H=i,this.M=n}s(jl,Mc),jl.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Fc(this,this.l(),this.i()),jc(this,this.i(),this.w),vs(this.l())?this.i().focus():this.l().focus(),Mc.prototype.v.call(this)},jl.prototype.o=function(){this.H=this.w=null,Mc.prototype.o.call(this)},x(jl.prototype,{l:Ll,U:Dl,P:Ml,M:Ul,j:Fl,i:Al,B:xl,ea:Nl,u:Rl,ua:Sl,pa:Cl,ba:Tl}),O(Bl,Mc),Bl.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Bl.K.v.call(this)},Bl.prototype.o=function(){this.i=null,Bl.K.o.call(this)},x(Bl.prototype,{l:Sl,w:Cl,u:Tl}),O(Hl,Bl),O(Vl,Bl),O(Wl,Bl),O(zl,Bl),O(Gl,Bl),O(Kl,Bl),O(ql,Bl),O($l,Bl),O(Jl,Bl),O(Yl,Bl),O(Xl,Bl),O(Zl,Bl),s(pu,Mc),pu.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),this.l().focus(),Mc.prototype.v.call(this)},pu.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},x(pu.prototype,{l:Cl}),ds.anonymousUserMismatch=function(e,t){var i=new pu((function(){i.m(),su(e,t)}));i.render(t),wd(e,i)},s(mu,Mc),mu.prototype.I=function(e,t,i,n){return e.apply(null,t).then(i,n)},ds.callback=function(e,t,i){var n=new mu;n.render(t),wd(e,n),i=i||yd(e),Rd(e,i.then((function(t){gu(e,n,t)}),(function(i){if((i=Ql(i))&&("auth/account-exists-with-different-credential"==i.code||"auth/email-already-in-use"==i.code)&&i.email&&i.credential)ro(new aa(i.email,i.credential),Ed(e)),yu(e,n,i.email);else if(i&&"auth/user-cancelled"==i.code){var r=io(Ed(e)),a=nu(i);r&&r.a?yu(e,n,r.g,a):r?cu(e,n,r.g,a):bu(e,n,i)}else i&&"auth/credential-already-in-use"==i.code||(i&&"auth/operation-not-supported-in-this-environment"==i.code&&au(e)?gu(e,n,{user:null,credential:null}):i&&"auth/admin-restricted-operation"==i.code&&Fo(Ld(e))?(n.m(),no(Ed(e)),hs("handleUnauthorizedUser",e,t,null,null)):bu(e,n,i))})))},s(wu,Mc),wu.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),this.l().focus(),Mc.prototype.v.call(this)},wu.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},x(wu.prototype,{l:Cl}),ds.differentDeviceError=function(e,t){var i=new wu((function(){i.m(),su(e,t)}));i.render(t),wd(e,i)},s(Iu,Mc),Iu.prototype.v=function(){var e=this;nc(this,Xs(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Mc.prototype.v.call(this)},Iu.prototype.o=function(){this.l=this.i=null,Mc.prototype.o.call(this)},x(Iu.prototype,{u:Sl,B:Cl,w:Tl}),s(Au,Mc),Au.prototype.v=function(){this.H(),this.B(this.l),jc(this,this.i(),this.l),this.i().focus(),Mc.prototype.v.call(this)},Au.prototype.o=function(){this.l=null,Mc.prototype.o.call(this)},x(Au.prototype,{i:_u,w:Su,M:ku,H:Cu,u:Tu,U:Sl,P:Cl,B:Tl}),s(xu,Mc),xu.prototype.v=function(){var e=this;nc(this,Xs(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Mc.prototype.v.call(this)},xu.prototype.o=function(){this.l=this.i=null,Mc.prototype.o.call(this)},x(xu.prototype,{u:Sl,B:Cl,w:Tl}),ds.passwordReset=function(e,t,i,n){Rd(e,_d(e).verifyPasswordResetCode(i).then((function(r){var a=new Au(r,(function(){!function(e,t,i,n,r){var a=i.u();a&&Rd(e,i.I(T(_d(e).confirmPasswordReset,_d(e)),[n,a],(function(){i.m();var n=new $l(r);n.render(t),wd(e,n)}),(function(n){Nu(e,t,i,n)})))}(e,t,a,i,n)}));a.render(t),wd(e,a)}),(function(){Nu(e,t)})))},ds.emailChangeRevocation=function(e,t,i){var n=null;Rd(e,_d(e).checkActionCode(i).then((function(t){return n=t.data.email,_d(e).applyActionCode(i)})).then((function(){!function(e,t,i){var n=new Iu(i,(function(){Rd(e,n.I(T(_d(e).sendPasswordResetEmail,_d(e)),[i],(function(){n.m(),(n=new Hl(i,void 0,Wo(Ld(e)),zo(Ld(e)))).render(t),wd(e,n)}),(function(){n.a(Ai().toString())})))}));n.render(t),wd(e,n)}(e,t,n)}),(function(){var i=new Yl;i.render(t),wd(e,i)})))},ds.emailVerification=function(e,t,i,n){Rd(e,_d(e).applyActionCode(i).then((function(){var i=new Vl(n);i.render(t),wd(e,i)}),(function(){var i=new Wl;i.render(t),wd(e,i)})))},ds.revertSecondFactorAddition=function(e,t,i){var n=null,r=null;Rd(e,_d(e).checkActionCode(i).then((function(t){return n=t.data.email,r=t.data.multiFactorInfo,_d(e).applyActionCode(i)})).then((function(){!function(e,t,i,n){var r=new xu(n.factorId,(function(){r.I(T(_d(e).sendPasswordResetEmail,_d(e)),[i],(function(){r.m(),(r=new Hl(i,void 0,Wo(Ld(e)),zo(Ld(e)))).render(t),wd(e,r)}),(function(){r.a(Ai().toString())}))}),n.phoneNumber);r.render(t),wd(e,r)}(e,t,n,r)}),(function(){var i=new Kl;i.render(t),wd(e,i)})))},ds.verifyAndChangeEmail=function(e,t,i,n){var r=null;Rd(e,_d(e).checkActionCode(i).then((function(t){return r=t.data.email,_d(e).applyActionCode(i)})).then((function(){var i=new zl(r,n);i.render(t),wd(e,i)}),(function(){var i=new Gl;i.render(t),wd(e,i)})))},s(Pu,Mc),Pu.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Ru(this.i(),(this.i().value||"").length),Mc.prototype.v.call(this)},Pu.prototype.o=function(){this.u=this.l=null,Mc.prototype.o.call(this)},x(Pu.prototype,{i:Ll,M:Dl,w:Ml,H:Ul,j:Fl,U:Sl,P:Cl,B:Tl}),ds.emailLinkConfirmation=function(e,t,i,n,r,a){var o=new Pu((function(){var r=o.j();r?(o.m(),n(e,t,r,i)):o.i().focus()}),(function(){o.m(),su(e,t,r||void 0)}),r||void 0,Wo(Ld(e)),zo(Ld(e)));o.render(t),wd(e,o),a&&o.a(a)},s(Ou,Mc),Ou.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},Ou.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},x(Ou.prototype,{l:Sl,u:Tl}),ds.emailLinkNewDeviceLinking=function(e,t,i,n){var r=new Be(i);if(i=r.a.a.get(ze.PROVIDER_ID)||null,Ve(r,null),i){var a=new Ou(Lo(Ld(e),i),(function(){a.m(),n(e,t,r.toString())}),Wo(Ld(e)),zo(Ld(e)));a.render(t),wd(e,a)}else su(e,t)},s(Lu,Mc),ds.emailLinkSignInCallback=Du,s(Fu,Mc),Fu.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},Fu.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},x(Fu.prototype,{l:Sl,u:Tl}),ds.emailLinkSignInLinking=function(e,t,i){var n=io(Ed(e));if(no(Ed(e)),n){var r=n.a.providerId,a=new Fu(i,Lo(Ld(e),r),(function(){!function(e,t,i,n){var r=Uc(t);uu(e,t,i,(function(){su(e,r,i)}),(function(n){if(!n.name||"cancel"!=n.name){var a=nu(n);n&&"auth/network-request-failed"==n.code?t.a(a):(t.m(),su(e,r,i,a))}}),n)}(e,a,i,n)}),Wo(Ld(e)),zo(Ld(e)));a.render(t),wd(e,a)}else su(e,t)},s(ju,Mc),ju.prototype.v=function(){var e=this;nc(this,this.l(),(function(){e.i()})),nc(this,Xs(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Mc.prototype.v.call(this)},ju.prototype.o=function(){this.i=this.u=null,Mc.prototype.o.call(this)},x(ju.prototype,{l:Cl}),ds.emailLinkSignInSent=function(e,t,i,n,r){var a=new ju(i,(function(){a.m(),hs("emailNotReceived",e,t,i,n,r)}),(function(){a.m(),n()}),Wo(Ld(e)),zo(Ld(e)));a.render(t),wd(e,a)},s(Bu,Mc),Bu.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Mc.prototype.v.call(this)},Bu.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},x(Bu.prototype,{u:Sl,B:Cl,w:Tl}),ds.emailMismatch=function(e,t,i){var n=io(Ed(e));if(n){var r=new Bu(i.user.email,n.g,(function(){var t=r;no(Ed(e)),eu(e,t,i)}),(function(){var t=i.credential.providerId,a=Uc(r);r.m(),n.a?hs("federatedLinking",e,a,n.g,t):hs("federatedSignIn",e,a,n.g,t)}),Wo(Ld(e)),zo(Ld(e)));r.render(t),wd(e,r)}else su(e,t)},s(Hu,Mc),Hu.prototype.v=function(){var e=this;nc(this,this.u(),(function(){e.i()})),nc(this,this.Da(),(function(){e.l()})),this.u().focus(),Mc.prototype.v.call(this)},Hu.prototype.Da=function(){return Xs(this,"firebaseui-id-resend-email-link")},Hu.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},x(Hu.prototype,{u:Cl}),ds.emailNotReceived=function(e,t,i,n,r){var a=new Hu((function(){uu(e,a,i,n,(function(e){e=nu(e),a.a(e)}),r)}),(function(){a.m(),su(e,t,i)}),Wo(Ld(e)),zo(Ld(e)));a.render(t),wd(e,a)},s(Vu,Mc),Vu.prototype.v=function(){this.u(this.i),this.l().focus(),Mc.prototype.v.call(this)},Vu.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},x(Vu.prototype,{l:Sl,u:Tl}),ds.federatedLinking=function(e,t,i,n,r){var a=io(Ed(e));if(a&&a.a){var o=new Vu(i,Lo(Ld(e),n),(function(){ru(e,o,n,i)}),Wo(Ld(e)),zo(Ld(e)));o.render(t),wd(e,o),r&&o.a(r)}else su(e,t)},ds.federatedRedirect=function(e,t,i){var n=new Lu;n.render(t),wd(e,n),ru(e,n,t=Oo(Ld(e))[0],i)},ds.federatedSignIn=function(e,t,i,n,r){var a=new Vu(i,Lo(Ld(e),n),(function(){ru(e,a,n,i)}),Wo(Ld(e)),zo(Ld(e)));a.render(t),wd(e,a),r&&a.a(r)},ds.passwordLinking=function(e,t,i){var n=io(Ed(e));no(Ed(e));var r=n&&n.a;if(r){var a=new Pl(i,(function(){!function(e,t,i,n){var r=t.u();r?Rd(e,t.I(T(e.Xb,e),[i,r],(function(i){return i=i.user.linkWithCredential(n).then((function(i){return eu(e,t,{user:i.user,credential:n,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo})})),Rd(e,i),i}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":ec(t.i(),!1),ac(t.B(),nu(e));break;case"auth/too-many-requests":t.a(nu(e));break;default:$r("signInWithEmailAndPassword: "+e.message,void 0),t.a(nu(e))}}))):t.i().focus()}(e,a,i,r)}),(function(){a.m(),hs("passwordRecovery",e,t,i)}),Wo(Ld(e)),zo(Ld(e)));a.render(t),wd(e,a)}else su(e,t)},s(Wu,Mc),Wu.prototype.v=function(){this.B(),this.H(this.l,this.u),vs(this.i())||this.i().focus(),jc(this,this.i(),this.l),Mc.prototype.v.call(this)},Wu.prototype.o=function(){this.u=this.l=null,Mc.prototype.o.call(this)},x(Wu.prototype,{i:Ll,w:Dl,B:Ml,M:Ul,j:Fl,U:Sl,P:Cl,H:Tl}),ds.passwordRecovery=function(e,t,i,n,r){var a=new Wu((function(){!function(e,t){var i=t.j();if(i){var n=Uc(t);Rd(e,t.I(T(_d(e).sendPasswordResetEmail,_d(e)),[i],(function(){t.m();var r=new Hl(i,(function(){r.m(),su(e,n)}),Wo(Ld(e)),zo(Ld(e)));r.render(n),wd(e,r)}),(function(e){ec(t.i(),!1),ac(t.w(),nu(e))})))}else t.i().focus()}(e,a)}),n?void 0:function(){a.m(),su(e,t)},i,Wo(Ld(e)),zo(Ld(e)));a.render(t),wd(e,a),r&&a.a(r)},ds.passwordSignIn=function(e,t,i,n){var r=new jl((function(){!function(e,t){var i=t.j(),n=t.u();if(i)if(n){var r=ea.auth.EmailAuthProvider.credential(i,n);Rd(e,t.I(T(e.bc,e),[i,n],(function(i){return eu(e,t,{user:i.user,credential:r,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":ec(t.l(),!1),ac(t.U(),nu(e));break;case"auth/too-many-requests":case"auth/wrong-password":ec(t.i(),!1),ac(t.B(),nu(e));break;default:$r("verifyPassword: "+e.message,void 0),t.a(nu(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var i=r.M();r.m(),hs("passwordRecovery",e,t,i)}),i,Wo(Ld(e)),zo(Ld(e)),n);r.render(t),wd(e,r)},s(Ku,Mc),Ku.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Fc(this,this.i(),this.u()),Fc(this,this.u(),this.l())):Fc(this,this.i(),this.l()),this.w&&jc(this,this.l(),this.w),vs(this.i())?this.B&&!vs(this.u())?this.u().focus():this.l().focus():this.i().focus(),Mc.prototype.v.call(this)},Ku.prototype.o=function(){this.H=this.w=null,Mc.prototype.o.call(this)},x(Ku.prototype,{i:Ll,U:Dl,ea:Ml,jb:Ul,j:Fl,u:zu,Bc:Gu,Ja:function(){var e=zu.call(this),t=Gu.call(this);tc(this,e,(function(){oc(t)&&(ec(e,!0),rc(t))}))},M:function(){var e=zu.call(this),t=Gu.call(this),i=vs(e);return ec(e,i=!/^[\s\xa0]*$/.test(null==i?"":String(i))),i?(rc(t),t=!0):(ac(t,li("Enter your account name").toString()),t=!1),t?J(vs(e)):null},l:_u,ba:Su,lb:ku,ua:Cu,P:Tu,Nb:Sl,Mb:Cl,pa:Tl}),ds.passwordSignUp=function(e,t,i,n,r,a){var o=new Ku(Go(Ld(e)),(function(){qu(e,o)}),r?void 0:function(){o.m(),su(e,t)},i,n,Wo(Ld(e)),zo(Ld(e)),a);o.render(t),wd(e,o)},s(Xu,Mc),Xu.prototype.v=function(){var e=this;this.U(this.jb),nn(this.i,"tick",this.w,!1,this),this.i.start(),nc(this,Xs(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),nc(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Mc.prototype.v.call(this)},Xu.prototype.o=function(){this.M=this.H=this.l=this.P=null,As(this.i),on(this.i,"tick",this.w),this.i=null,Mc.prototype.o.call(this)},Xu.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(As(this.i),on(this.i,"tick",this.w),this.ua(),this.lb())},x(Xu.prototype,{u:$u,pa:Ju,Ja:function(e){var t=$u.call(this),i=Ju.call(this);tc(this,t,(function(){oc(i)&&(ec(t,!0),rc(i))})),e&&ic(this,t,(function(){e()}))},ba:function(){var e=J(vs($u.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:Yu,U:function(e){$t(Yu.call(this),li("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){rc(this.Fb())},Da:function(){return Xs(this,"firebaseui-id-resend-link")},lb:function(){ac(this.Da())},Nb:Sl,Mb:Cl,ea:Tl}),ds.phoneSignInFinish=function(e,t,i,n,r,a){var o=new Xu((function(){o.m(),hs("phoneSignInStart",e,t,i)}),(function(){!function(e,t,i,n){function r(e){t.u().focus(),ec(t.u(),!1),ac(t.pa(),e)}var a=t.ba();a?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",li("Verifying...").toString()),Rd(e,t.I(T(n.confirm,n),[a],(function(i){t.h(),t.$("firebaseui-icon-done",li("Verified!").toString());var n=setTimeout((function(){t.h(),t.m();var n={user:kd(e).currentUser,credential:null,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};eu(e,t,n,!0)}),1e3);Rd(e,(function(){t&&t.h(),clearTimeout(n)}))}),(function(n){if(n.name&&"cancel"==n.name)t.h();else{var a=Ql(n);switch(n=nu(a),a.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":a=Uc(t),t.h(),t.m(),hs("phoneSignInStart",e,a,i,n);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(n);break;default:t.h(),t.a(n)}}})))):r(li("Wrong code. Try again.").toString())}(e,o,i,r)}),(function(){o.m(),su(e,t)}),(function(){o.m(),hs("phoneSignInStart",e,t,i)}),So(i),n,Wo(Ld(e)),zo(Ld(e)));o.render(t),wd(e,o),a&&o.a(a)};var Zu=!(Qe||qe("Safari")&&!($e()||qe("Coast")||qe("Opera")||qe("Edge")||qe("Firefox")||qe("FxiOS")||qe("Silk")||qe("Android")));function Qu(e,t){return/-[a-z]/.test(t)?null:Zu&&e.dataset?!qe("Android")||$e()||qe("Firefox")||qe("FxiOS")||qe("Opera")||qe("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function ed(e,t,i){var n=this;e=ii(Ic,{items:e},null,this.s),Ac.call(this,e,!0,!0),i&&(i=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var i=0;i<e.length;i++)if(Qu(e[i],"listboxid")===t)return e[i];return null}(e,i))&&(i.focus(),function(e,t){var i=(t=t||Gt(document))||Gt(document),n=Ks(e),r=Ks(i);if(!Qe||9<=Number(ut)){o=zs(i,"borderLeftWidth");var a=zs(i,"borderRightWidth");s=zs(i,"borderTopWidth"),c=zs(i,"borderBottomWidth"),a=new Ws(parseFloat(s),parseFloat(a),parseFloat(c),parseFloat(o))}else{var o=$s(i,"borderLeft");a=$s(i,"borderRight");var s=$s(i,"borderTop"),c=$s(i,"borderBottom");a=new Ws(s,a,c,o)}i==Gt(document)?(o=n.a-i.scrollLeft,n=n.g-i.scrollTop,!Qe||10<=Number(ut)||(o+=a.left,n+=a.top)):(o=n.a-r.a-a.left,n=n.g-r.g-a.top),r=e.offsetWidth,a=e.offsetHeight,s=nt&&!r&&!a,e=h(r)&&!s||!e.getBoundingClientRect?new jt(r,a):new jt((e=Gs(e)).right-e.left,e.bottom-e.top),r=i.clientHeight-e.height,a=i.scrollLeft,s=i.scrollTop,i=new Ft(a+=Math.min(o,Math.max(o-(i.clientWidth-e.width),0)),s+=Math.min(n,Math.max(n-r,0))),t.scrollLeft=i.a,t.scrollTop=i.g}(i,e)),nc(this,e,(function(e){(e=(e=Jt(e.target,"firebaseui-id-list-box-dialog-button"))&&Qu(e,"listboxid"))&&(xc.call(n),t(e))}))}function td(){return Xs(this,"firebaseui-id-phone-number")}function id(){return Xs(this,"firebaseui-id-country-selector")}function nd(){return Xs(this,"firebaseui-id-phone-number-error")}function rd(e,t){var i=e.a,n=ad("1-US-0",i),r=null;if(!(r=t&&ad(t,i)?t:n?"1-US-0":0<i.length?i[0].c:null))throw Error("No available default country");cd.call(this,r,e)}function ad(e,t){return!(!(e=vo(e))||!V(t,e))}function od(e){return"firebaseui-flag-"+e.f}function sd(e){var t=this;ed.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+od(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(i){cd.call(t,i,e,!0),t.O().focus()}),this.Ba)}function cd(e,t,i){var n=vo(e);n&&(i&&((t=go(t,i=J(vs(td.call(this))||""))).length&&t[0].b!=n.b&&(i="+"+n.b+i.substr(t[0].b.length+1),bs(td.call(this),i))),t=vo(this.Ba),this.Ba=e,e=Xs(this,"firebaseui-id-country-selector-flag"),t&&gs(e,od(t)),ms(e,od(n)),$t(Xs(this,"firebaseui-id-country-selector-code"),"‎+"+n.b))}function ld(e,t,i,n,r,a,o,s,c,l){Mc.call(this,wl,{Gb:t,Aa:c||null,Va:!!i,ia:!!a},l,"phoneSignInStart",{F:n,D:r}),this.H=s||null,this.M=t,this.l=e,this.w=i||null,this.pa=o||null}function ud(e,t,i,n){try{var r=t.U(ts)}catch(e){return}r?Qo?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",li("Verifying...").toString()),Rd(e,t.I(T(e.cc,e),[So(r),i],(function(i){var n=Uc(t);t.$("firebaseui-icon-done",li("Code sent!").toString());var a=setTimeout((function(){t.h(),t.m(),hs("phoneSignInFinish",e,n,r,15,i)}),1e3);Rd(e,(function(){t&&t.h(),clearTimeout(a)}))}),(function(i){if(t.h(),!i.name||"cancel"!=i.name){grecaptcha.reset(is),Qo=null;var n=i&&i.message||"";if(i.code)switch(i.code){case"auth/too-many-requests":n=li("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void ac(t.B(),Ti().toString());case"auth/admin-restricted-operation":if(Fo(Ld(e)))return i=Uc(t),t.m(),void hs("handleUnauthorizedUser",e,i,So(r),ea.auth.PhoneAuthProvider.PROVIDER_ID);n=nu(i);break;default:n=nu(i)}t.a(n)}})))):es?ac(t.u(),li("Solve the reCAPTCHA").toString()):!es&&n&&t.i().click():(t.O().focus(),ac(t.B(),Ti().toString()))}function dd(e,t,i,n,r){Mc.call(this,yl,{Sb:t},r,"providerSignIn",{F:i,D:n}),this.i=e}function hd(e,t,i,n,r,a,o){Mc.call(this,Bc,{email:i,Va:!!t,ia:!!a},o,"signIn",{F:n,D:r}),this.i=e,this.u=t}function fd(e,t,i,n,r,a,o){Mc.call(this,nl,{kc:e,yb:i,Eb:!!n},o,"unauthorizedUser",{F:r,D:a}),this.l=t,this.i=n}function pd(e,t,i,n,r,a){Mc.call(this,rl,{email:e},a,"unsupportedProvider",{F:n,D:r}),this.l=t,this.i=i}function md(e,t){this.$=!1;var i=bd(t);if(vd[i])throw Error('An AuthUI instance already exists for the key "'+i+'"');vd[i]=this,this.a=e,this.u=null,this.Y=!1,gd(this.a),this.h=ea.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(i=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===i?"":":"+i),e.options)),gd(this.h),this.h.setPersistence&&this.h.setPersistence(ea.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new xo,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Sr.Xa(),this.j=this.C=null,this.da=this.A=!1}function gd(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}s(ld,Mc),ld.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Fc(this,this.O(),this.i()),jc(this,this.i(),this.l),this.O().focus(),Ru(this.O(),(this.O().value||"").length),Mc.prototype.v.call(this)},ld.prototype.o=function(){this.w=this.l=null,Mc.prototype.o.call(this)},x(ld.prototype,{Cb:Nc,O:td,B:nd,ea:function(e,t,i){var n=this,r=td.call(this),a=id.call(this),o=nd.call(this),s=e||_o,c=s.a;if(0==c.length)throw Error("No available countries provided.");rd.call(n,s,t),nc(this,a,(function(){sd.call(n,s)})),tc(this,r,(function(){oc(o)&&(ec(r,!0),rc(o));var e=J(vs(r)||""),t=vo(this.Ba),i=go(s,e);e=ad("1-US-0",c),i.length&&i[0].b!=t.b&&(t=i[0],cd.call(n,"1"==t.b&&e?"1-US-0":t.c,s))})),i&&ic(this,r,(function(){i()}))},U:function(e){var t=J(vs(td.call(this))||""),i=(e=e||_o).a,n=go(_o,t);if(n.length&&!V(i,n[0]))throw bs(td.call(this)),td.call(this).focus(),ac(nd.call(this),li("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return i=vo(this.Ba),n.length&&n[0].b!=i.b&&cd.call(this,n[0].c,e),n.length&&(t=t.substr(n[0].b.length+1)),t?new ko(this.Ba,t):null},Ja:id,ba:function(){return Xs(this,"firebaseui-recaptcha-container")},u:function(){return Xs(this,"firebaseui-id-recaptcha-error")},i:Sl,ua:Cl,P:Tl}),ds.phoneSignInStart=function(e,t,i,n){var r=function(e){var t=null;if(Ro(e).forEach((function(e){e.provider==ea.auth.PhoneAuthProvider.PROVIDER_ID&&_(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=oe(e.recaptchaParameters))})),t){var i=[];us.forEach((function(e){void 0!==t[e]&&(i.push(e),delete t[e])})),i.length&&Zr('The following provided "recaptchaParameters" keys are not allowed: '+i.join(", "))}return t}(Ld(e))||{};Qo=null,es=!(r&&"invisible"===r.size);var a=ou(e),o=function(e){var t=(e=Po(e,ea.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&bo(t);var i=null;return e&&"string"==typeof e.loginHint&&(i=Eo(e.loginHint)),t&&t[0]||i&&vo(i.a)||null}(Ld(e)),s=a?function(e){var t=null;return(e=Po(e,ea.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Eo(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(Ld(e)):null;o=i&&i.a||o&&o.c||null,i=i&&i.Aa||s,(s=Ho(Ld(e)))&&wo(s),ts=s?new mo(Ho(Ld(e))):_o;var c=new ld((function(t){ud(e,c,l,!(!t||!t.keyCode))}),es,a?null:function(){l.clear(),c.m(),su(e,t)},Wo(Ld(e)),zo(Ld(e)),a,ts,o,i);c.render(t),wd(e,c),n&&c.a(n),r.callback=function(t){c.u()&&rc(c.u()),Qo=t,es||ud(e,c,l)},r["expired-callback"]=function(){Qo=null};var l=new ea.auth.RecaptchaVerifier(es?c.ba():c.i(),r,kd(e).app);Rd(e,c.I(T(l.render,l),[],(function(e){is=e}),(function(i){i.name&&"cancel"==i.name||(i=nu(i),c.m(),su(e,t,void 0,i))})))},ds.prefilledEmailSignIn=function(e,t,i){var n=new Lu;n.render(t),wd(e,n),Rd(e,n.I(T(_d(e).fetchSignInMethodsForEmail,_d(e)),[i],(function(r){n.m();var a=!(!au(e)||!Sd(e));lu(e,t,r,i,void 0,a)}),(function(r){r=nu(r),n.m(),hs("signIn",e,t,i,r)})))},s(dd,Mc),dd.prototype.v=function(){this.l(this.i),Mc.prototype.v.call(this)},dd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},x(dd.prototype,{l:function(e){function t(t){e(t)}for(var i=this.g?Ht("firebaseui-id-idp-button",this.g||this.s.a):[],n=0;n<i.length;n++){var r=i[n];nc(this,r,A(t,Qu(r,"providerId")))}}}),ds.providerSignIn=function(e,t,i,n){var r=new dd((function(i){i==ea.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),du(e,t,n)):i==ea.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),hs("phoneSignInStart",e,t)):"anonymous"==i?function(e,t){Rd(e,t.I(T(e.$b,e),[],(function(i){return t.m(),eu(e,t,i,!0)}),(function(e){e.name&&"cancel"==e.name||($r("ContinueAsGuest: "+e.code,void 0),e=nu(e),t.a(e))})))}(e,r):ru(e,r,i,n),Dd(e),e.l.cancel()}),Do(Ld(e)),Wo(Ld(e)),zo(Ld(e)));r.render(t),wd(e,r),i&&r.a(i),function(e){Dd(e);try{Cr(e.l,Mo(Ld(e)),function(e){var t;return Dd(e),(t=e.Z)||(e=Bo(e=Ld(e),ea.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,i){if(i&&i.credential&&i.clientId===Mo(Ld(e))){if(jo(Ld(e),ea.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var n=JSON.parse(atob(i.credential.split(".")[1])).email}catch(r){}return ru(e,t,ea.auth.GoogleAuthProvider.PROVIDER_ID,n),Gn(!0)}return r=ea.auth.GoogleAuthProvider.credential(i.credential),a=!1,r=t.I(T(e.ac,e),[r],(function(i){var n=Uc(t);t.m(),hs("callback",e,n,Gn(i)),a=!0}),(function(i){if(!(i.name&&"cancel"==i.name||i&&"auth/credential-already-in-use"==i.code))if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential){var n=Uc(t);t.m(),hs("callback",e,n,Kn(i))}else i&&"auth/admin-restricted-operation"==i.code&&Fo(Ld(e))?(i=Uc(t),t.m(),hs("handleUnauthorizedUser",e,i,null,ea.auth.GoogleAuthProvider.PROVIDER_ID)):(i=nu(i),t.a(i))})),Rd(e,r),r.then((function(){return a}),(function(){return!1}))}var r,a;return i&&t.a(li("The selected credential for the authentication provider is not supported!").toString()),Gn(!1)}(e,e.g,t)}))}catch(e){}}(e)},ds.sendEmailLinkForSignIn=function(e,t,i,n){var r=new mu;r.render(t),wd(e,r),uu(e,r,i,n,(function(n){r.m(),n&&"auth/admin-restricted-operation"==n.code&&Fo(Ld(e))?hs("handleUnauthorizedUser",e,t,i,ea.auth.EmailAuthProvider.PROVIDER_ID):(n=nu(n),hs("signIn",e,t,i,n))}))},s(hd,Mc),hd.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Ru(this.l(),(this.l().value||"").length),Mc.prototype.v.call(this)},hd.prototype.o=function(){this.u=this.i=null,Mc.prototype.o.call(this)},x(hd.prototype,{l:Ll,M:Dl,w:Ml,H:Ul,j:Fl,U:Sl,P:Cl,B:Tl}),ds.signIn=function(e,t,i,n){var r=au(e),a=new hd((function(){var t=a,i=t.j()||"";i&&cu(e,t,i)}),r?null:function(){a.m(),su(e,t,i)},i,Wo(Ld(e)),zo(Ld(e)),r);a.render(t),wd(e,a),n&&a.a(n)},s(fd,Mc),fd.prototype.v=function(){var e=this,t=Xs(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&nc(this,t,(function(){e.i()})),nc(this,this.u(),(function(){e.l()})),this.u().focus(),Mc.prototype.v.call(this)},fd.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},x(fd.prototype,{u:Cl}),ds.handleUnauthorizedUser=function(e,t,i,n){function r(){su(e,t)}n===ea.auth.EmailAuthProvider.PROVIDER_ID?r=function(){du(e,t)}:n===ea.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){hs("phoneSignInStart",e,t)});var a=null,o=null;n===ea.auth.EmailAuthProvider.PROVIDER_ID&&Uo(Ld(e))?(a=function(e){return(e=Po(e,ea.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(Ld(e)),o=function(e){if((e=Po(e,ea.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){ar(t)}}return null}(Ld(e))):Fo(Ld(e))&&(a=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(Ld(e)),o=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){ar(t)}}return null}(Ld(e)));var s=new fd(i,(function(){s.m(),r()}),a,o,Wo(Ld(e)),zo(Ld(e)));s.render(t),wd(e,s)},s(pd,Mc),pd.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Mc.prototype.v.call(this)},pd.prototype.o=function(){this.i=this.l=null,Mc.prototype.o.call(this)},x(pd.prototype,{u:Sl,B:Cl,w:Tl}),ds.unsupportedProvider=function(e,t,i){var n=new pd(i,(function(){n.m(),hs("passwordRecovery",e,t,i)}),(function(){n.m(),su(e,t,i)}),Wo(Ld(e)),zo(Ld(e)));n.render(t),wd(e,n)};var vd={};function bd(e){return e||"[DEFAULT]"}function yd(e){return Dd(e),e.i||(e.i=xd(e,(function(t){return t&&!io(Ed(e))?Gn(kd(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Fd(e,t)}))):Gn(_d(e).getRedirectResult().then((function(t){return No(Ld(e))&&!t.user&&e.j&&!e.j.isAnonymous?kd(e).getRedirectResult():t})))}))),e.i}function wd(e,t){Dd(e),e.g=t}var Id=null;function _d(e){return Dd(e),e.h}function kd(e){return Dd(e),e.a}function Ed(e){return Dd(e),e.oa}function Sd(e){return Dd(e),e.O?e.O.emailHint:void 0}function Cd(e){return"signIn"===((e=new Be(e)).a.a.get(ze.ub)||null)&&!!e.a.a.get(ze.$a)}function Td(e,t,i,n){Dd(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(i),e.O=n||null;var a=d.document;e.C?e.C.then((function(){"complete"==a.readyState?Ad(e,t):an(window,"load",(function(){Ad(e,t)}))})):"complete"==a.readyState?Ad(e,t):an(window,"load",(function(){Ad(e,t)}))}function Ad(e,t){var i=or(t,"Could not find the FirebaseUI widget element on the page.");if(i.setAttribute("lang","en".replace(/_/g,"-")),Id){var n=Id;Dd(n),io(Ed(n))&&Zr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Id.reset()}if(Id=e,e.T=i,function(e,t){e.L=null,e.J=new kn(t),e.J.register(),nn(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var i=Ld(e);(i=Zo(i).uiChanged||null)&&i(e.L,t),e.L=t}}))}(e,i),Ha(new Va)&&Ha(new Wa)){t=or(t,"Could not find the FirebaseUI widget element on the page."),i=(i=ye(i=sr(),n=lo(Ld(e).a,"queryParameterForSignInSuccessUrl")))?It(kt(i)).toString():null;e:{n=sr();var r=Vo(Ld(e));for(a in n=ye(n,r)||"",cs)if(cs[a].toLowerCase()==n.toLowerCase()){var a=cs[a];break e}a="callback"}switch(a){case"callback":i&&(a=Ed(e),eo(Ja,i,a)),e.nb()?hs("callback",e,t):su(e,t,Sd(e));break;case"resetPassword":hs("passwordReset",e,t,hu(),fu());break;case"recoverEmail":hs("emailChangeRevocation",e,t,hu());break;case"revertSecondFactorAddition":hs("revertSecondFactorAddition",e,t,hu());break;case"verifyEmail":hs("emailVerification",e,t,hu(),fu());break;case"verifyAndChangeEmail":hs("verifyAndChangeEmail",e,t,hu(),fu());break;case"signIn":hs("emailLinkSignInCallback",e,t,sr()),Md();break;case"select":i&&(a=Ed(e),eo(Ja,i,a)),su(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Zo(t=Ld(e)).uiShown||null)&&t()}else t=or(t,"Could not find the FirebaseUI widget element on the page."),(a=new Zl(li("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),wd(e,a);t=e.g&&"blank"==e.g.Ga&&qo(Ld(e)),ao(Ed(e))&&!t&&(Od(e,(t=ao(Ed(e))).a),Qa($a,Ed(e)))}function xd(e,t){if(e.A)return t(Nd(e));if(Rd(e,(function(){e.A=!1})),No(Ld(e))){var i=new Fn((function(i){Rd(e,e.a.onAuthStateChanged((function(n){e.j=n,e.A||(e.A=!0,i(t(Nd(e))))})))}));return Rd(e,i),i}return e.A=!0,t(null)}function Nd(e){return Dd(e),No(Ld(e))&&e.j&&e.j.isAnonymous?e.j:null}function Rd(e,t){if(Dd(e),t){e.s.push(t);var i=function(){G(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(i,i)}}function Pd(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Od(e,t){e.a.tenantId=t,e.h.tenantId=t}function Ld(e){return Dd(e),e.ca}function Dd(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Md(){var e=sr();if(Cd(e)){for(var t in e=new Be(e),ze)ze.hasOwnProperty(t)&&Me(e.a.a,ze[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var i=d.document.title;d.history&&d.history.replaceState&&d.history.replaceState(t,i,e.toString())}}function Ud(e){return Dd(e),_d(e).signOut()}function Fd(e,t,i){if(Dd(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var n=Xo(Ld(e));return Gn().then((function(){return n(new Oi("anonymous-upgrade-merge-conflict",null,i||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return Kn(t)}function jd(e,t,i,n){Mc.call(this,El,void 0,n,"providerMatchByEmail",{F:t,D:i}),this.i=e}function Bd(e,t,i,n,r){Mc.call(this,kl,{ec:t},r,"selectTenant",{F:i,D:n}),this.i=e}function Hd(e){Mc.call(this,Kc,void 0,e,"spinner")}function Vd(e){for(var t in this.a=new oo,so(this.a,"authDomain"),so(this.a,"displayMode",Yd),so(this.a,"tenants"),so(this.a,"callbacks"),so(this.a,"tosUrl"),so(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{co(this.a,t,e[t])}catch(e){$r('Invalid config: "'+t+'"',void 0)}}function Wd(e){return e.a.get("callbacks")||{}}function zd(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Zr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){ar(t)}}return null}function Gd(e){var t=e.a.get("tosUrl")||null,i=e.a.get("privacyPolicyUrl")||null;if(i&&!t&&Zr("Terms of Service URL is missing, the link will not be displayed."),t&&i){if("function"==typeof i)return i;if("string"==typeof i)return function(){ar(i)}}return null}function Kd(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Zd))throw Error("Invalid tenant configuration!")}function qd(e,t,i){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var n=[];if(!(e=e[t]||e[Zd]))return $r("Invalid tenant configuration: "+t+" is not configured!",void 0),n;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)n.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&i?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(i)&&n.push(e.provider):n.push(e.provider)}else $r(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),n}function $d(e,t,i){return e=function(e,t){var i=Jd,n=void 0===n?{}:n;return Kd(e,t),function(e,t,i){return i=void 0===i?{}:i,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,i){return t[i]=e[i],t}),i)}((e=e.a.get("tenants"))[t]||e[Zd],i,n)}(e,t),(t=e.signInOptions)&&i&&(t=t.filter((function(e){return"string"==typeof e?i.includes(e):i.includes(e.provider)})),e.signInOptions=t),e}(t=md.prototype).nb=function(){return Dd(this),!!ao(Ed(this))||Cd(sr())},t.start=function(e,t){Td(this,e,t)},t.Db=function(){Dd(this),this.Z=!0},t.reset=function(){Dd(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&In(this.J),Pd(this),this.O=null,Md(),Qa($a,Ed(this)),Dd(this),this.l.cancel(),this.i=Gn({user:null,credential:null}),Id==this&&(Id=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],no(Ed(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Ud(this).then((function(){e.C=null}),(function(){e.C=null})))},t.ib=function(e){Dd(this);var t,i=this.ca;for(t in e)try{co(i.a,t,e[t])}catch(e){$r('Invalid config: "'+t+'"',void 0)}rt&&co(i.a,"popupMode",!1),Ho(i),!this.da&&Jo(Ld(this))&&(Zr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},t.Wb=function(){Dd(this);var e=Ld(this),t=lo(e.a,"widgetUrl");e=Vo(e);for(var i,n=t.search(be),r=0,a=[];0<=(i=ve(t,r,e,n));)a.push(t.substring(r,i)),r=Math.min(t.indexOf("&",i)+1||n,n);a.push(t.substr(r)),t=a.join("").replace(we,"$1"),(e+=n="="+encodeURIComponent("select"))?(0>(n=t.indexOf("#"))&&(n=t.length),0>(r=t.indexOf("?"))||r>n?(r=n,i=""):i=t.substring(r+1,n),n=(t=[t.substr(0,r),i,t.substr(n)])[1],t[1]=e?n?n+"&"+e:e:n,n=t[0]+(t[1]?"?"+t[1]:"")+t[2]):n=t,Ld(this).a.get("popupMode")?(n=n||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||n.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=nr(n,e))&&e.focus()):Ut(window.location,n)},t.Wa=function(){var e=this;return Dd(this),this.h.app.delete().then((function(){var t=bd(Ed(e));delete vd[t],e.reset(),e.$=!0}))},t.Ib=function(e,t){Dd(this);var i=this,n=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!Ko(Ld(this)))return Kn(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if(Ko(e)){var t={url:sr(),handleCodeInApp:!0};(e=Po(e,ea.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&ce(t,e.emailLinkSignIn()),e=t.url;var i=sr();i instanceof Ie||(i=Se(i)),e instanceof Ie||(e=Se(e));var n=i;i=new Ie(n);var r=!!e.j;r?_e(i,e.j):r=!!e.A,r?i.A=e.A:r=!!e.h,r?i.h=e.h:r=null!=e.C;var a=e.g;if(r)ke(i,e.C);else if(r=!!e.g)if("/"!=a.charAt(0)&&(n.h&&!n.g?a="/"+a:-1!=(n=i.g.lastIndexOf("/"))&&(a=i.g.substr(0,n+1)+a)),".."==a||"."==a)a="";else if(-1!=a.indexOf("./")||-1!=a.indexOf("/.")){n=0==a.lastIndexOf("/",0),a=a.split("/");for(var o=[],s=0;s<a.length;){var c=a[s++];"."==c?n&&s==a.length&&o.push(""):".."==c?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),n&&s==a.length&&o.push("")):(o.push(c),n=!0)}a=o.join("/")}return r?i.g=a:r=""!==e.a.toString(),r?Ee(i,Fe(e.a)):r=!!e.s,r&&(i.s=e.s),t.url=i.toString(),t}return null}(Ld(this)),a=new Be(r.url);return function(e,t){t?e.a.a.set(ze.Sa,t):Me(e.a.a,ze.Sa)}(a,n),t&&t.a&&(function(e,t,i){eo(Xa,xa(e,JSON.stringify(oa(t))),i)}(n,t,Ed(this)),Ve(a,t.a.providerId)),function(e,t){null!==t?e.a.a.set(ze.Qa,t?"1":"0"):Me(e.a.a,ze.Qa)}(a,function(e){return!(!(e=Po(e,ea.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(Ld(this))),xd(this,(function(t){return t&&((t=t.uid)?a.a.a.set(ze.Pa,t):Me(a.a.a,ze.Pa)),r.url=a.toString(),_d(i).sendSignInLinkToEmail(e,r)})).then((function(){var t=Ed(i),r={};r.email=e,eo(Ya,xa(n,JSON.stringify(r)),t)}),(function(e){throw Qa(Xa,Ed(i)),Qa(Ya,Ed(i)),e}))},t.bc=function(e,t){Dd(this);var i=this;return _d(this).signInWithEmailAndPassword(e,t).then((function(n){return xd(i,(function(r){return r?Ud(i).then((function(){return Fd(i,{code:"auth/email-already-in-use"},ea.auth.EmailAuthProvider.credential(e,t))})):n}))}))},t.Yb=function(e,t){Dd(this);var i=this;return xd(this,(function(n){if(n){var r=ea.auth.EmailAuthProvider.credential(e,t);return n.linkWithCredential(r)}return _d(i).createUserWithEmailAndPassword(e,t)}))},t.ac=function(e){Dd(this);var t=this;return xd(this,(function(i){return i?i.linkWithCredential(e).then((function(e){return e}),(function(i){if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential)throw i;return Fd(t,i,e)})):_d(t).signInWithCredential(e)}))},t.dc=function(e){Dd(this);var t=this,i=this.i;return this.i=null,xd(this,(function(i){return i&&!io(Ed(t))?i.linkWithRedirect(e):_d(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=i,e}))},t.cc=function(e,t){Dd(this);var i=this;return xd(this,(function(n){return n?n.linkWithPhoneNumber(e,t).then((function(e){return new xr(e,(function(e){if("auth/credential-already-in-use"==e.code)return Fd(i,e);throw e}))})):kd(i).signInWithPhoneNumber(e,t).then((function(e){return new xr(e)}))}))},t.$b=function(){return Dd(this),kd(this).signInAnonymously()},t.Xb=function(e,t){return Dd(this),_d(this).signInWithEmailAndPassword(e,t)},s(jd,Mc),jd.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Ru(this.l(),(this.l().value||"").length),Mc.prototype.v.call(this)},jd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},x(jd.prototype,{l:Ll,H:Dl,u:Ml,B:Ul,j:Fl,M:Sl,w:Tl}),s(Bd,Mc),Bd.prototype.v=function(){!function(e,t){function i(e){t(e)}for(var n=e.g?Ht("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<n.length;r++){var a=n[r];nc(e,a,A(i,Qu(a,"tenantId")))}}(this,this.i),Mc.prototype.v.call(this)},Bd.prototype.o=function(){this.i=null,Mc.prototype.o.call(this)},s(Hd,Mc);var Jd=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Yd="optionFirst",Xd={pc:Yd,oc:"identifierFirst"},Zd="*";function Qd(e,t){var i=this;this.s=or(e),this.a={},Object.keys(t).forEach((function(e){i.a[e]=new Vd(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function eh(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(t=Qd.prototype).Ub=function(e,t){var i=this;eh(this);var n=e.apiKey;return new Fn((function(e,r){if(i.a.hasOwnProperty(n)){var a=Wd(i.a[n]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Xd)if(Xd[t]===e)return Xd[t];return Yd}(i.a[n])===Yd){var o=[];t.forEach((function(e){e=e||"_";var t=i.a[n].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Zd])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:($r("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&o.push(e)}));var s=function(t){t={tenantId:t,providerIds:qd(i.a[n],t||"_")},e(t)};if(1===o.length)return void s(o[0].tenantId);i.g=new Bd((function(e){eh(i),a&&a(),s(e)}),o,zd(i.a[n]),Gd(i.a[n]))}else i.g=new jd((function(){var r=i.g.j();if(r){for(var o=0;o<t.length;o++){var s=qd(i.a[n],t[o]||"_",r);if(0!==s.length)return r={tenantId:t[o],providerIds:s,email:r},eh(i),a&&a(),void e(r)}i.g.a(Ri({code:"no-matching-tenant-for-email"}).toString())}}),zd(i.a[n]),Gd(i.a[n]));i.g.render(i.s),(r=Wd(i.a[n]).selectTenantUiShown||null)&&r()}else{var c=Error("Invalid project configuration: API key is invalid!");c.code="invalid-configuration",i.pb(c),r(c)}}))},t.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var i=t||void 0;Kd(this.a[e],t||"_");try{this.i=ea.app(i).auth()}catch(r){var n=this.a[e].a.get("authDomain");if(!n)throw Error("Invalid project configuration: authDomain is required!");(e=ea.initializeApp({apiKey:e,authDomain:n},i)).auth().tenantId=t,this.i=e.auth()}return this.i},t.Zb=function(e,t){var i=this;return new Fn((function(n,r){function a(t,n){i.j=new md(e),Td(i.j,i.s,t,n)}var o=e.app.options.apiKey;i.a.hasOwnProperty(o)||r(Error("Invalid project configuration: API key is invalid!"));var s=$d(i.a[o],e.tenantId||"_",t&&t.providerIds);eh(i),r={signInSuccessWithAuthResult:function(e){return n(e),!1}};var c,l=Wd(i.a[o]).signInUiShown||null,u=!1;r.uiChanged=function(t,n){null===t&&"callback"===n?((t=Vt("firebaseui-id-page-callback",i.s))&&rc(t),i.h=new Hd,i.h.render(i.s)):u||null===t&&"spinner"===n||"blank"===n||(i.h&&(i.h.m(),i.h=null),u=!0,l&&l(e.tenantId))},s.callbacks=r,s.credentialHelper="none",t&&t.email&&(c={emailHint:t.email}),i.j?i.j.Wa().then((function(){a(s,c)})):a(s,c)}))},t.reset=function(){var e=this;return Gn().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,eh(e)}))},t.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){eh(e),e.h=new Hd,e.g=e.h,e.h.render(e.s),e.A=null}),500))},t.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},t.Bb=function(){return eh(this),this.g=new ql,this.g.render(this.s),Gn()},t.pb=function(e){var t,i=this,n=Ri({code:e.code}).toString()||e.message;eh(this),e.retry&&"function"==typeof e.retry&&(t=function(){i.reset(),e.retry()}),this.g=new Xl(n,t),this.g.render(this.s)},t.Rb=function(e){var t=this;return Gn().then((function(){var i=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(i))throw Error("Invalid project configuration: API key is invalid!");if(Kd(t.a[i],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(i=Wd(t.a[i]).beforeSignInSuccess||null)?i(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},P("firebaseui.auth.FirebaseUiHandler",Qd),P("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Qd.prototype.Ub),P("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Qd.prototype.Pb),P("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Qd.prototype.Zb),P("firebaseui.auth.FirebaseUiHandler.prototype.reset",Qd.prototype.reset),P("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Qd.prototype.Vb),P("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Qd.prototype.mb),P("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Qd.prototype.Bb),P("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Qd.prototype.pb),P("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Qd.prototype.Rb),P("firebaseui.auth.AuthUI",md),P("firebaseui.auth.AuthUI.getInstance",(function(e){return e=bd(e),vd[e]?vd[e]:null})),P("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",md.prototype.Db),P("firebaseui.auth.AuthUI.prototype.start",md.prototype.start),P("firebaseui.auth.AuthUI.prototype.setConfig",md.prototype.ib),P("firebaseui.auth.AuthUI.prototype.signIn",md.prototype.Wb),P("firebaseui.auth.AuthUI.prototype.reset",md.prototype.reset),P("firebaseui.auth.AuthUI.prototype.delete",md.prototype.Wa),P("firebaseui.auth.AuthUI.prototype.isPendingRedirect",md.prototype.nb),P("firebaseui.auth.AuthUIError",Oi),P("firebaseui.auth.AuthUIError.prototype.toJSON",Oi.prototype.toJSON),P("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",ns),P("firebaseui.auth.CredentialHelper.NONE",rs),P("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Fn.prototype.catch=Fn.prototype.Ca,Fn.prototype.finally=Fn.prototype.fc}).apply(void 0!==e?e:"undefined"!=typeof self?self:window)}.apply(void 0!==e?e:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=i(Ha));var qa=firebaseui.auth;const $a=function(e=He()){const t=Le(e,"auth");if(t.isInitialized())return t.getImmediate();const i=function(e,t){const i=Le(e,"auth");if(i.isInitialized()){const e=i.getImmediate();if(B(i.getOptions(),null!=t?t:{}))return e;wt(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:Wr,persistence:[Gn,Rn,On]}),n=O("authTokenSyncURL");if(n){const e=(r=n,async e=>{const t=e&&await e.getIdTokenResult(),i=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>qr)return;const n=null==t?void 0:t.token;$r!==n&&($r=n,await fetch(r,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,i){$(e).beforeAuthStateChanged(t,i)}(i,e,(()=>e(i.currentUser))),function(e,t,i,n){$(e).onIdTokenChanged(t,i,n)}(i,(t=>e(t)))}var r;const a=P("auth");return a&&Ii(i,`http://${a}`),i}(initializeApp({apiKey:"AIzaSyDAh0--4StEyCvmB2VJ_PH6ONW26JdL9C0",authDomain:"filmoteka-94bd5.firebaseapp.com",projectId:"filmoteka-94bd5",storageBucket:"filmoteka-94bd5.appspot.com",messagingSenderId:"831703461405",appId:"1:831703461405:web:8e5fcd7e5573f18627a0f4"})),Ja=new qa.AuthUI($a),Ya={signInOptions:[{provider:Li.PROVIDER_ID,requireDisplayName:!1}],callbacks:{signInSuccessWithAuthResult:e=>{}}};const Xa={myLibrary:document.querySelector(".js-menu-my-library"),logBtn:document.querySelector(".js-login"),user:document.querySelector(".js-user"),loginUi:document.querySelector(".js-login-ui")};let Za="";Xa.logBtn.addEventListener("click",(function(){Za?$a.signOut():(Ja.start(".js-login-ui",Ya),Xa.loginUi.classList.add("active"))})),Xa.loginUi.addEventListener("click",(function(e){e.target.classList.contains("js-login-ui")&&(Xa.loginUi.classList.remove("active"),Ja.reset())})),$a.onAuthStateChanged((function(e){if(Za=e,!Za){let e=window.location.href;e.includes("myLibrary")&&(e=e.replace("myLibrary","index"),window.location.replace(e))}!function(){Za?(Xa.myLibrary.style.display="block",Xa.logBtn.innerHTML="Log out",Xa.user.innerHTML=Za.email):(Xa.myLibrary.style.display="none",Xa.logBtn.innerHTML="Log in",Xa.user.innerHTML="");Xa.loginUi.classList.remove("active")}()}));const Qa=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting?eo.classList.add("visually-hidden"):eo.classList.remove("visually-hidden")}))})),eo=document.querySelector(".scroll-btn"),to=document.querySelector(".header");Qa.observe(to),eo.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.16625430.js.map

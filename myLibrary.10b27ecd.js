!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),i.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}}));var a=i("bpxeT"),o=i("2TvXO"),u=i("hKHmD"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c.default(e,t,r[t])}))}return e};var s,c=(s=i("hKHmD"))&&s.__esModule?s:{default:s};var d=i("chgrN"),f=i("8MBJY"),v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t){var r=p.default(e,t,"get");return m.default(e,r)};var p=h(i("1UHsN")),m=h(i("ffZzF"));function h(e){return e&&e.__esModule?e:{default:e}}var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,r){_.default(e,t),t.set(e,r)};var _=function(e){return e&&e.__esModule?e:{default:e}}(i("5k7tO"));var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,r){var n=b.default(e,t,"set");return M.default(e,n,r),r};var b=w(i("1UHsN")),M=w(i("jdVyQ"));function w(e){return e&&e.__esModule?e:{default:e}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r};var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(e,t){O.default(e,t),t.add(e)};var O=function(e){return e&&e.__esModule?e:{default:e}}(i("5k7tO"));var x=i("a2hTj"),S=(u=i("hKHmD"),{});Object.defineProperty(S,"__esModule",{value:!0}),S.default=function(e){return L.default(e)||Q.default(e)||E.default(e)||W.default()};var P,L=D(i("kMC0W")),Q=D(i("7AJDX")),W=D(i("8CtQK")),E=D(i("auk6i"));function D(e){return e&&e.__esModule?e:{default:e}}var T=new WeakMap,A=new WeakSet,q=new WeakSet;function N(){var e=localStorage.getItem(this.KEY);if(!e)return null;try{return e=JSON.parse(e),Array.isArray(e)?e:null}catch(e){return null}}function C(e){try{return localStorage.setItem(this.KEY,JSON.stringify(e)),!0}catch(e){return!1}}P=new(function(){"use strict";function t(){e(f)(this,t),e(k)(this,A),e(k)(this,q),e(u)(this,"KEY","movies"),e(y)(this,T,{writable:!0,value:void 0})}return e(x)(t,[{key:"cachedMovie",get:function(){return e(v)(this,T)},set:function(t){var r=this.getMovie({id:t.id});e(g)(this,T,{id:String(t.id),isWatched:!1,isQueued:!1,movieDetails:t}),r&&(e(v)(this,T).isQueued=r.isQueued,e(v)(this,T).isWatched=r.isWatched)}},{key:"addMovie",value:function(t){var r=t.id,n=t.isQueued,i=t.isWatched,a=t.movieDetails;if(!r)return null;if(void 0===i&&void 0===n)return null;void 0!==n?i=!n:n=!i;var o={id:String(r),isWatched:i,isQueued:n,movieDetails:a},u=e(j)(this,A,N).call(this);u||(u=[]);var l=u.find((function(e){return String(e.id)===String(r)}));if(l)l.isQueued=n,l.isWatched=i,a&&(l.movieDetails=a);else{if(!a)return null;u.push(o)}return e(j)(this,q,C).call(this,u)?l:null}},{key:"removeMovie",value:function(t){var r=t.id,n=e(j)(this,A,N).call(this);if(!n)return null;var i=n.findIndex((function(e){return String(e.id)===String(r)})),a=n.splice(i,1);return e(j)(this,q,C).call(this,n)?a:null}},{key:"getMovie",value:function(t){var r=t.id,n=e(j)(this,A,N).call(this);if(!n)return null;var i=n.find((function(e){return String(e.id)===String(r)}));return null!=i?i:null}},{key:"getMovies",value:function(t){var r=t.isWatched,n=t.isQueued,i=[],a=e(j)(this,A,N).call(this);if(!a)return i;if(void 0===r&&void 0===n)return a;if(r){var o=a.filter((function(e){return e.isWatched}));o&&(i=e(S)(i).concat(e(S)(o)))}if(n){var u=a.filter((function(e){return e.isQueued}));u&&(i=e(S)(i).concat(e(S)(u)))}return i}}]),t}());a=i("bpxeT"),o=i("2TvXO");var I=i("6XhEX"),K=[];function X(){return H.apply(this,arguments)}function H(){return(H=e(a)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new(0,I.default),e.prev=1,e.next=4,r.getGenres();case 4:K=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}var F={filter:document.querySelector(".js-filter-my-library"),gallery:document.querySelector(".gallery_main-page"),modal:document.querySelector(".js-movie-modal")};function Y(){var t=new FormData(F.filter).get("filter"),r=P.getMovies(e(u)({},t,!0)).map((function(e){return e.movieDetails})),n=(0,d.markupMovieCards)(r,K).join("");F.gallery.innerHTML=n}function B(e){P.cachedMovie=P.getMovie({id:e}).movieDetails;var t,r,n,i,a,o,u,l=(t=P.cachedMovie.movieDetails,r=t.title,n=t.vote_count,i=t.vote_average,a=t.popularity,o=t.original_title,u=t.overview,'<div class="modal_description">\n    <h1 class="movie_title">'.concat(r,'</h1>\n    <ul>\n        <li class="movie_description">Vote / Votes<span class="movie_vote">').concat(n,'</span>\n        <span class="movie_description">').concat(i,'</span></li>\n        <li class="movie_description">Popularity<span class="movie_value">').concat(a,'</span></li>\n        <li class="movie_description">Original Title<span class="movie_value">').concat(o,'</span></li>\n        <li class="movie_description">Genre<span class="movie_value">').concat(K.name,'</span></li>\n    </ul>\n    <h2></h2>\n    <p class="about-text">').concat(u,'</p>\n\n    <form class="js-modal-form modal-form">\n        <label class="modal-form__label">\n          <input class="modal-form__input" type="radio" name="status" value="isWatched" />\n          <span class="modal-form__text button">Watched</span>\n        </label>\n\n        <label class="modal-form__label">\n          <input class="modal-form__input" type="radio" name="status" value="isQueued" />\n          <span class="modal-form__text button"\n            >Queued</span\n          >\n        </label>\n        <button type="button" class="js-remove-button button">Remove</button>\n        </form>\n  </div>'));F.modal.innerHTML=l,U(),F.modal.classList.add("active")}function U(){var e=document.querySelector('.modal-form__input[value="isQueued"]'),t=document.querySelector('.modal-form__input[value="isWatched"]');e.checked=P.cachedMovie.isQueued,t.checked=P.cachedMovie.isWatched}function z(){for(var t={adult:!1,backdrop_path:"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",id:1,title:"Black Adam",original_language:"en",original_title:"Black Adam",overview:"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",poster_path:"/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",media_type:"movie",genre_ids:[28,14,878],popularity:4085.77,release_date:"2022-10-19",video:!1,vote_average:6.937,vote_count:803},r=0;r<6;r++){var n=e(l)({},t,{id:r+1,title:"".concat(t.title," - ").concat(r+1)});P.addMovie({id:n.id,isQueued:!0,isWatched:!1,movieDetails:n})}}function J(){return(J=e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:z(),Y();case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}F.filter.addEventListener("click",(function(e){if(!e.target.closest("input"))return;Y()})),function(){J.apply(this,arguments)}(),F.gallery.addEventListener("click",(function(e){var t=e.target.closest(".gallery__item");if(!t)return;B(t.dataset.movieid)})),F.modal.addEventListener("click",(function(e){var t=e.target;t.closest(".modal_description")||F.modal.classList.remove("active");if(t.closest(".modal-form__label")&&t.closest("input")){var r=t.closest(".js-modal-form"),n=new FormData(r).get("status");"isWatched"===n?(P.cachedMovie.isQueued=!1,P.cachedMovie.isWatched=!0):"isQueued"===n&&(P.cachedMovie.isQueued=!0,P.cachedMovie.isWatched=!1),P.addMovie(P.cachedMovie),Y()}t.classList.contains("js-remove-button")&&(P.removeMovie({id:P.cachedMovie.id}),P.cachedMovie.isQueued=!1,P.cachedMovie.isWatched=!1,U(),Y())}));var V={openModalBtn:document.querySelector("#open-team-modal"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};V.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),V.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),V.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(V.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),V.body.removeEventListener("keyup",e))})),V.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(V.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),V.modal.removeEventListener("click",e))}))}))}();
//# sourceMappingURL=myLibrary.10b27ecd.js.map

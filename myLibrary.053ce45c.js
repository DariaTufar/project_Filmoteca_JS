function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}}));var a=n("2dqxC"),s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){var i=l.default(e,t,"get");return r.default(e,i)};var l=d(n("fExtF")),r=d(n("iaRLo"));function d(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,i){f.default(e,t),t.set(e,i)};var c,f=(c=n("7K24o"))&&c.__esModule?c:{default:c};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,i){var o=m.default(e,t,"set");return p.default(e,o,i),i};var m=h(n("fExtF")),p=h(n("3LGG3"));function h(e){return e&&e.__esModule?e:{default:e}}var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t){g.default(e,t),t.add(e)};var g=function(e){return e&&e.__esModule?e:{default:e}}(n("7K24o"));var M=n("iJYdK");let b;var w=new WeakMap,L=new WeakSet,j=new WeakSet;function E(){let e=localStorage.getItem(this.KEY);if(!e)return null;try{return e=JSON.parse(e),Array.isArray(e)?e:null}catch(e){return null}}function x(e){try{return localStorage.setItem(this.KEY,JSON.stringify(e)),!0}catch(e){return!1}}b=new class{get cachedMovie(){return e(s)(this,w)}set cachedMovie(t){const i=this.getMovie({id:t.id});e(v)(this,w,{id:String(t.id),isWatched:!1,isQueued:!1,movieDetails:t}),i&&(e(s)(this,w).isQueued=i.isQueued,e(s)(this,w).isWatched=i.isWatched)}addMovie({id:t,isQueued:i,isWatched:o,movieDetails:n}){if(!t)return null;if(void 0===o&&void 0===i)return null;void 0!==i?o=!i:i=!o;const a={id:String(t),isWatched:o,isQueued:i,movieDetails:n};let s=e(_)(this,L,E).call(this);s||(s=[]);const l=s.find((e=>String(e.id)===String(t)));if(l)l.isQueued=i,l.isWatched=o,n&&(l.movieDetails=n);else{if(!n)return null;s.push(a)}return e(_)(this,j,x).call(this,s)?l:null}removeMovie({id:t}){const i=e(_)(this,L,E).call(this);if(!i)return null;const o=i.findIndex((e=>String(e.id)===String(t))),n=i.splice(o,1);return e(_)(this,j,x).call(this,i)?n:null}getMovie({id:t}){const i=e(_)(this,L,E).call(this);if(!i)return null;const o=i.find((e=>String(e.id)===String(t)));return null!=o?o:null}getMovies({isWatched:t,isQueued:i}){let o=[];const n=e(_)(this,L,E).call(this);if(!n)return o;if(void 0===t&&void 0===i)return n;if(t){const e=n.filter((e=>e.isWatched));e&&(o=[...o,...e])}if(i){const e=n.filter((e=>e.isQueued));e&&(o=[...o,...e])}return o}constructor(){e(y)(this,L),e(y)(this,j),e(M)(this,"KEY","movies"),e(u)(this,w,{writable:!0,value:void 0})}};var S=n("85EYF");let W=[];async function k(){const e=new(0,S.default);try{W=await e.getGenres()}catch(e){}}const Q={filter:document.querySelector(".js-filter-my-library"),gallery:document.querySelector(".gallery_main-page"),modal:document.querySelector(".js-movie-modal")};function O(){const e=new FormData(Q.filter).get("filter"),t=b.getMovies({[e]:!0}).map((e=>e.movieDetails)),i=(0,a.markupMovieCards)(t,W).join("");Q.gallery.innerHTML=i}function q(e){b.cachedMovie=b.getMovie({id:e}).movieDetails;const t=function({title:e,vote_count:t,vote_average:i,popularity:o,original_title:n,overview:a}){return`<div class="modal_description">\n    <h1 class="movie_title">${e}</h1>\n    <ul>\n        <li class="movie_description">Vote / Votes<span class="movie_vote">${t}</span>\n        <span class="movie_description">${i}</span></li>\n        <li class="movie_description">Popularity<span class="movie_value">${o}</span></li>\n        <li class="movie_description">Original Title<span class="movie_value">${n}</span></li>\n        <li class="movie_description">Genre<span class="movie_value">${W.name}</span></li>\n    </ul>\n    <h2></h2>\n    <p class="about-text">${a}</p>\n\n    <form class="js-modal-form modal-form">\n        <label class="modal-form__label">\n          <input class="modal-form__input" type="radio" name="status" value="isWatched" />\n          <span class="modal-form__text button">Watched</span>\n        </label>\n\n        <label class="modal-form__label">\n          <input class="modal-form__input" type="radio" name="status" value="isQueued" />\n          <span class="modal-form__text button"\n            >Queued</span\n          >\n        </label>\n        <button type="button" class="js-remove-button button">Remove</button>\n        </form>\n  </div>`}(b.cachedMovie.movieDetails);Q.modal.innerHTML=t,D(),Q.modal.classList.add("active")}function D(){const e=document.querySelector('.modal-form__input[value="isQueued"]'),t=document.querySelector('.modal-form__input[value="isWatched"]');e.checked=b.cachedMovie.isQueued,t.checked=b.cachedMovie.isWatched}function P(){const e={adult:!1,backdrop_path:"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",id:1,title:"Black Adam",original_language:"en",original_title:"Black Adam",overview:"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",poster_path:"/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",media_type:"movie",genre_ids:[28,14,878],popularity:4085.77,release_date:"2022-10-19",video:!1,vote_average:6.937,vote_count:803};for(let t=0;t<6;t++){const i={...e,id:t+1,title:`${e.title} - ${t+1}`};b.addMovie({id:i.id,isQueued:!0,isWatched:!1,movieDetails:i})}}Q.filter.addEventListener("click",(function(e){if(!e.target.closest("input"))return;O()})),async function(){await k(),P(),O()}(),Q.gallery.addEventListener("click",(function(e){const t=e.target.closest(".gallery__item");if(!t)return;q(t.dataset.movieid)})),Q.modal.addEventListener("click",(function(e){const t=e.target;t.closest(".modal_description")||Q.modal.classList.remove("active");if(t.closest(".modal-form__label")&&t.closest("input")){const e=t.closest(".js-modal-form"),i=new FormData(e).get("status");"isWatched"===i?(b.cachedMovie.isQueued=!1,b.cachedMovie.isWatched=!0):"isQueued"===i&&(b.cachedMovie.isQueued=!0,b.cachedMovie.isWatched=!1),b.addMovie(b.cachedMovie),O()}t.classList.contains("js-remove-button")&&(b.removeMovie({id:b.cachedMovie.id}),b.cachedMovie.isQueued=!1,b.cachedMovie.isWatched=!1,D(),O())}));const T={openModalBtn:document.querySelector("#open-team-modal"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};T.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),T.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),T.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(T.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),T.body.removeEventListener("keyup",e))})),T.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(T.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),T.modal.removeEventListener("click",e))}))}));
//# sourceMappingURL=myLibrary.053ce45c.js.map

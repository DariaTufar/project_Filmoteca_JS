function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}}));var n=o("2dqxC"),r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var i=s.default(e,t,"get");return l.default(e,i)};var s=d(o("fExtF")),l=d(o("iaRLo"));function d(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,i){m.default(e,t),t.set(e,i)};var u,m=(u=o("7K24o"))&&u.__esModule?u:{default:u};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,i){var a=v.default(e,t,"set");return p.default(e,a,i),i};var v=h(o("fExtF")),p=h(o("3LGG3"));function h(e){return e&&e.__esModule?e:{default:e}}var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i};var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t){g.default(e,t),t.add(e)};var g=function(e){return e&&e.__esModule?e:{default:e}}(o("7K24o"));var b=o("iJYdK");let M;var L=new WeakMap,w=new WeakSet,S=new WeakSet;function E(){let e=localStorage.getItem(this.KEY);if(!e)return null;try{return e=JSON.parse(e),Array.isArray(e)?e:null}catch(e){return null}}function x(e){try{return localStorage.setItem(this.KEY,JSON.stringify(e)),!0}catch(e){return!1}}M=new class{get cachedMovie(){return e(r)(this,L)}set cachedMovie(t){const i=this.getMovie({id:t.id});e(f)(this,L,{id:String(t.id),isWatched:!1,isQueued:!1,movieDetails:t}),i&&(e(r)(this,L).isQueued=i.isQueued,e(r)(this,L).isWatched=i.isWatched)}addMovie({id:t,isQueued:i,isWatched:a,movieDetails:o}){if(!t)return null;if(void 0===a&&void 0===i)return null;void 0!==i?a=!i:i=!a;const n={id:String(t),isWatched:a,isQueued:i,movieDetails:o};let r=e(y)(this,w,E).call(this);r||(r=[]);const s=r.find((e=>String(e.id)===String(t)));if(s)s.isQueued=i,s.isWatched=a,o&&(s.movieDetails=o);else{if(!o)return null;r.push(n)}return e(y)(this,S,x).call(this,r)?s:null}removeMovie({id:t}){const i=e(y)(this,w,E).call(this);if(!i)return null;const a=i.findIndex((e=>String(e.id)===String(t))),o=i.splice(a,1);return e(y)(this,S,x).call(this,i)?o:null}getMovie({id:t}){const i=e(y)(this,w,E).call(this);if(!i)return null;const a=i.find((e=>String(e.id)===String(t)));return null!=a?a:null}getMovies({isWatched:t,isQueued:i}){let a=[];const o=e(y)(this,w,E).call(this);if(!o)return a;if(void 0===t&&void 0===i)return o;if(t){const e=o.filter((e=>e.isWatched));e&&(a=[...a,...e])}if(i){const e=o.filter((e=>e.isQueued));e&&(a=[...a,...e])}return a}constructor(){e(_)(this,w),e(_)(this,S),e(b)(this,"KEY","movies"),e(c)(this,L,{writable:!0,value:void 0})}};var j=o("85EYF");let k=[];async function W(){const e=new(0,j.default);try{k=await e.getGenres()}catch(e){}}const q={filter:document.querySelector(".js-filter-my-library"),gallery:document.querySelector(".gallery_main-page"),modal:document.querySelector(".js-movie-modal")};function Q(){const e=new FormData(q.filter).get("filter"),t=M.getMovies({[e]:!0}).map((e=>e.movieDetails)),i=(0,n.markupMovieCards)(t,k).join("");q.gallery.innerHTML=i}function D(e){M.cachedMovie=M.getMovie({id:e}).movieDetails;const t=function({title:e,vote_count:t,vote_average:i,popularity:a,original_title:o,overview:n}){return`<div class="modal_description">\n    <h1 class="movie_title">${e}</h1>\n    <ul>\n        <li class="movie_description">Vote / Votes<span class="movie_vote">${t}</span>\n        <span class="movie_description">${i}</span></li>\n        <li class="movie_description">Popularity<span class="movie_value">${a}</span></li>\n        <li class="movie_description">Original Title<span class="movie_value">${o}</span></li>\n        <li class="movie_description">Genre<span class="movie_value">${k.name}</span></li>\n    </ul>\n    <h2></h2>\n    <p class="about-text">${n}</p>\n\n    <form class="js-modal-form modal-form">\n        <label class="modal-form__label">\n          <input class="modal-form__input" type="radio" name="status" value="isWatched" />\n          <span class="modal-form__text button">Watched</span>\n        </label>\n\n        <label class="modal-form__label">\n          <input class="modal-form__input" type="radio" name="status" value="isQueued" />\n          <span class="modal-form__text button"\n            >Queued</span\n          >\n        </label>\n        <button type="button" class="js-remove-button button">Remove</button>\n        </form>\n  </div>`}(M.cachedMovie.movieDetails);q.modal.innerHTML=t,O(),q.modal.classList.add("active")}function O(){const e=document.querySelector('.modal-form__input[value="isQueued"]'),t=document.querySelector('.modal-form__input[value="isWatched"]');e.checked=M.cachedMovie.isQueued,t.checked=M.cachedMovie.isWatched}function P(){const e={adult:!1,backdrop_path:"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",id:1,title:"Black Adam",original_language:"en",original_title:"Black Adam",overview:"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",poster_path:"/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",media_type:"movie",genre_ids:[28,14,878],popularity:4085.77,release_date:"2022-10-19",video:!1,vote_average:6.937,vote_count:803};for(let t=0;t<6;t++){const i={...e,id:t+1,title:`${e.title} - ${t+1}`};M.addMovie({id:i.id,isQueued:!0,isWatched:!1,movieDetails:i})}}q.filter.addEventListener("click",(function(e){if(!e.target.closest("input"))return;Q()})),async function(){await W(),P(),Q()}(),q.gallery.addEventListener("click",(function(e){const t=e.target.closest(".gallery__item");if(!t)return;D(t.dataset.movieid)})),q.modal.addEventListener("click",(function(e){const t=e.target;t.closest(".modal_description")||q.modal.classList.remove("active");if(t.closest(".modal-form__label")&&t.closest("input")){const e=t.closest(".js-modal-form"),i=new FormData(e).get("status");"isWatched"===i?(M.cachedMovie.isQueued=!1,M.cachedMovie.isWatched=!0):"isQueued"===i&&(M.cachedMovie.isQueued=!0,M.cachedMovie.isWatched=!1),M.addMovie(M.cachedMovie),Q()}t.classList.contains("js-remove-button")&&(M.removeMovie({id:M.cachedMovie.id}),M.cachedMovie.isQueued=!1,M.cachedMovie.isWatched=!1,O(),Q())}));const T={openModalBtn:document.querySelector("#open-team-modal"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};function H(e){if("logo"===e.target.dataset.menu&&"/"===document.location.pathname||"logo"===e.target.dataset.menu&&"/index.html"===document.location.pathname||"home"===e.target.dataset.menu&&"/"===document.location.pathname||"home"===e.target.dataset.menu&&"/index.html"===document.location.pathname||"my-library"===e.target.dataset.menu&&"/myLibrary.html"===document.location.pathname)return e.preventDefault(),console.log(e),void console.log(document.location.pathname);console.log(e),console.log(document.location.pathname),e.currentTarget.removeEventListener("click",H)}T.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),T.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),T.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(T.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),T.body.removeEventListener("keyup",e))})),T.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(T.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),T.modal.removeEventListener("click",e))}))})),document.addEventListener("DOMContentLoaded",(function(e){refHeader=document.querySelector(".header"),refHeaderMenu=document.querySelector(".header__menu-list"),refHeaderMenu.addEventListener("click",H),refLibraryBtn=document.querySelector(".my-library-buttons");const t=refHeaderMenu.querySelector(".is-active");t&&t.classList.remove("is-active");switch(document.location.pathname){case"/":refHeaderMenu.querySelector("[data-menu='home']").classList.add("is-active"),refLibraryBtn.classList.add("is-hidden"),refHeader.classList.contains("library")&&refHeader.remove("library");break;case"/myLibrary.html":refHeaderMenu.querySelector("[data-menu='my-library']").classList.add("is-active"),refLibraryBtn.classList.contains("is-hidden")&&refLibraryBtn.remove("is-hidden"),refHeader.classList.add("library")}}));
//# sourceMappingURL=myLibrary.43459ac8.js.map

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("g4lwF");var a=o("g4lwF");a=o("g4lwF");function i(e,t){let n,o="",a=t-1,i=t+1;t>1&&(o+='<li class="btn prev"><span><i class="fas fa-angle-left"></i> &#171;</span></li>'),t>2&&(o+='<li class="first numb"><span>1</span></li>',t>3&&(o+='<li class="dots"><span>...</span></li>')),t==e?a-=2:t==e-1&&(a-=1),1==t?i+=2:2==t&&(i+=1);for(let s=a;s<=i;s++)s>e||(0==s&&(s+=1),n=t==s?"active":"",o+=`<li class="numb ${n}"><span>${s}</span></li>`);return t<e-1&&(t<e-2&&(o+='<li class="dots"><span>...</span></li>'),o+=`<li class="last numb"><span>${e}</span></li>`),t<e&&(o+='<li class="btn next"><span>&#187 <i class="fas fa-angle-right"></i></span></li>'),o}var s=o("krGWQ");let r=20,l=a.movieAPI.page;s.refs.element.innerHTML=i(r,l),s.refs.element.addEventListener("click",(async e=>{if(await a.movieAPI.getMovies(),r=a.movieAPI.totalPages,e.target!==e.currentTarget&&"..."!==e.target.textContent){if(Number(e.target.textContent))a.movieAPI.page=Number(e.target.textContent);else switch(e.target.textContent){case" «":a.movieAPI.decrementPage(),console.log(a.movieAPI.page);break;case"» ":a.movieAPI.incrementPage(),console.log("-1",a.movieAPI.page)}l=a.movieAPI.page,await(0,a.renderPageMovies)(),s.refs.element.innerHTML=i(r,l)}})),o("6pcjg");const c={openModalBtn:document.querySelector("#open-team-modal"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};c.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),c.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),c.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(c.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),c.body.removeEventListener("keyup",e))})),c.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(c.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),c.modal.removeEventListener("click",e))}))}));var d=o("8G1wF"),u=o("2shzp"),m={};function v(e){"logo"===e.target.dataset.menu&&"/"===document.location.pathname||"logo"===e.target.dataset.menu&&"/index.html"===document.location.pathname||"home"===e.target.dataset.menu&&"/"===document.location.pathname||"home"===e.target.dataset.menu&&"/index.html"===document.location.pathname||"my-library"===e.target.dataset.menu&&"/myLibrary.html"===document.location.pathname?e.preventDefault():e.currentTarget.removeEventListener("click",v)}m=function e(t,n,o){function a(s,r){if(!n[s]){if(!t[s]){var l=void 0;if(!r&&l)return l(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[s]={exports:{}};t[s][0].call(d.exports,(function(e){return a(t[s][1][e]||e)}),d,d.exports,e,t,n,o)}return n[s].exports}for(var i=void 0,s=0;s<o.length;s++)a(o[s]);return a}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},a=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var s=a(i,"IMG"),r=a(i,"VIDEO"),l=a(i,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===r&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(r)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(r)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var r={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(r)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(r)}))},close:s};return r}},{}]},{},[1])(1),async function(){const e="https://api.themoviedb.org/3/",t="https://image.tmdb.org/t/p/w500",n=88,o="en-US",a=d.KEY;await u.default.get(`${e}/movie/${n}?api_key=${a}&language=${o}`).then((e=>{const n=e.data,{title:o,vote_count:a,vote_average:i,popularity:s,original_title:r,overview:l,genres:c,poster_path:d}=n,u=`<div class="modal_description">\n      <div class="movie_div">\n          <img class="foto" src="${t}${d}" alt="poster_foto ">\n      </div>\n      <div class="film_information">\n          <h1 class="movie_title">${o}</h1>\n          <ul>\n              <li class="movie_description">Vote / Votes<span class="movie_vote"> ${i} </span>\n              <span class="movie_votes"> /  ${a}</span></li>\n              <li class="movie_description">Popularity<span class="movie_value">: ${s}</span></li>\n              <li class="movie_description">Original Title<span class="movie_value">: ${r}</span></li>\n              <li class="movie_description">Genre<span class="movie_value">: ${Object.values(c[0].name).join("")}</span></li>\n          </ul>\n          <h2 class="movie_about">ABOUT</h2>\n          <p class="about_text">${l}</p>\n\n          <div class="movie_btn">\n          <button type="radio" name="add_watched_btn" class="film_btn">ADD TO WATCHED</button>\n          <button type="radio" name="add_to_queue_btn" class="film_btn">ADD TO QUEUE</button>\n          <button type="radio" name="trailer_btn" class="film_btn">TRAILER</button>\n      </div>\n      </div>\n    </div>`;document.querySelector(".modal_movie").insertAdjacentHTML("beforeend",u);return m.create(document.querySelector(".modal_movie")).show(),u})).catch((e=>{console.log(e)}))}(),document.addEventListener("DOMContentLoaded",(function(e){const t=document.querySelector(".header"),n=document.querySelector(".navigation"),o=document.querySelector(".my-library-buttons"),a=n.querySelector(".is-active");n.addEventListener("click",v),a&&a.classList.remove("is-active");switch(document.location.pathname){case"/":n.querySelector("[data-menu='home']").classList.add("is-active"),o.classList.add("is-hidden"),t.classList.contains("library")&&t.remove("library");break;case"/myLibrary.html":n.querySelector("[data-menu='my-library']").classList.add("is-active"),o.classList.contains("is-hidden")&&o.remove("is-hidden"),t.classList.add("library")}}));document.getElementById("checkbox").addEventListener("change",(()=>{document.body.classList.toggle("dark")}));
//# sourceMappingURL=index.b4b1edd2.js.map

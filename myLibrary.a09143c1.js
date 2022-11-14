function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},n.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("clyQT",(function(t,n){e(t.exports,"renderMovies",(function(){return c})),e(t.exports,"updateBtnStatus",(function(){return l}));var i=s("2dqxC"),r=s("gJRQ6"),o=s("i2O9m"),a=s("kPAA9"),u=s("5jXsB");async function c(){const e=new FormData(a.refs.filter).get("filter");try{const t=await r.dbFirebase.getMovies({userId:u.user.uid,[e]:!0});t.forEach((e=>{var t;const n=null!==(t=e.genres)&&void 0!==t?t:[];e.genre_ids=n.map((({id:e})=>e))}));const n=(0,i.markupMovieCards)(t,[...o.genres],!0).join("");a.refs.gallery.innerHTML=n}catch(e){console.error(e)}}function l(){const e=document.querySelector('.js-movie-buttons input[value="isQueued"]'),t=document.querySelector('.js-movie-buttons input[value="isWatched"]'),n=document.querySelector(".js-remove-button"),i=document.querySelector('.js-movie-buttons input[value="isWatched"] + span'),s=document.querySelector('.js-movie-buttons input[value="isQueued"] + span'),o=document.querySelector(".js-movie-buttons");u.user?(e.checked=r.dbFirebase.cachedMovie.isQueued,t.checked=r.dbFirebase.cachedMovie.isWatched,r.dbFirebase.cachedMovie.isWatched&&(i.innerHTML="Watched",s.innerHTML="Add to queued"),r.dbFirebase.cachedMovie.isQueued&&(i.innerHTML="Add to watched",s.innerHTML="Queued"),r.dbFirebase.cachedMovie.isWatched||r.dbFirebase.cachedMovie.isQueued?n.style.display="inline-block":(n.style.display="none",i.innerHTML="Add to watched",s.innerHTML="Add to queued")):o.style.display="none"}})),s.register("2dqxC",(function(n,i){e(n.exports,"markupMovieCards",(function(){return o}));var r=s("k194x");function o(e,n,i=!1){return e.map((({title:e,poster_path:s,release_date:o,genre_ids:a,id:u,vote_average:c})=>{const l=s?"https://image.tmdb.org/t/p/w500"+s:t(r),d=o?o.slice(0,4):" No year",h=function(e,t){if(t.length<1)return"Genre not specified";const n=e.filter((e=>t.includes(e.id))).map((e=>e.name));n.length>2&&n.splice(2,n.length,"Other");return n.join(", ")}(n,a);return`<li class="gallery__item" data-movieid="${u}">\n              <a href="#" gallery__item-link>\n              <img src="${l}" alt="${e}" class="gallery__item-poster">\n               <div class=" gallery__item-descr-wrap">\n                 <h2 class="gallery__item-title">${e}</h2>\n                 <p class="gallery__item-genre">${h} <span class="gallery__item-date">| ${d}</span> ${i?`<span class="rating">${c.toFixed(1)}</span>`:""}</p>\n              </div>\n              </a>\n            </li>`}))}})),s.register("k194x",(function(e,t){e.exports=new URL(s("kyEFX").resolve("g7XmX"),import.meta.url).toString()})),s.register("gJRQ6",(function(n,i){e(n.exports,"dbFirebase",(function(){return l}));var r=s("jkMrE"),o=s("g6yUq"),a=s("gMe87"),u=s("5I6z3"),c=(u=s("5I6z3"),new WeakMap);const l=new class{get cachedMovie(){return t(r)(this,c)}set cachedMovie({userId:e,isWatched:n,isQueued:i,movieDetails:r}){t(a)(this,c,{userId:e,isWatched:n,isQueued:i,movieDetails:r})}async addMovie({userId:e,isQueued:t,isWatched:n,movieDetails:i}){if(!e||!i.id)return null;if(void 0===n&&void 0===t)return null;void 0!==t?n=!t:t=!n;const r={isWatched:n,isQueued:t,movieDetails:i},s=`${e}/${i.id}`;(0,u.writeDB)(s,r)}async removeMovie({userId:e,movieId:t}){const n=`${e}/${t}`;await(0,u.removeDB)(n)}async getMovie({userId:e,movieId:t}){const n=`${e}/${t}`;var i;return null!==(i=await(0,u.readDB)(n))&&void 0!==i?i:{}}async getMovies({userId:e,isWatched:t,isQueued:n}){let i=[];const r=`${e}`,s=await(0,u.readDB)(r),o=[];if(void 0===t&&void 0===n){for(const e in s)o.push(s[e].movieDetails);return o}if(t){const e=[];for(const t in s)s[t].isWatched&&e.push(s[t].movieDetails);e&&(i=[...i,...e])}if(n){const e=[];for(const t in s)s[t].isQueued&&e.push(s[t].movieDetails);e&&(i=[...i,...e])}return i}constructor(){t(o)(this,c,{writable:!0,value:void 0})}}})),s.register("jkMrE",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var r=n.default(e,t,"get");return i.default(e,r)};var n=r(s("fExtF")),i=r(s("iaRLo"));function r(e){return e&&e.__esModule?e:{default:e}}})),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("g6yUq",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){i.default(e,t),t.set(e,n)};var n,i=(n=s("7K24o"))&&n.__esModule?n:{default:n}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("gMe87",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){var s=n.default(e,t,"set");return i.default(e,s,r),r};var n=r(s("fExtF")),i=r(s("3LGG3"));function r(e){return e&&e.__esModule?e:{default:e}}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),s.register("5I6z3",(function(t,n){e(t.exports,"auth",(function(){return c})),e(t.exports,"openAuth",(function(){return f})),e(t.exports,"closeAuth",(function(){return p})),e(t.exports,"writeDB",(function(){return g})),e(t.exports,"removeDB",(function(){return m})),e(t.exports,"readDB",(function(){return v})),s("25RCP");var i=s("ix4Jr");s("amyG6");var r=s("30XCk");s("fQ3Fn");var o=s("8NPS8"),a=s("23RrO");const u=(0,i.initializeApp)({apiKey:"AIzaSyDAh0--4StEyCvmB2VJ_PH6ONW26JdL9C0",authDomain:"filmoteka-94bd5.firebaseapp.com",projectId:"filmoteka-94bd5",storageBucket:"filmoteka-94bd5.appspot.com",messagingSenderId:"831703461405",appId:"1:831703461405:web:8e5fcd7e5573f18627a0f4",databaseURL:"https://filmoteka-94bd5-default-rtdb.europe-west1.firebasedatabase.app"}),c=(0,r.n)(u),l=(0,o.getDatabase)(u),d=new a.auth.AuthUI(c),h={signInOptions:[{provider:r.Q.PROVIDER_ID},{provider:r.M.PROVIDER_ID,requireDisplayName:!1}],callbacks:{signInSuccessWithAuthResult:e=>{}},signInFlow:"popup"};function f(){d.start(".js-login-ui",h)}function p(){d.reset()}async function g(e,t){await(0,o.set)((0,o.ref)(l,e),t)}async function m(e){await(0,o.remove)((0,o.ref)(l,e))}async function v(e){return(await(0,o.get)((0,o.ref)(l,e))).val()}})),s.register("25RCP",(function(e,t){var n,i,r=s("ix4Jr");
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
(0,(r=s("ix4Jr")).registerVersion)("firebase","9.13.0","app"),n=e.exports,i=r,Object.keys(i).forEach((function(e){"default"===e||"__esModule"===e||n.hasOwnProperty(e)||Object.defineProperty(n,e,{enumerable:!0,get:function(){return i[e]}})}))})),s.register("ix4Jr",(function(t,n){e(t.exports,"_DEFAULT_ENTRY_NAME",(function(){return h})),e(t.exports,"_apps",(function(){return p})),e(t.exports,"_components",(function(){return g})),e(t.exports,"_addComponent",(function(){return m})),e(t.exports,"_addOrOverwriteComponent",(function(){return v})),e(t.exports,"_registerComponent",(function(){return y})),e(t.exports,"_getProvider",(function(){return b})),e(t.exports,"_removeServiceInstance",(function(){return _})),e(t.exports,"_clearComponents",(function(){return w})),e(t.exports,"SDK_VERSION",(function(){return k})),e(t.exports,"initializeApp",(function(){return S})),e(t.exports,"getApp",(function(){return T})),e(t.exports,"getApps",(function(){return A})),e(t.exports,"deleteApp",(function(){return R})),e(t.exports,"registerVersion",(function(){return x})),e(t.exports,"onLog",(function(){return P})),e(t.exports,"setLogLevel",(function(){return N})),e(t.exports,"FirebaseError",(function(){return s("ffjl9").FirebaseError}));var i=s("4a6xH"),r=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
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
class u{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const c="@firebase/app",l="0.8.3",d=new(0,r.Logger)("@firebase/app"),h="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e,t){e.container.addOrOverwriteComponent(t)}function y(e){const t=e.name;if(g.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;g.set(t,e);for(const t of p.values())m(t,e);return!0}function b(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function _(e,t,n=h){b(e,t).clearInstance(n)}function w(){g.clear()}
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
 */const I={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,o.ErrorFactory)("app","Firebase",I);
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
class C{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}}
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
 */const k="9.13.0";function S(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw E.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw E.create("no-options");const a=p.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(r,a.config))return a;throw E.create("duplicate-app",{appName:s})}const u=new(0,i.ComponentContainer)(s);for(const e of g.values())u.addComponent(e);const c=new C(n,r,u);return p.set(s,c),c}function T(e=h){const t=p.get(e);if(!t&&e===h)return S();if(!t)throw E.create("no-app",{appName:e});return t}function A(){return Array.from(p.values())}async function R(e){const t=e.name;p.has(t)&&(p.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function x(e,t,n){var r;let s=null!==(r=f[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}y(new(0,i.Component)(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function P(e,t){if(null!==e&&"function"!=typeof e)throw E.create("invalid-log-argument");(0,r.setUserLogHandler)(e,t)}function N(e){(0,r.setLogLevel)(e)}
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
 */const O="firebase-heartbeat-store";let L=null;function D(){return L||(L=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(O)}}).catch((e=>{throw E.create("idb-open",{originalErrorMessage:e.message})}))),L}async function M(e,t){var n;try{const n=(await D()).transaction(O,"readwrite"),i=n.objectStore(O);return await i.put(t,F(e)),n.done}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{const t=E.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});d.warn(t.message)}}}function F(e){return`${e.name}!${e.options.appId}`}
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
 */class U{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=j();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=j(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),q(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),q(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new B(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function j(){return(new Date).toISOString().substring(0,10)}class B{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await D()).transaction(O).objectStore(O).get(F(e))}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{const n=E.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});d.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function q(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var V;V="",y(new(0,i.Component)("platform-logger",(e=>new u(e)),"PRIVATE")),y(new(0,i.Component)("heartbeat",(e=>new U(e)),"PRIVATE")),x(c,l,V),x(c,l,"esm2017"),x("fire-js","")})),s.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return r})),e(t.exports,"ComponentContainer",(function(){return u}));var i=s("ffjl9");class r{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
 */const o="[DEFAULT]";
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
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===o?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class u{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),s.register("ffjl9",(function(t,i){e(t.exports,"assert",(function(){return c})),e(t.exports,"assertionError",(function(){return l})),e(t.exports,"base64",(function(){return h})),e(t.exports,"base64Encode",(function(){return f})),e(t.exports,"base64urlEncodeWithoutPadding",(function(){return p})),e(t.exports,"base64Decode",(function(){return g})),e(t.exports,"deepCopy",(function(){return m})),e(t.exports,"deepExtend",(function(){return v})),e(t.exports,"getUA",(function(){return y})),e(t.exports,"isMobileCordova",(function(){return b})),e(t.exports,"isNode",(function(){return _})),e(t.exports,"isBrowser",(function(){return w})),e(t.exports,"isBrowserExtension",(function(){return I})),e(t.exports,"isReactNative",(function(){return E})),e(t.exports,"isIE",(function(){return C})),e(t.exports,"isNodeSdk",(function(){return k})),e(t.exports,"isIndexedDBAvailable",(function(){return S})),e(t.exports,"validateIndexedDBOpenable",(function(){return T})),e(t.exports,"getDefaultEmulatorHost",(function(){return x})),e(t.exports,"getDefaultEmulatorHostnameAndPort",(function(){return P})),e(t.exports,"getDefaultAppConfig",(function(){return N})),e(t.exports,"getExperimentalSetting",(function(){return O})),e(t.exports,"Deferred",(function(){return L})),e(t.exports,"createMockUserToken",(function(){return D})),e(t.exports,"FirebaseError",(function(){return M})),e(t.exports,"ErrorFactory",(function(){return F})),e(t.exports,"jsonEval",(function(){return j})),e(t.exports,"stringify",(function(){return B})),e(t.exports,"isValidFormat",(function(){return V})),e(t.exports,"isAdmin",(function(){return H})),e(t.exports,"contains",(function(){return W})),e(t.exports,"safeGet",(function(){return z})),e(t.exports,"isEmpty",(function(){return G})),e(t.exports,"map",(function(){return K})),e(t.exports,"deepEqual",(function(){return $})),e(t.exports,"querystring",(function(){return J})),e(t.exports,"querystringDecode",(function(){return X})),e(t.exports,"extractQuerystring",(function(){return Q})),e(t.exports,"Sha1",(function(){return Z})),e(t.exports,"createSubscribe",(function(){return ee})),e(t.exports,"errorPrefix",(function(){return ie})),e(t.exports,"stringToByteArray",(function(){return re})),e(t.exports,"stringLength",(function(){return se})),e(t.exports,"getModularInstance",(function(){return oe}));var r=s("4TNnu");
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
 */const o=!1,a=!1,u="${JSCORE_VERSION}",c=function(e,t){if(!e)throw l(t)},l=function(e){return new Error("Firebase Database ("+u+") INTERNAL ASSERT FAILED: "+e)},d=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,c=r>>2,l=(3&r)<<4|o>>4;let d=(15&o)<<2|u>>6,h=63&u;a||(h=64,s||(d=64)),i.push(n[c],n[l],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(d(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const u=r<<2|s>>4;if(i.push(u),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},f=function(e){const t=d(e);return h.encodeByteArray(t,!0)},p=function(e){return f(e).replace(/\./g,"")},g=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function m(e){return v(void 0,e)}function v(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=v(e[n],t[n]));return e}
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
function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function _(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}function w(){return"object"==typeof self&&self.self===self}function I(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function E(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function C(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){return!0===o||!0===a}function S(){return"object"==typeof indexedDB}function T(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
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
const A=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,R=()=>{try{return A()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&g(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},x=e=>{var t,n;return null===(n=null===(t=R())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},P=e=>{const t=x(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},N=()=>{var e;return null===(e=R())||void 0===e?void 0:e.config},O=e=>{var t;return null===(t=R())||void 0===t?void 0:t[`_${e}`]};
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
class L{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function D(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[p(JSON.stringify({alg:"none",type:"JWT"})),p(JSON.stringify(s)),""].join(".")}
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
 */class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(U,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new M(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const U=/\{\$([^}]+)}/g;
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
 */function j(e){return JSON.parse(e)}function B(e){return JSON.stringify(e)}
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
 */const q=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=j(g(s[0])||""),n=j(g(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},V=function(e){const t=q(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},H=function(e){const t=q(e).claims;return"object"==typeof t&&!0===t.admin};
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
function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function G(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function K(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function $(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Y(n)&&Y(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Y(e){return null!==e&&"object"==typeof e}
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
function J(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function X(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class Z{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],u=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=u^o&(a^u),r=1518500249):(i=o^a^u,r=1859775393):e<60?(i=o&a|u&(o|a),r=2400959708):(i=o^a^u,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=u,u=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function ee(e,t){const n=new te(e,t);return n.subscribe.bind(n)}class te{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ne),void 0===i.error&&(i.error=ne),void 0===i.complete&&(i.complete=ne);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ne(){}
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
 */function ie(e,t){return`${e} failed: ${t} argument `}
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
const re=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,c(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},se=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function oe(e){return e&&e._delegate?e._delegate:e}})),s.register("4TNnu",(function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var u,c=[],l=!1,d=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),s.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return r})),e(t.exports,"Logger",(function(){return l})),e(t.exports,"setLogLevel",(function(){return d})),e(t.exports,"setUserLogHandler",(function(){return h}));
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
const i=[];var r,s;(s=r||(r={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,u={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=u[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,i.push(this)}}function d(e){i.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=o[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}})),s.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return r}));var i=s("ekHjI");i=s("ekHjI");function r(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),u=(0,i.w)(a);return r&&a.addEventListener("upgradeneeded",(e=>{r((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),u.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),u}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],u=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(u.get(t))return u.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!o.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return u.set(t,s),s}(0,i.r)((e=>({...e,get:(t,n,i)=>c(t,n)||e.get(t,n,i),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),s.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return p})),e(t.exports,"r",(function(){return d}));let i,r;const s=new WeakMap,o=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){l=e(l)}function h(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),p(s.get(this))}:function(...t){return p(e.apply(g(this),t))}:function(t,...n){const i=e.call(g(this),t,...n);return a.set(i,t.sort?t.sort():[t]),p(i)}}function f(e){return"function"==typeof e?h(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));o.set(e,t)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,l):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(p(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&s.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=f(e);return t!==e&&(u.set(e,t),c.set(t,e)),t}const g=e=>c.get(e)})),s.register("amyG6",(function(t,n){e(t.exports,"getAuth",(function(){return s("30XCk").n})),e(t.exports,"GoogleAuthProvider",(function(){return s("30XCk").Q})),e(t.exports,"EmailAuthProvider",(function(){return s("30XCk").M})),s("1iO0g")})),s.register("1iO0g",(function(t,n){e(t.exports,"EmailAuthProvider",(function(){return s("30XCk").M})),e(t.exports,"GoogleAuthProvider",(function(){return s("30XCk").Q})),e(t.exports,"getAuth",(function(){return s("30XCk").n})),s("ffjl9"),s("ix4Jr"),s("7vF8m"),s("4a6xH");s("30XCk")})),s.register("30XCk",(function(t,n){e(t.exports,"o",(function(){return c})),e(t.exports,"A",(function(){return l})),e(t.exports,"B",(function(){return h})),e(t.exports,"as",(function(){return v})),e(t.exports,"aw",(function(){return y})),e(t.exports,"ax",(function(){return I})),e(t.exports,"ap",(function(){return C})),e(t.exports,"az",(function(){return S})),e(t.exports,"L",(function(){return Z})),e(t.exports,"aA",(function(){return ee})),e(t.exports,"ar",(function(){return ae})),e(t.exports,"aq",(function(){return le})),e(t.exports,"av",(function(){return de})),e(t.exports,"aE",(function(){return me})),e(t.exports,"G",(function(){return ye})),e(t.exports,"H",(function(){return we})),e(t.exports,"J",(function(){return Te})),e(t.exports,"M",(function(){return Pe})),e(t.exports,"U",(function(){return Le})),e(t.exports,"N",(function(){return De})),e(t.exports,"Q",(function(){return Me})),e(t.exports,"T",(function(){return Fe})),e(t.exports,"aL",(function(){return Ue})),e(t.exports,"V",(function(){return je})),e(t.exports,"W",(function(){return Be})),e(t.exports,"X",(function(){return We})),e(t.exports,"ak",(function(){return $e})),e(t.exports,"Y",(function(){return Ze})),e(t.exports,"Z",(function(){return et})),e(t.exports,"_",(function(){return tt})),e(t.exports,"$",(function(){return nt})),e(t.exports,"a0",(function(){return ot})),e(t.exports,"a1",(function(){return at})),e(t.exports,"a2",(function(){return ut})),e(t.exports,"a3",(function(){return ct})),e(t.exports,"a4",(function(){return lt})),e(t.exports,"a5",(function(){return dt})),e(t.exports,"a6",(function(){return ht})),e(t.exports,"a7",(function(){return ft})),e(t.exports,"a8",(function(){return pt})),e(t.exports,"a9",(function(){return gt})),e(t.exports,"aa",(function(){return mt})),e(t.exports,"ab",(function(){return vt})),e(t.exports,"ac",(function(){return yt})),e(t.exports,"af",(function(){return bt})),e(t.exports,"ag",(function(){return _t})),e(t.exports,"ah",(function(){return wt})),e(t.exports,"al",(function(){return Rt})),e(t.exports,"an",(function(){return Nt})),e(t.exports,"ao",(function(){return Dt})),e(t.exports,"b",(function(){return jt})),e(t.exports,"a",(function(){return qt})),e(t.exports,"aI",(function(){return Ht})),e(t.exports,"i",(function(){return nn})),e(t.exports,"R",(function(){return gn})),e(t.exports,"s",(function(){return vn})),e(t.exports,"l",(function(){return yn})),e(t.exports,"r",(function(){return bn})),e(t.exports,"u",(function(){return wn})),e(t.exports,"P",(function(){return In})),e(t.exports,"c",(function(){return xn})),e(t.exports,"e",(function(){return Pn})),e(t.exports,"d",(function(){return Nn})),e(t.exports,"aD",(function(){return Fn})),e(t.exports,"aC",(function(){return Un})),e(t.exports,"f",(function(){return qn})),e(t.exports,"h",(function(){return Vn})),e(t.exports,"g",(function(){return Hn})),e(t.exports,"j",(function(){return Wn})),e(t.exports,"aB",(function(){return zn})),e(t.exports,"ay",(function(){return Kn})),e(t.exports,"au",(function(){return Jn})),e(t.exports,"at",(function(){return hi})),e(t.exports,"k",(function(){return pi})),e(t.exports,"m",(function(){return mi})),e(t.exports,"n",(function(){return Ii}));var i=s("ffjl9"),r=s("ix4Jr"),o=s("7vF8m"),a=s("l73V3"),u=s("4a6xH");
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
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=
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
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},f=d,p=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),g=new(0,o.Logger)("@firebase/auth");function m(e,...t){g.logLevel<=o.LogLevel.ERROR&&g.error(`Auth (${r.SDK_VERSION}): ${e}`,...t)}
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
 */function v(e,...t){throw w(e,...t)}function y(e,...t){return w(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n});return new(0,i.ErrorFactory)("auth","Firebase",r).create(t,{appName:e.name})}function _(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw w(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function C(e,t){e||E(t)}
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
 */const k=new Map;function S(e){C(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
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
function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===R()||"https:"===R()}function R(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class x{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(A()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}}
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
 */function P(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const O={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},L=new x(3e4,6e4);
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
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,r,s={}){return F(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),N.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))}))}async function F(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},O),t);try{const t=new B(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw q(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);v(e,a)}}catch(t){if(t instanceof i.FirebaseError)throw t;v(e,"network-request-failed")}}async function U(e,t,n,i,r={}){const s=await M(e,t,n,i,r);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function j(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?P(e.config,r):`${e.config.apiScheme}://${r}`}class B{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(y(this.auth,"network-request-failed"))),L.get())}))}}function q(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=y(e,t,i);return r.customData._tokenResponse=n,r}
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
function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function H(e){return 1e3*Number(e)}function W(e){var t;const[n,r,s]=e.split(".");if(void 0===n||void 0===r||void 0===s)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(r);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(e){return m("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
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
async function z(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class G{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class K{_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function $(e){var t;const n=e.auth,i=await e.getIdToken(),r=await z(e,async function(e,t){return M(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));I(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const u=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const d=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==u?void 0:u.length)),f=!!d&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new K(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
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
class Y{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(void 0!==e.idToken,"internal-error"),I(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=W(e);return I(t,"internal-error"),I(void 0!==t.exp,"internal-error"),I(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
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
async function(e,t){const n=await F(e,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=j(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Y;return n&&(I("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(I("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(I("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Y,this.toJSON())}_performRefresh(){return E("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function J(e,t){I("string"==typeof e||void 0===e,"internal-error",{appName:t})}class X{async getIdToken(e){const t=await z(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),r=await n.getIdToken(t),s=W(r);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:V(H(s.auth_time)),issuedAtTime:V(H(s.iat)),expirationTime:V(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await $(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new X(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await z(this,async function(e,t){return M(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=t.createdAt)&&void 0!==u?u:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:E}=t;I(y&&E,e,"internal-error");const C=Y.fromJSON(this.name,E);I("string"==typeof y,e,"internal-error"),J(l,e.name),J(d,e.name),I("boolean"==typeof b,e,"internal-error"),I("boolean"==typeof _,e,"internal-error"),J(h,e.name),J(f,e.name),J(p,e.name),J(g,e.name),J(m,e.name),J(v,e.name);const k=new X({uid:y,auth:e,email:d,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(k.providerData=w.map((e=>Object.assign({},e)))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,n=!1){const i=new Y;i.updateFromServerResponse(t);const r=new X({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new K(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */class Q{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Q.type="NONE";const Z=Q;
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
 */function ee(e,t,n){return`firebase:${e}:${t}:${n}`}class te{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?X._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new te(S(Z),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||S(Z);const s=ee(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=X._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new te(r,e,n)):new te(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ee(this.userKey,i.apiKey,r),this.fullPersistenceKey=ee("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function ne(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(oe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ie(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ue(t))return"Blackberry";if(ce(t))return"Webos";if(re(t))return"Safari";if((t.includes("chrome/")||se(t))&&!t.includes("edge/"))return"Chrome";if(ae(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ie(e=(0,i.getUA)()){return/firefox\//i.test(e)}function re(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function se(e=(0,i.getUA)()){return/crios\//i.test(e)}function oe(e=(0,i.getUA)()){return/iemobile/i.test(e)}function ae(e=(0,i.getUA)()){return/android/i.test(e)}function ue(e=(0,i.getUA)()){return/blackberry/i.test(e)}function ce(e=(0,i.getUA)()){return/webos/i.test(e)}function le(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function de(e=(0,i.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function he(e=(0,i.getUA)()){return le(e)||ae(e)||ce(e)||ue(e)||/windows phone/i.test(e)||oe(e)}
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
function fe(e,t=[]){let n;switch(e){case"Browser":n=ne((0,i.getUA)());break;case"Worker":n=`${ne((0,i.getUA)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${s}`}
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
 */class pe{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class ge{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=S(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await te.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await $(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.getModularInstance)(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(S(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&S(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await te.create(this,[S(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ve(this),this.idTokenSubscription=new ve(this),this.beforeStateQueue=new pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function me(e){return(0,i.getModularInstance)(e)}class ve{get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)((e=>this.observer=e))}}function ye(e,t,n){const i=me(e);I(i._canInitEmulator,i,"emulator-config-failed"),I(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=be(t),{host:o,port:a}=function(e){const t=be(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:_e(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:_e(t)}}}(t),u=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function be(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _e(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class we{toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Ie(e,t){return M(e,"POST","/v1/accounts:resetPassword",D(e,t))}async function Ee(e,t){return M(e,"POST","/v1/accounts:update",t)}async function Ce(e,t){return M(e,"POST","/v1/accounts:sendOobCode",D(e,t))}
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
class ke extends we{static _fromEmailAndPassword(e,t){return new ke(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ke(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function Se(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
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
 */class Te extends we{static _fromParams(e){const t=new Te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=(0,a.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Te(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Se(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Se(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Se(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Ae={USER_NOT_FOUND:"user-not-found"};
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
class Re extends we{static _fromVerification(e,t){return new Re({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Re({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ae)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Re({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class xe{static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,r=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(r?(0,i.querystringDecode)((0,i.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new xe(t)}catch(e){return null}}constructor(e){var t,n,r,s,o,a;const u=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),c=null!==(t=u.apiKey)&&void 0!==t?t:null,l=null!==(n=u.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=u.mode)&&void 0!==r?r:null);I(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(s=u.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=u.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=u.tenantId)&&void 0!==a?a:null}}
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
class Pe{static credential(e,t){return ke._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=xe.parseLink(t);return I(n,"argument-error"),ke._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Pe.PROVIDER_ID}}Pe.PROVIDER_ID="password",Pe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Pe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ne{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Oe extends Ne{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class Le extends Oe{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),Te._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),Te._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Le.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Le.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!(n||i||t||r))return null;if(!o)return null;try{return new Le(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(e){return null}}}
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
 */class De extends Oe{static credential(e){return Te._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com",De.PROVIDER_ID="facebook.com";
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
class Me extends Oe{static credential(e,t){return Te._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Me.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Me.GOOGLE_SIGN_IN_METHOD="google.com",Me.PROVIDER_ID="google.com";
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
class Fe extends Oe{static credential(e){return Te._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";class Ue extends we{_getIdTokenResponse(e){return Se(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Se(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Se(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new Ue(n,r):null}static _create(e,t){return new Ue(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}constructor(e,t){super(e,e),this.pendingToken=t}}
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
 */class je extends Ne{static credentialFromResult(e){return je.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return je.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ue.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ue._create(n,t)}catch(e){return null}}constructor(e){I(e.startsWith("saml."),"argument-error"),super(e)}}
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
 */class Be extends Oe{static credential(e,t){return Te._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Be.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function qe(e,t){return U(e,"POST","/v1/accounts:signUp",D(e,t))}
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
 */Be.TWITTER_SIGN_IN_METHOD="twitter.com",Be.PROVIDER_ID="twitter.com";class Ve{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await X._fromIdTokenResponse(e,n,i),s=He(n);return new Ve({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=He(n);return new Ve({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function He(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */async function We(e){var t;const n=me(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ve({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await qe(n,{returnSecureToken:!0}),r=await Ve._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
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
 */class ze extends i.FirebaseError{static _fromErrorAndOperation(e,t,n,i){return new ze(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ze.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Ge(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ze._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */function Ke(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
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
 */async function $e(e,t){const n=(0,i.getModularInstance)(e);await Je(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return M(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ke(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ye(e,t,n=!1){const i=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ve._forOperation(e,"link",i)}async function Je(e,t,n){await $(t);const i=!1===e?"provider-already-linked":"no-such-provider";I(Ke(t.providerData).has(n)===e,t.auth,i)}
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
 */async function Xe(e,t,n=!1){var i;const{auth:r}=e,s="reauthenticate";try{const i=await z(e,Ge(r,s,t,e),n);I(i.idToken,r,"internal-error");const o=W(i.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),Ve._forOperation(e,s,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&v(r,"user-mismatch"),e}}
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
 */async function Qe(e,t,n=!1){const i="signIn",r=await Ge(e,i,t),s=await Ve._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Ze(e,t){return Qe(me(e),t)}async function et(e,t){const n=(0,i.getModularInstance)(e);return await Je(!1,n,t.providerId),Ye(n,t)}async function tt(e,t){return Xe((0,i.getModularInstance)(e),t)}
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
async function nt(e,t){const n=me(e),i=await async function(e,t){return U(e,"POST","/v1/accounts:signInWithCustomToken",D(e,t))}(n,{token:t,returnSecureToken:!0}),r=await Ve._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
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
 */class it{static _fromServerResponse(e,t){return"phoneInfo"in t?rt._fromServerResponse(e,t):v(e,"internal-error")}constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}}class rt extends it{static _fromServerResponse(e,t){return new rt(t)}constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}}
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
 */function st(e,t,n){var i;I((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),I(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function ot(e,t,n){const r=(0,i.getModularInstance)(e),s={requestType:"PASSWORD_RESET",email:t};n&&st(r,s,n),await async function(e,t){return Ce(e,t)}(r,s)}async function at(e,t,n){await Ie((0,i.getModularInstance)(e),{oobCode:t,newPassword:n})}async function ut(e,t){await async function(e,t){return M(e,"POST","/v1/accounts:update",D(e,t))}((0,i.getModularInstance)(e),{oobCode:t})}async function ct(e,t){const n=(0,i.getModularInstance)(e),r=await Ie(n,{oobCode:t}),s=r.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=it._fromServerResponse(me(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function lt(e,t){const{data:n}=await ct((0,i.getModularInstance)(e),t);return n.email}async function dt(e,t,n){const i=me(e),r=await qe(i,{returnSecureToken:!0,email:t,password:n}),s=await Ve._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function ht(e,t,n){return Ze((0,i.getModularInstance)(e),Pe.credential(t,n))}
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
 */async function ft(e,t,n){const r=(0,i.getModularInstance)(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,r,"argument-error"),n&&st(r,s,n),await async function(e,t){return Ce(e,t)}(r,s)}function pt(e,t){const n=xe.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function gt(e,t,n){const r=(0,i.getModularInstance)(e),s=Pe.credentialWithLink(t,n||T());return I(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ze(r,s)}
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
async function mt(e,t){const n={identifier:t,continueUri:A()?T():"http://localhost"},{signinMethods:r}=await async function(e,t){return M(e,"POST","/v1/accounts:createAuthUri",D(e,t))}((0,i.getModularInstance)(e),n);return r||[]}async function vt(e,t){const n=(0,i.getModularInstance)(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&st(n.auth,r,t);const{email:s}=await async function(e,t){return Ce(e,t)}(n.auth,r);s!==e.email&&await e.reload()}async function yt(e,t,n){const r=(0,i.getModularInstance)(e),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&st(r.auth,s,n);const{email:o}=await async function(e,t){return Ce(e,t)}(r.auth,s);o!==e.email&&await e.reload()}
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
async function bt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.getModularInstance)(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await z(r,async function(e,t){return M(e,"POST","/v1/accounts:update",t)}(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _t(e,t){return It((0,i.getModularInstance)(e),t,null)}function wt(e,t){return It((0,i.getModularInstance)(e),null,t)}async function It(e,t,n){const{auth:i}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);const s=await z(e,Ee(i,r));await e._updateTokensIfNecessary(s,!0)}
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
 */class Et{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Ct extends Et{constructor(e,t,n,i){super(e,t,n),this.username=i}}class kt extends Et{constructor(e,t){super(e,"facebook.com",t)}}class St extends Ct{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class Tt extends Et{constructor(e,t){super(e,"google.com",t)}}class At extends Ct{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Rt(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){const i=null===(n=null===(t=W(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i)return new Et(s,"anonymous"!==i&&"custom"!==i?i:null)}if(!i)return null;switch(i){case"facebook.com":return new kt(s,r);case"github.com":return new St(s,r);case"google.com":return new Tt(s,r);case"twitter.com":return new At(s,r,e.screenName||null);case"custom":case"anonymous":return new Et(s,null);default:return new Et(s,i,r)}}(n)}
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
 */class xt{static _fromIdtoken(e,t){return new xt("enroll",e,t)}static _fromMfaPendingCredential(e){return new xt("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return xt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return xt._fromIdtoken(e.multiFactorSession.idToken)}return null}constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}}
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
 */class Pt{static _fromError(e,t){const n=me(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>it._fromServerResponse(n,e)));I(i.mfaPendingCredential,n,"internal-error");const s=xt._fromMfaPendingCredential(i.mfaPendingCredential);return new Pt(s,r,(async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Ve._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),Ve._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}}function Nt(e,t){var n;const r=(0,i.getModularInstance)(e),s=t;return I(t.customData.operationType,r,"argument-error"),I(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Pt._fromError(r,s)}
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
 */class Ot{static _fromUser(e){return new Ot(e)}async getSession(){return xt._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),r=await z(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var t;const n="string"==typeof e?e:e.uid,i=await this.user.getIdToken(),r=await z(this.user,(s=this.user.auth,o={idToken:i,mfaEnrollmentId:n},M(s,"POST","/v2/accounts/mfaEnrollment:withdraw",D(s,o))));var s,o;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null===(t=e)||void 0===t?void 0:t.code))throw e}}constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>it._fromServerResponse(e.auth,t))))}))}}const Lt=new WeakMap;function Dt(e){const t=(0,i.getModularInstance)(e);return Lt.has(t)||Lt.set(t,Ot._fromUser(t)),Lt.get(t)}const Mt="__sak";
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
 */class Ft{_isAvailable(){try{return this.storage?(this.storage.setItem(Mt,"1"),this.storage.removeItem(Mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Ut extends Ft{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.getUA)();return re(e)||le(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=he(),this._shouldAllowMigration=!0}}Ut.type="LOCAL";const jt=Ut;
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
 */class Bt extends Ft{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Bt.type="SESSION";const qt=Bt;
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
class Vt{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Vt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Ht(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Vt.receivers=[];class Wt{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const u=Ht("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function zt(){return window}
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
function Gt(){return void 0!==zt().WorkerGlobalScope&&"function"==typeof zt().importScripts}
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
const Kt="firebaseLocalStorageDb",$t="firebaseLocalStorage",Yt="fbase_key";class Jt{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Xt(e,t){return e.transaction([$t],t?"readwrite":"readonly").objectStore($t)}function Qt(){const e=indexedDB.open(Kt,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore($t,{keyPath:Yt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains($t)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Kt);return new Jt(e).toPromise()}(),t(await Qt()))}))}))}async function Zt(e,t,n){const i=Xt(e,!0).put({[Yt]:t,value:n});return new Jt(i).toPromise()}function en(e,t){const n=Xt(e,!0).delete(t);return new Jt(n).toPromise()}class tn{async _openDb(){return this.db||(this.db=await Qt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vt._getInstance(Gt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Wt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qt();return await Zt(e,Mt,"1"),await en(e,Mt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Xt(e,!1).get(t),i=await new Jt(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>en(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xt(e,!1).getAll();return new Jt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}tn.type="LOCAL";const nn=tn;
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
 */function rn(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function sn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */const on=1e12;class an{render(e,t){const n=this.counter;return this._widgets.set(n,new un(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||on;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||on;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||on;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}constructor(e){this.auth=e,this.counter=on,this._widgets=new Map}}class un{getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
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
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"==typeof e?document.getElementById(e):e;I(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}}const cn=sn("rcb"),ln=new x(3e4,6e4);class dn{load(e,t=""){return I(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(zt().grecaptcha):new Promise(((n,r)=>{const s=zt().setTimeout((()=>{r(y(e,"network-request-failed"))}),ln.get());zt()[cn]=()=>{zt().clearTimeout(s),delete zt()[cn];const i=zt().grecaptcha;if(!i)return void r(y(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};rn(`https://www.google.com/recaptcha/api.js??${(0,i.querystring)({onload:cn,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(s),r(y(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=zt().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=zt().grecaptcha)||void 0===e?void 0:e.render)}}class hn{async load(e){return new an(e)}clearedOneInstance(){}}
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
 */const fn="recaptcha",pn={theme:"light",type:"image"};class gn{async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=zt()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(A()&&!Gt(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
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
async function(e){return(await M(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}constructor(e,t=Object.assign({},pn),n){this.parameters=t,this.type=fn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=me(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"==typeof e?document.getElementById(e):e;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hn:new dn,this.validateStartingState()}}class mn{confirm(e){const t=Re._fromVerification(this.verificationId,e);return this.onConfirmation(t)}constructor(e,t){this.verificationId=e,this.onConfirmation=t}}async function vn(e,t,n){const r=me(e),s=await _n(r,t,(0,i.getModularInstance)(n));return new mn(s,(e=>Ze(r,e)))}async function yn(e,t,n){const r=(0,i.getModularInstance)(e);await Je(!1,r,"phone");const s=await _n(r.auth,t,(0,i.getModularInstance)(n));return new mn(s,(e=>et(r,e)))}async function bn(e,t,n){const r=(0,i.getModularInstance)(e),s=await _n(r.auth,t,(0,i.getModularInstance)(n));return new mn(s,(e=>tt(r,e)))}async function _n(e,t,n){var i;const r=await n.verify();try{let s;if(I("string"==typeof r,e,"argument-error"),I(n.type===fn,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await function(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await function(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function wn(e,t){await Ye((0,i.getModularInstance)(e),t)}
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
 */class In{verifyPhoneNumber(e,t){return _n(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return Re._fromVerification(e,t)}static credentialFromResult(e){const t=e;return In.credentialFromTaggedObject(t)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Re._fromTokenResponse(t,n):null}constructor(e){this.providerId=In.PROVIDER_ID,this.auth=me(e)}}
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
function En(e,t){return t?S(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */In.PROVIDER_ID="phone",In.PHONE_SIGN_IN_METHOD="phone";class Cn extends we{_getIdTokenResponse(e){return Se(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Se(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Se(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function kn(e){return Qe(e.auth,new Cn(e),e.bypassAuthState)}function Sn(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Xe(n,new Cn(e),e.bypassAuthState)}async function Tn(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Ye(n,new Cn(e),e.bypassAuthState)}
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
 */class An{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kn;case"linkViaPopup":case"linkViaRedirect":return Tn;case"reauthViaPopup":case"reauthViaRedirect":return Sn;default:v(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Rn=new x(2e3,1e4);async function xn(e,t,n){const i=me(e);_(e,t,Ne);const r=En(i,n);return new On(i,"signInViaPopup",t,r).executeNotNull()}async function Pn(e,t,n){const r=(0,i.getModularInstance)(e);_(r.auth,t,Ne);const s=En(r.auth,n);return new On(r.auth,"reauthViaPopup",t,s,r).executeNotNull()}async function Nn(e,t,n){const r=(0,i.getModularInstance)(e);_(r.auth,t,Ne);const s=En(r.auth,n);return new On(r.auth,"linkViaPopup",t,s,r).executeNotNull()}class On extends An{async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=Ht();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Rn.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}}On.currentPopupAction=null;
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
const Ln=new Map;class Dn extends An{async execute(){let e=Ln.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Bn(t),i=jn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ln.set(this.auth._key(),e)}return this.bypassAuthState||Ln.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Mn(e,t){return jn(e)._set(Bn(t),"true")}function Fn(){Ln.clear()}function Un(e,t){Ln.set(e._key(),t)}function jn(e){return S(e._redirectPersistence)}function Bn(e){return ee("pendingRedirect",e.config.apiKey,e.name)}
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
 */function qn(e,t,n){return async function(e,t,n){const i=me(e);_(e,t,Ne);const r=En(i,n);return await Mn(r,i),r._openRedirect(i,t,"signInViaRedirect")}(e,t,n)}function Vn(e,t,n){return async function(e,t,n){const r=(0,i.getModularInstance)(e);_(r.auth,t,Ne);const s=En(r.auth,n);await Mn(s,r.auth);const o=await Gn(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}(e,t,n)}function Hn(e,t,n){return async function(e,t,n){const r=(0,i.getModularInstance)(e);_(r.auth,t,Ne);const s=En(r.auth,n);await Je(!1,r,t.providerId),await Mn(s,r.auth);const o=await Gn(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}(e,t,n)}async function Wn(e,t){return await me(e)._initializationPromise,zn(e,t,!1)}async function zn(e,t,n=!1){const i=me(e),r=En(i,t),s=new Dn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function Gn(e){const t=Ht(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */class Kn{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yn(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has($n(e))}saveEventToCache(e){this.cachedEventUids.add($n(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function $n(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function Jn(e,t={}){return M(e,"GET","/v1/projects",t)}
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
 */const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qn=/^https?/;function Zn(e){const t=T(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Qn.test(n))return!1;if(Xn.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const ei=new x(3e4,6e4);function ti(){const e=zt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ni=null;function ii(e){return ni=ni||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){ti(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ti(),n(y(e,"network-request-failed"))},timeout:ei.get()})}if(null===(r=null===(i=zt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=zt().gapi)||void 0===s?void 0:s.load)){const t=sn("iframefcb");return zt()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},rn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ni=null,e}))}(e),ni}
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
 */const ri=new x(5e3,15e3),si={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ai(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:r.SDK_VERSION},o=oi.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.querystring)(s).slice(1)}`}
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
const ui={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ci{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function li(e,t,n,r=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},ui),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.getUA)().toLowerCase();n&&(u=se(l)?"_blank":n),ie(l)&&(t=t||"http://localhost",c.scrollbars="yes");const d=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.getUA)()){var t;return le(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==u)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",u),new ci(null);const h=window.open(t||"",u,d);I(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ci(h)}const di="emulator/auth/handler";function hi(e,t,n,s,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.SDK_VERSION,eventId:o};if(t instanceof Ne){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))u[e]=t}if(t instanceof Oe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const c=u;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];return`${function({config:e}){return e.emulator?P(e,di):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${(0,i.querystring)(c).slice(1)}`}const fi="webStorageSupport";const pi=class{async _openPopup(e,t,n,i){var r;C(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return li(e,hi(e,t,n,T(),i),Ht())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=hi(e,t,n,T(),i),zt().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ii(e),n=zt().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:ai(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:si,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=y(e,"network-request-failed"),s=zt().setTimeout((()=>{i(r)}),ri.get());function o(){zt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Kn(e);return t.register("authEvent",(t=>{I(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fi,{type:fi},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),v(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Jn(e);for(const e of t)try{if(Zn(e))return}catch(e){}v(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return he()||re()||le()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qt,this._completeRedirectFn=zn,this._overrideRedirectResult=Un}};class gi extends class{_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}constructor(e){this.factorId=e}}{static _fromCredential(e){return new gi(e)}_finalizeEnroll(e,t,n){return function(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}constructor(e){super("phone"),this.credential=e}}class mi{static assertion(e){return gi._fromCredential(e)}constructor(){}}mi.FACTOR_ID="phone";var vi="@firebase/auth",yi="0.20.11";
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
class bi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const _i=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let wi=null;function Ii(e=(0,r.getApp)()){const t=(0,r._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,r._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.deepEqual)(r,null!=t?t:{}))return e;v(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:pi,persistence:[nn,jt,qt]}),s=(0,i.getExperimentalSetting)("authTokenSyncURL");if(s){const e=(o=s,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>_i)return;const i=null==t?void 0:t.token;wi!==i&&(wi=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var o;const a=(0,i.getDefaultEmulatorHost)("auth");return a&&ye(n,`http://${a}`),n}var Ei;Ei="Browser",(0,r._registerComponent)(new(0,u.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{I(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),I(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Ei,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fe(Ei)},o=new ge(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(S);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,r._registerComponent)(new(0,u.Component)("auth-internal",(e=>{const t=me(e.getProvider("auth").getImmediate());return new bi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(vi,yi,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ei)),(0,r.registerVersion)(vi,yi,"esm2017")})),s.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return i}));function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create})),s.register("fQ3Fn",(function(t,n){e(t.exports,"getDatabase",(function(){return s("8NPS8").getDatabase})),e(t.exports,"set",(function(){return s("8NPS8").set})),e(t.exports,"ref",(function(){return s("8NPS8").ref})),e(t.exports,"remove",(function(){return s("8NPS8").remove})),e(t.exports,"get",(function(){return s("8NPS8").get})),s("8NPS8")})),s.register("8NPS8",(function(t,n){e(t.exports,"ref",(function(){return _r})),e(t.exports,"set",(function(){return Er})),e(t.exports,"remove",(function(){return Ir})),e(t.exports,"get",(function(){return Cr})),e(t.exports,"getDatabase",(function(){return xr}));var i=s("ix4Jr"),r=s("4a6xH"),o=s("ffjl9"),a=s("7vF8m"),u=s("4TNnu");const c="@firebase/database",l="0.13.10";
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
 */let d="";
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
class h{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class f{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const p=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(e){}return new f},g=p("localStorage"),m=p("sessionStorage"),v=new(0,a.Logger)("@firebase/database"),y=function(){let e=1;return function(){return e++}}(),b=function(e){const t=(0,o.stringToByteArray)(e),n=new(0,o.Sha1);n.update(t);const i=n.digest();return o.base64.encodeByteArray(i)},_=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=_.apply(null,i):t+="object"==typeof i?(0,o.stringify)(i):i,t+=" "}return t};let w=null,I=!0;const E=function(e,t){(0,o.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(v.logLevel=a.LogLevel.VERBOSE,w=v.log.bind(v),t&&m.set("logging_enabled",!0)):"function"==typeof e?w=e:(w=null,m.remove("logging_enabled"))},C=function(...e){if(!0===I&&(I=!1,null===w&&!0===m.get("logging_enabled")&&E(!0)),w){const t=_.apply(null,e);w(t)}},k=function(e){return function(...t){C(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+_(...e);v.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${_(...e)}`;throw v.error(t),new Error(t)},A=function(...e){const t="FIREBASE WARNING: "+_(...e);v.warn(t)},R=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},x="[MIN_NAME]",P="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===x||t===P)return-1;if(t===x||e===P)return 1;{const n=V(e),i=V(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},O=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.stringify)(t))},D=function(e){if("object"!=typeof e||null===e)return(0,o.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,o.stringify)(t[i]),n+=":",n+=D(e[t[i]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){(0,o.assert)(!R(e),"Invalid JSON number");const t=1023;let n,i,r,s,a;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const u=[];for(a=52;a;a-=1)u.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(n?1:0),u.reverse();const c=u.join("");let l="";for(a=0;a<64;a+=8){let e=parseInt(c.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const j=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,q=2147483647,V=function(e){if(j.test(e)){const t=Number(e);if(t>=B&&t<=q)return t}return null},H=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw A("Exception was thrown by user callback.",t),e}),Math.floor(0))}},W=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class z{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){A(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class G{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',A(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class K{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}K.OWNER="owner";
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
const $="5",Y=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,J="websocket",X="long_polling";
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
class Q{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&g.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=g.get("host:"+e)||this._host}}function Z(e,t,n){let i;if((0,o.assert)("string"==typeof t,"typeof type must == string"),(0,o.assert)("object"==typeof n,"typeof params must == object"),t===J)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==X)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return F(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
 */class ee{incrementCounter(e,t=1){(0,o.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.deepCopy)(this.counters_)}constructor(){this.counters_={}}}
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
 */const te={},ne={};function ie(e){const t=e.toString();return te[t]||(te[t]=new ee),te[t]}
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
class re{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&H((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */const se="start";class oe{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new re(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,o.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ae(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===se)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=$,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Y.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oe.forceAllow_=!0}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){return!(0,o.isNodeSdk)()&&(!!oe.forceAllow_||!(oe.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.base64Encode)(t),i=M(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=ie(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Z(t,X,e))}}class ae{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||C("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){(0,o.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=y(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ae.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){C("frame writing exception"),e.stack&&C(e.stack),C(e)}}}}
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
 */let ue=null;"undefined"!=typeof MozWebSocket?ue=MozWebSocket:"undefined"!=typeof WebSocket&&(ue=WebSocket);class ce{static connectionURL_(e,t,n,i,r){const s={};return s.v=$,!(0,o.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&Y.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),Z(e,J,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,g.set("previous_websocket_failure",!0);try{let e;if((0,o.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${d}/${u.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ue(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ce.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ue&&!ce.forceDisallow_}static previouslyFailed(){return g.isInMemoryStorage||!0===g.get("previous_websocket_failure")}markConnectionHealthy(){g.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=ie(t),this.connURL=ce.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}ce.responsesRequiredToBeHealthy=2,ce.healthyTimeout=3e4;
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
class le{static get ALL_TRANSPORTS(){return[oe,ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ce&&ce.isAvailable();let n=t&&!ce.previouslyFailed();if(e.webSocketOnly&&(t||A("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ce];else{const e=this.transports_=[];for(const t of le.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);le.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}le.globalTransportInitialized_=!1;class de{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=W((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?S("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$!==n&&A("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),W((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):W((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(g.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,u,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new le(t),this.log_("Connection created"),this.start_()}}
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
 */class he{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class fe{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){(0,o.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class pe extends fe{static getInstance(){return new pe}getInitialEvent(e){return(0,o.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,o.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class ge{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function me(){return new ge("")}function ve(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ye(e){return e.pieces_.length-e.pieceNum_}function be(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ge(e.pieces_,t)}function _e(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function we(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ie(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ge(t,0)}function Ee(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ge)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ge(n,0)}function Ce(e){return e.pieceNum_>=e.pieces_.length}function ke(e,t){const n=ve(e),i=ve(t);if(null===n)return t;if(n===i)return ke(be(e),be(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Se(e,t){if(ye(e)!==ye(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Te(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ye(e)>ye(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ae{constructor(e,t){this.errorPrefix_=t,this.parts_=we(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,o.stringLength)(this.parts_[e]);Re(this)}}function Re(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+xe(e))}function xe(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Pe extends fe{static getInstance(){return new Pe}getInitialEvent(e){return(0,o.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */const Ne=1e3;class Oe extends he{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,o.stringify)(r)),(0,o.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new(0,o.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.assert)(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Oe.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,o.contains)(e,"w")){const n=(0,o.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();A(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,o.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+(0,o.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ne),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let s=!1,a=null;const u=function(){a?a.close():(s=!0,n())},c=function(e){(0,o.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:u,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,u]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=u&&u.token,a=new de(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{A(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&A(e),u())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>D(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ge(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+d.replace(/\./g,"-")]=1,(0,o.isMobileCordova)()?e["framework.cordova"]=1:(0,o.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pe.getInstance().currentlyOnline();return(0,o.isEmpty)(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,a,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Oe.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ne,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!(0,o.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pe.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&pe.getInstance().on("online",this.onOnline_,this)}}Oe.nextPersistentConnectionId_=0,Oe.nextConnectionId_=0;
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
class Le{static Wrap(e,t){return new Le(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class De{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Le(x,e),i=new Le(x,t);return 0!==this.compare(n,i)}minPost(){return Le.MIN}}
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
 */let Me;class Fe extends De{static get __EMPTY_NODE(){return Me}static set __EMPTY_NODE(e){Me=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw(0,o.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Le.MIN}maxPost(){return new Le(P,Me)}makePost(e,t){return(0,o.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Le(e,Me)}toString(){return".key"}}const Ue=new Fe;
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
 */class je{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Be{copy(e,t,n,i,r){return new Be(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return qe.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Be.RED,this.left=null!=i?i:qe.EMPTY_NODE,this.right=null!=r?r:qe.EMPTY_NODE}}Be.RED=!0,Be.BLACK=!1;class qe{insert(e,t){return new qe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new je(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new je(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new je(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new je(this.root_,null,this.comparator_,!0,e)}constructor(e,t=qe.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function Ve(e,t){return N(e.name,t.name)}function He(e,t){return N(e,t)}
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
 */let We;qe.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Be(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ze=function(e){return"number"==typeof e?"number:"+U(e):"string:"+e},Ge=function(e){if(e.isLeafNode()){const t=e.val();(0,o.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,o.contains)(t,".sv"),"Priority must be a string or number.")}else(0,o.assert)(e===We||e.isEmpty(),"priority of unexpected type.");(0,o.assert)(e===We||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Ke,$e,Ye;class Je{static set __childrenNodeConstructor(e){Ke=e}static get __childrenNodeConstructor(){return Ke}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ce(e)?this:".priority"===ve(e)?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ve(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.assert)(".priority"!==n||1===ye(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ze(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:((0,o.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(t),r=Je.VALUE_TYPE_ORDER.indexOf(n);return(0,o.assert)(i>=0,"Unknown leaf type: "+t),(0,o.assert)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ge(this.priorityNode_)}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Xe=new class extends De{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?N(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Le.MIN}maxPost(){return new Le(P,new Je("[PRIORITY-POST]",Ye))}makePost(e,t){const n=$e(e);return new Le(t,new Je("[PRIORITY-POST]",n))}toString(){return".priority"}},Qe=Math.log(2);
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
 */class Ze{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Qe,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const et=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Be(a,o.node,Be.BLACK,null,null);{const u=parseInt(s/2,10)+t,c=r(t,u),l=r(u+1,i);return o=e[u],a=n?n(o):o,new Be(a,o.node,Be.BLACK,c,l)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),l=e[s],d=n?n(l):l;u(new Be(d,l.node,i,null,c))},u=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Be.BLACK):(a(i,Be.BLACK),a(i,Be.RED))}return s}(new Ze(e.length));return new qe(i||t,s)};
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
 */let tt;const nt={};class it{static get Default(){return(0,o.assert)(nt&&Xe,"ChildrenNode.ts has not been loaded"),tt=tt||new it({".priority":nt},{".priority":Xe}),tt}get(e){const t=(0,o.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof qe?t:null}hasIndex(e){return(0,o.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.assert)(e!==Ue,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Le.Wrap);let s,a=r.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();s=i?et(n,e.getCompare()):nt;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const l=Object.assign({},this.indexes_);return l[u]=s,new it(l,c)}addToIndexes(e,t){const n=(0,o.map)(this.indexes_,((n,i)=>{const r=(0,o.safeGet)(this.indexSet_,i);if((0,o.assert)(r,"Missing index implementation for "+i),n===nt){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Le.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),et(n,r.getCompare())}return nt}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Le(e.name,i))),r.insert(e,e.node)}}));return new it(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.map)(this.indexes_,(n=>{if(n===nt)return n;{const i=t.get(e.name);return i?n.remove(new Le(e.name,i)):n}}));return new it(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let rt;class st{static get EMPTY_NODE(){return rt||(rt=new st(new qe(He),null,it.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rt}updatePriority(e){return this.children_.isEmpty()?this:new st(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?rt:t}}getChild(e){const t=ve(e);return null===t?this:this.getImmediateChild(t).getChild(be(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Le(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?rt:this.priorityNode_;return new st(i,s,r)}}updateChild(e,t){const n=ve(e);if(null===n)return t;{(0,o.assert)(".priority"!==ve(e)||1===ye(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(be(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Xe,((s,o)=>{t[s]=o.val(e),n++,r&&st.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ze(this.getPriority().val())+":"),this.forEachChild(Xe,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":b(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Le(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Le(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Le(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Le.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Le.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ot?-1:0}withIndex(e){if(e===Ue||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new st(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ue||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Xe),n=t.getIterator(Xe);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ue?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ge(this.priorityNode_),this.children_.isEmpty()&&(0,o.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}st.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ot=new class extends st{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return st.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new qe(He),st.EMPTY_NODE,it.Default)}};Object.defineProperties(Le,{MIN:{value:new Le(x,st.EMPTY_NODE)},MAX:{value:new Le(P,ot)}}),Fe.__EMPTY_NODE=st.EMPTY_NODE,Je.__childrenNodeConstructor=st,We=ot,function(e){Ye=e}(ot);function at(e,t=null){if(null===e)return st.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Je(e,at(t))}if(e instanceof Array){let n=st.EMPTY_NODE;return F(e,((t,i)=>{if((0,o.contains)(e,t)&&"."!==t.substring(0,1)){const e=at(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(at(t))}{const n=[];let i=!1;if(F(e,((e,t)=>{if("."!==e.substring(0,1)){const r=at(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Le(e,r)))}})),0===n.length)return st.EMPTY_NODE;const r=et(n,Ve,(e=>e.name),He);if(i){const e=et(n,Xe.getCompare());return new st(r,at(t),new it({".priority":e},{".priority":Xe}))}return new st(r,at(t),it.Default)}}!function(e){$e=e}(at);
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
class ut extends De{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?N(e.name,t.name):r}makePost(e,t){const n=at(e),i=st.EMPTY_NODE.updateChild(this.indexPath_,n);return new Le(t,i)}maxPost(){const e=st.EMPTY_NODE.updateChild(this.indexPath_,ot);return new Le(P,e)}toString(){return we(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,(0,o.assert)(!Ce(e)&&".priority"!==ve(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const ct=new class extends De{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Le.MIN}maxPost(){return Le.MAX}makePost(e,t){const n=at(e);return new Le(t,n)}toString(){return".value"}},lt="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
 */!function(){let e=0;const t=[]}();
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
function dt(e){return{type:"value",snapshotNode:e}}function ht(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ft(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function pt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class gt{updateChild(e,t,n,i,r,s){(0,o.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(ft(t,a)):(0,o.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(ht(t,n)):s.trackChildChange(pt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Xe,((e,i)=>{t.hasChild(e)||n.trackChildChange(ft(e,i))})),t.isLeafNode()||t.forEachChild(Xe,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(pt(t,i,r))}else n.trackChildChange(ht(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?st.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
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
 */class mt{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Le(t,n))||(n=st.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=st.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(st.EMPTY_NODE);const r=this;return t.forEachChild(Xe,((e,t)=>{r.matches(new Le(e,t))||(i=i.updateImmediateChild(e,st.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new gt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mt.getStartPost_(e),this.endPost_=mt.getEndPost_(e)}}
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
 */class vt{updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Le(t,n))||(n=st.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=st.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=st.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(st.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);a&&o<this.limit_&&r(t,n)<=0?o++:i=i.updateImmediateChild(t.name,st.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.assert)(a.numChildren()===this.limit_,"");const u=new Le(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(u);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=i.getChildAfterChild(this.index_,o,this.reverse_);const d=null==o?1:s(o,u);if(l&&!n.isEmpty()&&d>=0)return null!=r&&r.trackChildChange(pt(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(ft(t,e));const n=a.updateImmediateChild(t,st.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=r&&r.trackChildChange(ht(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&s(c,u)>=0?(null!=r&&(r.trackChildChange(ft(c.name,c.node)),r.trackChildChange(ht(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,st.EMPTY_NODE)):e}constructor(e){this.rangedFilter_=new mt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}}
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
 */class yt{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:x}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:P}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Xe}copy(){const e=new yt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Xe}}function bt(e){const t={};if(e.isDefault())return t;let n;return e.index_===Xe?n="$priority":e.index_===ct?n="$value":e.index_===Ue?n="$key":((0,o.assert)(e.index_ instanceof ut,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,o.stringify)(n),e.startSet_&&(t.startAt=(0,o.stringify)(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+(0,o.stringify)(e.indexStartName_))),e.endSet_&&(t.endAt=(0,o.stringify)(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+(0,o.stringify)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function _t(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Xe&&(t.i=e.index_.toString()),t}
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
 */class wt extends he{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=wt.getListenId_(e,n),a={};this.listens_[s]=a;const u=bt(e._queryParams);this.restRequest_(r+".json",u,((e,t)=>{let u=t;if(404===e&&(u=null,e=null),null===e&&this.onDataUpdate_(r,u,!1,n),(0,o.safeGet)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=wt.getListenId_(e,t);delete this.listens_[n]}get(e){const t=bt(e._queryParams),n=e._path.toString(),i=new(0,o.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.querystring)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.jsonEval)(a.responseText)}catch(e){A("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&A("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=k("p:rest:"),this.listens_={}}}
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
 */class It{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=st.EMPTY_NODE}}
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
 */function Et(){return{value:null,children:new Map}}function Ct(e,t,n){if(Ce(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ve(t);e.children.has(i)||e.children.set(i,Et());Ct(e.children.get(i),t=be(t),n)}}function kt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{kt(i,new ge(t.toString()+"/"+e),n)}))}class St{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class Tt{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,i)=>{i>0&&(0,o.contains)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),W(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new St(e);const n=1e4+2e4*Math.random();W(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var At,Rt;function xt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Rt=At||(At={}))[Rt.OVERWRITE=0]="OVERWRITE",Rt[Rt.MERGE=1]="MERGE",Rt[Rt.ACK_USER_WRITE=2]="ACK_USER_WRITE",Rt[Rt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Pt{operationForChild(e){if(Ce(this.path)){if(null!=this.affectedTree.value)return(0,o.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ge(e));return new Pt(me(),t,this.revert)}}return(0,o.assert)(ve(this.path)===e,"operationForChild called for unrelated child."),new Pt(be(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=At.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
 */class Nt{operationForChild(e){return Ce(this.path)?new Nt(this.source,me()):new Nt(this.source,be(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=At.LISTEN_COMPLETE}}
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
 */class Ot{operationForChild(e){return Ce(this.path)?new Ot(this.source,me(),this.snap.getImmediateChild(e)):new Ot(this.source,be(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=At.OVERWRITE}}
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
 */class Lt{operationForChild(e){if(Ce(this.path)){const t=this.children.subtree(new ge(e));return t.isEmpty()?null:t.value?new Ot(this.source,me(),t.value):new Lt(this.source,me(),t)}return(0,o.assert)(ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lt(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=At.MERGE}}
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
 */class Dt{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */class Mt{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ft(e,t,n,i,r,s){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.assertionError)("Should only compare child_ events.");const i=new Le(t.childName,t.snapshotNode),r=new Le(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Ut(e,t){return{eventCache:e,serverCache:t}}function jt(e,t,n,i){return Ut(new Dt(t,n,i),e.serverCache)}function Bt(e,t,n,i){return Ut(e.eventCache,new Dt(t,n,i))}function qt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Vt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Ht;class Wt{static fromObject(e){let t=new Wt(null);return F(e,((e,n)=>{t=t.set(new ge(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:me(),value:this.value};if(Ce(e))return null;{const n=ve(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(be(e),t);if(null!=r){return{path:Ee(new ge(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ce(e))return this;{const t=ve(e),n=this.children.get(t);return null!==n?n.subtree(be(e)):new Wt(null)}}set(e,t){if(Ce(e))return new Wt(t,this.children);{const n=ve(e),i=(this.children.get(n)||new Wt(null)).set(be(e),t),r=this.children.insert(n,i);return new Wt(this.value,r)}}remove(e){if(Ce(e))return this.children.isEmpty()?new Wt(null):new Wt(null,this.children);{const t=ve(e),n=this.children.get(t);if(n){const i=n.remove(be(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Wt(null):new Wt(this.value,r)}return this}}get(e){if(Ce(e))return this.value;{const t=ve(e),n=this.children.get(t);return n?n.get(be(e)):null}}setTree(e,t){if(Ce(e))return t;{const n=ve(e),i=(this.children.get(n)||new Wt(null)).setTree(be(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Wt(this.value,r)}}fold(e){return this.fold_(me(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Ee(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,me(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ce(e))return null;{const i=ve(e),r=this.children.get(i);return r?r.findOnPath_(be(e),Ee(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,me(),t)}foreachOnPath_(e,t,n){if(Ce(e))return this;{this.value&&n(t,this.value);const i=ve(e),r=this.children.get(i);return r?r.foreachOnPath_(be(e),Ee(t,i),n):new Wt(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Ee(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Ht||(Ht=new qe(O)),Ht))()){this.value=e,this.children=t}}
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
 */class zt{static empty(){return new zt(new Wt(null))}constructor(e){this.writeTree_=e}}function Gt(e,t,n){if(Ce(t))return new zt(new Wt(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=ke(r,t);return s=s.updateChild(o,n),new zt(e.writeTree_.set(r,s))}{const i=new Wt(n),r=e.writeTree_.setTree(t,i);return new zt(r)}}}function Kt(e,t,n){let i=e;return F(n,((e,n)=>{i=Gt(i,Ee(t,e),n)})),i}function $t(e,t){if(Ce(t))return zt.empty();{const n=e.writeTree_.setTree(t,new Wt(null));return new zt(n)}}function Yt(e,t){return null!=Jt(e,t)}function Jt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ke(n.path,t)):null}function Xt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Xe,((e,n)=>{t.push(new Le(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Le(e,n.value))})),t}function Qt(e,t){if(Ce(t))return e;{const n=Jt(e,t);return new zt(null!=n?new Wt(n):e.writeTree_.subtree(t))}}function Zt(e){return e.writeTree_.isEmpty()}function en(e,t){return tn(me(),e.writeTree_,t)}function tn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,o.assert)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=tn(Ee(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Ee(e,".priority"),i)),n}}
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
 */function nn(e,t){return mn(t,e)}function rn(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,a=e.allWrites.length-1;for(;r&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&sn(t,i.path)?r=!1:Te(i.path,t.path)&&(s=!0)),a--}if(r){if(s)return function(e){e.visibleWrites=an(e.allWrites,on,me()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=$t(e.visibleWrites,i.path);else{F(i.children,(t=>{e.visibleWrites=$t(e.visibleWrites,Ee(i.path,t))}))}return!0}return!1}function sn(e,t){if(e.snap)return Te(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Te(Ee(e.path,n),t))return!0;return!1}function on(e){return e.visible}function an(e,t,n){let i=zt.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Te(n,e)?(t=ke(n,e),i=Gt(i,t,s.snap)):Te(e,n)&&(t=ke(e,n),i=Gt(i,me(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.assertionError)("WriteRecord should have .snap or .children");if(Te(n,e))t=ke(n,e),i=Kt(i,t,s.children);else if(Te(e,n))if(t=ke(e,n),Ce(t))i=Kt(i,me(),s.children);else{const e=(0,o.safeGet)(s.children,ve(t));if(e){const n=e.getChild(be(t));i=Gt(i,me(),n)}}}}}return i}function un(e,t,n,i,r){if(i||r){const s=Qt(e.visibleWrites,t);if(!r&&Zt(s))return n;if(r||null!=n||Yt(s,me())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Te(e.path,t)||Te(t,e.path))};return en(an(e.allWrites,s,t),n||st.EMPTY_NODE)}return null}{const i=Jt(e.visibleWrites,t);if(null!=i)return i;{const i=Qt(e.visibleWrites,t);if(Zt(i))return n;if(null!=n||Yt(i,me())){return en(i,n||st.EMPTY_NODE)}return null}}}function cn(e,t,n,i){return un(e.writeTree,e.treePath,t,n,i)}function ln(e,t){return function(e,t,n){let i=st.EMPTY_NODE;const r=Jt(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Xe,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Qt(e.visibleWrites,t);return n.forEachChild(Xe,((e,t)=>{const n=en(Qt(r,new ge(e)),t);i=i.updateImmediateChild(e,n)})),Xt(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Xt(Qt(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function dn(e,t,n,i){return function(e,t,n,i,r){(0,o.assert)(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(t,n);if(Yt(e.visibleWrites,s))return null;{const t=Qt(e.visibleWrites,s);return Zt(t)?r.getChild(n):en(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function hn(e,t){return function(e,t){return Jt(e.visibleWrites,t)}(e.writeTree,Ee(e.treePath,t))}function fn(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const u=Qt(e.visibleWrites,t),c=Jt(u,me());if(null!=c)a=c;else{if(null==n)return[];a=en(u,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let u=n.getNext();for(;u&&e.length<r;)0!==t(u,i)&&e.push(u),u=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function pn(e,t,n){return function(e,t,n,i){const r=Ee(t,n),s=Jt(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return en(Qt(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function gn(e,t){return mn(Ee(e.treePath,t),e.writeTree)}function mn(e,t){return{treePath:e,writeTree:t}}
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
 */class vn{trackChildChange(e){const t=e.type,n=e.childName;(0,o.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,pt(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ft(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,ht(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,o.assertionError)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,pt(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const yn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class bn{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Dt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Vt(this.viewCache_),r=fn(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function _n(e,t,n,i,r){const s=new vn;let a,u;if(n.type===At.OVERWRITE){const c=n;c.source.fromUser?a=En(e,t,c.path,c.snap,i,r,s):((0,o.assert)(c.source.fromServer,"Unknown source."),u=c.source.tagged||t.serverCache.isFiltered()&&!Ce(c.path),a=In(e,t,c.path,c.snap,i,r,u,s))}else if(n.type===At.MERGE){const c=n;c.source.fromUser?a=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,u)=>{const c=Ee(n,i);Cn(t,ve(c))&&(a=En(e,a,c,u,r,s,o))})),i.foreach(((i,u)=>{const c=Ee(n,i);Cn(t,ve(c))||(a=En(e,a,c,u,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):((0,o.assert)(c.source.fromServer,"Unknown source."),u=c.source.tagged||t.serverCache.isFiltered(),a=Sn(e,t,c.path,c.children,i,r,u,s))}else if(n.type===At.ACK_USER_WRITE){const u=n;a=u.revert?function(e,t,n,i,r,s){let a;if(null!=hn(i,n))return t;{const u=new bn(i,t,r),c=t.eventCache.getNode();let l;if(Ce(n)||".priority"===ve(n)){let n;if(t.serverCache.isFullyInitialized())n=cn(i,Vt(t));else{const e=t.serverCache.getNode();(0,o.assert)(e instanceof st,"serverChildren would be complete if leaf node"),n=ln(i,e)}l=e.filter.updateFullNode(c,n,s)}else{const r=ve(n);let o=pn(i,r,t.serverCache);null==o&&t.serverCache.isCompleteForChild(r)&&(o=c.getImmediateChild(r)),l=null!=o?e.filter.updateChild(c,r,o,be(n),u,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,st.EMPTY_NODE,be(n),u,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=cn(i,Vt(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=hn(i,me()),jt(t,l,a,e.filter.filtersNodes())}}
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
 */(e,t,u.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=hn(r,n))return t;const a=t.serverCache.isFiltered(),u=t.serverCache;if(null!=i.value){if(Ce(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return In(e,t,n,u.getNode().getChild(n),r,s,a,o);if(Ce(n)){let i=new Wt(null);return u.getNode().forEachChild(Ue,((e,t)=>{i=i.set(new ge(e),t)})),Sn(e,t,n,i,r,s,a,o)}return t}{let c=new Wt(null);return i.foreach(((e,t)=>{const i=Ee(n,e);u.isCompleteForPath(i)&&(c=c.set(e,u.getNode().getChild(i)))})),Sn(e,t,n,c,r,s,a,o)}}(e,t,u.path,u.affectedTree,i,r,s)}else{if(n.type!==At.LISTEN_COMPLETE)throw(0,o.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,i,r){const s=t.serverCache,o=Bt(t,s.getNode(),s.isFullyInitialized()||Ce(n),s.isFiltered());return wn(e,o,n,i,yn,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=qt(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(dt(qt(t)))}}(t,a,c),{viewCache:a,changes:c}}function wn(e,t,n,i,r,s){const a=t.eventCache;if(null!=hn(i,n))return t;{let u,c;if(Ce(n))if((0,o.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Vt(t),r=ln(i,n instanceof st?n:st.EMPTY_NODE);u=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=cn(i,Vt(t));u=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=ve(n);if(".priority"===l){(0,o.assert)(1===ye(n),"Can't have a priority with additional path components");const r=a.getNode();c=t.serverCache.getNode();const s=dn(i,n,r,c);u=null!=s?e.filter.updatePriority(r,s):a.getNode()}else{const o=be(n);let d;if(a.isCompleteForChild(l)){c=t.serverCache.getNode();const e=dn(i,n,a.getNode(),c);d=null!=e?a.getNode().getImmediateChild(l).updateChild(o,e):a.getNode().getImmediateChild(l)}else d=pn(i,l,t.serverCache);u=null!=d?e.filter.updateChild(a.getNode(),l,d,o,r,s):a.getNode()}}return jt(t,u,a.isFullyInitialized()||Ce(n),e.filter.filtersNodes())}}function In(e,t,n,i,r,s,o,a){const u=t.serverCache;let c;const l=o?e.filter:e.filter.getIndexedFilter();if(Ce(n))c=l.updateFullNode(u.getNode(),i,null);else if(l.filtersNodes()&&!u.isFiltered()){const e=u.getNode().updateChild(n,i);c=l.updateFullNode(u.getNode(),e,null)}else{const e=ve(n);if(!u.isCompleteForPath(n)&&ye(n)>1)return t;const r=be(n),s=u.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?l.updatePriority(u.getNode(),s):l.updateChild(u.getNode(),e,s,r,yn,null)}const d=Bt(t,c,u.isFullyInitialized()||Ce(n),l.filtersNodes());return wn(e,d,n,r,new bn(r,d,s),a)}function En(e,t,n,i,r,s,o){const a=t.eventCache;let u,c;const l=new bn(r,t,s);if(Ce(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),u=jt(t,c,!0,e.filter.filtersNodes());else{const r=ve(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),u=jt(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=be(n),c=a.getNode().getImmediateChild(r);let d;if(Ce(s))d=i;else{const e=l.getCompleteChild(r);d=null!=e?".priority"===_e(s)&&e.getChild(Ie(s)).isEmpty()?e:e.updateChild(s,i):st.EMPTY_NODE}if(c.equals(d))u=t;else{u=jt(t,e.filter.updateChild(a.getNode(),r,d,s,l,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return u}function Cn(e,t){return e.eventCache.isCompleteForChild(t)}function kn(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Sn(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let u,c=t;u=Ce(n)?i:new Wt(null).setTree(n,i);const l=t.serverCache.getNode();return u.children.inorderTraversal(((n,i)=>{if(l.hasChild(n)){const u=kn(0,t.serverCache.getNode().getImmediateChild(n),i);c=In(e,c,new ge(n),u,r,s,o,a)}})),u.children.inorderTraversal(((n,i)=>{const u=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!l.hasChild(n)&&!u){const u=kn(0,t.serverCache.getNode().getImmediateChild(n),i);c=In(e,c,new ge(n),u,r,s,o,a)}})),c}class Tn{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new gt(n.getIndex()),r=(s=n).loadsAllData()?new gt(s.getIndex()):s.hasLimit()?new vt(s):new mt(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,u=i.updateFullNode(st.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(st.EMPTY_NODE,a.getNode(),null),l=new Dt(u,o.isFullyInitialized(),i.filtersNodes()),d=new Dt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ut(d,l),this.eventGenerator_=new Mt(this.query_)}}function An(e,t){const n=Vt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ce(t)&&!n.getImmediateChild(ve(t)).isEmpty())?n.getChild(t):null}function Rn(e){return 0===e.eventRegistrations_.length}function xn(e,t,n){const i=[];if(n){(0,o.assert)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Pn(e,t,n,i){t.type===At.MERGE&&null!==t.source.queryId&&((0,o.assert)(Vt(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.assert)(qt(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=_n(e.processor_,r,t,n,i);var a,u;return a=e.processor_,u=s.viewCache,(0,o.assert)(u.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,o.assert)(u.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,o.assert)(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Nn(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Nn(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ft(e,r,"child_removed",t,i,n),Ft(e,r,"child_added",t,i,n),Ft(e,r,"child_moved",s,i,n),Ft(e,r,"child_changed",t,i,n),Ft(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let On,Ln;class Dn{constructor(){this.views=new Map}}function Mn(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return(0,o.assert)(null!=s,"SyncTree gave us an op for an invalid query."),Pn(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Pn(s,t,n,i));return r}}function Fn(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=cn(n,r?i:null),s=!1;e?s=!0:i instanceof st?(e=ln(n,i),s=!1):(e=st.EMPTY_NODE,s=!1);const o=Ut(new Dt(e,s,!1),new Dt(i,r,!1));return new Tn(t,o)}return o}function Un(e,t,n,i,r,s){const o=Fn(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Xe,((e,t)=>{i.push(ht(e,t))}));return n.isFullyInitialized()&&i.push(dt(n.getNode())),Nn(e,i,n.getNode(),t)}(o,n)}function jn(e,t,n,i){const r=t._queryIdentifier,s=[];let a=[];const u=Wn(e);if("default"===r)for(const[t,r]of e.views.entries())a=a.concat(xn(r,n,i)),Rn(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(a=a.concat(xn(t,n,i)),Rn(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return u&&!Wn(e)&&s.push(new((0,o.assert)(On,"Reference.ts has not been loaded"),On)(t._repo,t._path)),{removed:s,events:a}}function Bn(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function qn(e,t){let n=null;for(const i of e.views.values())n=n||An(i,t);return n}function Vn(e,t){if(t._queryParams.loadsAllData())return zn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Hn(e,t){return null!=Vn(e,t)}function Wn(e){return null!=zn(e)}function zn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let Gn=1;class Kn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Wt(null),this.pendingWriteTree_={visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $n(e,t,n,i,r){return function(e,t,n,i,r){(0,o.assert)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Gt(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?ni(e,new Ot({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Yn(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(rn(e.pendingWriteTree_,t)){let t=new Wt(null);return null!=i.snap?t=t.set(me(),!0):F(i.children,(e=>{t=t.set(new ge(e),!0)})),ni(e,new Pt(i.path,t,n))}return[]}function Jn(e,t,n){return ni(e,new Ot({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Xn(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Hn(o,t))){const u=jn(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Wn(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Wn(t)){return[zn(t)]}{let e=[];return t&&(e=Bn(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=si(e,i);e.listenProvider_.startListening(di(r),oi(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(di(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(ai(t));e.listenProvider_.stopListening(di(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ai(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Qn(e,t,n,i){const r=ui(e,i);if(null!=r){const i=ci(r),s=i.path,o=i.queryId,a=ke(s,t);return li(e,s,new Ot(xt(o),a,n))}return[]}function Zn(e,t,n,i=!1){const r=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=ke(e,r);s=s||qn(t,n),a=a||Wn(t)}));let u,c=e.syncPointTree_.get(r);if(c?(a=a||Wn(c),s=s||qn(c,me())):(c=new Dn,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=s)u=!0;else{u=!1,s=st.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=qn(t,me());n&&(s=s.updateImmediateChild(e,n))}))}const l=Hn(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=ai(t);(0,o.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Gn++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let d=Un(c,t,n,nn(e.pendingWriteTree_,r),s,u);if(!l&&!a&&!i){const n=Vn(c,t);d=d.concat(function(e,t,n){const i=t._path,r=oi(e,t),s=si(e,n),a=e.listenProvider_.startListening(di(t),r,s.hashFn,s.onComplete),u=e.syncPointTree_.subtree(i);if(r)(0,o.assert)(!Wn(u.value),"If we're adding a query, it shouldn't be shadowed");else{const t=u.fold(((e,t,n)=>{if(!Ce(e)&&t&&Wn(t))return[zn(t).query];{let e=[];return t&&(e=e.concat(Bn(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(di(i),oi(e,i))}}return a}
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
 */(e,t,n))}return d}function ei(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=qn(n,ke(e,t));if(i)return i}));return un(i,t,r,n,!0)}function ti(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=ke(e,n);i=i||qn(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||qn(r,me()):(r=new Dn,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Dt(i,!0,!1):null;return function(e){return qt(e.viewCache_)}(Fn(r,t,nn(e.pendingWriteTree_,t._path),s?o.getNode():st.EMPTY_NODE,s))}function ni(e,t){return ii(t,e.syncPointTree_,null,nn(e.pendingWriteTree_,me()))}function ii(e,t,n,i){if(Ce(e.path))return ri(e,t,n,i);{const r=t.get(me());null==n&&null!=r&&(n=qn(r,me()));let s=[];const o=ve(e.path),a=e.operationForChild(o),u=t.children.get(o);if(u&&a){const e=n?n.getImmediateChild(o):null,t=gn(i,o);s=s.concat(ii(a,u,e,t))}return r&&(s=s.concat(Mn(r,e,i,n))),s}}function ri(e,t,n,i){const r=t.get(me());null==n&&null!=r&&(n=qn(r,me()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=gn(i,t),u=e.operationForChild(t);u&&(s=s.concat(ri(u,r,o,a)))})),r&&(s=s.concat(Mn(r,e,i,n))),s}function si(e,t){const n=t.query,i=oi(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||st.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ui(e,n);if(i){const n=ci(i),r=n.path,s=n.queryId,o=ke(r,t);return li(e,r,new Nt(xt(s),o))}return[]}(e,n._path,i):function(e,t){return ni(e,new Nt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Xn(e,n,null,i)}}}}function oi(e,t){const n=ai(t);return e.queryToTagMap.get(n)}function ai(e){return e._path.toString()+"$"+e._queryIdentifier}function ui(e,t){return e.tagToQueryMap.get(t)}function ci(e){const t=e.indexOf("$");return(0,o.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ge(e.substr(0,t))}}function li(e,t,n){const i=e.syncPointTree_.get(t);(0,o.assert)(i,"Missing sync point for query tag that we're tracking");return Mn(i,n,nn(e.pendingWriteTree_,t),null)}function di(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,o.assert)(Ln,"Reference.ts has not been loaded"),Ln)(e._repo,e._path):e}class hi{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hi(t)}node(){return this.node_}constructor(e){this.node_=e}}class fi{getImmediateChild(e){const t=Ee(this.path_,e);return new fi(this.syncTree_,t)}node(){return ei(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const pi=function(e,t,n){return e&&"object"==typeof e?((0,o.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?gi(e[".sv"],t,n):"object"==typeof e[".sv"]?mi(e[".sv"],t):void(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},gi=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,o.assert)(!1,"Unexpected server value: "+e)},mi=function(e,t,n){e.hasOwnProperty("increment")||(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&(0,o.assert)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,o.assert)(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},vi=function(e,t,n,i){return bi(t,new fi(n,e),i)},yi=function(e,t,n){return bi(e,new hi(t),n)};function bi(e,t,n){const i=e.getPriority().val(),r=pi(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=pi(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Je(s,at(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Je(r))),i.forEachChild(Xe,((e,i)=>{const r=bi(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
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
 */class _i{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function wi(e,t){let n=t instanceof ge?t:new ge(t),i=e,r=ve(n);for(;null!==r;){const e=(0,o.safeGet)(i.node.children,r)||{children:{},childCount:0};i=new _i(r,i,e),n=be(n),r=ve(n)}return i}function Ii(e){return e.node.value}function Ei(e,t){e.node.value=t,Ai(e)}function Ci(e){return e.node.childCount>0}function ki(e,t){F(e.node.children,((n,i)=>{t(new _i(n,e,i))}))}function Si(e,t,n,i){n&&!i&&t(e),ki(e,(e=>{Si(e,t,!0,i)})),n&&i&&t(e)}function Ti(e){return new ge(null===e.parent?e.name:Ti(e.parent)+"/"+e.name)}function Ai(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ii(e)&&!Ci(e)}(n),r=(0,o.contains)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ai(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ai(e))}
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
 */(e.parent,e.name,e)}const Ri=/[\[\].#$\/\u0000-\u001F\u007F]/,xi=/[\[\].#$\u0000-\u001F\u007F]/,Pi=10485760,Ni=function(e){return"string"==typeof e&&0!==e.length&&!Ri.test(e)},Oi=function(e){return"string"==typeof e&&0!==e.length&&!xi.test(e)},Li=function(e,t,n,i){i&&void 0===t||Di((0,o.errorPrefix)(e,"value"),t,n)},Di=function(e,t,n){const i=n instanceof ge?new Ae(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xe(i));if("function"==typeof t)throw new Error(e+"contains a function "+xe(i)+" with contents = "+t.toString());if(R(t))throw new Error(e+"contains "+t.toString()+" "+xe(i));if("string"==typeof t&&t.length>3495253.3333333335&&(0,o.stringLength)(t)>Pi)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+xe(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(F(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Ni(t)))throw new Error(e+" contains an invalid key ("+t+") "+xe(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,u;u=t,(a=i).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(u),a.byteLength_+=(0,o.stringLength)(u),Re(a),Di(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=(0,o.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+xe(i)+" in addition to actual children.")}},Mi=function(e,t,n,i){if(!(i&&void 0===n||Oi(n)))throw new Error((0,o.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Fi=function(e,t){if(".info"===ve(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ui=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ni(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Oi(e)}(n))throw new Error((0,o.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class ji{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bi(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Se(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function qi(e,t,n){Bi(e,n),Vi(e,(e=>Te(e,t)||Te(t,e)))}function Vi(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Hi(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Hi(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();w&&C("event: "+n.toString()),H(i)}}}
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
 */const Wi="repo_interrupt";class zi{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ji,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Et(),this.transactionQueueTree_=new _i,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Gi(e,t,n){if(e.stats_=ie(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new wt(e.repoInfo_,((t,n,i,r)=>{Yi(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Ji(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Oe(e.repoInfo_,t,((t,n,i,r)=>{Yi(e,t,n,i,r)}),(t=>{Ji(e,t)}),(t=>{!function(e,t){F(t,((t,n)=>{Xi(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ne[n]||(ne[n]=t()),ne[n]}(e.repoInfo_,(()=>new Tt(e.stats_,e.server_))),e.infoData_=new It,e.infoSyncTree_=new Kn({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Jn(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Xi(e,"connected",!1),e.serverSyncTree_=new Kn({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);qi(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ki(e){const t=e.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function $i(e){return(t=(t={timestamp:Ki(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Yi(e,t,n,i,r){e.dataUpdateCount++;const s=new ge(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,o.map)(n,(e=>at(e)));a=function(e,t,n,i){const r=ui(e,i);if(r){const i=ci(r),s=i.path,o=i.queryId,a=ke(s,t),u=Wt.fromObject(n);return li(e,s,new Lt(xt(o),a,u))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=at(n);a=Qn(e.serverSyncTree_,s,t,r)}else if(i){const t=(0,o.map)(n,(e=>at(e)));a=function(e,t,n){const i=Wt.fromObject(n);return ni(e,new Lt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=at(n);a=Jn(e.serverSyncTree_,s,t)}let u=s;a.length>0&&(u=sr(e,s)),qi(e.eventQueue_,u,a)}function Ji(e,t){Xi(e,"connected",t),!1===t&&function(e){tr(e,"onDisconnectEvents");const t=$i(e),n=Et();kt(e.onDisconnect_,me(),((i,r)=>{const s=vi(i,r,e.serverSyncTree_,t);Ct(n,i,s)}));let i=[];kt(n,me(),((t,n)=>{i=i.concat(Jn(e.serverSyncTree_,t,n));const r=lr(e,t);sr(e,r)})),e.onDisconnect_=Et(),qi(e.eventQueue_,me(),i)}(e)}function Xi(e,t,n){const i=new ge("/.info/"+t),r=at(n);e.infoData_.updateSnapshot(i,r);const s=Jn(e.infoSyncTree_,i,r);qi(e.eventQueue_,i,s)}function Qi(e){return e.nextWriteId_++}function Zi(e,t,n,i,r){tr(e,"set",{path:t.toString(),value:n,priority:i});const s=$i(e),o=at(n,i),a=ei(e.serverSyncTree_,t),u=yi(o,a,s),c=Qi(e),l=$n(e.serverSyncTree_,t,u,c,!0);Bi(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||A("set at "+t+" failed: "+n);const o=Yn(e.serverSyncTree_,c,!s);qi(e.eventQueue_,t,o),nr(e,r,n,i)}));const d=lr(e,t);sr(e,d),qi(e.eventQueue_,d,[])}function er(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Wi)}function tr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function nr(e,t,n,i){t&&H((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function ir(e,t,n){return ei(e.serverSyncTree_,t,n)||st.EMPTY_NODE}function rr(e,t=e.transactionQueueTree_){if(t||cr(e,t),Ii(t)){const n=ar(e,t);(0,o.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=ir(e,t,i);let s=r;const a=r.hash();for(let e=0;e<n.length;e++){const i=n[e];(0,o.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=ke(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const u=s.val(!0),c=t;e.server_.put(c.toString(),u,(i=>{tr(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Yn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();cr(e,wi(e.transactionQueueTree_,t)),rr(e,e.transactionQueueTree_),qi(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)H(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{A("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}sr(e,t)}}),a)}(e,Ti(t),n)}else Ci(t)&&ki(t,(t=>{rr(e,t)}))}function sr(e,t){const n=or(e,t),i=Ti(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let u=0;u<t.length;u++){const c=t[u],l=ke(n,c.path);let d,h=!1;if((0,o.assert)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,d=c.abortReason,r=r.concat(Yn(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,d="maxretry",r=r.concat(Yn(e.serverSyncTree_,c.currentWriteId,!0));else{const n=ir(e,c.path,s);c.currentInputSnapshot=n;const i=t[u].update(n.val());if(void 0!==i){Di("transaction failed: Data returned ",i,c.path);let t=at(i);"object"==typeof i&&null!=i&&(0,o.contains)(i,".priority")||(t=t.updatePriority(n.getPriority()));const a=c.currentWriteId,u=$i(e),l=yi(t,n,u);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Qi(e),s.splice(s.indexOf(a),1),r=r.concat($n(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(Yn(e.serverSyncTree_,a,!0))}else h=!0,d="nodata",r=r.concat(Yn(e.serverSyncTree_,c.currentWriteId,!0))}qi(e.eventQueue_,n,r),r=[],h&&(t[u].status=2,a=t[u].unwatcher,setTimeout(a,Math.floor(0)),t[u].onComplete&&("nodata"===d?i.push((()=>t[u].onComplete(null,!1,t[u].currentInputSnapshot))):i.push((()=>t[u].onComplete(new Error(d),!1,null)))))}var a;cr(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)H(i[e]);rr(e,e.transactionQueueTree_)}(e,ar(e,n),i),i}function or(e,t){let n,i=e.transactionQueueTree_;for(n=ve(t);null!==n&&void 0===Ii(i);)i=wi(i,n),n=ve(t=be(t));return i}function ar(e,t){const n=[];return ur(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ur(e,t,n){const i=Ii(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);ki(t,(t=>{ur(e,t,n)}))}function cr(e,t){const n=Ii(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ei(t,n.length>0?n:void 0)}ki(t,(t=>{cr(e,t)}))}function lr(e,t){const n=Ti(or(e,t)),i=wi(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{dr(e,t)})),dr(e,i),Si(i,(t=>{dr(e,t)})),n}function dr(e,t){const n=Ii(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.assert)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Yn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ei(t,void 0):n.length=s+1,qi(e.eventQueue_,Ti(t),r);for(let e=0;e<i.length;e++)H(i[e])}}
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
 */const hr=function(e,t){const n=fr(e),i=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&A("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Q(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ge(n.pathString)}},fr=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",u=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let l=e.indexOf("/");-1===l&&(l=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(l,d)),l<d&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):A(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,u=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in h&&(s=h.ns)}return{host:t,port:u,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
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
class pr{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.stringify)(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class gr{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
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
 */class mr{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
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
class vr{get key(){return Ce(this._path)?null:_e(this._path)}get ref(){return new yr(this._repo,this._path)}get _queryIdentifier(){const e=_t(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return _t(this._queryParams)}isEqual(e){if(!((e=(0,o.getModularInstance)(e))instanceof vr))return!1;const t=this._repo===e._repo,n=Se(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class yr extends vr{get parent(){const e=Ie(this._path);return null===e?null:new yr(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new yt,!1)}}class br{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ge(e),n=wr(this.ref,e);return new br(this._node.getChild(t),n,Xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new br(n,wr(this.ref,t),Xe))))}hasChild(e){const t=new ge(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function _r(e,t){return(e=(0,o.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?wr(e._root,t):e._root}function wr(e,t){var n,i,r,s;return null===ve((e=(0,o.getModularInstance)(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Mi(n,i,r,s)):Mi("child","path",t,!1),new yr(e._repo,Ee(e._path,t))}function Ir(e){return Fi("remove",e._path),Er(e,null)}function Er(e,t){e=(0,o.getModularInstance)(e),Fi("set",e._path),Li("set",t,e._path,!1);const n=new(0,o.Deferred);return Zi(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Cr(e){e=(0,o.getModularInstance)(e);const t=new mr((()=>{})),n=new kr(t);return function(e,t,n){const i=ti(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=at(i).withIndex(t._queryParams.getIndex());let s;if(Zn(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Jn(e.serverSyncTree_,t._path,r);else{const n=oi(e.serverSyncTree_,t);s=Qn(e.serverSyncTree_,t._path,r,n)}return qi(e.eventQueue_,t._path,s),Xn(e.serverSyncTree_,t,n,null,!0),r}),(n=>(tr(e,"get for query "+(0,o.stringify)(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new br(t,new yr(e._repo,e._path),e._queryParams.getIndex())))}class kr{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new pr("value",this,new br(e.snapshotNode,new yr(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new gr(this,e,t):null}matches(e){return e instanceof kr&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){(0,o.assert)(!On,"__referenceConstructor has already been defined"),On=e}(yr),function(e){(0,o.assert)(!Ln,"__referenceConstructor has already been defined"),Ln=e}(yr);
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
const Sr={};let Tr=!1;function Ar(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=hr(s,r),l=c.repoInfo;void 0!==u&&u.env&&(a=u.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=hr(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const d=r&&o?new K(K.OWNER):new G(e.name,e.options,t);Ui("Invalid Firebase Database URL",c),Ce(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=Sr[t.name];r||(r={},Sr[t.name]=r);let s=r[e.toURLString()];s&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new zi(e,Tr,n,i),r[e.toURLString()]=s,s}(l,e,d,new z(e.name,n));return new Rr(h,e)}class Rr{get _repo(){return this._instanceStarted||(Gi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yr(this._repo,me())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Sr[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),er(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function xr(e=(0,i.getApp)(),t){const n=(0,i._getProvider)(e,"database").getImmediate({identifier:t}),r=(0,o.getDefaultEmulatorHostnameAndPort)("database");return r&&function(e,t,n,i={}){(e=(0,o.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new K(K.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:(0,o.createMockUserToken)(i.mockUserToken,e.app.options.projectId);s=new K(t)}!function(e,t,n,i){e.repoInfo_=new Q(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...r),n}Oe.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Oe.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
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
var Pr,Nr;
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
 */Nr=i.SDK_VERSION,d=Nr,(0,i._registerComponent)(new(0,r.Component)("database",((e,{instanceIdentifier:t})=>Ar(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(c,l,Pr),(0,i.registerVersion)(c,l,"esm2017")})),s.register("23RrO",(function(i,r){e(i.exports,"auth",(function(){return u})),s("7nQac");var o=s("hVw4Q");s("8j8By");var a=s("dvE9m");s("ezAbo"),s("45J63"),s("9P2Za"),s("3TzKX"),s("hWGzj"),function(){(function(){var e,t,i="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var r;e:{var s={};try{s.__proto__={xb:!0},r=s.xb;break e}catch(Qe){}r=!1}t=r?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var a=t;function u(e,t){if(e.prototype=i(t.prototype),e.prototype.constructor=e,a)a(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.K=t.prototype}var c="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},l="undefined"!=typeof window&&window===this?this:void 0!==n&&null!=n?n:this;function d(e,t){if(t){var n=l;e=e.split(".");for(var i=0;i<e.length-1;i++){var r=e[i];r in n||(n[r]={}),n=n[r]}(t=t(i=n[e=e[e.length-1]]))!=i&&null!=t&&c(n,e,{configurable:!0,writable:!0,value:t})}}d("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),d("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(0>(t=t||0)&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}}));var h=this;function f(e){return void 0!==e}function p(e){return"string"==typeof e}var g=/^[\w+/_-]+[=]{0,2}$/,m=null;function v(){}function y(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function b(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var n=Object.prototype.toString.call(e);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function _(e){return"array"==b(e)}function w(e){var t=b(e);return"array"==t||"object"==t&&"number"==typeof e.length}function I(e){return"function"==b(e)}function E(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var C="closure_uid_"+(1e9*Math.random()>>>0),k=0;function S(e,t,n){return e.call.apply(e.bind,arguments)}function T(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function A(e,t,n){return(A=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?S:T).apply(null,arguments)}function R(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function x(e,t){for(var n in t)e[n]=t[n]}var P,N=Date.now||function(){return+new Date};function O(e,t){e=e.split(".");var n,i=h;e[0]in i||void 0===i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)!e.length&&f(t)?i[n]=t:i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}}function L(e,t){function n(){}n.prototype=t.prototype,e.K=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.vc=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function D(e){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function M(e,t){for(var n="",i=(e=e.split("%s")).length-1,r=0;r<i;r++)n+=e[r]+(r<t.length?t[r]:"%s");D.call(this,n+e[i])}function F(e,t){throw new M("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}L(D,Error),D.prototype.name="CustomError",L(M,D),M.prototype.name="AssertionError";var U=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(p(e))return p(t)&&1==t.length?e.indexOf(t,0):-1;for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},j=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var i=e.length,r=p(e)?e.split(""):e,s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};var B=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=[],r=0,s=p(e)?e.split(""):e,o=0;o<n;o++)if(o in s){var a=s[o];t.call(void 0,a,o,e)&&(i[r++]=a)}return i},q=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r=p(e)?e.split(""):e,s=0;s<n;s++)s in r&&(i[s]=t.call(void 0,r[s],s,e));return i},V=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=p(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e))return!0;return!1};function H(e,t){return 0<=U(e,t)}function W(e,t){var n;return(n=0<=(t=U(e,t)))&&z(e,t),n}function z(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function G(e,t){!function(e,t){for(var n=p(e)?e.split(""):e,i=e.length-1;0<=i;--i)i in n&&t.call(void 0,n[i],i,e)}(e,(function(n,i){t.call(void 0,n,i,e)&&z(e,i)&&0}))}function K(e){return Array.prototype.concat.apply([],arguments)}function $(e){var t=e.length;if(0<t){for(var n=Array(t),i=0;i<t;i++)n[i]=e[i];return n}return[]}function Y(e,t,n){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,n)}var J=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},X=/&/g,Q=/</g,Z=/>/g,ee=/"/g,te=/'/g,ne=/\x00/g,ie=/[\x00&<>"']/;function re(e,t){return e<t?-1:e>t?1:0}function se(e){return ie.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(X,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(Q,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Z,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(ee,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(te,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(ne,"&#0;"))),e}function oe(e,t,n){for(var i in e)t.call(n,e[i],i,e)}function ae(e){var t,n={};for(t in e)n[t]=e[t];return n}var ue="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])e[n]=i[n];for(var s=0;s<ue.length;s++)n=ue[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}var le="StopIteration"in h?h.StopIteration:{message:"StopIteration",stack:""};function de(){}function he(e){if(e instanceof de)return e;if("function"==typeof e.ha)return e.ha(!1);if(w(e)){var t=0,n=new de;return n.next=function(){for(;;){if(t>=e.length)throw le;if(t in e)return e[t++];t++}},n}throw Error("Not implemented")}function fe(e){if(w(e))return $(e);e=he(e);var t=[];return function(e,t){if(w(e))try{j(e,t,void 0)}catch(e){if(e!==le)throw e}else{e=he(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==le)throw e}}}(e,(function(e){t.push(e)})),t}function pe(e,t){this.g={},this.a=[],this.j=this.h=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof pe)for(n=e.ja(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function ge(e){if(e.h!=e.a.length){for(var t=0,n=0;t<e.a.length;){var i=e.a[t];me(e.g,i)&&(e.a[n++]=i),t++}e.a.length=n}if(e.h!=e.a.length){var r={};for(n=t=0;t<e.a.length;)me(r,i=e.a[t])||(e.a[n++]=i,r[i]=1),t++;e.a.length=n}}function me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}de.prototype.next=function(){throw le},de.prototype.ha=function(){return this},(e=pe.prototype).la=function(){ge(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},e.ja=function(){return ge(this),this.a.concat()},e.clear=function(){this.g={},this.j=this.h=this.a.length=0},e.get=function(e,t){return me(this.g,e)?this.g[e]:t},e.set=function(e,t){me(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},e.forEach=function(e,t){for(var n=this.ja(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}},e.ha=function(e){ge(this);var t=0,n=this.j,i=this,r=new de;return r.next=function(){if(n!=i.j)throw Error("The map has changed since the iterator was created");if(t>=i.a.length)throw le;var r=i.a[t++];return e?r:i.g[r]},r};var ve=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ye(e,t,n,i){for(var r=n.length;0<=(t=e.indexOf(n,t))&&t<i;){var s=e.charCodeAt(t-1);if(!(38!=s&&63!=s||(s=e.charCodeAt(t+r))&&61!=s&&38!=s&&35!=s))return t;t+=r+1}return-1}var be=/#|$/;function _e(e,t){var n=e.search(be),i=ye(e,0,t,n);if(0>i)return null;var r=e.indexOf("&",i);return(0>r||r>n)&&(r=n),i+=t.length+1,decodeURIComponent(e.substr(i,r-i).replace(/\+/g," "))}var we=/[?&]($|#)/;function Ie(e,t){var n;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof Ie?(this.i=f(t)?t:e.i,Ee(this,e.j),this.A=e.A,this.h=e.h,Ce(this,e.C),this.g=e.g,ke(this,je(e.a)),this.s=e.s):e&&(n=String(e).match(ve))?(this.i=!!t,Ee(this,n[1]||"",!0),this.A=Te(n[2]||""),this.h=Te(n[3]||"",!0),Ce(this,n[4]),this.g=Te(n[5]||"",!0),ke(this,n[6]||"",!0),this.s=Te(n[7]||"")):(this.i=!!t,this.a=new De(null,this.i))}function Ee(e,t,n){e.j=n?Te(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ce(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function ke(e,t,n){t instanceof De?(e.a=t,function(e,t){t&&!e.j&&(Me(e),e.h=null,e.a.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Fe(this,t),Fe(this,n),0<e.length&&(this.h=null,this.a.set(Be(this,n),$(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(n||(t=Ae(t,Oe)),e.a=new De(t,e.i))}function Se(e){return e instanceof Ie?new Ie(e):new Ie(e,void 0)}function Te(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return p(e)?(e=encodeURI(e).replace(t,Re),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Re(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ie.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,xe,!0),":");var n=this.h;return(n||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Ae(t,xe,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.C)&&e.push(":",String(n))),(n=this.g)&&(this.h&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ae(n,"/"==n.charAt(0)?Ne:Pe,!0))),(n=this.a.toString())&&e.push("?",n),(n=this.s)&&e.push("#",Ae(n,Le)),e.join("")};var xe=/[#\/\?@]/g,Pe=/[#\?:]/g,Ne=/[#\?]/g,Oe=/[#\?@]/g,Le=/#/g;function De(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function Me(e){e.a||(e.a=new pe,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Fe(e,t){Me(e),t=Be(e,t),me(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,me((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&ge(e)))}function Ue(e,t){return Me(e),t=Be(e,t),me(e.a.g,t)}function je(e){var t=new De;return t.h=e.h,e.a&&(t.a=new pe(e.a),t.g=e.g),t}function Be(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function qe(e){this.a=Se(e)}function Ve(e){return e.a.a.get(ze.Pa)||null}function He(e,t){t?e.a.a.set(ze.PROVIDER_ID,t):Fe(e.a.a,ze.PROVIDER_ID)}(e=De.prototype).add=function(e,t){Me(this),this.h=null,e=Be(this,e);var n=this.a.get(e);return n||this.a.set(e,n=[]),n.push(t),this.g+=1,this},e.clear=function(){this.a=this.h=null,this.g=0},e.forEach=function(e,t){Me(this),this.a.forEach((function(n,i){j(n,(function(n){e.call(t,n,i,this)}),this)}),this)},e.ja=function(){Me(this);for(var e=this.a.la(),t=this.a.ja(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},e.la=function(e){Me(this);var t=[];if(p(e))Ue(this,e)&&(t=K(t,this.a.get(Be(this,e))));else{e=this.a.la();for(var n=0;n<e.length;n++)t=K(t,e[n])}return t},e.set=function(e,t){return Me(this),this.h=null,Ue(this,e=Be(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},e.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},e.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.la(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.h=e.join("&")},qe.prototype.toString=function(){return this.a.toString()};var We,ze={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var Ge=h.navigator;if(Ge){var Ke=Ge.userAgent;if(Ke){We=Ke;break e}}We=""}function $e(e){return-1!=We.indexOf(e)}function Ye(){return($e("Chrome")||$e("CriOS"))&&!$e("Edge")}function Je(e){return Je[" "](e),e}Je[" "]=v;var Xe,Qe,Ze=$e("Opera"),et=$e("Trident")||$e("MSIE"),tt=$e("Edge"),nt=tt||et,it=$e("Gecko")&&!(-1!=We.toLowerCase().indexOf("webkit")&&!$e("Edge"))&&!($e("Trident")||$e("MSIE"))&&!$e("Edge"),rt=-1!=We.toLowerCase().indexOf("webkit")&&!$e("Edge"),st=rt&&$e("Mobile"),ot=$e("Macintosh");function at(){var e=h.document;return e?e.documentMode:void 0}e:{var ut="",ct=(Qe=We,it?/rv:([^\);]+)(\)|;)/.exec(Qe):tt?/Edge\/([\d\.]+)/.exec(Qe):et?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Qe):rt?/WebKit\/(\S+)/.exec(Qe):Ze?/(?:Version)[ \/]?(\S+)/.exec(Qe):void 0);if(ct&&(ut=ct?ct[1]:""),et){var lt=at();if(null!=lt&&lt>parseFloat(ut)){Xe=String(lt);break e}}Xe=ut}var dt,ht={};function ft(e){return function(e,t){var n=ht;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(){for(var t=0,n=J(String(Xe)).split("."),i=J(String(e)).split("."),r=Math.max(n.length,i.length),s=0;0==t&&s<r;s++){var o=n[s]||"",a=i[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;t=re(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||re(0==o[2].length,0==a[2].length)||re(o[2],a[2]),o=o[3],a=a[3]}while(0==t)}return 0<=t}))}var pt=h.document;function gt(e,t){this.a=e===vt&&t||"",this.g=mt}dt=pt&&et?at()||("CSS1Compat"==pt.compatMode?parseInt(Xe,10):5):void 0,gt.prototype.ma=!0,gt.prototype.ka=function(){return this.a},gt.prototype.toString=function(){return"Const{"+this.a+"}"};var mt={},vt={};function yt(){this.a="",this.h=_t}function bt(e){return e instanceof yt&&e.constructor===yt&&e.h===_t?e.a:(F("expected object of type TrustedResourceUrl, got '"+e+"' of type "+b(e)),"type_error:TrustedResourceUrl")}yt.prototype.ma=!0,yt.prototype.ka=function(){return this.a.toString()},yt.prototype.g=function(){return 1},yt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var _t={};function wt(){this.a="",this.h=St}function It(e){return e instanceof wt&&e.constructor===wt&&e.h===St?e.a:(F("expected object of type SafeUrl, got '"+e+"' of type "+b(e)),"type_error:SafeUrl")}wt.prototype.ma=!0,wt.prototype.ka=function(){return this.a.toString()},wt.prototype.g=function(){return 1},wt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var Et=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ct(e){return e instanceof wt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),Et.test(e)||(e="about:invalid#zClosurez"),Tt(e))}function kt(e){return e instanceof wt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),Et.test(e)||(e="about:invalid#zClosurez"),Tt(e))}var St={};function Tt(e){var t=new wt;return t.a=e,t}function At(){this.a="",this.g=Rt}Tt("about:blank"),At.prototype.ma=!0;var Rt={};function xt(){this.a="",this.j=Nt,this.h=null}function Pt(e){return e instanceof xt&&e.constructor===xt&&e.j===Nt?e.a:(F("expected object of type SafeHtml, got '"+e+"' of type "+b(e)),"type_error:SafeHtml")}At.prototype.ka=function(){return this.a},At.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},xt.prototype.g=function(){return this.h},xt.prototype.ma=!0,xt.prototype.ka=function(){return this.a.toString()},xt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Nt={};function Ot(e,t){var n=new xt;return n.a=e,n.h=t,n}Ot("<!DOCTYPE html>",0);var Lt=Ot("",0);Ot("<br>",0);var Dt,Mt,Ft=(Mt=!1,function(){return Mt||(Dt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Pt(Lt),!t.parentElement)}(),Mt=!0),Dt});function Ut(e,t){t=t instanceof wt?t:kt(t),e.assign(It(t))}function jt(e,t){this.a=f(e)?e:0,this.g=f(t)?t:0}function Bt(e,t){this.width=e,this.height=t}function qt(e){return e?new Xt($t(e)):P||(P=new Xt)}function Vt(e,t){var n=t||document;return n.querySelectorAll&&n.querySelector?n.querySelectorAll("."+e):Wt(document,e,t)}function Ht(e,t){var n=t||document;if(n.getElementsByClassName)e=n.getElementsByClassName(e)[0];else{n=document;var i=t||n;e=i.querySelectorAll&&i.querySelector&&e?i.querySelector(e?"."+e:""):Wt(n,e,t)[0]||null}return e||null}function Wt(e,t,n){var i;if((e=n||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var s={};for(n=i=0;e=r[n];n++){var o=e.className;"function"==typeof o.split&&H(o.split(/\s+/),t)&&(s[i++]=e)}return s.length=i,s}return r}jt.prototype.toString=function(){return"("+this.a+", "+this.g+")"},jt.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},jt.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},jt.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(e=Bt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},e.aspectRatio=function(){return this.width/this.height},e.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},e.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},e.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var zt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Gt(e){return e.scrollingElement?e.scrollingElement:(rt||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function Kt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function $t(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function Yt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var n;n=e.firstChild;)e.removeChild(n);e.appendChild($t(e).createTextNode(String(t)))}}function Jt(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||p(e.className)&&H(e.className.split(/\s+/),t)})):null}function Xt(e){this.a=e||h.document||document}Xt.prototype.N=function(){return p(void 0)?this.a.getElementById(void 0):void 0};var Qt={Fc:!0},Zt={Hc:!0},en={Ec:!0},tn={Gc:!0};function nn(){throw Error("Do not instantiate directly")}function rn(e,t,n,i){if(e=e(t||on,void 0,n),i=(i||qt()).a.createElement("DIV"),(e=function(e){if(!E(e))return se(String(e));if(e instanceof nn){if(e.fa===Qt)return e.content;if(e.fa===tn)return se(e.content)}return F("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(sn),e=Ot(e,null),Ft())for(;i.lastChild;)i.removeChild(i.lastChild);return i.innerHTML=Pt(e),1==i.childNodes.length&&(1==(e=i.firstChild).nodeType&&(i=e)),i}nn.prototype.va=null,nn.prototype.toString=function(){return this.content};var sn=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,on={};function an(){nn.call(this)}function un(e){return null!=e&&e.fa===Qt?e:e instanceof xt?hn(Pt(e).toString(),e.g()):hn(se(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function cn(){nn.call(this)}function ln(e,t){this.content=String(e),this.va=null!=t?t:null}function dn(e){return new ln(e,void 0)}L(an,nn),an.prototype.fa=Qt,L(cn,nn),cn.prototype.fa=Zt,cn.prototype.va=1,L(ln,nn),ln.prototype.fa=tn;var hn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return e=new t(String(e)),void 0!==n&&(e.va=n),e}}(an),fn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(cn);function pn(e){return(e=String(e))?new ln(e,void 0):""}var gn=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,n){return(e=String(e))?(e=new t(e),void 0!==n&&(e.va=n),e):""}}(an);function mn(e){return null!=e&&e.fa===Qt?String(String(e.content).replace(Tn,"").replace(An,"&lt;")).replace(En,_n):se(String(e))}function vn(e){return null!=e&&e.fa===Zt?e=String(e).replace(Cn,In):e instanceof wt?e=String(It(e).toString()).replace(Cn,In):(e=String(e),Sn.test(e)?e=e.replace(Cn,In):(F("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function yn(e){return null!=e&&e.fa===en?e=e.content:null==e?e="":e instanceof At?e instanceof At&&e.constructor===At&&e.g===Rt?e=e.a:(F("expected object of type SafeStyle, got '"+e+"' of type "+b(e)),e="type_error:SafeStyle"):(e=String(e),kn.test(e)||(F("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var bn={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function _n(e){return bn[e]}var wn={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function In(e){return wn[e]}var En=/[\x00\x22\x27\x3c\x3e]/g,Cn=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kn=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Sn=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Tn=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,An=/</g;function Rn(){return dn("Enter a valid phone number")}function xn(){return dn("Unable to send password reset code to specified email")}function Pn(){return dn("Something went wrong. Please try again.")}function Nn(){return dn("This email already exists without any means of sign-in. Please reset the password to recover.")}function On(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return dn(t)}function Ln(){return dn("Please login again to perform this operation")}function Dn(e,t,n){var i=Error.call(this);if(this.message=i.message,"stack"in i&&(this.stack=i.stack),this.code=Mn+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=Pn();e=dn(e).toString()}this.message=e||"",this.credential=n||null}u(Dn,Error),Dn.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Mn="firebaseui/";function Fn(){0!=Un&&(jn[this[C]||(this[C]=++k)]=this),this.T=this.T,this.C=this.C}var Un=0,jn={};function Bn(e,t){e.T?f(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(f(void 0)?A(t,void 0):t))}function qn(e){e&&"function"==typeof e.m&&e.m()}Fn.prototype.T=!1,Fn.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Un)){var e=this[C]||(this[C]=++k);if(0!=Un&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete jn[e]}},Fn.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Vn=Object.freeze||function(e){return e},Hn=!et||9<=Number(dt),Wn=et&&!ft("9"),zn=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",v,t),h.removeEventListener("test",v,t)}catch(e){}return e}();function Gn(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function Kn(e,t){if(Gn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(it){e:{try{Je(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==n?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=p(e.pointerType)?e.pointerType:$n[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}Gn.prototype.stopPropagation=function(){this.h=!0},Gn.prototype.preventDefault=function(){this.qb=!1},L(Kn,Gn);var $n=Vn({2:"touch",3:"pen",4:"mouse"});Kn.prototype.stopPropagation=function(){Kn.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},Kn.prototype.preventDefault=function(){Kn.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Wn)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var Yn="closure_listenable_"+(1e6*Math.random()|0),Jn=0;function Xn(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.La=r,this.key=++Jn,this.sa=this.Ia=!1}function Qn(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Zn(e){this.src=e,this.a={},this.g=0}function ei(e,t){var n=t.type;n in e.a&&W(e.a[n],t)&&(Qn(t),0==e.a[n].length&&(delete e.a[n],e.g--))}function ti(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.sa&&s.listener==t&&s.capture==!!n&&s.La==i)return r}return-1}Zn.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.a[s])||(e=this.a[s]=[],this.g++);var o=ti(e,t,i,r);return-1<o?(t=e[o],n||(t.Ia=!1)):((t=new Xn(t,this.src,s,!!i,r)).Ia=n,e.push(t)),t};var ni="closure_lm_"+(1e6*Math.random()|0),ii={};function ri(e,t,n,i,r){if(i&&i.once)return oi(e,t,n,i,r);if(_(t)){for(var s=0;s<t.length;s++)ri(e,t[s],n,i,r);return null}return n=gi(n),e&&e[Yn]?e.J.add(String(t),n,!1,E(i)?!!i.capture:!!i,r):si(e,t,n,!1,i,r)}function si(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=E(r)?!!r.capture:!!r,a=fi(e);if(a||(e[ni]=a=new Zn(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){var e=hi,t=Hn?function(n){return e.call(t.src,t.listener,n)}:function(n){if(!(n=e.call(t.src,t.listener,n)))return n};return t}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)zn||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(ci(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function oi(e,t,n,i,r){if(_(t)){for(var s=0;s<t.length;s++)oi(e,t[s],n,i,r);return null}return n=gi(n),e&&e[Yn]?e.J.add(String(t),n,!0,E(i)?!!i.capture:!!i,r):si(e,t,n,!0,i,r)}function ai(e,t,n,i,r){if(_(t))for(var s=0;s<t.length;s++)ai(e,t[s],n,i,r);else i=E(i)?!!i.capture:!!i,n=gi(n),e&&e[Yn]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(n=ti(s=e.a[t],n,i,r))&&(Qn(s[n]),z(s,n),0==s.length&&(delete e.a[t],e.g--)))):e&&(e=fi(e))&&(t=e.a[t.toString()],e=-1,t&&(e=ti(t,n,i,r)),(n=-1<e?t[e]:null)&&ui(n))}function ui(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[Yn])ei(t.J,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ci(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=fi(t))?(ei(n,e),0==n.g&&(n.src=null,t[ni]=null)):Qn(e)}}}function ci(e){return e in ii?ii[e]:ii[e]="on"+e}function li(e,t,n,i){var r=!0;if((e=fi(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var s=t[e];s&&s.capture==n&&!s.sa&&(s=di(s,i),r=r&&!1!==s)}return r}function di(e,t){var n=e.listener,i=e.La||e.src;return e.Ia&&ui(e),n.call(i,t)}function hi(e,t){if(e.sa)return!0;if(!Hn){if(!t)e:{t=["window","event"];for(var n=h,i=0;i<t.length;i++)if(null==(n=n[t[i]])){t=null;break e}t=n}if(t=new Kn(i=t,this),n=!0,!(0>i.keyCode||null!=i.returnValue)){e:{var r=!1;if(0==i.keyCode)try{i.keyCode=-1;break e}catch(e){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=t.g;r;r=r.parentNode)i.push(r);for(e=e.type,r=i.length-1;!t.h&&0<=r;r--){t.g=i[r];var s=li(i[r],e,!0,t);n=n&&s}for(r=0;!t.h&&r<i.length;r++)t.g=i[r],s=li(i[r],e,!1,t),n=n&&s}return n}return di(e,new Kn(t,this))}function fi(e){return(e=e[ni])instanceof Zn?e:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function gi(e){return I(e)?e:(e[pi]||(e[pi]=function(t){return e.handleEvent(t)}),e[pi])}function mi(){Fn.call(this),this.J=new Zn(this),this.wb=this,this.Ha=null}function vi(e,t){var n,i=e.Ha;if(i)for(n=[];i;i=i.Ha)n.push(i);if(e=e.wb,i=t.type||t,p(t))t=new Gn(t,e);else if(t instanceof Gn)t.target=t.target||e;else{var r=t;ce(t=new Gn(i,e),r)}if(r=!0,n)for(var s=n.length-1;!t.h&&0<=s;s--){var o=t.g=n[s];r=yi(o,i,!0,t)&&r}if(t.h||(r=yi(o=t.g=e,i,!0,t)&&r,t.h||(r=yi(o,i,!1,t)&&r)),n)for(s=0;!t.h&&s<n.length;s++)r=yi(o=t.g=n[s],i,!1,t)&&r;return r}function yi(e,t,n,i){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.sa&&o.capture==n){var a=o.listener,u=o.La||o.src;o.Ia&&ei(e.J,o),r=!1!==a.call(u,i)&&r}}return r&&0!=i.qb}L(mi,Fn),mi.prototype[Yn]=!0,mi.prototype.Za=function(e){this.Ha=e},mi.prototype.removeEventListener=function(e,t,n,i){ai(this,e,t,n,i)},mi.prototype.o=function(){if(mi.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var n=t.a[e],i=0;i<n.length;i++)Qn(n[i]);delete t.a[e],t.g--}}this.Ha=null};var bi={},_i=0;function wi(e,t){if(!e)throw Error("Event target element must be provided!");if(e=Ei(e),bi[e]&&bi[e].length)for(var n=0;n<bi[e].length;n++)vi(bi[e][n],t)}function Ii(e){var t=Ei(e.N());bi[t]&&bi[t].length&&(function(e,t){e:{for(var n=e.length,i=p(e)?e.split(""):e,r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}0<=t&&z(e,t)}(bi[t],(function(t){return t==e})),bi[t].length||delete bi[t])}function Ei(e){return void 0===e.a&&(e.a=_i,_i++),e.a}function Ci(e){if(!e)throw Error("Event target element must be provided!");mi.call(this),this.a=e}function ki(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function Si(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function Ti(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function Ai(){this.g=this.a=null}u(Ci,mi),Ci.prototype.N=function(){return this.a},Ci.prototype.register=function(){var e=Ei(this.N());bi[e]?H(bi[e],this)||bi[e].push(this):bi[e]=[this]},Si.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Ri,xi,Pi=new Si((function(){return new Oi}),(function(e){e.reset()}));function Ni(){var e=Fi,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Oi(){this.next=this.g=this.a=null}function Li(e){h.setTimeout((function(){throw e}),0)}function Di(e,t){xi||function(){if(h.Promise&&h.Promise.resolve){var e=h.Promise.resolve(void 0);xi=function(){e.then(Ui)}}else xi=function(){var e=Ui;!I(h.setImmediate)||h.Window&&h.Window.prototype&&!$e("Edge")&&h.Window.prototype.setImmediate==h.setImmediate?(Ri||(Ri=function(){var e=h.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!$e("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var n="callImmediate"+Math.random(),i="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=A((function(e){"*"!=i&&e.origin!=i||e.data!=n||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(n,i)}}}),void 0!==e&&!$e("Trident")&&!$e("MSIE")){var t=new e,n={},i=n;return t.port1.onmessage=function(){if(f(n.next)){var e=(n=n.next).gb;n.gb=null,e()}},function(e){i.next={gb:e},i=i.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){h.setTimeout(e,0)}}()),Ri(e)):h.setImmediate(e)}}(),Mi||(xi(),Mi=!0),Fi.add(e,t)}Ai.prototype.add=function(e,t){var n=Pi.get();n.set(e,t),this.g?this.g.next=n:this.a=n,this.g=n},Oi.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Oi.prototype.reset=function(){this.next=this.g=this.a=null};var Mi=!1,Fi=new Ai;function Ui(){for(var e;e=Ni();){try{e.a.call(e.g)}catch(e){Li(e)}Ti(Pi,e)}Mi=!1}function ji(e){if(this.a=Bi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=v)try{var t=this;e.call(void 0,(function(e){Xi(t,qi,e)}),(function(e){if(!(e instanceof ir))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Xi(t,Vi,e)}))}catch(e){Xi(this,Vi,e)}}var Bi=0,qi=2,Vi=3;function Hi(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}Hi.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Wi=new Si((function(){return new Hi}),(function(e){e.reset()}));function zi(e,t,n){var i=Wi.get();return i.s=e,i.g=t,i.j=n,i}function Gi(e){if(e instanceof ji)return e;var t=new ji(v);return Xi(t,qi,e),t}function Ki(e){return new ji((function(t,n){n(e)}))}function $i(e,t){if(e.a==Bi)if(e.h){var n=e.h;if(n.g){for(var i=0,r=null,s=null,o=n.g;o&&(o.h||(i++,o.a==e&&(r=o),!(r&&1<i)));o=o.next)r||(s=o);r&&(n.a==Bi&&1==i?$i(n,t):(s?((i=s).next==n.j&&(n.j=i),i.next=i.next.next):Zi(n),er(n,r,Vi,t)))}e.h=null}else Xi(e,Vi,t)}function Yi(e,t){e.g||e.a!=qi&&e.a!=Vi||Qi(e),e.j?e.j.next=t:e.g=t,e.j=t}function Ji(e,t,n,i){var r=zi(null,null,null);return r.a=new ji((function(e,s){r.s=t?function(n){try{var r=t.call(i,n);e(r)}catch(e){s(e)}}:e,r.g=n?function(t){try{var r=n.call(i,t);!f(r)&&t instanceof ir?s(t):e(r)}catch(e){s(e)}}:s})),r.a.h=e,Yi(e,r),r.a}function Xi(e,t,n){if(e.a==Bi){e===n&&(t=Vi,n=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var i=n,r=e.hc,s=e.ic;if(i instanceof ji){Yi(i,zi(r||v,s||null,e));var o=!0}else if(ki(i))i.then(r,s,e),o=!0;else{if(E(i))try{var a=i.then;if(I(a)){!function(e,t,n,i,r){function s(e){a||(a=!0,i.call(r,e))}function o(e){a||(a=!0,n.call(r,e))}var a=!1;try{t.call(e,o,s)}catch(e){s(e)}}(i,a,r,s,e),o=!0;break e}}catch(t){s.call(e,t),o=!0;break e}o=!1}}o||(e.A=n,e.a=t,e.h=null,Qi(e),t!=Vi||n instanceof ir||function(e,t){e.s=!0,Di((function(){e.s&&nr.call(null,t)}))}(e,n))}}function Qi(e){e.i||(e.i=!0,Di(e.Hb,e))}function Zi(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function er(e,t,n,i){if(n==Vi&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,tr(t,n,i);else try{t.h?t.s.call(t.j):tr(t,n,i)}catch(e){nr.call(null,e)}Ti(Wi,t)}function tr(e,t,n){t==qi?e.s.call(e.j,n):e.g&&e.g.call(e.j,n)}ji.prototype.then=function(e,t,n){return Ji(this,I(e)?e:null,I(t)?t:null,n)},ji.prototype.$goog_Thenable=!0,(e=ji.prototype).fc=function(e,t){return(e=zi(e,e,t)).h=!0,Yi(this,e),this},e.Ca=function(e,t){return Ji(this,null,e,t)},e.cancel=function(e){this.a==Bi&&Di((function(){$i(this,new ir(e))}),this)},e.hc=function(e){this.a=Bi,Xi(this,qi,e)},e.ic=function(e){this.a=Bi,Xi(this,Vi,e)},e.Hb=function(){for(var e;e=Zi(this);)er(this,e,this.a,this.A);this.i=!1};var nr=Li;function ir(e){D.call(this,e)}function rr(e,t,n){t||(t={}),n=n||window;var i=e instanceof wt?e:Ct(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(s in t)switch(s){case"width":case"height":case"top":case"left":r.push(s+"="+t[s]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(s+"="+(t[s]?1:0))}var s=r.join(",");return($e("iPhone")&&!$e("iPod")&&!$e("iPad")||$e("iPad")||$e("iPod"))&&n.navigator&&n.navigator.standalone&&e&&"_self"!=e?(s=n.document.createElement("A"),i=i instanceof wt?i:kt(i),s.href=It(i),s.setAttribute("target",e),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,n,1),s.dispatchEvent(t),n={}):t.noreferrer?(n=n.open("",e,s),t=It(i).toString(),n&&(nt&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),n.opener=null,t=Ot('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+se(t)+'">',null),n.document.write(Pt(t)),n.document.close())):(n=n.open(It(i).toString(),e,s))&&t.noopener&&(n.opener=null),n}function sr(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function or(e){rr(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function ar(e,t){if(null==(e=E(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function ur(){return window.location.href}function cr(e){var t=_r;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function lr(e,t,n){e.a=!0,e.h=n,e.j=!t,pr(e)}function dr(e){if(e.a){if(!e.J)throw new gr(e);e.J=!1}}function hr(e,t,n){e.s.push([t,n,void 0]),e.a&&pr(e)}function fr(e){return V(e.s,(function(e){return I(e[1])}))}function pr(e){if(e.i&&e.a&&fr(e)){var t=e.i,n=yr[t];n&&(h.clearTimeout(n.a),delete yr[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var i=n=!1;e.s.length&&!e.A;){var r=e.s.shift(),s=r[0],o=r[1];if(r=r[2],s=e.j?o:s)try{var a=s.call(r||e.O,t);f(a)&&(e.j=e.j&&(a==t||a instanceof Error),e.h=t=a),(ki(t)||"function"==typeof h.Promise&&t instanceof h.Promise)&&(i=!0,e.A=!0)}catch(i){t=i,e.j=!0,fr(e)||(n=!0)}}e.h=t,i&&(a=A(e.L,e,!0),i=A(e.L,e,!1),t instanceof cr?(hr(t,a,i),t.l=!0):t.then(a,i)),n&&(t=new vr(t),yr[t.a]=t,e.i=t.a)}function gr(){D.call(this)}function mr(){D.call(this)}function vr(e){this.a=h.setTimeout(A(this.h,this),0),this.g=e}L(ir,D),ir.prototype.name="cancel",cr.prototype.cancel=function(e){if(this.a)this.h instanceof cr&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new mr(this),dr(this),lr(this,!1,e))}},cr.prototype.L=function(e,t){this.A=!1,lr(this,e,t)},cr.prototype.callback=function(e){dr(this),lr(this,!0,e)},cr.prototype.then=function(e,t,n){var i,r,s=new ji((function(e,t){i=e,r=t}));return hr(this,i,(function(e){e instanceof mr?s.cancel():r(e)})),s.then(e,t,n)},cr.prototype.$goog_Thenable=!0,L(gr,D),gr.prototype.message="Deferred has already fired",gr.prototype.name="AlreadyCalledError",L(mr,D),mr.prototype.message="Deferred was canceled",mr.prototype.name="CanceledError",vr.prototype.h=function(){throw delete yr[this.a],this.g};var yr={};function br(e){var t={},n=t.document||document,i=bt(e).toString(),r=document.createElement("SCRIPT"),s={rb:r,sb:void 0},o=new cr(s),a=null,u=null!=t.timeout?t.timeout:5e3;return 0<u&&(a=window.setTimeout((function(){wr(r,!0);var e=new Cr(Er,"Timeout reached for loading script "+i);dr(o),lr(o,!1,e)}),u),s.sb=a),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(wr(r,t.xc||!1,a),o.callback(null))},r.onerror=function(){wr(r,!0,a);var e=new Cr(Ir,"Error while loading script "+i);dr(o),lr(o,!1,e)},ce(s=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){oe(t,(function(t,n){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==n?e.style.cssText=t:"class"==n?e.className=t:"for"==n?e.htmlFor=t:zt.hasOwnProperty(n)?e.setAttribute(zt[n],t):0==n.lastIndexOf("aria-",0)||0==n.lastIndexOf("data-",0)?e.setAttribute(n,t):e[n]=t}))}(r,s),function(e,t){e.src=bt(t),null===m&&(m=(t=(t=h.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&g.test(t)?t:""),(t=m)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(n).appendChild(r),o}function _r(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&wr(e,!0,this.sb)}}function wr(e,t,n){null!=n&&h.clearTimeout(n),e.onload=v,e.onerror=v,e.onreadystatechange=v,t&&window.setTimeout((function(){Kt(e)}),0)}var Ir=0,Er=1;function Cr(e,t){var n="Jsloader error (code #"+e+")";t&&(n+=": "+t),D.call(this,n),this.code=e}function kr(){return h.google&&h.google.accounts&&h.google.accounts.id||null}function Sr(e){this.a=e||kr(),this.h=!1,this.g=null}function Tr(e,t,n){return e.a&&t?(e.h=!0,new ji((function(i){e.g=i,e.a.initialize({client_id:t,callback:i,auto_select:!n}),e.a.prompt()}))):Gi(t?Rr.Xa().load().then((function(){return e.a=kr(),Tr(e,t,n)})).Ca((function(){return null})):null)}L(Cr,D),Sr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},y(Sr);var Ar=new gt(vt,"https://accounts.google.com/gsi/client");function Rr(){this.a=null}function xr(e,t){this.a=e,this.g=t||function(e){throw e}}function Pr(e,t,n){this.reset(e,t,n,void 0,void 0)}Rr.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=Ar;e instanceof gt&&e.constructor===gt&&e.g===mt?e=e.a:(F("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new yt;return t.a=e,t}();return kr()?Gi():this.a=function(){var e=null;return new ji((function(t){"complete"==h.document.readyState?t():(e=function(){t()},oi(window,"load",e))})).Ca((function(t){throw ai(window,"load",e),t}))}().then((function(){if(!kr())return new ji((function(n,i){var r=setTimeout((function(){e.a=null,i(Error("Network error!"))}),1e4);h.onGoogleLibraryLoad=function(){clearTimeout(r),n()},Gi(br(t)).then((function(){kr()&&n()})).Ca((function(t){clearTimeout(r),e.a=null,i(t)}))}))}))},y(Rr),xr.prototype.confirm=function(e){return Gi(this.a.confirm(e)).Ca(this.g)},Pr.prototype.a=null;function Nr(e){this.s=e,this.a=this.h=this.j=this.g=null}function Or(e,t){this.name=e,this.value=t}Pr.prototype.reset=function(e,t,n,i,r){"number"==typeof r||0,this.h=i||N(),this.j=e,this.s=t,this.g=n,delete this.a},Or.prototype.toString=function(){return this.name};var Lr=new Or("SEVERE",1e3),Dr=new Or("WARNING",900),Mr=new Or("CONFIG",700);function Fr(e){return e.j?e.j:e.g?Fr(e.g):(F("Root logger has no level set."),null)}Nr.prototype.log=function(e,t,n){if(e.value>=Fr(this).value)for(I(t)&&(t=t()),e=new Pr(e,String(t),this.s),n&&(e.a=n),n=this;n;){var i=n,r=e;if(i.a)for(var s=0;t=i.a[s];s++)t(r);n=n.g}};var Ur={},jr=null;function Br(){jr||(jr=new Nr(""),Ur[""]=jr,jr.j=Mr)}function qr(){this.a=N()}var Vr=null;function Hr(e){this.j=e||"",Vr||(Vr=new qr),this.s=Vr}function Wr(e){return 10>e?"0"+e:String(e)}function zr(e){Hr.call(this,e)}function Gr(){this.s=A(this.h,this),this.a=new zr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}qr.prototype.set=function(e){this.a=e},qr.prototype.reset=function(){this.set(N())},qr.prototype.get=function(){return this.a},Hr.prototype.a=!0,Hr.prototype.g=!0,Hr.prototype.h=!1,L(zr,Hr),Gr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var n=[];if(n.push(e.j," "),e.g){var i=new Date(t.h);n.push("[",Wr(i.getFullYear()-2e3)+Wr(i.getMonth()+1)+Wr(i.getDate())+" "+Wr(i.getHours())+":"+Wr(i.getMinutes())+":"+Wr(i.getSeconds())+"."+Wr(Math.floor(i.getMilliseconds()/10)),"] ")}return n.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var n=0;if(1>e)n=2;else for(;100>e;)n++,e*=10;for(;0<n--;)t=" "+t;return t}(t,e.s.get()),"s] "),n.push("[",t.g,"] "),n.push(t.s),e.h&&(t=t.a)&&n.push("\n",t instanceof Error?t.message:t.toString()),e.a&&n.push("\n"),n.join("")}(this.a,e);if($r)!function(e,t,n,i){e[t]?e[t](n,i||""):e.log(n,i||"")}($r,function(e){if(e){if(e.value>=Lr.value)return"error";if(e.value>=Dr.value)return"warn";if(e.value>=Mr.value)return"log"}return"debug"}(e.j),t,e.a)}};var Kr,$r=h.console;function Yr(e,t){Kr&&Kr.log(Lr,e,t)}Kr=function e(t){var n;if(Br(),!(n=Ur[t])){n=new Nr(t);var i=t.lastIndexOf("."),r=t.substr(i+1);(i=e(t.substr(0,i))).h||(i.h={}),i.h[r]=n,n.g=i,Ur[t]=n}return n}("firebaseui");var Jr=new Gr;if(1!=Jr.g){var Xr;Br(),Xr=jr;var Qr=Jr.s;Xr.a||(Xr.a=[]),Xr.a.push(Qr),Jr.g=!0}function Zr(e){Kr&&Kr.log(Dr,e,void 0)}function es(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function ts(e){e=(e.a.cookie||"").split(";");for(var t,n,i=[],r=[],s=0;s<e.length;s++)-1==(t=(n=J(e[s])).indexOf("="))?(i.push(""),r.push(n)):(i.push(n.substring(0,t)),r.push(n.substring(t+1)));return{keys:i,values:r}}(e=es.prototype).set=function(e,t,n,i,r,s){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');f(n)||(n=-1),r=r?";domain="+r:"",i=i?";path="+i:"",s=s?";secure":"",n=0>n?"":0==n?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(N()+1e3*n).toUTCString(),this.a.cookie=e+"="+t+r+i+n+s},e.get=function(e,t){for(var n,i=e+"=",r=(this.a.cookie||"").split(";"),s=0;s<r.length;s++){if(0==(n=J(r[s])).lastIndexOf(i,0))return n.substr(i.length);if(n==e)return""}return t},e.ja=function(){return ts(this).keys},e.la=function(){return ts(this).values},e.clear=function(){for(var e=ts(this).keys,t=e.length-1;0<=t;t--){var n=e[t];this.get(n),this.set(n,"",0,void 0,void 0)}};var ns=new es;function is(){}function rs(e,t,n,i){this.h=null!=e?e:-1,this.g=t||null,this.a=n||null,this.j=!!i}function ss(e,t){this.g=e,this.a=t||null}function os(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function as(e){if(e&&e.email){var t=e.credential&&o.default.auth.AuthCredential.fromJSON(e.credential);return new ss(e.email,t)}return null}function us(e){this.a=e||null}function cs(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);255<r&&(t[n++]=255&r,r>>=8),t[n++]=r}return t}function ls(e){return q(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function ds(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(hs*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<hs*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var n=t,i=n[0];n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=i,bs(t),t[0]^=Is[e/this.g][0],t[1]^=Is[e/this.g][1],t[2]^=Is[e/this.g][2],t[3]^=Is[e/this.g][3]}else 6<this.g&&4==e%this.g&&bs(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}u(rs,is),rs.prototype.set=function(e,t){ns.set(e,t,this.h,this.g,this.a,this.j)},rs.prototype.get=function(e){return ns.get(e)||null},rs.prototype.ra=function(e){var t=this.g,n=this.a;ns.get(e),ns.set(e,"",0,t,n)},ds.prototype.A=16;var hs=ds.prototype.A/4;function fs(e,t){for(var n,i=0;i<hs;i++)for(var r=0;4>r;r++)n=t[n=4*r+i],e.h[i][r]=n}function ps(e){for(var t=[],n=0;n<hs;n++)for(var i=0;4>i;i++)t[4*i+n]=e.h[n][i];return t}function gs(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]^=e.a[4*t+i][n]}function ms(e,t){for(var n=0;4>n;n++)for(var i=0;4>i;i++)e.h[n][i]=t[e.h[n][i]]}function vs(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][n]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][(n+t)%hs]}function ys(e){for(var t=1;4>t;t++)for(var n=0;4>n;n++)e.s[t][(n+t)%hs]=e.h[t][n];for(t=1;4>t;t++)for(n=0;4>n;n++)e.h[t][n]=e.s[t][n]}function bs(e){e[0]=_s[e[0]],e[1]=_s[e[1]],e[2]=_s[e[2]],e[3]=_s[e[3]]}var _s=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],ws=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Is=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Es=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Cs=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],ks=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Ss=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Ts=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],As=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Rs(e,t){e=new ds(Ps(e));for(var n,i=(t=cs(t)).splice(0,16),r="";i.length;){n=16-i.length;for(var s=0;s<n;s++)i.push(0);for(fs(n=e,i),gs(n,0),i=1;i<n.j;++i){ms(n,_s),vs(n),s=n.h;for(var o=n.s[0],a=0;4>a;a++)o[0]=s[0][a],o[1]=s[1][a],o[2]=s[2][a],o[3]=s[3][a],s[0][a]=Es[o[0]]^Cs[o[1]]^o[2]^o[3],s[1][a]=o[0]^Es[o[1]]^Cs[o[2]]^o[3],s[2][a]=o[0]^o[1]^Es[o[2]]^Cs[o[3]],s[3][a]=Cs[o[0]]^o[1]^o[2]^Es[o[3]];gs(n,i)}ms(n,_s),vs(n),gs(n,n.j),r+=ls(ps(n)),i=t.splice(0,16)}return r}function xs(e,t){e=new ds(Ps(e));for(var n=[],i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));var r=n.splice(0,16);for(t="";r.length;){for(fs(i=e,r),gs(i,i.j),r=1;r<i.j;++r){ys(i),ms(i,ws),gs(i,i.j-r);for(var s=i.h,o=i.s[0],a=0;4>a;a++)o[0]=s[0][a],o[1]=s[1][a],o[2]=s[2][a],o[3]=s[3][a],s[0][a]=As[o[0]]^Ss[o[1]]^Ts[o[2]]^ks[o[3]],s[1][a]=ks[o[0]]^As[o[1]]^Ss[o[2]]^Ts[o[3]],s[2][a]=Ts[o[0]]^ks[o[1]]^As[o[2]]^Ss[o[3]],s[3][a]=Ss[o[0]]^Ts[o[1]]^ks[o[2]]^As[o[3]]}if(ys(i),ms(i,ws),gs(i,0),8192>=(i=ps(i)).length)i=String.fromCharCode.apply(null,i);else{for(r="",s=0;s<i.length;s+=8192)r+=String.fromCharCode.apply(null,Y(i,s,s+8192));i=r}t+=i,r=n.splice(0,16)}return t.replace(/(\x00)+$/,"")}function Ps(e){for(var t=32-(e=cs(e.substring(0,32))).length,n=0;n<t;n++)e.push(0);return e}function Ns(e){var t=[];return Ls(new Os,e,t),t.join("")}function Os(){}function Ls(e,t,n){if(null==t)n.push("null");else{if("object"==typeof t){if(_(t)){var i=t;t=i.length,n.push("[");for(var r="",s=0;s<t;s++)n.push(r),Ls(e,i[s],n),r=",";return void n.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(i in n.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,i)&&("function"!=typeof(s=t[i])&&(n.push(r),Fs(i,n),n.push(":"),Ls(e,s,n),r=","));return void n.push("}")}t=t.valueOf()}switch(typeof t){case"string":Fs(t,n);break;case"number":n.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":n.push(String(t));break;case"function":n.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var Ds={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ms=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Fs(e,t){t.push('"',e.replace(Ms,(function(e){var t=Ds[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),Ds[e]=t),t})),'"')}function Us(e){this.a=e}function js(){}function Bs(e){this.a=e}function qs(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function Vs(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function Hs(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function Ws(e,t){this.g=e,this.a=t+"::"}Us.prototype.set=function(e,t){f(t)?this.a.set(e,Ns(t)):this.a.ra(e)},Us.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},L(js,is),js.prototype.clear=function(){var e=fe(this.ha(!0)),t=this;j(e,(function(e){t.ra(e)}))},L(Bs,js),(e=Bs.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},e.get=function(e){if(!p(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},e.ra=function(e){this.a.removeItem(e)},e.ha=function(e){var t=0,n=this.a,i=new de;return i.next=function(){if(t>=n.length)throw le;var i=n.key(t++);if(e)return i;if(!p(i=n.getItem(i)))throw"Storage mechanism: Invalid value was encountered";return i},i},e.clear=function(){this.a.clear()},e.key=function(e){return this.a.key(e)},L(Vs,Bs),L(Hs,Bs),L(Ws,js),Ws.prototype.set=function(e,t){this.g.set(this.a+e,t)},Ws.prototype.get=function(e){return this.g.get(this.a+e)},Ws.prototype.ra=function(e){this.g.ra(this.a+e)},Ws.prototype.ha=function(e){var t=this.g.ha(!0),n=this,i=new de;return i.next=function(){for(var i=t.next();i.substr(0,n.a.length)!=n.a;)i=t.next();return e?i.substr(n.a.length):n.g.get(i)},i},qs(new Vs);var zs=new Hs,Gs=new Us(qs(zs)?new Ws(zs,"firebaseui"):null),Ks={name:"pendingEmailCredential",storage:Gs},$s={name:"redirectStatus",storage:Gs},Ys={name:"redirectUrl",storage:Gs},Js={name:"emailForSignIn",storage:new Us(new rs(3600,"/"))},Xs={name:"pendingEncryptedCredential",storage:new Us(new rs(3600,"/"))};function Qs(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Zs(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function eo(e,t,n){e.storage.set(n?e.name+":"+n:e.name,t)}function to(e){return Qs(Ys,e)||null}function no(e){return as(e=Qs(Ks,e)||null)}function io(e){Zs(Ks,e)}function ro(e,t){eo(Ks,os(e),t)}function so(e){return(e=Qs($s,e)||null)&&void 0!==e.tenantId?new us(e.tenantId):null}function oo(){this.W={}}function ao(e,t,n){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=n}function uo(e,t,n){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=n}function co(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function lo(){this.g=void 0,this.a={}}function ho(e,t,n,i){for(var r=0;r<t.length;r++){var s=t.charAt(r);e.a[s]||(e.a[s]=new lo),e=e.a[s]}if(i&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=n}function fo(e,t){for(var n in void 0!==e.g&&t.push(e.g),e.a)fo(e.a[n],t)}function po(e,t,n){for(var i in void 0!==e.g&&n.push(t),e.a)po(e.a[i],t+i,n)}function go(e){for(this.a=e,this.g=new lo,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function mo(e,t){var n={},i=0;for(void 0!==(e=e.g).g&&(n[i]=e.g);i<t.length;i++){var r=t.charAt(i);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(n[i]=e.g)}for(var s in n)if(n.hasOwnProperty(s))return n[s];return[]}function vo(e){for(var t=0;t<wo.length;t++)if(wo[t].c===e)return wo[t];return null}function yo(e){e=e.toUpperCase();for(var t=[],n=0;n<wo.length;n++)wo[n].f===e&&t.push(wo[n]);return t}function bo(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],n=0;n<wo.length;n++)wo[n].b==e&&t.push(wo[n]);e=t}else e=yo(e);return e}function _o(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}oo.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(e=lo.prototype).set=function(e,t){ho(this,e,t,!1)},e.add=function(e,t){ho(this,e,t,!0)},e.get=function(e){e:{for(var t=this,n=0;n<e.length;n++)if(!(t=t.a[e.charAt(n)])){e=void 0;break e}e=t}return e?e.g:void 0},e.la=function(){var e=[];return fo(this,e),e},e.ja=function(){var e=[];return po(this,"",e),e},e.clear=function(){this.a={},this.g=void 0};var wo=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];_o(wo);var Io=new go(wo);function Eo(e,t){this.a=e,this.Aa=t}function Co(e){e=J(e);var t=mo(Io,e);return 0<t.length?new Eo("1"==t[0].b?"1-US-0":t[0].c,J(e.substr(t[0].b.length+1))):null}function ko(e){var t=vo(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function So(e,t){for(var n=0;n<e.length;n++)if(!H(To,e[n])&&(null!==Ao&&e[n]in Ao||H(t,e[n])))return e[n];return null}var To=["emailLink","password","phone"],Ao={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function Ro(){this.a=new oo,ao(this.a,"autoUpgradeAnonymousUsers"),ao(this.a,"callbacks"),ao(this.a,"credentialHelper",ra),ao(this.a,"immediateFederatedRedirect",!1),ao(this.a,"popupMode",!1),ao(this.a,"privacyPolicyUrl"),ao(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),ao(this.a,"queryParameterForWidgetMode","mode"),ao(this.a,"signInFlow"),ao(this.a,"signInOptions"),ao(this.a,"signInSuccessUrl"),ao(this.a,"siteName"),ao(this.a,"tosUrl"),ao(this.a,"widgetUrl"),ao(this.a,"adminRestrictedOperation")}function xo(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!Xo(e)&&Yr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function Po(e){e=e.a.get("signInOptions")||[];for(var t=[],n=0;n<e.length;n++){var i=e[n];(i=E(i)?i:{provider:i}).provider&&t.push(i)}return t}function No(e,t){e=Po(e);for(var n=0;n<e.length;n++)if(e[n].provider===t)return e[n];return null}function Oo(e){return Po(e).map((function(e){return e.provider}))}function Lo(e,t){e=Do(e);for(var n=0;n<e.length;n++)if(e[n].providerId===t)return e[n];return null}function Do(e){return Po(e).map((function(e){if(Ao[e.provider]||H(ca,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?It(Ct(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?It(Ct(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function Mo(e){var t,n=No(e,o.default.auth.GoogleAuthProvider.PROVIDER_ID);if(t=n&&n.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(i in e=e.a.get("credentialHelper"),sa)if(sa[i]===e){var i=sa[i];break e}i=ra}t=i===ia}return t&&n.clientId||null}function Fo(e){return!!((e=No(e,o.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Uo(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function jo(e,t){return e=(e=No(e,t))&&e.scopes,Array.isArray(e)?e:[]}function Bo(e,t){return E(e=(e=No(e,t))&&e.customParameters)?(e=ae(e),t===o.default.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===o.default.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function qo(e){if(!(e=No(e,o.default.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,n=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==n&&!Array.isArray(n))throw Error("BlacklistedCountries must be an array.");if(t&&n)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!n)return wo;if(e=[],t){n={};for(var i=0;i<t.length;i++)for(var r=bo(t[i]),s=0;s<r.length;s++)n[r[s].c]=r[s];for(var a in n)n.hasOwnProperty(a)&&e.push(n[a])}else{for(a={},t=0;t<n.length;t++)for(r=bo(n[t]),i=0;i<r.length;i++)a[r[i].c]=r[i];for(r=0;r<wo.length;r++)null!==a&&wo[r].c in a||e.push(wo[r])}return e}function Vo(e){return co(e.a,"queryParameterForWidgetMode")}function Ho(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Zr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){or(t)}}return null}function Wo(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Zr("Term of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){or(n)}}return null}function zo(e){return!(e=No(e,o.default.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function Go(e){return!(!(e=No(e,o.default.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==o.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function Ko(e){var t=!!e.a.get("immediateFederatedRedirect"),n=Oo(e);return e=$o(e),t&&1==n.length&&!H(To,n[0])&&e==oa}function $o(e){for(var t in e=e.a.get("signInFlow"),aa)if(aa[t]==e)return aa[t];return oa}function Yo(e){return Qo(e).signInSuccess||null}function Jo(e){return Qo(e).signInSuccessWithAuthResult||null}function Xo(e){return Qo(e).signInFailure||null}function Qo(e){return e.a.get("callbacks")||{}}var Zo,ea,ta,na,ia="googleyolo",ra="none",sa={nc:ia,NONE:ra},oa="redirect",aa={qc:"popup",rc:oa},ua={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},ca=["anonymous"],la=["sitekey","tabindex","callback","expired-callback"],da={};function ha(e,t,n,i){da[e].apply(null,Array.prototype.slice.call(arguments,1))}function fa(e){return e.classList?e.classList:p(e=e.className)&&e.match(/\S+/g)||[]}function pa(e,t){return e.classList?e.classList.contains(t):H(fa(e),t)}function ga(e,t){e.classList?e.classList.add(t):pa(e,t)||(e.className+=0<e.className.length?" "+t:t)}function ma(e,t){e.classList?e.classList.remove(t):pa(e,t)&&(e.className=B(fa(e),(function(e){return e!=t})).join(" "))}function va(e){var t=e.type;switch(p(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var n,i=0;n=e.options[i];i++)n.selected&&t.push(n.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function ya(e,t){var n=e.type;switch(p(n)&&n.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,p(t))for(var i=0;n=e.options[i];i++)if(n.value==t){n.selected=!0;break}break;case"select-multiple":for(p(t)&&(t=[t]),i=0;n=e.options[i];i++)if(n.selected=!1,t)for(var r,s=0;r=t[s];s++)n.value==r&&(n.selected=!0);break;default:e.value=null!=t?t:""}}function ba(e,t,n,i,r,s){if(rt&&!ft("525"))return!0;if(ot&&r)return _a(e);if(r&&!i)return!1;if(!it&&("number"==typeof t&&(t=wa(t)),(!n||ot)&&(17==t||18==t||ot&&91==t)||ot&&16==t&&(i||s)))return!1;if((rt||tt)&&i&&n)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(et&&i&&t==e)return!1;switch(e){case 13:return!it||!s&&!r&&!(n&&i);case 27:return!(rt||tt||it)}return(!it||!(i||r||s))&&_a(e)}function _a(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(rt||tt)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return it;default:return!1}}function wa(e){if(it)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(ot&&rt&&93===e)e=91;return e}function Ia(e){mi.call(this),this.a=e,ri(e,"keydown",this.g,!1,this),ri(e,"click",this.h,!1,this)}function Ea(e,t){var n=new ka(t);if(vi(e,n)){n=new Ca(t);try{vi(e,n)}finally{t.stopPropagation()}}}function Ca(e){Kn.call(this,e.a),this.type="action"}function ka(e){Kn.call(this,e.a),this.type="beforeaction"}function Sa(e){mi.call(this),this.a=e,e=et?"focusout":"blur",this.g=ri(this.a,et?"focusin":"focus",this,!et),this.h=ri(this.a,e,this,!et)}function Ta(e,t){mi.call(this),this.g=e||1,this.a=t||h,this.h=A(this.gc,this),this.j=N()}function Aa(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function Ra(e){Fn.call(this),this.g=e,this.a={}}L(Ia,mi),Ia.prototype.g=function(e){(13==e.keyCode||rt&&3==e.keyCode)&&Ea(this,e)},Ia.prototype.h=function(e){Ea(this,e)},Ia.prototype.o=function(){Ia.K.o.call(this),ai(this.a,"keydown",this.g,!1,this),ai(this.a,"click",this.h,!1,this),delete this.a},L(Ca,Kn),L(ka,Kn),L(Sa,mi),Sa.prototype.handleEvent=function(e){var t=new Kn(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",vi(this,t)},Sa.prototype.o=function(){Sa.K.o.call(this),ui(this.g),ui(this.h),delete this.a},L(Ta,mi),(e=Ta.prototype).Ka=!1,e.aa=null,e.gc=function(){if(this.Ka){var e=N()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),vi(this,"tick"),this.Ka&&(Aa(this),this.start()))}},e.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=N())},e.o=function(){Ta.K.o.call(this),Aa(this),delete this.a},L(Ra,Fn);var xa=[];function Pa(e,t,n,i){_(n)||(n&&(xa[0]=n.toString()),n=xa);for(var r=0;r<n.length;r++){var s=ri(t,n[r],i||e.handleEvent,!1,e.g||e);if(!s)break;e.a[s.key]=s}}function Na(e){oe(e.a,(function(e,t){this.a.hasOwnProperty(t)&&ui(e)}),e),e.a={}}function Oa(e){mi.call(this),this.a=null,this.g=e,e=et||tt||rt&&!ft("531")&&"TEXTAREA"==e.tagName,this.h=new Ra(this),Pa(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function La(e){null!=e.a&&(h.clearTimeout(e.a),e.a=null)}function Da(e){return(e=new Kn(e.a)).type="input",e}function Ma(e,t){mi.call(this),e&&(this.Oa&&qa(this),this.qa=e,this.Na=ri(this.qa,"keypress",this,t),this.Ya=ri(this.qa,"keydown",this.Jb,t,this),this.Oa=ri(this.qa,"keyup",this.Kb,t,this))}Ra.prototype.o=function(){Ra.K.o.call(this),Na(this)},Ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},L(Oa,mi),Oa.prototype.handleEvent=function(e){if("input"==e.type)et&&ft(10)&&0==e.keyCode&&0==e.j||(La(this),vi(this,Da(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(_a(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!it;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;et&&229==e.keyCode&&(t=null);var n=Da(e);La(this),this.a=function(e,t){if(I(e))t&&(e=A(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=A(e.handleEvent,e)}return 2147483647<Number(0)?-1:h.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&vi(this,n)}),this)}},Oa.prototype.o=function(){Oa.K.o.call(this),this.h.m(),La(this),delete this.g},L(Ma,mi),(e=Ma.prototype).qa=null,e.Na=null,e.Ya=null,e.Oa=null,e.R=-1,e.X=-1,e.Ua=!1;var Fa={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ua={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},ja=!rt||ft("525"),Ba=ot&&it;function qa(e){e.Na&&(ui(e.Na),ui(e.Ya),ui(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function Va(e,t,n,i){Kn.call(this,i),this.type="key",this.keyCode=e,this.j=t,this.repeat=n}function Ha(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i}function Wa(e,t){var n=$t(e);return n.defaultView&&n.defaultView.getComputedStyle&&(e=n.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function za(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return et&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function Ga(e){var t=$t(e),n=new jt(0,0),i=t?$t(t):document;return e==(i=!et||9<=Number(dt)||"CSS1Compat"==qt(i).a.compatMode?i.documentElement:i.body)||(e=za(e),t=Gt(i=qt(t).a),i=i.parentWindow||i.defaultView,t=et&&ft("10")&&i.pageYOffset!=t.scrollTop?new jt(t.scrollLeft,t.scrollTop):new jt(i.pageXOffset||t.scrollLeft,i.pageYOffset||t.scrollTop),n.a=e.left+t.a,n.g=e.top+t.g),n}(e=Ma.prototype).Jb=function(e){(rt||tt)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||ot&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),ja&&!ba(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=wa(e.keyCode),Ba&&(this.Ua=e.altKey))},e.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},e.handleEvent=function(e){var t=e.a,n=t.altKey;if(et&&"keypress"==e.type)var i=this.X,r=13!=i&&27!=i?t.keyCode:0;else(rt||tt)&&"keypress"==e.type?(i=this.X,r=0<=t.charCode&&63232>t.charCode&&_a(i)?t.charCode:0):Ze&&!rt?r=_a(i=this.X)?t.keyCode:0:("keypress"==e.type?(Ba&&(n=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(i=t.keyCode,r=0):(i=this.X,r=t.charCode):(i=t.keyCode||this.X,r=t.charCode||0)):(i=t.keyCode||this.X,r=t.charCode||0),ot&&63==r&&224==i&&(i=191));var s=i=wa(i);i?63232<=i&&i in Fa?s=Fa[i]:25==i&&e.shiftKey&&(s=9):t.keyIdentifier&&t.keyIdentifier in Ua&&(s=Ua[t.keyIdentifier]),it&&ja&&"keypress"==e.type&&!ba(s,this.R,e.shiftKey,e.ctrlKey,n,e.metaKey)||(e=s==this.R,this.R=s,(t=new Va(s,r,e,t)).altKey=n,vi(this,t))},e.N=function(){return this.qa},e.o=function(){Ma.K.o.call(this),qa(this)},L(Va,Kn),Ha.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Ha.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Ha.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Ha.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var Ka={thin:2,medium:4,thick:6};function $a(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var n=e.currentStyle?e.currentStyle[t+"Width"]:null;if(n in Ka)e=Ka[n];else if(/^\d+px?$/.test(n))e=parseInt(n,10);else{t=e.style.left;var i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=n,n=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=i,e=+n}return e}function Ya(){}function Ja(e){mi.call(this),this.s=e||qt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Xa(e,t){return e.g?Ht(t,e.g||e.s.a):null}function Qa(e){return e.L||(e.L=new Ra(e)),e.L}function Za(e,t){e.Ea&&j(e.Ea,t,void 0)}function eu(e,t){var n=Jt(e,"firebaseui-textfield");t?(ma(e,"firebaseui-input-invalid"),ga(e,"firebaseui-input"),n&&ma(n,"firebaseui-textfield-invalid")):(ma(e,"firebaseui-input"),ga(e,"firebaseui-input-invalid"),n&&ga(n,"firebaseui-textfield-invalid"))}function tu(e,t,n){Bn(e,R(qn,t=new Oa(t))),Pa(Qa(e),t,"input",n)}function nu(e,t,n){Bn(e,R(qn,t=new Ma(t))),Pa(Qa(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),n(e))}))}function iu(e,t,n){Bn(e,R(qn,t=new Ia(t))),Pa(Qa(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),n(e)}))}function ru(e){ga(e,"firebaseui-hidden")}function su(e,t){t&&Yt(e,t),ma(e,"firebaseui-hidden")}function ou(e){return!pa(e,"firebaseui-hidden")&&"none"!=e.style.display}function au(e){var t=(e=e||{}).email,n=e.disabled,i='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return i=e.wc?i+"Enter new email address":i+"Email",i+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+mn(null!=t?t:"")+'"'+(n?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',hn(i)}function uu(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+un(e):t+"Next",hn(t+"</button>")}function cu(){var e=""+uu({label:pn("Sign In")});return hn(e)}function lu(){var e=""+uu({label:pn("Save")});return hn(e)}function du(){var e=""+uu({label:pn("Continue")});return hn(e)}function hu(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+un(e):t+"Choose password",hn(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function fu(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return hn((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function pu(){return hn('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function gu(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+un(e):t+"Cancel",hn(t+"</button>")}function mu(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),hn(t)}function vu(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),hn(t)}function yu(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+un(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',hn(e)}function bu(e){var t=e.content;return e=e.Ab,hn('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+mn(e):"")+'">'+un(t)+"</dialog>")}function _u(e){var t=e.message;return hn(bu({content:gn('<div class="firebaseui-dialog-icon-wrapper"><div class="'+mn(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+un(t)+"</div>")}))}function wu(e){for(var t='<div class="firebaseui-list-box-actions">',n=(e=e.items).length,i=0;i<n;i++){var r=e[i];t+='<button type="button" data-listboxid="'+mn(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+mn(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+un(r.label)+"</div></button>"}return t=""+bu({Ab:pn("firebaseui-list-box-dialog"),content:gn(t+"</div>")}),hn(t)}function Iu(e){return hn((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function Eu(e,t){return dn((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function Cu(e){Tu(e,"upgradeElement")}function ku(e){Tu(e,"downgradeElements")}y(Ya),Ya.prototype.a=0,L(Ja,mi),(e=Ja.prototype).Lb=Ya.Xa(),e.N=function(){return this.g},e.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Ja.K.Za.call(this,e)},e.kb=function(){this.g=this.s.a.createElement("DIV")},e.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},e.v=function(){this.na=!0,Za(this,(function(e){!e.na&&e.N()&&e.v()}))},e.ya=function(){Za(this,(function(e){e.na&&e.ya()})),this.L&&Na(this.L),this.na=!1},e.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Za(this,(function(e){e.m()})),this.g&&Kt(this.g),this.Y=this.g=this.oa=this.Ea=null,Ja.K.o.call(this)},e.removeChild=function(e,t){if(e){var n=p(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&n?e=(null!==(e=this.oa)&&n in e?e[n]:void 0)||null:e=null,n&&e){var i=this.oa;if(n in i&&delete i[n],W(this.Ea,e),t&&(e.ya(),e.g&&Kt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,Ja.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},yu.a="firebaseui.auth.soy2.element.infoBar",_u.a="firebaseui.auth.soy2.element.progressDialog",wu.a="firebaseui.auth.soy2.element.listBoxDialog",Iu.a="firebaseui.auth.soy2.element.busyIndicator";var Su=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Tu(e,t){e&&window.componentHandler&&window.componentHandler[t]&&Su.forEach((function(n){pa(e,n)&&window.componentHandler[t](e),j(Vt(n,e),(function(e){window.componentHandler[t](e)}))}))}function Au(e,t,n){if(Ru.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),Cu(e),t&&iu(this,e,(function(t){var n=e.getBoundingClientRect();(t.clientX<n.left||n.left+n.width<t.clientX||t.clientY<n.top||n.top+n.height<t.clientY)&&Ru.call(this)})),!n){var i=this.N().parentElement||this.N().parentNode;if(i){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,n=i.getBoundingClientRect().height,s=i.getBoundingClientRect().top-document.body.getBoundingClientRect().top,o=i.getBoundingClientRect().left-document.body.getBoundingClientRect().left,a=e.getBoundingClientRect().width,u=i.getBoundingClientRect().width;e.style.top=(s+(n-t)/2).toString()+"px",t=o+(u-a)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-a).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Ru(){var e=xu.call(this);e&&(ku(e),e.open&&e.close(),Kt(e),this.da&&window.removeEventListener("resize",this.da))}function xu(){return Ht("firebaseui-id-dialog")}function Pu(){Kt(Nu.call(this))}function Nu(){return Xa(this,"firebaseui-id-info-bar")}function Ou(){return Xa(this,"firebaseui-id-dismiss-info-bar")}var Lu={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Du(e,t,n){for(var i in Gn.call(this,e,t),n)this[i]=n[i]}function Mu(e,t,n,i,r){Ja.call(this,n),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=i||null,this.A=this.ca=null,this.Z=ae(Lu),ce(this.Z,r||{})}function Fu(e){return e.N().parentElement||e.N().parentNode}function Uu(e,t,n){nu(e,t,(function(){n.focus()}))}function ju(e,t,n){nu(e,t,(function(){n()}))}function Bu(e,t,n){t=(e=e||{}).Va;var i=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+au(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?gu(null):"")+uu(null)+'</div></div><div class="firebaseui-card-footer">'+(i?vu(n):mu(n))+"</div></form></div>",hn(e)}function qu(e,t,n){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+au(e)+fu()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pu()+'</div><div class="firebaseui-form-actions">'+cu()+'</div></div><div class="firebaseui-card-footer">'+(t?vu(n):mu(n))+"</div></form></div>",hn(e)}function Vu(e,t,n){var i=(e=e||{}).Tb;t=e.Ta;var r=e.ia,s='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+au(e);return i?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+mn(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=hn(e)):e="",n=s+e+hu(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?gu(null):"")+lu()+'</div></div><div class="firebaseui-card-footer">'+(r?vu(n):mu(n))+"</div></form></div>",hn(n)}function Hu(e,t,n){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+au(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?gu(null):"")+uu({label:pn("Send")})+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(e)}function Wu(e,t,n){t=e.G;var i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+un(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(i+='<div class="firebaseui-form-actions">'+uu({label:pn("Done")})+"</div>"),i+='</div><div class="firebaseui-card-footer">'+mu(n)+"</div></div>",hn(i)}function zu(e,t,n){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+Iu(null)+"</div></div>")}function Gu(e,t,n){return hn('<div class="firebaseui-container firebaseui-id-page-spinner">'+Iu({tb:!0})+"</div>")}function Ku(){return hn('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function $u(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+un(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+gu({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(t)}function Yu(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hn('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+gu({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(e)}function Ju(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+au(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gu(null)+uu(null)+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(e)}function Xu(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gu({label:pn("Dismiss")})+"</div></div></div>";return hn(e)}function Qu(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gu({label:pn("Dismiss")})+"</div></div></div>";return hn(e)}function Zu(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+un(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+fu()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+pu()+'</div><div class="firebaseui-form-actions">'+cu()+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(t)}function ec(e,t,n){var i=e.email;return t="",e=pn(e=""+Eu(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(i="You’ve already used <strong>"+un(i)+"</strong>. You can connect your <strong>"+un(e)+"</strong> account with <strong>"+un(i)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+un(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cu()+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(t)}function tc(e,t,n){t="";var i=""+Eu(e,n);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+un(i=pn(i))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(i="If you still want to connect your <strong>"+un(i)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+du()+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(t)}function nc(e,t,n){var i=e.email;return t="",e=pn(e=""+Eu(e,n)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(i="You’ve already used <strong>"+un(i)+"</strong>. Sign in with "+un(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uu({label:pn("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(t)}function ic(e,t,n){var i=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return i?r+=i="<strong>"+un(i)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+un(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+gu({label:pn("Back")})+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(r)}function rc(e,t,n){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+un(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gu(null)+uu({label:pn("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(t)}function sc(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+un(e.email)+"</strong></p>")+hu(function(e){function t(){}var n={label:pn("New password")};for(var i in t.prototype=e,e=new t,n)e[i]=n[i];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+lu()+"</div></div></form></div>",hn(t)}function oc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function ac(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function uc(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+un(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></form></div>",hn(n)}function cc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function lc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function dc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function hc(e){var t=e.G,n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+un(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(n)}function fc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function pc(e){var t=e.factorId,n=e.phoneNumber;e=e.G;var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)i+=t="The <strong>"+un(t)+" "+un(n)+"</strong> was removed as a second authentication step.";else i+="The device or app was removed as a second authentication step.";return i+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></form></div>",hn(i)}function gc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+du()+"</div>":"")+"</div></div>",hn(e)}function mc(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+un(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=uu({label:pn("Retry")})),hn(e+"</div></div></div>")}function vc(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+un(e.errorMessage)+"</p></div></div>",hn(e)}function yc(e,t,n){var i=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+un(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(i="You originally wanted to sign in with "+un(i))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gu(null)+uu({label:pn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form></div>",hn(t)}function bc(e,t,n){var i='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var s={ga:e[r]},o=n,a=(s=s||{}).ga,u=s,c="";switch((u=u||{}).ga.providerId){case"google.com":c+="firebaseui-idp-google";break;case"github.com":c+="firebaseui-idp-github";break;case"facebook.com":c+="firebaseui-idp-facebook";break;case"twitter.com":c+="firebaseui-idp-twitter";break;case"phone":c+="firebaseui-idp-phone";break;case"anonymous":c+="firebaseui-idp-anonymous";break;case"password":c+="firebaseui-idp-password";break;default:c+="firebaseui-idp-generic"}u=(u='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+mn(dn(c))+' firebaseui-id-idp-button" data-provider-id="'+mn(a.providerId)+'" style="background-color:')+mn(yn(dn((c=(c=(c=s)||{}).ga).ta?c.ta:o.wa[c.providerId]?""+o.wa[c.providerId]:0==c.providerId.indexOf("saml.")?""+o.wa.saml:0==c.providerId.indexOf("oidc.")?""+o.wa.oidc:""+o.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var l=s;c=o,l=(l=l||{}).ga,c=fn(l.za?vn(l.za):c.xa[l.providerId]?vn(c.xa[l.providerId]):0==l.providerId.indexOf("saml.")?vn(c.xa.saml):0==l.providerId.indexOf("oidc.")?vn(c.xa.oidc):vn(c.xa.password)),u=u+mn(vn(c))+'"></span>',"password"==a.providerId?(u+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?u+=un(a.V):a.S?u+=s="Sign in with "+un(Eu(s,o)):u+="Sign in with email",u+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',u=a.S?u+un(a.S):u+"Email",u+="</span>"):"phone"==a.providerId?(u+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?u+=un(a.V):a.S?u+=s="Sign in with "+un(Eu(s,o)):u+="Sign in with phone",u+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',u=a.S?u+un(a.S):u+"Phone",u+="</span>"):"anonymous"==a.providerId?(u+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?u+=un(a.V):a.S?u+=s="Sign in with "+un(Eu(s,o)):u+="Continue as guest",u+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',u=a.S?u+un(a.S):u+"Guest",u+="</span>"):(u+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?u+=un(a.V):u+=c="Sign in with "+un(Eu(s,o)),u+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(a.S?un(a.S):un(Eu(s,o)))+"</span>"),i+='<li class="firebaseui-list-item">'+(a=hn(u+"</button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vu(n)+"</div></div>",hn(i)}function _c(e,t,n){var i,r=(e=e||{}).Gb,s=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+mn(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',i=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+hn(e))+(i=r?hn('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?gu(null):"")+uu({label:pn("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=n.F&&n.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",n=hn(t+"</p>")):n=hn('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+mu(n),hn(i+n+"</div></form></div>")}function wc(e,t,n){var i="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+un(t=(e=e||{}).phoneNumber)+"</a>",un(t),t=i,n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(i=hn('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gu(null)+uu({label:pn("Continue")})+'</div></div><div class="firebaseui-card-footer">'+mu(n)+"</div></form>",e=hn('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),hn(t+(n+e+"</div>"))}function Ic(){return hn('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function Ec(e,t,n){var i='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var s=e[r],o="",a=un(s.displayName),u=s.tenantId?s.tenantId:"top-level-project";o+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+mn(u=pn(u))+' firebaseui-id-tenant-selection-button"'+(s.tenantId?'data-tenant-id="'+mn(s.tenantId)+'"':"")+'style="background-color:'+mn(yn(s.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+mn(vn(s.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?o+=un(s.V):o+=s="Sign in to "+un(s.displayName),i+='<li class="firebaseui-list-item">'+(o=hn(o+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+a+"</span></button>"))+"</li>"}return i+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+vu(n)+"</div></div>",hn(i)}function Cc(e,t,n){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+au(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uu(null)+'</div></div><div class="firebaseui-card-footer">'+vu(n)+"</div></form></div>",hn(e)}function kc(){return Xa(this,"firebaseui-id-submit")}function Sc(){return Xa(this,"firebaseui-id-secondary-link")}function Tc(e,t){iu(this,kc.call(this),(function(t){e(t)}));var n=Sc.call(this);n&&t&&iu(this,n,(function(e){t(e)}))}function Ac(){return Xa(this,"firebaseui-id-password")}function Rc(){return Xa(this,"firebaseui-id-password-error")}function xc(){var e=Ac.call(this),t=Rc.call(this);tu(this,e,(function(){ou(t)&&(eu(e,!0),ru(t))}))}function Pc(){var e=Ac.call(this),t=Rc.call(this);return va(e)?(eu(e,!0),ru(t),t=!0):(eu(e,!1),su(t,dn("Enter your password").toString()),t=!1),t?va(e):null}function Nc(e,t,n,i,r,s){Mu.call(this,Zu,{email:e},s,"passwordLinking",{F:i,D:r}),this.w=t,this.H=n}L(Du,Gn),L(Mu,Ja),(e=Mu.prototype).kb=function(){var e=rn(this.fb,this.eb,this.Z,this.s);Cu(e),this.g=e},e.v=function(){if(Mu.K.v.call(this),wi(Fu(this),new Du("pageEnter",Fu(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;iu(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;iu(this,this.ab(),(function(){t()}))}},e.ya=function(){wi(Fu(this),new Du("pageExit",Fu(this),{pageId:this.Ga})),Mu.K.ya.call(this)},e.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,ku(this.N()),Mu.K.o.call(this)},e.I=function(e,t,n,i){function r(){if(s.T)return null;s.Fa=!1,window.clearTimeout(s.ca),s.ca=null,s.A&&(ku(s.A),Kt(s.A),s.A=null)}var s=this;return s.Fa?null:(function(e){e.Fa=!0;var t=pa(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=rn(Iu,{tb:t},null,e.s),e.N().appendChild(e.A),Cu(e.A))}),500)}(s),e.apply(null,t).then(n,i).then(r,r))},x(Mu.prototype,{a:function(e){Pu.call(this);var t=rn(yu,{message:e},null,this.s);this.N().appendChild(t),iu(this,Ou.call(this),(function(){Kt(t)}))},yc:Pu,Ac:Nu,zc:Ou,$:function(e,t){e=rn(_u,{Ma:e,message:t},null,this.s),Au.call(this,e)},h:Ru,Cb:xu,Cc:function(){return Xa(this,"firebaseui-tos")},bb:function(){return Xa(this,"firebaseui-tos-link")},ab:function(){return Xa(this,"firebaseui-pp-link")},Dc:function(){return Xa(this,"firebaseui-tos-list")}}),Bu.a="firebaseui.auth.soy2.page.signIn",qu.a="firebaseui.auth.soy2.page.passwordSignIn",Vu.a="firebaseui.auth.soy2.page.passwordSignUp",Hu.a="firebaseui.auth.soy2.page.passwordRecovery",Wu.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",zu.a="firebaseui.auth.soy2.page.callback",Gu.a="firebaseui.auth.soy2.page.spinner",Ku.a="firebaseui.auth.soy2.page.blank",$u.a="firebaseui.auth.soy2.page.emailLinkSignInSent",Yu.a="firebaseui.auth.soy2.page.emailNotReceived",Ju.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Xu.a="firebaseui.auth.soy2.page.differentDeviceError",Qu.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Zu.a="firebaseui.auth.soy2.page.passwordLinking",ec.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",tc.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",nc.a="firebaseui.auth.soy2.page.federatedLinking",ic.a="firebaseui.auth.soy2.page.unauthorizedUser",rc.a="firebaseui.auth.soy2.page.unsupportedProvider",sc.a="firebaseui.auth.soy2.page.passwordReset",oc.a="firebaseui.auth.soy2.page.passwordResetSuccess",ac.a="firebaseui.auth.soy2.page.passwordResetFailure",uc.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",cc.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",lc.a="firebaseui.auth.soy2.page.emailVerificationSuccess",dc.a="firebaseui.auth.soy2.page.emailVerificationFailure",hc.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",fc.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",pc.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",gc.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",mc.a="firebaseui.auth.soy2.page.recoverableError",vc.a="firebaseui.auth.soy2.page.unrecoverableError",yc.a="firebaseui.auth.soy2.page.emailMismatch",bc.a="firebaseui.auth.soy2.page.providerSignIn",_c.a="firebaseui.auth.soy2.page.phoneSignInStart",wc.a="firebaseui.auth.soy2.page.phoneSignInFinish",Ic.a="firebaseui.auth.soy2.page.signOut",Ec.a="firebaseui.auth.soy2.page.selectTenant",Cc.a="firebaseui.auth.soy2.page.providerMatchByEmail",u(Nc,Mu),Nc.prototype.v=function(){this.P(),this.M(this.w,this.H),ju(this,this.i(),this.w),this.i().focus(),Mu.prototype.v.call(this)},Nc.prototype.o=function(){this.w=null,Mu.prototype.o.call(this)},Nc.prototype.j=function(){return va(Xa(this,"firebaseui-id-email"))},x(Nc.prototype,{i:Ac,B:Rc,P:xc,u:Pc,ea:kc,ba:Sc,M:Tc});var Oc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Lc(){return Xa(this,"firebaseui-id-email")}function Dc(){return Xa(this,"firebaseui-id-email-error")}function Mc(e){var t=Lc.call(this),n=Dc.call(this);tu(this,t,(function(){ou(n)&&(eu(t,!0),ru(n))})),e&&nu(this,t,(function(){e()}))}function Fc(){return J(va(Lc.call(this))||"")}function Uc(){var e=Lc.call(this),t=Dc.call(this),n=va(e)||"";return n?Oc.test(n)?(eu(e,!0),ru(t),t=!0):(eu(e,!1),su(t,dn("That email address isn't correct").toString()),t=!1):(eu(e,!1),su(t,dn("Enter your email address to continue").toString()),t=!1),t?J(va(e)):null}function jc(e,t,n,i,r,s,o){Mu.call(this,qu,{email:n,ia:!!s},o,"passwordSignIn",{F:i,D:r}),this.w=e,this.H=t}function Bc(e,t,n,i,r,s){Mu.call(this,e,t,i,r||"notice",s),this.i=n||null}function qc(e,t,n,i,r){Bc.call(this,Wu,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:n,D:i})}function Vc(e,t){Bc.call(this,lc,{G:!!e},e,t,"emailVerificationSuccess")}function Hc(e,t){Bc.call(this,dc,{G:!!e},e,t,"emailVerificationFailure")}function Wc(e,t,n){Bc.call(this,hc,{email:e,G:!!t},t,n,"verifyAndChangeEmailSuccess")}function zc(e,t){Bc.call(this,fc,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function Gc(e,t){Bc.call(this,gc,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function Kc(e){Bc.call(this,Ic,void 0,void 0,e,"signOut")}function $c(e,t){Bc.call(this,oc,{G:!!e},e,t,"passwordResetSuccess")}function Yc(e,t){Bc.call(this,ac,{G:!!e},e,t,"passwordResetFailure")}function Jc(e,t){Bc.call(this,cc,{G:!!e},e,t,"emailChangeRevokeFailure")}function Xc(e,t,n){Bc.call(this,mc,{errorMessage:e,zb:!!t},t,n,"recoverableError")}function Qc(e,t){Bc.call(this,vc,{errorMessage:e},void 0,t,"unrecoverableError")}function Zc(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function el(e,t,n,i){function r(n){if(!n.name||"cancel"!=n.name){e:{var i=n.message;try{var r=((JSON.parse(i).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var s=!0;break e}}catch(e){}s=!1}if(s)n=Fu(t),t.m(),al(e,n,void 0,dn("Your sign-in session has expired. Please try again.").toString());else{if(s=n&&n.message||"",n.code){if("auth/email-already-in-use"==n.code||"auth/credential-already-in-use"==n.code)return;s=il(n)}t.a(s)}}}if(Nd(e),i)return tl(e,n),Gi();if(!n.credential)throw Error("No credential found!");if(!Id(e).currentUser&&!n.user)throw Error("User not logged in.");try{var s=function(e,t){return Dd(e),Rd(e,(function(n){if(e.j&&!e.j.isAnonymous&&xo(Ld(e))&&!Id(e).currentUser)return Fd(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(n)return Fd(e).then((function(){return n.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Ud(e,n,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Fd(e).then((function(){return Ed(e).updateCurrentUser(t.user)})).then((function(){return t.user=Ed(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,n)}catch(e){return Yr(e.code||e.message,e),t.a(e.code||e.message),Gi()}return n=s.then((function(t){tl(e,t)}),r).then(void 0,r),Pd(e,s),Gi(n)}function tl(e,t){if(!t.user)throw Error("No user found");var n=Jo(Ld(e));if(Yo(Ld(e))&&n&&Zr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),n){n=Jo(Ld(e));var i=to(Cd(e))||void 0;Zs(Ys,Cd(e));var r=!1;sr()?(n&&!n(t,i)||(r=!0,Ut(window.opener.location,nl(e,i))),n||window.close()):n&&!n(t,i)||(r=!0,Ut(window.location,nl(e,i))),r||e.reset()}else{n=t.user,t=t.credential,i=Yo(Ld(e)),r=to(Cd(e))||void 0,Zs(Ys,Cd(e));var s=!1;sr()?(i&&!i(n,t,r)||(s=!0,Ut(window.opener.location,nl(e,r))),i||window.close()):i&&!i(n,t,r)||(s=!0,Ut(window.location,nl(e,r))),s||e.reset()}}function nl(e,t){if(!(e=t||Ld(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function il(e){var t={code:e.code},n="";switch((t=t||{}).code){case"auth/email-already-in-use":n+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":n+=Ln();break;case"auth/too-many-requests":n+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":n+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":n+="That email address doesn't match an existing account";break;case"auth/weak-password":n+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":n+="The email and password you entered don't match";break;case"auth/network-request-failed":n+="A network error has occurred";break;case"auth/invalid-phone-number":n+=Rn();break;case"auth/invalid-verification-code":n+=dn("Wrong code. Try again.");break;case"auth/code-expired":n+="This code is no longer valid";break;case"auth/expired-action-code":n+="This code has expired.";break;case"auth/invalid-action-code":n+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=dn(n).toString())return t;try{return JSON.parse(e.message),Yr("Internal error: "+e.message,void 0),Pn().toString()}catch(t){return e.message}}function rl(e,t,n,i){function r(){!function(e,t){eo($s,{tenantId:e.a},t)}(new us(e.h.tenantId||null),Cd(e)),Pd(e,t.I(A(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return Pd(e,bd(e).then((function(n){t.m(),Zs($s,Cd(e)),ha("callback",e,u,Gi(n))}),s))}),a))}function s(i){if(Zs($s,Cd(e)),!i.name||"cancel"!=i.name)switch(i=Zc(i),i.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(il(i));break;case"auth/admin-restricted-operation":t.m(),Uo(Ld(e))?ha("handleUnauthorizedUser",e,u,null,n):ha("callback",e,u,Ki(i));break;default:t.m(),ha("callback",e,u,Ki(i))}}function a(n){Zs($s,Cd(e)),n.name&&"cancel"==n.name||(Yr("signInWithRedirect: "+n.code,void 0),n=il(n),"blank"==t.Ga&&Ko(Ld(e))?(t.m(),ha("providerSignIn",e,u,n)):t.a(n))}var u=Fu(t),c=function(e,t,n){var i=Ao[t]&&o.default.auth[Ao[t]]?new o.default.auth[Ao[t]]:0==t.indexOf("saml.")?new o.default.auth.SAMLAuthProvider(t):new o.default.auth.OAuthProvider(t);if(!i)throw Error("Invalid Firebase Auth provider!");var r=jo(Ld(e),t);if(i.addScope)for(var s=0;s<r.length;s++)i.addScope(r[s]);return r=Bo(Ld(e),t)||{},n&&(e=t==o.default.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==o.default.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Lo(Ld(e),t))&&e.Ob)&&(r[e]=n),i.setCustomParameters&&i.setCustomParameters(r),i}(e,n,i);$o(Ld(e))==oa?r():Pd(e,function(e,t){return Dd(e),Rd(e,(function(n){return n&&!no(Cd(e))?n.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Ud(e,t)})):Id(e).signInWithPopup(t)}))}(e,c).then((function(n){t.m(),ha("callback",e,u,Gi(n))}),s))}function sl(e){return 1==(e=Oo(Ld(e))).length&&e[0]==o.default.auth.EmailAuthProvider.PROVIDER_ID}function ol(e){return 1==(e=Oo(Ld(e))).length&&e[0]==o.default.auth.PhoneAuthProvider.PROVIDER_ID}function al(e,t,n,i){sl(e)?i?ha("signIn",e,t,n,i):dl(e,t,n):e&&ol(e)&&!i?ha("phoneSignInStart",e,t):e&&Ko(Ld(e))&&!i?ha("federatedRedirect",e,t,n):ha("providerSignIn",e,t,i,n)}function ul(e,t,n,i){var r=Fu(t);Pd(e,t.I(A(Id(e).fetchSignInMethodsForEmail,Id(e)),[n],(function(s){t.m(),cl(e,r,s,n,i)}),(function(e){e=il(e),t.a(e)})))}function cl(e,t,n,i,r,s){n.length||Go(Ld(e))&&!Go(Ld(e))?H(n,o.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ha("passwordSignIn",e,t,i,s):1==n.length&&n[0]===o.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Go(Ld(e))?ha("sendEmailLinkForSignIn",e,t,i,(function(){ha("signIn",e,t)})):ha("unsupportedProvider",e,t,i):(n=So(n,Oo(Ld(e))))?(ro(new ss(i),Cd(e)),ha("federatedSignIn",e,t,i,n,r)):ha("unsupportedProvider",e,t,i):Fo(Ld(e))?ha("handleUnauthorizedUser",e,t,i,o.default.auth.EmailAuthProvider.PROVIDER_ID):Go(Ld(e))?ha("sendEmailLinkForSignIn",e,t,i,(function(){ha("signIn",e,t)})):ha("passwordSignUp",e,t,i,void 0,void 0,s)}function ll(e,t,n,i,r,s){var o=Fu(t);Pd(e,t.I(A(e.Ib,e),[n,s],(function(){t.m(),ha("emailLinkSignInSent",e,o,n,i,s)}),r))}function dl(e,t,n){n?ha("prefilledEmailSignIn",e,t,n):ha("signIn",e,t)}function hl(){return _e(ur(),"oobCode")}function fl(){var e=_e(ur(),"continueUrl");return e?function(){Ut(window.location,e)}:null}function pl(e,t){Mu.call(this,Qu,void 0,t,"anonymousUserMismatch"),this.i=e}function gl(e){Mu.call(this,zu,void 0,e,"callback")}function ml(e,t,n){if(n.user){var i={user:n.user,credential:n.credential,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},r=no(Cd(e)),s=r&&r.g;if(s&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var n=0;n<e.providerData.length;n++)if(t==e.providerData[n].email)return!0;return!1}(n.user,s))!function(e,t,n){var i=Fu(t);Pd(e,Fd(e).then((function(){t.m(),ha("emailMismatch",e,i,n)}),(function(e){e.name&&"cancel"==e.name||(e=il(e.code),t.a(e))})))}(e,t,i);else{var o=r&&r.a;o?Pd(e,n.user.linkWithCredential(o).then((function(n){i={user:n.user,credential:o,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo},vl(e,t,i)}),(function(n){yl(e,t,n)}))):vl(e,t,i)}}else n=Fu(t),t.m(),io(Cd(e)),al(e,n)}function vl(e,t,n){io(Cd(e)),el(e,t,n)}function yl(e,t,n){var i=Fu(t);io(Cd(e)),n=il(n),t.m(),al(e,i,void 0,n)}function bl(e,t,n,i){var r=Fu(t);Pd(e,Id(e).fetchSignInMethodsForEmail(n).then((function(s){t.m(),s.length?H(s,o.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?ha("passwordLinking",e,r,n):1==s.length&&s[0]===o.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?ha("emailLinkSignInLinking",e,r,n):(s=So(s,Oo(Ld(e))))?ha("federatedLinking",e,r,n,s,i):(io(Cd(e)),ha("unsupportedProvider",e,r,n)):(io(Cd(e)),ha("passwordRecovery",e,r,n,!1,Nn().toString()))}),(function(n){yl(e,t,n)})))}function _l(e,t){Mu.call(this,Xu,void 0,t,"differentDeviceError"),this.i=e}function wl(e,t,n,i){Mu.call(this,uc,{email:e,G:!!n},i,"emailChangeRevoke"),this.l=t,this.i=n||null}function Il(){return Xa(this,"firebaseui-id-new-password")}function El(){return Xa(this,"firebaseui-id-password-toggle")}function Cl(){this.Ra=!this.Ra;var e=El.call(this),t=Il.call(this);this.Ra?(t.type="text",ga(e,"firebaseui-input-toggle-off"),ma(e,"firebaseui-input-toggle-on")):(t.type="password",ga(e,"firebaseui-input-toggle-on"),ma(e,"firebaseui-input-toggle-off")),t.focus()}function kl(){return Xa(this,"firebaseui-id-new-password-error")}function Sl(){this.Ra=!1;var e=Il.call(this);e.type="password";var t=kl.call(this);tu(this,e,(function(){ou(t)&&(eu(e,!0),ru(t))}));var n=El.call(this);ga(n,"firebaseui-input-toggle-on"),ma(n,"firebaseui-input-toggle-off"),function(e,t,n){Bn(e,R(qn,t=new Sa(t))),Pa(Qa(e),t,"focusin",n)}(this,e,(function(){ga(n,"firebaseui-input-toggle-focus"),ma(n,"firebaseui-input-toggle-blur")})),function(e,t,n){Bn(e,R(qn,t=new Sa(t))),Pa(Qa(e),t,"focusout",n)}(this,e,(function(){ga(n,"firebaseui-input-toggle-blur"),ma(n,"firebaseui-input-toggle-focus")})),iu(this,n,A(Cl,this))}function Tl(){var e=Il.call(this),t=kl.call(this);return va(e)?(eu(e,!0),ru(t),t=!0):(eu(e,!1),su(t,dn("Enter your password").toString()),t=!1),t?va(e):null}function Al(e,t,n){Mu.call(this,sc,{email:e},n,"passwordReset"),this.l=t}function Rl(e,t,n,i,r){Mu.call(this,pc,{factorId:e,phoneNumber:n||null,G:!!i},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=i||null}function xl(e,t,n,i){"auth/weak-password"==(i&&i.code)?(e=il(i),eu(n.i(),!1),su(n.w(),e),n.i().focus()):(n&&n.m(),(n=new Yc).render(t),_d(e,n))}function Pl(e,t){try{var n="number"==typeof e.selectionStart}catch(e){n=!1}n?(e.selectionStart=t,e.selectionEnd=t):et&&!ft("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Nl(e,t,n,i,r,s){Mu.call(this,Ju,{email:n},s,"emailLinkSignInConfirmation",{F:i,D:r}),this.l=e,this.u=t}function Ol(e,t,n,i,r){Mu.call(this,tc,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:n,D:i}),this.i=t}function Ll(e){Mu.call(this,Ku,void 0,e,"blank")}function Dl(e,t,n,i,r){var s=new Ll,a=new qe(n),u=a.a.a.get(ze.$a)||"",c=a.a.a.get(ze.Sa)||"",l="1"===a.a.a.get(ze.Qa),d=Ve(a),h=a.a.a.get(ze.PROVIDER_ID)||null;a=a.a.a.get(ze.vb)||null,Od(e,a);var f=!Qs(Js,Cd(e)),p=i||function(e,t){var n=null;if(t=Qs(Js,t))try{var i=xs(e,t),r=JSON.parse(i);n=r&&r.email||null}catch(e){}return n}(c,Cd(e)),g=(i=function(e,t){var n=null;if(t=Qs(Xs,t))try{var i=xs(e,t);n=JSON.parse(i)}catch(e){}return as(n||null)}(c,Cd(e)))&&i.a;h&&g&&g.providerId!==h&&(g=null),s.render(t),_d(e,s),Pd(e,s.I((function(){var t=Gi(null);t=d&&f||f&&l?Ki(Error("anonymous-user-not-found")):function(e,t){var n=Ve(new qe(t));return n?(t=new ji((function(t,i){var r=Ed(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===n?t(e):e&&e.isAnonymous&&e.uid!==n?i(Error("anonymous-user-mismatch")):i(Error("anonymous-user-not-found"))}));Pd(e,r)})),Pd(e,t),t):Gi(null)}(e,n).then((function(e){if(h&&!g)throw Error("pending-credential-not-found");return e}));var i=null;return t.then((function(t){return i=t,r?null:Id(e).checkActionCode(u)})).then((function(){return i}))}),[],(function(i){p?function(e,t,n,i,r,s){var a=Fu(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Signing in...").toString());var u=null;r=(s?function(e,t,n,i,r){Dd(e);var s=r||null,a=o.default.auth.EmailAuthProvider.credentialWithLink(n,i);return n=s?Id(e).signInWithEmailLink(n,i).then((function(e){return e.user.linkWithCredential(s)})).then((function(){return Fd(e)})).then((function(){return Ud(e,{code:"auth/email-already-in-use"},s)})):Id(e).fetchSignInMethodsForEmail(n).then((function(n){return n.length?Ud(e,{code:"auth/email-already-in-use"},a):t.linkWithCredential(a)})),Pd(e,n),n}(e,s,n,i,r):function(e,t,n,i){Dd(e);var r,s=i||null;return t=Id(e).signInWithEmailLink(t,n).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},s)return e.user.linkWithCredential(s).then((function(e){r={user:e.user,credential:s,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Fd(e)})).then((function(){return Ed(e).updateCurrentUser(r.user)})).then((function(){return r.user=Ed(e).currentUser,r})),Pd(e,t),t}(e,n,i,r)).then((function(n){Zs(Xs,Cd(e)),Zs(Js,Cd(e)),t.h(),t.$("firebaseui-icon-done",dn("Signed in!").toString()),u=setTimeout((function(){t.h(),el(e,t,n,!0)}),1e3),Pd(e,(function(){t&&(t.h(),t.m()),clearTimeout(u)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var s=il(r=Zc(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Zs(Xs,Cd(e)),Zs(Js,Cd(e))):"auth/invalid-email"==r.code?(s=dn("The email provided does not match the current sign-in session.").toString(),ha("emailLinkConfirmation",e,a,i,Ml,null,s)):al(e,a,n,s)}})),Pd(e,r)}(e,s,p,n,g,i):l?(s.m(),ha("differentDeviceError",e,t)):(s.m(),ha("emailLinkConfirmation",e,t,n,Ml))}),(function(i){var r=void 0;if(!i||!i.name||"cancel"!=i.name)switch(s.m(),i&&i.message){case"anonymous-user-not-found":ha("differentDeviceError",e,t);break;case"anonymous-user-mismatch":ha("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":ha("emailLinkNewDeviceLinking",e,t,n,Fl);break;default:i&&(r=il(i)),al(e,t,void 0,r)}})))}function Ml(e,t,n,i){Dl(e,t,i,n,!0)}function Fl(e,t,n){Dl(e,t,n)}function Ul(e,t,n,i,r,s){Mu.call(this,ec,{email:e,ga:t},s,"emailLinkSignInLinking",{F:i,D:r}),this.i=n}function jl(e,t,n,i,r,s){Mu.call(this,$u,{email:e},s,"emailLinkSignInSent",{F:i,D:r}),this.u=t,this.i=n}function Bl(e,t,n,i,r,s,o){Mu.call(this,yc,{jc:e,Qb:t},o,"emailMismatch",{F:r,D:s}),this.l=n,this.i=i}function ql(e,t,n,i,r){Mu.call(this,Yu,void 0,r,"emailNotReceived",{F:n,D:i}),this.l=e,this.i=t}function Vl(e,t,n,i,r,s){Mu.call(this,nc,{email:e,ga:t},s,"federatedLinking",{F:i,D:r}),this.i=n}function Hl(e,t,n,i,r,s){Mu.call(this,Hu,{email:n,Ta:!!t},s,"passwordRecovery",{F:i,D:r}),this.l=e,this.u=t}function Wl(){return Xa(this,"firebaseui-id-name")}function zl(){return Xa(this,"firebaseui-id-name-error")}function Gl(e,t,n,i,r,s,o,a,u){Mu.call(this,Vu,{email:i,Tb:e,name:r,Ta:!!n,ia:!!a},u,"passwordSignUp",{F:s,D:o}),this.w=t,this.H=n,this.B=e}function Kl(e,t){var n=zo(Ld(e)),i=t.j(),r=null;n&&(r=t.M());var s=t.P();if(i){if(n){if(!r)return void t.u().focus();r=se(r)}if(s){var a=o.default.auth.EmailAuthProvider.credential(i,s);Pd(e,t.I(A(e.Yb,e),[i,s],(function(i){var s={user:i.user,credential:a,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};return n?(i=i.user.updateProfile({displayName:r}).then((function(){return el(e,t,s)})),Pd(e,i),i):el(e,t,s)}),(function(n){if(!n.name||"cancel"!=n.name){var r=Zc(n);switch(n=il(r),r.code){case"auth/email-already-in-use":return function(e,t,n,i){function r(){var e=il(i);eu(t.i(),!1),su(t.U(),e),t.i().focus()}var s=Id(e).fetchSignInMethodsForEmail(n).then((function(i){i.length?r():(i=Fu(t),t.m(),ha("passwordRecovery",e,i,n,!1,Nn().toString()))}),(function(){r()}));return Pd(e,s),s}(e,t,i,r);case"auth/too-many-requests":n=dn("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":eu(t.l(),!1),su(t.ba(),n);break;case"auth/admin-restricted-operation":Uo(Ld(e))?(n=Fu(t),t.m(),ha("handleUnauthorizedUser",e,n,i,o.default.auth.EmailAuthProvider.PROVIDER_ID)):t.a(n);break;default:Yr(r="setAccountInfo: "+Ns(r),void 0),t.a(n)}}})))}else t.l().focus()}else t.i().focus()}function $l(){return Xa(this,"firebaseui-id-phone-confirmation-code")}function Yl(){return Xa(this,"firebaseui-id-phone-confirmation-code-error")}function Jl(){return Xa(this,"firebaseui-id-resend-countdown")}function Xl(e,t,n,i,r,s,o,a,u){Mu.call(this,wc,{phoneNumber:r},u,"phoneSignInFinish",{F:o,D:a}),this.jb=s,this.i=new Ta(1e3),this.B=s,this.P=e,this.l=t,this.H=n,this.M=i}u(jc,Mu),jc.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Uu(this,this.l(),this.i()),ju(this,this.i(),this.w),va(this.l())?this.i().focus():this.l().focus(),Mu.prototype.v.call(this)},jc.prototype.o=function(){this.H=this.w=null,Mu.prototype.o.call(this)},x(jc.prototype,{l:Lc,U:Dc,P:Mc,M:Fc,j:Uc,i:Ac,B:Rc,ea:xc,u:Pc,ua:kc,pa:Sc,ba:Tc}),L(Bc,Mu),Bc.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Bc.K.v.call(this)},Bc.prototype.o=function(){this.i=null,Bc.K.o.call(this)},x(Bc.prototype,{l:kc,w:Sc,u:Tc}),L(qc,Bc),L(Vc,Bc),L(Hc,Bc),L(Wc,Bc),L(zc,Bc),L(Gc,Bc),L(Kc,Bc),L($c,Bc),L(Yc,Bc),L(Jc,Bc),L(Xc,Bc),L(Qc,Bc),u(pl,Mu),pl.prototype.v=function(){var e=this;iu(this,this.l(),(function(){e.i()})),this.l().focus(),Mu.prototype.v.call(this)},pl.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},x(pl.prototype,{l:Sc}),da.anonymousUserMismatch=function(e,t){var n=new pl((function(){n.m(),al(e,t)}));n.render(t),_d(e,n)},u(gl,Mu),gl.prototype.I=function(e,t,n,i){return e.apply(null,t).then(n,i)},da.callback=function(e,t,n){var i=new gl;i.render(t),_d(e,i),n=n||bd(e),Pd(e,n.then((function(t){ml(e,i,t)}),(function(n){if((n=Zc(n))&&("auth/account-exists-with-different-credential"==n.code||"auth/email-already-in-use"==n.code)&&n.email&&n.credential)ro(new ss(n.email,n.credential),Cd(e)),bl(e,i,n.email);else if(n&&"auth/user-cancelled"==n.code){var r=no(Cd(e)),s=il(n);r&&r.a?bl(e,i,r.g,s):r?ul(e,i,r.g,s):yl(e,i,n)}else n&&"auth/credential-already-in-use"==n.code||(n&&"auth/operation-not-supported-in-this-environment"==n.code&&sl(e)?ml(e,i,{user:null,credential:null}):n&&"auth/admin-restricted-operation"==n.code&&Uo(Ld(e))?(i.m(),io(Cd(e)),ha("handleUnauthorizedUser",e,t,null,null)):yl(e,i,n))})))},u(_l,Mu),_l.prototype.v=function(){var e=this;iu(this,this.l(),(function(){e.i()})),this.l().focus(),Mu.prototype.v.call(this)},_l.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},x(_l.prototype,{l:Sc}),da.differentDeviceError=function(e,t){var n=new _l((function(){n.m(),al(e,t)}));n.render(t),_d(e,n)},u(wl,Mu),wl.prototype.v=function(){var e=this;iu(this,Xa(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Mu.prototype.v.call(this)},wl.prototype.o=function(){this.l=this.i=null,Mu.prototype.o.call(this)},x(wl.prototype,{u:kc,B:Sc,w:Tc}),u(Al,Mu),Al.prototype.v=function(){this.H(),this.B(this.l),ju(this,this.i(),this.l),this.i().focus(),Mu.prototype.v.call(this)},Al.prototype.o=function(){this.l=null,Mu.prototype.o.call(this)},x(Al.prototype,{i:Il,w:kl,M:El,H:Sl,u:Tl,U:kc,P:Sc,B:Tc}),u(Rl,Mu),Rl.prototype.v=function(){var e=this;iu(this,Xa(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Mu.prototype.v.call(this)},Rl.prototype.o=function(){this.l=this.i=null,Mu.prototype.o.call(this)},x(Rl.prototype,{u:kc,B:Sc,w:Tc}),da.passwordReset=function(e,t,n,i){Pd(e,Id(e).verifyPasswordResetCode(n).then((function(r){var s=new Al(r,(function(){!function(e,t,n,i,r){var s=n.u();s&&Pd(e,n.I(A(Id(e).confirmPasswordReset,Id(e)),[i,s],(function(){n.m();var i=new $c(r);i.render(t),_d(e,i)}),(function(i){xl(e,t,n,i)})))}(e,t,s,n,i)}));s.render(t),_d(e,s)}),(function(){xl(e,t)})))},da.emailChangeRevocation=function(e,t,n){var i=null;Pd(e,Id(e).checkActionCode(n).then((function(t){return i=t.data.email,Id(e).applyActionCode(n)})).then((function(){!function(e,t,n){var i=new wl(n,(function(){Pd(e,i.I(A(Id(e).sendPasswordResetEmail,Id(e)),[n],(function(){i.m(),(i=new qc(n,void 0,Ho(Ld(e)),Wo(Ld(e)))).render(t),_d(e,i)}),(function(){i.a(xn().toString())})))}));i.render(t),_d(e,i)}(e,t,i)}),(function(){var n=new Jc;n.render(t),_d(e,n)})))},da.emailVerification=function(e,t,n,i){Pd(e,Id(e).applyActionCode(n).then((function(){var n=new Vc(i);n.render(t),_d(e,n)}),(function(){var n=new Hc;n.render(t),_d(e,n)})))},da.revertSecondFactorAddition=function(e,t,n){var i=null,r=null;Pd(e,Id(e).checkActionCode(n).then((function(t){return i=t.data.email,r=t.data.multiFactorInfo,Id(e).applyActionCode(n)})).then((function(){!function(e,t,n,i){var r=new Rl(i.factorId,(function(){r.I(A(Id(e).sendPasswordResetEmail,Id(e)),[n],(function(){r.m(),(r=new qc(n,void 0,Ho(Ld(e)),Wo(Ld(e)))).render(t),_d(e,r)}),(function(){r.a(xn().toString())}))}),i.phoneNumber);r.render(t),_d(e,r)}(e,t,i,r)}),(function(){var n=new Gc;n.render(t),_d(e,n)})))},da.verifyAndChangeEmail=function(e,t,n,i){var r=null;Pd(e,Id(e).checkActionCode(n).then((function(t){return r=t.data.email,Id(e).applyActionCode(n)})).then((function(){var n=new Wc(r,i);n.render(t),_d(e,n)}),(function(){var n=new zc;n.render(t),_d(e,n)})))},u(Nl,Mu),Nl.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Pl(this.i(),(this.i().value||"").length),Mu.prototype.v.call(this)},Nl.prototype.o=function(){this.u=this.l=null,Mu.prototype.o.call(this)},x(Nl.prototype,{i:Lc,M:Dc,w:Mc,H:Fc,j:Uc,U:kc,P:Sc,B:Tc}),da.emailLinkConfirmation=function(e,t,n,i,r,s){var o=new Nl((function(){var r=o.j();r?(o.m(),i(e,t,r,n)):o.i().focus()}),(function(){o.m(),al(e,t,r||void 0)}),r||void 0,Ho(Ld(e)),Wo(Ld(e)));o.render(t),_d(e,o),s&&o.a(s)},u(Ol,Mu),Ol.prototype.v=function(){this.u(this.i),this.l().focus(),Mu.prototype.v.call(this)},Ol.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},x(Ol.prototype,{l:kc,u:Tc}),da.emailLinkNewDeviceLinking=function(e,t,n,i){var r=new qe(n);if(n=r.a.a.get(ze.PROVIDER_ID)||null,He(r,null),n){var s=new Ol(Lo(Ld(e),n),(function(){s.m(),i(e,t,r.toString())}),Ho(Ld(e)),Wo(Ld(e)));s.render(t),_d(e,s)}else al(e,t)},u(Ll,Mu),da.emailLinkSignInCallback=Dl,u(Ul,Mu),Ul.prototype.v=function(){this.u(this.i),this.l().focus(),Mu.prototype.v.call(this)},Ul.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},x(Ul.prototype,{l:kc,u:Tc}),da.emailLinkSignInLinking=function(e,t,n){var i=no(Cd(e));if(io(Cd(e)),i){var r=i.a.providerId,s=new Ul(n,Lo(Ld(e),r),(function(){!function(e,t,n,i){var r=Fu(t);ll(e,t,n,(function(){al(e,r,n)}),(function(i){if(!i.name||"cancel"!=i.name){var s=il(i);i&&"auth/network-request-failed"==i.code?t.a(s):(t.m(),al(e,r,n,s))}}),i)}(e,s,n,i)}),Ho(Ld(e)),Wo(Ld(e)));s.render(t),_d(e,s)}else al(e,t)},u(jl,Mu),jl.prototype.v=function(){var e=this;iu(this,this.l(),(function(){e.i()})),iu(this,Xa(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Mu.prototype.v.call(this)},jl.prototype.o=function(){this.i=this.u=null,Mu.prototype.o.call(this)},x(jl.prototype,{l:Sc}),da.emailLinkSignInSent=function(e,t,n,i,r){var s=new jl(n,(function(){s.m(),ha("emailNotReceived",e,t,n,i,r)}),(function(){s.m(),i()}),Ho(Ld(e)),Wo(Ld(e)));s.render(t),_d(e,s)},u(Bl,Mu),Bl.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Mu.prototype.v.call(this)},Bl.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},x(Bl.prototype,{u:kc,B:Sc,w:Tc}),da.emailMismatch=function(e,t,n){var i=no(Cd(e));if(i){var r=new Bl(n.user.email,i.g,(function(){var t=r;io(Cd(e)),el(e,t,n)}),(function(){var t=n.credential.providerId,s=Fu(r);r.m(),i.a?ha("federatedLinking",e,s,i.g,t):ha("federatedSignIn",e,s,i.g,t)}),Ho(Ld(e)),Wo(Ld(e)));r.render(t),_d(e,r)}else al(e,t)},u(ql,Mu),ql.prototype.v=function(){var e=this;iu(this,this.u(),(function(){e.i()})),iu(this,this.Da(),(function(){e.l()})),this.u().focus(),Mu.prototype.v.call(this)},ql.prototype.Da=function(){return Xa(this,"firebaseui-id-resend-email-link")},ql.prototype.o=function(){this.i=this.l=null,Mu.prototype.o.call(this)},x(ql.prototype,{u:Sc}),da.emailNotReceived=function(e,t,n,i,r){var s=new ql((function(){ll(e,s,n,i,(function(e){e=il(e),s.a(e)}),r)}),(function(){s.m(),al(e,t,n)}),Ho(Ld(e)),Wo(Ld(e)));s.render(t),_d(e,s)},u(Vl,Mu),Vl.prototype.v=function(){this.u(this.i),this.l().focus(),Mu.prototype.v.call(this)},Vl.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},x(Vl.prototype,{l:kc,u:Tc}),da.federatedLinking=function(e,t,n,i,r){var s=no(Cd(e));if(s&&s.a){var o=new Vl(n,Lo(Ld(e),i),(function(){rl(e,o,i,n)}),Ho(Ld(e)),Wo(Ld(e)));o.render(t),_d(e,o),r&&o.a(r)}else al(e,t)},da.federatedRedirect=function(e,t,n){var i=new Ll;i.render(t),_d(e,i),rl(e,i,t=Oo(Ld(e))[0],n)},da.federatedSignIn=function(e,t,n,i,r){var s=new Vl(n,Lo(Ld(e),i),(function(){rl(e,s,i,n)}),Ho(Ld(e)),Wo(Ld(e)));s.render(t),_d(e,s),r&&s.a(r)},da.passwordLinking=function(e,t,n){var i=no(Cd(e));io(Cd(e));var r=i&&i.a;if(r){var s=new Nc(n,(function(){!function(e,t,n,i){var r=t.u();r?Pd(e,t.I(A(e.Xb,e),[n,r],(function(n){return n=n.user.linkWithCredential(i).then((function(n){return el(e,t,{user:n.user,credential:i,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})})),Pd(e,n),n}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":eu(t.i(),!1),su(t.B(),il(e));break;case"auth/too-many-requests":t.a(il(e));break;default:Yr("signInWithEmailAndPassword: "+e.message,void 0),t.a(il(e))}}))):t.i().focus()}(e,s,n,r)}),(function(){s.m(),ha("passwordRecovery",e,t,n)}),Ho(Ld(e)),Wo(Ld(e)));s.render(t),_d(e,s)}else al(e,t)},u(Hl,Mu),Hl.prototype.v=function(){this.B(),this.H(this.l,this.u),va(this.i())||this.i().focus(),ju(this,this.i(),this.l),Mu.prototype.v.call(this)},Hl.prototype.o=function(){this.u=this.l=null,Mu.prototype.o.call(this)},x(Hl.prototype,{i:Lc,w:Dc,B:Mc,M:Fc,j:Uc,U:kc,P:Sc,H:Tc}),da.passwordRecovery=function(e,t,n,i,r){var s=new Hl((function(){!function(e,t){var n=t.j();if(n){var i=Fu(t);Pd(e,t.I(A(Id(e).sendPasswordResetEmail,Id(e)),[n],(function(){t.m();var r=new qc(n,(function(){r.m(),al(e,i)}),Ho(Ld(e)),Wo(Ld(e)));r.render(i),_d(e,r)}),(function(e){eu(t.i(),!1),su(t.w(),il(e))})))}else t.i().focus()}(e,s)}),i?void 0:function(){s.m(),al(e,t)},n,Ho(Ld(e)),Wo(Ld(e)));s.render(t),_d(e,s),r&&s.a(r)},da.passwordSignIn=function(e,t,n,i){var r=new jc((function(){!function(e,t){var n=t.j(),i=t.u();if(n)if(i){var r=o.default.auth.EmailAuthProvider.credential(n,i);Pd(e,t.I(A(e.bc,e),[n,i],(function(n){return el(e,t,{user:n.user,credential:r,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":eu(t.l(),!1),su(t.U(),il(e));break;case"auth/too-many-requests":case"auth/wrong-password":eu(t.i(),!1),su(t.B(),il(e));break;default:Yr("verifyPassword: "+e.message,void 0),t.a(il(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var n=r.M();r.m(),ha("passwordRecovery",e,t,n)}),n,Ho(Ld(e)),Wo(Ld(e)),i);r.render(t),_d(e,r)},u(Gl,Mu),Gl.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Uu(this,this.i(),this.u()),Uu(this,this.u(),this.l())):Uu(this,this.i(),this.l()),this.w&&ju(this,this.l(),this.w),va(this.i())?this.B&&!va(this.u())?this.u().focus():this.l().focus():this.i().focus(),Mu.prototype.v.call(this)},Gl.prototype.o=function(){this.H=this.w=null,Mu.prototype.o.call(this)},x(Gl.prototype,{i:Lc,U:Dc,ea:Mc,jb:Fc,j:Uc,u:Wl,Bc:zl,Ja:function(){var e=Wl.call(this),t=zl.call(this);tu(this,e,(function(){ou(t)&&(eu(e,!0),ru(t))}))},M:function(){var e=Wl.call(this),t=zl.call(this),n=va(e);return eu(e,n=!/^[\s\xa0]*$/.test(null==n?"":String(n))),n?(ru(t),t=!0):(su(t,dn("Enter your account name").toString()),t=!1),t?J(va(e)):null},l:Il,ba:kl,lb:El,ua:Sl,P:Tl,Nb:kc,Mb:Sc,pa:Tc}),da.passwordSignUp=function(e,t,n,i,r,s){var o=new Gl(zo(Ld(e)),(function(){Kl(e,o)}),r?void 0:function(){o.m(),al(e,t)},n,i,Ho(Ld(e)),Wo(Ld(e)),s);o.render(t),_d(e,o)},u(Xl,Mu),Xl.prototype.v=function(){var e=this;this.U(this.jb),ri(this.i,"tick",this.w,!1,this),this.i.start(),iu(this,Xa(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),iu(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Mu.prototype.v.call(this)},Xl.prototype.o=function(){this.M=this.H=this.l=this.P=null,Aa(this.i),ai(this.i,"tick",this.w),this.i=null,Mu.prototype.o.call(this)},Xl.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Aa(this.i),ai(this.i,"tick",this.w),this.ua(),this.lb())},x(Xl.prototype,{u:$l,pa:Yl,Ja:function(e){var t=$l.call(this),n=Yl.call(this);tu(this,t,(function(){ou(n)&&(eu(t,!0),ru(n))})),e&&nu(this,t,(function(){e()}))},ba:function(){var e=J(va($l.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:Jl,U:function(e){Yt(Jl.call(this),dn("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){ru(this.Fb())},Da:function(){return Xa(this,"firebaseui-id-resend-link")},lb:function(){su(this.Da())},Nb:kc,Mb:Sc,ea:Tc}),da.phoneSignInFinish=function(e,t,n,i,r,s){var o=new Xl((function(){o.m(),ha("phoneSignInStart",e,t,n)}),(function(){!function(e,t,n,i){function r(e){t.u().focus(),eu(t.u(),!1),su(t.pa(),e)}var s=t.ba();s?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Verifying...").toString()),Pd(e,t.I(A(i.confirm,i),[s],(function(n){t.h(),t.$("firebaseui-icon-done",dn("Verified!").toString());var i=setTimeout((function(){t.h(),t.m();var i={user:Ed(e).currentUser,credential:null,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};el(e,t,i,!0)}),1e3);Pd(e,(function(){t&&t.h(),clearTimeout(i)}))}),(function(i){if(i.name&&"cancel"==i.name)t.h();else{var s=Zc(i);switch(i=il(s),s.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":s=Fu(t),t.h(),t.m(),ha("phoneSignInStart",e,s,n,i);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(i);break;default:t.h(),t.a(i)}}})))):r(dn("Wrong code. Try again.").toString())}(e,o,n,r)}),(function(){o.m(),al(e,t)}),(function(){o.m(),ha("phoneSignInStart",e,t,n)}),ko(n),i,Ho(Ld(e)),Wo(Ld(e)));o.render(t),_d(e,o),s&&o.a(s)};var Ql=!(et||$e("Safari")&&!(Ye()||$e("Coast")||$e("Opera")||$e("Edge")||$e("Firefox")||$e("FxiOS")||$e("Silk")||$e("Android")));function Zl(e,t){return/-[a-z]/.test(t)?null:Ql&&e.dataset?!$e("Android")||Ye()||$e("Firefox")||$e("FxiOS")||$e("Opera")||$e("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function ed(e,t,n){var i=this;e=rn(wu,{items:e},null,this.s),Au.call(this,e,!0,!0),n&&(n=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var n=0;n<e.length;n++)if(Zl(e[n],"listboxid")===t)return e[n];return null}(e,n))&&(n.focus(),function(e,t){var n=(t=t||Gt(document))||Gt(document),i=Ga(e),r=Ga(n);if(!et||9<=Number(dt)){o=Wa(n,"borderLeftWidth");var s=Wa(n,"borderRightWidth");a=Wa(n,"borderTopWidth"),u=Wa(n,"borderBottomWidth"),s=new Ha(parseFloat(a),parseFloat(s),parseFloat(u),parseFloat(o))}else{var o=$a(n,"borderLeft");s=$a(n,"borderRight");var a=$a(n,"borderTop"),u=$a(n,"borderBottom");s=new Ha(a,s,u,o)}n==Gt(document)?(o=i.a-n.scrollLeft,i=i.g-n.scrollTop,!et||10<=Number(dt)||(o+=s.left,i+=s.top)):(o=i.a-r.a-s.left,i=i.g-r.g-s.top),r=e.offsetWidth,s=e.offsetHeight,a=rt&&!r&&!s,e=f(r)&&!a||!e.getBoundingClientRect?new Bt(r,s):new Bt((e=za(e)).right-e.left,e.bottom-e.top),r=n.clientHeight-e.height,s=n.scrollLeft,a=n.scrollTop,n=new jt(s+=Math.min(o,Math.max(o-(n.clientWidth-e.width),0)),a+=Math.min(i,Math.max(i-r,0))),t.scrollLeft=n.a,t.scrollTop=n.g}(n,e)),iu(this,e,(function(e){(e=(e=Jt(e.target,"firebaseui-id-list-box-dialog-button"))&&Zl(e,"listboxid"))&&(Ru.call(i),t(e))}))}function td(){return Xa(this,"firebaseui-id-phone-number")}function nd(){return Xa(this,"firebaseui-id-country-selector")}function id(){return Xa(this,"firebaseui-id-phone-number-error")}function rd(e,t){var n=e.a,i=sd("1-US-0",n),r=null;if(!(r=t&&sd(t,n)?t:i?"1-US-0":0<n.length?n[0].c:null))throw Error("No available default country");ud.call(this,r,e)}function sd(e,t){return!(!(e=vo(e))||!H(t,e))}function od(e){return"firebaseui-flag-"+e.f}function ad(e){var t=this;ed.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+od(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(n){ud.call(t,n,e,!0),t.O().focus()}),this.Ba)}function ud(e,t,n){var i=vo(e);i&&(n&&((t=mo(t,n=J(va(td.call(this))||""))).length&&t[0].b!=i.b&&(n="+"+i.b+n.substr(t[0].b.length+1),ya(td.call(this),n))),t=vo(this.Ba),this.Ba=e,e=Xa(this,"firebaseui-id-country-selector-flag"),t&&ma(e,od(t)),ga(e,od(i)),Yt(Xa(this,"firebaseui-id-country-selector-code"),"‎+"+i.b))}function cd(e,t,n,i,r,s,o,a,u,c){Mu.call(this,_c,{Gb:t,Aa:u||null,Va:!!n,ia:!!s},c,"phoneSignInStart",{F:i,D:r}),this.H=a||null,this.M=t,this.l=e,this.w=n||null,this.pa=o||null}function ld(e,t,n,i){try{var r=t.U(ta)}catch(e){return}r?Zo?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",dn("Verifying...").toString()),Pd(e,t.I(A(e.cc,e),[ko(r),n],(function(n){var i=Fu(t);t.$("firebaseui-icon-done",dn("Code sent!").toString());var s=setTimeout((function(){t.h(),t.m(),ha("phoneSignInFinish",e,i,r,15,n)}),1e3);Pd(e,(function(){t&&t.h(),clearTimeout(s)}))}),(function(n){if(t.h(),!n.name||"cancel"!=n.name){grecaptcha.reset(na),Zo=null;var i=n&&n.message||"";if(n.code)switch(n.code){case"auth/too-many-requests":i=dn("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void su(t.B(),Rn().toString());case"auth/admin-restricted-operation":if(Uo(Ld(e)))return n=Fu(t),t.m(),void ha("handleUnauthorizedUser",e,n,ko(r),o.default.auth.PhoneAuthProvider.PROVIDER_ID);i=il(n);break;default:i=il(n)}t.a(i)}})))):ea?su(t.u(),dn("Solve the reCAPTCHA").toString()):!ea&&i&&t.i().click():(t.O().focus(),su(t.B(),Rn().toString()))}function dd(e,t,n,i,r){Mu.call(this,bc,{Sb:t},r,"providerSignIn",{F:n,D:i}),this.i=e}function hd(e,t,n,i,r,s,o){Mu.call(this,Bu,{email:n,Va:!!t,ia:!!s},o,"signIn",{F:i,D:r}),this.i=e,this.u=t}function fd(e,t,n,i,r,s,o){Mu.call(this,ic,{kc:e,yb:n,Eb:!!i},o,"unauthorizedUser",{F:r,D:s}),this.l=t,this.i=i}function pd(e,t,n,i,r,s){Mu.call(this,rc,{email:e},s,"unsupportedProvider",{F:i,D:r}),this.l=t,this.i=n}function gd(e,t){this.$=!1;var n=yd(t);if(vd[n])throw Error('An AuthUI instance already exists for the key "'+n+'"');vd[n]=this,this.a=e,this.u=null,this.Y=!1,md(this.a),this.h=o.default.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(n=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===n?"":":"+n),e.options)),md(this.h),this.h.setPersistence&&this.h.setPersistence(o.default.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new Ro,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Sr.Xa(),this.j=this.C=null,this.da=this.A=!1}function md(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}u(cd,Mu),cd.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Uu(this,this.O(),this.i()),ju(this,this.i(),this.l),this.O().focus(),Pl(this.O(),(this.O().value||"").length),Mu.prototype.v.call(this)},cd.prototype.o=function(){this.w=this.l=null,Mu.prototype.o.call(this)},x(cd.prototype,{Cb:xu,O:td,B:id,ea:function(e,t,n){var i=this,r=td.call(this),s=nd.call(this),o=id.call(this),a=e||Io,u=a.a;if(0==u.length)throw Error("No available countries provided.");rd.call(i,a,t),iu(this,s,(function(){ad.call(i,a)})),tu(this,r,(function(){ou(o)&&(eu(r,!0),ru(o));var e=J(va(r)||""),t=vo(this.Ba),n=mo(a,e);e=sd("1-US-0",u),n.length&&n[0].b!=t.b&&(t=n[0],ud.call(i,"1"==t.b&&e?"1-US-0":t.c,a))})),n&&nu(this,r,(function(){n()}))},U:function(e){var t=J(va(td.call(this))||""),n=(e=e||Io).a,i=mo(Io,t);if(i.length&&!H(n,i[0]))throw ya(td.call(this)),td.call(this).focus(),su(id.call(this),dn("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return n=vo(this.Ba),i.length&&i[0].b!=n.b&&ud.call(this,i[0].c,e),i.length&&(t=t.substr(i[0].b.length+1)),t?new Eo(this.Ba,t):null},Ja:nd,ba:function(){return Xa(this,"firebaseui-recaptcha-container")},u:function(){return Xa(this,"firebaseui-id-recaptcha-error")},i:kc,ua:Sc,P:Tc}),da.phoneSignInStart=function(e,t,n,i){var r=function(e){var t=null;if(Po(e).forEach((function(e){e.provider==o.default.auth.PhoneAuthProvider.PROVIDER_ID&&E(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=ae(e.recaptchaParameters))})),t){var n=[];la.forEach((function(e){void 0!==t[e]&&(n.push(e),delete t[e])})),n.length&&Zr('The following provided "recaptchaParameters" keys are not allowed: '+n.join(", "))}return t}(Ld(e))||{};Zo=null,ea=!(r&&"invisible"===r.size);var s=ol(e),a=function(e){var t=(e=No(e,o.default.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&yo(t);var n=null;return e&&"string"==typeof e.loginHint&&(n=Co(e.loginHint)),t&&t[0]||n&&vo(n.a)||null}(Ld(e)),u=s?function(e){var t=null;return(e=No(e,o.default.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Co(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(Ld(e)):null;a=n&&n.a||a&&a.c||null,n=n&&n.Aa||u,(u=qo(Ld(e)))&&_o(u),ta=u?new go(qo(Ld(e))):Io;var c=new cd((function(t){ld(e,c,l,!(!t||!t.keyCode))}),ea,s?null:function(){l.clear(),c.m(),al(e,t)},Ho(Ld(e)),Wo(Ld(e)),s,ta,a,n);c.render(t),_d(e,c),i&&c.a(i),r.callback=function(t){c.u()&&ru(c.u()),Zo=t,ea||ld(e,c,l)},r["expired-callback"]=function(){Zo=null};var l=new o.default.auth.RecaptchaVerifier(ea?c.ba():c.i(),r,Ed(e).app);Pd(e,c.I(A(l.render,l),[],(function(e){na=e}),(function(n){n.name&&"cancel"==n.name||(n=il(n),c.m(),al(e,t,void 0,n))})))},da.prefilledEmailSignIn=function(e,t,n){var i=new Ll;i.render(t),_d(e,i),Pd(e,i.I(A(Id(e).fetchSignInMethodsForEmail,Id(e)),[n],(function(r){i.m();var s=!(!sl(e)||!kd(e));cl(e,t,r,n,void 0,s)}),(function(r){r=il(r),i.m(),ha("signIn",e,t,n,r)})))},u(dd,Mu),dd.prototype.v=function(){this.l(this.i),Mu.prototype.v.call(this)},dd.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},x(dd.prototype,{l:function(e){function t(t){e(t)}for(var n=this.g?Vt("firebaseui-id-idp-button",this.g||this.s.a):[],i=0;i<n.length;i++){var r=n[i];iu(this,r,R(t,Zl(r,"providerId")))}}}),da.providerSignIn=function(e,t,n,i){var r=new dd((function(n){n==o.default.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),dl(e,t,i)):n==o.default.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),ha("phoneSignInStart",e,t)):"anonymous"==n?function(e,t){Pd(e,t.I(A(e.$b,e),[],(function(n){return t.m(),el(e,t,n,!0)}),(function(e){e.name&&"cancel"==e.name||(Yr("ContinueAsGuest: "+e.code,void 0),e=il(e),t.a(e))})))}(e,r):rl(e,r,n,i),Dd(e),e.l.cancel()}),Do(Ld(e)),Ho(Ld(e)),Wo(Ld(e)));r.render(t),_d(e,r),n&&r.a(n),function(e){Dd(e);try{Tr(e.l,Mo(Ld(e)),function(e){var t;return Dd(e),(t=e.Z)||(e=Bo(e=Ld(e),o.default.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,n){if(n&&n.credential&&n.clientId===Mo(Ld(e))){if(jo(Ld(e),o.default.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var i=JSON.parse(atob(n.credential.split(".")[1])).email}catch(r){}return rl(e,t,o.default.auth.GoogleAuthProvider.PROVIDER_ID,i),Gi(!0)}return r=o.default.auth.GoogleAuthProvider.credential(n.credential),s=!1,r=t.I(A(e.ac,e),[r],(function(n){var i=Fu(t);t.m(),ha("callback",e,i,Gi(n)),s=!0}),(function(n){if(!(n.name&&"cancel"==n.name||n&&"auth/credential-already-in-use"==n.code))if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential){var i=Fu(t);t.m(),ha("callback",e,i,Ki(n))}else n&&"auth/admin-restricted-operation"==n.code&&Uo(Ld(e))?(n=Fu(t),t.m(),ha("handleUnauthorizedUser",e,n,null,o.default.auth.GoogleAuthProvider.PROVIDER_ID)):(n=il(n),t.a(n))})),Pd(e,r),r.then((function(){return s}),(function(){return!1}))}var r,s;return n&&t.a(dn("The selected credential for the authentication provider is not supported!").toString()),Gi(!1)}(e,e.g,t)}))}catch(e){}}(e)},da.sendEmailLinkForSignIn=function(e,t,n,i){var r=new gl;r.render(t),_d(e,r),ll(e,r,n,i,(function(i){r.m(),i&&"auth/admin-restricted-operation"==i.code&&Uo(Ld(e))?ha("handleUnauthorizedUser",e,t,n,o.default.auth.EmailAuthProvider.PROVIDER_ID):(i=il(i),ha("signIn",e,t,n,i))}))},u(hd,Mu),hd.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Pl(this.l(),(this.l().value||"").length),Mu.prototype.v.call(this)},hd.prototype.o=function(){this.u=this.i=null,Mu.prototype.o.call(this)},x(hd.prototype,{l:Lc,M:Dc,w:Mc,H:Fc,j:Uc,U:kc,P:Sc,B:Tc}),da.signIn=function(e,t,n,i){var r=sl(e),s=new hd((function(){var t=s,n=t.j()||"";n&&ul(e,t,n)}),r?null:function(){s.m(),al(e,t,n)},n,Ho(Ld(e)),Wo(Ld(e)),r);s.render(t),_d(e,s),i&&s.a(i)},u(fd,Mu),fd.prototype.v=function(){var e=this,t=Xa(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&iu(this,t,(function(){e.i()})),iu(this,this.u(),(function(){e.l()})),this.u().focus(),Mu.prototype.v.call(this)},fd.prototype.o=function(){this.i=this.l=null,Mu.prototype.o.call(this)},x(fd.prototype,{u:Sc}),da.handleUnauthorizedUser=function(e,t,n,i){function r(){al(e,t)}i===o.default.auth.EmailAuthProvider.PROVIDER_ID?r=function(){dl(e,t)}:i===o.default.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){ha("phoneSignInStart",e,t)});var s=null,a=null;i===o.default.auth.EmailAuthProvider.PROVIDER_ID&&Fo(Ld(e))?(s=function(e){return(e=No(e,o.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(Ld(e)),a=function(e){if((e=No(e,o.default.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){or(t)}}return null}(Ld(e))):Uo(Ld(e))&&(s=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(Ld(e)),a=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){or(t)}}return null}(Ld(e)));var u=new fd(n,(function(){u.m(),r()}),s,a,Ho(Ld(e)),Wo(Ld(e)));u.render(t),_d(e,u)},u(pd,Mu),pd.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Mu.prototype.v.call(this)},pd.prototype.o=function(){this.i=this.l=null,Mu.prototype.o.call(this)},x(pd.prototype,{u:kc,B:Sc,w:Tc}),da.unsupportedProvider=function(e,t,n){var i=new pd(n,(function(){i.m(),ha("passwordRecovery",e,t,n)}),(function(){i.m(),al(e,t,n)}),Ho(Ld(e)),Wo(Ld(e)));i.render(t),_d(e,i)};var vd={};function yd(e){return e||"[DEFAULT]"}function bd(e){return Dd(e),e.i||(e.i=Rd(e,(function(t){return t&&!no(Cd(e))?Gi(Ed(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Ud(e,t)}))):Gi(Id(e).getRedirectResult().then((function(t){return xo(Ld(e))&&!t.user&&e.j&&!e.j.isAnonymous?Ed(e).getRedirectResult():t})))}))),e.i}function _d(e,t){Dd(e),e.g=t}var wd=null;function Id(e){return Dd(e),e.h}function Ed(e){return Dd(e),e.a}function Cd(e){return Dd(e),e.oa}function kd(e){return Dd(e),e.O?e.O.emailHint:void 0}function Sd(e){return"signIn"===((e=new qe(e)).a.a.get(ze.ub)||null)&&!!e.a.a.get(ze.$a)}function Td(e,t,n,i){Dd(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(n),e.O=i||null;var s=h.document;e.C?e.C.then((function(){"complete"==s.readyState?Ad(e,t):oi(window,"load",(function(){Ad(e,t)}))})):"complete"==s.readyState?Ad(e,t):oi(window,"load",(function(){Ad(e,t)}))}function Ad(e,t){var n=ar(t,"Could not find the FirebaseUI widget element on the page.");if(n.setAttribute("lang","en".replace(/_/g,"-")),wd){var i=wd;Dd(i),no(Cd(i))&&Zr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),wd.reset()}if(wd=e,e.T=n,function(e,t){e.L=null,e.J=new Ci(t),e.J.register(),ri(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var n=Ld(e);(n=Qo(n).uiChanged||null)&&n(e.L,t),e.L=t}}))}(e,n),qs(new Vs)&&qs(new Hs)){t=ar(t,"Could not find the FirebaseUI widget element on the page."),n=(n=_e(n=ur(),i=co(Ld(e).a,"queryParameterForSignInSuccessUrl")))?It(Ct(n)).toString():null;e:{i=ur();var r=Vo(Ld(e));for(s in i=_e(i,r)||"",ua)if(ua[s].toLowerCase()==i.toLowerCase()){var s=ua[s];break e}s="callback"}switch(s){case"callback":n&&(s=Cd(e),eo(Ys,n,s)),e.nb()?ha("callback",e,t):al(e,t,kd(e));break;case"resetPassword":ha("passwordReset",e,t,hl(),fl());break;case"recoverEmail":ha("emailChangeRevocation",e,t,hl());break;case"revertSecondFactorAddition":ha("revertSecondFactorAddition",e,t,hl());break;case"verifyEmail":ha("emailVerification",e,t,hl(),fl());break;case"verifyAndChangeEmail":ha("verifyAndChangeEmail",e,t,hl(),fl());break;case"signIn":ha("emailLinkSignInCallback",e,t,ur()),Md();break;case"select":n&&(s=Cd(e),eo(Ys,n,s)),al(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Qo(t=Ld(e)).uiShown||null)&&t()}else t=ar(t,"Could not find the FirebaseUI widget element on the page."),(s=new Qc(dn("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),_d(e,s);t=e.g&&"blank"==e.g.Ga&&Ko(Ld(e)),so(Cd(e))&&!t&&(Od(e,(t=so(Cd(e))).a),Zs($s,Cd(e)))}function Rd(e,t){if(e.A)return t(xd(e));if(Pd(e,(function(){e.A=!1})),xo(Ld(e))){var n=new ji((function(n){Pd(e,e.a.onAuthStateChanged((function(i){e.j=i,e.A||(e.A=!0,n(t(xd(e))))})))}));return Pd(e,n),n}return e.A=!0,t(null)}function xd(e){return Dd(e),xo(Ld(e))&&e.j&&e.j.isAnonymous?e.j:null}function Pd(e,t){if(Dd(e),t){e.s.push(t);var n=function(){G(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(n,n)}}function Nd(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Od(e,t){e.a.tenantId=t,e.h.tenantId=t}function Ld(e){return Dd(e),e.ca}function Dd(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Md(){var e=ur();if(Sd(e)){for(var t in e=new qe(e),ze)ze.hasOwnProperty(t)&&Fe(e.a.a,ze[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var n=h.document.title;h.history&&h.history.replaceState&&h.history.replaceState(t,n,e.toString())}}function Fd(e){return Dd(e),Id(e).signOut()}function Ud(e,t,n){if(Dd(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var i=Xo(Ld(e));return Gi().then((function(){return i(new Dn("anonymous-upgrade-merge-conflict",null,n||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return Ki(t)}function jd(e,t,n,i){Mu.call(this,Cc,void 0,i,"providerMatchByEmail",{F:t,D:n}),this.i=e}function Bd(e,t,n,i,r){Mu.call(this,Ec,{ec:t},r,"selectTenant",{F:n,D:i}),this.i=e}function qd(e){Mu.call(this,Gu,void 0,e,"spinner")}function Vd(e){for(var t in this.a=new oo,ao(this.a,"authDomain"),ao(this.a,"displayMode",Jd),ao(this.a,"tenants"),ao(this.a,"callbacks"),ao(this.a,"tosUrl"),ao(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{uo(this.a,t,e[t])}catch(e){Yr('Invalid config: "'+t+'"',void 0)}}function Hd(e){return e.a.get("callbacks")||{}}function Wd(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Zr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){or(t)}}return null}function zd(e){var t=e.a.get("tosUrl")||null,n=e.a.get("privacyPolicyUrl")||null;if(n&&!t&&Zr("Terms of Service URL is missing, the link will not be displayed."),t&&n){if("function"==typeof n)return n;if("string"==typeof n)return function(){or(n)}}return null}function Gd(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Qd))throw Error("Invalid tenant configuration!")}function Kd(e,t,n){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var i=[];if(!(e=e[t]||e[Qd]))return Yr("Invalid tenant configuration: "+t+" is not configured!",void 0),i;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)i.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&n?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(n)&&i.push(e.provider):i.push(e.provider)}else Yr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),i}function $d(e,t,n){return e=function(e,t){var n=Yd,i=void 0===i?{}:i;return Gd(e,t),function(e,t,n){return n=void 0===n?{}:n,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),n)}((e=e.a.get("tenants"))[t]||e[Qd],n,i)}(e,t),(t=e.signInOptions)&&n&&(t=t.filter((function(e){return"string"==typeof e?n.includes(e):n.includes(e.provider)})),e.signInOptions=t),e}(e=gd.prototype).nb=function(){return Dd(this),!!so(Cd(this))||Sd(ur())},e.start=function(e,t){Td(this,e,t)},e.Db=function(){Dd(this),this.Z=!0},e.reset=function(){Dd(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&Ii(this.J),Nd(this),this.O=null,Md(),Zs($s,Cd(this)),Dd(this),this.l.cancel(),this.i=Gi({user:null,credential:null}),wd==this&&(wd=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],io(Cd(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Fd(this).then((function(){e.C=null}),(function(){e.C=null})))},e.ib=function(e){Dd(this);var t,n=this.ca;for(t in e)try{uo(n.a,t,e[t])}catch(e){Yr('Invalid config: "'+t+'"',void 0)}st&&uo(n.a,"popupMode",!1),qo(n),!this.da&&Yo(Ld(this))&&(Zr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},e.Wb=function(){Dd(this);var e=Ld(this),t=co(e.a,"widgetUrl");e=Vo(e);for(var n,i=t.search(be),r=0,s=[];0<=(n=ye(t,r,e,i));)s.push(t.substring(r,n)),r=Math.min(t.indexOf("&",n)+1||i,i);s.push(t.substr(r)),t=s.join("").replace(we,"$1"),(e+=i="="+encodeURIComponent("select"))?(0>(i=t.indexOf("#"))&&(i=t.length),0>(r=t.indexOf("?"))||r>i?(r=i,n=""):n=t.substring(r+1,i),i=(t=[t.substr(0,r),n,t.substr(i)])[1],t[1]=e?i?i+"&"+e:e:i,i=t[0]+(t[1]?"?"+t[1]:"")+t[2]):i=t,Ld(this).a.get("popupMode")?(i=i||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||i.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=rr(i,e))&&e.focus()):Ut(window.location,i)},e.Wa=function(){var e=this;return Dd(this),this.h.app.delete().then((function(){var t=yd(Cd(e));delete vd[t],e.reset(),e.$=!0}))},e.Ib=function(e,t){Dd(this);var n=this,i=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!Go(Ld(this)))return Ki(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if(Go(e)){var t={url:ur(),handleCodeInApp:!0};(e=No(e,o.default.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&ce(t,e.emailLinkSignIn()),e=t.url;var n=ur();n instanceof Ie||(n=Se(n)),e instanceof Ie||(e=Se(e));var i=n;n=new Ie(i);var r=!!e.j;r?Ee(n,e.j):r=!!e.A,r?n.A=e.A:r=!!e.h,r?n.h=e.h:r=null!=e.C;var s=e.g;if(r)Ce(n,e.C);else if(r=!!e.g)if("/"!=s.charAt(0)&&(i.h&&!i.g?s="/"+s:-1!=(i=n.g.lastIndexOf("/"))&&(s=n.g.substr(0,i+1)+s)),".."==s||"."==s)s="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){i=0==s.lastIndexOf("/",0),s=s.split("/");for(var a=[],u=0;u<s.length;){var c=s[u++];"."==c?i&&u==s.length&&a.push(""):".."==c?((1<a.length||1==a.length&&""!=a[0])&&a.pop(),i&&u==s.length&&a.push("")):(a.push(c),i=!0)}s=a.join("/")}return r?n.g=s:r=""!==e.a.toString(),r?ke(n,je(e.a)):r=!!e.s,r&&(n.s=e.s),t.url=n.toString(),t}return null}(Ld(this)),s=new qe(r.url);return function(e,t){t?e.a.a.set(ze.Sa,t):Fe(e.a.a,ze.Sa)}(s,i),t&&t.a&&(function(e,t,n){eo(Xs,Rs(e,JSON.stringify(os(t))),n)}(i,t,Cd(this)),He(s,t.a.providerId)),function(e,t){null!==t?e.a.a.set(ze.Qa,t?"1":"0"):Fe(e.a.a,ze.Qa)}(s,function(e){return!(!(e=No(e,o.default.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(Ld(this))),Rd(this,(function(t){return t&&((t=t.uid)?s.a.a.set(ze.Pa,t):Fe(s.a.a,ze.Pa)),r.url=s.toString(),Id(n).sendSignInLinkToEmail(e,r)})).then((function(){var t=Cd(n),r={};r.email=e,eo(Js,Rs(i,JSON.stringify(r)),t)}),(function(e){throw Zs(Xs,Cd(n)),Zs(Js,Cd(n)),e}))},e.bc=function(e,t){Dd(this);var n=this;return Id(this).signInWithEmailAndPassword(e,t).then((function(i){return Rd(n,(function(r){return r?Fd(n).then((function(){return Ud(n,{code:"auth/email-already-in-use"},o.default.auth.EmailAuthProvider.credential(e,t))})):i}))}))},e.Yb=function(e,t){Dd(this);var n=this;return Rd(this,(function(i){if(i){var r=o.default.auth.EmailAuthProvider.credential(e,t);return i.linkWithCredential(r)}return Id(n).createUserWithEmailAndPassword(e,t)}))},e.ac=function(e){Dd(this);var t=this;return Rd(this,(function(n){return n?n.linkWithCredential(e).then((function(e){return e}),(function(n){if(n&&"auth/email-already-in-use"==n.code&&n.email&&n.credential)throw n;return Ud(t,n,e)})):Id(t).signInWithCredential(e)}))},e.dc=function(e){Dd(this);var t=this,n=this.i;return this.i=null,Rd(this,(function(n){return n&&!no(Cd(t))?n.linkWithRedirect(e):Id(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=n,e}))},e.cc=function(e,t){Dd(this);var n=this;return Rd(this,(function(i){return i?i.linkWithPhoneNumber(e,t).then((function(e){return new xr(e,(function(e){if("auth/credential-already-in-use"==e.code)return Ud(n,e);throw e}))})):Ed(n).signInWithPhoneNumber(e,t).then((function(e){return new xr(e)}))}))},e.$b=function(){return Dd(this),Ed(this).signInAnonymously()},e.Xb=function(e,t){return Dd(this),Id(this).signInWithEmailAndPassword(e,t)},u(jd,Mu),jd.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Pl(this.l(),(this.l().value||"").length),Mu.prototype.v.call(this)},jd.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},x(jd.prototype,{l:Lc,H:Dc,u:Mc,B:Fc,j:Uc,M:kc,w:Tc}),u(Bd,Mu),Bd.prototype.v=function(){!function(e,t){function n(e){t(e)}for(var i=e.g?Vt("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<i.length;r++){var s=i[r];iu(e,s,R(n,Zl(s,"tenantId")))}}(this,this.i),Mu.prototype.v.call(this)},Bd.prototype.o=function(){this.i=null,Mu.prototype.o.call(this)},u(qd,Mu);var Yd=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Jd="optionFirst",Xd={pc:Jd,oc:"identifierFirst"},Qd="*";function Zd(e,t){var n=this;this.s=ar(e),this.a={},Object.keys(t).forEach((function(e){n.a[e]=new Vd(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function eh(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(e=Zd.prototype).Ub=function(e,t){var n=this;eh(this);var i=e.apiKey;return new ji((function(e,r){if(n.a.hasOwnProperty(i)){var s=Hd(n.a[i]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Xd)if(Xd[t]===e)return Xd[t];return Jd}(n.a[i])===Jd){var o=[];t.forEach((function(e){e=e||"_";var t=n.a[i].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Qd])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Yr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&o.push(e)}));var a=function(t){t={tenantId:t,providerIds:Kd(n.a[i],t||"_")},e(t)};if(1===o.length)return void a(o[0].tenantId);n.g=new Bd((function(e){eh(n),s&&s(),a(e)}),o,Wd(n.a[i]),zd(n.a[i]))}else n.g=new jd((function(){var r=n.g.j();if(r){for(var o=0;o<t.length;o++){var a=Kd(n.a[i],t[o]||"_",r);if(0!==a.length)return r={tenantId:t[o],providerIds:a,email:r},eh(n),s&&s(),void e(r)}n.g.a(On({code:"no-matching-tenant-for-email"}).toString())}}),Wd(n.a[i]),zd(n.a[i]));n.g.render(n.s),(r=Hd(n.a[i]).selectTenantUiShown||null)&&r()}else{var u=Error("Invalid project configuration: API key is invalid!");u.code="invalid-configuration",n.pb(u),r(u)}}))},e.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var n=t||void 0;Gd(this.a[e],t||"_");try{this.i=o.default.app(n).auth()}catch(r){var i=this.a[e].a.get("authDomain");if(!i)throw Error("Invalid project configuration: authDomain is required!");(e=o.default.initializeApp({apiKey:e,authDomain:i},n)).auth().tenantId=t,this.i=e.auth()}return this.i},e.Zb=function(e,t){var n=this;return new ji((function(i,r){function s(t,i){n.j=new gd(e),Td(n.j,n.s,t,i)}var o=e.app.options.apiKey;n.a.hasOwnProperty(o)||r(Error("Invalid project configuration: API key is invalid!"));var a=$d(n.a[o],e.tenantId||"_",t&&t.providerIds);eh(n),r={signInSuccessWithAuthResult:function(e){return i(e),!1}};var u,c=Hd(n.a[o]).signInUiShown||null,l=!1;r.uiChanged=function(t,i){null===t&&"callback"===i?((t=Ht("firebaseui-id-page-callback",n.s))&&ru(t),n.h=new qd,n.h.render(n.s)):l||null===t&&"spinner"===i||"blank"===i||(n.h&&(n.h.m(),n.h=null),l=!0,c&&c(e.tenantId))},a.callbacks=r,a.credentialHelper="none",t&&t.email&&(u={emailHint:t.email}),n.j?n.j.Wa().then((function(){s(a,u)})):s(a,u)}))},e.reset=function(){var e=this;return Gi().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,eh(e)}))},e.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){eh(e),e.h=new qd,e.g=e.h,e.h.render(e.s),e.A=null}),500))},e.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},e.Bb=function(){return eh(this),this.g=new Kc,this.g.render(this.s),Gi()},e.pb=function(e){var t,n=this,i=On({code:e.code}).toString()||e.message;eh(this),e.retry&&"function"==typeof e.retry&&(t=function(){n.reset(),e.retry()}),this.g=new Xc(i,t),this.g.render(this.s)},e.Rb=function(e){var t=this;return Gi().then((function(){var n=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(n))throw Error("Invalid project configuration: API key is invalid!");if(Gd(t.a[n],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(n=Hd(t.a[n]).beforeSignInSuccess||null)?n(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},O("firebaseui.auth.FirebaseUiHandler",Zd),O("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Zd.prototype.Ub),O("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Zd.prototype.Pb),O("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Zd.prototype.Zb),O("firebaseui.auth.FirebaseUiHandler.prototype.reset",Zd.prototype.reset),O("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Zd.prototype.Vb),O("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Zd.prototype.mb),O("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Zd.prototype.Bb),O("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Zd.prototype.pb),O("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Zd.prototype.Rb),O("firebaseui.auth.AuthUI",gd),O("firebaseui.auth.AuthUI.getInstance",(function(e){return e=yd(e),vd[e]?vd[e]:null})),O("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",gd.prototype.Db),O("firebaseui.auth.AuthUI.prototype.start",gd.prototype.start),O("firebaseui.auth.AuthUI.prototype.setConfig",gd.prototype.ib),O("firebaseui.auth.AuthUI.prototype.signIn",gd.prototype.Wb),O("firebaseui.auth.AuthUI.prototype.reset",gd.prototype.reset),O("firebaseui.auth.AuthUI.prototype.delete",gd.prototype.Wa),O("firebaseui.auth.AuthUI.prototype.isPendingRedirect",gd.prototype.nb),O("firebaseui.auth.AuthUIError",Dn),O("firebaseui.auth.AuthUIError.prototype.toJSON",Dn.prototype.toJSON),O("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",ia),O("firebaseui.auth.CredentialHelper.NONE",ra),O("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),ji.prototype.catch=ji.prototype.Ca,ji.prototype.finally=ji.prototype.fc}).apply(void 0!==n?n:"undefined"!=typeof self?self:window)}.apply(void 0!==n?n:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=t(a));var u=firebaseui.auth})),s.register("7nQac",(function(t,n){e(t.exports,"default",(function(){return s("hVw4Q").default}));s("hVw4Q");
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
s("hVw4Q").default.registerVersion("firebase","9.13.0","app-compat")})),s.register("hVw4Q",(function(t,n){e(t.exports,"default",(function(){return f}));var i=s("ffjl9"),r=s("4a6xH"),o=s("ix4Jr"),a=(o=s("ix4Jr"),s("7vF8m"));
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
class u{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,o.deleteApp)(this._delegate))))}_getService(e,t=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,o._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,o._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,(0,o._addComponent)(e,new(0,r.Component)("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}
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
 */const c={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new(0,i.ErrorFactory)("app-compat","Firebase",c);const d=
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
function(e){const t={},n={__esModule:!0,initializeApp:function(r,s={}){const a=o.initializeApp(r,s);if((0,i.contains)(t,a.name))return t[a.name];const u=new e(a,n);return t[a.name]=u,u},app:r,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:function(t){const s=t.name,a=s.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=r())=>{if("function"!=typeof e[a])throw l.create("invalid-app-argument",{appName:s});return e[a]()};void 0!==t.serviceProps&&(0,i.deepExtend)(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){return this._getService.bind(this,s).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:o}};function r(e){if(e=e||o._DEFAULT_ENTRY_NAME,!(0,i.contains)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),r.App=e,n}(u);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,i.deepExtend)(t,e)},createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),t}(),h=new(0,a.Logger)("@firebase/app-compat");
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
if((0,i.isBrowser)()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const f=d;
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
var p;(0,o.registerVersion)("@firebase/app-compat","0.1.38",p)})),s.register("8j8By",(function(e,t){s("cexSw")})),s.register("cexSw",(function(e,t){var i=s("hVw4Q");s("j3TbB");var r=s("30XCk"),o=s("j3TbB"),a=s("4a6xH"),u=s("ffjl9");function c(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(e=(0,u.getUA)()){return!("file:"!==c()&&"ionic:"!==c()&&"capacitor:"!==c()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(e=(0,u.getUA)()){return(0,u.isIE)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=(0,u.getUA)()){return/Edge\/\d+/.test(e)}(e)}function h(){try{const e=self.localStorage,t=r.aI();if(e)return e.setItem(t,"1"),e.removeItem(t),!d()||(0,u.isIndexedDBAvailable)()}catch(e){return f()&&(0,u.isIndexedDBAvailable)()}return!1}function f(){return void 0!==n&&"WorkerGlobalScope"in n&&"importScripts"in n}function p(){return("http:"===c()||"https:"===c()||(0,u.isBrowserExtension)()||l())&&!((0,u.isReactNative)()||(0,u.isNode)())&&h()&&!f()}function g(){return l()&&"undefined"!=typeof document}
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
const m={LOCAL:"local",NONE:"none",SESSION:"session"},v=r.ax,y="persistence";async function b(e){await e._initializationPromise;const t=_(),n=r.aA(y,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function _(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
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
 */const w=r.ax;class I{async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return g()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return w(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!g()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}constructor(){this.browserResolver=r.az(r.k),this.cordovaResolver=r.az(o.cordovaPopupRedirectResolver),this.underlyingResolver=null,this._redirectPersistence=r.a,this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}}
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
 */function E(e){return e.unwrap()}function C(e){const{_tokenResponse:t}=e instanceof u.FirebaseError?e.customData:e;if(!t)return null;if(!(e instanceof u.FirebaseError)&&"temporaryProof"in t&&"phoneNumber"in t)return r.P.credentialFromResult(e);const n=t.providerId;if(!n||n===r.o.PASSWORD)return null;let i;switch(n){case r.o.GOOGLE:i=r.Q;break;case r.o.FACEBOOK:i=r.N;break;case r.o.GITHUB:i=r.T;break;case r.o.TWITTER:i=r.W;break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=t;return s||o||e||a?a?n.startsWith("saml.")?r.aL._create(n,a):r.J._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r.U(n).credential({idToken:e,accessToken:s,rawNonce:u}):null}return e instanceof u.FirebaseError?i.credentialFromError(e):i.credentialFromResult(e)}function k(e,t){return t.catch((t=>{throw t instanceof u.FirebaseError&&function(e,t){var n,i;const s=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(i=t)||void 0===i?void 0:i.code))t.resolver=new T(e,r.an(e,t));else if(s){const e=C(t),n=t;e&&(n.credential=e,n.tenantId=s.tenantId||void 0,n.email=s.email||void 0,n.phoneNumber=s.phoneNumber||void 0)}}(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(i=e,C(i)),additionalUserInfo:r.al(e),user:A.getOrCreate(n)};
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
var i}))}async function S(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>k(e,n.confirm(t))}}class T{get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return k(E(this.auth),this.resolver.resolveSignIn(e))}constructor(e,t){this.resolver=t,this.auth=e.wrapped()}}
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
 */class A{static getOrCreate(e){return A.USER_MAP.has(e)||A.USER_MAP.set(e,new A(e)),A.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return k(this.auth,r.Z(this._delegate,e))}async linkWithPhoneNumber(e,t){return S(this.auth,r.l(this._delegate,e,t))}async linkWithPopup(e){return k(this.auth,r.d(this._delegate,e,I))}async linkWithRedirect(e){return await b(r.aE(this.auth)),r.g(this._delegate,e,I)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return k(this.auth,r._(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return S(this.auth,r.r(this._delegate,e,t))}reauthenticateWithPopup(e){return k(this.auth,r.e(this._delegate,e,I))}async reauthenticateWithRedirect(e){return await b(r.aE(this.auth)),r.h(this._delegate,e,I)}sendEmailVerification(e){return r.ab(this._delegate,e)}async unlink(e){return await r.ak(this._delegate,e),this}updateEmail(e){return r.ag(this._delegate,e)}updatePassword(e){return r.ah(this._delegate,e)}updatePhoneNumber(e){return r.u(this._delegate,e)}updateProfile(e){return r.af(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r.ac(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}constructor(e){this._delegate=e,this.multiFactor=r.ao(e)}}A.USER_MAP=new WeakMap;
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
const R=r.ax;class x{get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?A.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r.G(this._delegate,e,t)}applyActionCode(e){return r.a2(this._delegate,e)}checkActionCode(e){return r.a3(this._delegate,e)}confirmPasswordReset(e,t){return r.a1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return k(this._delegate,r.a5(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.aa(this._delegate,e)}isSignInWithEmailLink(e){return r.a8(this._delegate,e)}async getRedirectResult(){R(p(),this._delegate,"operation-not-supported-in-this-environment");const e=await r.j(this._delegate,I);return e?k(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){o.addFrameworkForLogging(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=P(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=P(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return r.a7(this._delegate,e,t)}sendPasswordResetEmail(e,t){return r.a0(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){v(Object.values(m).includes(t),e,"invalid-persistence-type"),(0,u.isReactNative)()?v(t!==m.SESSION,e,"unsupported-persistence-type"):(0,u.isNode)()?v(t===m.NONE,e,"unsupported-persistence-type"):f()?v(t===m.NONE||t===m.LOCAL&&(0,u.isIndexedDBAvailable)(),e,"unsupported-persistence-type"):v(t===m.NONE||h(),e,"unsupported-persistence-type")}(this._delegate,e),e){case m.SESSION:t=r.a;break;case m.LOCAL:t=await r.az(r.i)._isAvailable()?r.i:r.b;break;case m.NONE:t=r.L;break;default:return r.as("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return k(this._delegate,r.X(this._delegate))}signInWithCredential(e){return k(this._delegate,r.Y(this._delegate,e))}signInWithCustomToken(e){return k(this._delegate,r.$(this._delegate,e))}signInWithEmailAndPassword(e,t){return k(this._delegate,r.a6(this._delegate,e,t))}signInWithEmailLink(e,t){return k(this._delegate,r.a9(this._delegate,e,t))}signInWithPhoneNumber(e,t){return S(this._delegate,r.s(this._delegate,e,t))}async signInWithPopup(e){return R(p(),this._delegate,"operation-not-supported-in-this-environment"),k(this._delegate,r.c(this._delegate,e,I))}async signInWithRedirect(e){return R(p(),this._delegate,"operation-not-supported-in-this-environment"),await b(this._delegate),r.f(this._delegate,e,I)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;R(n,"invalid-api-key",{appName:e.name}),R(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?I:void 0;this._delegate=t.initialize({options:{persistence:N(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r.B),this.linkUnderlyingAuth()}}function P(e,t,n){let i=e;"function"!=typeof e&&({next:i,error:t,complete:n}=e);const r=i;return{next:e=>r(e&&A.getOrCreate(e)),error:t,complete:n}}function N(e,t){const n=function(e,t){const n=_();if(!n)return[];const i=r.aA(y,e,t);switch(n.getItem(i)){case m.NONE:return[r.L];case m.LOCAL:return[r.i,r.a];case m.SESSION:return[r.a];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(r.i)||n.push(r.i),"undefined"!=typeof window)for(const e of[r.b,r.a])n.includes(e)||n.push(e);return n.includes(r.L)||n.push(r.L),n}
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
 */x.Persistence=m;class O{static credential(e,t){return r.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}constructor(){this.providerId="phone",this._delegate=new r.P(E(i.default.auth()))}}O.PHONE_SIGN_IN_METHOD=r.P.PHONE_SIGN_IN_METHOD,O.PROVIDER_ID=r.P.PROVIDER_ID;
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
const L=r.ax;class D{clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}constructor(e,t,n=i.default.app()){var s;L(null===(s=n.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new r.R(e,t,n.auth()),this.type=this._delegate.type}}
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
 */var M;(M=i.default).INTERNAL.registerComponent(new(0,a.Component)("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new x(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.A.EMAIL_SIGNIN,PASSWORD_RESET:r.A.PASSWORD_RESET,RECOVER_EMAIL:r.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.A.VERIFY_EMAIL}},EmailAuthProvider:r.M,FacebookAuthProvider:r.N,GithubAuthProvider:r.T,GoogleAuthProvider:r.Q,OAuthProvider:r.U,SAMLAuthProvider:r.V,PhoneAuthProvider:O,PhoneMultiFactorGenerator:r.m,RecaptchaVerifier:D,TwitterAuthProvider:r.W,Auth:x,AuthCredential:r.H,Error:u.FirebaseError}).setInstantiationMode("LAZY").setMultipleInstances(!1)),M.registerVersion("@firebase/auth-compat","0.2.24")})),s.register("j3TbB",(function(t,n){e(t.exports,"cordovaPopupRedirectResolver",(function(){return g})),e(t.exports,"addFrameworkForLogging",(function(){return v})),e(t.exports,"ActionCodeOperation",(function(){return s("30XCk").A})),e(t.exports,"AuthCredential",(function(){return s("30XCk").H})),e(t.exports,"EmailAuthProvider",(function(){return s("30XCk").M})),e(t.exports,"FacebookAuthProvider",(function(){return s("30XCk").N})),e(t.exports,"GithubAuthProvider",(function(){return s("30XCk").T})),e(t.exports,"GoogleAuthProvider",(function(){return s("30XCk").Q})),e(t.exports,"OAuthCredential",(function(){return s("30XCk").J})),e(t.exports,"OAuthProvider",(function(){return s("30XCk").U})),e(t.exports,"PhoneAuthProvider",(function(){return s("30XCk").P})),e(t.exports,"PhoneMultiFactorGenerator",(function(){return s("30XCk").m})),e(t.exports,"ProviderId",(function(){return s("30XCk").o})),e(t.exports,"RecaptchaVerifier",(function(){return s("30XCk").R})),e(t.exports,"SAMLAuthCredential",(function(){return s("30XCk").aL})),e(t.exports,"SAMLAuthProvider",(function(){return s("30XCk").V})),e(t.exports,"TwitterAuthProvider",(function(){return s("30XCk").W})),e(t.exports,"_assert",(function(){return s("30XCk").ax})),e(t.exports,"_castAuth",(function(){return s("30XCk").aE})),e(t.exports,"_fail",(function(){return s("30XCk").as})),e(t.exports,"_generateEventId",(function(){return s("30XCk").aI})),e(t.exports,"_getInstance",(function(){return s("30XCk").az})),e(t.exports,"_getRedirectResult",(function(){return s("30XCk").aB})),e(t.exports,"_overrideRedirectResult",(function(){return s("30XCk").aC})),e(t.exports,"_persistenceKeyName",(function(){return s("30XCk").aA})),e(t.exports,"applyActionCode",(function(){return s("30XCk").a2})),e(t.exports,"browserLocalPersistence",(function(){return s("30XCk").b})),e(t.exports,"browserPopupRedirectResolver",(function(){return s("30XCk").k})),e(t.exports,"browserSessionPersistence",(function(){return s("30XCk").a})),e(t.exports,"checkActionCode",(function(){return s("30XCk").a3})),e(t.exports,"confirmPasswordReset",(function(){return s("30XCk").a1})),e(t.exports,"connectAuthEmulator",(function(){return s("30XCk").G})),e(t.exports,"createUserWithEmailAndPassword",(function(){return s("30XCk").a5})),e(t.exports,"debugErrorMap",(function(){return s("30XCk").B})),e(t.exports,"fetchSignInMethodsForEmail",(function(){return s("30XCk").aa})),e(t.exports,"getAdditionalUserInfo",(function(){return s("30XCk").al})),e(t.exports,"getMultiFactorResolver",(function(){return s("30XCk").an})),e(t.exports,"getRedirectResult",(function(){return s("30XCk").j})),e(t.exports,"inMemoryPersistence",(function(){return s("30XCk").L})),e(t.exports,"indexedDBLocalPersistence",(function(){return s("30XCk").i})),e(t.exports,"isSignInWithEmailLink",(function(){return s("30XCk").a8})),e(t.exports,"linkWithCredential",(function(){return s("30XCk").Z})),e(t.exports,"linkWithPhoneNumber",(function(){return s("30XCk").l})),e(t.exports,"linkWithPopup",(function(){return s("30XCk").d})),e(t.exports,"linkWithRedirect",(function(){return s("30XCk").g})),e(t.exports,"multiFactor",(function(){return s("30XCk").ao})),e(t.exports,"reauthenticateWithCredential",(function(){return s("30XCk")._})),e(t.exports,"reauthenticateWithPhoneNumber",(function(){return s("30XCk").r})),e(t.exports,"reauthenticateWithPopup",(function(){return s("30XCk").e})),e(t.exports,"reauthenticateWithRedirect",(function(){return s("30XCk").h})),e(t.exports,"sendEmailVerification",(function(){return s("30XCk").ab})),e(t.exports,"sendPasswordResetEmail",(function(){return s("30XCk").a0})),e(t.exports,"sendSignInLinkToEmail",(function(){return s("30XCk").a7})),e(t.exports,"signInAnonymously",(function(){return s("30XCk").X})),e(t.exports,"signInWithCredential",(function(){return s("30XCk").Y})),e(t.exports,"signInWithCustomToken",(function(){return s("30XCk").$})),e(t.exports,"signInWithEmailAndPassword",(function(){return s("30XCk").a6})),e(t.exports,"signInWithEmailLink",(function(){return s("30XCk").a9})),e(t.exports,"signInWithPhoneNumber",(function(){return s("30XCk").s})),e(t.exports,"signInWithPopup",(function(){return s("30XCk").c})),e(t.exports,"signInWithRedirect",(function(){return s("30XCk").f})),e(t.exports,"unlink",(function(){return s("30XCk").ak})),e(t.exports,"updateEmail",(function(){return s("30XCk").ag})),e(t.exports,"updatePassword",(function(){return s("30XCk").ah})),e(t.exports,"updatePhoneNumber",(function(){return s("30XCk").u})),e(t.exports,"updateProfile",(function(){return s("30XCk").af})),e(t.exports,"verifyBeforeUpdateEmail",(function(){return s("30XCk").ac})),e(t.exports,"verifyPasswordResetCode",(function(){return s("30XCk").a4}));var i=s("30XCk"),r=s("ffjl9");s("ix4Jr"),s("7vF8m"),s("4a6xH");i=s("30XCk");
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
 */function o(){return window}
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
 */async function a(e,t,n){var r;const{BuildInfo:s}=o();(0,i.ap)(t.sessionId,"AuthEvent did not contain a session ID");const a=await async function(e){const t=function(e){if((0,i.ap)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
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
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),u={};return(0,i.aq)()?u.ibi=s.packageName:(0,i.ar)()?u.apn=s.packageName:(0,i.as)(e,"operation-not-supported-in-this-environment"),s.displayName&&(u.appDisplayName=s.displayName),u.sessionId=a,(0,i.at)(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,u)}class u extends i.ay{addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}}async function c(e){const t=await h()._get(f(e));return t&&await h()._remove(f(e)),t}function l(e,t){var n,r;const s=function(e){const t=p(e),n=t.link?decodeURIComponent(t.link):void 0,i=p(n).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return p(r).link||r||i||n||e}(t);if(s.includes("/__/auth/callback")){const t=p(s),o=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,a=null===(r=null===(n=null==o?void 0:o.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],u=a?(0,i.aw)(a):null;return u?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function d(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function h(){return(0,i.az)(i.b)}function f(e){return(0,i.aA)("authEvent",e.config.apiKey,e.name)}function p(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,r.querystringDecode)(n.join("?"))}
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
 */const g=class{async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new u(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,i.as)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,s,a,u,c,l,d,h;const f=o();(0,i.ax)("function"==typeof(null===(t=null==f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.ax)(void 0!==(null===(n=null==f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.ax)("function"==typeof(null===(a=null===(s=null===(r=null==f?void 0:f.cordova)||void 0===r?void 0:r.plugins)||void 0===s?void 0:s.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.ax)("function"==typeof(null===(l=null===(c=null===(u=null==f?void 0:f.cordova)||void 0===u?void 0:u.plugins)||void 0===c?void 0:c.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.ax)("function"==typeof(null===(h=null===(d=null==f?void 0:f.cordova)||void 0===d?void 0:d.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),(0,i.aD)(),await this._originValidation(e);const u=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:d(),postBody:null,tenantId:e.tenantId,error:(0,i.aw)(e,"no-auth-event")}}(e,n,r);await function(e,t){return h()._set(f(e),t)}(e,u);const c=await a(e,u,t);return async function(e,t,n){const{cordova:r}=o();let s=()=>{};try{await new Promise(((o,a)=>{let u=null;function c(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function l(){u||(u=window.setTimeout((()=>{a((0,i.aw)(e,"redirect-cancelled-by-user"))}),2e3))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(c),document.addEventListener("resume",l,!1),(0,i.ar)()&&document.addEventListener("visibilitychange",d,!1),s=()=>{t.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",d,!1),u&&window.clearTimeout(u)}}))}finally{s()}}(e,s,await function(e){const{cordova:t}=o();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let s=null;r?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,(0,i.av)()?"_blank":"_system","location=yes"),n(s)}))}))}(c))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=o(),n={};(0,i.aq)()?n.iosBundleId=t.packageName:(0,i.ar)()?n.androidPackageName=t.packageName:(0,i.as)(e,"operation-not-supported-in-this-environment"),await(0,i.au)(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=o(),s=setTimeout((async()=>{await c(e),t.onEvent(m())}),500),a=async n=>{clearTimeout(s);const i=await c(e);let r=null;i&&(null==n?void 0:n.url)&&(r=l(i,n.url)),t.onEvent(r||m())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,a);const u=i,d=`${r.packageName.toLowerCase()}://`;o().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(d)&&a({url:e}),"function"==typeof u)try{u(e)}catch(e){console.error(e)}}}constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aB,this._overrideRedirectResult=i.aC}};function m(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.aw)("no-auth-event")}}
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
 */function v(e,t){(0,i.aE)(e)._logFramework(t)}})),s.register("dvE9m",(function(e,t){!function(){var t=window.CustomEvent;function n(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function i(e){e&&e.blur&&e!==document.body&&e.blur()}function r(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function s(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function o(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,i=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),r=function(r){if(r.target===e){var s="DOMNodeRemoved";n|=r.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}t&&"object"!=typeof t||((t=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),o.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),a.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}i(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!a.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,a.needsCentering(this.dialog_)?(a.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var n=new t("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(n)}};var a={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],i=null;try{i=n.cssRules}catch(e){}if(i)for(var s=0;s<i.length;++s){var o=i[s],a=null;try{a=document.querySelectorAll(o.selectorText)}catch(e){}if(a&&r(a,e)){var u=o.style.getPropertyValue("top"),c=o.style.getPropertyValue("bottom");if(u&&"auto"!==u||c&&"auto"!==c)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!a.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new o(e)},registerDialog:function(e){e.showModal||a.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var n=[];t.forEach((function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))})),n.length&&e(n)})))}};if(a.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},a.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},a.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},a.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=n(e);){for(var t,i=0;t=this.pendingDialogStack[i];++i)if(t.dialog===e)return 0===i;e=e.parentElement}return!1},a.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),i(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},a.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var n=new t("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&i.dialog.dispatchEvent(n)&&i.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},a.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},a.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},a.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},a.dm=new a.DialogManager,a.formSubmitter=null,a.useValue=null,void 0===window.HTMLDialogElement){var u=document.createElement("form");if(u.setAttribute("method","dialog"),"dialog"!==u.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var l=c.get;c.get=function(){return s(this)?"dialog":l.call(this)};var d=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):d.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",(function(e){if(a.formSubmitter=null,a.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&s(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;a.useValue=e.offsetX+","+e.offsetY}n(t)&&(a.formSubmitter=t)}}}),!1);var h=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!s(this))return h.call(this);var e=n(this);e&&e.close()},document.addEventListener("submit",(function(e){var t=e.target;if(s(t)){e.preventDefault();var i=n(t);if(i){var r=a.formSubmitter;r&&r.form===t?i.close(a.useValue||r.value):i.close(),a.formSubmitter=null}}}),!0)}a.forceRegisterDialog=a.forceRegisterDialog,a.registerDialog=a.registerDialog,"function"==typeof define&&"amd"in define?define((function(){return a})):"object"==typeof e.exports?e.exports=a:window.dialogPolyfill=a}()})),s.register("ezAbo",(function(e,t){
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
var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){var e=[],t=[],n="mdlComponentConfigInternal_";function i(t,n){for(var i=0;i<e.length;i++)if(e[i].className===t)return void 0!==n&&(e[i]=n),e[i];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,t){return-1!==r(e).indexOf(t)}function o(e,t,n){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var i=document.createEvent("Events");return i.initEvent(e,t,n),i}function a(t,n){if(void 0===t&&void 0===n)for(var r=0;r<e.length;r++)a(e[r].className,e[r].cssClass);else{var s=t;if(void 0===n){var o=i(s);o&&(n=o.cssClass)}for(var c=document.querySelectorAll("."+n),l=0;l<c.length;l++)u(c[l],s)}}function u(a,u){if(!("object"==typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=o("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(c),!c.defaultPrevented){var l=r(a),d=[];if(u)s(a,u)||d.push(i(u));else{var h=a.classList;e.forEach((function(e){h.contains(e.cssClass)&&-1===d.indexOf(e)&&!s(a,e.className)&&d.push(e)}))}for(var f,p=0,g=d.length;p<g;p++){if(!(f=d[p]))throw new Error("Unable to find a registered component for the given class.");l.push(f.className),a.setAttribute("data-upgraded",l.join(","));var m=new f.classConstructor(a);m[n]=f,t.push(m);for(var v=0,y=f.callbacks.length;v<y;v++)f.callbacks[v](a);f.widget&&(a[f.className]=m);var b=o("mdl-componentupgraded",!0,!1);a.dispatchEvent(b)}}}function c(e){if(e){var i=t.indexOf(e);t.splice(i,1);var r=e.element_.getAttribute("data-upgraded").split(","),s=r.indexOf(e[n].classAsString);r.splice(s,1),e.element_.setAttribute("data-upgraded",r.join(","));var a=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:u,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,i=0,r=t.length;i<r;i++)(n=t[i])instanceof HTMLElement&&(u(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=i(e);n&&n.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");i(t.classAsString,s)||e.push(s)},downgradeElements:function(e){var n=function(e){t.filter((function(t){return t.element_===e})).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var i=0;i<e.length;i++)n(e[i]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})}))})),s.register("45J63",(function(e,t){
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
var n;n=function(e){this.element_=e,this.init()},window.MaterialButton=n,n.prototype.Constant_={},n.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},n.prototype.blurHandler_=function(e){e&&this.element_.blur()},n.prototype.disable=function(){this.element_.disabled=!0},n.prototype.disable=n.prototype.disable,n.prototype.enable=function(){this.element_.disabled=!1},n.prototype.enable=n.prototype.enable,n.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:n,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})})),s.register("9P2Za",(function(e,t){
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
var n;n=function(e){this.element_=e,this.init()},window.MaterialProgress=n,n.prototype.Constant_={},n.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},n.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},n.prototype.setProgress=n.prototype.setProgress,n.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},n.prototype.setBuffer=n.prototype.setBuffer,n.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:n,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})})),s.register("3TzKX",(function(e,t){
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
var n;n=function(e){this.element_=e,this.init()},window.MaterialSpinner=n,n.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},n.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},n.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var s=[n,i,r],o=0;o<s.length;o++){var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),s[o].appendChild(a)}t.appendChild(n),t.appendChild(i),t.appendChild(r),this.element_.appendChild(t)},n.prototype.createLayer=n.prototype.createLayer,n.prototype.stop=function(){this.element_.classList.remove("is-active")},n.prototype.stop=n.prototype.stop,n.prototype.start=function(){this.element_.classList.add("is-active")},n.prototype.start=n.prototype.start,n.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:n,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})),s.register("hWGzj",(function(e,t){
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
var n;n=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()},window.MaterialTextfield=n,n.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},n.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},n.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},n.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},n.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},n.prototype.onReset_=function(e){this.updateClasses_()},n.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},n.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},n.prototype.checkDisabled=n.prototype.checkDisabled,n.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},n.prototype.checkFocus=n.prototype.checkFocus,n.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},n.prototype.checkValidity=n.prototype.checkValidity,n.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},n.prototype.checkDirty=n.prototype.checkDirty,n.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},n.prototype.disable=n.prototype.disable,n.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},n.prototype.enable=n.prototype.enable,n.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},n.prototype.change=n.prototype.change,n.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:n,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})})),s.register("i2O9m",(function(t,n){e(t.exports,"genres",(function(){return r})),e(t.exports,"initGenres",(function(){return o}));var i=s("85EYF");let r=[];async function o(){const e=new(0,i.default);r=await e.getGenres()}})),s.register("85EYF",(function(n,i){e(n.exports,"default",(function(){return c}));var r=s("iJYdK"),o=s("2shzp"),a=s("8G1wF");const u={params:{api_key:a.KEY,page:1,query:null,language:"en-US"}};class c{get idGenre(){return this.config.params.with_genres}set idGenre(e){return this.config.params.with_genres=e}get page(){return this.config.params.page}set page(e){this.config.params.page=e}incrementPage(){this.config.params.page+=1}decrementPage(){this.config.params.page-=1}reset(){this.config.params.query=null,this.config.params.page=1,this.totalPages=null,this.totalMovies=0}get query(){return this.config.params.query}set query(e){this.config.params.query=e}get totalMovies(){return this.totalMovies}set totalMovies(e){this.totalMovies=e}get totalPages(){return this.totalPages}set totalPages(e){this.totalPages=e}async dataMovies(){const e=await this.getGenres();let t=null;t=this.query?await this.getSearch():await this.getMovies();const{results:n,total_pages:i,total_results:r}=t;return this.totalPages=i,this.totalMovies=r,this.genres=e,this.movies=n,{genres:e,results:n,total_pages:i,total_results:r}}async getMovies(){const e=this.BASE_URL+this.details;return(await o.default.get(e,this.config)).data}async getGenres(){const e=this.BASE_URL+"genre/movie/list",t=await o.default.get(e,this.config);return this.genres=t.data.genres,t.data.genres}async getSearch(){const e=this.BASE_URL+"search/movie";return(await o.default.get(e,this.config)).data}createPagination(e){let t,n="",i=this.page-1,r=this.page+1;this.page>1&&(n+='<li class="btn prev"><a href="#"><i class="fas fa-angle-left"></i> &#171;</a></li>'),this.page>2&&(n+='<li class="first numb"><a href="#">1</a></li>',this.page>3&&(n+='<li class="dots"><span>...</span></li>')),this.page==this.totalPages?i-=2:this.page==this.totalPages-1&&(i-=1),1==this.page?r+=2:2==this.page&&(r+=1);for(let e=i;e<=r;e+=1)e>this.totalPages||(0==e&&(e+=1),t=this.page==e?"active":"",n+=`<li class="numb ${t}"><a href="#">${e}</a></li>`);this.page<this.totalPages-1&&(this.page<this.totalPages-2&&(n+='<li class="dots"><span>...</span></li>'),n+=`<li class="last numb"><a href="#">${this.totalPages}</a></li>`),this.page<this.totalPages&&(n+='<li class="btn next"><a href="#">&#187 <i class="fas fa-angle-right"></i></a></li>'),this.renderPaginationBtn(n,e)}renderPaginationBtn(e,t){t.innerHTML=e}constructor(e="trending/movie/week",n=u){t(r)(this,"BASE_URL","https://api.themoviedb.org/3/"),t(r)(this,"totalPages",void 0),t(r)(this,"totalMovies",void 0),t(r)(this,"genres",void 0),t(r)(this,"movies",void 0),this.details=e,this.config=n,this.totalPages=null,this.totalMovies=0,this.genres=[],this.movies=[]}}})),s.register("iJYdK",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),s.register("2shzp",(function(t,n){e(t.exports,"default",(function(){return m}));var i=s("bRlFp");const{Axios:r,AxiosError:o,CanceledError:a,isCancel:u,CancelToken:c,VERSION:l,all:d,Cancel:h,isAxiosError:f,spread:p,toFormData:g}=i.default;var m=i.default})),s.register("bRlFp",(function(t,n){e(t.exports,"default",(function(){return b}));var i=s("2bBga"),r=s("djt5d"),o=s("6zSb1"),a=s("d0EKm"),u=s("hqlPG"),c=s("4bmvb"),l=s("83xK9"),d=s("2sjhC"),h=s("ksuZT"),f=s("50GW0"),p=s("aewVa"),g=s("121rJ"),m=s("av9gA"),v=s("gNhGc");const y=function e(t){const n=new(0,o.default)(t),s=(0,r.default)(o.default.prototype.request,n);return i.default.extend(s,o.default.prototype,n,{allOwnKeys:!0}),i.default.extend(s,n,null,{allOwnKeys:!0}),s.create=function(n){return e((0,a.default)(t,n))},s}(u.default);y.Axios=o.default,y.CanceledError=l.default,y.CancelToken=d.default,y.isCancel=h.default,y.VERSION=f.VERSION,y.toFormData=p.default,y.AxiosError=g.default,y.Cancel=y.CanceledError,y.all=function(e){return Promise.all(e)},y.spread=m.default,y.isAxiosError=v.default,y.formToJSON=e=>(0,c.default)(i.default.isHTMLForm(e)?new FormData(e):e);var b=y})),s.register("2bBga",(function(t,n){e(t.exports,"default",(function(){return P}));var i=s("djt5d");const{toString:r}=Object.prototype,{getPrototypeOf:o}=Object,a=(u=Object.create(null),e=>{const t=r.call(e);return u[t]||(u[t]=t.slice(8,-1).toLowerCase())});var u;const c=e=>(e=e.toLowerCase(),t=>a(t)===e),l=e=>t=>typeof t===e,{isArray:d}=Array,h=l("undefined");const f=c("ArrayBuffer");const p=l("string"),g=l("function"),m=l("number"),v=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==a(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),_=c("File"),w=c("Blob"),I=c("FileList"),E=c("URLSearchParams");function C(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),d(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}const k=(S="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>S&&e instanceof S);var S;const T=c("HTMLFormElement"),A=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),R=c("RegExp"),x=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};C(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var P={isArray:d,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||r.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:y,isUndefined:h,isDate:b,isFile:_,isBlob:w,isRegExp:R,isFunction:g,isStream:e=>v(e)&&g(e.pipe),isURLSearchParams:E,isTypedArray:k,isFileList:I,forEach:C,merge:function e(){const t={},n=(n,i)=>{y(t[i])&&y(n)?t[i]=e(t[i],n):y(n)?t[i]=e({},n):d(n)?t[i]=n.slice():t[i]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&C(arguments[e],n);return t},extend:(e,t,n,{allOwnKeys:r}={})=>(C(t,((t,r)=>{n&&g(t)?e[r]=(0,i.default)(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,a;const u={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)a=r[s],i&&!i(a,e,t)||u[a]||(t[a]=e[a],u[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(d(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:T,hasOwnProperty:A,hasOwnProp:A,reduceDescriptors:x,freezeMethods:e=>{x(e,((t,n)=>{const i=e[n];g(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return d(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t)}})),s.register("djt5d",(function(t,n){function i(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(function(){return i}))})),s.register("6zSb1",(function(t,n){e(t.exports,"default",(function(){return p}));var i=s("2bBga"),r=s("2RNjJ"),o=s("5Dm7L"),a=s("eQ5d8"),u=s("d0EKm"),c=s("1ZTQa"),l=s("6zj0X"),d=s("gbTL1");const h=l.default.validators;class f{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,u.default)(this.defaults,t);const{transitional:n,paramsSerializer:r}=t;void 0!==n&&l.default.assertOptions(n,{silentJSONParsing:h.transitional(h.boolean),forcedJSONParsing:h.transitional(h.boolean),clarifyTimeoutError:h.transitional(h.boolean)},!1),void 0!==r&&l.default.assertOptions(r,{encode:h.function,serialize:h.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const s=t.headers&&i.default.merge(t.headers.common,t.headers[t.method]);s&&i.default.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),t.headers=new(0,d.default)(t.headers,s);const o=[];let c=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(c=c&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const f=[];let p;this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)}));let g,m=0;if(!c){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,f),g=e.length,p=Promise.resolve(t);m<g;)p=p.then(e[m++],e[m++]);return p}g=o.length;let v=t;for(m=0;m<g;){const e=o[m++],t=o[m++];try{v=e(v)}catch(e){t.call(this,e);break}}try{p=a.default.call(this,v)}catch(e){return Promise.reject(e)}for(m=0,g=f.length;m<g;)p=p.then(f[m++],f[m++]);return p}getUri(e){e=(0,u.default)(this.defaults,e);const t=(0,c.default)(e.baseURL,e.url);return(0,r.default)(t,e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new(0,o.default),response:new(0,o.default)}}}i.default.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request((0,u.default)(n||{},{method:e,url:t,data:(n||{}).data}))}})),i.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request((0,u.default)(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)}));var p=f})),s.register("2RNjJ",(function(t,n){e(t.exports,"default",(function(){return a}));var i=s("2bBga"),r=s("hz3Ym");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,n){if(!t)return e;const s=n&&n.encode||o,a=n&&n.serialize;let u;if(u=a?a(t,n):i.default.isURLSearchParams(t)?t.toString():new(0,r.default)(t,n).toString(s),u){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+u}return e}})),s.register("hz3Ym",(function(t,n){e(t.exports,"default",(function(){return u}));var i=s("aewVa");function r(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function o(e,t){this._pairs=[],e&&(0,i.default)(e,this,t)}const a=o.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){const t=e?function(t){return e.call(this,t,r)}:r;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var u=o})),s.register("aewVa",(function(t,n){e(t.exports,"default",(function(){return h}));var i=s("2bBga"),r=s("121rJ"),o=s("cHBTa"),a=s("ihoyg").Buffer;function u(e){return i.default.isPlainObject(e)||i.default.isArray(e)}function c(e){return i.default.endsWith(e,"[]")?e.slice(0,-2):e}function l(e,t,n){return e?e.concat(t).map((function(e,t){return e=c(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const d=i.default.toFlatObject(i.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var h=function(e,t,n){if(!i.default.isObject(e))throw new TypeError("target must be an object");t=t||new(o.default||FormData);const s=(n=i.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!i.default.isUndefined(t[e])}))).metaTokens,h=n.visitor||y,f=n.dots,p=n.indexes,g=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((m=t)&&i.default.isFunction(m.append)&&"FormData"===m[Symbol.toStringTag]&&m[Symbol.iterator]);var m;if(!i.default.isFunction(h))throw new TypeError("visitor must be a function");function v(e){if(null===e)return"";if(i.default.isDate(e))return e.toISOString();if(!g&&i.default.isBlob(e))throw new(0,r.default)("Blob is not supported. Use a Buffer instead.");return i.default.isArrayBuffer(e)||i.default.isTypedArray(e)?g&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function y(e,n,r){let o=e;if(e&&!r&&"object"==typeof e)if(i.default.endsWith(n,"{}"))n=s?n:n.slice(0,-2),e=JSON.stringify(e);else if(i.default.isArray(e)&&function(e){return i.default.isArray(e)&&!e.some(u)}(e)||i.default.isFileList(e)||i.default.endsWith(n,"[]")&&(o=i.default.toArray(e)))return n=c(n),o.forEach((function(e,r){!i.default.isUndefined(e)&&null!==e&&t.append(!0===p?l([n],r,f):null===p?n:n+"[]",v(e))})),!1;return!!u(e)||(t.append(l(r,n,f),v(e)),!1)}const b=[],_=Object.assign(d,{defaultVisitor:y,convertValue:v,isVisitable:u});if(!i.default.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!i.default.isUndefined(n)){if(-1!==b.indexOf(n))throw Error("Circular reference detected in "+r.join("."));b.push(n),i.default.forEach(n,(function(n,s){!0===(!(i.default.isUndefined(n)||null===n)&&h.call(t,n,i.default.isString(s)?s.trim():s,r,_))&&e(n,r?r.concat(s):[s])})),b.pop()}}(e),t}})),s.register("121rJ",(function(t,n){e(t.exports,"default",(function(){return u}));var i=s("2bBga");function r(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}i.default.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const o=r.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{a[e]={value:e}})),Object.defineProperties(r,a),Object.defineProperty(o,"isAxiosError",{value:!0}),r.from=(e,t,n,s,a,u)=>{const c=Object.create(o);return i.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),r.call(c,e.message,t,n,s,a),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};var u=r})),s.register("cHBTa",(function(n,i){e(n.exports,"default",(function(){return r}));var r=t(s("FHeSn"))})),s.register("FHeSn",(function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData})),s.register("ihoyg",(function(t,n){var i,r;e(t.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return r}),(function(e){return r=e}));var o=s("hqZtu"),a=s("5WQj6");const u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=d,r=50;const c=2147483647;function l(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,d.prototype),t}function d(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return h(e,t,n)}function h(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!d.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|y(e,t);let i=l(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Q(e,Uint8Array)){const t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return g(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Q(e,ArrayBuffer)||e&&Q(e.buffer,ArrayBuffer))return m(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Q(e,SharedArrayBuffer)||e&&Q(e.buffer,SharedArrayBuffer)))return m(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return d.from(i,t,n);const r=function(e){if(d.isBuffer(e)){const t=0|v(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?l(0):g(e);if("Buffer"===e.type&&Array.isArray(e.data))return g(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return d.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),l(e<0?0:0|v(e))}function g(e){const t=e.length<0?0:0|v(e.length),n=l(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function m(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,d.prototype),i}function v(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function y(e,t){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Q(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return J(e).length;default:if(r)return i?-1:Y(e).length;t=(""+t).toLowerCase(),r=!0}}function b(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,n);case"utf8":case"utf-8":return R(this,t,n);case"ascii":return P(this,t,n);case"latin1":case"binary":return N(this,t,n);case"base64":return A(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function _(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function w(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=d.from(t,i)),d.isBuffer(t))return 0===t.length?-1:I(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):I(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function I(e,t,n,i,r){let s,o=1,a=e.length,u=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,u/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===u)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+u>a&&(n=a-u),s=n;s>=0;s--){let n=!0;for(let i=0;i<u;i++)if(c(e,s+i)!==c(t,i)){n=!1;break}if(n)return s}return-1}function E(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(Z(i))return o;e[n+o]=i}return o}function C(e,t,n,i){return X(Y(t,e.length-n),e,n,i)}function k(e,t,n,i){return X(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function S(e,t,n,i){return X(J(t),e,n,i)}function T(e,t,n,i){return X(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function A(e,t,n){return 0===t&&n===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,n))}function R(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,u;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(u=(31&t)<<6|63&n,u>127&&(s=u));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(u=(15&t)<<12|(63&n)<<6|63&i,u>2047&&(u<55296||u>57343)&&(s=u));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(u=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,u>65535&&u<1114112&&(s=u))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=x)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=x));return n}(i)}d.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),d.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.byteOffset}}),d.poolSize=8192,d.from=function(e,t,n){return h(e,t,n)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array),d.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)}(e,t,n)},d.allocUnsafe=function(e){return p(e)},d.allocUnsafeSlow=function(e){return p(e)},d.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==d.prototype},d.compare=function(e,t){if(Q(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),Q(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return d.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=d.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Q(t,Uint8Array))r+t.length>i.length?(d.isBuffer(t)||(t=d.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!d.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},d.byteLength=y,d.prototype._isBuffer=!0,d.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)_(this,t,t+1);return this},d.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)_(this,t,t+3),_(this,t+1,t+2);return this},d.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)_(this,t,t+7),_(this,t+1,t+6),_(this,t+2,t+5),_(this,t+3,t+4);return this},d.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?R(this,0,e):b.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){let e="";const t=r;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},u&&(d.prototype[u]=d.prototype.inspect),d.prototype.compare=function(e,t,n,i,r){if(Q(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),u=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(u[e]!==c[e]){s=u[e],o=c[e];break}return s<o?-1:o<s?1:0},d.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},d.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},d.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},d.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return E(this,e,t,n);case"utf8":case"utf-8":return C(this,e,t,n);case"ascii":case"latin1":case"binary":return k(this,e,t,n);case"base64":return S(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const x=4096;function P(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function N(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function O(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=ee[e[i]];return r}function L(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,n,i,r,s){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function F(e,t,n,i,r){z(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function U(e,t,n,i,r){z(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function j(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function B(e,t,n,i,r){return t=+t,n>>>=0,r||j(e,0,n,4),a.write(e,t,n,i,23,4),n+4}function q(e,t,n,i,r){return t=+t,n>>>=0,r||j(e,0,n,8),a.write(e,t,n,i,52,8),n+8}d.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,d.prototype),i},d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},d.prototype.readBigUInt64LE=te((function(e){G(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),d.prototype.readBigUInt64BE=te((function(e){G(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),d.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},d.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},d.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readBigInt64LE=te((function(e){G(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),d.prototype.readBigInt64BE=te((function(e){G(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),d.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!1,52,8)},d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,255,0),this[t]=255&e,t+1},d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigUInt64LE=te((function(e,t=0){return F(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeBigUInt64BE=te((function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},d.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);M(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},d.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},d.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigInt64LE=te((function(e,t=0){return F(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeBigInt64BE=te((function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeFloatLE=function(e,t,n){return B(this,e,t,!0,n)},d.prototype.writeFloatBE=function(e,t,n){return B(this,e,t,!1,n)},d.prototype.writeDoubleLE=function(e,t,n){return q(this,e,t,!0,n)},d.prototype.writeDoubleBE=function(e,t,n){return q(this,e,t,!1,n)},d.prototype.copy=function(e,t,n,i){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},d.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!d.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=d.isBuffer(e)?e:d.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const V={};function H(e,t,n){V[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function W(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function z(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new V.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){G(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||K(t,e.length-(n+1))}(i,r,s)}function G(e,t){if("number"!=typeof e)throw new V.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,n){if(Math.floor(e)!==e)throw G(e,n),new V.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new V.ERR_BUFFER_OUT_OF_BOUNDS;throw new V.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}H("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),H("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),H("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=W(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=W(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const $=/[^+/0-9A-Za-z-_]/g;function Y(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function J(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace($,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function X(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Q(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(t,n){var i,r;e(t.exports,"toByteArray",(function(){return i}),(function(e){return i=e})),e(t.exports,"fromByteArray",(function(){return r}),(function(e){return r=e})),i=function(e){var t,n,i=d(e),r=i[0],s=i[1],u=new a(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),c=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===s&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===s&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},r=function(e){for(var t,n=e.length,i=n%3,r=[],o=16383,a=0,u=n-i;a<u;a+=o)r.push(h(e,a,a+o>u?u:a+o));1===i?(t=e[n-1],r.push(s[t>>2]+s[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return r.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)s[c]=u[c],o[u.charCodeAt(c)]=c;function d(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e,t,n){for(var i,r,o=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(s[(r=i)>>18&63]+s[r>>12&63]+s[r>>6&63]+s[63&r]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var i,r;e(t.exports,"read",(function(){return i}),(function(e){return i=e})),e(t.exports,"write",(function(){return r}),(function(e){return r=e})),i=function(e,t,n,i,r){var s,o,a=8*r-i-1,u=(1<<a)-1,c=u>>1,l=-7,d=n?r-1:0,h=n?-1:1,f=e[t+d];for(d+=h,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+d],d+=h,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=i;l>0;o=256*o+e[t+d],d+=h,l-=8);if(0===s)s=1-c;else{if(s===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=c}return(f?-1:1)*o*Math.pow(2,s-i)},r=function(e,t,n,i,r,s){var o,a,u,c=8*s-r-1,l=(1<<c)-1,d=l>>1,h=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+d>=1?h/u:h*Math.pow(2,1-d))*u>=2&&(o++,u/=2),o+d>=l?(a=0,o=l):o+d>=1?(a=(t*u-1)*Math.pow(2,r),o+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*g}})),s.register("5Dm7L",(function(t,n){e(t.exports,"default",(function(){return r}));var i=s("2bBga");var r=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){i.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}}})),s.register("eQ5d8",(function(t,n){e(t.exports,"default",(function(){return l}));var i=s("bhEpd"),r=s("ksuZT"),o=s("hqlPG"),a=s("83xK9"),u=s("gbTL1");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,a.default)}function l(e){c(e),e.headers=u.default.from(e.headers),e.data=i.default.call(e,e.transformRequest);return(e.adapter||o.default.adapter)(e).then((function(t){return c(e),t.data=i.default.call(e,e.transformResponse,t),t.headers=u.default.from(t.headers),t}),(function(t){return(0,r.default)(t)||(c(e),t&&t.response&&(t.response.data=i.default.call(e,e.transformResponse,t.response),t.response.headers=u.default.from(t.response.headers))),Promise.reject(t)}))}})),s.register("bhEpd",(function(t,n){e(t.exports,"default",(function(){return a}));var i=s("2bBga"),r=s("hqlPG"),o=s("gbTL1");function a(e,t){const n=this||r.default,s=t||n,a=o.default.from(s.headers);let u=s.data;return i.default.forEach(e,(function(e){u=e.call(n,u,a.normalize(),t?t.status:void 0)})),a.normalize(),u}})),s.register("hqlPG",(function(t,n){e(t.exports,"default",(function(){return g}));var i=s("2bBga"),r=s("121rJ"),o=s("2wfLM"),a=s("aewVa"),u=s("5tcKT");s("d5Oi9");var c=s("hdo0R"),l=s("4bmvb"),d=s("j5sbT"),h=s("4TNnu");const f={"Content-Type":"application/x-www-form-urlencoded"};const p={transitional:o.default,adapter:function(){let e;return"undefined"!=typeof XMLHttpRequest?e=d.default.getAdapter("xhr"):void 0!==h&&"process"===i.default.kindOf(h)&&(e=d.default.getAdapter("http")),e}(),transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=i.default.isObject(e);s&&i.default.isHTMLForm(e)&&(e=new FormData(e));if(i.default.isFormData(e))return r&&r?JSON.stringify((0,l.default)(e)):e;if(i.default.isArrayBuffer(e)||i.default.isBuffer(e)||i.default.isStream(e)||i.default.isFile(e)||i.default.isBlob(e))return e;if(i.default.isArrayBufferView(e))return e.buffer;if(i.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(e,this.formSerializer).toString();if((o=i.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,a.default)(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),function(e,t,n){if(i.default.isString(e))try{return(t||JSON.parse)(e),i.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||p.transitional,n=t&&t.forcedJSONParsing,s="json"===this.responseType;if(e&&i.default.isString(e)&&(n&&!this.responseType||s)){const n=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw r.default.from(e,r.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.default.forEach(["delete","get","head"],(function(e){p.headers[e]={}})),i.default.forEach(["post","put","patch"],(function(e){p.headers[e]=i.default.merge(f)}));var g=p})),s.register("2wfLM",(function(t,n){e(t.exports,"default",(function(){return i}));var i={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),s.register("5tcKT",(function(t,n){e(t.exports,"default",(function(){return a}));var i=s("2bBga"),r=s("aewVa");s("d5Oi9");var o=s("hdo0R");function a(e,t){return(0,r.default)(e,new o.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return o.default.isNode&&i.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}})),s.register("d5Oi9",(function(t,n){e(t.exports,"default",(function(){return s("hdo0R").default}));s("hdo0R")})),s.register("hdo0R",(function(t,n){e(t.exports,"default",(function(){return a}));var i=s("9matH"),r=s("eN04z");const o=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})();var a={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:r.default,Blob:Blob},isStandardBrowserEnv:o,protocols:["http","https","file","blob","url","data"]}})),s.register("9matH",(function(t,n){e(t.exports,"default",(function(){return r}));var i=s("hz3Ym"),r="undefined"!=typeof URLSearchParams?URLSearchParams:i.default})),s.register("eN04z",(function(t,n){e(t.exports,"default",(function(){return i}));var i=FormData})),s.register("4bmvb",(function(t,n){e(t.exports,"default",(function(){return r}));var i=s("2bBga");var r=function(e){function t(e,n,r,s){let o=e[s++];const a=Number.isFinite(+o),u=s>=e.length;if(o=!o&&i.default.isArray(r)?r.length:o,u)return i.default.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!a;r[o]&&i.default.isObject(r[o])||(r[o]=[]);return t(e,n,r[o],s)&&i.default.isArray(r[o])&&(r[o]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(r[o])),!a}if(i.default.isFormData(e)&&i.default.isFunction(e.entries)){const n={};return i.default.forEachEntry(e,((e,r)=>{t(function(e){return i.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}})),s.register("j5sbT",(function(t,n){e(t.exports,"default",(function(){return a}));var i=s("2bBga"),r=s("9VVcb");const o={http:(r=s("9VVcb")).default,xhr:r.default};var a={getAdapter:e=>{if(i.default.isString(e)){const t=o[e];if(!e)throw Error(i.default.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!i.default.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:o}})),s.register("9VVcb",(function(t,n){e(t.exports,"default",(function(){return y}));var i=s("2bBga"),r=s("1TQad"),o=s("kTwUV"),a=s("2RNjJ"),u=s("1ZTQa"),c=s("g3yOT"),l=s("2wfLM"),d=s("121rJ"),h=s("83xK9"),f=s("8wMQb");s("d5Oi9");var p=s("hdo0R"),g=s("gbTL1"),m=s("5OiBb");function v(e,t){let n=0;const i=(0,m.default)(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,u=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&s<=o?(o-s)/u:void 0};c[t?"download":"upload"]=!0,e(c)}}function y(e){return new Promise((function(t,n){let s=e.data;const m=g.default.from(e.headers).normalize(),y=e.responseType;let b;function _(){e.cancelToken&&e.cancelToken.unsubscribe(b),e.signal&&e.signal.removeEventListener("abort",b)}i.default.isFormData(s)&&p.default.isStandardBrowserEnv&&m.setContentType(!1);let w=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.set("Authorization","Basic "+btoa(t+":"+n))}const I=(0,u.default)(e.baseURL,e.url);function E(){if(!w)return;const i=g.default.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),s={data:y&&"text"!==y&&"json"!==y?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:i,config:e,request:w};(0,r.default)((function(e){t(e),_()}),(function(e){n(e),_()}),s),w=null}if(w.open(e.method.toUpperCase(),(0,a.default)(I,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=E:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(E)},w.onabort=function(){w&&(n(new(0,d.default)("Request aborted",d.default.ECONNABORTED,e,w)),w=null)},w.onerror=function(){n(new(0,d.default)("Network Error",d.default.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||l.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new(0,d.default)(t,i.clarifyTimeoutError?d.default.ETIMEDOUT:d.default.ECONNABORTED,e,w)),w=null},p.default.isStandardBrowserEnv){const t=(e.withCredentials||(0,c.default)(I))&&e.xsrfCookieName&&o.default.read(e.xsrfCookieName);t&&m.set(e.xsrfHeaderName,t)}void 0===s&&m.setContentType(null),"setRequestHeader"in w&&i.default.forEach(m.toJSON(),(function(e,t){w.setRequestHeader(t,e)})),i.default.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),y&&"json"!==y&&(w.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&w.addEventListener("progress",v(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",v(e.onUploadProgress)),(e.cancelToken||e.signal)&&(b=t=>{w&&(n(!t||t.type?new(0,h.default)(null,e,w):t),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(b),e.signal&&(e.signal.aborted?b():e.signal.addEventListener("abort",b)));const C=(0,f.default)(I);C&&-1===p.default.protocols.indexOf(C)?n(new(0,d.default)("Unsupported protocol "+C+":",d.default.ERR_BAD_REQUEST,e)):w.send(s||null)}))}})),s.register("1TQad",(function(t,n){e(t.exports,"default",(function(){return r}));var i=s("121rJ");function r(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new(0,i.default)("Request failed with status code "+n.status,[i.default.ERR_BAD_REQUEST,i.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),s.register("kTwUV",(function(t,n){e(t.exports,"default",(function(){return r}));var i=s("2bBga");s("d5Oi9");var r=s("hdo0R").default.isStandardBrowserEnv?{write:function(e,t,n,r,s,o){const a=[];a.push(e+"="+encodeURIComponent(t)),i.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.default.isString(r)&&a.push("path="+r),i.default.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),s.register("1ZTQa",(function(t,n){e(t.exports,"default",(function(){return o}));var i=s("iUwU6"),r=s("91vFE");function o(e,t){return e&&!(0,i.default)(t)?(0,r.default)(e,t):t}})),s.register("iUwU6",(function(t,n){function i(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(function(){return i}))})),s.register("91vFE",(function(t,n){function i(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(function(){return i}))})),s.register("g3yOT",(function(t,n){e(t.exports,"default",(function(){return r}));var i=s("2bBga");s("d5Oi9");var r=s("hdo0R").default.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=i.default.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}})),s.register("83xK9",(function(t,n){e(t.exports,"default",(function(){return o}));var i=s("121rJ");function r(e,t,n){i.default.call(this,null==e?"canceled":e,i.default.ERR_CANCELED,t,n),this.name="CanceledError"}s("2bBga").default.inherits(r,i.default,{__CANCEL__:!0});var o=r})),s.register("8wMQb",(function(t,n){function i(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(function(){return i}))})),s.register("gbTL1",(function(t,n){e(t.exports,"default",(function(){return f}));var i=s("2bBga"),r=s("9cPEm");const o=Symbol("internals"),a=Symbol("defaults");function u(e){return e&&String(e).trim().toLowerCase()}function c(e){return!1===e||null==e?e:i.default.isArray(e)?e.map(c):String(e)}function l(e,t,n,r){return i.default.isFunction(r)?r.call(this,t,n):i.default.isString(t)?i.default.isString(r)?-1!==t.indexOf(r):i.default.isRegExp(r)?r.test(t):void 0:void 0}function d(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}function h(e,t){e&&this.set(e),this[a]=t||null}Object.assign(h.prototype,{set:function(e,t,n){const r=this;function s(e,t,n){const i=u(t);if(!i)throw new Error("header name must be a non-empty string");const s=d(r,i);(!s||!0===n||!1!==r[s]&&!1!==n)&&(r[s||t]=c(e))}return i.default.isPlainObject(e)?i.default.forEach(e,((e,n)=>{s(e,n,t)})):s(t,e,n),this},get:function(e,t){if(!(e=u(e)))return;const n=d(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(i.default.isFunction(t))return t.call(this,e,n);if(i.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=u(e)){const n=d(this,e);return!(!n||t&&!l(0,this[n],n,t))}return!1},delete:function(e,t){const n=this;let r=!1;function s(e){if(e=u(e)){const i=d(n,e);!i||t&&!l(0,n[i],i,t)||(delete n[i],r=!0)}}return i.default.isArray(e)?e.forEach(s):s(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return i.default.forEach(this,((i,r)=>{const s=d(n,r);if(s)return t[s]=c(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=c(i),n[o]=!0})),this},toJSON:function(e){const t=Object.create(null);return i.default.forEach(Object.assign({},this[a]||null,this),((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&i.default.isArray(n)?n.join(", "):n)})),t}}),Object.assign(h,{from:function(e){return i.default.isString(e)?new this((0,r.default)(e)):e instanceof this?e:new this(e)},accessor:function(e){const t=(this[o]=this[o]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=u(e);t[r]||(!function(e,t){const n=i.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[r]=!0)}return i.default.isArray(e)?e.forEach(r):r(e),this}}),h.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),i.default.freezeMethods(h.prototype),i.default.freezeMethods(h);var f=h})),s.register("9cPEm",(function(t,n){e(t.exports,"default",(function(){return r}));const i=s("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var r=e=>{const t={};let n,r,s;return e&&e.split("\n").forEach((function(e){s=e.indexOf(":"),n=e.substring(0,s).trim().toLowerCase(),r=e.substring(s+1).trim(),!n||t[n]&&i[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t}})),s.register("5OiBb",(function(t,n){e(t.exports,"default",(function(){return i}));var i=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const u=Date.now(),c=i[o];r||(r=u),n[s]=a,i[s]=u;let l=o,d=0;for(;l!==s;)d+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-r<t)return;const h=c&&u-c;return h?Math.round(1e3*d/h):void 0}}})),s.register("ksuZT",(function(t,n){function i(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(function(){return i}))})),s.register("d0EKm",(function(t,n){e(t.exports,"default",(function(){return r}));var i=s("2bBga");function r(e,t){t=t||{};const n={};function r(e,t){return i.default.isPlainObject(e)&&i.default.isPlainObject(t)?i.default.merge(e,t):i.default.isPlainObject(t)?i.default.merge({},t):i.default.isArray(t)?t.slice():t}function s(n){return i.default.isUndefined(t[n])?i.default.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function o(e){if(!i.default.isUndefined(t[e]))return r(void 0,t[e])}function a(n){return i.default.isUndefined(t[n])?i.default.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function u(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}const c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return i.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){const t=c[e]||s,r=t(e);i.default.isUndefined(r)&&t!==u||(n[e]=r)})),n}})),s.register("6zj0X",(function(t,n){e(t.exports,"default",(function(){return u}));var i=s("50GW0"),r=s("121rJ");const o={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const a={};o.transitional=function(e,t,n){function s(e,t){return"[Axios v"+i.VERSION+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,o)=>{if(!1===e)throw new(0,r.default)(s(i," has been removed"+(t?" in "+t:"")),r.default.ERR_DEPRECATED);return t&&!a[i]&&(a[i]=!0,console.warn(s(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}};var u={assertOptions:function(e,t,n){if("object"!=typeof e)throw new(0,r.default)("options must be an object",r.default.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const o=i[s],a=t[o];if(a){const t=e[o],n=void 0===t||a(t,o,e);if(!0!==n)throw new(0,r.default)("option "+o+" must be "+n,r.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,r.default)("Unknown option "+o,r.default.ERR_BAD_OPTION)}},validators:o}})),s.register("50GW0",(function(t,n){e(t.exports,"VERSION",(function(){return i}));const i="1.1.3"})),s.register("2sjhC",(function(t,n){e(t.exports,"default",(function(){return o}));var i=s("83xK9");class r{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new r((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,r,s){n.reason||(n.reason=new(0,i.default)(e,r,s),t(n.reason))}))}}var o=r})),s.register("av9gA",(function(t,n){function i(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(function(){return i}))})),s.register("gNhGc",(function(t,n){e(t.exports,"default",(function(){return r}));var i=s("2bBga");function r(e){return i.default.isObject(e)&&!0===e.isAxiosError}})),s.register("8G1wF",(function(t,n){e(t.exports,"KEY",(function(){return i}));const i="e994a62a86f0219af0993364e0b8b3fc"})),s.register("kPAA9",(function(t,n){e(t.exports,"refs",(function(){return i}));const i={filter:document.querySelector(".js-filter-my-library"),gallery:document.querySelector(".gallery_main-page"),modal:document.body,spinner:document.querySelector(".js-spinner-gallery"),myLibrary:document.querySelector(".js-menu-my-library"),logBtn:document.querySelector(".js-login"),user:document.querySelector(".js-user"),loginUi:document.querySelector(".js-login-ui"),iconSignIn:document.querySelector(".js-sign-in"),iconSignOut:document.querySelector(".js-sign-out"),iconFace:document.querySelector(".js-icon-face"),userInfo:document.querySelector(".js-user-info")}})),s.register("5jXsB",(function(t,n){e(t.exports,"user",(function(){return u}));var i=s("5I6z3"),r=s("clyQT"),o=s("04jNI"),a=s("kPAA9");let u="";a.refs.logBtn.addEventListener("click",(function(){(0,i.closeAuth)(),u?i.auth.signOut():((0,i.openAuth)(),a.refs.loginUi.classList.add("active"))})),a.refs.loginUi.addEventListener("click",(function(e){e.target.classList.contains("js-login-ui")&&(a.refs.loginUi.classList.remove("active"),(0,i.closeAuth)())})),i.auth.onAuthStateChanged((async function(e){if(u=e,!u){let e=window.location.href;e.includes("myLibrary")&&(e=e.replace("myLibrary","index"),window.location.replace(e))}if(function(){if(u){var e;a.refs.myLibrary.style.display="block",a.refs.myLibrary.classList.add("myLib-is-shown"),a.refs.myLibrary.classList.remove("myLib-is-hidden"),a.refs.iconSignIn.style.display="none",a.refs.iconSignOut.style.display="inline-block",a.refs.iconFace.style.display="inline-block",a.refs.userInfo.textContent=`${null!==(e=u.displayName)&&void 0!==e?e:""} <${u.email}>`,a.refs.logBtn.setAttribute("title","Sign out")}else a.refs.myLibrary.style.display="none",a.refs.myLibrary.classList.add("myLib-is-hidden"),a.refs.myLibrary.classList.remove("myLib-is-shown"),a.refs.iconSignIn.style.display="inline-block",a.refs.iconSignOut.style.display="none",a.refs.iconFace.style.display="none",a.refs.logBtn.setAttribute("title","Sign in");a.refs.loginUi.classList.remove("active")}(),window.location.href.includes("myLibrary")){(0,o.showSpinner)(a.refs.spinner);try{await(0,r.renderMovies)()}catch(e){console.error(e)}finally{(0,o.hideSpinner)(a.refs.spinner)}}}))})),s.register("04jNI",(function(t,n){function i(e,t){e.classList.remove("is-hidden"),null==t||t.classList.add("is-hidden")}function r(e,t){e.classList.add("is-hidden"),null==t||t.classList.remove("is-hidden")}e(t.exports,"showSpinner",(function(){return i})),e(t.exports,"hideSpinner",(function(){return r}))})),s.register("ibusF",(function(n,i){e(n.exports,"openModal",(function(){return c}));var r=s("jrD5E"),o=s("37v9V");s("clyQT");var a=s("krGWQ"),u=s("9B8F0");function c(e,n){const i=function(e,n){const{title:i,vote_count:s,vote_average:o,popularity:a,original_title:u,overview:c,genres:l,poster_path:d}=e;return`<div class="modal_description_film">\n      <div class="movie_div_film">\n          <img class="movie_foto_film" src="${n.fotoUrl}${d}" alt="poster_foto ">\n    <button type="button" name="trailer_btn" class="button_film button_film_rem trailer_btn" data-id ="${n.movie_id}">\n      <svg class="icon play-treiler" width="50" height="50">\n        <use xlink:href="${t(r)}#play-treiler"></use>\n      </svg>\n    </button>\n      </div>\n      <div class="film_information_film">\n          <h1 class="movie_title_film">${i}</h1>\n          <ul class="movie_test">\n              <li class="movie_description_film">Vote / Votes\n              <p class="movie_vote_film">${o.toFixed(1)}</p>\n              <p class="movie_votes_film"><span class="movie_backslash">/</span><span class="movie_votes">${s}</span></p></li>\n\n              <li class="movie_description_film">Popularity\n              <p class="movie_value_film movie_popularity_film">${a.toFixed(1)}</p></li>\n\n              <li class="movie_description_film">Original Title\n              <p class="movie_value_film movie_original_title_film">${u}</p></li>\n\n              <li class="movie_description_film">Genre\n              <p class="movie_value_film movie_genre_film">${Object.values(l[0].name).join("")}</p></li>\n\n          </ul>\n          <h2 class="movie_about_film">ABOUT</h2>\n          <p class="about_text_film">${c}</p>\n\n          <form class="js-movie-buttons movie-buttons_film">\n  <label class="movie-buttons__label">\n    <input\n      class="movie-buttons_film__input"\n      type="radio"\n      name="status"\n      value="isWatched"\n    />\n    <span class="movie-buttons_film__text button_film">Watched</span>\n  </label>\n\n  <label class="movie-buttons__label">\n    <input\n      class="movie-buttons_film__input"\n      type="radio"\n      name="status"\n      value="isQueued"\n    />\n    <span class="movie-buttons_film__text button_film">Queued</span>\n  </label>\n  <button type="button" class="js-remove-button button_film button_film_rem">Remove</button>\n</form>\n      </div>\n    </div>`}(e,n);a.refs.gallery.innerHTML=i;const s=u.create(document.querySelector(".modal_movie"),{onShow:e=>{document.body.style.overflow="hidden",document.addEventListener("keydown",c),document.addEventListener("click",(e=>{e.target.closest(".trailer_btn")&&(0,o.default)(document.querySelector(".trailer_btn").dataset.id)}))},onClose:e=>{document.body.style.overflow="",document.removeEventListener("keydown",c)}});function c(e){"Escape"===e.key&&s.close()}s.show()}})),s.register("jrD5E",(function(e,t){e.exports=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString()})),s.register("37v9V",(function(t,n){e(t.exports,"default",(function(){return l}));var i=s("9B8F0"),r=s("8G1wF");const o="https://www.youtube.com/embed/",a=i.create('\n  <iframe width="900" height="600" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<button class="close-modal__trailer">     \n     </button>'),u=a.element().querySelector("iframe"),c=i.create('\n    <iframe width="900" height="600" src="https://www.youtube.com/embed/6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      ');function l(e){var t;(t=e,fetch(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=${r.KEY}&language=en-US`).then((e=>e.json()))).then((e=>{const t=e.results[0].key;u.src=o+t,a.show();document.querySelector(".close-modal__trailer").addEventListener("click",(function(e){a.close(),window.removeEventListener("keydown",closeModalHandler)}))})).catch((e=>{c.show(),console.log(e)}))}})),s.register("9B8F0",(function(e,t){e.exports=function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){var u=void 0;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[o]={exports:{}};t[o][0].call(l.exports,(function(e){return r(t[o][1][e]||e)}),l,l.exports,e,t,n,i)}return n[o].exports}for(var s=void 0,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var o=r(s,"IMG"),a=r(s,"VIDEO"),u=r(s,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===u&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1)})),s.register("krGWQ",(function(t,n){e(t.exports,"refs",(function(){return i}));const i={formSearch:document.querySelector("#js-search-form"),inputSearch:document.querySelector(".search__form-input"),galleryList:document.querySelector(".gallery_main-page"),addWatched:document.querySelector(".add-watched"),addQueue:document.querySelector(".add-queue"),element:document.querySelector(".pagination ul"),button:document.querySelector(".dropbtn"),dropdownContent:document.querySelector(".dropdown-content"),dropdown:document.querySelector(".dropdown"),buttonSearch:document.querySelector(".search__button"),spinner:document.querySelector(".spinner"),iconSearch:document.querySelector(".icon-search"),idgalery:document.querySelector(".gallery_main-page"),gallery:document.querySelector(".modal_movie"),trailer:document.querySelector(".trailer_btn"),spinnerGallery:document.querySelector(".js-spinner-gallery")}})),s.register("74bG2",(function(e,t){var n=s("gJRQ6"),i=s("clyQT"),r=s("kPAA9"),o=s("04jNI");r.refs.modal.addEventListener("click",(async function(e){const t=e.target;if(!t.closest(".modal_description_film"))return;if(t.closest(".js-movie-buttons")&&t.closest("input")){const e=t.closest(".js-movie-buttons"),i=new FormData(e).get("status");"isWatched"===i?(n.dbFirebase.cachedMovie.isQueued=!1,n.dbFirebase.cachedMovie.isWatched=!0):"isQueued"===i&&(n.dbFirebase.cachedMovie.isQueued=!0,n.dbFirebase.cachedMovie.isWatched=!1);try{await n.dbFirebase.addMovie(n.dbFirebase.cachedMovie)}catch(e){console.error(e)}}t.classList.contains("js-remove-button")&&(n.dbFirebase.removeMovie({userId:n.dbFirebase.cachedMovie.userId,movieId:n.dbFirebase.cachedMovie.movieDetails.id}),n.dbFirebase.cachedMovie.isQueued=!1,n.dbFirebase.cachedMovie.isWatched=!1);if(window.location.href.includes("myLibrary")){(0,o.showSpinner)(r.refs.spinner);try{await(0,i.renderMovies)()}catch(e){console.error(e)}finally{(0,o.hideSpinner)(r.refs.spinner)}}(0,i.updateBtnStatus)()}))})),s.register("aSWUZ",(function(e,t){const n={openModalBtn:document.querySelector("#open-team-modal"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};n.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),n.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),n.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(n.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),n.body.removeEventListener("keyup",e))})),n.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(n.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),n.modal.removeEventListener("click",e))}))}))})),s.register("bUb57",(function(e,t){function n(e){const t=e.target.dataset.menu,i=`/${document.location.pathname.split("/").pop()}`;"home"===t&&"/"===i||"home"===t&&"/index.html"===i||"my-library"===t&&"/myLibrary.html"===i?e.preventDefault():e.currentTarget.removeEventListener("click",n)}document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".header"),t=document.querySelector(".navigation"),i=document.querySelector(".radio-box"),r=document.querySelector(".search-box"),s=document.querySelector(".dropbtn"),o=t.querySelector(".active");o&&o.classList.remove("active");switch(`/${document.location.pathname.split("/").pop()}`){case"/":case"/index.html":t.querySelector("[data-menu='home']").classList.add("active"),i.classList.add("is-hidden"),s.classList.remove("is-hidden"),e.classList.remove("library"),r.classList.remove("is-hidden");break;case"/myLibrary.html":t.querySelector("[data-menu='my-library']").classList.add("active"),e.classList.add("library"),r.classList.add("is-hidden"),s.classList.add("is-hidden"),i.classList.remove("is-hidden")}t.addEventListener("click",n)}),{once:!0})})),s.register("it0VB",(function(e,t){const n="FilmotekaTheme",i=document.getElementById("checkbox");i.addEventListener("change",(function(){!document.body.classList.contains("dark","gallery__item-title--isDarkTheme")&&i.checked&&document.body.classList.add("dark","gallery__item-title--isDarkTheme");document.body.classList.contains("dark","gallery__item-title--isDarkTheme")&&!i.checked&&document.body.classList.remove("dark","gallery__item-title--isDarkTheme");localStorage.setItem(n,i.checked)})),function(){localStorage.getItem(n)&&(i.checked=JSON.parse(localStorage.getItem(n)));i.dispatchEvent(new Event("change"))}()})),s("kyEFX").register(JSON.parse('{"3U3PE":"myLibrary.a09143c1.js","g7XmX":"posterMovie.cbc2c8eb.jpg","8OQ7p":"icons.b16a865c.svg","5UbS1":"index.8f2c37ab.css"}'));
//# sourceMappingURL=myLibrary.a09143c1.js.map

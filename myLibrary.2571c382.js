!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var a=i("bpxeT"),o=i("2TvXO"),s=i("4lZAI"),u=i("66NcD");function d(){return(d=e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.initGenres)();case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(l=i("3V0Mm")).refs.filter.addEventListener("click",(function(e){if(!e.target.closest("input"))return;(0,s.renderMovies)()})),function(){d.apply(this,arguments)}();a=i("bpxeT"),o=i("2TvXO");var c=i("9NMJY"),l=i("3V0Mm"),f=i("bPhZY"),p=i("1g6CO");s=i("4lZAI");function v(){return(v=e(a)(e(o).mark((function t(r){var n,i,a,u,d,l,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.target,i=n.closest(".gallery__item")){e.next=4;break}return e.abrupt("return");case 4:return a=i.dataset.movieid,e.next=7,f.dbFirebase.getMovie({userId:p.user.uid,movieId:a});case 7:u=e.sent,d=u.isWatched,l=u.isQueued,v=u.movieDetails,f.dbFirebase.cachedMovie={userId:p.user.uid,isWatched:d,isQueued:l,movieDetails:v},(0,c.openModal)(v,{movie_id:v.id,fotoUrl:"https://image.tmdb.org/t/p/w500"}),(0,s.updateBtnStatus)();case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}l.refs.gallery.addEventListener("click",(function(e){return v.apply(this,arguments)})),i("blm6R"),i("kvep9"),i("i8Q71"),i("1g6CO"),i("9ZZxa")}();
//# sourceMappingURL=myLibrary.2571c382.js.map

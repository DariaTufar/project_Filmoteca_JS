var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return i[e]=n,r.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,i){t[e]=i},e.parcelRequired7c6=r);var n=r("clyQT"),s=r("i2O9m"),o=r("kPAA9"),a=r("04jNI");o.refs.filter.addEventListener("click",(async function(e){if(!e.target.closest("input"))return;(0,a.showSpinner)(o.refs.spinner);try{await(0,n.renderMovies)()}catch(e){console.error(e)}finally{(0,a.hideSpinner)(o.refs.spinner)}})),async function(){await(0,s.initGenres)()}();var d=r("ibusF"),l=(o=r("kPAA9"),r("gJRQ6")),c=r("5jXsB");n=r("clyQT");o.refs.gallery.addEventListener("click",(async function(e){const i=e.target.closest(".gallery__item");if(!i)return;const t=i.dataset.movieid,{isWatched:r,isQueued:s,movieDetails:o}=await l.dbFirebase.getMovie({userId:c.user.uid,movieId:t});l.dbFirebase.cachedMovie={userId:c.user.uid,isWatched:r,isQueued:s,movieDetails:o},(0,d.openModal)(o,{movie_id:o.id,fotoUrl:"https://image.tmdb.org/t/p/w500"}),(0,n.updateBtnStatus)()})),r("74bG2"),r("aSWUZ"),r("bUb57"),r("5jXsB"),r("it0VB");
//# sourceMappingURL=myLibrary.eeaf31a0.js.map

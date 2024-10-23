import{i as f,S as g}from"./assets/vendor-Dg3uDB0e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const w={BASE_URL:"/goit-advancedjs-hw-03/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},m=void 0;console.log("API Key:",m);console.log("All Environment Variables:",w);const L="https://pixabay.com/api/?",S="q",u=new URLSearchParams({key:m,orientation:"horizontal",image_type:"photo",safesearch:!0});function v(t){const e=E(t);u.set(S,e);const r=L+u.toString();return console.log("API URL:",r),fetch(r).then(a=>{if(!a.ok)throw new Error(`Error fetching images with status ${a.status} and response ${a.statusText}`);return a.json()})}function E(t){const e=t.split(/\s+/);let r="";for(const a of e){if((r+"+"+a).length>100)break;r+=(r?"+":"")+a}return r}const p=3e3,h="topRight";function d(t){f.warning({message:t,timeout:p,position:h,close:!1})}function P(t){f.error({message:t,timeout:p,position:h,close:!1})}function _(t){if(t.length===0){P("Sorry, there are no images matching your search query. Please try again!");return}y.innerHTML=$(t)}const $=t=>t.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      data-likes = "${e.likes}"
      data-views = "${e.views}"
      data-comments = "${e.comments}"
      data-downloads = "${e.downloads}"
      alt="${e.tags}"
    />
  </a>
  <ul class="stats">
  <li class="stats-item">
  <p  class="stats-item-header">Likes</p>
  <p class="stats-item-value">${e.likes}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Views</p>
  <p class="stats-item-value">${e.views}</p>
  </li>
    <li class="stats-item">
  <p class="stats-item-header">Comments</p>
  <p class="stats-item-value">${e.comments}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Downloads</p>
  <p class="stats-item-value">${e.downloads}</p>
  </li>
  </ul>
</li>
`).join(""),n=document.querySelector(".action-form"),l=document.querySelector(".loader"),y=document.querySelector(".gallery");n.addEventListener("submit",b);function b(t){t.preventDefault();const e=n.elements.query.value.trim();if(e==="")return d("Please enter a valid query!");y.innerHTML="",l.classList.remove("is-hidden"),v(e).then(r=>{_(r.hits),n.reset(),l.classList.add("is-hidden"),c.refresh()}).catch(r=>{console.error("Error fetching images:",r),l.classList.add("is-hidden"),d("Sorry, something went wrong. Please try again!")}),n.reset()}let c=new g(".gallery a",{captionsData:"alt",captionDelay:250});c.on("show.simplelightbox",function(){});c.on("close.simplelightbox",function(){});
//# sourceMappingURL=index.js.map

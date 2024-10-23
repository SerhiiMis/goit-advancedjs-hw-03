import{i as f,S as y}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const g=void 0,w="https://pixabay.com/api/?",L="q",u=new URLSearchParams({key:g,orientation:"horizontal",image_type:"photo",safesearch:!0});function S(t){const e=v(t);u.set(L,e);const r=w+u.toString();return fetch(r).then(a=>{if(!a.ok)throw new Error(`Error fetching images with status ${a.status} and response ${a.statusText}`);return a.json()})}function v(t){const e=t.split(/\s+/);let r="";for(const a of e){if((r+"+"+a).length>100)break;r+=(r?"+":"")+a}return r}const m=3e3,p="topRight";function d(t){f.warning({message:t,timeout:m,position:p,close:!1})}function $(t){f.error({message:t,timeout:m,position:p,close:!1})}function b(t){if(t.length===0){$("Sorry, there are no images matching your search query. Please try again!");return}h.innerHTML=O(t)}const O=t=>t.map(e=>`<li class="gallery-item">
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
`).join(""),i=document.querySelector(".action-form"),l=document.querySelector(".loader"),h=document.querySelector(".gallery");i.addEventListener("submit",P);function P(t){t.preventDefault();const e=i.elements.query.value.trim();if(e==="")return d("Please enter a valid query!");h.innerHTML="",l.classList.remove("is-hidden"),S(e).then(r=>{b(r.hits),i.reset(),l.classList.add("is-hidden"),c.refresh()}).catch(r=>{l.classList.add("is-hidden"),d("Sorry, something went wrong. Please try again!")}),i.reset()}let c=new y(".gallery a",{captionsData:"alt",captionDelay:250});c.on("show.simplelightbox",function(){});c.on("close.simplelightbox",function(){});
//# sourceMappingURL=index.js.map

import{i as m,S as y}from"./assets/vendor-Dg3uDB0e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const g="46684790-07ddeec26d5334b4228888751",w="https://pixabay.com/api/",L="q",f=new URLSearchParams({key:g,orientation:"horizontal",image_type:"photo",safesearch:!0});function S(t){const e=$(t);f.set(L,e);const o=`${w}?${f.toString()}`;return fetch(o).then(r=>{if(!r.ok)throw new Error(`Error fetching images: ${r.status}`);return r.json()}).catch(r=>{throw console.error("Fetch error:",r),r})}function $(t){const e=t.split(/\s+/);let o="";for(const r of e){if((o+"+"+r).length>100)break;o+=(o?"+":"")+r}return o}const h=3e3,p="topRight";function i(t){m.warning({message:t,timeout:h,position:p,close:!1})}function v(t){m.error({message:t,timeout:h,position:p,close:!1})}function b(t,e=!1){if(t.length===0){v("Sorry, there are no images matching your search query. Please try again!");return}const o=O(t);e?d.insertAdjacentHTML("beforeend",o):d.innerHTML=o}const O=t=>t.map(e=>`<li class="gallery-item">
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
`).join(""),u=document.querySelector(".action-form"),l=document.querySelector(".loader"),d=document.querySelector(".gallery");let c="";u.addEventListener("submit",P);function P(t){if(t.preventDefault(),c=u.elements.query.value.trim(),c==="")return i("Please enter a valid query!");d.innerHTML="",l.classList.remove("is-hidden"),S(c).then(e=>{e.hits.length>0?b(e.hits):i("No results found for your search."),l.classList.add("is-hidden"),u.reset(),T.refresh()}).catch(e=>{l.classList.add("is-hidden"),i("Sorry, something went wrong. Please try again!")})}let T=new y(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map

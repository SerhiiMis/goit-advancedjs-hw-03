import{i as h,S}from"./assets/vendor-Dg3uDB0e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const b="46684790-07ddeec26d5334b4228888751",E="https://pixabay.com/api/?",P="q",d=new URLSearchParams({key:b,orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:12});function p(s,e=1){const r=$(s);d.set(P,r),d.set("page",e);const o=E+d.toString();return console.log("API URL:",o),fetch(o).then(t=>{if(!t.ok)throw new Error(`Error fetching images with status ${t.status} and response ${t.statusText}`);return t.json()})}function $(s){const e=s.split(/\s+/);let r="";for(const o of e){if((r+"+"+o).length>100)break;r+=(r?"+":"")+o}return r}const g=3e3,y="topRight";function u(s){h.warning({message:s,timeout:g,position:y,close:!1})}function I(s){h.error({message:s,timeout:g,position:y,close:!1})}function L(s,e=!1){if(s.length===0){I("Sorry, there are no images matching your search query. Please try again!");return}const r=T(s);e?f.insertAdjacentHTML("beforeend",r):f.innerHTML=r}const T=s=>s.map(e=>`<li class="gallery-item">
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
`).join(""),m=document.querySelector(".action-form"),i=document.querySelector(".loader"),w=document.getElementById("load-more"),f=document.querySelector(".gallery");let l=1,n="";m.addEventListener("submit",O);w.addEventListener("click",U);function O(s){if(s.preventDefault(),n=m.elements.query.value.trim(),l=1,n==="")return u("Please enter a valid query!");f.innerHTML="",i.classList.remove("is-hidden"),p(n,l).then(e=>{L(e.hits),m.reset(),i.classList.add("is-hidden"),w.style.display="block",v.refresh()}).catch(e=>{console.error("Error fetching images:",e),i.classList.add("is-hidden"),u("Sorry, something went wrong. Please try again!")})}function U(){l+=1,i.classList.remove("is-hidden"),p(n,l).then(s=>{L(s.hits,!0),i.classList.add("is-hidden"),v.refresh()}).catch(s=>{console.error("Error loading more images:",s),i.classList.add("is-hidden"),u("Unable to load more images. Please try again later.")})}let v=new S(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map

/* empty css                      */import{a as b,S as q,i as d}from"./assets/vendor-F1LeQrrD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const B="https://pixabay.com/api/",P="54662784-b388709a9b98f0fcdc7213397";async function m(r,t=1){const i={key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await b.get(B,{params:i})).data}const p=document.querySelector(".gallery"),u=document.querySelector(".loader-container"),y=document.querySelector(".load-more"),$=new q(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(r=[]){const t=r.map(({webformatURL:i,largeImageURL:s,tags:e,likes:o,views:n,comments:w,downloads:S})=>`<li class="gallery-item">
            <a class="gallery-item-link" href="${s}"><img class="gallery-image" src="${i}" alt="${e}" title=""></a>
                <ul class="info-list">
                        <li class="info-item">
                            <p class="info-title">Likes</p>
                            <p class="info-value">${o}</p>
                        </li>

                        <li class="info-item">
                            <p class="info-title">Views</p>
                            <p class="info-value">${n}</p>
                        </li>

                        <li class="info-item">
                            <p class="info-title">Comments</p>
                            <p class="info-value">${w}</p>
                        </li>

                        <li class="info-item">
                            <p class="info-title">Downloads</p>
                            <p class="info-value">${S}</p>
                        </li>
                </ul>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),$.refresh()}function M(){p.innerHTML=""}function g(){u.classList.contains("hidden")&&u.classList.remove("hidden")}function L(){u.classList.contains("hidden")||u.classList.add("hidden")}function v(){y.classList.remove("hidden")}function a(){y.classList.add("hidden")}let l=1,c="",f=0;const O=document.querySelector(".form"),E=document.querySelector(".form-input"),H=document.querySelector(".load-more");O.addEventListener("submit",async r=>{if(r.preventDefault(),c=E.value.trim(),!!c){l=1,M(),a(),g();try{const t=await m(c,l);if(f=t.totalHits,t.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits),f>15&&v()}catch{d.error({message:"Something went wrong. Try again!"}),a()}finally{L()}}});H.addEventListener("click",async()=>{l+=1,g(),a();try{const r=await m(c,l);h(r.hits),l*15>=f?(a(),d.info({message:"We're sorry, but you've reached the end of search results."})):v();const i=document.querySelector(".gallery-item");if(i){const s=i.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch{d.error({message:"Something went wrong. Try again!"}),a()}finally{L()}});
//# sourceMappingURL=index.js.map

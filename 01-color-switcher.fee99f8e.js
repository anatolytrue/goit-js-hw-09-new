const t=document.body,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");let o=null;function a(){const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}e.addEventListener("click",(function(){o=setInterval(a,1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.fee99f8e.js.map

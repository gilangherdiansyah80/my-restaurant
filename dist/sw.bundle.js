if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let t={};const d=e=>r(e,s),u={module:{uri:s},exports:t,require:d};n[s]=Promise.all(i.map((e=>u[e]||d(e)))).then((e=>(a(...e),t)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"016b4a6cdced82ab3aa1.ttf",revision:null},{url:"1bac2991f3dbfa237aec.woff2",revision:null},{url:"50701fbb8177c2dde530.ttf",revision:null},{url:"878f31251d960bd6266f.woff2",revision:null},{url:"app.bundle.js",revision:"090fd56b61b709bda386f8afcec99350"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"b041b1fa4fe241b23445.woff2",revision:null},{url:"b6879d41b0852f01ed5b.woff2",revision:null},{url:"c6a0c95b0a95c4553700.ttf",revision:null},{url:"d75e3fd1eb12e9bd6655.ttf",revision:null},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"icons/kage-restaurant 128x128.png",revision:"15e7c54ac5b6bd4e6168eaf8a266d3d3"},{url:"icons/kage-restaurant 192x192.png",revision:"a55e701bc7da2b3a1091de61fec98315"},{url:"icons/kage-restaurant 256x256.png",revision:"f7acce1d70f99da5dc3317582334c236"},{url:"icons/kage-restaurant 512x512.png",revision:"c7bb6d45ae5e4793585633197d09598c"},{url:"icons/kage-restaurant 64x64.png",revision:"22d9fd7305d9d08a25474ad369b6af43"},{url:"icons/kage-restaurant 96x96.png",revision:"3460c94d6339c530879f66783e367e55"},{url:"index.html",revision:"e987605afb1af315921efee60a1e003b"},{url:"kage-app.webmanifest",revision:"d8643437b00fd42830c4038ce12603ce"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
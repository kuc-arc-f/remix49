import{r as n,j as e}from"./jsx-runtime-56DGgGmo.js";import{u as p,w as j,x as m,y as f,_ as y,O as S,M as w,L as g,S as k}from"./components-g63Zh_3W.js";/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:t,...l}){let{isSpaMode:c}=p(),i=j(),h=m();f({getKey:t,storageKey:a});let u=n.useMemo(()=>{if(!t)return null;let s=t(i,h);return s!==i.key?s:null},[]);if(c)return null;let d=((s,x)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let o=JSON.parse(sessionStorage.getItem(s)||"{}")[x||window.history.state.key];typeof o=="number"&&window.scrollTo(0,o)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return n.createElement("script",y({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${JSON.stringify(a)}, ${JSON.stringify(u)})`}}))}function L(t){return e.jsxs("div",{children:[e.jsx("span",{children:"ApiTest"}),e.jsx("hr",{}),e.jsx("a",{href:"/",children:"[ home ]"}),e.jsx("a",{href:"/about",children:"[ about ]"}),e.jsx("a",{href:"/test",children:"[ Test ]"}),e.jsx("a",{href:"/apitest",children:"[ ApiTest ]"}),e.jsx("hr",{})]})}function b({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("link",{href:"/index.css",rel:"stylesheet"}),e.jsx("script",{src:"https://cdn.tailwindcss.com"}),e.jsx(w,{}),e.jsx(g,{})]}),e.jsxs("body",{children:[e.jsx(L,{}),t,e.jsx(M,{}),e.jsx(k,{})]})]})}function v(){return e.jsx(S,{})}export{b as Layout,v as default};

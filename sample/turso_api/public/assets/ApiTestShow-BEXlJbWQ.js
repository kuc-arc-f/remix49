import{j as s}from"./jsx-runtime-56DGgGmo.js";import{H as n,L as l,C as a}from"./Crud-CLV5VTZL.js";import{z as i}from"./components-g63Zh_3W.js";const d={get:async function(o){try{let e={};const t={id:o};return e=(await n.post(t,"/test/get")).data,e}catch(e){throw console.error(e),new Error("Error, get")}},delete:async function(o){try{let e=!1;const t={id:o},r=await n.post(t,"/test/delete");return console.log(r),r.ret===l.OK_CODE&&(e=!0),e}catch(e){console.error(e)}},update:async function(o){try{let e=!1;const t=a.getInputValues();t.userId=0,t.id=o,t.completed=0,console.log(t);const r=await n.post(t,"/test/update");return console.log(r),r.ret===l.OK_CODE&&(e=!0),a.clearInputValues(),e}catch(e){throw console.error("Error, update"),console.error(e),new Error("Error , update")}}};let c=0;const h=()=>[{title:"New Remix App"},{name:"description",content:"Welcome to Remix!"}];function x(){const{data:o,id:e}=i();console.log(o),console.log("id=",e),c=e;const t=async function(){try{console.log("itemId=",c),await d.delete(c)&&(alert("OK, delete"),location.href="/apitest")}catch(r){throw console.error("Error, deleteProc"),console.error(r),new Error("Error , deleteProc")}};return s.jsxs("div",{className:"container mx-auto my-2 px-8 bg-white",children:[s.jsx("h1",{className:"text-4xl font-bold",children:"ApiTestShow.tsx"}),s.jsx("hr",{className:"my-2"}),s.jsx("h1",{className:"text-4xl font-bold",children:o.title}),s.jsx("hr",{className:"my-2"}),s.jsxs("p",{children:["id: ",o.id,", ",o.createdAt]}),s.jsx("hr",{className:"my-2"}),s.jsx("button",{onClick:()=>t(),children:"Delete"}),s.jsx("hr",{})]})}export{x as default,h as meta};

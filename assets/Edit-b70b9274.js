import{a as i,j as e,N as m}from"./index-3a94ed9b.js";import{F as u}from"./Form-ad65631f.js";import{d as c,e as n}from"./store-2b990609.js";import"./index.esm-55b2d53c.js";import"./index-7be5f59f.js";import"./index-79874d85.js";const j=()=>{const{id:r}=i(),{data:t,error:o,isFetching:s}=c(r||0),{mutate:l}=n();return o||!r?e.jsx(m,{to:"/category",replace:!0}):e.jsx("div",{className:"flex h-full flex-col p-8",children:e.jsx("div",{className:"flex flex-1 flex-col gap-4 rounded bg-white p-4 shadow-md",children:s?null:e.jsx(u,{currentValue:t==null?void 0:t.data,onSave:a=>a&&l(a)})})})};export{j as default};

import{a as i,j as e,N as u}from"./index-e0ece91c.js";import{F as c}from"./Form-43c39faf.js";import{d,e as m}from"./store-22369f75.js";import"./index.esm-b58ae8e1.js";import"./index-79874d85.js";const j=()=>{const{id:r}=i(),{data:s,error:l,isFetching:a}=d(r||0),{mutate:o}=m();return l||!r?e.jsx(u,{to:"/product",replace:!0}):e.jsx("div",{className:"flex h-full flex-col p-8",children:e.jsx("div",{className:"flex flex-1 flex-col gap-4 rounded bg-white p-4 shadow-md",children:a?null:e.jsx(c,{currentValue:s==null?void 0:s.data,onSave:t=>t&&o(t)})})})};export{j as default};

import{u as l,j as e,a as r}from"./index-66a2a936.js";import{u as d,T as i}from"./lodash-0f15b794.js";import{B as n}from"./index.esm-48d4374e.js";const g=()=>{const{filter:t,setFilter:a}=d(),o=l();return e("div",{className:"flex h-full flex-col p-8",children:r("div",{className:"flex flex-1 flex-col rounded bg-white shadow-md",children:[r("div",{className:"flex justify-end gap-4 p-4",children:[e("input",{required:!0,type:"text",name:"keyword",id:"keyword",autoComplete:"given-name",placeholder:"Keyword",className:"block w-52 rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:t.keyword,onChange:s=>a({keyword:s.target.value})}),r("button",{onClick:()=>o("/product/tambah"),className:"flex items-center rounded bg-blue-500 p-2 text-white hover:shadow-lg",children:[e(n,{fontSize:"19px"}),"Tambah Product"]})]}),e(i,{})]})})};export{g as default};

import{r as m,j as e,b as c}from"./index-3a94ed9b.js";import{a as g}from"./index.esm-55b2d53c.js";import{C as x}from"./store-2b990609.js";const p={id:void 0,category:"",image:""},j=({currentValue:d,onSave:l})=>{const[a,n]=m.useState(d||p),[s,i]=m.useState(null),o=t=>n(r=>({...r,[t.target.name]:t.target.value}));return e.jsxs("form",{onSubmit:t=>{t.preventDefault();const r=x.safeParse(a);r.success?(i(null),a&&l&&l(a)):i(r.error.formErrors)},children:[e.jsx("div",{className:"mb-4 rounded-md bg-gray-50 p-4",children:e.jsxs("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[e.jsx("div",{className:"md:col-span-1",children:e.jsxs("div",{className:"px-4 sm:px-0",children:[e.jsx("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Category"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Tambah/Ubah data kategori untuk ditampilkan di laman katalog"})]})}),e.jsx("div",{className:"mt-5 md:col-span-2 md:mt-0",children:e.jsx("div",{className:"shadow sm:overflow-hidden sm:rounded-md",children:e.jsx("div",{className:"space-y-6 bg-white px-4 py-5 sm:p-6",children:e.jsx("div",{className:"grid grid-cols-4 gap-6",children:e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Nama Category *"}),e.jsx("input",{type:"text",name:"category",id:"category",autoComplete:"given-name",placeholder:"Nama Category",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(a==null?void 0:a.category)||"",onChange:o}),s!=null&&s.fieldErrors.category?e.jsx("p",{className:"mt-2 text-sm text-red-500",children:s==null?void 0:s.fieldErrors.category[0]}):null]})})})})})]})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs(c,{type:"submit",className:"gap-3",variant:"success",children:[e.jsx(g,{fontSize:"19px"}),"Save"]})})]})};export{j as F};

import{r,j as e,b as c}from"./index-e0ece91c.js";import{a as g}from"./index.esm-b58ae8e1.js";import{R as x}from"./store-22369f75.js";const p={id:void 0,name:"",username:"",password:"",confirmPassword:"",phoneNumber:"",email:"",address:"",instagram:"",shopee:"",tokopedia:"",isAdmin:!1},f=({currentValue:m,onSave:t})=>{const[s,o]=r.useState(m||p),[a,d]=r.useState(null),l=n=>o(i=>({...i,[n.target.name]:n.target.value}));return e.jsxs("form",{onSubmit:n=>{n.preventDefault();const i=x.safeParse(s);i.success?(d(null),s&&t&&t(s)):d(i.error.formErrors)},children:[e.jsxs("div",{className:"rounded-md bg-gray-50 p-4",children:[e.jsxs("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[e.jsx("div",{className:"md:col-span-1",children:e.jsxs("div",{className:"px-4 sm:px-0",children:[e.jsx("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Profil"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Isi profil data reseller aktif"})]})}),e.jsx("div",{className:"mt-5 md:col-span-2 md:mt-0",children:e.jsx("div",{className:"shadow sm:overflow-hidden sm:rounded-md",children:e.jsxs("div",{className:"space-y-6 bg-white px-4 py-5 sm:p-6",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-6",children:[e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Nama Reseller *"}),e.jsx("input",{type:"text",name:"name",id:"name",autoComplete:"given-name",placeholder:"Nama Reseller",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(s==null?void 0:s.name)||"",onChange:l}),a!=null&&a.fieldErrors.name?e.jsx("p",{className:"mt-2 text-sm text-red-500",children:a==null?void 0:a.fieldErrors.name[0]}):null]}),e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:"Username *"}),e.jsx("input",{type:"text",name:"username",id:"username",autoComplete:"given-name",placeholder:"Username",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(s==null?void 0:s.username)||"",onChange:l}),a!=null&&a.fieldErrors.username?e.jsx("p",{className:"mt-2 text-sm text-red-500",children:a==null?void 0:a.fieldErrors.username[0]}):null]}),e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email"}),e.jsx("input",{type:"email",name:"email",id:"email",autoComplete:"given-name",placeholder:"Email",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(s==null?void 0:s.email)||"",onChange:l})]}),e.jsxs("div",{className:"col-span-4",children:[e.jsxs("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:["Password ",s.id?"*":""]}),e.jsx("input",{type:"password",name:"password",id:"password",autoComplete:"given-name",placeholder:"Password",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(s==null?void 0:s.password)||"",onChange:l}),a!=null&&a.fieldErrors.password?e.jsx("p",{className:"mt-2 text-sm text-red-500",children:a==null?void 0:a.fieldErrors.password[0]}):null]}),e.jsxs("div",{className:"col-span-4",children:[e.jsxs("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium leading-6 text-gray-900",children:["Masukkan ulang password ",s.id?"*":""]}),e.jsx("input",{type:"password",name:"confirmPassword",id:"confirmPassword",autoComplete:"given-name",placeholder:"Masukkan ulang password",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:s.confirmPassword||"",onChange:l}),a!=null&&a.fieldErrors.confirmPassword?e.jsx("p",{className:"mt-2 text-sm text-red-500",children:a==null?void 0:a.fieldErrors.confirmPassword[0]}):null]}),e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"No. Telp *"}),e.jsx("input",{type:"phoneNumber",name:"phoneNumber",id:"phoneNumber",autoComplete:"given-name",placeholder:"No. Telp",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(s==null?void 0:s.phoneNumber)||"",onChange:l}),a!=null&&a.fieldErrors.phoneNumber?e.jsx("p",{className:"mt-2 text-sm text-red-500",children:a==null?void 0:a.fieldErrors.phoneNumber[0]}):null]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"about",className:"block text-sm font-medium leading-6 text-gray-900",children:"Address *"}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{id:"address",name:"address",rows:3,className:"mt-1 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6",placeholder:"Masukkan alamat reseller",value:(s==null?void 0:s.address)||"",onChange:l})})]})]})})})]}),e.jsx("div",{className:"block","aria-hidden":"true",children:e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"border-t border-gray-200"})})}),e.jsxs("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[e.jsx("div",{className:"md:col-span-1",children:e.jsxs("div",{className:"px-4 sm:px-0",children:[e.jsx("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Akun Reseller"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Masukkan akun social media dan akun toko online reseller untuk ditampilkan pada laman produk yang reseller jual"})]})}),e.jsx("div",{className:"mt-5 hidden md:col-span-2 md:mt-0",children:e.jsx("div",{className:"shadow sm:overflow-hidden sm:rounded-md",children:e.jsx("div",{className:"space-y-6 bg-white px-4 py-5 sm:p-6",children:e.jsxs("div",{className:"grid grid-cols-4 gap-6",children:[e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{htmlFor:"instagram",className:"block text-sm font-medium leading-6 text-gray-900",children:"Instagram"}),e.jsx("input",{type:"text",name:"instagram",id:"instagram",autoComplete:"given-name",placeholder:"Instagram",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(s==null?void 0:s.instagram)??"https://www.instagram.com/",onChange:l})]}),e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{htmlFor:"instagram",className:"block text-sm font-medium leading-6 text-gray-900",children:"Shopee"}),e.jsx("input",{type:"text",name:"shopee",id:"shopee",autoComplete:"given-name",placeholder:"Shopee",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(s==null?void 0:s.shopee)||"",onChange:l})]}),e.jsxs("div",{className:"col-span-4",children:[e.jsx("label",{htmlFor:"tokopedia",className:"block text-sm font-medium leading-6 text-gray-900",children:"Tokopedia"}),e.jsx("input",{type:"text",name:"tokopedia",id:"tokopedia",autoComplete:"given-name",placeholder:"Tokopedia",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(s==null?void 0:s.tokopedia)||"",onChange:l})]})]})})})})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsxs(c,{type:"submit",className:"gap-3",variant:"success",children:[e.jsx(g,{fontSize:"19px"}),"Save"]})})]})};export{f as F};

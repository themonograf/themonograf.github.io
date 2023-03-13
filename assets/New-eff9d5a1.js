import{r as g,j as e,P as p,i as h,c as j,d as b,f,u as v,F as y,H as w,b as m}from"./index-e0ece91c.js";const N=({options:l,value:n,onChange:c,placeholder:s="Select Data"})=>{const[r,i]=g.useState(null),d=l==null?void 0:l.find(t=>t.value===n),u=t=>{c(t),i(null)};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:t=>i(t.currentTarget),className:"inline-flex items-center rounded-md border border-gray-200 bg-white py-2 px-2 text-gray-700 hover:border-blue-600 focus:border-blue-600",children:[e.jsx("span",{className:"mr-1",children:(d==null?void 0:d.label)??s}),e.jsx("span",{className:"mx-1 h-5 w-[1px] bg-gray-200"}),e.jsxs("svg",{className:"h-4 w-4 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[e.jsx("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})," "]})]}),e.jsx(p,{overlay:!0,anchorRef:r,onClose:()=>i(null),className:"min-w-[200px]",children:e.jsx("div",{className:"min-w-full overflow-hidden rounded-md border border-gray-200 transition-all",children:l==null?void 0:l.map(t=>e.jsx("div",{role:"button","aria-hidden":!0,className:"cursor-pointer bg-white p-2 hover:bg-gray-100",onClick:()=>u&&u(t),children:t.label},t.value))})})]})},C=async(l,n)=>(await h.post("/upload/bulk",l,n)).data,S=l=>{const{toggleLoader:n}=j(),{errorSnackbar:c,successSnackbar:s}=f();return b({mutationFn:r=>C(r,{headers:{"Content-Type":"multipart/form-data"}}),onMutate:n,onSuccess:r=>{l(r),r.success?s("Successfully Upload Image(s)"):c("Failed upload image. Please try again later")},onError:r=>{c("Failed upload image. Please try again later")},onSettled:n})},F=()=>{const l=v(),[n,c]=g.useState(""),[s,r]=g.useState([]),{mutate:i}=S(a=>{a.success&&l("/images")}),d=a=>{const o=Object.entries(a.target.files??{}).map(x=>x[1]);a.target.value="",r(o)},u=a=>{r(s==null?void 0:s.filter(o=>o.name!==a.name))},t=()=>{const a=new FormData;a.append("category",n);for(let o=0;o<s.length;o++)a.append("image",s[o]);i(a)};return e.jsx("div",{className:"flex h-full flex-col p-8",children:e.jsxs("div",{className:"flex flex-1 flex-col gap-4 rounded bg-white p-4 shadow-md",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{}),e.jsxs("div",{id:"uploadAs",className:"flex items-center gap-4",children:[e.jsx("span",{className:"flex",children:"Upload as"}),e.jsx(N,{value:n,onChange:a=>c(a.value),options:[{label:"Product",value:"product"},{label:"Category",value:"category"},{label:"Banner",value:"banner"}]})]})]}),e.jsx("input",{id:"fileInput",disabled:s.length>=10,type:"file",onChange:d,multiple:!0,size:2e3,accept:"image/png, image/jpg, image/jpeg",className:"hidden"}),e.jsxs("label",{htmlFor:"fileInput",className:"flex h-full w-full flex-col items-center justify-center gap-5 border-b",children:[e.jsx(y,{className:"",fontSize:"80px"}),e.jsx("span",{children:"Click Anywhere to Upload Image"})]}),e.jsx("div",{className:"flex gap-4",children:s==null?void 0:s.map(a=>e.jsxs("div",{className:"relative",children:[e.jsx("img",{alt:"",src:URL.createObjectURL(a),className:"h-16"}),e.jsx("div",{"aria-hidden":!0,onClick:()=>u(a),className:"absolute -right-2 -top-2 cursor-pointer rounded-full bg-white text-red-500",children:e.jsx(w,{fontSize:"20px"})})]},a.name))}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx(m,{onClick:()=>l("/images"),variant:"error",children:"Cancel"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(m,{onClick:()=>r([]),variant:"error",children:"Reset"}),e.jsx(m,{disabled:!s.length||s.length>10||n==="",onClick:t,children:"Submit"})]})]})]})})};export{F as default};

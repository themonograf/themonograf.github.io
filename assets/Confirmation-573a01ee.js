import{r as c,j as e,s as x,n as p,I as g,b as m}from"./index-e00e5dec.js";const v=({ref:n,open:a,size:l="sm",className:r,onClose:i,children:o})=>{const[s,d]=c.useState(!1),[u,f]=c.useState(!1);c.useEffect(()=>{if(a)f(!0),d(!0);else{f(!1);const t=setTimeout(()=>{d(!1)},200);return()=>clearTimeout(t)}},[a]);const y=t=>{t.target===t.currentTarget&&i()},j=t=>{t.key==="Escape"&&i()},h=e.jsx("div",{className:"dialog-container flex h-full items-center justify-center outline-none transition-opacity delay-[0] duration-200",style:{opacity:u?1:0},children:e.jsx("div",{ref:n,className:`${x.dialogBox} ${x[l||""]} ${r||""}`,children:o})});return a||s?p.createPortal(e.jsxs("div",{role:"presentation",className:"root fixed inset-0 z-[1300]",children:[e.jsx("div",{role:"presentation",className:"overlay fixed inset-0 flex items-center justify-center overflow-auto bg-black/20 transition-opacity delay-[0] duration-200",style:{opacity:u?1:0},onClick:y,onKeyDown:j,tabIndex:-1,"aria-hidden":!0}),h]}),document.body):null},b=({open:n,title:a,message:l,okLabel:r="OK",closeLabel:i="Cancel",onSubmit:o,onClose:s})=>e.jsxs(v,{open:n,onClose:()=>s&&s(),className:"flex w-full overflow-auto rounded-md bg-white",size:"sm",children:[e.jsxs("div",{className:"flex items-center justify-between p-3",children:[e.jsx("span",{className:"font-bold",children:a}),e.jsx("button",{className:"rounded-full p-2 transition-all hover:bg-gray-100",onClick:s,children:e.jsx(g,{})})]}),e.jsx("div",{className:"flex items-center justify-center p-5",children:l}),e.jsxs("div",{className:"flex items-center justify-end gap-4 p-3",children:[e.jsx(m,{variant:"default",onClick:s,children:i}),e.jsx(m,{onClick:o,className:"px-4",children:r})]})]});export{b as C,v as D};

import{r as V,j as i,s as ce,R as Oe,a as y,c as Q,I as pe,d as ae,G as oe,F as Te}from"./index-66a2a936.js";import{d as Ae,e as Ee,f as ue,l as je}from"./lodash-0f15b794.js";import{u as Me,a as _e}from"./master-7e0ee7a8.js";import{a as Le}from"./index.esm-48d4374e.js";const xe=({ref:e,open:r,size:t="sm",className:n,onClose:a,children:l})=>{const[d,h]=V.useState(!1),[x,N]=V.useState(!1);V.useEffect(()=>{if(r)N(!0),h(!0);else{N(!1);const v=setTimeout(()=>{h(!1)},200);return()=>clearTimeout(v)}},[r]);const u=v=>{v.target===v.currentTarget&&a()},m=v=>{v.key==="Escape"&&a()},g=i("div",{className:"dialog-container flex h-full items-center justify-center outline-none transition-opacity delay-[0] duration-200",style:{opacity:x?1:0},children:i("div",{ref:e,className:`${ce.dialogBox} ${ce[t||""]} ${n||""}`,children:l})});return r||d?Oe.createPortal(y("div",{role:"presentation",className:"root fixed inset-0 z-[1300]",children:[i("div",{role:"presentation",className:"overlay fixed inset-0 flex items-center justify-center overflow-auto bg-black/20 transition-opacity delay-[0] duration-200",style:{opacity:x?1:0},onClick:u,onKeyDown:m,tabIndex:-1,"aria-hidden":!0}),g]}),document.body):null};function ye(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t}var re;(function(e){e.event="event",e.props="prop"})(re||(re={}));function z(){}function te(e){return!!(e||"").match(/\d/)}function ee(e){return e==null}function be(e){return typeof e=="number"&&isNaN(e)}function Ne(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Ke(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Ge(e,r,t){var n=Ke(t),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+r)}function He(e){var r=V.useRef(e);r.current=e;var t=V.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r.current.apply(r,n)});return t.current}function se(e,r){r===void 0&&(r=!0);var t=e[0]==="-",n=t&&r;e=e.replace("-","");var a=e.split("."),l=a[0],d=a[1]||"";return{beforeDecimal:l,afterDecimal:d,hasNegation:t,addNegation:n}}function $e(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var t=e.split("."),n=t[0].replace(/^0+/,"")||"0",a=t[1]||"";return(r?"-":"")+n+(a?"."+a:"")}function we(e,r,t){for(var n="",a=t?"0":"",l=0;l<=r-1;l++)n+=e[l]||a;return n}function fe(e,r){return Array(r+1).join(e)}function Se(e){var r=e+"",t=r[0]==="-"?"-":"";t&&(r=r.substring(1));var n=r.split(/[eE]/g),a=n[0],l=n[1];if(l=Number(l),!l)return t+a;a=a.replace(".","");var d=1+l,h=a.length;return d<0?a="0."+fe("0",Math.abs(d))+a:d>=h?a=a+fe("0",d-h):a=(a.substring(0,d)||"0")+"."+a.substring(d),t+a}function me(e,r,t){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||t)&&r,a=se(e),l=a.beforeDecimal,d=a.afterDecimal,h=a.hasNegation,x=parseFloat("0."+(d||"0")),N=d.length<=r?"0."+d:x.toFixed(r),u=N.split("."),m=l.split("").reverse().reduce(function(s,k,S){return s.length>S?(Number(s[0])+Number(k)).toString()+s.substring(1,s.length):k+s},u[0]),g=we(u[1]||"",r,t),v=h?"-":"",o=n?".":"";return""+v+m+o+g}function W(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",r),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}function ze(e,r){for(var t=0,n=0,a=e.length,l=r.length;e[t]===r[t]&&t<a;)t++;for(;e[a-1-n]===r[l-1-n]&&l-n>t&&a-n>t;)n++;return{from:{start:t,end:a-n},to:{start:t,end:l-n}}}function qe(e,r,t){return Math.min(Math.max(e,r),t)}function ge(e){return Math.max(e.selectionStart,e.selectionEnd)}function Ue(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function We(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Ze(e,r,t,n,a,l){var d=a.findIndex(function(j){return j}),h=e.slice(0,d);!r&&!t.startsWith(h)&&(t=h+t,n=n+h.length);for(var x=t.length,N=e.length,u={},m=new Array(x),g=0;g<x;g++){m[g]=-1;for(var v=0,o=N;v<o;v++)if(t[g]===e[v]&&u[v]!==!0){m[g]=v,u[v]=!0;break}}for(var s=n;s<x&&(m[s]===-1||!l(t[s]));)s++;var k=s===x||m[s]===-1?N:m[s];for(s=n-1;s>0&&m[s]===-1;)s--;var S=s===-1||m[s]===-1?0:m[s]+1;return S>k?k:n-S<k-n?S:k}function ve(e,r,t,n){var a=e.length;if(r=qe(r,0,a),n==="left"){for(;r>=0&&!t[r];)r--;r===-1&&(r=t.indexOf(!0))}else{for(;r<=a&&!t[r];)r++;r>a&&(r=t.lastIndexOf(!0))}return r===-1&&(r=a),r}function Je(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),t=0,n=r.length;t<n;t++)r[t]=Boolean(te(e[t])||te(e[t-1]));return r}function Ce(e,r,t,n,a,l){l===void 0&&(l=z);var d=V.useRef(),h=He(function(g){var v,o;return ee(g)||be(g)?(o="",v=""):typeof g=="number"||t?(o=typeof g=="number"?Se(g):g,v=n(o)):(o=a(g,void 0),v=g),{formattedValue:v,numAsString:o}}),x=V.useState(function(){return h(r)}),N=x[0],u=x[1],m=function(g,v){u({formattedValue:g.formattedValue,numAsString:g.value}),l(g,v)};return V.useMemo(function(){ee(e)?d.current=void 0:(d.current=h(e),u(d.current))},[e,h]),[N,m]}function Qe(e){return e.replace(/[^0-9]/g,"")}function Xe(e){return e}function Ye(e){var r=e.type;r===void 0&&(r="text");var t=e.displayType;t===void 0&&(t="input");var n=e.customInput,a=e.renderText,l=e.getInputRef,d=e.format;d===void 0&&(d=Xe);var h=e.removeFormatting;h===void 0&&(h=Qe);var x=e.defaultValue,N=e.valueIsNumericString,u=e.onValueChange,m=e.isAllowed,g=e.onChange;g===void 0&&(g=z);var v=e.onKeyDown;v===void 0&&(v=z);var o=e.onMouseUp;o===void 0&&(o=z);var s=e.onFocus;s===void 0&&(s=z);var k=e.onBlur;k===void 0&&(k=z);var S=e.value,j=e.getCaretBoundary;j===void 0&&(j=Je);var _=e.isValidInputCharacter;_===void 0&&(_=te);var L=ye(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),q=Ce(S,x,Boolean(N),d,h,u),Z=q[0],R=Z.formattedValue,J=Z.numAsString,H=q[1],K=V.useRef(),b=function(c,f){K.current=c.formattedValue,H(c,f)};V.useEffect(function(){var c=d(J);if(K.current===void 0||c!==K.current){var f=U.current,p=h(c,void 0);$({formattedValue:c,numAsString:p,input:f,setCaretPosition:!0,source:re.props,event:void 0})}});var w=V.useState(!1),A=w[0],O=w[1],U=V.useRef(null),F=V.useRef({setCaretTimeout:null,focusTimeout:null});V.useEffect(function(){return O(!0),function(){clearTimeout(F.current.setCaretTimeout),clearTimeout(F.current.focusTimeout)}},[]);var M=d,G=function(c,f){var p=parseFloat(f);return{formattedValue:c,value:f,floatValue:isNaN(p)?void 0:p}},E=function(c,f,p){W(c,f),F.current.setCaretTimeout=setTimeout(function(){c.value===p&&W(c,f)},0)},B=function(c,f,p){return ve(c,f,j(c),p)},X=function(c,f,p){var D=j(f),I=Ze(f,R,c,p,D,_);return I=ve(f,I,D),I},$=function(c){var f=c.formattedValue;f===void 0&&(f="");var p=c.input,D=c.setCaretPosition;D===void 0&&(D=!0);var I=c.source,C=c.event,P=c.numAsString,T=c.caretPos;if(p){if(T===void 0&&D){var Y=c.inputValue||p.value,le=ge(p);p.value=f,T=X(Y,f,le)}p.value=f,D&&T!==void 0&&E(p,T,f)}f!==R&&b(G(f,P),{event:C,source:I})},ke=function(c,f,p){var D=ze(R,c),I=Object.assign(Object.assign({},D),{lastValue:R}),C=h(c,I),P=M(C);if(C=h(P,void 0),m&&!m(G(P,C))){var T=f.target,Y=ge(T),le=X(c,R,Y);return E(T,le,R),!1}return $({formattedValue:P,numAsString:C,inputValue:c,event:f,source:p,setCaretPosition:!0,input:f.target}),!0},De=function(c){var f=c.target,p=f.value,D=ke(p,c,re.event);D&&g(c)},Ie=function(c){var f=c.target,p=c.key,D=f.selectionStart,I=f.selectionEnd,C=f.value;C===void 0&&(C="");var P;if(p==="ArrowLeft"||p==="Backspace"?P=Math.max(D-1,0):p==="ArrowRight"?P=Math.min(D+1,C.length):p==="Delete"&&(P=D),P===void 0||D!==I){v(c);return}var T=P;if(p==="ArrowLeft"||p==="ArrowRight"){var Y=p==="ArrowLeft"?"left":"right";T=B(C,P,Y)}else p==="Delete"&&!_(C[P])?T=B(C,P,"right"):p==="Backspace"&&!_(C[P])&&(T=B(C,P,"left"));T!==P&&E(f,T,C),c.isUnitTestRun&&E(f,T,C),v(c)},Ve=function(c){var f=c.target,p=f.selectionStart,D=f.selectionEnd,I=f.value;if(I===void 0&&(I=""),p===D){var C=B(I,p);C!==p&&E(f,C,I)}o(c)},Pe=function(c){c.persist&&c.persist();var f=c.target;U.current=f,F.current.focusTimeout=setTimeout(function(){var p=f.selectionStart,D=f.selectionEnd,I=f.value;I===void 0&&(I="");var C=B(I,p);C!==p&&!(p===0&&D===I.length)&&E(f,C,I),s(c)},0)},Re=function(c){U.current=null,clearTimeout(F.current.focusTimeout),clearTimeout(F.current.setCaretTimeout),k(c)},Fe=A&&Ue()?"numeric":void 0,de=Object.assign({inputMode:Fe},L,{type:r,value:R,onChange:De,onKeyDown:Ie,onMouseUp:Ve,onFocus:Pe,onBlur:Re});if(t==="text")return a?Q.createElement(Q.Fragment,null,a(R,L)||null):Q.createElement("span",Object.assign({},L,{ref:l}),R);if(n){var Be=n;return Q.createElement(Be,Object.assign({},de,{ref:l}))}return Q.createElement("input",Object.assign({},de,{ref:l}))}function he(e,r){var t=r.decimalScale,n=r.fixedDecimalScale,a=r.prefix;a===void 0&&(a="");var l=r.suffix;l===void 0&&(l="");var d=r.allowNegative,h=r.thousandsGroupStyle;if(h===void 0&&(h="thousand"),e===""||e==="-")return e;var x=ie(r),N=x.thousandSeparator,u=x.decimalSeparator,m=t!==0&&e.indexOf(".")!==-1||t&&n,g=se(e,d),v=g.beforeDecimal,o=g.afterDecimal,s=g.addNegation;return t!==void 0&&(o=we(o,t,!!n)),N&&(v=Ge(v,N,h)),a&&(v=a+v),l&&(o=o+l),s&&(v="-"+v),e=v+(m&&u||"")+o,e}function ie(e){var r=e.decimalSeparator;r===void 0&&(r=".");var t=e.thousandSeparator,n=e.allowedDecimalSeparators;return t===!0&&(t=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:t,allowedDecimalSeparators:n}}function ea(e,r){e===void 0&&(e="");var t=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=t.test(e),l=n.test(e);return e=e.replace(/-/g,""),a&&!l&&r&&(e="-"+e),e}function aa(e,r){return new RegExp("(^-)|[0-9]|"+Ne(e),r?"g":void 0)}function ra(e,r,t){var n;r===void 0&&(r=We(e));var a=t.allowNegative,l=t.prefix;l===void 0&&(l="");var d=t.suffix;d===void 0&&(d="");var h=t.decimalScale,x=r.from,N=r.to,u=N.start,m=N.end,g=ie(t),v=g.allowedDecimalSeparators,o=g.decimalSeparator,s=e[m]===o;if(te(e)&&(e===l||e===d)&&r.lastValue==="")return e;if(m-u===1&&v.indexOf(e[u])!==-1){var k=h===0?"":o;e=e.substring(0,u)+k+e.substring(u+1,e.length)}var S=function(M,G,E){var B=!1,X=!1;l.startsWith("-")?B=!1:M.startsWith("--")?(B=!1,X=!0):d.startsWith("-")&&M.length===d.length?B=!1:M[0]==="-"&&(B=!0);var $=B?1:0;return X&&($=2),$&&(M=M.substring($),G-=$,E-=$),{value:M,start:G,end:E,hasNegation:B}},j=S(e,u,m),_=j.hasNegation;n=j,e=n.value,u=n.start,m=n.end;var L=S(r.lastValue,x.start,x.end),q=L.start,Z=L.end,R=L.value,J=e.substring(u,m);e.length&&R.length&&(q>R.length-d.length||Z<l.length)&&!(J&&d.startsWith(J))&&(e=R);var H=0;e.startsWith(l)?H+=l.length:u<l.length&&(H=u),e=e.substring(H),m-=H;var K=e.length,b=e.length-d.length;e.endsWith(d)?K=b:(m>b||m>e.length-d.length)&&(K=m),e=e.substring(0,K),e=ea(_?"-"+e:e,a),e=(e.match(aa(o,!0))||[]).join("");var w=e.indexOf(o);e=e.replace(new RegExp(Ne(o),"g"),function(M,G){return G===w?".":""});var A=se(e,a),O=A.beforeDecimal,U=A.afterDecimal,F=A.addNegation;return N.end-N.start<x.end-x.start&&O===""&&s&&!parseFloat(U)&&(e=F?"-":""),e}function ta(e,r){var t=r.prefix;t===void 0&&(t="");var n=r.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),l=e[0]==="-";a.fill(!1,0,t.length+(l?1:0));var d=e.length;return a.fill(!1,d-n.length+1,d+1),a}function na(e){var r=ie(e),t=r.thousandSeparator,n=r.decimalSeparator,a=e.prefix;a===void 0&&(a="");var l=e.allowNegative;if(l===void 0&&(l=!0),t===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&l&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+l+`
    `),l=!1),Object.assign(Object.assign({},e),{allowNegative:l})}function ia(e){e=na(e);var r=e.decimalSeparator;r===void 0&&(r="."),e.allowedDecimalSeparators,e.thousandsGroupStyle,e.suffix;var t=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=z);var l=e.onBlur;l===void 0&&(l=z);var d=e.thousandSeparator,h=e.decimalScale,x=e.fixedDecimalScale,N=e.prefix;N===void 0&&(N="");var u=e.defaultValue,m=e.value,g=e.valueIsNumericString,v=e.onValueChange,o=ye(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),s=function(b){return he(b,e)},k=function(b,w){return ra(b,w,e)},S=g;ee(m)?ee(u)||(S=g??typeof u=="number"):S=g??typeof m=="number";var j=function(b){return ee(b)||be(b)?b:(typeof b=="number"&&(b=Se(b)),S&&typeof h=="number"?me(b,h,Boolean(x)):b)},_=Ce(j(m),j(u),Boolean(S),s,k,v),L=_[0],q=L.numAsString,Z=L.formattedValue,R=_[1],J=function(b){var w=b.target,A=b.key,O=w.selectionStart,U=w.selectionEnd,F=w.value;if(F===void 0&&(F=""),O!==U){a(b);return}A==="Backspace"&&F[0]==="-"&&O===N.length+1&&t&&W(w,1);var M=ie(e),G=M.decimalSeparator,E=M.allowedDecimalSeparators;A==="Backspace"&&F[O-1]===G&&h&&x&&(W(w,O-1),b.preventDefault()),E!=null&&E.includes(A)&&F[O]===G&&W(w,O+1);var B=d===!0?",":d;A==="Backspace"&&F[O-1]===B&&W(w,O-1),A==="Delete"&&F[O]===B&&W(w,O+1),a(b)},H=function(b){var w=q;if(w.match(/\d/g)||(w=""),n||(w=$e(w)),x&&h&&(w=me(w,h,x)),w!==q){var A=he(w,e);R({formattedValue:A,value:w,floatValue:parseFloat(w)},{event:b,source:re.event})}l(b)},K=function(b){return b===r?!0:te(b)};return Object.assign(Object.assign({},o),{value:Z,valueIsNumericString:!1,isValidInputCharacter:K,onValueChange:R,format:s,removeFormatting:k,getCaretBoundary:function(b){return ta(b,e)},onKeyDown:J,onBlur:H})}function ne(e){var r=ia(e);return Q.createElement(Ye,Object.assign({},r))}const la=({dialog:e,setDialog:r,currentImages:t,onSubmit:n})=>{var N;const{data:a}=Me("product"),[l,d]=V.useState([]),h=u=>l.map(m=>m.image).includes(u.key),x=u=>{h(u)?d(l.filter(m=>m.image!==u.key)):d(m=>[...m,{isPrimary:!1,image:u.key}])};return V.useEffect(()=>{e||d([])},[e]),y(xe,{open:e,onClose:()=>r(!1),className:"flex w-full overflow-auto rounded-md bg-white",size:"md",children:[y("div",{className:"flex items-center justify-between p-3",children:[i("span",{className:"font-bold",children:"Pilih Gambar Produk"}),i("button",{className:"rounded-full p-2 transition-all hover:bg-gray-100",onClick:()=>r(!1),children:i(pe,{})})]}),i("div",{className:"grid h-0 w-full flex-1 grid-cols-4 gap-6 overflow-auto p-3",children:(N=a==null?void 0:a.data)==null?void 0:N.filter(u=>!t.map(m=>m.image).includes(u.key)).map(u=>i("div",{className:"relative",children:i("img",{"aria-hidden":!0,className:`cursor-pointer rounded-md ${h(u)?"ring-1":""} ring-blue-700`,src:u.key,width:"100%",alt:"",onClick:()=>x(u)})},u.value))}),i("div",{className:"flex items-center justify-end p-3",children:i(ae,{onClick:()=>n&&n(l),children:"Submit"})})]})};function oa(e){return oe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}function sa(e){return oe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"}}]})(e)}function da(e){return oe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z"}}]})(e)}const ca=({open:e,title:r,message:t,okLabel:n="OK",closeLabel:a="Cancel",onSubmit:l,onClose:d})=>y(xe,{open:e,onClose:()=>d&&d(),className:"flex w-full overflow-auto rounded-md bg-white",size:"sm",children:[y("div",{className:"flex items-center justify-between p-3",children:[i("span",{className:"font-bold",children:r}),i("button",{className:"rounded-full p-2 transition-all hover:bg-gray-100",onClick:d,children:i(pe,{})})]}),i("div",{className:"flex items-center justify-center p-5",children:t}),y("div",{className:"flex items-center justify-end gap-4 p-3",children:[i(ae,{variant:"default",onClick:d,children:a}),i(ae,{onClick:l,className:"px-4",children:n})]})]}),va=({currentValue:e=null,onSave:r})=>{var v;const{data:t}=_e(),{mutate:n}=Ae(o=>{o.success&&(m(je.omit(x,["id"])),N(null))}),[a,l]=V.useState(e),[d,h]=V.useState(!1),[x,N]=V.useState(null),u=o=>l(s=>({...s,[o.target.name]:o.target.value})),m=o=>{if(o.id)N(o);else{const s=ue(a==null?void 0:a.productImage),k=s==null?void 0:s.filter(S=>S.image!==o.image);l(S=>({...S,productImage:k}))}},g=o=>{const s=ue(a==null?void 0:a.productImage),k=s==null?void 0:s.map(S=>({...S,isPrimary:S.image===o.image}));l(S=>({...S,productImage:k}))};return y(Te,{children:[y("div",{className:"rounded-md bg-gray-50 p-4",children:[y("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[i("div",{className:"md:col-span-1",children:y("div",{className:"px-4 sm:px-0",children:[i("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Detail Produk"}),i("p",{className:"mt-1 text-sm text-gray-600",children:"Detail lengkap seputar produk yang akan dijual"})]})}),i("div",{className:"mt-5 md:col-span-2 md:mt-0",children:i("div",{className:"shadow sm:overflow-hidden sm:rounded-md",children:y("div",{className:"space-y-6 bg-white px-4 py-5 sm:p-6",children:[y("div",{className:"grid grid-cols-4 gap-6",children:[y("div",{className:"col-span-2",children:[i("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Nama Produk *"}),i("input",{required:!0,type:"text",name:"name",id:"name",autoComplete:"given-name",placeholder:"Nama Produk",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(a==null?void 0:a.name)||"",onChange:u})]}),y("div",{className:"col-span-2",children:[i("label",{htmlFor:"variant",className:"block text-sm font-medium leading-6 text-gray-900",children:"Varian *"}),i("input",{required:!0,type:"text",name:"variant",id:"variant",autoComplete:"given-name",placeholder:"Varian Produk",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(a==null?void 0:a.variant)||"",onChange:u})]}),y("div",{className:"col-span-2",children:[i("label",{htmlFor:"prefix",className:"block text-sm font-medium leading-6 text-gray-900",children:"Prefix *"}),i("input",{required:!0,type:"text",name:"prefix",id:"prefix",autoComplete:"given-name",placeholder:"Prefix",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",value:(a==null?void 0:a.prefix)||"",onChange:u})]}),y("div",{className:"col-span-2",children:[i("label",{htmlFor:"productCategoryId",className:"block text-sm font-medium leading-6 text-gray-900",children:"Kategori *"}),y("select",{required:!0,id:"productCategoryId",name:"productCategoryId",autoComplete:"productCategoryId",className:"mt-2 block w-full rounded-md border-0 bg-white py-2.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",onChange:u,value:a==null?void 0:a.productCategoryId,children:[i("option",{children:"Select"}),t==null?void 0:t.data.map(o=>i("option",{value:o.id,children:o.category},o.id))]})]}),a!=null&&a.id?y("div",{className:"col-span-4",children:[i("label",{htmlFor:"prefix-field",className:"block text-sm font-medium leading-6 text-gray-900",children:"Slug"}),y("div",{className:"mt-2 flex rounded-md shadow-sm",children:[y("span",{className:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm",children:[Ee.ecommerceSite,"/product/"]}),i("input",{disabled:!0,type:"text",name:"slug",id:"prefix-field",className:"block w-full flex-1 rounded-none rounded-r-md border-0 px-2 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"masukkan-slug-product-disini",value:a.slug||"",onChange:u})]})]}):null]}),y("div",{children:[i("label",{htmlFor:"about",className:"block text-sm font-medium leading-6 text-gray-900",children:"Deskripsi *"}),i("div",{className:"mt-2",children:i("textarea",{required:!0,id:"description",name:"description",rows:3,className:"mt-1 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6",placeholder:"Masukkan deskripsi",value:a==null?void 0:a.description,onChange:u})}),i("p",{className:"mt-2 text-sm text-gray-500",children:"Brief description for your product."})]})]})})})]}),i("div",{className:"block","aria-hidden":"true",children:i("div",{className:"py-5",children:i("div",{className:"border-t border-gray-200"})})}),y("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[i("div",{className:"md:col-span-1",children:y("div",{className:"px-4 sm:px-0",children:[i("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Harga Produk"}),i("p",{className:"mt-1 text-sm text-gray-600",children:"Tambahkan harga untuk produk baru"})]})}),i("div",{className:"mt-5 md:col-span-2 md:mt-0",children:i("div",{className:"shadow sm:overflow-hidden sm:rounded-md",children:i("div",{className:"space-y-6 bg-white px-4 py-5 sm:p-6",children:y("div",{className:"grid grid-cols-4 gap-6",children:[y("div",{className:"col-span-4",children:[i("label",{htmlFor:"basicPrice",className:"block text-sm font-medium leading-6 text-gray-900",children:"Harga Awal (Base) *"}),i(ne,{required:!0,placeholder:"Harga Awal",name:"basicPrice",id:"basicPrice",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",allowNegative:!1,thousandSeparator:",",prefix:"Rp. ",decimalScale:0,isAllowed:o=>{const{floatValue:s}=o;return(s||0)<=99999999},value:(a==null?void 0:a.basicPrice)||"",onValueChange:o=>{l(s=>({...s,basicPrice:o.floatValue}))}})]}),y("div",{className:"col-span-4",children:[i("label",{htmlFor:"catalogPrice",className:"block text-sm font-medium leading-6 text-gray-900",children:"Harga Katalog *"}),i(ne,{required:!0,placeholder:"Harga Katalog",name:"catalogPrice",id:"catalogPrice",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",allowNegative:!1,thousandSeparator:",",prefix:"Rp. ",decimalScale:0,isAllowed:o=>{const{floatValue:s}=o;return(s||0)<=99999999},value:(a==null?void 0:a.catalogPrice)||"",onValueChange:o=>{l(s=>({...s,catalogPrice:o.floatValue}))}})]}),y("div",{className:"col-span-4",children:[i("label",{htmlFor:"olshopPrice",className:"block text-sm font-medium leading-6 text-gray-900",children:"Harga Olshop *"}),i(ne,{required:!0,placeholder:"Harga Olshop",name:"olshopPrice",id:"olshopPrice",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",allowNegative:!1,thousandSeparator:",",prefix:"Rp. ",decimalScale:0,isAllowed:o=>{const{floatValue:s}=o;return(s||0)<=99999999},value:(a==null?void 0:a.olshopPrice)||"",onValueChange:o=>{l(s=>({...s,olshopPrice:o.floatValue}))}})]}),y("div",{className:"col-span-4",children:[i("label",{htmlFor:"minLivePrice",className:"block text-sm font-medium leading-6 text-gray-900",children:"Harga Live"}),i(ne,{required:!0,placeholder:"Harga Live",name:"minLivePrice",id:"minLivePrice",className:"mt-2 block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",allowNegative:!1,thousandSeparator:",",prefix:"Rp. ",decimalScale:0,isAllowed:o=>{const{floatValue:s}=o;return(s||0)<=99999999},value:(a==null?void 0:a.minLivePrice)||"",onValueChange:o=>{l(s=>({...s,minLivePrice:o.floatValue}))}})]})]})})})})]}),i("div",{className:"block","aria-hidden":"true",children:i("div",{className:"py-5",children:i("div",{className:"border-t border-gray-200"})})}),y("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[i("div",{className:"md:col-span-1",children:y("div",{className:"px-4 sm:px-0",children:[i("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Gambar"}),i("p",{className:"mt-1 text-sm text-gray-600",children:"Tambahkan gambar produk dari master data gambar"})]})}),i("div",{className:"mt-5 md:col-span-2 md:mt-0",children:i("div",{className:"shadow sm:overflow-hidden sm:rounded-md",children:y("div",{className:"space-y-6 bg-white px-4 py-5 sm:p-6",children:[i("div",{className:"flex justify-end",children:i(ae,{onClick:()=>h(!0),children:"Tambah Gambar"})}),i("div",{className:"grid grid-cols-4 gap-6",children:(v=a==null?void 0:a.productImage)==null?void 0:v.map(o=>y("div",{className:"relative",children:[i("button",{type:"button",onClick:()=>m(o),className:"absolute right-2 top-2 rounded-full border border-blue-500 bg-blue-500 text-white",children:i(oa,{})}),i("button",{title:o.isPrimary?"Primary":"Set To Primary",type:"button",onClick:()=>g(o),className:o.isPrimary?"absolute left-2 top-2 rounded-full border border-blue-500 bg-blue-500 text-white":"absolute left-2 top-2 rounded-full border border-white text-white",children:o.isPrimary?i(da,{}):i(sa,{})}),i("img",{"aria-hidden":!0,className:"cursor-pointer rounded-md",src:(o==null?void 0:o.image)||"",width:"100%",alt:""})]},o.image))})]})})})]})]}),i("div",{className:"flex justify-end",children:y(ae,{type:"submit",onClick:o=>{o.preventDefault(),a&&r&&r(a)},className:"gap-3",variant:"success",children:[i(Le,{fontSize:"19px"}),"Save"]})}),i(la,{currentImages:(a==null?void 0:a.productImage)||[],dialog:d,setDialog:h,onSubmit:o=>{l(s=>({...s,productImage:[...(s==null?void 0:s.productImage)||[],...o]})),h(!1)}}),i(ca,{open:!!x,onClose:()=>N(null),title:"Hapus Gambar",message:"Apakah anda yakin ingin hapus foto ini?",onSubmit:()=>(x==null?void 0:x.id)&&n(x==null?void 0:x.id)})]})};export{va as F};

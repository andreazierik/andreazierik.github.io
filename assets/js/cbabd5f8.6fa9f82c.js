"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[980],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"Supress\xe3o de ru\xeddo no Linux",description:"Utilizando o PulseAudio para habilitar o cancelamento de reu\xeddos"},s=void 0,d={unversionedId:"linux/debian_base",id:"linux/debian_base",title:"Supress\xe3o de ru\xeddo no Linux",description:"Utilizando o PulseAudio para habilitar o cancelamento de reu\xeddos",source:"@site/docs/linux/debian_base.md",sourceDirName:"linux",slug:"/linux/debian_base",permalink:"/linux/debian_base",editUrl:"https://github.com/andreazierik/andreazierik.github.io/blob/main/docs/linux/debian_base.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Supress\xe3o de ru\xeddo no Linux",description:"Utilizando o PulseAudio para habilitar o cancelamento de reu\xeddos"},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/tutorial-extras/translate-your-site"},next:{title:"Instala\xe7\xe3o do Zabbix no formato modular",permalink:"/zabbix/instalacao"}},c={},u=[{value:"Remover ru\xeddos no microfone, via PulseAudio",id:"remover-ru\xeddos-no-microfone-via-pulseaudio",level:2},{value:"Tornando permanente",id:"tornando-permanente",level:3}],p={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"description",context:"Utilizando o PulseAudio para habilitar o cancelamento de reu\xeddos"}),(0,r.kt)("meta",{name:"keywords",context:"supress\xe3o, ru\xeddo, pulseaudio"})),(0,r.kt)("h2",{id:"remover-ru\xeddos-no-microfone-via-pulseaudio"},"Remover ru\xeddos no microfone, via PulseAudio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pactl load-module module-echo-cancel aec_method=webrtc sink_properties=device.description="Noise_Reduction" aec_args="analog_gain_control=0\\ digital_gain_control=0"\n')),(0,r.kt)("p",null,"Essa configura\xe7\xe3o permanece ativa at\xe9 a reinicializa\xe7\xe3o/desligamento da m\xe1quina"),(0,r.kt)("h3",{id:"tornando-permanente"},"Tornando permanente"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vim /etc/pulse/default.pa\n\nload-module module-echo-cancel aec_method=webrtc sink_properties=device.description="Noise_Reduction" aec_args="analog_gain_control=0\\ digital_gain_control=0"\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Um novo dispositivo ser\xe1 adicionado nas entras de som do Linux.\nEle melhora o \xe1udio e remove o controle autom\xe1tico que o PulseAudio faz."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dispositivo de Sa\xedda"),(0,r.kt)("th",{parentName:"tr",align:null},"Dispositivo de Entrada"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{loading:"lazy",alt:"Saida",src:n(980).Z,width:"802",height:"737"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{loading:"lazy",alt:"Entrada",src:n(9393).Z,width:"802",height:"737"}))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\xc9 necess\xe1rio reiniciar a m\xe1quina para tornar definitivo."))),(0,r.kt)("p",null,"Esse tutorial foi baseado em uma postagem no ",(0,r.kt)("a",{parentName:"p",href:"https://www.vivaolinux.com.br/dica/Habilitando-supressao-de-ruido-no-PulseAudio"},"Viva o Linux"),"."))}m.isMDXComponent=!0},9393:function(e,t,n){t.Z=n.p+"assets/images/pulseaudio_entrada-123c9cb512002c2c2ebffe1bfb4cbb79.png"},980:function(e,t,n){t.Z=n.p+"assets/images/pulseaudio_saida-72fee7d1d82a1ece9c796990751d394a.png"}}]);
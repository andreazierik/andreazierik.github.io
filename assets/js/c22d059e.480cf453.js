"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[960],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?t.createElement(g,i(i({ref:n},u),{},{components:a})):t.createElement(g,i({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5942:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Seguran\xe7a com OpenSSH",description:"Implementar mecanismos de seguran\xe7a pro servi\xe7o SSH",keywords:["seguran\xe7a","openssh","chave publica"]},l=void 0,p={unversionedId:"linux/seguranca-openssh",id:"linux/seguranca-openssh",title:"Seguran\xe7a com OpenSSH",description:"Implementar mecanismos de seguran\xe7a pro servi\xe7o SSH",source:"@site/docs/linux/seguranca-openssh.md",sourceDirName:"linux",slug:"/linux/seguranca-openssh",permalink:"/linux/seguranca-openssh",editUrl:"https://github.com/andreazierik/andreazierik.github.io/blob/main/docs/linux/seguranca-openssh.md",tags:[],version:"current",frontMatter:{title:"Seguran\xe7a com OpenSSH",description:"Implementar mecanismos de seguran\xe7a pro servi\xe7o SSH",keywords:["seguran\xe7a","openssh","chave publica"]},sidebar:"tutorialSidebar",previous:{title:"Chrony - Servidor NTP",permalink:"/linux/ntp-server-with-chrony"},next:{title:"Supress\xe3o de ru\xeddo no Linux",permalink:"/linux/supressao-ruido-pulseaudio"}},u={},c=[{value:"Utilizar chave p\xfablica para efetuar login",id:"utilizar-chave-p\xfablica-para-efetuar-login",level:2},{value:"Gerando par de chaves",id:"gerando-par-de-chaves",level:3},{value:"Importando na m\xe1quina destino",id:"importando-na-m\xe1quina-destino",level:3},{value:"Desativar login utilizando senha",id:"desativar-login-utilizando-senha",level:3},{value:"Desativar login com root",id:"desativar-login-com-root",level:3}],d={toc:c};function m(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"utilizar-chave-p\xfablica-para-efetuar-login"},"Utilizar chave p\xfablica para efetuar login"),(0,o.kt)("p",null,"Ao gerar um par de chaves, os arquivos s\xe3o salvos em ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh")),(0,o.kt)("p",null,"Podemos utilizar os seguintes algoritmos para gera\xe7\xe3o de chaves:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dsa"),", ",(0,o.kt)("strong",{parentName:"p"},"ecdsa"),", ",(0,o.kt)("strong",{parentName:"p"},"ecdsa-sk"),", ",(0,o.kt)("strong",{parentName:"p"},"ed25519"),", ",(0,o.kt)("strong",{parentName:"p"},"ed25519-sk"),", ",(0,o.kt)("strong",{parentName:"p"},"rsa")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Algoritomos ",(0,o.kt)("strong",{parentName:"p"},"dsa")," e ",(0,o.kt)("strong",{parentName:"p"},"rsa 1024")," possuem criptografia fraca, evite usar!"))),(0,o.kt)("h3",{id:"gerando-par-de-chaves"},"Gerando par de chaves"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -b bits -t algorithm -C comment -f output_keyfile\n\n# Arquivos salvos em ~/.ssh/ed_25519 e ~/.ssh/ed_25519.pub\nssh-keygen -b 4096 -t rsa -C "Coment\xe1rio para identificar a chave" \n\n# Salvando em local diferente. Ex: ~/.ssh/id_rsa_gitlab e ~/.ssh/id_rsa_gitlab.pub\nssh-keygen -t ed25519 -C "Outro coment\xe1rio" -f ~/.ssh/id_rsa_desenv\n')),(0,o.kt)("h3",{id:"importando-na-m\xe1quina-destino"},"Importando na m\xe1quina destino"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# utilizado quando a chave p\xfablica foi gerada em local fora do padr\xe3o\nssh-copy-id -i ~/.ssh/id_rsa_desenv.pub user@host \n\n# Copiando a chave padr\xe3o. Ex: ~/.ssh/id_rsa.pub ou ~/.ssh/id_ed25519.pub\nssh-copy-id user@host\n")),(0,o.kt)("p",null,"Basta realizar login normalmente com ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh user@host")),(0,o.kt)("h3",{id:"desativar-login-utilizando-senha"},"Desativar login utilizando senha"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/ssh/sshd_config\n\nAuthenticationMethods publickey\nPubkeyAuthentication yes\n\nPermitEmptyPasswords no\n")),(0,o.kt)("h3",{id:"desativar-login-com-root"},"Desativar login com root"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/ssh/sshd_config\n\nPermitRootLogin no\nChallengeResponseAuthentication no\nPasswordAuthentication no\nUsePAM no\n")))}m.isMDXComponent=!0}}]);
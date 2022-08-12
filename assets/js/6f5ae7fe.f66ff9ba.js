"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[6392],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),c=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return o.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),y=n,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||a;return t?o.createElement(m,s(s({ref:r},l),{},{components:t})):o.createElement(m,s({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7890:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(7462),n=(t(7294),t(3905));const a={},s="Proxying your session",i={unversionedId:"how-to/use-a-proxy",id:"how-to/use-a-proxy",title:"Proxying your session",description:"It is extremely simple to use a proxy with @open-wa. Once you have your proxy protocol, address, port, username and password you just need to set the [[proxyServerCredentials]] and @open-wa will connect your session via the proxy. For example, if your proxy details are:",source:"@site/docs/how-to/use-a-proxy.md",sourceDirName:"how-to",slug:"/how-to/use-a-proxy",permalink:"/docs/how-to/use-a-proxy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to/use-a-proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SendFile",permalink:"/docs/how-to/sendfile"},next:{title:"Command-line options",permalink:"/docs/reference/command-line-options"}},p={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"proxying-your-session"},"Proxying your session"),(0,n.kt)("p",null,"It is extremely simple to use a proxy with @open-wa. Once you have your proxy protocol, address, port, username and password you just need to set the [","[proxyServerCredentials]","] and @open-wa will connect your session via the proxy. For example, if your proxy details are:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"//this is dummy data\n\nprotocol: http\naddress: proxyaddress.abc\nport: 1234\nusername: open-wa\npassword: antidote\n")),(0,n.kt)("p",null,"then your config will look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"create({\n  proxyServerCredentials: {\n    address: 'http://proxyaddress.abc:1234',\n    username: 'open-wa',\n    password: 'antidote'\n  }\n}).then(client => start(client));\n")))}u.isMDXComponent=!0}}]);
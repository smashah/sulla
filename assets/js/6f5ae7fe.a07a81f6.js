"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[998],{8642:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(4848),n=r(8453);const s={},a="Proxying your session",i={id:"how-to/use-a-proxy",title:"Proxying your session",description:"It is extremely simple to use a proxy with @open-wa. Once you have your proxy protocol, address, port, username and password you just need to set the [[proxyServerCredentials]] and @open-wa will connect your session via the proxy. For example, if your proxy details are:",source:"@site/docs/how-to/use-a-proxy.md",sourceDirName:"how-to",slug:"/how-to/use-a-proxy",permalink:"/docs/how-to/use-a-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to/use-a-proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SendFile",permalink:"/docs/how-to/sendfile"},next:{title:"@open-wa/wa-automate v4.72.4",permalink:"/docs/reference/"}},d={},c=[];function p(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"proxying-your-session",children:"Proxying your session"})}),"\n",(0,t.jsx)(o.p,{children:"It is extremely simple to use a proxy with @open-wa. Once you have your proxy protocol, address, port, username and password you just need to set the [[proxyServerCredentials]] and @open-wa will connect your session via the proxy. For example, if your proxy details are:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-text",children:"//this is dummy data\n\nprotocol: http\naddress: proxyaddress.abc\nport: 1234\nusername: open-wa\npassword: antidote\n"})}),"\n",(0,t.jsx)(o.p,{children:"then your config will look something like this:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-javascript",children:"create({\n  proxyServerCredentials: {\n    address: 'http://proxyaddress.abc:1234',\n    username: 'open-wa',\n    password: 'antidote'\n  }\n}).then(client => start(client));\n"})})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>i});var t=r(6540);const n={},s=t.createContext(n);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);
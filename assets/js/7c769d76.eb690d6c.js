"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8726],{4662:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});var n=o(4848),s=o(8453);const c={},a="Detecting Logouts",r={id:"how-to/detect-logout",title:"Detecting Logouts",description:"First use [[onStateChanged]] to detect changes in the session state. Then use [[forceRefocus]] to force the the app to continue working. If state equals UNPAIRED that means the host account user has manually de authenticated the session through the app.",source:"@site/docs/how-to/detect-logout.md",sourceDirName:"how-to",slug:"/how-to/detect-logout",permalink:"/docs/how-to/detect-logout",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to/detect-logout.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decrypting Media",permalink:"/docs/how-to/decrypt-media"},next:{title:"Group",permalink:"/docs/how-to/groups"}},i={},u=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"detecting-logouts",children:"Detecting Logouts"})}),"\n",(0,n.jsxs)(t.p,{children:["First use [[onStateChanged]] to detect changes in the session state. Then use [[forceRefocus]] to force the the app to continue working. If ",(0,n.jsx)(t.code,{children:"state"})," equals ",(0,n.jsx)(t.code,{children:"UNPAIRED"})," that means the host account user has manually de authenticated the session through the app."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"\n  client.onStateChanged(state=>{\n    console.log('statechanged', state)\n    if(state===\"CONFLICT\" || state===\"UNLAUNCHED\") client.forceRefocus();\n\n    if(state==='UNPAIRED') console.log('LOGGED OUT!!!!')\n  });\n"})}),"\n",(0,n.jsx)(t.p,{children:"For more information see: [[STATE]]"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(6540);const s={},c=n.createContext(s);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);
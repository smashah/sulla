"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[986],{2364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"how-to/send-videos","title":"Send Video","description":"In order to send videos, the client must be started with an instance of chrome! Otherwise videos will be sent as files and not render properly in the app.","source":"@site/docs/how-to/send-videos.md","sourceDirName":"how-to","slug":"/how-to/send-videos","permalink":"/docs/how-to/send-videos","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to/send-videos.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Sending Messages","permalink":"/docs/how-to/send-messages"},"next":{"title":"SendFile","permalink":"/docs/how-to/sendfile"}}');var s=n(4848),a=n(8453);const r={},i="Send Video",d={},c=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"send-video",children:"Send Video"})}),"\n",(0,s.jsx)(t.p,{children:"In order to send videos, the client must be started with an instance of chrome! Otherwise videos will be sent as files and not render properly in the app."}),"\n",(0,s.jsx)(t.p,{children:"To use chrome set [[useChrome]] (finds the chrome installation automatically) to true or set the [[executablePath]] (set the chrome installation path manually)."}),"\n",(0,s.jsx)(t.p,{children:"[[useChrome]] takes a few seconds so to save time in consequtive processes set [[executablePath]] ([[useChrome]] will output the valid [[executablePath]] in the logs so keep an eye on them)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"    client.sendImage(chatId, dataUrl, 'filename.jpeg', 'cool caption')\n\n    //send image as a reply to another message quotedMessageId\n    client.sendImage(chatId, dataUrl, 'filename.jpeg', 'cool caption', quotedMessageId)\n\n    //wait for the Id to be returned\n    client.sendImage(chatId, dataUrl, 'filename.jpeg', 'cool caption', null, true)\n\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example of config for sending videos:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"create({\n  // For Mac:\n  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',\n  // For Windows:\n  // executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',\n}).then(client => start(client));\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(6540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
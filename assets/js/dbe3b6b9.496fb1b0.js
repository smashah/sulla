"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5438],{7067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(4848),a=t(8453);const o={},c="Best Practice",i={id:"advanced/best-practices",title:"Best Practice",description:"Since this is not an officially sanctioned solution it is temperamental to say the least. Here are some best practices:",source:"@site/docs/advanced/best-practices.md",sourceDirName:"advanced",slug:"/advanced/best-practices",permalink:"/docs/advanced/best-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/best-practices.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"},next:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"}},r={},l=[];function u(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"best-practice",children:"Best Practice"})}),"\n",(0,s.jsx)(n.p,{children:"Since this is not an officially sanctioned solution it is temperamental to say the least. Here are some best practices:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Keep the session alive"}),"\n",(0,s.jsx)(n.li,{children:"Offload most work off of your @open-wa/wa-automate setup (i.e forward all events to a pubsub or something)"}),"\n",(0,s.jsx)(n.li,{children:"Keep the phone nearby just in case you need to reauthenticate"}),"\n",(0,s.jsx)(n.li,{children:"Use a chrome instance instead of the default chromium instance"}),"\n",(0,s.jsx)(n.li,{children:"Use headless: false for easy & quick visual debugging"}),"\n",(0,s.jsx)(n.li,{children:"Implement the unread messages functionality on creation of a session so you don't miss any messages upon any downtime."}),"\n",(0,s.jsxs)(n.li,{children:["Implement a ",(0,s.jsx)(n.a,{href:"https://github.com/sindresorhus/p-queue",children:"promise-queue"})]}),"\n",(0,s.jsx)(n.li,{children:"Use a unique and valid custom user-agent"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"await"})," all @open-wa/wa-automate methods just in case"]}),"\n",(0,s.jsx)(n.li,{children:"Do not run your s@open-wa/wa-automate instance on a Windows machine."}),"\n",(0,s.jsxs)(n.li,{children:["Always ",(0,s.jsx)(n.a,{href:"https://open-wa.github.io/wa-automate-nodejs/classes/client.html#kill",children:"kill the session safely"})," upon error or SIGINT."]}),"\n",(0,s.jsx)(n.li,{children:"Regularly restart your process to manage memory consumption"}),"\n",(0,s.jsxs)(n.li,{children:["If memory leaks continue to be an issue then use ",(0,s.jsx)(n.code,{children:"cacheEnabled:false"})," in the config to disable the cache on the page."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import { create, Client} from '@open-wa/wa-automate';\nconst { default: PQueue } = require(\"p-queue\");\n\nconst queue = new PQueue({\n  concurrency: 4,\n  autoStart:false\n   });\n\nconst proc = async message => {\n  //do something with the message here\n    console.log(message)\n    return true;\n}\n\nconst processMessage = message => queue.add(()=>proc(message));\n\nasync function start(client: Client) {\n  const unreadMessages = await client.getAllUnreadMessages();\n  unreadMessages.forEach(processMessage)\n  ...\n  await client.onMessage(processMessage);\n  queue.start();\n}\n\ncreate().then(client => start(client));\n\n//create takes 1 argument and that is the config object :\n// https://docs.openwa.dev/interfaces/api_model_config.ConfigObject.html\n\ncreate({\n  // For Mac:\n  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',\n  // For Windows:\n  // executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',\n  headless: false,\n  autoRefresh:true,\n  cacheEnabled:false,\n  customUserAgent: 'some custom user agent'\n})\n.then(client => start(client));\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(6540);const a={},o=s.createContext(a);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
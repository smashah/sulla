"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[843],{4158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(4848),s=n(8453);const i={},r="Decrypting Media",o={id:"how-to/decrypt-media",title:"Decrypting Media",description:"Here is a sample of how to decrypt media. This has been tested on images, videos, documents, audio and voice notes.",source:"@site/docs/how-to/decrypt-media.md",sourceDirName:"how-to",slug:"/how-to/decrypt-media",permalink:"/docs/how-to/decrypt-media",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to/decrypt-media.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating an API",permalink:"/docs/how-to/create-api"},next:{title:"Detecting Logouts",permalink:"/docs/how-to/detect-logout"}},c={},d=[{value:"404&#39;d",id:"404d",level:2},{value:"Decrypting Stickers",id:"decrypting-stickers",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"decrypting-media",children:"Decrypting Media"})}),"\n",(0,a.jsx)(t.p,{children:"Here is a sample of how to decrypt media. This has been tested on images, videos, documents, audio and voice notes."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { create, Client, decryptMedia } from '@open-wa/wa-automate';\nconst mime = require('mime-types');\nconst fs = require('fs');\n\nfunction start(client: Client) {\n  client.onMessage(async message => {\n    if (message.mimetype) {\n      const filename = `${message.t}.${mime.extension(message.mimetype)}`;\n      const mediaData = await decryptMedia(message);\n      const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString(\n        'base64'\n      )}`;\n      await client.sendImage(\n        message.from,\n        imageBase64,\n        filename,\n        `You just sent me this ${message.type}`\n      );\n      fs.writeFile(filename, mediaData, function(err) {\n        if (err) {\n          return console.log(err);\n        }\n        console.log('The file was saved!');\n      });\n    }\n  });\n}\n\ncreate().then(client => start(client));\n"})}),"\n",(0,a.jsx)(t.h2,{id:"404d",children:"404'd"}),"\n",(0,a.jsxs)(t.p,{children:["You may sometimes get a ",(0,a.jsx)(t.code,{children:"404"})," error when trying to decrypt media from an old message, this is because media is only available on the main servers for a limited period of time. In these circumstances, you will need to force the host account to reupload media. You can do this by using [[forceStaleMediaUpdate]] then using decryptMedia on the response."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"      const mediaData = await decryptMedia(client.forceStaleMediaUpdate(message.id));\n"})}),"\n",(0,a.jsx)(t.h2,{id:"decrypting-stickers",children:"Decrypting Stickers"}),"\n",(0,a.jsxs)(t.p,{children:["Decrypting stickers with the method shown above will result in a blank ",(0,a.jsx)(t.code,{children:".webp"})," file. To decrypt the sticker, use [[getStickerDecryptable]]."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"\n      const mediaData = await decryptMedia(client.getStickerDecryptable(message.id));\n      //or\n      const mediaData = await client.decryptMedia(message.id);\n"})}),"\n",(0,a.jsx)(t.p,{children:"It is always preferable to keep projects smaller than needed so you can now use a lightweight library called wa-decrypt for projects that do not need all of @open-wa/wa-automate."}),"\n",(0,a.jsx)(t.p,{children:"You can install that using:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"> npm i --save wa-decrypt\n"})}),"\n",(0,a.jsx)(t.p,{children:"and import it like so:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { decryptMedia } from 'wa-decrypt';\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/smashah/wa-decrypt#readme",children:"Learn more about wa-decrypt here"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
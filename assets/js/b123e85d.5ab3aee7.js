"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3605],{4854:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"how-to/send-files","title":"Sending Files","description":"Send Image","source":"@site/docs/how-to/send-files.md","sourceDirName":"how-to","slug":"/how-to/send-files","permalink":"/docs/how-to/send-files","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-to/send-files.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Receiving Messages","permalink":"/docs/how-to/receive-messages"},"next":{"title":"Sending Messages","permalink":"/docs/how-to/send-messages"}}');var i=s(4848),a=s(8453);const d={},o="Sending Files",l={},r=[{value:"Send Image",id:"send-image",level:2},{value:"Send Audio",id:"send-audio",level:2},{value:"Send File",id:"send-file",level:2},{value:"Send Stickers",id:"send-stickers",level:2},{value:"Sending Gifs",id:"sending-gifs",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sending-files",children:"Sending Files"})}),"\n",(0,i.jsx)(n.h2,{id:"send-image",children:"Send Image"}),"\n",(0,i.jsx)(n.p,{children:"[[sendImage]]"}),"\n",(0,i.jsx)(n.p,{children:"Make sure to use a [[DataURL]] for the second parameter."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    client.sendImage(chatId, dataUrl, 'filename.jpeg', 'cool caption')\n\n    //send image as a reply to another message quotedMessageId\n    client.sendImage(chatId, dataUrl, 'filename.jpeg', 'cool caption', quotedMessageId)\n\n    //wait for the Id to be returned\n    client.sendImage(chatId, dataUrl, 'filename.jpeg', 'cool caption', null, true)\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"send-audio",children:"Send Audio"}),"\n",(0,i.jsx)(n.p,{children:"[[sendPtt]] sends an audio clip as a 'push to talk' type file. This allows recipients to play the clip as they would any other voice note."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    client.sendPtt(chatId, dataUrl)\n\n    //Send the audio as reply to a message (quotedMessageId)\n    client.sendPtt(chatId, dataUrl, quotedMessageId)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"send-file",children:"Send File"}),"\n",(0,i.jsx)(n.p,{children:"[[sendFile]]"}),"\n",(0,i.jsx)(n.p,{children:"[[sendFileFromUrl]]"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"\n    client.sendFile(chatId, dataUrl, 'file.pdf', 'check this pdf')\n\n    //Send the file as reply to a message (quotedMessageId)\n    client.sendFile(chatId, dataUrl, 'file.pdf', 'check this pdf', quotedMessageId)\n\n    //Send a file and wait for the message id to be returned\n    client.sendFile(chatId, dataUrl, 'file.pdf', 'check this pdf', null, true)\n\n    //or from URL\n    client.sendFileFromUrl(chatId, url);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"send-stickers",children:"Send Stickers"}),"\n",(0,i.jsx)(n.p,{children:"[[sendImageAsSticker]]"}),"\n",(0,i.jsx)(n.p,{children:"[[sendStickerfromUrl]]"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    client.sendImageAsSticker(chatId, dataUrl);\n\n    //or from a URL\n    client.sendStickerfromUrl(chatId, url);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"sending-gifs",children:"Sending Gifs"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to send GIFs - by Video or by giphy link."}),"\n",(0,i.jsx)(n.p,{children:"WA doesn't actually support the .gif format - probably due to how inefficient it is as a filetype - they instead convert GIFs to video then process them."}),"\n",(0,i.jsx)(n.p,{children:"In order to send gifs you need to do the same (convert the gif to an mp4 file) then use [[sendVideoAsGif]]"}),"\n",(0,i.jsxs)(n.p,{children:["[[sendGiphy]] is a convenience method to make it easier to send gifs from the website ",(0,i.jsx)(n.a,{href:"https://giphy.com",children:"GIPHY"}),". You need to make sure you use a giphy media link as shown below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"\nimport { create, Client} from '@open-wa/wa-automate';\n\nfunction start(client: Client) {\nawait client.sendVideoAsGif('xyz@c.us','Video FILE DATA URL','some file.mp4', `Hello this is the caption`);\n\n//or send via Giphy URL\n\nawait client.sendGiphy('xyz@c.us','https://media.giphy.com/media/oYtVHSxngR3lC/giphy.gif', `Hello this is the caption`);\n}\n\n///IMPORTANT! Please make sure to point to your chrome installation and make sure your host has ffmpeg support\ncreate({\n  // For Mac:\n  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',\n  // For Windows:\n  // executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',\n}).then(client => start(client));\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var t=s(6540);const i={},a=t.createContext(i);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
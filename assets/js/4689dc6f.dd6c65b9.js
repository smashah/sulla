"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1939],{2286:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"reference/api/model/group-metadata/interfaces/GenericGroupChangeEvent","title":"Interface: GenericGroupChangeEvent","description":"Properties","source":"@site/docs/reference/api/model/group-metadata/interfaces/GenericGroupChangeEvent.md","sourceDirName":"reference/api/model/group-metadata/interfaces","slug":"/reference/api/model/group-metadata/interfaces/GenericGroupChangeEvent","permalink":"/docs/reference/api/model/group-metadata/interfaces/GenericGroupChangeEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/api/model/group-metadata/interfaces/GenericGroupChangeEvent.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Enumeration: groupChangeEvent","permalink":"/docs/reference/api/model/group-metadata/enumerations/groupChangeEvent"},"next":{"title":"Interface: GroupMetadata","permalink":"/docs/reference/api/model/group-metadata/interfaces/GroupMetadata"}}');var c=r(4848),o=r(8453);const d={},i="Interface: GenericGroupChangeEvent",s={},a=[{value:"Properties",id:"properties",level:2},{value:"author",id:"author",level:3},{value:"body",id:"body",level:3},{value:"groupMetadata",id:"groupmetadata",level:3},{value:"groupPic",id:"grouppic",level:3},{value:"id",id:"id",level:3},{value:"type",id:"type",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"interface-genericgroupchangeevent",children:"Interface: GenericGroupChangeEvent"})}),"\n",(0,c.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(n.h3,{id:"author",children:"author"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"author"}),": ",(0,c.jsx)(n.a,{href:"/docs/reference/api/model/contact/interfaces/Contact",children:(0,c.jsx)(n.code,{children:"Contact"})})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"The contact who triggered this event. (E.g the contact who changed the group picture)"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"body",children:"body"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"body"}),": ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Some more information about the event"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"groupmetadata",children:"groupMetadata"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"groupMetadata"}),": ",(0,c.jsx)(n.a,{href:"/docs/reference/api/model/group-metadata/interfaces/GroupMetadata",children:(0,c.jsx)(n.code,{children:"GroupMetadata"})})]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"grouppic",children:"groupPic"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"groupPic"}),": ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Base 64 encoded image"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"id"}),": ",(0,c.jsx)(n.a,{href:"/docs/reference/api/model/aliases/type-aliases/MessageId",children:(0,c.jsx)(n.code,{children:"MessageId"})})]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"type"}),": ",(0,c.jsx)(n.code,{children:'"remove"'})," | ",(0,c.jsx)(n.code,{children:'"add"'})," | ",(0,c.jsx)(n.code,{children:'"invite"'})," | ",(0,c.jsx)(n.code,{children:'"leave"'})," | ",(0,c.jsx)(n.code,{children:'"subject"'})," | ",(0,c.jsx)(n.code,{children:'"description"'})," | ",(0,c.jsx)(n.code,{children:'"announce"'})," | ",(0,c.jsx)(n.code,{children:'"restrict"'})," | ",(0,c.jsx)(n.code,{children:'"picutre"'})," | ",(0,c.jsx)(n.code,{children:'"create"'})," | ",(0,c.jsx)(n.code,{children:'"delete"'})," | ",(0,c.jsx)(n.code,{children:'"revoke_invite"'})," | ",(0,c.jsx)(n.code,{children:'"no_frequently_forwarded"'})," | ",(0,c.jsx)(n.code,{children:'"announce_msg_bounce"'})," | ",(0,c.jsx)(n.code,{children:'"demote"'})," | ",(0,c.jsx)(n.code,{children:'"promote"'})," | ",(0,c.jsx)(n.code,{children:'"modify"'})," | ",(0,c.jsx)(n.code,{children:'"v4_add_invite_sent"'})," | ",(0,c.jsx)(n.code,{children:'"v4_add_invite_join"'})," | ",(0,c.jsx)(n.code,{children:'"growth_locked"'})," | ",(0,c.jsx)(n.code,{children:'"growth_unlocked"'})," | ",(0,c.jsx)(n.code,{children:'"linked_group_join"'})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Type of the event"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(6540);const c={},o=t.createContext(c);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
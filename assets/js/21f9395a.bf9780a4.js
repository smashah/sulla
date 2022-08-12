"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[6919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"api_model_chat.GroupChatCreationParticipantAddResponse",title:"Interface: GroupChatCreationParticipantAddResponse",sidebar_label:"GroupChatCreationParticipantAddResponse",custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/api_model_chat.GroupChatCreationParticipantAddResponse",id:"api/interfaces/api_model_chat.GroupChatCreationParticipantAddResponse",title:"Interface: GroupChatCreationParticipantAddResponse",description:"api/model/chat.GroupChatCreationParticipantAddResponse",source:"@site/docs/api/interfaces/api_model_chat.GroupChatCreationParticipantAddResponse.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/api_model_chat.GroupChatCreationParticipantAddResponse",permalink:"/docs/api/interfaces/api_model_chat.GroupChatCreationParticipantAddResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_model_chat.GroupChatCreationParticipantAddResponse",title:"Interface: GroupChatCreationParticipantAddResponse",sidebar_label:"GroupChatCreationParticipantAddResponse",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"GroupChat",permalink:"/docs/api/interfaces/api_model_chat.GroupChat"},next:{title:"GroupChatCreationResponse",permalink:"/docs/api/interfaces/api_model_chat.GroupChatCreationResponse"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"code",id:"code",level:3},{value:"invite_code",id:"invite_code",level:3},{value:"invite_code_exp",id:"invite_code_exp",level:3}],d={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/api_model_chat"},"api/model/chat"),".GroupChatCreationParticipantAddResponse"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"code"},"code"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"code"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"403")),(0,a.kt)("p",null,"The resultant status code for adding the participant. "),(0,a.kt)("p",null,"200 if the participant was added successfully during the creation of the group. "),(0,a.kt)("p",null,"403 if the participant does not allow their account to be added to group chats. If you receive a 403, you will also get an ",(0,a.kt)("inlineCode",{parentName:"p"},"invite_code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"invite_code_exp")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"invite_code"},"invite","_","code"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"invite","_","code"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"If the participant is not allowed to be added to group chats due to their privacy settings, you will receive an ",(0,a.kt)("inlineCode",{parentName:"p"},"invite_code")," which you can send to them via a text."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"invite_code_exp"},"invite","_","code","_","exp"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"invite","_","code","_","exp"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The expiry ts of the invite_code. It is a number wrapped in a string, in order to get the proper time you can use this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"  new Date(Number(invite_code_exp)*1000)\n")))}s.isMDXComponent=!0}}]);
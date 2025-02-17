/*! For license information please see 2100.37450a0e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2100],{856:(e,r,o)=>{o.d(r,{QP:()=>_});const t="-";function n(e){const r=function(e){const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]},n=function(e,r){if(!r)return e;return e.map((([e,o])=>[e,o.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,o])=>[r+e,o]))):e))]))}(Object.entries(e.classGroups),o);return n.forEach((([e,o])=>{i(o,t,e,r)})),t}(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:function(e){const o=e.split(t);return""===o[0]&&1!==o.length&&o.shift(),l(o,r)||function(e){if(s.test(e)){const r=s.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){const t=o[e]||[];return r&&n[e]?[...t,...n[e]]:t}}}function l(e,r){if(0===e.length)return r.classGroupId;const o=e[0],n=r.nextPart.get(o),s=n?l(e.slice(1),n):void 0;if(s)return s;if(0===r.validators.length)return;const i=e.join(t);return r.validators.find((({validator:e})=>e(i)))?.classGroupId}const s=/^\[(.+)\]$/;function i(e,r,o,t){e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void i(e(t),r,o,t):void r.validators.push({validator:e,classGroupId:o});Object.entries(e).forEach((([e,n])=>{i(n,a(r,e),o,t)}))}else{(""===e?r:a(r,e)).classGroupId=o}}))}function a(e,r){let o=e;return r.split(t).forEach((e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)})),o}function c(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;function n(n,l){o.set(n,l),r++,r>e&&(r=0,t=o,o=new Map)}return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}}const d="!";function u(e){const{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],l=r.length;function s(e){const o=[];let s,i=0,a=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===i){if(c===n&&(t||e.slice(d,d+l)===r)){o.push(e.slice(a,d)),a=d+l;continue}if("/"===c){s=d;continue}}"["===c?i++:"]"===c&&i--}const c=0===o.length?e:e.substring(a),u=c.startsWith(d);return{modifiers:o,hasImportantModifier:u,baseClassName:u?c.substring(1):c,maybePostfixModifierPosition:s&&s>a?s-a:void 0}}return o?function(e){return o({className:e,parseClassName:s})}:s}const p=/\s+/;function f(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=b(e))&&(t&&(t+=" "),t+=r);return t}function b(e){if("string"==typeof e)return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=b(e[t]))&&(o&&(o+=" "),o+=r);return o}function m(e,...r){let o,t,l,s=function(a){const d=r.reduce(((e,r)=>r(e)),e());return o=function(e){return{cache:c(e.cacheSize),parseClassName:u(e),...n(e)}}(d),t=o.cache.get,l=o.cache.set,s=i,i(a)};function i(e){const r=t(e);if(r)return r;const n=function(e,r){const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=new Set;return e.trim().split(p).map((e=>{const{modifiers:r,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:s}=o(e);let i=Boolean(s),a=t(i?l.substring(0,s):l);if(!a){if(!i)return{isTailwindClass:!1,originalClassName:e};if(a=t(l),!a)return{isTailwindClass:!1,originalClassName:e};i=!1}const c=function(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach((e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)})),r.push(...o.sort()),r}(r).join(":");return{isTailwindClass:!0,modifierId:n?c+d:c,classGroupId:a,originalClassName:e,hasPostfixModifier:i}})).reverse().filter((e=>{if(!e.isTailwindClass)return!0;const{modifierId:r,classGroupId:o,hasPostfixModifier:t}=e,s=r+o;return!l.has(s)&&(l.add(s),n(o,t).forEach((e=>l.add(r+e))),!0)})).reverse().map((e=>e.originalClassName)).join(" ")}(e,o);return l(e,n),n}return function(){return s(f.apply(null,arguments))}}function g(e){const r=r=>r[e]||[];return r.isThemeGetter=!0,r}const h=/^\[(?:([a-z-]+):)?(.+)\]$/i,y=/^\d+\/\d+$/,v=new Set(["px","full","screen"]),w=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,x=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,k=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,z=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function j(e){return M(e)||v.has(e)||y.test(e)}function N(e){return V(e,"length",q)}function M(e){return Boolean(e)&&!Number.isNaN(Number(e))}function G(e){return V(e,"number",M)}function P(e){return Boolean(e)&&Number.isInteger(Number(e))}function E(e){return e.endsWith("%")&&M(e.slice(0,-1))}function S(e){return h.test(e)}function I(e){return w.test(e)}const O=new Set(["length","size","percentage"]);function R(e){return V(e,O,D)}function W(e){return V(e,"position",D)}const $=new Set(["image","url"]);function A(e){return V(e,$,F)}function T(e){return V(e,"",L)}function B(){return!0}function V(e,r,o){const t=h.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))}function q(e){return x.test(e)&&!k.test(e)}function D(){return!1}function L(e){return z.test(e)}function F(e){return C.test(e)}Symbol.toStringTag;function Z(){const e=g("colors"),r=g("spacing"),o=g("blur"),t=g("brightness"),n=g("borderColor"),l=g("borderRadius"),s=g("borderSpacing"),i=g("borderWidth"),a=g("contrast"),c=g("grayscale"),d=g("hueRotate"),u=g("invert"),p=g("gap"),f=g("gradientColorStops"),b=g("gradientColorStopPositions"),m=g("inset"),h=g("margin"),y=g("opacity"),v=g("padding"),w=g("saturate"),x=g("scale"),k=g("sepia"),z=g("skew"),C=g("space"),O=g("translate"),$=()=>["auto",S,r],V=()=>[S,r],q=()=>["",j,N],D=()=>["auto",M,S],L=()=>["","0",S],F=()=>[M,G],Z=()=>[M,S];return{cacheSize:500,separator:":",theme:{colors:[B],spacing:[j,N],blur:["none","",I,S],brightness:F(),borderColor:[e],borderRadius:["none","","full",I,S],borderSpacing:V(),borderWidth:q(),contrast:F(),grayscale:L(),hueRotate:Z(),invert:L(),gap:V(),gradientColorStops:[e],gradientColorStopPositions:[E,N],inset:$(),margin:$(),opacity:F(),padding:V(),saturate:F(),scale:F(),sepia:L(),skew:Z(),space:V(),translate:V()},classGroups:{aspect:[{aspect:["auto","square","video",S]}],container:["container"],columns:[{columns:[I]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",S]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,S]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",S]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",P,S]}],"grid-cols":[{"grid-cols":[B]}],"col-start-end":[{col:["auto",{span:["full",P,S]},S]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[B]}],"row-start-end":[{row:["auto",{span:[P,S]},S]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",S]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",S]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",S,r]}],"min-w":[{"min-w":[S,r,"min","max","fit"]}],"max-w":[{"max-w":[S,r,"none","full","min","max","fit","prose",{screen:[I]},I]}],h:[{h:[S,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[S,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[S,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[S,r,"auto","min","max","fit"]}],"font-size":[{text:["base",I,N]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",G]}],"font-family":[{font:[B]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",S]}],"line-clamp":[{"line-clamp":["none",M,G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",j,S]}],"list-image":[{"list-image":["none",S]}],"list-style-type":[{list:["none","disc","decimal",S]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",j,N]}],"underline-offset":[{"underline-offset":["auto",j,S]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",S]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",S]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",W]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",R]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},A]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[j,S]}],"outline-w":[{outline:[j,N]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[j,N]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",I,T]}],"shadow-color":[{shadow:[B]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",I,S]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[w]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",S]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",S]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",S]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[P,S]}],"translate-x":[{"translate-x":[O]}],"translate-y":[{"translate-y":[O]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",S]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",S]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",S]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[j,N,G]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const _=m(Z)},6932:(e,r,o)=>{o.d(r,{A:()=>i});var t=o(6540);const n=(...e)=>e.filter(((e,r,o)=>Boolean(e)&&o.indexOf(e)===r)).join(" ");var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const s=(0,t.forwardRef)((({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:i="",children:a,iconNode:c,...d},u)=>(0,t.createElement)("svg",{ref:u,...l,width:r,height:r,stroke:e,strokeWidth:s?24*Number(o)/Number(r):o,className:n("lucide",i),...d},[...c.map((([e,r])=>(0,t.createElement)(e,r))),...Array.isArray(a)?a:[a]]))),i=((e,r)=>{const o=(0,t.forwardRef)((({className:o,...l},i)=>{return(0,t.createElement)(s,{ref:i,iconNode:r,className:n(`lucide-${a=e,a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...l});var a}));return o.displayName=`${e}`,o})("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]])},6990:(e,r,o)=>{function t(e){var r,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(o=t(e[r]))&&(n&&(n+=" "),n+=o);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function n(){for(var e,r,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(r=t(e))&&(n&&(n+=" "),n+=r);return n}o.d(r,{F:()=>i});const l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=n,i=(e,r)=>o=>{var t;if(null==(null==r?void 0:r.variants))return s(e,null==o?void 0:o.class,null==o?void 0:o.className);const{variants:n,defaultVariants:i}=r,a=Object.keys(n).map((e=>{const r=null==o?void 0:o[e],t=null==i?void 0:i[e];if(null===r)return null;const s=l(r)||l(t);return n[e][s]})),c=o&&Object.entries(o).reduce(((e,r)=>{let[o,t]=r;return void 0===t||(e[o]=t),e}),{}),d=null==r||null===(t=r.compoundVariants)||void 0===t?void 0:t.reduce(((e,r)=>{let{class:o,className:t,...n}=r;return Object.entries(n).every((e=>{let[r,o]=e;return Array.isArray(o)?o.includes({...i,...c}[r]):{...i,...c}[r]===o}))?[...e,o,t]:e}),[]);return s(e,a,d,null==o?void 0:o.class,null==o?void 0:o.className)}},7859:(e,r,o)=>{o.d(r,{DX:()=>s});var t=o(6540);function n(...e){return r=>e.forEach((e=>function(e,r){"function"==typeof e?e(r):null!=e&&(e.current=r)}(e,r)))}var l=o(4848),s=t.forwardRef(((e,r)=>{const{children:o,...n}=e,s=t.Children.toArray(o),a=s.find(c);if(a){const e=a.props.children,o=s.map((r=>r===a?t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null:r));return(0,l.jsx)(i,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,o):null})}return(0,l.jsx)(i,{...n,ref:r,children:o})}));s.displayName="Slot";var i=t.forwardRef(((e,r)=>{const{children:o,...l}=e;if(t.isValidElement(o)){const e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;if(o)return e.ref;if(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning,o)return e.props.ref;return e.props.ref||e.ref}(o);return t.cloneElement(o,{...d(l,o.props),ref:r?n(r,e):e})}return t.Children.count(o)>1?t.Children.only(null):null}));i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return t.isValidElement(e)&&e.type===a}function d(e,r){const o={...r};for(const t in r){const n=e[t],l=r[t];/^on[A-Z]/.test(t)?n&&l?o[t]=(...e)=>{l(...e),n(...e)}:n&&(o[t]=n):"style"===t?o[t]={...n,...l}:"className"===t&&(o[t]=[n,l].filter(Boolean).join(" "))}return{...e,...o}}}}]);
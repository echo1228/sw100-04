import{b as p,o as c,w as r,g as s,ac as a,v as m,x as o,C as n}from"./modules/vue-0FcoX_pC.js";import{_ as i}from"./default-CRUrn95H.js";import{u,f as k}from"./slidev/context-DEEGOYog.js";import"./index-DRdfU5t9.js";import"./modules/shiki-BePjj0la.js";const w={__name:"sw100-04.md__slidev_12",setup(h){const{$clicksContext:l,$frontmatter:t}=u();return l.setup(),(b,e)=>(c(),p(i,m(o(n(k)(n(t),11))),{default:r(()=>e[0]||(e[0]=[s("h1",null,"4.游乐园摊位布置方案（状压dp）",-1),s("p",null,[a("小美的游乐园有一条 "),s("strong",null,"3行4列"),a(" 的摊位区，她想布置冰淇淋摊位。每个格子可以放 "),s("strong",null,"冰淇淋摊位（1）"),a(" 或 "),s("strong",null,"不放（0）"),a("。规则是：")],-1),s("ol",null,[s("li",null,[s("strong",null,"不挨着摆摊"),a("：同一行相邻的格子不能同时放摊位（例如 "),s("code",null,"[1,0,1,0]"),a(" 合法，但 "),s("code",null,"[1,1,0,0]"),a(" 不合法）。")]),s("li",null,[s("strong",null,"上下不重叠"),a("：上下两行同一列的格子不能都放摊位。")])],-1),s("h2",null,"一、学习二进制表示",-1),s("ol",null,[s("li",null,[s("p",null,[a("如果第一行布置为 "),s("code",null,"[1,0,1,0]"),a("，二进制写作 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("munder",{accentunder:"true"},[s("mtext",null,"                "),s("mo",{stretchy:"true"},"‾")])]),s("annotation",{encoding:"application/x-tex"},"\\underline{~~~~~~~~~~~~~~~~}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.2em","vertical-align":"-0.2em"}}),s("span",{class:"mord underline"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0em"}},[s("span",{style:{top:"-2.84em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"underline-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2em"}},[s("span")])])])])])])]),a("，对应的十进制数是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("munder",{accentunder:"true"},[s("mtext",null,"                "),s("mo",{stretchy:"true"},"‾")])]),s("annotation",{encoding:"application/x-tex"},"\\underline{~~~~~~~~~~~~~~~~}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.2em","vertical-align":"-0.2em"}}),s("span",{class:"mord underline"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0em"}},[s("span",{style:{top:"-2.84em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"underline-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2em"}},[s("span")])])])])])])]),a(" 。 （提示：从左到右写二进制，比如 "),s("code",null,"[1,0,0,0]"),a(" → "),s("code",null,"1000"),a(" → 十进制8）")])]),s("li",null,[s("p",null,[a("如果第二行布置为 "),s("code",null,"[0,1,0,1]"),a("，二进制写作 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("munder",{accentunder:"true"},[s("mtext",null,"                "),s("mo",{stretchy:"true"},"‾")])]),s("annotation",{encoding:"application/x-tex"},"\\underline{~~~~~~~~~~~~~~~~}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.2em","vertical-align":"-0.2em"}}),s("span",{class:"mord underline"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0em"}},[s("span",{style:{top:"-2.84em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"underline-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2em"}},[s("span")])])])])])])]),a("，对应的十进制数是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("munder",{accentunder:"true"},[s("mtext",null,"                "),s("mo",{stretchy:"true"},"‾")])]),s("annotation",{encoding:"application/x-tex"},"\\underline{~~~~~~~~~~~~~~~~}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.2em","vertical-align":"-0.2em"}}),s("span",{class:"mord underline"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0em"}},[s("span",{style:{top:"-2.84em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"underline-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," "),s("span",{class:"mspace nobreak"}," ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2em"}},[s("span")])])])])])])]),a(" 。")])])],-1)])),_:1},16))}};export{w as default};

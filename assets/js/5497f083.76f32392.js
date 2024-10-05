"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6057],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),d=n,h=g["".concat(l,".").concat(d)]||g[d]||u[d]||s;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6084:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(8168),n=(r(6540),r(5680));const s={},o="Introduction",i={unversionedId:"gpt-researcher/getting-started/introduction",id:"gpt-researcher/getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"Official Website",source:"@site/docs/gpt-researcher/getting-started/introduction.md",sourceDirName:"gpt-researcher/getting-started",slug:"/gpt-researcher/getting-started/introduction",permalink:"/docs/gpt-researcher/getting-started/introduction",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/getting-started/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Welcome",permalink:"/docs/welcome"},next:{title:"How to Choose",permalink:"/docs/gpt-researcher/getting-started/how-to-choose"}},l=[{value:"Why GPT Researcher?",id:"why-gpt-researcher",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2},{value:"Demo",id:"demo",children:[],level:2},{value:"Tutorials",id:"tutorials",children:[],level:2},{value:"Features",id:"features",children:[],level:2}],c={toc:l},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://gptr.dev"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Official%20Website-gptr.dev-teal?style=for-the-badge&logo=world&logoColor=white",alt:"Official Website"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://discord.gg/QgZXvJAccX"},(0,n.yg)("img",{parentName:"a",src:"https://dcbadge.vercel.app/api/server/QgZXvJAccX?style=for-the-badge&theme=clean-inverted",alt:"Discord Follow"}))),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/assafelovic/gpt-researcher"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/assafelovic/gpt-researcher?style=social",alt:"GitHub Repo stars"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://twitter.com/assaf_elovic"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/assaf_elovic?style=social",alt:"Twitter Follow"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://badge.fury.io/py/gpt-researcher"},(0,n.yg)("img",{parentName:"a",src:"https://badge.fury.io/py/gpt-researcher.svg",alt:"PyPI version"})),"\n",(0,n.yg)("a",{parentName:"p",href:"https://colab.research.google.com/github/assafelovic/gpt-researcher/blob/master/docs/docs/examples/pip-run.ipynb"},(0,n.yg)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"}))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://gptr.dev"},"GPT Researcher")," is an autonomous agent designed for comprehensive online research on a variety of tasks.")," "),(0,n.yg)("p",null,"The agent can produce detailed, factual and unbiased research reports, with customization options for focusing on relevant resources, outlines, and lessons. Inspired by the recent ",(0,n.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/2305.04091"},"Plan-and-Solve")," and ",(0,n.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.11401"},"RAG")," papers, GPT Researcher addresses issues of speed, determinism and reliability, offering a more stable performance and increased speed through parallelized agent work, as opposed to synchronous operations."),(0,n.yg)("h2",{id:"why-gpt-researcher"},"Why GPT Researcher?"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To form objective conclusions for manual research tasks can take time, sometimes weeks to find the right resources and information."),(0,n.yg)("li",{parentName:"ul"},"Current LLMs are trained on past and outdated information, with heavy risks of hallucinations, making them almost irrelevant for research tasks."),(0,n.yg)("li",{parentName:"ul"},"Current LLMs are limited to short token outputs which are not sufficient for long detailed research reports (2k+ words)."),(0,n.yg)("li",{parentName:"ul"},"Solutions that enable web search (such as ChatGPT + Web Plugin), only consider limited resources and content that in some cases result in superficial conclusions or biased answers."),(0,n.yg)("li",{parentName:"ul"},"Using only a selection of resources can create bias in determining the right conclusions for research questions or tasks. ")),(0,n.yg)("h2",{id:"architecture"},"Architecture"),(0,n.yg)("p",null,'The main idea is to run "planner" and "execution" agents, whereas the planner generates questions to research, and the execution agents seek the most related information based on each generated research question. Finally, the planner filters and aggregates all related information and creates a research report. ',(0,n.yg)("br",null)," ",(0,n.yg)("br",null),"\nThe agents leverage both gpt-4o-mini and gpt-4o (128K context) to complete a research task. We optimize for costs using each only when necessary. ",(0,n.yg)("strong",{parentName:"p"},"The average research task takes around 3 minutes to complete, and costs ~$0.1.")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{align:"center",height:"600",src:"https://github.com/assafelovic/gpt-researcher/assets/13554167/4ac896fd-63ab-4b77-9688-ff62aafcc527"})),(0,n.yg)("p",null,"More specifically:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Create a domain specific agent based on research query or task."),(0,n.yg)("li",{parentName:"ul"},"Generate a set of research questions that together form an objective opinion on any given task. "),(0,n.yg)("li",{parentName:"ul"},"For each research question, trigger a crawler agent that scrapes online resources for information relevant to the given task."),(0,n.yg)("li",{parentName:"ul"},"For each scraped resources, summarize based on relevant information and keep track of its sources."),(0,n.yg)("li",{parentName:"ul"},"Finally, filter and aggregate all summarized sources and generate a final research report.")),(0,n.yg)("h2",{id:"demo"},"Demo"),(0,n.yg)("iframe",{height:"400",width:"700",src:"https://github.com/assafelovic/gpt-researcher/assets/13554167/a00c89a6-a295-4dd0-b58d-098a31c40fda",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.yg)("h2",{id:"tutorials"},"Tutorials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://medium.com/better-programming/how-i-built-an-autonomous-ai-agent-for-online-research-93435a97c6c"},"How it Works")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.loom.com/share/04ebffb6ed2a4520a27c3e3addcdde20?sid=da1848e8-b1f1-42d1-93c3-5b0b9c3b24ea"},"How to Install")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.loom.com/share/6a3385db4e8747a1913dd85a7834846f?sid=a740fd5b-2aa3-457e-8fb7-86976f59f9b8"},"Live Demo")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://gptr.dev"},"Homepage"))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\ud83d\udcdd Generate research, outlines, resources and lessons reports"),(0,n.yg)("li",{parentName:"ul"},"\ud83d\udcdc Can generate long and detailed research reports (over 2K words)"),(0,n.yg)("li",{parentName:"ul"},"\ud83c\udf10 Aggregates over 20 web sources per research to form objective and factual conclusions"),(0,n.yg)("li",{parentName:"ul"},"\ud83d\udda5\ufe0f Includes an easy-to-use web interface (HTML/CSS/JS)"),(0,n.yg)("li",{parentName:"ul"},"\ud83d\udd0d Scrapes web sources with javascript support"),(0,n.yg)("li",{parentName:"ul"},"\ud83d\udcc2 Keeps track and context of visited and used web sources"),(0,n.yg)("li",{parentName:"ul"},"\ud83d\udcc4 Export research reports to PDF, Word and more...")),(0,n.yg)("p",null,"Let's get started ",(0,n.yg)("a",{parentName:"p",href:"/docs/gpt-researcher/getting-started/getting-started"},"here"),"!"))}g.isMDXComponent=!0}}]);
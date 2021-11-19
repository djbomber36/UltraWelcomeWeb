"use strict";(self.webpackChunkultrawelcome_wiki=self.webpackChunkultrawelcome_wiki||[]).push([[284],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6015:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:2},p="MultiPlaceholders",c={unversionedId:"extra/MultiPlaceholders",id:"extra/MultiPlaceholders",isDocsHomePage:!1,title:"MultiPlaceholders",description:"Ever wanted to use PlaceholderAPI for two or more players in the same message?",source:"@site/docs/extra/MultiPlaceholders.md",sourceDirName:"extra",slug:"/extra/MultiPlaceholders",permalink:"/docs/extra/MultiPlaceholders",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"YamlFormatting",permalink:"/docs/extra/YamlFormatting"},next:{title:"Colors",permalink:"/docs/extra/Colors"}},u=[],s={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multiplaceholders"},"MultiPlaceholders"),(0,o.kt)("p",null,"Ever wanted to use PlaceholderAPI for two or more players in the same message?",(0,o.kt)("br",{parentName:"p"}),"\n","We got you!"),(0,o.kt)("p",null,"Let's take the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/actions"},"Welcome Actions")," as an example.",(0,o.kt)("br",{parentName:"p"}),"\n","The are two available placeholders: ",(0,o.kt)("inlineCode",{parentName:"p"},"%player%")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"%new_player%")),(0,o.kt)("p",null,"PlaceholderAPI placeholders are written, for example, like this:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%luckperms_prefix% %player% & %new_player%\n")),(0,o.kt)("p",null,"PlaceholderAPI placeholders for the Welcome Actions are applied by default to the ",(0,o.kt)("inlineCode",{parentName:"p"},"%player%"),".",(0,o.kt)("br",{parentName:"p"}),"\n","If you want to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"%luckperms_prefix%")," also to the new player you can simply do this:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%ph_player%%luckperms_prefix% %player% & %ph_new_player%%luckperms_prefix% %new_player%\n")),(0,o.kt)("p",null,"This means that where there are more than one placeholder for the player name (%player% & %new_player% returns the name of the player), there are also placeholders for this feature. Syntax of the placeholder is: ",(0,o.kt)("inlineCode",{parentName:"p"},"%ph_placeholder%%placeholderapi_placeholder%")))}m.isMDXComponent=!0}}]);
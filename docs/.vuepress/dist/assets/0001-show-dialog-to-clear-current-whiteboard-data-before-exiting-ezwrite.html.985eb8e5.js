import{_ as a,r as i,o as r,c as n,b as e,d as t,e as d,w as l,a as c}from"./app.2f54d8fb.js";const s={},h=e("h1",{id:"show-dialog-to-clear-current-whiteboard-data-before-exiting-ezwrite",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#show-dialog-to-clear-current-whiteboard-data-before-exiting-ezwrite","aria-hidden":"true"},"#"),t(" Show dialog to clear current whiteboard data before exiting EZWrite")],-1),u=e("li",null,"Date: 2022-11-08",-1),_=e("li",null,"Suggester: Conway Lee, Steve Chu, Benson W Chen",-1),b=e("li",null,"Platform: Android",-1),p=e("li",null,[t("Status: "),e("strong",null,"Under implementation")],-1),w=c('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Whiteboard data is automatically saved in Android platform.</p><h2 id="motivation" tabindex="-1"><a class="header-anchor" href="#motivation" aria-hidden="true">#</a> Motivation</h2><p>Some users may want to have a choice to keep whitboard data or not.</p><h2 id="proposed-solution" tabindex="-1"><a class="header-anchor" href="#proposed-solution" aria-hidden="true">#</a> Proposed solution</h2><ul><li>Given: Create whiteboard by user (<code>guest</code> / <code>local_public</code>)</li><li>When: Click &#39;quit&#39; button to exit EZWrite</li><li>Then: Show dialog to clear current whiteboard</li></ul><h2 id="impact" tabindex="-1"><a class="header-anchor" href="#impact" aria-hidden="true">#</a> Impact</h2><p>ONLY change UI behavior for <code>guest</code> and <code>local_public</code> users. This will make UI behavior not consistent for all users.</p>',8);function f(m,g){const o=i("RouterLink");return r(),n("div",null,[h,e("ul",null,[u,e("li",null,[t("Request: "),d(o,{to:"/features/0001-show-dialog-to-clear-current-whiteboard-data-before-exiting-ezwrite.html"},{default:l(()=>[t("FR-0001")]),_:1})]),_,b,p]),w])}const v=a(s,[["render",f],["__file","0001-show-dialog-to-clear-current-whiteboard-data-before-exiting-ezwrite.html.vue"]]);export{v as default};
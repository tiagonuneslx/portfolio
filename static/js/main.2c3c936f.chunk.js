(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"react":{"name":"React","logoSrc":"react_logo.svg"},"bootstrap":{"name":"Bootstrap 4","logoSrc":"bootstrap_logo.jpg"},"node":{"name":"Node.js","logoSrc":"node_logo.png"},"web":{"name":"HTML 5, CSS 3, Javascript","logoSrc":"web_logo.png"},"django":{"name":"Django","logoSrc":"django_logo.jpg"},"python":{"name":"Python 3","logoSrc":"python_logo.jpg"},"vuejs":{"name":"Vue.js","logoSrc":"vuejs_logo.png"},"bulma":{"name":"Bulma","logoSrc":"bulma_logo.png"},"android":{"name":"Android Native","logoSrc":"android_logo.png"},"kotlin":{"name":"Kotlin","logoSrc":"kotlin_logo.png"},"gradle":{"name":"Gradle","logoSrc":"gradle_logo.png"},"materialdesign":{"name":"Material Design","logoSrc":"materialdesign_logo.jpg"},"laravel":{"name":"Laravel","logoSrc":"laravel_logo.png"},"php":{"name":"PHP","logoSrc":"php_logo.png"}}')},47:function(e){e.exports=JSON.parse('[{"name":"Kitchen Management App","description":"A sample Android app I\'m building to practice Android development in Kotlin, and to try out all the new architecture components and some useful libraries.","thumbnailSrc":"gestaocozinha_thumbnail.png","codeUrl":"https://github.com/tiagonuneslx/gestao-da-cozinha","technologies":["android","kotlin","gradle","materialdesign"]},{"name":"Open Day Platform for the University of Algarve","description":"The winning project my team and I built as a college assignment, which was chosen to be used to manage the Open Day for our university (a day in which outsiders come and participate in activities, to get familiar with the university). I developed the winning UI design using Vue.js, which should then be used by all groups of 8 as the pillar for the application. In this project, I was assigned to build the registration of groups and individuals in the activities. Our platform ended up winning the contest, and is currently being used by the University of Algarve, Faro. I\'m only allowed to share the code for the high fidelity prototype.","thumbnailSrc":"openday_thumbnail.png","codeUrl":"https://github.com/tiagonuneslx/dia_aberto_frontend","technologies":["django","python","vuejs","web","bulma"]},{"name":"Online Portfolio","description":"A project I built in my spare time to show off my projects and experience and practice React and Bootstrap.","thumbnailSrc":"portfolio_thumbnail.png","codeUrl":"https://github.com/tiagonuneslx/portfolio","liveUrl":"https://tiagonuneslx.github.io/portfolio","technologies":["react","node","web","bootstrap"]},{"name":"e-Commerce websites","description":"A bunch of web apps I built with the Laravel framework in college.","thumbnailSrc":"daw_thumbnail.png","codeUrl":"https://github.com/tiagonuneslx/daw","technologies":["laravel","php","web","bootstrap"]}]')},57:function(e,t,a){e.exports=a(75)},67:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),l=a.n(r),i=a(21),c=a(6),s=a(84),m=a(82),g=a(81),p=a(85);function u(){return o.a.createElement(p.a,{variant:"success"},"Home")}var d=a(47),h=a(24),b=a(83),f=a(80),v=a(38),y=a(48),E=(a(67),a(49));function w(){function e(e){e.currentTarget.getElementsByTagName("img")[0].style.opacity=.4,e.currentTarget.getElementsByClassName("urls-buttons")[0].style.opacity=1}function t(e){e.currentTarget.getElementsByTagName("img")[0].style.opacity=1,e.currentTarget.getElementsByClassName("urls-buttons")[0].style.opacity=0}return o.a.createElement("div",null,d.map((function(a,n){return o.a.createElement("div",{className:"card mb-3",onMouseOver:e,onMouseLeave:t},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-lg-5 image-container",style:{minHeight:"200px"}},o.a.createElement("div",{className:"row h-100 center-vertically urls-buttons"},o.a.createElement("div",{className:"col-sm center-vertically text-center"},a.liveUrl?o.a.createElement("a",{href:a.liveUrl,class:"btn btn-primary mr-1"},o.a.createElement(v.a,{icon:y.a,className:"mr-1"}),"Visit Website"):o.a.createElement("span",null),a.codeUrl?o.a.createElement("a",{href:a.codeUrl,class:"btn btn-light ml-1",style:{border:"1px solid lightgray"}},o.a.createElement(v.a,{icon:E.a,className:"mr-1"}),"View Source Code"):o.a.createElement("span",null))),o.a.createElement("img",{src:"/portfolio/projects_thumbnails/"+a.thumbnailSrc,alt:a.name+" thumbnail"})),o.a.createElement("div",{className:"col-sm"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},a.name),o.a.createElement("p",{className:"card-text"},a.description),a.technologies.map((function(e){return h[e]?o.a.createElement(b.a,{placement:"top",overlay:o.a.createElement(f.a,null,h[e].name)},o.a.createElement("img",{src:"/portfolio/technologies_logos/"+h[e].logoSrc,alt:h[e].name+" logo",style:{width:"56px",height:"56px"}})):o.a.createElement("span",null)}))))))})))}function S(){return o.a.createElement(p.a,{variant:"info"},"Interests")}function j(){return o.a.createElement(i.a,{basename:"/portfolio"},o.a.createElement(s.a,{bg:"dark",variant:"dark"},o.a.createElement(s.a.Brand,{as:i.b,to:"/"},"Portfolio"),o.a.createElement(m.a,{className:"mr-auto"},o.a.createElement(m.a.Link,{as:i.c,exact:!0,to:"/"},"Home"),o.a.createElement(m.a.Link,{as:i.c,to:"/projects"},"Projects"),o.a.createElement(m.a.Link,{as:i.c,to:"/interests"},"Interests"))),o.a.createElement(g.a,{className:"mt-4"},o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/"},o.a.createElement(u,null)),o.a.createElement(c.a,{path:"/projects"},o.a.createElement(w,null)),o.a.createElement(c.a,{path:"/interests"},o.a.createElement(S,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73),a(74);l.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.2c3c936f.chunk.js.map
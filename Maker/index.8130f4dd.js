!function(){"use strict";function e(e){this.type=e}e.prototype.init=function(){var e=this,t=function(t){var a=e.mediaQueries[t],r=String.prototype.split.call(a,","),i=window.matchMedia(r[0]),o=r[1],s=Array.prototype.filter.call(e.оbjects,(function(e){return e.breakpoint===o}));i.addListener((function(){n.mediaHandler(i,s)})),e.mediaHandler(i,s)},n=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(var a=0;a<this.nodes.length;a++){var r=this.nodes[a],i=r.dataset.da.trim().split(","),o={};o.element=r,o.parent=r.parentNode,o.destination=document.querySelector(i[0].trim()),o.breakpoint=i[1]?i[1].trim():"767",o.place=i[2]?i[2].trim():"last",o.index=this.indexInParent(o.parent,o.element),this.оbjects.push(o)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(var s=0;s<this.mediaQueries.length;s++)t(s)},e.prototype.mediaHandler=function(e,t){if(e.matches)for(var n=0;n<t.length;n++){var a=t[n];a.index=this.indexInParent(a.parent,a.element),this.moveTo(a.place,a.element,a.destination)}else for(var r=t.length-1;r>=0;r--){var i=t[r];i.element.classList.contains(this.daClassname)&&this.moveBack(i.parent,i.element,i.index)}},e.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){var n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new e("max").init()}();
//# sourceMappingURL=index.8130f4dd.js.map

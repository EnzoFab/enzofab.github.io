(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1109664"],{"0481":function(t,e,i){"use strict";var r=i("23e7"),n=i("a2bf"),a=i("7b0b"),s=i("50c4"),o=i("a691"),c=i("65f0");r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=a(this),i=s(e.length),r=c(e,0);return r.length=n(r,e,e,i,0,void 0===t?1:o(t)),r}})},"0be7":function(t,e,i){t.exports=i.p+"img/carousel_1.01dd234f.png"},"10d2":function(t,e,i){"use strict";var r=i("8dd9");e["a"]=r["a"]},1766:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{hover:"",width:"100%"},nativeOn:{click:function(e){return e.preventDefault(),t.$emit("project::displayMore",t.projectId)}}},[r("v-card-text",{staticClass:"pt-0",staticStyle:{width:"100%"}},[r("h3",{staticClass:"display-1 text--primary pb-1 text-center grey--text text--darken-1"},[t._v(" "+t._s(t.title)+" ")]),t.image?r("v-img",{attrs:{src:i("1771")("./"+t.image),"aspect-ratio":"1.6",contain:""}}):r("div",{staticClass:"pa-3 text-center"},[r("v-icon",{attrs:{color:"grey lighten-4","x-large":""}},[t._v("fas fa-briefcase")])],1),t.topic?r("div",{staticClass:"pt-1 pb-2"},[r("v-chip",{attrs:{color:t.topic.color,dark:"",label:"",outlined:"",disabled:t.isActive},on:{click:function(e){return e.stopPropagation(),t.selectTopic(t.topic)}}},[t.topic.icon?r("v-icon",{attrs:{left:"",color:t.topic.color}},[t._v(t._s(t.topic.icon))]):t._e(),r("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.topic.label))])],1)],1):t._e(),r("div",{staticClass:"text--primary grey--text text--darken-1"},[t._v(" "+t._s(t.teaser)+" ")]),r("div",{domProps:{innerHTML:t._s(t.teaserHtml)}}),t.keyWords.length>0?r("div",{staticClass:"pt-2"},t._l(t.keyWords,(function(e){return r("v-chip",{key:e,staticClass:"mr-1 mt-1",attrs:{label:"",small:"",color:"green",dark:"",disabled:t.isUsed(e)},on:{click:function(i){return i.stopPropagation(),t.addKeyword(e)}}},[t._v(t._s(e))])})),1):t._e()],1)],1)},n=[],a=(i("a9e3"),{name:"Project",props:{projectId:[String,Number],title:String,subtitle:String,teaser:String,teaserHtml:String,image:String,link:String,topic:Object,keyWords:{type:Array,default:function(){return[]}}},methods:{isUsed:function(t){return this.$store.getters.isKeywordActive(t)},selectTopic:function(t){this.$store.commit("selectNewTopic",t)},addKeyword:function(t){this.$store.commit("addActiveKeyword",t)}},computed:{isActive:function(){return this.$store.getters.isTopicActive(this.topic)}}}),s=a,o=i("2877"),c=i("6544"),l=i.n(c),d=i("b0af"),u=i("99d9"),h=i("cc20"),p=i("132d"),g=i("adda"),f=Object(o["a"])(s,r,n,!1,null,null,null);e["default"]=f.exports;l()(f,{VCard:d["a"],VCardText:u["a"],VChip:h["a"],VIcon:p["a"],VImg:g["a"]})},1771:function(t,e,i){var r={"./banner.jpg":"4c4a","./images/aniki/cover.png":"e470","./images/blablapharma/cover.png":"d7d3","./images/mutellemotards/cover.jpg":"d23c","./images/prello/cover.png":"bdce","./images/sop/cover.png":"f351","./images/valleedesenfants/carousel_1.png":"0be7","./images/valleedesenfants/carousel_2.png":"49c4","./images/valleedesenfants/carousel_3.png":"cff6","./images/valleedesenfants/cover.png":"7ad6","./style/main.scss":"3ed1"};function n(t){var e=a(t);return i(e)}function a(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=a,t.exports=n,n.id="1771"},"24b2":function(t,e,i){"use strict";i("a9e3");var r=i("80d2"),n=i("2b0e");e["a"]=n["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r["e"])(this.height),i=Object(r["e"])(this.minHeight),n=Object(r["e"])(this.minWidth),a=Object(r["e"])(this.maxHeight),s=Object(r["e"])(this.maxWidth),o=Object(r["e"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),a&&(t.maxHeight=a),s&&(t.maxWidth=s),o&&(t.width=o),t}}})},"25a8":function(t,e,i){},"36a7":function(t,e,i){},"37c6":function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("4160"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("acd8"),i("c7cd"),i("159b");var r=i("2fa7"),n=(i("6ece"),i("0789")),a=i("a9ad"),s=i("fe6c"),o=i("a452"),c=i("7560"),l=i("80d2"),d=i("58df");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p=Object(d["a"])(a["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]),g=p.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(r["a"])(t,this.$vuetify.rtl?"right":"left",Object(l["e"])(this.normalizedValue,"%")),Object(r["a"])(t,"width",Object(l["e"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["c"]:n["e"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["e"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(l["k"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(r["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e["a"]=g},"3ed1":function(t,e,i){},4069:function(t,e,i){var r=i("44d2");r("flat")},"49c4":function(t,e,i){t.exports=i.p+"img/carousel_2.31be96ef.png"},"4c4a":function(t,e,i){t.exports=i.p+"img/banner.32f29e62.jpg"},"615b":function(t,e,i){},"6ece":function(t,e,i){},"6fe5":function(t,e,i){var r=i("da84"),n=i("58a8").trim,a=i("5899"),s=r.parseFloat,o=1/s(a+"-0")!==-1/0;t.exports=o?function(t){var e=n(String(t)),i=s(e);return 0===i&&"-"==e.charAt(0)?-0:i}:s},"7ad6":function(t,e,i){t.exports=i.p+"img/cover.7f1adab2.png"},"8dd9":function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");var r=i("2fa7"),n=(i("25a8"),i("7e2b")),a=i("a9ad"),s=(i("a9e3"),i("e25e"),i("2b0e")),o=s["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t?{}:isNaN(parseInt(t))?{}:Object(r["a"])({},"elevation-".concat(this.elevation),!0)}}}),c=i("24b2"),l=i("7560"),d=i("58df");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=Object(d["a"])(n["a"],a["a"],o,c["a"],l["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,{},this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8efc":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var r=i("b0af"),n=i("80d2"),a=Object(n["g"])("v-card__actions"),s=Object(n["g"])("v-card__subtitle"),o=Object(n["g"])("v-card__text"),c=Object(n["g"])("v-card__title");r["a"]},a2bf:function(t,e,i){"use strict";var r=i("e8b5"),n=i("50c4"),a=i("f8c2"),s=function(t,e,i,o,c,l,d,u){var h,p=c,g=0,f=!!d&&a(d,u,3);while(g<o){if(g in i){if(h=f?f(i[g],g,e):i[g],l>0&&r(h))p=s(t,e,h,n(h.length),p,l-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[p]=h}p++}g++}return p};t.exports=s},a452:function(t,e,i){"use strict";var r=i("2fa7"),n=i("2b0e");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return n["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(r["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r["a"])({},t,(function(t){this.internalLazyValue=t}))})}var s=a();e["a"]=s},acd8:function(t,e,i){var r=i("23e7"),n=i("6fe5");r({global:!0,forced:parseFloat!=n},{parseFloat:n})},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8efc");var r=i("90a2"),n=(i("36a7"),i("24b2")),a=i("58df"),s=Object(a["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=s,c=i("d9bd");e["a"]=o.extend({name:"v-img",directives:{intersect:r["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},methods:{init:function(t,e,i){if(i||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["b"])("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(c["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=t.naturalHeight,a=t.naturalWidth;n||a?(e.naturalWidth=a,e.calculatedAspectRatio=a/n):null!=i&&setTimeout(r,i)};r()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=[{name:"intersect",options:this.options,value:this.init}],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},b0af:function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("0481"),i("4160"),i("4069"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("159b");var r=i("2fa7"),n=(i("615b"),i("10d2")),a=i("2b0e"),s=i("37c6"),o=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),c=i("1c87"),l=i("58df");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(i,!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=Object(l["a"])(o,c["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return u({"v-card":!0},c["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var t=u({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},bdce:function(t,e,i){t.exports=i.p+"img/cover.5f51cb4f.png"},c7cd:function(t,e,i){"use strict";var r=i("23e7"),n=i("857a"),a=i("eae9");r({target:"String",proto:!0,forced:a("fixed")},{fixed:function(){return n(this,"tt","","")}})},cff6:function(t,e,i){t.exports=i.p+"img/carousel_3.06fad14f.png"},d23c:function(t,e,i){t.exports=i.p+"img/cover.c2d936ef.jpg"},d7d3:function(t,e,i){t.exports=i.p+"img/cover.1bf7e5a1.png"},e470:function(t,e,i){t.exports=i.p+"img/cover.c3ea4e11.png"},f351:function(t,e,i){t.exports=i.p+"img/cover.9ba7acc6.png"},fe6c:function(t,e,i){"use strict";i.d(e,"b",(function(){return s}));var r=i("2b0e"),n=i("80d2"),a={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r["a"].extend({name:"positionable",props:t.length?Object(n["i"])(a,t):a})}e["a"]=s()}}]);
//# sourceMappingURL=chunk-d1109664.987cbafb.js.map
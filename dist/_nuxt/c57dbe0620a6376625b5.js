(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{231:function(t,n,e){"use strict";e(236);var a=e(64),i=e.n(a),r=e(237),o=e.n(r)()(i.a),c={props:{image:{type:Object,required:!0},alt:{type:String,default:"Missing caption"},width:{default:200,type:Number}},computed:{imageUrl:function(){return o.image(this.image).width(this.width)}}},s=e(12),d=Object(s.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{src:this.imageUrl,alt:this.alt}})},[],!1,null,null,null);d.options.__file="SanityImage.vue";n.a=d.exports},233:function(t,n,e){var a=e(242);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(18).default)("1abc4264",a,!0,{sourceMap:!1})},234:function(t,n,e){var a=e(244);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(18).default)("64467644",a,!0,{sourceMap:!1})},235:function(t,n,e){"use strict";e.d(n,"a",function(){return r});e(32),e(65),e(66);var a=e(24),i=e.n(a);function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["es","en"];if(Array.isArray(t))return t.map(function(t){return r(t,n)});if("object"===i()(t)){if(/^locale[A-Z]/.test(t._type)){var e=n.find(function(n){return t[n]});return t[e]}return Object.keys(t).reduce(function(e,a){return e[a]=r(t[a],n),e},{})}return t}},241:function(t,n,e){"use strict";var a=e(233);e.n(a).a},242:function(t,n,e){(t.exports=e(17)(!1)).push([t.i,"\n.root[data-v-524221a4] {\n  width: 20em;\n}\n.mainImage[data-v-524221a4] {\n  display: block;\n  width: 100%;\n  height: auto;\n  margin-bottom: 16px;\n  margin-bottom: 1rem;\n}\n.list[data-v-524221a4] {\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 0;\n  padding: 0;\n}\n.item[data-v-524221a4] {\n  display: block;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n.item[data-v-524221a4]:first-child {\n  display: none;\n}\n.image[data-v-524221a4] {\n  max-width: 100%;\n}\n.activeImage[data-v-524221a4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, .3);\n}\n.activeImage .image[data-v-524221a4] {\n  max-width: 90%;\n  max-height: 90%;\n}\n.close[data-v-524221a4] {\n  cursor: pointer;\n  position: absolute;\n  width: 4em;\n  height: 4em;\n  top: 1em;\n  right: 1em;\n}\n",""])},243:function(t,n,e){"use strict";var a=e(234);e.n(a).a},244:function(t,n,e){(t.exports=e(17)(!1)).push([t.i,"\n.root del {\n  font-weight: 100;\n  opacity: 0.5;\n}\n",""])},246:function(t,n,e){"use strict";var a=e(231),i={components:{SanityImage:a.a},props:{images:{type:Array,required:!0}},data:function(){return{mainImageWidth:500,imageWidth:200,activeImage:null}},computed:{mainImage:function(){return(void 0).images[0]}},methods:{setActiveImage:function(t){this.activeImage=t},close:function(){this.activeImage=null}}},r=(e(241),e(12)),o=Object(r.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"root"},[e("div",{staticStyle:{cursor:"pointer"},on:{click:function(n){t.setActiveImage(t.images[0])}}},[e("SanityImage",{staticClass:"mainImage",attrs:{image:t.images[0],width:t.mainImageWidth}})],1),t._v(" "),e("ul",{staticClass:"list"},t._l(t.images,function(n){return e("li",{key:n._key,staticClass:"item",on:{click:function(e){t.setActiveImage(n)}}},[e("SanityImage",{staticClass:"image",attrs:{image:n,width:t.imageWidth}})],1)})),t._v(" "),t.activeImage?e("div",{staticClass:"activeImage"},[e("svg",{staticClass:"close",attrs:{viewBox:"0 0 96 96"},on:{keyup:function(n){return"button"in n||!t._k(n.keyCode,"esc",27,n.key,"Escape")?t.close(n):null},click:t.close}},[e("polygon",{attrs:{fill:"currentColor",points:"96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "}})]),t._v(" "),e("SanityImage",{staticClass:"image",attrs:{image:t.activeImage,width:"1000"}})],1):t._e()])},[],!1,null,"524221a4",null);o.options.__file="ImageViewer.vue";n.a=o.exports},247:function(t,n,e){"use strict";var a={props:{price:{type:Object,required:!0}}},i=(e(243),e(12)),r=Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"root"},["discount"===t.price._type?e("span",[e("del",[t._v("$"+t._s(t.price.price))]),t._v(" "),e("strong",[t._v("$"+t._s(t.price.price*(1-t.price.discount/100)))])]):t._e()])},[],!1,null,null,null);r.options.__file="Price.vue";n.a=r.exports},256:function(t,n,e){var a=e(285);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(18).default)("2ce4abf5",a,!0,{sourceMap:!1})},259:function(t,n){},284:function(t,n,e){"use strict";var a=e(256);e.n(a).a},285:function(t,n,e){(t.exports=e(17)(!1)).push([t.i,"\n.price[data-v-c040a3e0] {\n  line-height: 1.5em;\n}\n@media only screen and (min-width: 500px) {\n.container[data-v-c040a3e0] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n}\n@media only screen and (max-width: 1000px) {\n.container[data-v-c040a3e0] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.sidebar[data-v-c040a3e0] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n}\n@media only screen and (min-width: 500px) {\n.price[data-v-c040a3e0] {\n    display: block;\n    font-size: 5em;\n    margin-right: 2rem;\n}\n.snipcart-add-item[data-v-c040a3e0] {\n    font-size: 2em;\n}\n.image-viewer[data-v-c040a3e0] {\n    min-width: 25vw;\n    max-width: 20rem;\n}\n.sidebar[data-v-c040a3e0] {\n    margin-right: 1em;\n    margin-bottom: 1em;\n}\n}\n.blurb[data-v-c040a3e0] {\n  font-size: 1.5em;\n  margin: 1em 0;\n}\n.price-and-button[data-v-c040a3e0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.categories[data-v-c040a3e0] {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0;\n}\n.categories[data-v-c040a3e0] li {\n  display: block;\n  margin-right: 0.5em;\n  padding: 0;\n  font-weight: 600;\n}\n.categories[data-v-c040a3e0] a {\n  text-decoration: none;\n  display: block;\n  padding: 1em 0;\n}\n.categories[data-v-c040a3e0] img {\n  display: block;\n}\n.snipcart-add-item[data-v-c040a3e0] {\n  border: none;\n  color: #000;\n  background-color: #fff;\n  border: 2px solid #000;\n  padding: 1em;\n  font-size: 1.2em;\n  margin-right: 1em;\n  outline: none;\n}\n.snipcart-add-item[data-v-c040a3e0]:active {\n  background-color: #000;\n  color: #fff;\n}\n.links[data-v-c040a3e0] {\n  padding-top: 15px;\n}\n.vendor[data-v-c040a3e0] {\n  display: inline-block;\n}\n.vendorLogo[data-v-c040a3e0] {\n  display: inline-block;\n  margin: 0 auto;\n  max-height: 1.5em;\n  max-width: 8em;\n}\n.body[data-v-c040a3e0] {\n  margin: 1em 0;\n  font-size: 1em;\n  line-height: 1.3em;\n  max-width: 40em;\n}\n",""])},292:function(t,n,e){"use strict";e.r(n);var a=e(64),i=e.n(a),r=e(235),o=e(258),c=e.n(o),s=e(246),d=e(231),l=e(247),u=e(248),m=e.n(u),p={asyncData:function(t){return i.a.fetch('\n  *[_type == "product" && slug.current == $product][0] {\n    ...,\n    categories[]->,\n    vendor->\n  }\n',t.route.params).then(function(t){return{product:Object(r.a)(t)}})},components:{SanityImage:d.a,ImageViewer:s.a,Price:l.a},data:function(){return{blurb:"No blurb text to show",body:!1}},computed:{formattedPrice:function(){return m()(this.product.defaultProductVariant.price).format("$0.00")},bodyHtml:function(){return this.product&&this.product.body?c()({blocks:this.product.body,dataset:i.a.clientConfig.dataset,projectId:i.a.clientConfig.projectId}):"…"}}},g=(e(284),e(12)),v=Object(g.a)(p,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{key:t.product._id},[e("ul",{staticClass:"categories"},[e("li",[e("router-link",{staticClass:"vendor",attrs:{to:"/vendor/"+t.product.vendor.slug.current}},[e("SanityImage",{staticClass:"vendorLogo",attrs:{image:t.product.vendor.logo}})],1),t._v("\n      "+t._s(t.product.vendor.title)+"\n    ")],1),t._v(" "),t._l(t.product.categories,function(n){return e("li",{key:n._id},[e("router-link",{attrs:{to:"/category/"+n.slug.current}},[t._v("\n        "+t._s(n.title)+"\n      ")])],1)})],2),t._v(" "),e("div",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[t._v(t._s(t.product.title))]),t._v(" "),t.product.blurb?e("p",{staticClass:"blurb"},[t._v(t._s(t.product.blurb))]):t._e(),t._v(" "),e("div",{staticClass:"sub-head"},[e("div",{staticClass:"price-and-button"},[e("div",{staticClass:"price"},[t._v(t._s(t.formattedPrice))]),t._v(" "),e("button",{staticClass:"snipcart-add-item",attrs:{"data-item-name":t.product.title,"data-item-price":t.product.defaultProductVariant.price,"data-item-id":t.product._id,type:"button","data-item-url":"/"}},[t._v("\n            Add to cart\n          ")])])]),t._v(" "),e("div",{staticClass:"body",domProps:{innerHTML:t._s(t.bodyHtml)}})]),t._v(" "),e("div",{staticClass:"sidebar"},[e("ImageViewer",{staticClass:"image-viewer",attrs:{images:t.product.defaultProductVariant.images}})],1)])])},[],!1,null,"c040a3e0",null);v.options.__file="_product.vue";n.default=v.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-address","components-zaiui-common-basics-orderdetail"],{"11e0":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},2581:function(t,i,a){var e=a("9f64");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("f3df79f6",e,!0,{sourceMap:!1,shadowMode:!1})},"388c":function(t,i,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("8240")),s=e(a("3352")),o={components:{barTitle:n.default},data:function(){return{}},onLoad:function(){},onReady:function(){s.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{editAddressTap:function(){uni.navigateTo({url:"/pages/my/edit-address"})},AddAddressTap:function(){uni.navigateTo({url:"/pages/my/add-address"})}}};i.default=o},"3b16":function(t,i,a){var e=a("11e0");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("36ff725a",e,!0,{sourceMap:!1,shadowMode:!1})},"3bd6":function(t,i,a){"use strict";a.r(i);var e=a("4d56"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},"4d56":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},"550d":function(t,i,a){"use strict";var e=a("3b16"),n=a.n(e);n.a},"70a4":function(t,i,a){"use strict";var e=a("2581"),n=a.n(e);n.a},8240:function(t,i,a){"use strict";a.r(i);var e=a("b2d3"),n=a("3bd6");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("550d");var o=a("f0c5"),c=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"1f1d0f19",null,!1,e["a"],void 0);i["default"]=c.exports},9964:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("我的地址")])],2),a("v-uni-view",{staticClass:"bg-white zaiui-address-card-view"},[a("v-uni-view",{staticClass:"flex text-black text-lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex-sub text-left"},[t._v("仔仔")]),a("v-uni-view",{staticClass:"flex-sub text-right"},[t._v("138****8000")])],1),a("v-uni-view",{staticClass:"margin-tb-sm text-gray",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[t._v("重庆是 渝北区 网络购买专用虚拟地址")]),a("v-uni-view",{staticClass:"zaiui-line-view"}),a("v-uni-view",{staticClass:"zaiui-right-view"},[a("v-uni-text",{staticClass:"cuIcon-write",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[t._v("编辑")]),a("v-uni-text",{staticClass:"cuIcon-delete"},[t._v("删除")])],1)],1),a("v-uni-view",{staticClass:"bg-white zaiui-address-card-view"},[a("v-uni-view",{staticClass:"flex text-black text-lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex-sub text-left"},[t._v("仔仔1")]),a("v-uni-view",{staticClass:"flex-sub text-right"},[t._v("138****8000")])],1),a("v-uni-view",{staticClass:"margin-tb-sm text-gray",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[t._v("重庆是 渝北区 网络购买专用虚拟地址1")]),a("v-uni-view",{staticClass:"zaiui-line-view"}),a("v-uni-view",{staticClass:"zaiui-right-view"},[a("v-uni-text",{staticClass:"cuIcon-write",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editAddressTap.apply(void 0,arguments)}}},[t._v("编辑")]),a("v-uni-text",{staticClass:"cuIcon-delete"},[t._v("删除")])],1)],1),a("v-uni-view",{staticClass:"bg-white wecanui-footer-fixed foot-pb"},[a("v-uni-view",{staticClass:"flex flex-direction"},[a("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.AddAddressTap.apply(void 0,arguments)}}},[t._v("添加新地址")])],1)],1)],1)},n=[]},"9f64":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-address-card-view[data-v-204854bf]{position:relative;margin:%?36.36?% %?27.27?%;border-radius:%?10.9?%;padding:%?18.18?%}.zaiui-address-card-view .zaiui-line-view[data-v-204854bf]{position:relative;background:#f9f9f9;margin-bottom:%?20?%;height:%?2?%}.zaiui-address-card-view .zaiui-right-view[data-v-204854bf]{position:relative;text-align:right}.zaiui-address-card-view .zaiui-right-view uni-text[data-v-204854bf]:before{margin-right:5px}.zaiui-address-card-view .zaiui-right-view uni-text + uni-text[data-v-204854bf]{margin-left:20px}.wecanui-footer-fixed .flex-direction[data-v-204854bf]{padding:%?18.18?%}",""]),t.exports=i},a457:function(t,i,a){"use strict";a.r(i);var e=a("9964"),n=a("f937");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("70a4");var o=a("f0c5"),c=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"204854bf",null,!1,e["a"],void 0);i["default"]=c.exports},b2d3:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},f937:function(t,i,a){"use strict";a.r(i);var e=a("388c"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a}}]);
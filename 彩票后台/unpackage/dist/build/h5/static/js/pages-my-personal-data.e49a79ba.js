(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-personal-data"],{"19e7":function(t,a,i){"use strict";i.r(a);var e=i("9a3d"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},"298f":function(t,a,i){"use strict";i.r(a);var e=i("bb10"),n=i("19e7");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("981f");var c,o=i("f0c5"),u=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"07a26db6",null,!1,e["a"],c);a["default"]=u.exports},"302d":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-07a26db6]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-07a26db6]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-07a26db6]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-07a26db6]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-07a26db6]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-07a26db6]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-07a26db6]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"3e44":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("个人资料")])],2),i("v-uni-view",{staticClass:"bg-white solid-top zaiui-head-box"},[i("v-uni-view",{staticClass:"text-center margin-bottom-sm"},[i("v-uni-text",{staticClass:"text-black"},[t._v("完成")]),i("v-uni-text",{staticClass:"text-orange text-xxl"},[t._v("100%")]),i("v-uni-text",{staticClass:"text-black"},[t._v("，太棒啦！")])],1),i("v-uni-progress",{staticClass:"zaiui-progress-radius",attrs:{percent:"100",active:!0,"stroke-width":"10",activeColor:"#f37b1d"}})],1),i("v-uni-view",{staticClass:"cu-list menu sm-border margin-top"},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[t._v("头像")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"cu-avatar round sm",style:[{backgroundImage:"url("+t.avatar_img+")"}]})],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editNameTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("昵称")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("仔仔")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[t._v("性别")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-picker",{attrs:{value:t.sexIndex,range:t.sexPicker},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.sexPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker text-gray"},[t._v(t._s(t.sexIndex>-1?t.sexPicker[t.sexIndex]:"男"))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[t._v("出生日期")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-picker",{attrs:{mode:"date",value:t.dateValue,start:"1920-01-01",end:"2020-05-01"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.datePickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker text-gray"},[t._v(t._s(t.dateValue))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.synopsisTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("个人简介")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("交个朋友")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu sm-border margin-top"},[i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editPhoneTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("手机号")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("138****8000")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.regionTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("地区")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-gray"},[t._v("太阳")])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.addressTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("收货地址")])],1),i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editContactCardsTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v("联系卡")])],1)],1),i("v-uni-view",{staticClass:"cu-list menu sm-border margin-top"},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[t._v("注销账户")])],1)],1)],1)},s=[]},"595b":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-head-box[data-v-a5463c76]{position:relative;padding:%?45.45?% %?90.9?%}.zaiui-btn-view[data-v-a5463c76]{position:fixed;width:100%;bottom:0}.zaiui-btn-view .flex[data-v-a5463c76]{padding:%?18.18?%}",""]),t.exports=a},8825:function(t,a,i){var e=i("302d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("93adf90e",e,!0,{sourceMap:!1,shadowMode:!1})},"8b30":function(t,a,i){"use strict";i.r(a);var e=i("aad0"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},"981f":function(t,a,i){"use strict";var e=i("8825"),n=i.n(e);n.a},"9a3d":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},a67f:function(t,a,i){"use strict";var e=i("eb01"),n=i.n(e);n.a},aa64:function(t,a,i){"use strict";i.r(a);var e=i("3e44"),n=i("8b30");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("a67f");var c,o=i("f0c5"),u=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"a5463c76",null,!1,e["a"],c);a["default"]=u.exports},aad0:function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("298f")),s=e(i("b851")),c={components:{barTitle:n.default},data:function(){return{avatar_img:"/static/images/avatar/1.jpg",sexIndex:0,sexPicker:["男","女"],dateValue:"1945-10-01"}},onLoad:function(){},onReady:function(){s.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{editNameTap:function(){uni.navigateTo({url:"/pages/my/edit-name"})},sexPickerChange:function(t){this.sexIndex=t.detail.value},datePickerChange:function(t){this.dateValue=t.detail.value},synopsisTap:function(){uni.navigateTo({url:"/pages/my/edit-synopsis"})},addressTap:function(){uni.navigateTo({url:"/pages/my/address"})},editPhoneTap:function(){uni.navigateTo({url:"/pages/my/edit-phone"})},editContactCardsTap:function(){uni.navigateTo({url:"/pages/my/contact-cards"})},regionTap:function(){uni.navigateTo({url:"/pages/my/region"})}}};a.default=c},bb10:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box"},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},s=[]},eb01:function(t,a,i){var e=i("595b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("940b2244",e,!0,{sourceMap:!1,shadowMode:!1})}}]);
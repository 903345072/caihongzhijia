(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-list"],{"19e7":function(t,i,a){"use strict";a.r(i);var e=a("9a3d"),o=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=o.a},"298f":function(t,i,a){"use strict";a.r(i);var e=a("bb10"),o=a("19e7");for(var s in o)"default"!==s&&function(t){a.d(i,t,(function(){return o[t]}))}(s);a("981f");var n,r=a("f0c5"),u=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"07a26db6",null,!1,e["a"],n);i["default"]=u.exports},"302d":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-07a26db6]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-07a26db6]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-07a26db6]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-07a26db6]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-07a26db6]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-07a26db6]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-07a26db6]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},"4b02":function(t,i,a){"use strict";a.r(i);var e=a("50d0"),o=a("4e85");for(var s in o)"default"!==s&&function(t){a.d(i,t,(function(){return o[t]}))}(s);a("7b14");var n,r=a("f0c5"),u=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"42b33552",null,!1,e["a"],n);i["default"]=u.exports},"4e85":function(t,i,a){"use strict";a.r(i);var e=a("86e9"),o=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=o.a},"50d0":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white"},on:{rightTap:function(i){arguments[0]=i=t.$handleEvent(i),t.barEditTap.apply(void 0,arguments)}}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("我买到的")]),a("template",{attrs:{slot:"right"},slot:"right"},[t.goods_checked?a("v-uni-text",[t._v("完成")]):a("v-uni-text",[t._v("编辑")])],1)],2),a("v-uni-view",{staticClass:"zaiui-sort-grid-box"},[a("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-x":!0}},[t._l(t.sort_grid_data,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"scroll-item",attrs:{id:["sortGrid"+(e+1)]}},[a("v-uni-view",{staticClass:"cu-avatar radio",style:[{backgroundImage:"url("+i.img+")"}]}),a("v-uni-view",{staticClass:"text-sm text"},[t._v(t._s(i.title))])],1)]}))],2)],1),a("v-uni-view",{staticClass:"bg-white zaiui-nav-tab-view"},[a("v-uni-scroll-view",{staticClass:"nav z",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.tab_scroll}},[t._l(t.nav_list,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"cu-item",class:e==t.tab_cur?"select":"",attrs:{"data-id":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSelect.apply(void 0,arguments)}}},[a("v-uni-view",{class:e==t.tab_cur?"text-black":""},[t._v(t._s(i))]),a("v-uni-view",{staticClass:"tab-dot bg-red"})],1)]}))],2)],1),t._l(t.order_list,(function(i,e){return 0==t.tab_cur?[a("v-uni-view",{key:e+"_0",staticClass:"bg-white zaiui-order-tab-view",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detailsTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"shop-title-view"},[a("v-uni-view",{staticClass:"cu-avatar sm round",style:[{backgroundImage:"url("+i.img+")"}]}),a("v-uni-view",{staticClass:"text-black text-cut shop-name"},[t._v(t._s(i.name))]),a("v-uni-text",{staticClass:"text-right text-gray text-sm"},[t._v(t._s(i.status))])],1),t._l(i.goods_list,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"goods-list-view"},[a("v-uni-view",{staticClass:"cu-avatar lg radius",style:[{backgroundImage:"url("+i.img+")"}]}),a("v-uni-view",{staticClass:"goods-info-view"},[a("v-uni-view",{staticClass:"text-black text-cut name"},[t._v(t._s(i.name))]),a("v-uni-view",{staticClass:"text-gray text-sm text-cut introduce"},[t._v(t._s(i.introduce))]),a("v-uni-view",{staticClass:"text-cut tag-view"},[t._l(i.tag,(function(i,e){return[a("v-uni-text",{key:e+"_0",staticClass:"cu-tag sm line-blue radius"},[t._v(t._s(i))])]}))],2),a("v-uni-view",{staticClass:"text-price text-red"},[t._v(t._s(i.price))])],1)],1)]})),a("v-uni-view",{staticClass:"statistics-view"},[a("v-uni-view",{staticClass:"text-black text-sm text-right"},[a("v-uni-text",[t._v("共"+t._s(i.num)+"件")]),1==i.type?a("v-uni-text",[t._v("商品 实付款：")]):t._e(),0==i.type?a("v-uni-text",[t._v("商品 应付款：")]):t._e(),a("v-uni-text",{staticClass:"text-price text-lg"},[t._v(t._s(i.price))])],1)],1),1==i.type?a("v-uni-view",{staticClass:"zaiui-btn-view"},[a("v-uni-button",{staticClass:"cu-btn line-black sm radius"},[t._v("联系卖家")]),a("v-uni-button",{staticClass:"cu-btn line-black sm radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.whereaboutsTap.apply(void 0,arguments)}}},[t._v("查看钱款去向")]),a("v-uni-button",{staticClass:"cu-btn line-red sm radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.appraiseTap.apply(void 0,arguments)}}},[t._v("查看评价")])],1):t._e(),0==i.type?a("v-uni-view",{staticClass:"zaiui-btn-view"},[a("v-uni-button",{staticClass:"cu-btn line-black sm radius"},[t._v("联系卖家")])],1):t._e()],2)]:t._e()})),0!=t.tab_cur?a("v-uni-view",{staticClass:"bg-white zaiui-null-view"},[a("v-uni-view",{staticClass:"img-view"},[a("v-uni-view",{staticClass:"cu-avatar lg round",staticStyle:{"background-image":"url('/static/zaiui/img/aa6.png')"}})],1),a("v-uni-view",{staticClass:"text-sm margin-top-sm"},[t._v("您还没有相关订单哦")])],1):t._e(),0==t.tab_cur?a("v-uni-view",{staticClass:"zaiui-foot-tip-view"},[a("v-uni-view",{staticClass:"img-view"},[a("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url('/static/zaiui/img/acn.png')"}})],1),a("v-uni-view",{staticClass:"text-gray"},[t._v("hi,到底啦~")])],1):t._e()],2)},s=[]},"7b14":function(t,i,a){"use strict";var e=a("af3f"),o=a.n(e);o.a},8577:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={sortGridData:function(){return[{title:"手机保卖",img:"/static/images/home/goods/1.png"},{title:"数码保卖",img:"/static/images/home/goods/2.png"},{title:"欢乐送",img:"/static/images/home/goods/3.png"},{title:"美妆鉴别",img:"/static/images/home/goods/4.png"},{title:"采货节",img:"/static/images/home/goods/5.png"},{title:"测试的",img:"/static/images/home/goods/6.png"},{title:"测试的1",img:"/static/images/home/goods/7.png"},{title:"测试的2",img:"/static/images/home/goods/8.png"}]},navListData:function(){return["全部","待付款","待发货","待收货","待评价","退款","售后"]},orderListData:function(){return[{img:"/static/images/avatar/1.jpg",name:"仔仔的店铺",status:"交易成功",price:"2238.00",num:12,type:1,goods_list:[{img:"/static/images/home/goods/1.png",name:"百度网盘云盘租号在线极速发货 测试个测试的",introduce:"测试副标题的内容",tag:["支持验机","专业质检"],price:"1.00"},{img:"/static/images/home/goods/2.png",name:"苹果x iPhoneX256G无锁99新有 测试个测试的",introduce:"",tag:[],price:"2237.00"}]},{img:"/static/images/avatar/2.jpg",name:"仔仔科技运营部",status:"交易关闭",price:"2199.00",num:1,type:0,goods_list:[{img:"/static/images/home/goods/3.png",name:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",introduce:"",tag:["支持验机","专业质检"],price:"2199.00"}]}]}},o=e;i.default=o},"86e9":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e(a("298f")),s=e(a("8577")),n=e(a("b851")),r={components:{barTitle:o.default},data:function(){return{sort_grid_data:[],nav_list:[],tab_cur:0,tab_scroll:0,order_list:[],goods_checked:!1}},onLoad:function(){this.sort_grid_data=s.default.sortGridData(),this.order_list=s.default.orderListData(),this.nav_list=s.default.navListData()},onReady:function(){n.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{tabSelect:function(t){var i=t.currentTarget.dataset.id;this.tab_cur=i,this.tab_scroll=60*(i-1),uni.pageScrollTo({scrollTop:0,duration:0})},barEditTap:function(){this.goods_checked?this.goods_checked=!1:this.goods_checked=!0},whereaboutsTap:function(){uni.navigateTo({url:"/pages/order/whereabouts"})},appraiseTap:function(){uni.navigateTo({url:"/pages/order/view_appraise"})},detailsTap:function(){uni.navigateTo({url:"/pages/order/details"})}}};i.default=r},8825:function(t,i,a){var e=a("302d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("93adf90e",e,!0,{sourceMap:!1,shadowMode:!1})},"981f":function(t,i,a){"use strict";var e=a("8825"),o=a.n(e);o.a},"9a3d":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},af3f:function(t,i,a){var e=a("c326");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("64ac2706",e,!0,{sourceMap:!1,shadowMode:!1})},bb10:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},s=[]},c326:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-42b33552]{background-color:#fff}.zaiui-sort-grid-box[data-v-42b33552]{position:relative;margin:%?27.27?% 0;width:100%}.zaiui-sort-grid-box .scroll-view[data-v-42b33552]{position:relative;white-space:nowrap;width:100%}.zaiui-sort-grid-box .scroll-view .scroll-item[data-v-42b33552]{display:inline-block;position:relative;text-align:center;margin:0 %?21.81?%;width:%?127.27?%}.zaiui-sort-grid-box .scroll-view .scroll-item[data-v-42b33552]:first-child{margin-left:%?18.18?%}.zaiui-sort-grid-box .scroll-view .scroll-item[data-v-42b33552]:last-child{margin-right:%?18.18?%}.zaiui-sort-grid-box .scroll-view .scroll-item .cu-avatar[data-v-42b33552]{width:%?99.99?%;height:%?99.99?%;border-radius:50%}.zaiui-sort-grid-box .scroll-view .scroll-item .text[data-v-42b33552]{position:relative;padding:%?14.54?% %?18.18?% 0;width:100%}.zaiui-nav-tab-view[data-v-42b33552]{position:-webkit-sticky;position:sticky;padding:%?2?% 0 %?9.09?%;z-index:9999;top:calc(0px + %?101?%);transition:all .25s}.zaiui-nav-tab-view .nav.z .cu-item.select .tab-dot[data-v-42b33552]{height:%?5.45?%}.zaiui-order-tab-view[data-v-42b33552]{position:relative;margin:0 %?27.27?%;margin-top:%?27.27?%;border-radius:%?9.09?%;padding:%?27.27?% %?18.18?%;box-shadow:0 0 %?14.54?% #f1f1f1}.zaiui-order-tab-view[data-v-42b33552]:last-child{margin-bottom:%?27.27?%}.zaiui-order-tab-view .shop-title-view[data-v-42b33552]{position:relative;margin-bottom:%?27.27?%}.zaiui-order-tab-view .shop-title-view .cu-avatar[data-v-42b33552]{position:absolute}.zaiui-order-tab-view .shop-title-view .shop-name[data-v-42b33552]{position:relative;height:%?47.27?%;line-height:%?47.27?%;padding:0 %?199.99?% 0 %?61.81?%}.zaiui-order-tab-view .shop-title-view .text-right[data-v-42b33552]{position:absolute;top:%?7.27?%;right:0}.zaiui-order-tab-view .goods-list-view[data-v-42b33552]{position:relative;margin-top:%?27.27?%}.zaiui-order-tab-view .goods-list-view .cu-avatar[data-v-42b33552]{position:absolute;width:%?158.18?%;height:%?158.18?%}.zaiui-order-tab-view .goods-list-view .goods-info-view[data-v-42b33552]{position:relative;padding-left:%?176.36?%;height:%?158.18?%}.zaiui-order-tab-view .goods-list-view .goods-info-view .name[data-v-42b33552]{position:relative;height:%?36.36?%}.zaiui-order-tab-view .goods-list-view .goods-info-view .introduce[data-v-42b33552]{position:relative;height:%?32.72?%;margin-top:%?9.09?%}.zaiui-order-tab-view .goods-list-view .goods-info-view .tag-view[data-v-42b33552]{position:relative;height:%?30.9?%;margin-top:%?9.09?%}.zaiui-order-tab-view .goods-list-view .goods-info-view .tag-view .cu-tag[data-v-42b33552]{position:relative;top:%?-3.63?%}.zaiui-order-tab-view .goods-list-view .goods-info-view .text-price[data-v-42b33552]{height:%?30.9?%;margin-top:%?9.09?%}.zaiui-order-tab-view .statistics-view[data-v-42b33552]{position:relative;padding:%?18.18?% 0;margin-top:%?18.18?%;border-bottom:%?2?% solid #f3f3f3}.zaiui-order-tab-view .zaiui-btn-view[data-v-42b33552]{position:relative;text-align:right;margin-top:%?18.18?%}.zaiui-order-tab-view .zaiui-btn-view .cu-btn[data-v-42b33552]{background:#fff}.zaiui-order-tab-view .zaiui-btn-view .cu-btn + .cu-btn[data-v-42b33552]{margin-left:%?9.09?%}.zaiui-foot-tip-view[data-v-42b33552]{position:relative;text-align:center;margin-top:%?72.72?%;margin:%?27.27?% 0}.zaiui-foot-tip-view .img-view[data-v-42b33552]{position:relative;margin-bottom:%?9.09?%}.zaiui-foot-tip-view .img-view .cu-avatar[data-v-42b33552]{background:#fff;background-size:cover;background-position:50%}.zaiui-null-view[data-v-42b33552]{position:relative;text-align:center;margin-top:%?72.72?%}.zaiui-null-view .img-view[data-v-42b33552]{position:relative;margin-bottom:%?9.09?%}.zaiui-null-view .img-view .cu-avatar[data-v-42b33552]{width:%?363.63?%;height:%?363.63?%;background:#fff;background-size:cover;background-position:50%}body.?%PAGE?%[data-v-42b33552]{background-color:#fff}",""]),t.exports=i}}]);